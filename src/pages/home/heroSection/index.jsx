import TinyLogo from '../../../assets/zwilt-tba-1-01 2.svg';
import style from './index.module.css';
import Icon from '../../../assets/Frame 626624.svg';
import FilledButton from "../../../components/buttons/filleButton";
import GhostButton from "../../../components/buttons/ghostButton";
import HeroSectionList from './data';

const HeroSection = () => {
    return (
        <section className={style.container}>
            <p className={style.heroCaption}>
                Finding the right fit
                <span>
                    <img src={TinyLogo} alt={'TinyLogo'}/>
                </span> has <br/>
                never been easier.
            </p>
            <p className={style.heroSubCaption}>
                With our rigorous pre-vetting process, you'll
                never have to <br/> worry about finding the ideal
                candidate ever again.
            </p>
            <div className={style.midHero}>
                <p>
                    Looking for <span> design | </span>
                </p>
                <img src={Icon} alt={"Icon"}/>
            </div>
            <div className={style.heroLastSec}>
                <div className={style.heroSectionBtn}>
                    <FilledButton
                        text={'IT & Development'} background={'rgb(201,239,196)'}
                        color={'black'} borderRadius={'15px'} border={'none'}
                        padding={'10px 35px'} fontFamily={'switzer'} fontSize={'16px'}
                        fontWeight={'600'}
                    />
                    <GhostButton
                        text={'Design and Creative'} background={'#eaeaea'}
                        color={'black'} borderRadius={'15px'} border={'none'}
                        padding={'10px 35px'} fontFamily={'switzer'} fontSize={'16px'}
                        fontWeight={'600'}

                    />
                </div>
                <div className={style.rowHolder}>
                    {HeroSectionList.map((section, index) => (
                        <div key={index} className={style.row}>
                            {section.List.map((item, itemIndex) => (
                                <div key={itemIndex}
                                     className={`${style.listItem} ${
                                         item === 'MERN Stack Developer' || item === 'Explore More' ? 
                                             style.customStyle : ''}`}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroSection;