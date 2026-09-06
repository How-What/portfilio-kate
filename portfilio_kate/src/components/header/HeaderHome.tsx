import SocialIcons from "./social-icons/SocialIcons";
import {NameBanner} from '../../assets/assets'

type HeaderProps = {
    route?:string;
}

function HeaderHome() {
	return (
        <div>
            <div className="grid grid-cols-8 grid-row-2 gap-4 mt-20 mx-20">
                <div className="col-span-5 flex justify-start">
                    <div className="grid grid-cols-3 grid-row-3 px-4">
                        <div className="row col-span-3">
                            <img src={NameBanner} className="w-150"></img>
                        </div>
                        <div className="text-lg row col-span-3 ">
                            New York, NY
                        </div>
                        <div className="text-lg row col-span-3 ">

                            {/* SOCIALS */}
                            <div className="flex items-center space-x-4 flex-wrap">
                                <SocialIcons social="instagram" />
                                <SocialIcons social="twitter" />
                                <SocialIcons social="email" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                <div className="grid grid-cols-1 grid-row-2">
                        <p className="text-2xl col-span-1 row justify-end font-bold">
                            About me
                        </p>
                        <p className="text-base col-span-1 row justify-end">
                            Kate is the very best, Kate is the greatest. Like no one ever was.
                        </p>    
                </div>
                </div>   
            </div>
             <div className="absolute top-10 right-10 m-10">
                    <div className="box-border h-40 w-30 border-4 border-gray-300 text-center">
                        <p className="mt-[33%] text-lg font-mono">postage required</p>
                    </div>
                </div>
        </div>
        
    );
}

export default HeaderHome;
