import style from "./Cooperate.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import Form from "../../Assets/Icons/Pictures/Form.png";
import Computer from "../../Assets/Icons/Pictures/Computer.png";
import Office from "../../Assets/Icons/Pictures/Office.png";
import Link from "../Elements/Link/Link";


const Cooperate = () => {

    return (
        <Wrapper
            title={"Сотрудничаем любым удобным способом"}
        >
            <div className={style.cooperate__container}>
                <div className={style.cooperate__wrapper}>
                    <img src={Form} alt="Form" />
                    <Link text={"Онлайн-заявка"} />
                </div>
                <div className={style.cooperate__wrapper}>
                    <img src={Computer} alt="Computer" />
                    <Link text={"Звонок нам"} />
                </div>
                <div className={style.cooperate__wrapper}>
                    <img src={Office} alt="Office" />
                    <Link text={"Посещение офиса"} />
                </div>
            </div>
        </Wrapper>
    )
}

export default Cooperate