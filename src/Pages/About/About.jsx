import { Navbar } from "../../Components";
import { Footer } from "../../Components";

import style from "./About.module.scss";


const AboutPage = () => {

    return (
        <div>
            <div className={style.Container}>
                <Navbar />
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage