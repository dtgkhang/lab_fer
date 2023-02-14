import React,{useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DetailModal from "../DetailModal";
import './films.css'


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
        <div className=' row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5'>
        {films.map((film)=>(
            <div  className='col'>
            <div className="card h-100">        
            <img src={film.Image} style={{height:"450px"}} className="card-img-top"/>
            <div className="card-body">
                <h3 className="card-title">{film.Title} </h3>
                <p className='year'>{film.Year}</p>
                <p className='nation'>{film.Nation}</p>
                <button  class="btn btn-secondary" onClick={()=>setOpenModal(film.id)}>Detail</button>
             
            </div>
        </div>
                  <DetailModal data={film.data}
          isModalOpen={openModal===film.id}
          handleOk={()=>navigate(`/detail/${film.id}`)}
          handleCancel={handleCancel}
        />
        </div>
        
        
))}      
 
  </div>
    </div>
    
      

  );
}
