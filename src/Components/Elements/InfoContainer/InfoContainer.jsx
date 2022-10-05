import style from "./InfoContainer.module.scss";
import CustomButton from "../Button/Button";

const InfoContainer = ({text, btnText, icon}) => {

    return (
        <div className={style.InfoContainer}>
            <div className={style.main__info}>
                {
                    icon && <img src={icon} alt="icon" />
                }
                <h3>
                    {text}
                </h3>
            </div>
            <CustomButton 
                text={btnText}
                unique={true}
            />
        </div>
    )
}

export default InfoContainer