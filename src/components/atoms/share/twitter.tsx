import React from "react"
import { TwitterIcon, TwitterShareButton } from "react-share"
import { IconProps } from "./type"

const Twitter = (props: IconProps) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  return (
    <TwitterShareButton url={shareUrl}>
      <TwitterIcon size={props.size || 40} round={props.round} />
    </TwitterShareButton>
  )
}

export default Twitter
