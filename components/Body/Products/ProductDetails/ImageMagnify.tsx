import React from "react";
import ReactImageMagnify from "react-image-magnify";
import styles from "./ProductDetails.module.scss";

const ReactMagnify: React.FC<{ img: string }> = (props) => {
  return (
    <ReactImageMagnify
      className={styles["product-picture"]}
      {...{
        smallImage: {
          alt: "Product Image",
          isFluidWidth: true,
          src: props.img,
          sizes: "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
        },
        largeImage: {
          src: props.img,
          width: 1000,
          height: 1000,
        },
        enlargedImageContainerDimensions: {
          width: "200%",
          height: "200%",
        },
      }}
    />
  );
};

export default ReactMagnify;
