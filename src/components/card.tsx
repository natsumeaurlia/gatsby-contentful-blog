import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import Image from "./image"

import {
  post,
  thumbnail,
  title,
  category,
  date,
  content,
  excerpt,
  thumbnailContainer,
} from "./card.module.scss"

const BlogCard = props => {
  return (
    <article className={`${post} mt-4`}>
      <Link to={`/post/${props.slug}`}>
        <div className={thumbnailContainer}>
          {props.eyecatch ? (
            <Img
              className={thumbnail}
              fluid={props.eyecatch.fluid}
              alt={props.eyecatch.description}
            />
          ) : (
            <Image
              className={thumbnail}
              fileName={props.title}
              alt={props.title}
            />
          )}
        </div>
        <div className={content}>
          <div>
            <ul className={`${date} mt-2`}>
              <li>{props.publishDate}</li>
            </ul>
          </div>
          <h3 className={`${title} mt-3`}>{props.title}</h3>
          <p
            className={`${excerpt} mt-3`}
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          />
        </div>
      </Link>
      <div className="mt-3">
        <ul className={category}>
          <li className="mr-2">
            <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
          </li>
          {props.categories &&
            props.categories.map(category => (
              <li key={category.id} className="mr-2">
                <Link to={`/category/${category.slug}`}>{category.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </article>
  )
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  categories: PropTypes.array,
  slug: PropTypes.string.isRequired,
  eyecatch: PropTypes.object,
  externalFluidImage: PropTypes.object,
}

export default BlogCard
