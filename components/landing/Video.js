import React from 'react'

import Block from './Block'

/** { src, title } */
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

export default Video
