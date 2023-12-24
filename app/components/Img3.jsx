"use client";
import { Parallax } from "react-parallax";

const Img3 = () => {
  return (
    <>
      <Parallax className="image" bgImage={"/images/img3.jpeg"} strength={800}>
        <div className="content">
          <span className="img-txt">A Trip to space</span>
        </div>
      </Parallax>
    </>
  );
};

export default Img3;
