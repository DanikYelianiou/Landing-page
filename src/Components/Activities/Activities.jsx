import style from "./Activities.module.scss";
import InfoContainer from "../Elements/InfoContainer/InfoContainer";
import Wrapper from "../Wrapper/Wrapper";


const Activities = () => {

    const activities = [
        "Дистанционное обучение",
        "Юридическое сопровождение",
        "Аттестация",
        "Разработка документации",
        "Вебинары",
        "Лицензирование",
    ]

    return (
        <Wrapper
            title={"Направления деятельности"}
        >
            <div className={style.activities_wrap}>
                {
                    activities.map((value, id) => (
                        <div key={id}>
                            <InfoContainer 
                                text={value}
                                btnText={"Подробнее"}
                            />
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default Activities