import HeaderHome from "../../header/HeaderHome"
import SideNav from "../../sidenav/sidenav"

function PetPortraitPage(){
    return(
        <div className="container mx-auto">
            <HeaderHome/>
            <SideNav/>
            <div className="mt-15">
                <h1>
                    Pet Portraits
                </h1>
            </div>
        </div>
    );
}export default PetPortraitPage