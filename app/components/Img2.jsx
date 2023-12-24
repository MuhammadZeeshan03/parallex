"use client";
import { Parallax } from "react-parallax";

const Img2 = () => {
  return (
    <>
      <Parallax
        className="image"
        blur={{ min: -15, max: 15 }}
        bgImage={"/images/img2.jpeg"}
        strength={200}
      >
        <div className="content">
          <span className="img-txt">A Trip to space</span>
        </div>
      </Parallax>
    </>
  );
};

export default Img2;
