import { useParams } from "react-router-dom";
import { Films } from "../share/ListOfFilms";

import React from "react";
import { Descriptions, Row, Col, Image } from "antd";
import CarouselCard from "./CarouselCard";

function DetailPage() {
  const userName = useParams();
  const film = Films.find((obj) => {
    return obj.id == userName.id;
  });
  //    let cost = film.cost.toLocaleString();
  return (
    <div className="container detail-page">
      <div className="content">
        <Row className="content_detail" gutter={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
          <Col  xs={24} xl={12}>
           
            <div className="product-tumb">
              <Image className="img-thumbnail" src={`../${film.Image}`} width={350} />
            </div>
          </Col>
          <Col className="mt-5" xs={24} xl={12}>
            <Descriptions title={film.Title} className="card p-5">
              <Descriptions.Item label="Year">{film.Year}</Descriptions.Item>
              <Descriptions.Item label="Nation">
                {film.Nation}
              </Descriptions.Item>
              <Descriptions.Item label="Box office">{film.Boxoffice}</Descriptions.Item>
              <Descriptions.Item label="Description">
                {film.data}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DetailPage;
