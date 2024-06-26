import style from './index.module.css';
import CTAComponent from "../../../components/callToActionComp";
import One from '../../../assets/1.png';
import Two from '../../../assets/2.svg';
import Three from '../../../assets/3.svg';
import HalfLogo from '../../../assets/Half Logo White.svg';
import RubyDev from '../../../assets/Ruby Developer.svg';
import SysopDev from '../../../assets/Sysops Engr.svg';
import Engineer1 from '../../../assets/Engineer 1.svg';
import Engineer2 from '../../../assets/Engineer 2.svg';
import Group from '../../../assets/Group 626358.svg';
import Group2 from '../../../assets/Group 626351.png'

const CallToActionSection = () => {
    const caption = 'Find your next star <br/> performer.';
    const subCaption = 'Explore the vast Zwilt marketplace to find the candidate <br/> that meets your needs.';
    const lastText = 'Join Now';

    const secondBoxCaption = 'Evaluate to your <br/> heart’s content.';
    const secondSubCaption = 'Assess the candidate through work history, transparent <br/> tests and video interviews.';
    const secondDivLastText = 'Browse More';

    const thirdBoxCaption = 'Start building <br/> your team.';
    const thirdSubCaption = 'Onboard your candidate right away and start <br/> creating the next big thing.';


    return (
        <section className={style.container}>
            <p className={style.mainCaption}>
                Start your journey today.
            </p>
            <div className={style.firstDiv}>
                <div>
                    <CTAComponent
                        image={One}
                        boldText={<span dangerouslySetInnerHTML={{ __html: caption }} />}
                        secondText={<span dangerouslySetInnerHTML={{ __html: subCaption }} />}
                        secondImage={HalfLogo}
                        lastText={lastText}
                    />
                </div>
                <div className={style.mainDiv}>
                    <div className={style.firstSubDiv}>
                        <div>
                            <div style={{background: 'rgb(255,218,206)', display: 'flex',
                                alignItems: 'end', borderRadius: '0 0 0 30px'}}>

                                <img src={RubyDev} alt={'Ruby Dev'}/>

                            </div>
                            <div style={{background: 'white', display: 'flex', padding: '20px',
                                borderRadius: '0 0 30px 30px', flexDirection: 'column', gap: '20px'}}>

                                <p style={{margin: '0', fontFamily: 'switzer', fontSize: '18px',
                                    fontWeight: '400', lineHeight: '18px', letterSpacing: '-2%',}}>
                                    Ruby Developer
                                </p>

                                <p style={{margin: '0', fontFamily: 'switzer', fontSize: '12px',
                                    fontWeight: '400', lineHeight: '14px', letterSpacing: '-2%'}}>
                                    Redwood City, California 7 <br/>
                                    years experience
                                </p>
                            </div>
                        </div>
                        <div>
                            <div style={{background: 'rgb(200,239,196)', display: 'flex',
                                alignItems: 'end', borderRadius: '0 0 0 30px'}}>
                                <img src={SysopDev} alt={"Sysops Engineer"}/>
                            </div>
                            <div style={{background: 'white', display: 'flex', padding: '20px',
                                borderRadius: '0 0 30px 30px', flexDirection: 'column', gap: '20px'}}>

                                <p style={{margin: '0', fontFamily: 'switzer', fontSize: '18px',
                                    fontWeight: '400', lineHeight: '18px', letterSpacing: '-2%',}}>
                                    System ops engineer
                                </p>

                                <p style={{margin: '0', fontFamily: 'switzer', fontSize: '12px',
                                    fontWeight: '400', lineHeight: '14px', letterSpacing: '-2%'}}>
                                    Abu Dhabi, UAE 5 years <br/>
                                    experience
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.secondSubDiv}>
                        <div style={{background: 'rgb(216,210,255)', display: 'flex',
                            alignItems: 'end', borderRadius: '30px 30px 0 0', height: '120px'}}>

                            <img src={Engineer1} alt={'Engineer 1'}/>

                        </div>

                        <div style={{background: 'rgb(253,221,139)', display: 'flex',
                            alignItems: 'end', borderRadius: '30px 30px 0 0'}}>

                            <img src={Engineer2} alt={'Engineer 2'}/>

                        </div>
                    </div>
                </div>
            </div>
            <div className={style.secondDiv}>
                <div >
                    <CTAComponent
                        image={Two}
                        boldText={<span dangerouslySetInnerHTML={{__html: secondBoxCaption}}/>}
                        secondText={<span dangerouslySetInnerHTML={{__html: secondSubCaption}}/>}
                        secondImage={HalfLogo}
                        lastText={secondDivLastText}
                    />
                </div>
                <div className={style.mainDiv}>
                    <img src={Group2} alt={''} style={{
                        height: '525px', rotate: '-2deg',
                        marginTop: '-23px'}}/>
                </div>
            </div>
            <div className={style.thirdDiv}>
                <div>
                    <CTAComponent
                        image={Three}
                        boldText={<span dangerouslySetInnerHTML={{__html: thirdBoxCaption}}/>}
                        secondText={<span dangerouslySetInnerHTML={{__html: thirdSubCaption}}/>}
                        secondImage={HalfLogo}
                        lastText={lastText}
                    />
                </div>
                <div className={style.mainDiv}>
                    <img src={Group} alt={'Group'} style={{
                        rotate: '-2deg',
                        alignSelf: 'flex-end', marginTop: '-35px'}}/>
                </div>
            </div>
        </section>
    );
}


export default CallToActionSection;