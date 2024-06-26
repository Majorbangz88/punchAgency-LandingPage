import React from 'react';
import style from './index.module.css';
import Logo from '../../assets/logo.svg'
import FilledButton from "../buttons/filleButton";
import FooterContent from './data';
import HalfLogo from '../../assets/HalfLogoArrowDown.svg';
import TiltedAngle from '../../assets/Vector 343.png'


const Footer = () => {
    return (
        <footer>
            <div style={{marginTop: '-75px'}}>
                <img src={TiltedAngle} alt={'Tilted Angle'} style={{
                    display: 'flex',
                    justifySelf: 'flex-end',
                    width: '89.7%',
                    position: "absolute"
                }}/>
            </div>
            <div>
                <div className={style.tiltedBackground}>
                    <p>
                        Need a job done, and done <br/>
                        well? Get started
                    </p>
                    <div className={style.halfLogo}>
                        <img src={HalfLogo} alt={''}/>
                    </div>
                </div>
                <div className={style.innerFooterDiv}>
                    <div>
                        <img src={Logo} alt={'Logo'} className={style.footerLogo}/>
                        <p className={style.whatWeDo}>
                            We take complex hiring processes - and <br/>
                            simplify them. Connecting you to the world’s <br/>
                            highly qualified talent pool.
                        </p>
                        <div className={style.linksDiv}>
                            <p>
                                LINKS AND REDIRECTS
                            </p>
                            <div className={style.btn}>
                                <FilledButton
                                    color={'white'} text={'Hire now'}
                                    borderRadius={'13px'} padding={'22px 63px'}
                                    border={'none'} background={'rgb(41,43,52)'}
                                    cursor={'pointer'}
                                />
                                <FilledButton
                                    color={'white'} text={'Apply now'}
                                    borderRadius={'13px'} padding={'22px 65px'}
                                    border={'none'} background={'rgb(41,43,52)'}
                                    cursor={'pointer'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={style.mantraMainDiv}>
                        <p className={style.mantra}>
                            Connecting the right people to <br/>
                            the right businesses.
                        </p>
                        <div className={style.footerRight}>
                            {FooterContent.map(item => (
                                <div className={style.footerChildren} key={item.title}>
                                    <h3>{item.title}</h3>

                                    {item.List.map((item, index) => (
                                        <p key={index}>
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={style.footerFinalDiv}>
                    <p>
                        All rights reserved by Zwilt
                    </p>
                    <div className={style.footerFinalInnerDiv}>
                        <p>
                            Privacy Policy
                        </p>
                        <p>
                            Terms and Conditions
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;