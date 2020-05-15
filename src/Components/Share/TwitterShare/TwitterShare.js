import React from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';

const twitterShare = (props) => {
  return (<div className="Demo__some-network">
    <TwitterShareButton
      url={props.url}
      title={props.title}
      className="Demo__some-network__share-button"
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>

    <div className="Demo__some-network__share-count">&nbsp;</div>
  </div>)
}
export default twitterShare;