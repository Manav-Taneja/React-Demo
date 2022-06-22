import axios from "axios"
import { useEffect, useState } from "react"
import { Route, useNavigate, useParams } from "react-router"
function Addcake(){
    var route=useParams();
    var [details,setDetails]=useState([]);
    var chalo=useNavigate();
    useEffect(()=>{
        axios({
            url:process.env.REACT_APP_BASE_API+"/cake/"+route.cakeid,
            method:"get"
        }).then((response)=>{
            console.log(response.data.data);
            setDetails(response.data.data);
        },(error)=>{
            console.log(error);
        })
    },[])
    return (
        <div>
            <div className="row">
            <div className="col">
            <input value={details.cakeid} placeholder="CakeId"/>
            <br></br>
            <br></br>
            <input value={details.name} placeholder="Name"/>
            <br></br>
            <br></br>
            <input value={details.price} placeholder="Price"/>
            <br></br>
            <br></br>
            <button className="btn btn-primary">Submit</button>
            </div>
            <div className="col">
                <img src={details.image}></img>
            </div>
            </div>
        </div>
    )
}
export default Addcake