import React from 'react';
import { FacebookMessengerShareButton, FacebookMessengerIcon } from 'react-share';

const messengerShare = (props) => {
  return (
    <div className="Demo__some-network">
      <FacebookMessengerShareButton
        url={props.url}
        appId="521270401588372"
        className="Demo__some-network__share-button"
      >
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>
    </div>
  )
}

export default messengerShare;