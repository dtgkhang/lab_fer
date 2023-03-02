import React,{useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DetailModal from "../DetailModal";
import './films.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';

export default function FilmPresentation({ films }) {
  const [openModal, setOpenModal] = useState();
  const navigate = useNavigate();

  
  // const handleOk = (openModal) => {
  //   navigate(`/detail/${openModal}`)
  //   setOpenModal(undefined)  };

  const handleCancel = () => {
    setOpenModal(undefined)  };

  return (
    <div className="container mt-5">
        <Grid container spacing={3}>
        {films.map((film)=>(
          <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: 630 }}>
      <CardMedia
        sx={{ height: 450 }}
        image={film.Image}
        title={film.Title}
      />
      <CardContent>
        <Typography gutterBottom  component="div">
        {film.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
                <p className='year'>{film.Year}</p>
                <p className='nation'>{film.Nation}</p>
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
        <Button variant="contained" onClick={()=>setOpenModal(film.id)} size="small">Review</Button>
        <Button  variant="contained" onClick={()=>navigate(`/detail/${film.id}`)} size="small">Detail page</Button>
      </CardActions>
            {/* <div className="card h-100">        
            <img src={film.Image} style={{height:"450px"}} className="card-img-top"/>
            <div className="card-body">
                <h3 className="card-title">{film.Title} </h3>
                <p className='year'>{film.Year}</p>
                <p className='nation'>{film.Nation}</p>
                <button  class="btn btn-secondary" onClick={()=>setOpenModal(film.id)}>Detail</button>
             
            </div>
        </div> */}
                  <DetailModal img={film.Image} data={film.data}
          isModalOpen={openModal===film.id}
          handleOk={()=>navigate(`/detail/${film.id}`)}
          handleCancel={handleCancel}
        />
            </Card>
            </Grid>


              

        
))}      
 
 </Grid>
    </div>
    
      

  );
}
