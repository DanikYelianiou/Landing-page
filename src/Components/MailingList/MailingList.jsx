import { useState } from "react";
import style from "./MailingList.module.scss";
import CustomInput from "../Elements/Input/Input";
import CustomButton from "../Elements/Button/Button";
import Mailing from "../../Assets/Icons/Pictures/Mailing.png";


const MailingList = () => {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")

    return (
        <div className={style.mailing__container}>
            <div className={style.mailing__form}>
                <h3 className={style.mailing__title}>Читай нашу рассылку и будь в курсе новостей и скидок</h3>
                <div className={style.inputes}>
                    <CustomInput 
                        mailing={true} 
                        placeholder={"Имя"}
                        value={name}
                        onChange={setName}
                    />
                    <CustomInput 
                        mailing={true} 
                        placeholder={"Электронная почта"}
                        value={mail}
                        onChange={setMail}
                    />
                </div>
                <CustomButton 
                    mailing={true} 
                    text={"Подписаться"}
                />
            </div>
            <div>
                <img src={Mailing} alt="Mailing" />
            </div>
        </div>
    )
}

export default MailingList