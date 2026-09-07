import { useState } from "react";
import StampButton from "../../buttons/StampButton";
import { useNavigate } from "react-router-dom";
import StampType from "../../../enum/Stamps";
import HeaderHome from "../../header/HeaderHome";


function Home (){
    const navigate = useNavigate();
    const [isPostageHidden, setIsPostageHidden] = useState(false);

    function handleStampStart() {
        setIsPostageHidden(true);
    }

    return (
        <>
            <div className="container mx-auto">
                <HeaderHome isPostageHidden={isPostageHidden}/>
                <div className="btn-layout mt-15">
                    <StampButton label={StampType.PET_PORTRAIT} onStart={handleStampStart} onClick={() => navigate('/petportraits')}/>
                    <StampButton label={StampType.FANART} onStart={handleStampStart} onClick={() => navigate('/fanart')}/>
                    <StampButton label={StampType.PPLIFE} onStart={handleStampStart} onClick={() => navigate('/passengerprincesslife')}/>
                    <StampButton label={StampType.COMISSIONS} onStart={handleStampStart} onClick={() => navigate('/comissions')}/>
                </div>
            </div>
        </>
    );
}
export default Home