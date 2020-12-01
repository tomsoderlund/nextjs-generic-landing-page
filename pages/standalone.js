// External packages used:
//   yarn add react-share react-twitter-embed react-fb-like
import React, { useState } from 'react'
import Link from 'next/link'
import {
  TwitterShareButton, TwitterIcon,
  FacebookShareButton, FacebookIcon,
  LinkedinShareButton, LinkedinIcon,
  EmailShareButton, EmailIcon
} from 'react-share'
import FacebookLike from 'react-fb-like'
import { TwitterFollowButton } from 'react-twitter-embed'

import { config } from 'config/config'

import { googleEvent } from 'components/page/GoogleAnalytics'
import { PageHead } from 'components'

const LandingPage = () => (
  <main>
    <PageHead />

    <Headline
      title={config.appName}
      description={config.appDescription}
    >
      <ContainerFlex>
        <span>Share:{' '}</span>
        <SocialSharing
          link={config.appUrl}
          title={config.appName}
          body={config.appTagline}
        />
      </ContainerFlex>
      <ContainerFlex align='flex-start' margin='1em 0 0'>
        <span>Follow:{' '}</span>
        <SocialFollow
          facebookLink='https://www.facebook.com/tomorroworldcom/'
          twitterName='tomsoderlund'
          instagramName='tomsoderlund'
        />
      </ContainerFlex>
    </Headline>

    <CustomSignupBlock />

    <Block padding='1em'>
      Get the source code from <a href='https://github.com/tomsoderlund/nextjs-generic-landing-page'>https://github.com/tomsoderlund/nextjs-generic-landing-page</a>
    </Block>

    <Features features={config.appFeatures} />

    <Image src='/features/feature1.jpg' />

    <Pricing />

    <Video
      src='https://www.youtube.com/embed/UjtVVsz-mMg'
      controls={false}
    />

    <Testimonials
      headline='What our customers are saying'
    />

    <CustomSignupBlock />

    <Footer>
      &copy; Company, Inc.
    </Footer>
  </main>
)

export default LandingPage

// ----- Components -----

const Block = ({ children, className, style, background, padding = '0 1em' }) => (
  <div
    className={`block ${className || ''}`}
    style={style}
  >
    {children}
    <style jsx>{`
      div {
        padding: ${padding};
        flex: 1;
        ${background ? `background-color: ${background};` : ''}
      }

      div.columns {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
      }

      div.rows {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }

      @media only screen and (max-width: 500px) {
        div.columns {
          flex-direction: column;
        }
      }
    `}
    </style>
  </div>
)

const ContainerFlex = (props) => (
  <section {...props}>
    {props.children}

    <style jsx>{`
      section {
        display: flex;
        flex-direction: ${props.direction || 'row'};
        justify-content: ${props.justify || 'center'};
        align-items: ${props.align || 'center'};
        width: 100%;
        margin: ${props.margin || '0'};
      }

      @media only screen and (max-width: ${props.phoneBreakpoint || 480}px) {
        section {
          flex-direction: column;
        }
      }
    `}
    </style>
  </section>
)

const Headline = (props) => (
  <Block
    padding='1em'
    className='headline color-header-bg color-background-fg'
    {...props}
  >
    {props.title && <h1>{props.title}</h1>}
    {props.description && <h2>{props.description}</h2>}
    {props.children && <>{props.children}</>}
  </Block>
)

const CustomSignupBlock = () => (
  <SignupBlock
    thankyouText='Thank you for signing up!'
    className='darker'
    leadService={config.leadService}
  />
)

const SignupBlock = (props) => {
  return (
    <Block className='signup-block' padding='1em' {...props}>
      <SignupForm {...props} />
    </Block>
  )
}

const SignupForm = ({ leadService, googleEventName = 'Lead sign up', buttonText = 'Sign up', thankyouText = 'Thank you!' }) => {
  const [personInfo, setPersonInfo] = useState({ email: '' })
  const setPersonInfoField = (field, value) => setPersonInfo({ ...personInfo, [field]: value })

  const [inProgress, setInProgress] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasErrors, setHasErrors] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setInProgress(true)
    try {
      const result = await fetch(leadService, { // eslint-disable-line no-undef
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personInfo)
      })
      if (result.status === 200) {
        setIsSubmitted(true)
        if (googleEventName) {
          googleEvent(googleEventName)
        }
      } else {
        const json = await result.json()
        setHasErrors(json.message)
      }
    } catch (err) {
      console.warn(`Warning: ${err.message || err}`)
      setHasErrors(err.message)
    } finally {
      setInProgress(false)
    }
  }

  return (
    <form className='signup-form' onSubmit={handleSubmit}>
      {!isSubmitted ? (
        <>
          <input
            name='email'
            type='email'
            value={personInfo.email}
            required
            placeholder='Your email'
            onChange={event => setPersonInfoField('email', event.target.value)}
            disabled={inProgress}
          />
          <button
            type='submit'
            className='primary'
            disabled={inProgress}
          >
            {buttonText}
          </button>
          {hasErrors ? <p className='error color-error-fg'>{hasErrors}</p> : null}
        </>
      ) : (
        <h3 className='thankyou'>{thankyouText}</h3>
      )}
    </form>
  )
}

const SocialSharing = ({ link, title, body, styles = { cursor: 'pointer', display: 'inline-block', marginLeft: '0.3em', outline: 'none' } }) => (
  <span className='social-sharing'>
    <FacebookShareButton url={link} style={styles}><FacebookIcon round size={32} /></FacebookShareButton>
    <TwitterShareButton title={body} url={link} style={styles}><TwitterIcon round size={32} /></TwitterShareButton>
    <LinkedinShareButton url={link} style={styles}><LinkedinIcon round size={32} /></LinkedinShareButton>
    <EmailShareButton subject={title} body={body} url={link} style={styles}><EmailIcon round size={32} /></EmailShareButton>

    <style jsx>{`
      .social-sharing {
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    `}
    </style>
  </span>
)

const SocialFollow = ({ facebookLink, twitterName, instagramName }) => (
  <span className='social-follow'>
    {facebookLink && (
      <FacebookLike
        href={facebookLink}
        layout='button_count'
        showFaces={false}
        share={false}
      />
    )}

    {instagramName && (
      <InstagramFollowButton
        screenName={instagramName}
      />
    )}

    {twitterName && (
      <TwitterFollowButton
        screenName={twitterName}
      />
    )}

    <style jsx>{`
      .social-follow {
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
      }

      .social-follow > :global(*) {
        margin: 0 0.5em;
      }
    `}
    </style>
  </span>
)

const InstagramIcon = ({ size = '1em' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={size} viewBox='0 0 512 512'>
    <path style={{ fill: '#ffffff' }} d='M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z' />
    <path style={{ fill: '#ffffff' }} d='M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z' />
    <circle style={{ fill: '#ffffff' }} cx='390.476' cy='121.524' r='30.23' />
  </svg>
)

const InstagramFollowButton = ({ screenName }) => (
  <a
    href={`https://www.instagram.com/${screenName}/`}
    target='_blank'
    rel='noopener noreferrer'
  >
    <InstagramIcon />
    <span>Follow @{screenName}</span>
    <style jsx>{`
      a {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 11px;
        font-weight: 500;
        background-color: #db326c;
        color: #fff;
        border-radius: 3px;
        padding: 3.5px;
        cursor: pointer;
        text-decoration: none;
        white-space: nowrap;
      }
      a:hover {
        opacity: initial;
        background-color: #a72652;
      }
      span {
        margin-left: 2px;
      }
    `}
    </style>
  </a>
)

const Features = (props) => (
  <Block className='columns' padding='1em 0 2em' {...props}>
    {props.features.map(feature => (
      <LinkOptional
        key={feature.name}
        href={feature.link}
        as={feature.as}
        target={feature.target}
        className='link-wrapper'
      >
        <Block className='feature rows'>
          <h3>{feature.name}</h3>
          {feature.imageSrc && <img src={feature.imageSrc} alt={feature.name} title={feature.name} />}
          {feature.description && <p className='description'>{feature.description}</p>}
        </Block>

        <style jsx>{`
          img {
            max-width: 100%;
            object-fit: contain;
          }

          :global(.feature .description) {
            margin-top: 0.5em;
          }

          :global(.link-wrapper) {
            flex: 1;
            text-decoration: none;
            color: inherit;
          }
        `}
        </style>
      </LinkOptional>
    ))}
  </Block>
)

const Image = (props) => {
  const imageName = props.src.split('/').pop().split('.').shift()
  return (
    <Block padding='0' {...props}>
      <img src={props.src} alt={props.title || imageName} title={props.title} />
      <style jsx>{`
        img {
          width: 100%;
          object-fit: cover;
        }
      `}
      </style>
    </Block>
  )
}

const Video = (props) => {
  return (
    <Block padding='0' {...props}>
      <div className='video-container'>
        <iframe
          width='853'
          height='480'
          src={props.src + '?rel=0' + ((props.controls === false) && '&controls=0')}
          frameBorder='0'
          allowFullScreen
        />
      </div>
      <style jsx>{`
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          padding-top: 30px; height: 0; overflow: hidden;
        }
         
        .video-container iframe,
        .video-container object,
        .video-container embed {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}
      </style>
    </Block>
  )
}

const Pricing = (props) => (
  <Block {...props}>
    <h2>Pricing</h2>
  </Block>
)

const Testimonials = (props) => (
  <Block {...props}>
    {props.headline && <h2>{props.headline}</h2>}
  </Block>
)

const Footer = ({ children }) => (
  <footer
    className='color-header-bg color-background-fg'
  >
    {children}
    <style jsx>{`
      footer {
        font-size: 0.7em;
        padding: 1em;
      }
    `}
    </style>
  </footer>
)

const LinkOptional = (props) => {
  const { href, as, children, ...otherProps } = props
  return (
    href
      ? href.includes('http')
        ? (
          <a href={href} {...otherProps}>{children}</a>
        )
        : (
          <Link href={href} as={as}>
            <a {...otherProps}>{children}</a>
          </Link>
        )
      : (
        <>{children}</>
      )
  )
}
