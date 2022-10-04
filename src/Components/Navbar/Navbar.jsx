import { useState } from "react";

import Logo from "../../Assets/Logo.svg";
import Mail from "../../Assets/Mail.svg";
import Phone from "../../Assets/Phone.svg";
import PrimaryPhone from "../../Assets/PrimaryPhone.svg";
import Person from "../../Assets/Person.svg";

import style from "./Navbar.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";


const Navbar = () => {

    const [searchValue, setSearchValue] = useState("")

    return (
        <div className={style.Navbar__wrapper}>
            <div className={style.head}>
                <div className={style.head__container}>
                    <img src={Logo} alt="Logo" />
                    <Input 
                        value={searchValue}
                        onChange={setSearchValue}
                        placeholder={"Поиск по сайту"}
                    />
                    <div className={style.btn_container}>
                        <Button 
                            text={"Регистрация и вход"}
                            icon={Person}
                        />
                        <Button 
                            text={"Заказать звонок"}
                            icon={PrimaryPhone}
                        />
                    </div>
                </div>
            </div>
            <div className={style.info}>
                <div className={style.links}>
                    <a className={style.active}>О нас</a>
                    <a>Юридические услуги</a>
                    <a>Вебинары</a>
                    <a>Курсы</a>
                    <a>Статьи</a>
                    <a>Партнёрство</a>
                    <a>Новости</a>
                    <a>СДО</a>
                </div>
                <div className={style.connection}>
                    <div className={style.connection__info}>
                        <img src={Mail} alt="Mail" />
                        <p>info@grandschool.net</p>
                    </div>
                    <div className={style.connection__info}>
                        <img src={Phone} alt="Phone" />
                        <p>8 800 333-15-43</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar