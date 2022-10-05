import style from "./Team.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import TeamCard from "../Elements/TeamCard/TeamCard";
import Irina from "../../Assets/Icons/Photos/Irina.png";
import Vladimir from "../../Assets/Icons/Photos/Vladimir.png";
import Maksim from "../../Assets/Icons/Photos/Maksim.png";
import Tatiana from "../../Assets/Icons/Photos/Tatiana.png";
import Olesia from "../../Assets/Icons/Photos/Olesia.png";
import Uliana from "../../Assets/Icons/Photos/Uliana.png";


const Team = () => {

    const team = [
        {
            "photo": Irina,
            "firstName": "Ирина",
            "lastName": "Тумашова",
            "position": "Руководитель отдела консалтинга",
            "mail": "i.kolesova@grandschool.net",
            "phone": "8 800 333-15-43",
            "dob": "478"
        },
        {
            "photo": Vladimir,
            "firstName": "Владимир",
            "lastName": "Сущенко",
            "position": "Менеджер по работе с клиентами отдела консалтинга",
            "mail": "v.sushchenko@grandschool.net",
            "phone": "8 800 333-15-43",
            "dob": "477"
        },
        {
            "photo": Maksim,
            "firstName": "Максим",
            "lastName": "Юнчис",
            "position": "Менеджер проектов отдела консалтинга",
            "mail": "m.yunchis@grandschool.net",
            "phone": "8 800 333-15-43",
            "dob": "475"
        },
        {
            "photo": Tatiana,
            "firstName": "Татьяна",
            "lastName": "Долина",
            "position": "Ведущий юрист отдела консалтинга",
            "mail": "t.dolina@grandschool.net",
            "phone": "8 800 333-15-43",
            "dob": "479"
        },
        {
            "photo": Olesia,
            "firstName": "Олеся",
            "lastName": "Михальцова",
            "position": "Юрист отдела консалтинга",
            "mail": "o.mikhaltsova@grandschool.net",
            "phone": "8 800 333-15-43",
            "dob": "476"
        },
        {
            "photo": Uliana,
            "firstName": "Ульяна",
            "lastName": "Ванеева",
            "position": "Директор ЧОУ ДПО «Гранд Скул»",
            "mail": null,
            "phone": "8 800 333-15-43",
            "dob": "475"
        }
    ]

    return (
        <Wrapper
            title={"Наша команда"}
        >
            <div className={style.team__wrapper}>
                {
                    team.map((value, id) => ( 
                        <TeamCard 
                            photo={value.photo}
                            firstName={value.firstName}
                            lastName={value.lastName}
                            position={value.position}
                            mail={value.mail}
                            phone={value.phone}
                            dob={value.dob}
                        />
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default Team