import style from "./TeamCard.module.scss";
import Mail from "../../../Assets/Icons/20px/Mail.svg";
import Phone from "../../../Assets/Icons/14px/Phone.svg";


const TeamCard = ({photo, firstName, lastName, position, mail, phone, dob}) => {

    return (
        <div className={style.card}>
            <img className={style.photo} src={photo} alt="people" />
            <div className={style.card__bg}>
                <div className={style.container}>
                    <div className={style.main__info}>
                        <h3>{firstName}<br/>{lastName}</h3>
                        <p>{position}</p>
                    </div>
                    <div className={style.connection}>
                        <div className={style.connection__mail}>
                            <img src={Mail} alt="mial" />
                            <p>{!mail ? "..." : mail}</p>
                        </div>
                        <div className={style.connection__phone}>
                            <img src={Phone} alt="mial" />
                            <p>{phone} <span>доб. {dob}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard