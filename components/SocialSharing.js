import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share'
import FacebookLike from 'react-fb-like'

const SocialSharing = ({ link, title, body, styles = { cursor: 'pointer', display: 'inline-block', marginLeft: '0.3em', outline: 'none' } }) => (
  <div>
    <FacebookLike
      href={link}
      layout='button_count'
      showFaces={false}
      share={false}
    />
    <FacebookShareButton url={link} style={styles}><FacebookIcon round size={32} /></FacebookShareButton>
    <TwitterShareButton title={body} url={link} style={styles}><TwitterIcon round size={32} /></TwitterShareButton>
    <LinkedinShareButton url={link} style={styles}><LinkedinIcon round size={32} /></LinkedinShareButton>
    <EmailShareButton subject={title} body={body} url={link} style={styles}><EmailIcon round size={32} /></EmailShareButton>
    <style jsx>{`
      div {
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    `}
    </style>
  </div>
)

export default SocialSharing
