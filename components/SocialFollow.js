import FacebookLike from 'react-fb-like'
import { TwitterFollowButton } from 'react-twitter-embed'

import InstagramFollowButton from './InstagramFollowButton'

const SocialFollow = ({ facebookHref, twitterName, instagramName }) => (
  <span className='social-follow'>
    {facebookHref && (
      <FacebookLike
        href={facebookHref}
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
        align-items: center;
      }
    `}
    </style>
  </span>
)

export default SocialFollow
