import axios from "axios";

function AllcakesThunk(dispatch){
    axios({
        method:"get",
        url:process.env.REACT_APP_BASE_API+"/allcakes"
    }).then(response=>{
        console.log(response)
        dispatch({
            type:"ALL_CAKES",
            payload:response.data.data
        })
    },(error)=>{
        console.log(error);
    })
}
export default AllcakesThunk