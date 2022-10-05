import style from "./AboutUs.module.scss";
import Agreement from "../../Assets/Icons/Pictures/Agreement.png";
import License from "../../Assets/Icons/Pictures/License.png";


const AboutUs = () => {

    return (
        <div className={style.AboutUs}>
            <h1 className={style.title}>О нас</h1>
            <div className={style.info}>
                <div className={style.info__text}>
                    <p>
                        Один из ведущих учебных центров России. Работаем с 2006 года,<br/> за это время обучили больше 10 000 человек по 60 образовательным программам.
                    </p>
                    <br/>
                    <p>
                        Наши спикеры — профессиональная команда экспертов, специалистов и практиков, общение с которыми позволит вам не только получить полезные знания, но и перенять многолетний опыт.
                    </p>
                    <br/>
                    <p>
                        Официальный партнёр «Международного учебно-методического<br/> центра финансового мониторинга» (МУМЦФМ).
                    </p>
                    <br/>
                    <p>
                        Мы предлагаем пути решения проблем с практической точки зрения, не ограничиваясь теорией и сухим законодательством.
                    </p>
                    <br/>
                    <p>
                        Обучаясь в «Grand School» вы приобретаете реальный опыт, который поможет преуспеть в работе и бизнесе.
                    </p>
                </div>
                <div className={style.info__license}>
                    <div className={style.license__wrapper}>
                        <img src={License} alt="License" />
                        <p>Лицензия в полном размере</p>
                    </div>
                    <div className={style.license__wrapper}>
                        <img src={Agreement} alt="Agreement" />
                        <p>Соглашение с МУМЦФМ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs