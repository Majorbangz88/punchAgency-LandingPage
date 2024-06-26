import style from './index.module.css';
import SmallImg from '../../../assets/Frame 136.svg';
import Groove from '../../../assets/groovehq.svg';
import HalfLogoLeft from '../../../assets/Half Logo Left.svg';
import HalfLogoRight from '../../../assets/Half Logo.svg';
import Frame from '../../../assets/Frame 626655.svg';
import Quote from '../../../assets/Quotes.svg';
import TiltedAngle2 from '../../../assets/Tilted Angle 2.svg';

const ReviewsSection = () => {
    return (
        <section className={style.container}>
            <img src={TiltedAngle2} alt="Tillted Angle" style={{rotate: '-180deg'}} />
            <div className={style.innerContainerDiv}>
                <img src={Quote} alt={'Apostrophe'} className={style.quote}/>
                <div className={style.innerSection}>
                    <div className={style.innerContainer}>
                        <p>
                            How it worked <br/> for Jason
                            <span> <img src={SmallImg} alt={'Small image'}/> </span>
                            at <br/> <span> <img src={Groove} alt={'Groove'}/></span>
                        </p>
                        <p id={style.innerText}>
                            Zwilt enabled us to deliver on time and they’ve <br/>
                            been heavy hitters in our corner since.
                        </p>
                        <div className={style.twoIcons}>
                            <div className={style.theIcons}>
                                <img src={HalfLogoLeft} alt={'Half LogoRight'}/>
                            </div>
                            <div className={style.theIcons}>
                                <img src={HalfLogoRight} alt={'Half LogoLeft'}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.secondContainer}>
                        <div className={style.jason}>
                            <img src={Frame} alt={''}/>
                            <div className={style.textDiv}>
                                <p className={style.name}>
                                    Jason Makki
                                </p>
                                <p className={style.role}>
                                    Engineer at GROOVE
                                </p>
                                <p className={style.role} id={style.role}>
                                    San Francisco
                                </p>
                            </div>
                        </div>
                        <p className={style.zwilt}>
                            Zwilt enabled us to deliver on time and they’ve <br/>
                            been heavy hitters in our corner since. Zwilt <br/>
                            enabled us to deliver on time and they’ve been <br/>
                            heavy hitters in our corner since. Zwilt enabled us <br/>
                            to deliver on time and they’ve been heavy hitters.
                        </p>
                    </div>
                </div>
            </div>
            <img src={TiltedAngle2} alt="Tillted Angle" id={style.bottomAngle}/>
        </section>
    )
}

export default ReviewsSection;