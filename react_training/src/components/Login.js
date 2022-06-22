import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router";
import {useDispatch} from 'react-redux';
function Login(data){
    // var [property,handlerfunction]=useState(intiaValue)
    var chalo=useNavigate();
    var [error,setError] = useState();
    var user={}
    var dispatch=useDispatch()
    function login(){
        if(!user.email){
            setError("Email is Required")
        }
    }
    function getEmail(e){
        user.email=e.target.value
    }
    function getPassword(e){
        user.password=e.target.value
    }
    function submit(e){
        axios({
            url:process.env.REACT_APP_BASE_API+"/login",
            method:"post",
            data:user
        }).then(response=>{
            if(response.data.message=="Invalid Credentials"){
                alert("Wrong Credentials");
            }
            else{
                localStorage.token=response.data.token
                dispatch({
                    type:"LOGIN"
                })
                data.logedInFn();
                chalo('/')
            }
            console.log(response)
        },(error)=>{
            console.log(error);
        })
    }
    return(
        <div>
        <input placeholder="Email" name="Email" onChange={getEmail}></input>
        <br></br>
        <br></br>
        <div><p>{error}</p></div>
        <input placeholder="Password" name="Password" onChange={getPassword}></input>
        <br></br>
        <br></br>
        <button type="submit" onClick={submit} className="btn-btn-primary">Login</button>
        </div>
    )
}
export default Login