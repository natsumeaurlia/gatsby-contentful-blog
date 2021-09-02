import React from "react"
import { FacebookIcon, FacebookShareButton } from "react-share"
import { IconProps } from "./type"

export default (props: IconProps) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  return (
    <FacebookShareButton url={shareUrl}>
      <FacebookIcon size={props.size || 40} round={props.round} />
    </FacebookShareButton>
  )
}
