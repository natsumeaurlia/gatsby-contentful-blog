import React from "react"
import { Button, Row, Nav } from "react-bootstrap"
import CardStyles from "./blog-card.module.css"

const BlogCard = props => (
  <div className={CardStyles.blog_post}>
    <div className={CardStyles.blog_thumb}>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gonvillehotel.co.uk%2Fevent%2Fenchanted-cinema-the-great-gatsby%2F&psig=AOvVaw2tskRTS3Qov2GRAyGmfXth&ust=1593440765842000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjf47fbpOoCFQAAAAAdAAAAABADg"
        alt=""
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
      <p dangerouslySetInnerHTML={{ __html: props.excerpt }} />
      <div className="w-100 d-flex justify-content-center">
        <a className={CardStyles.readMore}>Read More</a>
      </div>
      <div className={CardStyles.post_options + " mt-5"}>
        <Row>
          <div className="col-6">
            <ul className={CardStyles.post_tags}>
              <li>
                <i className="fa fa-tags"></i>
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
