import React from "react"
import { PocketIcon, PocketShareButton } from "react-share"
import { IconProps } from "./type"

const Pocket = (props: IconProps) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  return (
    <PocketShareButton url={shareUrl}>
      <PocketIcon size={props.size || 40} round={props.round} />
    </PocketShareButton>
  )
}

export default Pocket
