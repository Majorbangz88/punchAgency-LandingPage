import Union from '../../../assets/Union.svg';
import style from './index.module.css';

const GradientSection = () => {
    return (
        <div className={style.container}>
            <img src={Union} alt={'Gradient Lines'} className={style.lines}/>
        </div>
    )
}

export default GradientSection;
