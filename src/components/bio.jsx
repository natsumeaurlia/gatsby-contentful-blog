import React from "react"
import { Card } from "react-bootstrap"

import Image from "./image"

const Bio = () => {
  return (
    <Card className="d-flex align-items-center border-0 text-center">
      <Image
        filename="bio.jpg"
        className="mt-3 rounded-circle"
        alt="icon"
        style={{ width: "10rem", height: "10rem" }}
      />
      <Card.Body>
        <Card.Title>Natsu</Card.Title>
        <Card.Text style={{ fontSize: "0.8rem" }}>
          フリーでエンジニアやっています。
          <br />
          バックエンド(PHP/Laravel)がメインでフロントはVueやReact、インフラはAWSを触ります。
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Bio
