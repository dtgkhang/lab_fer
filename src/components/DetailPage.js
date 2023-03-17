import { useParams } from "react-router-dom";
import { Films } from "../share/ListOfFilms";

import React, { useEffect, useState } from "react";
import { Descriptions, Row, Col, Image, Button } from "antd";
import CarouselCard from "./CarouselCard";
import VideoModal from "./modal/VideoModal";
import axios from "axios";

function DetailPage() {
  const id = useParams();
  
  // const film = Films.find((obj) => {
  //   return obj.id == userName.id;
  // });
  const [film,setMovies] = useState({})
  const getMoives = async () => {
    try {
        const response = await axios.get(`https://64130b93b1ea74430320d843.mockapi.io/api/oscar/movie/${id.id}`)
        console.log(response);

        if (response.data) {
          console.log(response.data);
          setMovies(response.data)
        } else {
            // message.error(response.data.message);

        }
    } catch (err) {
        // message.error(err.message);

    }
};
  //    let cost = film.cost.toLocaleString();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {

    getMoives();

},[]);
  return (
    <div className="container detail-page">
      <div className="content">
        <Row className="content_detail" gutter={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
          <Col  xs={24} xl={12}>
           
            <div className="product-tumb">
              <Image className="img-thumbnail" src={film.Image} width={350} />
            </div>
          </Col>
          <Col className="mt-5" xs={24} xl={12}>
            <Descriptions title={film.Title} className="card p-5">
              <Descriptions.Item label="Year">{film.Year}</Descriptions.Item>
              <Descriptions.Item label="Nation">
                {film.Nation}
              </Descriptions.Item>
              <Descriptions.Item label="Box office">${film.boxOffice}</Descriptions.Item>
              <Descriptions.Item label="Description">
                {film.data}
              </Descriptions.Item>
              
            </Descriptions>
            <Button className="mt-2" onClick={handleOpen} trailer={film.data}>View Trailer</Button>
            <VideoModal open={open} close={handleClose} trailer={film.trailer}  title={film.Title}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DetailPage;
