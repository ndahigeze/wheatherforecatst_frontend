import React, { useState } from 'react'

import axios from 'axios';
import {
    Input,
} from "reactstrap";


function Home() {
     const [search,setsearch]=useState([])
     const [result,setresult]=useState({})
     const triger_search=()=>{
         if(search.length===0){
           document.getElementById("location_error").innerText="Please provide location"
         }else{
            document.getElementById("location_error").innerText=""
         
            axios({
                method:"GET"   ,
                url:`${process.env.REACT_APP_BACKEND_URL}/wheatherByname/${search}`,
                withCredentials: false,
                })
            .then(res=>{
                console.log(res)
                setresult(res.data.data)
            }).catch(err=>{
                console.log(err)
            })
         }
     }

     const view_info=()=>{
         return(
            <div className='mt-4'>
                <div className='d-flex justify-content-end mr-2'> <h3>{result.name}</h3> &nbsp;  { " has "+result.weather[0].description}</div>
                <h5 className='ml-3'>More wheather info for {result.name}:</h5>
                <ul>
                    <li>Cloud: { result.clouds.all +"%"}</li>
                    <li>rain 1h: { result.rain? result.rain['1h']:"" }</li>
                    <li>Wind Speed: { result.wind.speed}km/h</li>
                    <li>Wind Direction: { result.wind.deg}</li>
                    <li>Humidity: {result.main.humidity}%</li>
                    <li>Presssure: {result.main.pressure}</li>
                </ul>
            </div>
         )
     }
      
    return (
            <div>
                {/* <IndexNavbar /> */}
                <div className="container-fluid" >
                   <div className='row mt-5'>
                       <div className='col-md-4'>
                           <div className='card mb-5'>
                               <div className='card-body'>
                                      <h4 className='text-center'>Write the location name to view it's current wheather data</h4>
                                        <hr></hr>
                                        <span><strong>Location</strong></span>
                                   <div className='d-flex display-content-center'>
                                       
                                        <Input
                                        id="search"
                                        className="form-control"
                                        type="text"
                                        value={search}
                                        placeholder="Fill in location name"
                                        onChange={e=>setsearch(e.target.value)}
                                        ></Input>
                                        <button className='btn btn-outline-primary' onClick={triger_search}>View</button>
                                   </div>
                                   <span className='text-warning ' id="location_error"></span>

                                   {
                                     result.cod===200? view_info():<div className='mt-3'>Wheather data not available</div>
                                    }
                                    
                                </div>
                               
                           </div>
                           
                       </div>
                   </div>
                </div>
            </div>
        )
}
export default Home
