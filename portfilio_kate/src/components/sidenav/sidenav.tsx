import { useLocation } from "react-router-dom";
import LOCATION from "../../enum/Locations";
import { PetPortrait, Comissions, Fanart, PPLife } from "../../assets/assets";

function SideNav() {

    const location = useLocation();

    function getOtherLocations(location: ReturnType<typeof useLocation>) : string[] {
        const locations: string[] = [];
        const values = Object.values(LOCATION);

        values.forEach( (value) =>
        {
            console.log(value)
            if (value != location.pathname){
                locations.push( value )
            }
            
        });

        return locations
    }

    const petportraits = (
        <>
            <img src={PetPortrait} />
        </>
    );

    const fanart = (
        <>
            <img src={Fanart} />
        </>
    );

    const comissions = (
        <>
            <img src={Comissions} />
        </>
    );

    const pplife = (
        <>
            <img src={PPLife} />
        </>
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
        <div>
            {renderNav(location)}
        </div>
    );
}

export default SideNav