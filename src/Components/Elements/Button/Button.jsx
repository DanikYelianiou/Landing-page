import style from "./Button.module.scss";


const CustomButton = ({text, icon, unique, mailing}) => {

    return (
        <div>
            {
                !mailing ? (
                    <button
                        className={unique ? style.CustomBtnWhite : style.CustomBtn}
                    >
                        <div className={unique ? style.CustomBtnWhite__data : style.CustomBtn__data}>
                            {icon && <img src={icon} alt="" />}
                            {text}
                        </div>
                    </button>
                ) : (
                    <button
                        className={style.mailingBtn}
                    >
                        {text}
                    </button>
                )
            }
        </div>
    )
}

export default CustomButton