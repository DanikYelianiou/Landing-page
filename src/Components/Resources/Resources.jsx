import style from "./Resources.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import InfoContainer from "../Elements/InfoContainer/InfoContainer";
import TG from "../../Assets/Icons/48px/TG_gray.svg";
import Zen from "../../Assets/Icons/48px/Zen_gray.svg";
import VK from "../../Assets/Icons/48px/VK_gray.svg";
import YT from "../../Assets/Icons/48px/YT_gray.svg";
import Grand from "../../Assets/Icons/48px/Grand_gray.svg";


const Resources = () => {

    const resources = [
        {
            "icon": TG,
            "text": "Telegram"
        },
        {
            "icon": Zen,
            "text": "Дзен"
        },
        {
            "icon": VK,
            "text": "ВКонтакте"
        },
        {
            "icon": YT,
            "text": "YouTube"
        },
        {
            "icon": Grand,
            "text": "GrandClass.net"
        }
    ]

    return (
        <Wrapper
            title={"Наши ресурсы"}
        >
            <div className={style.resources_wrap}>
                {resources.map((value, id) => (
                    <div key={id}>
                        <InfoContainer 
                            icon={value.icon}
                            text={value.text}
                            btnText={"Открыть"}
                        />
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}

export default Resources