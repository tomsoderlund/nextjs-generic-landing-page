import {
  TwitterShareButton, TwitterIcon,
  FacebookShareButton, FacebookIcon,
  LinkedinShareButton, LinkedinIcon,
  EmailShareButton, EmailIcon
} from 'react-share'

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

export default SocialSharing
