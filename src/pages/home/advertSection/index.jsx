import Vector1 from '../../../assets/Vector.svg';
import Vector2 from '../../../assets/Vector (1).svg';
import Vector3 from '../../../assets/Vector (2).svg';
import style from './index.module.css';
import Shopify from '../../../assets/Shopify.svg';
import Magento from '../../../assets/Magento.svg';
import DataScientist from '../../../assets/Data Scientist.svg';
import WebFlow from '../../../assets/Webflow.svg';
import DotNet from '../../../assets/Dot Net.svg';
import HalfLogo from '../../../assets/Half Logo.svg';
import HalfLogoLeft from '../../../assets/Half Logo Left.svg';
import FigmaLogo from '../../../assets/Figma.svg';
import PhotoShop from '../../../assets/Photoshop.svg';
import Illustrator from '../../../assets/Adobe Illustrator.svg';
import Unreal from '../../../assets/Unreal Engine.svg';
import Cinema from '../../../assets/Cinema 4D.svg';
import HalfLogoWhite from '../../../assets/Half Logo White.svg';

const AdvertSection = () => {
    return (
        <section className={style.container}>
            <p>
                Your one-stop marketplace for finding
                <br/> the talent your business needs.
            </p>
            <div className={style.innerContainer}>
                <div className={style.mainDiv}>
                    <div className={style.findADevDiv}>
                        <p>
                            Find Dev and IT professionals to <br/>
                            scale your business.
                        </p>
                        <div className={style.itProfessionals}>
                            <div className={style.innerItPro}>
                                <img src={Vector1} alt={'Vector'}/>
                                <p>
                                    989 Skills
                                </p>
                            </div>
                            <div className={style.innerItPro}>
                                <img src={Vector2} alt={'Vector'}/>
                                <p>
                                    45 Sub-Categories
                                </p>
                            </div>
                            <div className={style.innerItPro}>
                                <img src={Vector3} alt={'Vector'}/>
                                <p>
                                    1011 Profiles
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className={style.findADevDiv}>
                        <p>
                            Explore Creative individuals with a
                            <br/>keen eye for detail.
                        </p>
                        <div className={style.itProfessionals}>
                            <div className={style.innerItPro}>
                                <img src={Vector1} alt={'Vector'}/>
                                <p>
                                    989 Skills
                                </p>
                            </div>
                            <div className={style.innerItPro}>
                                <img src={Vector2} alt={'Vector'}/>
                                <p>
                                    45 Sub-Categories
                                </p>
                            </div>
                            <div className={style.innerItPro}>
                                <img src={Vector3} alt={'Vector'}/>
                                <p>
                                    1011 Profiles
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.halfLogo}>
                        <img src={HalfLogoWhite} alt={'Logo'}
                             className={style.logoImage}/>
                        <p>
                        Explore More
                        </p>
                    </div>
                </div>
                <div className={style.stacksContainer}>
                    <div className={style.engrStacksDiv}>
                        <p>
                            IT & Development
                        </p>
                        <div className={style.engrStacksInner}>
                            <div>
                                <img src={Shopify} alt={'Shopify Logo'}
                                className={style.stackLogos}/>
                                <p className={style.stackNames}>
                                    Shopify <br/> Developer
                                </p>
                            </div>
                            <div>
                                <img src={Magento} alt={'Magento Logo'}
                                     className={style.stackLogos}/>
                                <p className={style.stackNames}>
                                    Magento <br/> Developer
                                </p>
                            </div>
                            <div>
                                <img src={DataScientist} alt={'Data Science'}
                                     className={style.stackLogos}/>
                                <p className={style.stackNames}>
                                    Data <br/> Scientist
                                </p>
                            </div>
                            <div>
                                <img src={WebFlow} alt={'Webflow Logo'}
                                     className={style.stackLogos}/>
                                <p className={style.stackNames}>
                                    Webflow <br/> Developer
                                </p>
                            </div>
                            <div>
                                <img src={DotNet} alt={'Dot Net Logo'}
                                     className={style.stackLogos}/>
                                <p className={style.stackNames}>
                                    Dot Net <br/> Developer
                                </p>
                            </div>
                            <div className={style.halfLogoDiv}>
                                <img src={HalfLogo} alt={'Logo'}
                                     className={style.halfLogo}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.engrStacksDiv}>
                        <p>
                            Design & Creative
                        </p>
                        <div className={style.engrStacksInner}>

                            <div className={style.halfLogoDiv}>
                                <img src={HalfLogoLeft} alt={'Logo'}
                                     className={style.halfLogo}/>
                            </div>
                            <div>
                                <img src={FigmaLogo} alt={'Figma Logo'}
                                     className={style.stackLogos}/>
                                <p className={style.stackNames}>
                                    UX <br/> Designer
                                </p>
                            </div>
                            <div>
                                <img src={PhotoShop} alt={'PS Logo'}
                                     className={style.stackLogos}/>
                                <p className={style.stackNames}>
                                    Graphics <br/> Designer
                                </p>
                            </div>
                            <div>
                                <img src={Illustrator} alt={'Illustrator Logo'}
                                     className={style.stackLogos}/>
                                <p className={style.stackNames}>
                                    Illustration <br/> Artist
                                </p>
                            </div>
                            <div>
                                <img src={Unreal} alt={'Unreal Logo'}
                                     className={style.stackLogos}/>
                                <p className={style.stackNames}>
                                    Unreal <br/> Engine
                                </p>
                            </div>
                            <div>
                                <img src={Cinema} alt={'Cinema 4D Logo'}
                                     className={style.stackLogos}/>
                                <p className={style.stackNames}>
                                    Cinema <br/> 4D
                                </p>
                            </div>
                        </div>
                    </div>
                    <p>
                        30 more to explore
                    </p>
                </div>
            </div>

        </section>
    )
}

export default AdvertSection;