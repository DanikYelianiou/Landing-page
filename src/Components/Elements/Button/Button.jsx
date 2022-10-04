import style from "./Button.module.scss";


const CustomButton = ({text, icon}) => {

    return (
        <button
            className={style.CustomBtn}
        >
            <div className={style.CustomBtn__data}>
                <img src={icon} />
                {text}
            </div>
        </button>
    )
}

export default CustomButton