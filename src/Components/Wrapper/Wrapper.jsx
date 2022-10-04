import style from "./Wrapper.module.scss";


const Wrapper = ({title, children}) => {

    return (
        <div className={style.wrapper}>
            <h2 className={style.wrapper__title}>
                {title}
            </h2>
            <div className={style.activities_wrap}>
                {children}
            </div>
        </div>
    )
}

export default Wrapper