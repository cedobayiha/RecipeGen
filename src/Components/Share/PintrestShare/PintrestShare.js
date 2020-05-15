import React from 'react';
import {
  PinterestShareButton, PinterestIcon, PinterestShareCount
} from "react-share";

const pintrestShare = (props) => {

  return (
    <div className="Demo__some-network">
      <PinterestShareButton
        url={String(window.location)}
        media={`${String(window.location)}/${props.img}`}
        className="Demo__some-network__share-button"
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <div>
        <PinterestShareCount url={props.url} className="Demo__some-network__share-count" />
      </div>
    </div>
  )
}
export default pintrestShare;