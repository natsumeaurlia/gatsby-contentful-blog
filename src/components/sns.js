import React from "react"

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LineIcon,
  PocketShareButton,
  PocketIcon,
} from "react-share"

export default props => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  return (
    <div className={props.className}>
      <FacebookShareButton url={shareUrl} className="my-lg-3 mr-md-3 mr-sm-3">
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} className="my-lg-3 mr-md-3 mr-sm-3">
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} className="my-lg-3 mr-md-3 mr-sm-3">
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>
      <LineShareButton url={shareUrl} className="my-lg-3 mr-md-3 mr-sm-3">
        <LineIcon size={40} round />
      </LineShareButton>
      <PocketShareButton url={shareUrl} className="my-lg-3 mr-md-3 mr-sm-3">
        <PocketIcon size={40} round />
      </PocketShareButton>
    </div>
  )
}
