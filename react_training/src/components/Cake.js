import { useState } from "react"
import { useNavigate } from "react-router"

function Cake(cakeData){
    const navigate = useNavigate();
    // console.log(cakeData)
    return (
        <div>
  <div className="card" style={{width:"18rem"}}>
  <img onClick={()=>navigate("/details/"+cakeData.props.cakeid)} className="card-img-top" src={cakeData.props.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{cakeData.props.name}</h5>
    <p className="card-text">{cakeData.props.price}</p>
    <button onClick={()=>navigate("/details/"+cakeData.props.cakeid)} class="btn btn-primary">Show Details</button>
    <button onClick={()=>navigate("/edit/"+cakeData.props.cakeid)} class="btn btn-primary">Edit</button>
    
  </div>
</div>
        </div>
    )
}
export default Cake