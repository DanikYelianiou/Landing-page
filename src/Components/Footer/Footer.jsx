import style from "./Footer.module.scss";
import TG from "../../Assets/TG.svg";
import VK from "../../Assets/VK.svg";
import YT from "../../Assets/YT.svg";
import Zen from "../../Assets/Zen.svg";
import Button from "../Elements/Button/Button";

const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={style.footer__wrapper}>
                <div className={style.footer__contacts}>
                    <h3 className={style.title}>Контакты</h3>
                    <div className={style.phone}>
                        <h3>8 800 333-15-43</h3>
                        <p>Звонок по России бесплатный</p>
                    </div>
                    <h3 className={style.mail}>info@grandschool.net</h3>
                </div>
                <div className={style.footer__social}>
                    <div className={style.social_bg}><img src={TG} /></div>
                    <div className={style.social_bg}><img src={VK} /></div>
                    <div className={style.social_bg}><img src={Zen} /></div>
                    <div className={style.social_bg}><img src={YT} /></div>
                </div>
                <div className={style.footer__address}>
                    <h3 className={style.title}>Центральный офис</h3>
                    <p>196084, г. Санкт-Петербург,<br/>Московский, д. 97, офис 507</p>
                    <Button 
                        text={"Открыть Яндекс.Карты"}
                    />
                </div>
                <div className={style.footer__links}>
                    <a>Реквизиты</a>
                    <a>Договор оферта</a>
                    <a>Пользовательское соглашение</a>
                    <a>Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;