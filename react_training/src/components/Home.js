import axios from 'axios';
import {BrowserRouter, MemoryRouter, Routes} from 'react-router-dom'
import Cake from './Cake';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import { useDispatch } from 'react-redux';
function Home(){
    var [cake,setCake] = useState([]);
    const dispatch = useDispatch()
    useEffect(()=>{axios({
        url:process.env.REACT_APP_BASE_API+"/allcakes",
        method:"get"
      }).then((response)=>{
        // console.log(response.data.data);
        setCake(response.data.data);
        dispatch({
            payload:response.data.data.length,
            type:"CART_COUNT"
        })

      },(error)=>{
        console.log(error);
      })
    },[])
      const arr=[{Title:"This is the cake",Text:"This cake will get cut when you reach Kasol",Src:'HOKAH.jpeg'},
    {Title:"This is the cake",Text:"This cake will get cut whenever you want",Src:'birthdaycake.jpeg'},
    {Title:"This is the cake",Text:"This cake will get cut on your anniversary",Src:'anniversary.jpeg'},
    {Title:"This is the cake",Text:"This cake will get on your birthday",Src:'cake.jpeg'}
];
  
    return(

        <div className="row">

        {cake.map((element,index)=>
        <div className='col'>
            <Cake props={element}></Cake>
        </div>)
        }
        
        </div>
    )
}
export default Home