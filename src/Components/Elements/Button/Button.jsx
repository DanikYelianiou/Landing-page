import style from "./Button.module.scss";


const CustomButton = ({text, icon, unique}) => {

    return (
        <button
            className={unique ? style.CustomBtnWhite : style.CustomBtn}
        >
            <div className={unique ? style.CustomBtnWhite__data : style.CustomBtn__data}>
                {icon && <img src={icon} alt="" />}
                {text}
            </div>
        </button>
    )
}

export default CustomButton