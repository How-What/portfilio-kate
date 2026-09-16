import { Link, useLocation } from "react-router-dom";
import LOCATION from "../../enum/Locations";
import { PetPortrait, Comissions, Fanart, PPLife } from "../../assets/assets";
import "./sidenav.css";

function SideNav() {

    const location = useLocation();

    const stamps = [
        { route: LOCATION.PET_PORTRAITS, image: PetPortrait, label: "Pet Portraits" },
        { route: LOCATION.FANART, image: Fanart, label: "Fan Art" },
        { route: LOCATION.PPLIFE, image: PPLife, label: "Passenger Princess Life" },
        { route: LOCATION.COMISSIONS, image: Comissions, label: "Commissions" },
    ];

    function renderNav(location: ReturnType<typeof useLocation>) {
        const nav = stamps.filter(({ route }) => route !== location.pathname).map(({ route, image, label }) => (
            <li className="side-nav__stamp" key={route}>
                <Link to={route} aria-label={label}>
                    <img src={image} className="h-[18vh] w-auto object-contain" alt={label} />
                </Link>
            </li>
        ));

        return nav
    }

    return (
        <div className="side-nav fixed right-5 top-[10vh] z-10">
            <ul className="m-0 list-none items-center p-0">
                {renderNav(location)}
            </ul>
        </div>
    );
}

export default SideNav