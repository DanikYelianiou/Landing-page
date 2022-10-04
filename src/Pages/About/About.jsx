import { Navbar, Footer, AboutUs, Activities } from "../../Components";

import style from "./About.module.scss";


const AboutPage = () => {

    return (
        <div>
            <div className={style.Container}>
                <Navbar />
                <AboutUs />
                <Activities />
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage