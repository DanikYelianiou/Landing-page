import style from "./Organizations.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import Link from "../Elements/Link/Link";


const Organizations = () => {

    const organizations = [
        "Учредительные документы",
        "Место нахождения, режим, график работы и прочая контактная информация",
        "Структура",
        "Устав",
        "Свидетельство ОГРН",
        "Свидетельство ИНН",
        "Учредительные документы",
        "Порядок приема, отчисления и восстановления обучающихся",
        "Положение об организации образовательного процесса",
        "Учредительные документы",
        "Положение о контроле за санит.-эпид. Правилами",
        "Учредительные документы",
        "Учредительные документы",
        "Учредительные документы"
    ]

    return (
        <Wrapper
            title={"Сведения об образовательной организации"}
        >
            <div className={style.organization__container}>
                {  
                    organizations.map((value, id) => (
                        <div key={id}>
                            <Link text={value}/>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default Organizations