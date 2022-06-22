import { Outlet } from "react-router";

function Checkout(){
    return (
        <div>
            This is the Checkout Page
            <Outlet>

            </Outlet>
        </div>
    )
}
export default Checkout