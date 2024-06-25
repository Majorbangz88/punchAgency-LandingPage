import React, { useState } from 'react';
import  styles from './index.module.css';
import SlideBox from "./theSlider";
import takeInterViewImage from "../../../assets/take_interview.png";
import kImage from "../../../assets/kpicture.png";
import jImage from "../../../assets/jpicture .png";

const WhyChooseZwiltSection = ({ images }) => {

    return (
        <section className={styles.sliderSection}>
                <div className={styles.intro}>
                    <p className={styles.whyChoose}>Why choose <br/> Zwilt?</p>

                    <p className={styles.thePoints}>We take complex hiring <br/>
                        processes - and simplify them. <br/>
                        Connecting you to the world’s <br/>
                        highly qualified talent pool.
                    </p>
                </div>

                <div className={styles.sliderWrapper}>
                    <div className={styles.slider}>
                        <SlideBox ListItems={[
                            {text: "We pick the best for you to select."},
                            {text: "Thousands of vetted candidates in dozens of categories."},
                            {text: "Risk-free resource swapping for the best fit."}
                        ]} firstText={"Onboard without the risk."} lastText={"Learn More"} image={takeInterViewImage}
                                  givenColour={"#50589F"}/>

                        <SlideBox ListItems={[
                            {text: "Easy and transparent one-to-one chat with candidates."},
                            {text: "Simple and convenient payment methods. "},
                            {text: "Review past ratings."}
                        ]} firstText={"An open book."} lastText={"Learn More"} image={jImage} givenColour={"#FFBE2E"}/>

                        <SlideBox ListItems={[
                            {text: "Track your staff activity down to every minute with screenshots."},
                            {text: "Comprehensive timesheet data to process payments."},
                            {text: "Create projects to organize and assign tasks more effectively."}
                        ]} firstText={"Stay in the loop."} lastText={"Learn More"} image={kImage}
                                  givenColour={"#C7F4C2"}/>
                    </div>
                </div>
        </section>
);
};

export default WhyChooseZwiltSection;
