import axios from "axios"
import { useEffect, useState } from "react"
import { Route, useNavigate, useParams } from "react-router"

function cakeDetails(){
    var route=useParams();
    var [details,setDetails]=useState([]);
    var chalo=useNavigate();
    function addtoCart(){
        var reqObject={
            cakeid:details.cakeid,
            name:details.name,
            image:details.image,
            price:details.price,
            weight:details.weight
        }
        axios({
            url:process.env.REACT_APP_BASE_API+"/addcaketocart",
            method:"post",
            data:reqObject,
            headers:{authtoken:localStorage.token}
        }).then((response)=>{
            console.log(response);
            chalo('/cart')
        },(error)=>{
            console.log(error);
        })
    }
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
    return(
        <div className="row">

<div className="col-4">

<img src={details.image} className="img" style={{width:"100%", height:"100%"}}/>

</div>

<div className="col">

<h1>{details.name}</h1>

<div>{details.description}</div>

<div>{details.flavour}</div>

<div>{"likes - "+details.likes}</div>

<b>{"₹ "+details.price}</b>

<div>{"rating - "+details.ratings}</div>

<div>{details.reviews+ " Reviews"}</div>

<div><button onClick={addtoCart}>Add to Cart</button></div>
</div>

</div>
    )
}
export default cakeDetails 