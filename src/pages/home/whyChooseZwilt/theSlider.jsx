import styles from "./theSlider.module.css";
import ImageSlider from "../../../components/sliderComp";
import HalfLogo from "../../../assets/Half Logo White.svg";

const SlideBox = ({image, ListItems, firstText, lastText, givenColour}) => {

    return (
        <div className={styles.sliderContainer}>

            <div className={styles.mainSlide}>
                <ImageSlider
                    firstText={firstText}
                    items={ListItems}
                    halfLogo={HalfLogo}
                    lastText={lastText}
                    color={givenColour}
                />
                <img src={image} alt={"image"} style={{height: '569px', width: '658.78px'}}/>

            </div>

        </div>
    );
};

export default SlideBox;
