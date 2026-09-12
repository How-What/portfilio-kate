import HeaderHome from "../../header/HeaderHome"
import SideNav from "../../sidenav/sidenav"

function ComissionsPage (){
    return(
        <div className="container mx-auto">
            <HeaderHome/>
            <SideNav/>
            <div className="mt-15">
                <h1>
                    Comissions
                </h1>
            </div>
        </div>
    )
}

export default ComissionsPage   