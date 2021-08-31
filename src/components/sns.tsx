import React from "react"

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  PocketShareButton,
  PocketIcon,
} from "react-share"

export default props => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  return (
    <div className={props.className}>
      <FacebookShareButton url={shareUrl} className="my-lg-3">
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} className="my-lg-3">
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <LineShareButton url={shareUrl} className="my-lg-3">
        <LineIcon size={40} round />
      </LineShareButton>
      <PocketShareButton url={shareUrl} className="my-lg-3">
        <PocketIcon size={40} round />
      </PocketShareButton>
    </div>
  )
}
