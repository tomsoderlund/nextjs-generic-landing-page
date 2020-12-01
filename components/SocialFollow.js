import FacebookLike from 'react-fb-like'
import { TwitterFollowButton } from 'react-twitter-embed'

import InstagramFollowButton from './InstagramFollowButton'

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

export default SocialFollow
