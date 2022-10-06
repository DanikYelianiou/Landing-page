import style from "./Wrapper.module.scss";
import Link from "../Elements/Link/Link";


const Wrapper = ({title, children, partners, noContainer}) => {

    return (
        <div>
            {
                !noContainer ? (
                    <div className={style.wrapper}>
                        <h2 className={style.wrapper__title}>
                            {title}
                        </h2>
                        <div className={style.activities_wrap}>
                            {children}
                        </div>
                    </div>
                ) : (
                    <div className={style.wrapper__noContainer}>
                        <div className={style.wrapper__head}>
                            <h2 className={style.wrapper__title}>
                                {title}
                            </h2>
                            <Link 
                                text={partners}
                            />
                        </div>
                        <div className={style.activities_wrap}>
                            {children}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Wrapper