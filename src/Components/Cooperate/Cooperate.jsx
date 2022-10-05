import style from "./Cooperate.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import Arrow from "../../Assets/Icons/14px/PrimaryArrow.svg";
import Form from "../../Assets/Icons/Pictures/Form.png";
import Computer from "../../Assets/Icons/Pictures/Computer.png";
import Office from "../../Assets/Icons/Pictures/Office.png";


const Cooperate = () => {

    return (
        <Wrapper
            title={"Сотрудничаем любым удобным способом"}
        >
            <div className={style.cooperate__container}>
                <div className={style.cooperate__wrapper}>
                    <img src={Form} alt="Form" />
                    <a href="/">Онлайн-заявка <img src={Arrow} alt="Arrow" /></a>
                </div>
                <div className={style.cooperate__wrapper}>
                    <img src={Computer} alt="Computer" />
                    <a href="/">Онлайн-заявка <img src={Arrow} alt="Arrow" /></a>
                </div>
                <div className={style.cooperate__wrapper}>
                    <img src={Office} alt="Office" />
                    <a href="/">Онлайн-заявка <img src={Arrow} alt="Arrow" /></a>
                </div>
            </div>
        </Wrapper>
    )
}

export default Cooperate