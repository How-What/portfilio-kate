import StampButton from "../../buttons/StampButton";
import { Link } from "react-router-dom";
import StampType from "../../../enum/Stamps";
import HeaderHome from "../../header/HeaderHome";


function Home (){
    return (
        <>
            <HeaderHome/>
            <div className="container mx-auto">
                <div className="btn-layout">
                    <Link to='/petportraits'><StampButton label={StampType.PET_PORTRAIT} onClick={() => {}}/></Link>
                    
                    <StampButton label={StampType.PET_PORTRAIT} onClick={() => {}}/>
                    <StampButton label={StampType.PET_PORTRAIT} onClick={() => {}}/>
                    <StampButton label={StampType.PET_PORTRAIT} onClick={() => {}}/>
                </div>
            </div>
        </>
    );
}
export default Home