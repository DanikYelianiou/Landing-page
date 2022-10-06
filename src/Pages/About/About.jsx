import { 
    Navbar, 
    Footer, 
    AboutUs, 
    Activities, 
    Cooperate, 
    Resources, 
    Team, 
    Organizations, 
    Support 
} from "../../Components";
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
                <div className={style.row}>
                    <Organizations />
                    <Support />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage