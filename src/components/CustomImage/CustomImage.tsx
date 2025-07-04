import { motion } from "motion/react";
type CustomImageProps = {
  imgSrc: string;
  imgAlt: string;
  width: number;
  height: number;
  classname?: string;
};
const CustomImage = ({
  imgSrc,
  imgAlt,
  width,
  height,
  classname,
}: CustomImageProps) => {
  return (
    <div className={`${classname} overflow-hidden`}>
      <motion.img
        src={imgSrc}
        alt={imgAlt}
        width={width}
        height={height}
        // whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
        className="object-contain h-full w-full"
        loading="lazy"
      />
    </div>
  );
};

export default CustomImage;
