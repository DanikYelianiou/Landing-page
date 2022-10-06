import style from "./Support.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import RFBank from "../../Assets/Icons/Organizations/RFBank.png";
import Sci from "../../Assets/Icons/Organizations/Sci.png"
import Rosfin from "../../Assets/Icons/Organizations/Rosfin.png";
import MUMCFM from "../../Assets/Icons/Organizations/MUMCFM.png";


const Support = () => {

    return (
        <Wrapper
            title={"Работаем при поддержке"}
        >
            <div className={style.support}>
                <div>
                    <img src={RFBank} alt="RFBank" />
                </div>
                <div>
                    <img src={Sci} alt="Sci" />
                </div>
                <div>
                    <img src={Rosfin} alt="Rosfin" />
                </div>
                <div>
                    <img src={MUMCFM} alt="MUMCFM" />
                </div>
            </div>
        </Wrapper>
    )
}

export default Support