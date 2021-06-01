import React from "react"
import { Card } from "react-bootstrap"
import { TwitterIcon } from "react-share"
import Image from "./image"

const Bio = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <Image
          fileName="bio"
          className="mt-3 rounded-circle"
          alt="icon"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <Card.Title className="text-center">
        Natsume
        <a target="_blank" href="https://twitter.com/natsume_aurlia">
          <TwitterIcon
            bgStyle={{ opacity: 0 }}
            iconFillColor={"#1b95e0"}
            size={40}
            round={false}
          />
        </a>
      </Card.Title>
      <Card.Text style={{ fontSize: "0.8rem" }}>
        エンジニアでフリーランスしてます。
        高卒→2年ニート→1年間テスター中に勉強→フリーランスエンジニア。
        フルリモート×フレックス×週休3日で働かせて頂いてます。
        Laravel,Vue,Reactが得意です。
        <br />
        <br />
        開発や質問等お気軽にお問い合わせください！
      </Card.Text>
    </React.Fragment>
  )
}

export default Bio
