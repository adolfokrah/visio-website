import React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import { getImageUrl } from "visio-cms-lib";
import { MediaFile } from "visio-cms-lib/types";

export default function ProductVideo({video, image}:{video: string, image: MediaFile}) {
  const { scrollY } = useScroll();
  const [rotateX, setRotatex] = React.useState(28);
  const [scale, setScale] = React.useState(0.8);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const rotateXValue = 28 - latest * 0.2;
    const scaleValue = 0.8 + latest * 0.0005;
    setRotatex(rotateXValue < 0 ? 0 : rotateXValue);
    setScale(scaleValue >= 1 ? 1 : scaleValue);
  });

  return (
   <div className="overflow-hidden w-full">
     <motion.div
      className="relative p-1 border border-dark-700 bg-dark-900 rounded-xl mx-auto w-[1200px] h-[595px] hidden lg:block"
      style={{
        transform: `perspective(1200px) scaleX(${scale}) scaleY(${scale}) rotateX(${rotateX}deg)`,
      }}
    >
        <div className="relative w-full h-full rounded-lg overflow-hidden">
        <video  className="w-full h-full object-cover rounded-lg" loop autoPlay muted  src={video}></video>
        </div>
      <BorderBeam
        size={250}
        duration={12}
        delay={9}
        colorFrom="#0ABDB9"
        colorTo="#0ABDB9"
      />
    </motion.div>

    <div className="relative border border-dark-700 bg-dark-900 p-1 rounded-lg mx-auto ml-10 w-[1200px] h-[595px]  lg:hidden">

    <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
            src={getImageUrl(image)}
            fill
            alt="Product Image"
        />
        </div>
        <BorderBeam
            size={250}
            duration={12}
            delay={9}
            colorFrom="#0ABDB9"
            colorTo="#0ABDB9"
        />
    </div>
   </div>
  );
}
