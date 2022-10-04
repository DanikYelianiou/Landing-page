import style from "./Activities.module.scss";
import InfoContainer from "../Elements/InfoContainer/InfoContainer";


const Activities = () => {

    const activities = [
        "Дистанционное обучение",
        "Аттестация",
        "Вебинары",
        "Юридическое сопровождение",
        "Разработка документации",
        "Лицензирование",
    ]

    return (
        <div className={style.Activities}>
            <h2 className={style.title}>Направления деятельности</h2>
            <div className={style.activities_wrap}>
                {
                    activities.map((value) => (
                        <InfoContainer 
                            text={value}
                            btnText={"Подробнее"}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Activities