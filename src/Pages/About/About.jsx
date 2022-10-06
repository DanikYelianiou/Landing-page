import { Navbar, Footer, AboutUs, Activities, Cooperate, Resources, Team, Organizations } from "../../Components";

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
                <Team />
            </div>
            <div className={style.Container}>
                <Organizations />
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage