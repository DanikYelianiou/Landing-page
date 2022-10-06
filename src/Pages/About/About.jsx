import { 
    Navbar, 
    Footer, 
    AboutUs, 
    Activities, 
    Cooperate, 
    Resources, 
    Team, 
    Organizations, 
    Support,
    MailingList,
    Partners
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
            <Partners />
            <div className={style.Container}>
                <div className={style.row}>
                    <Organizations />
                    <Support />
                </div>
                <MailingList />
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage