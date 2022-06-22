let middleware = (state)=>(action)=>(next)=>{
    console.log("....",state,action,next)
}

export default middleware