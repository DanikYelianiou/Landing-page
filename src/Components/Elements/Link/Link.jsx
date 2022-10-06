import style from "./Link.module.scss";


const Link = ({text}) => {

    return (
        <a className={style.link} href="/">
            {text}
        </a>
    )
}

export default Link