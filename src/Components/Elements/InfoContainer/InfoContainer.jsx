import style from "./InfoContainer.module.scss";
import CustomButton from "../Button/Button";

const InfoContainer = ({text, btnText}) => {

    return (
        <div className={style.InfoContainer}>
            <h3>
                {text}
            </h3>
            <CustomButton 
                text={btnText}
                unique={true}
            />
        </div>
    )
}

export default InfoContainer