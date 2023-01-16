import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  fileName: string
  alt?: string
  className?: string
  style?: object
}

const Image = (props: Props) => {
  const { allImageSharp } = useStaticQuery<GatsbyTypes.AllImageQuery>(graphql`
    query AllImage {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // 拡張子削除して検索
  const fluidObj = allImageSharp.nodes.find(node => {
    if (!node.fluid) {
      return {}
    }
    String(node.fluid.originalName).replace(/\.[^/.]+$/, "") ===
      String(props.fileName).replace(/\.[^/.]+$/, "")
  })

  return (
    <React.Fragment>
      {fluidObj ? (
        <Img
          fluid={fluidObj.fluid}
          alt={props.alt}
          style={props.style}
          className={props.className}
        />
      ) : (
        ""
      )}
    </React.Fragment>
  )
}

export default Image

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
}
