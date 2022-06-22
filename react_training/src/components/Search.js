import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Cake from "./Cake"
function Search(){
    var [query,setQuery]=useSearchParams()
    var searchQuery=query.get("q")
    var [cake,setCake]=useState([])
    var url=process.env.REACT_APP_BASE_API+"/searchcakes?q="+searchQuery
    console.log(query)
    useEffect(()=>{
        axios({
            url:url,
            method:"get"
        }).then((response)=>{
            if(response.data.data.length==0){
                alert("No Cake Found")
            }
            else{
            console.log(response.data.data);
            setCake(response.data.data)
            }
        },(error)=>{
            console.log(error);
        })
    },[query])
    return (
        <div className="row">

        {cake.map((element,index)=>
        <div className='col'>
            <Cake props={element}></Cake>
        </div>)
        }
        
        </div>
    )
}
export default Search