import style from './index.module.css';
import FaqData from "./data";

const FaqSection = () => {
    return (
        <section className={style.container}>
            <p className={style.mainCaption}>
                Frequently asked questions
            </p>
            <div className={style.mainFaqItem}>
                <div className={style.faqItemOne}>
                    <p>
                        General
                    </p>
                    <div className={style.faqFirstItem}>
                        <hr/>
                        <p>I want to work part-time, is that possible</p>
                        <hr/>
                        <p>How long are the average projects?</p>
                        <hr/>
                        <p>How does the payment works?</p>
                        <hr/>
                        <p>How much can I earn?</p>
                        <hr/>
                    </div>
                </div>
                <div className={style.faqItemTwo}>
                    <p>General</p>
                    <p>Joining</p>
                    <div className={style.faqSecondItem}>
                        {/*<hr/>*/}
                        <p>Process I want to work part-time, is that possible</p>
                        <hr/>
                        <p>How long are the average projects?</p>
                        <hr/>
                        <p>How long are the average projects?</p>
                        <hr/>
                        <p>How much can I earn?</p>
                        <hr/>
                    </div>
                </div>
            </div>

            {/*<div>*/}
            {/*    <div>*/}
            {/*        {FaqData.map((item, index) => {*/}
            {/*            if (item.startsWith('General')) {*/}
            {/*                const [general, ...rest] = item.split(' ');*/}
            {/*                const remainingText = rest.join(' ');*/}

            {/*                return (*/}
            {/*                    <div key={index} className={style.faqItem}>*/}
            {/*                        <p className={style.general}><strong>{general}</strong></p>*/}
            {/*                        <> { remainingText.includes("Joining") ? <p className={style.general}><strong>Joining</strong></p> : null }</>*/}
            {/*                        <p className={style.description}>{remainingText.replace('Joining', "")}</p>*/}
            {/*                    </div>*/}
            {/*                );*/}
            {/*            }*/}

            {/*            return (*/}
            {/*                <div key={index} className={style.faqItem}>*/}
            {/*                    <p className={style.description}>{item}</p>*/}
            {/*                </div>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}

        </section>
    )
}

export default FaqSection;