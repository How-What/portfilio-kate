import { useLocation } from "react-router-dom";
import LOCATION from "../../enum/Locations";
import { PetPortrait, Comissions, Fanart, PPLife } from "../../assets/assets";

function SideNav() {

    const location = useLocation();

    function getOtherLocations(location: ReturnType<typeof useLocation>) : string[] {
        const locations: string[] = [];
        const values = Object.values(LOCATION);

        values.forEach((value) => {
            if (value !== location.pathname) {
                locations.push(value)
            }
        });

        return locations
    }

    const petportraits = (
        <div className="flex">
            <img src={PetPortrait} className="h-[20vh] w-auto object-contain" alt="Pet Portrait" />
            <span className="pt-[25%] px-3 text-2xl"> Pet Portraits </span>
        </div>
    );

    const fanart = (
        <div className="flex">
            <img src={Fanart} className="h-[20vh] w-auto object-contain" alt="Fan Art" />
            <span className="pt-[25%] px-3 text-2xl"> Fanart </span>
        </div>   
    );

    const comissions = (
        <div className="flex">
            <img src={Comissions} className="h-[20vh] w-auto object-contain" alt="Commissions" />
            <span className="pt-[25%] px-3 text-2xl"> Comissions </span>
        </div>
    );

    const pplife = (
        <div className="flex">
            <img src={PPLife} className="h-[20vh] w-auto object-contain" alt="Passenger Princess Life" />
            <span className="text-wrap w-7 pt-[25%] px-3 text-2xl"> Passenger Princess Life </span>
        </div>
        
    );


    function getimg(location: string) {
        switch (location){
            case LOCATION.PET_PORTRAITS:
                return petportraits
            case LOCATION.FANART:
                return fanart
            case LOCATION.COMISSIONS:
                return comissions
            case LOCATION.PPLIFE:
                return pplife
            default:
                return null
        }
    }

    function renderNav(location: ReturnType<typeof useLocation>) {
        
        const nav = getOtherLocations(location).map(route =>
            <li> {getimg(route)} </li>
        );

        return nav
    }

    return (
        <div className="fixed right-20 top-[30vh] z-10">
            <span> </span>
            <ul className="m-0 list-none items-center gap-3 p-0">
                {renderNav(location)}
            </ul>
        </div>
    );
}

export default SideNav