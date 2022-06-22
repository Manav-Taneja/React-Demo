import { useState } from "react";
import axios from "axios"
function Signup(){
    var form={name:"",email:"",password:""};
    var [error,setError]=useState()
    var [user,setUser] =useState([]);
    function setText(event){
        form[event.target.name]=event.target.value
        console.log(form);
    }
    function getEmail(e){
        form.email=e.target.value;
    }
    function getPassword(e){
        form.password=e.target.value;
    }
    function getName(e){
        form.name=e.target.value
    }
    function submit(event){
        axios({
            url:process.env.REACT_APP_BASE_API+"/register",
            method:"post",
            data:form
            }).then(response=>{
                console.log(response);
            },(error)=>{
                console.log(error);
            })
        setUser([...user,form])
        //user.push(form);
        var abcd=form.Name+form.Email+form.Password;
       // alert(abcd);
    }
    return(
        <div>
        <input placeholder="Email" name="Email" onChange={getEmail}></input>
        <br></br>
        <br></br>
        <input placeholder="Name" name="Name" onChange={getName}></input>
        <br></br>
        <br></br>
        <input placeholder="Password" name="Password" onChange={getPassword}></input>
        <br></br>
        <br></br>
        <button type="submit" onClick={submit} className="btn-btn-primary">Submit</button>
        
        {
            user.map((element,index)=>
                <div>
                    {element.Name}-{element.Email}-{element.Password}</div>)
        }
        </div>
    )
}
export default Signup;