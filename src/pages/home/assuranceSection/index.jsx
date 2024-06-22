import style from './index.module.css';
import Assurance1 from '../../../assets/Assurance1.svg'

const AssuranceSection = () => {
    return (
        <section className={style.container}>
            <div className={style.innerDiv}>
                <div className={style.texts}>
                    <p className={style.firstText}>
                        How we ensure you’re <br/>
                        in good hands.
                    </p>
                    <p className={style.secondText}>
                        With our comprehensive screening process, we hand-pick highly <br/>
                        skilled candidates so you can onboard them in a matter of days.
                    </p>
                </div>
                <div className={style.reasons}>
                    <div className={style.icons}>
                        <img src={Assurance1} alt={''}/>
                    </div>
                    <p>
                        <strong>Step 1:</strong> Resume Screening
                    </p>
                </div>
                <div className={style.mainBox}>
                    <div className={style.reasons} id={style.thisBox}>
                        <div className={style.icons} id={style.thisIcon}>
                            <img src={Assurance1} alt={''}/>
                        </div>
                        <p>
                            <strong>Step 2:</strong> Video Interview
                        </p>
                    </div>
                    <p className={style.strategy}>
                        Candidates are assessed through skill based questions in a virtual setting. <br/>
                        Allowing you to gauge personality and cultural fit.
                    </p>
                </div>
                <div className={style.reasons}>
                    <div className={style.icons}>
                        <img src={Assurance1} alt={''}/>
                    </div>
                    <p>
                        <strong>Step 3:</strong> Technical Evaluation
                    </p>
                </div>
                <div className={style.reasons}>
                    <div className={style.icons}>
                        <img src={Assurance1} alt={''}/>
                    </div>
                    <p>
                        <strong>Step 4:</strong> Application Review
                    </p>
                </div>
                <div className={style.reasons}>
                    <div className={style.icons}>
                        <img src={Assurance1} alt={''}/>
                    </div>
                    <p>
                        <strong>Step 5:</strong>  Lets get to work
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AssuranceSection;