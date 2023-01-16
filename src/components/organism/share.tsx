import { ResponsiveStyleValue } from "@mui/system"
import { Stack } from "@mui/material"
import React from "react"
import Facebook from "../atoms/share/facebook"
import Twitter from "../atoms/share/twitter"
import Line from "../atoms/share/line"
import Pocket from "../atoms/share/pocket"

interface Props {
  direction?: ResponsiveStyleValue<
    "row" | "row-reverse" | "column" | "column-reverse"
  >
  spacing?: ResponsiveStyleValue<number | string>
  iconSize?: number
  round?: boolean
}

export default (props: Props) => {
  return (
    <Stack direction={props.direction} spacing={props.spacing}>
      <Facebook size={props.iconSize} round={props.round} />
      <Twitter size={props.iconSize} round={props.round} />
      <Line size={props.iconSize} round={props.round} />
      <Pocket size={props.iconSize} round={props.round} />
    </Stack>
  )
}
