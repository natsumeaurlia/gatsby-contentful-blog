import React from "react"
import { Link } from "gatsby"
import { Row } from "react-bootstrap"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags } from "@fortawesome/free-solid-svg-icons"

import CardStyles from "./blog-card.module.css"

const BlogCard = props => {
  return (
    <div className={CardStyles.blog_post}>
      <div className={CardStyles.blog_thumb}>
        <Link to={`/post/${props.readMore}`}>
          <Img
            style={{ height: "100%" }}
            fluid={props.eyecatch}
            alt={props.eyecatchDescription}
          />
        </Link>
      </div>
      <div className={CardStyles.down_content}>
        <Link to={`/post/${props.readMore}`}>
          <h4>{props.title}</h4>
        </Link>
        <ul className={CardStyles.post_info}>
          <li>{props.publishDate}</li>
        </ul>
        <p
          style={{ textOverflow: "ellipsis" }}
          dangerouslySetInnerHTML={{ __html: props.excerpt }}
        />
        <div className="w-100 d-flex justify-content-center">
          <Link className="btn_orange" to={`/post/${props.readMore}`}>
            Read More
          </Link>
        </div>
        <div className={CardStyles.post_options + " mt-5"}>
          <Row>
            <div className="col-6">
              <ul className={CardStyles.post_tags}>
                <li className="mr-2">
                  <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                </li>
                {props.categories &&
                  props.categories.map(category => (
                    <li key={category.id}>
                      <Link to={`/category/${category.slug}`}>
                        {category.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-6" />
          </Row>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
