"use client";
import { Parallax } from "react-parallax";

const Img1 = () => {
  return (
    <>
      <Parallax className="image" bgImage={"/images/img1.jpeg"} strength={100}>
        <div className="content">
          <span className="img-txt">A Trip to space</span>
        </div>
      </Parallax>
    </>
  );
};

export default Img1;
