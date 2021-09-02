import React from "react"
import { LineIcon, LineShareButton } from "react-share"
import { IconProps } from "./type"

const Line = (props: IconProps) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  return (
    <LineShareButton url={shareUrl}>
      <LineIcon size={props.size || 40} round={props.round} />
    </LineShareButton>
  )
}

export default Line
