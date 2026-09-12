import HeaderHome from "../../header/HeaderHome"
import SideNav from "../../sidenav/sidenav"


function FanartPage (){
    return(
        <div className="container mx-auto">
            <HeaderHome/>
            <SideNav/>
            <div className="mt-15">
                <h1>
                    Fanart
                </h1>
            </div>
        </div>
    )
}

export default FanartPage