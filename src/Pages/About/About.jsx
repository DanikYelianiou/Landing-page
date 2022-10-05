import { Navbar, Footer, AboutUs, Activities, Cooperate, Resources } from "../../Components";

import style from "./About.module.scss";


const AboutPage = () => {

    return (
        <div>
            <div className={style.Container}>
                <Navbar />
                <AboutUs />
                <Activities />
                <Cooperate />
                <Resources />
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage