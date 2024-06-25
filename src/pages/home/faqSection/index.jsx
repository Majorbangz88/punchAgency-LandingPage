import style from './index.module.css';
import FaqData from "./data";

const FaqSection = () => {
    return (
        <section className={style.container}>
            <p className={style.mainCaption}>
                Frequently asked questions
            </p>

            <div>
                <div>
                    {FaqData.map((item, index) => {
                        if (item.startsWith('General')) {
                            const [general, ...rest] = item.split(' ');
                            const remainingText = rest.join(' ');

                            return (
                                <div key={index} className={style.faqItem}>
                                    <p className={style.general}><strong>{general}</strong></p>
                                    <> {remainingText.includes("Joining Process") ?
                                        <p className={style.generalJoining}><strong>Joining Process</strong></p> :
                                        <p className={style.generalJoiningNew}><strong></strong></p>
                                    }</>
                                    <p className={style.description}>

                                        {remainingText.replace('Joining Process', "")}
                                    </p>
                                </div>
                            );
                        }

                        return (
                            <div key={index} className={style.faqItemNew}>
                                <p className={style.empty}></p>
                                <p className={style.description}>{item}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    )
}

export default FaqSection;