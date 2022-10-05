import style from "./Footer.module.scss";
import TG from "../../Assets/Icons/48px/TG.svg";
import VK from "../../Assets/Icons/48px/VK.svg";
import YT from "../../Assets/Icons/48px/YT.svg";
import Zen from "../../Assets/Icons/48px/Zen.svg";
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
                    <div className={style.social_bg}><img src={TG} alt="TG" /></div>
                    <div className={style.social_bg}><img src={VK} alt="VK" /></div>
                    <div className={style.social_bg}><img src={Zen} alt="Zen" /></div>
                    <div className={style.social_bg}><img src={YT} alt="YT" /></div>
                </div>
                <div className={style.footer__address}>
                    <h3 className={style.title}>Центральный офис</h3>
                    <p>196084, г. Санкт-Петербург,<br/>Московский, д. 97, офис 507</p>
                    <Button 
                        text={"Открыть Яндекс.Карты"}
                    />
                </div>
                <div className={style.footer__links}>
                    <a href="/">Реквизиты</a>
                    <a href="/">Договор оферта</a>
                    <a href="/">Пользовательское соглашение</a>
                    <a href="/">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;