import React, { useRef, useState, useEffect } from "react";
import styles from "./Main-Slider.module.scss";
import classes from "../../../styles/index.module.scss";
import Image from "next/image";
import SliderPic1 from "../../../images/slider-pic1.jpg";
import SliderPic2 from "../../../images/slider-pic2.jpg";
import SliderPic3 from "../../../images/slider-pic5.webp";
import SliderPic4 from "../../../images/slider-pic6.webp";
import SliderPic5 from "../../../images/slider-pic7.webp";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

let curSlide: number = 0;
const maxSlides: number = 5;

const MainSlider = () => {
  const [allSlides, setAllSlides] = useState<React.RefObject<HTMLDivElement>[]>(
    []
  );
  const pic1 = useRef<HTMLDivElement>(null);
  const pic2 = useRef<HTMLDivElement>(null);
  const pic3 = useRef<HTMLDivElement>(null);
  const pic4 = useRef<HTMLDivElement>(null);
  const pic5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAllSlides([pic1, pic2, pic3, pic4, pic5]);
  }, [setAllSlides]);

  const changeSlideHandler = (slide: number) => {
    allSlides.forEach((s, i) => {
      s.current!.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  changeSlideHandler(0);

  const changeToPrevSlideHandler = () => {
    if (curSlide === 0) {
      curSlide = maxSlides - 1;
    } else {
      curSlide--;
    }
    changeSlideHandler(curSlide);
  };

  const changeToNextSlideHandler = () => {
    if (curSlide === maxSlides - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    changeSlideHandler(curSlide);
  };

  return (
    <div className={styles["slider-box"]}>
      <div className={`${styles["slider-box__inside"]} ${classes.noselect}`}>
        <div
          className={` ${styles["slider-icon"]} ${styles["slider-icon__left--box"]}`}
          tabIndex={0}
          onClick={changeToPrevSlideHandler}
        >
          <AiOutlineLeft className={` ${styles["slider-icon__left"]}`} />
        </div>
        <div
          className={` ${styles["slider-icon"]} ${styles["slider-icon__right--box"]}`}
          tabIndex={0}
          onClick={changeToNextSlideHandler}
        >
          <AiOutlineRight className={`${styles["slider-icon__right"]}`} />
        </div>
        <div className={styles["slider-pictures-box"]}>
          <div ref={pic1}>
            <Image
              src={SliderPic1}
              className={`${styles["slider-pictures-box__picture"]}`}
            />
          </div>
          <div ref={pic2}>
            <Image
              src={SliderPic2}
              className={`${styles["slider-pictures-box__picture"]}`}
            />
          </div>
          <div ref={pic3}>
            <Image
              src={SliderPic3}
              className={`${styles["slider-pictures-box__picture"]} `}
            />
          </div>
          <div ref={pic4}>
            <Image
              src={SliderPic4}
              className={`${styles["slider-pictures-box__picture"]}`}
            />
          </div>
          <div ref={pic5}>
            <Image
              src={SliderPic5}
              className={`${styles["slider-pictures-box__picture"]} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
