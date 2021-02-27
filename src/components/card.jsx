import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags } from "@fortawesome/free-solid-svg-icons"

import CardStyles from "./card.module.scss"

const BlogCard = props => {
  return (
    <article className={`${CardStyles.post} mt-4`}>
      <Link to={`/post/${props.readMore}`}>
        <div className={CardStyles.thumbnailContainer}>
          <Img
            className={CardStyles.thumbnail}
            fluid={props.eyecatch}
            alt={props.eyecatchDescription}
          />
        </div>
        <div className={CardStyles.content}>
          <div>
            <ul className={`${CardStyles.date} mt-2`}>
              <li>{props.publishDate}</li>
            </ul>
          </div>
          <h3 className={`${CardStyles.title} mt-3`}>{props.title}</h3>
          <p
            className={`${CardStyles.excerpt} mt-3`}
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          />
        </div>
      </Link>
      <div className="mt-3">
        <ul className={CardStyles.category}>
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

export default BlogCard
