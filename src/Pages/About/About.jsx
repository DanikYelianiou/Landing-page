import { Navbar, Footer, AboutUs, Activities, Cooperate } from "../../Components";

import style from "./About.module.scss";


const AboutPage = () => {

    return (
        <div>
            <div className={style.Container}>
                <Navbar />
                <AboutUs />
                <Activities />
                <Cooperate />
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage