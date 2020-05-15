import React from 'react';
import { FacebookShareButton, FacebookShareCount, FacebookIcon, } from 'react-share';

const facebookShare = (props) => {

  return (
    <div className="Demo__some-network">
      <FacebookShareButton
        url={props.url}
        quote={props.title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <div>
        <FacebookShareCount url={props.url} className="Demo__some-network__share-count">
          {count => count}
        </FacebookShareCount>
      </div>
    </div>
  )

}

export default facebookShare;
