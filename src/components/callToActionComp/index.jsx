import style from './index.module.css';

const CTAComponent = (prop) => {
    const {image, boldText, secondText, secondImage, lastText} = prop

    return (
        <div className={style.container}>
            <img src={image} alt={''} style={{width: '51px', height: '83px'}} />
            <div className={style.innerDiv}>
                <p className={style.caption}>{boldText}</p>
                <p className={style.subCaption}>{secondText}</p>
                <div className={style.subDiv}>
                    <div className={style.halfLogo}>
                        <img src={secondImage} alt={''}/>
                    </div>
                    <p className={style.lastText}>{lastText}</p>
                </div>
            </div>
        </div>
    )
}

export default CTAComponent;