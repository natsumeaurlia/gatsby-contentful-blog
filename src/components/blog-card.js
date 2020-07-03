import React from "react"
import { Row } from "react-bootstrap"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags } from "@fortawesome/free-solid-svg-icons"
import CardStyles from "./blog-card.module.css"

const BlogCard = props => (
  <div className={CardStyles.blog_post}>
    <div className={CardStyles.blog_thumb}>
      <Img
        style={{ height: "100%" }}
        fluid={props.eyecatch}
        alt={props.eyecatchDescription}
      />
    </div>
    <div className={CardStyles.down_content}>
      <a href={props.readMore}>
        <h4>{props.title}</h4>
      </a>
      <ul className={CardStyles.post_info}>
        <li>
          <a>Admin</a>
        </li>
        <li>
          <a>May 24, 2020</a>
        </li>
        <li>
          <a>36 Comments</a>
        </li>
      </ul>
      <p
        style={{ textOverflow: "ellipsis" }}
        dangerouslySetInnerHTML={{ __html: props.excerpt }}
      />
      <div className="w-100 d-flex justify-content-center">
        <a className={CardStyles.readMore} href={props.readMore}>
          Read More
        </a>
      </div>
      <div className={CardStyles.post_options + " mt-5"}>
        <Row>
          <div className="col-6">
            <ul className={CardStyles.post_tags}>
              <li>
                <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
              </li>
              <li>
                <a href="#">Beauty</a>,
              </li>
              <li>
                <a href="#">Nature</a>
              </li>
            </ul>
          </div>
          <div className="col-6" />
        </Row>
      </div>
    </div>
  </div>
)

export default BlogCard
