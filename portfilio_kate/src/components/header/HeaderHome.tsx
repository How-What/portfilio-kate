import SocialIcons from "./social-icons/SocialIcons";
import {NameBanner} from '../../assets/assets'
import { useLocation } from "react-router-dom";
import { PostageSquiggly, PetPortrait } from "../../assets/assets";

type HeaderHomeProps = {
    isPostageHidden?: boolean;
};

function HeaderHome({ isPostageHidden }: HeaderHomeProps) {
    const location = useLocation();

    const aboutme = (
        <>
            <p className="text-2xl col-span-1 row justify-end font-bold">
                About Me
            </p>
            <p className="text-base col-span-1 row justify-end">
                Kate is the very best, Kate is the greatest. Like no one ever was.
            </p>  
        </>
          
    );

    const petPortraits = (
        <>
            <h1 className="text-2xl col-span-1 row font-bold text-center">
                Pet Portraits
            </h1>
            <img src={PostageSquiggly}></img>
        </>
    );

    const fanArt = (
        <>
            <h1 className="text-2xl col-span-1 row font-bold text-center">
                Fan Art
            </h1>
            <img src={PostageSquiggly}></img>
        </>
    );

    const comissions = (
        <>
            <h1 className="text-2xl col-span-1 row font-bold text-center">
                Comissions
            </h1>
            <img src={PostageSquiggly}></img>
        </>
    );

    const pplife = (
        <>
            <h1 className="text-2xl col-span-1 row font-bold text-center">
                Passenger Princess Life
            </h1>
            <img src={PostageSquiggly}></img>
        </>
    );

    const noStamp = (
        <div className="box-border h-[100%] border-4 border-gray-300 text-center">
            <p className="mt-[33%] text-lg font-mono">postage required</p>
        </div>
            
    );

    const petPortraitsStamp = (
        <>
            <img src={PetPortrait} alt="petportrait Stamp" />
        </>
    );

    const LOCATION = {
        HOME :'/',
        PET_PORTRAITS : '/petportraits',
        FANART : '/fanart',
        COMISSIONS : '/comissions',
        PPLIFE : '/passengerprincesslife'
    }

    function getNextToStamp(location: ReturnType<typeof useLocation>){
        switch (location.pathname){
            case LOCATION.HOME:
                return aboutme
            case LOCATION.PET_PORTRAITS:
                return petPortraits
            case LOCATION.FANART:
                return fanArt
            case LOCATION.COMISSIONS:
                return comissions
            case LOCATION.PPLIFE:
                return pplife
            default:
                return aboutme
        }
    }
    function getStampType(location: ReturnType<typeof useLocation>){
        switch (location.pathname){
            case LOCATION.HOME:
                return noStamp
            case LOCATION.PET_PORTRAITS:
                return petPortraitsStamp
            case LOCATION.FANART:
                return fanArt
            case LOCATION.COMISSIONS:
                return comissions
            case LOCATION.PPLIFE:
                return pplife
            default:
                return aboutme
        }
    }
    

	return (
        <div className="h-[15vh] mt-15">
            <div className="grid h-full grid-cols-8 grid-rows-1 gap-4">
                <div className="col-span-5 flex justify-start">
                    <div className="flex h-full flex-col justify-between px-4">
                        <div>
                            <img src={NameBanner} className="h-auto max-h-[10vh] w-auto"></img>
                        </div>
                        <div className="text-lg">
                            New York, NY
                        </div>
                        <div className="text-lg">

                            {/* SOCIALS */}
                            <div className="flex items-center space-x-4 flex-wrap">
                                <SocialIcons social="instagram" />
                                <SocialIcons social="twitter" />
                                <SocialIcons social="email" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex items-center justify-center overflow-hidden">
                    <div className="grid grid-cols-1 grid-rows-2">
                            {getNextToStamp(location)}
                    </div>
                </div>
                <div className="flex col-span-1">
                    <div className={`h-40 w-30 text-center stamp-frame ${isPostageHidden ? 'postage-hidden' : ''}`}>
                        {getStampType(location)}
                    </div>
                </div>   
            </div>
             
        </div>
        
    );
}

export default HeaderHome;
