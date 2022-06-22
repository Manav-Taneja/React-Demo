import Cake from "./Cake";
function cakeList(){
    const arr=[{Title:"This is the cake",Text:"This cake will get cut when you reach Kasol",Src:'HOKAH.jpeg'},
    {Title:"This is the cake",Text:"This cake will get cut whenever you want",Src:'birthdaycake.jpeg'},
    {Title:"This is the cake",Text:"This cake will get cut on your anniversary",Src:'anniversary.jpeg'},
    {Title:"This is the cake",Text:"This cake will get on your birthday",Src:'cake.jpeg'}
];
    return(
        <div>
                   <Cake data={arr[0]}></Cake>
                   <Cake data={arr[1]}></Cake>
                   <Cake data={arr[2]}></Cake>
                   <Cake data={arr[3]}></Cake>
        </div>
    )
}
export default cakeList