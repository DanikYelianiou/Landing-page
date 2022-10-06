import style from "./Partners.module.scss";
import "./Partners.module.scss";
import Wrapper from "../Wrapper/Wrapper";

import Sber from "../../Assets/Icons/Partners/Sber.png";
import Gazprombank from "../../Assets/Icons/Partners/Gazprombank.png";
import Gazprom from "../../Assets/Icons/Partners/Gazprom.png";
import Alfa from "../../Assets/Icons/Partners/Alfa.png";
import Ural from "../../Assets/Icons/Partners/Ural.png";
import Tele2 from "../../Assets/Icons/Partners/Tele2.png";
import Polus from "../../Assets/Icons/Partners/Polus.png";
import Nornickel from "../../Assets/Icons/Partners/Nornickel.png";
import Floors from "../../Assets/Icons/Partners/Floors.png";
import Intraco from "../../Assets/Icons/Partners/Intraco.png";
import Polymetal from "../../Assets/Icons/Partners/Polymetal.png";
import KolRos from "../../Assets/Icons/Partners/KolRos.png";
import Rosatom from "../../Assets/Icons/Partners/Rosatom.png";
import Rostech from "../../Assets/Icons/Partners/Rostech.png";
import Pochta from "../../Assets/Icons/Partners/Pochta.png";
import League from "../../Assets/Icons/Partners/League.png";
import Ozon from "../../Assets/Icons/Partners/Ozon.png";
import Sunlight from "../../Assets/Icons/Partners/Sunlight.png";
import Guild from "../../Assets/Icons/Partners/Guild.png";
import Yakut from "../../Assets/Icons/Partners/Yakut.png";
import Azot from "../../Assets/Icons/Partners/Azot.png";
import Magnit from "../../Assets/Icons/Partners/Magnit.png";
import Eurohim from "../../Assets/Icons/Partners/Eurohim.png";


const Partners = () => {

    return (
        <Wrapper
            title={"С нами работают"}
            partners={"Стать партнёром"}
            noContainer={true}
        >
            <div className={style.scroll__parent}>
                <div className={style.first__scroll__element}>
                    <img src={Sber} alt="Sber" />
                    <img src={Gazprombank} alt="Gazprombank" />
                    <img src={Gazprom} alt="Gazprom" />
                    <img src={Alfa} alt="Alfa" />
                    <img src={Ural} alt="Ural" />
                    <img src={Tele2} alt="Tele2" />
                    <img src={Polus} alt="Polus" />
                    <img src={Nornickel} alt="Nornickel" />
                    <img src={Floors} alt="Floors" />
                    <img src={Intraco} alt="Intraco" />
                    <img src={Polymetal} alt="Polymetal" />
                    <img src={KolRos} alt="KolRos" />
                    <img src={Rosatom} alt="Rosatom" />
                    <img src={Rostech} alt="Rostech" />
                    <img src={Pochta} alt="Pochta" />
                    <img src={League} alt="League" />
                    <img src={Ozon} alt="Ozon" />
                    <img src={Sunlight} alt="Sunlight" />
                    <img src={Guild} alt="Guild" />
                    <img src={Yakut} alt="Yakut" />
                    <img src={Azot} alt="Azot" />
                    <img src={Magnit} alt="Magnit" />
                    <img src={Eurohim} alt="Eurohim" />
                </div>
                <div className={style.second__scroll__element}>
                    <img src={Sber} alt="Sber" />
                    <img src={Gazprombank} alt="Gazprombank" />
                    <img src={Gazprom} alt="Gazprom" />
                    <img src={Alfa} alt="Alfa" />
                    <img src={Ural} alt="Ural" />
                    <img src={Tele2} alt="Tele2" />
                    <img src={Polus} alt="Polus" />
                    <img src={Nornickel} alt="Nornickel" />
                    <img src={Floors} alt="Floors" />
                    <img src={Intraco} alt="Intraco" />
                    <img src={Polymetal} alt="Polymetal" />
                    <img src={KolRos} alt="KolRos" />
                    <img src={Rosatom} alt="Rosatom" />
                    <img src={Rostech} alt="Rostech" />
                    <img src={Pochta} alt="Pochta" />
                    <img src={League} alt="League" />
                    <img src={Ozon} alt="Ozon" />
                    <img src={Sunlight} alt="Sunlight" />
                    <img src={Guild} alt="Guild" />
                    <img src={Yakut} alt="Yakut" />
                    <img src={Azot} alt="Azot" />
                    <img src={Magnit} alt="Magnit" />
                    <img src={Eurohim} alt="Eurohim" />
                </div>
            </div>
        </Wrapper>
    )
}

export default Partners