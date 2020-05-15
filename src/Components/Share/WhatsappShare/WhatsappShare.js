import React from 'react';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';

const whatsAppShare = (props) => {

  return (<div className="Demo__some-network">
    <WhatsappShareButton
      url={props.url}
      title={props.title}
      separator=":: "
      className="Demo__some-network__share-button"
    >
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>

    <div className="Demo__some-network__share-count">&nbsp;</div>
  </div>)

}

export default whatsAppShare;