import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { connect, Connect } from "react-redux";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
var login="login"
function Navbar(data){
    var [search,setSearch]=useState([])
    var [query,setQuery]=useSearchParams()
    var searchQuery=query.get("q")
    
    useEffect(()=>{

    })
    function searchFn(event){
        console.log("inside this")
        setSearch(event.target.value);
        console.log(search);
    }
    var path="/search?q="+search;
   return (
    <div>
        {console.log(data," oo")}
   <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Cake Gallery</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            {console.log(data)}
          {!data.logedIn && <Link class="nav-link active" aria-current="page" to="/login">Login</Link>}
          {data.logedIn && <Link class="nav-link active" aria-current="page" to="/login">Logout</Link>}
          
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">{login}</Link>
        </li> */}
        <li class="nav-item">
        {data.logedIn && <Link class="nav-link active" aria-current="page" to="/login">{data.countcake}</Link>}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" id="search" value={searchQuery} type="search" placeholder="Search" onChange={searchFn} aria-label="Search"/>
        <button class="btn btn-outline-success" type="button"><Link to={path}>Search</Link></button>
      </form>
    </div>
  </div>
</nav>
 </div>
   )
}

export default connect(function(state,data){
   
    return{
        logedin:state.Reducer.logedIn,
        countcake:state.CartReducer.cakeCount
    }
})( Navbar );