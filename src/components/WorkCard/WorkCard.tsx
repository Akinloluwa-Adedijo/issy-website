import { useState } from "react";
import CustomImage from "../CustomImage/CustomImage";
import { workData } from "../../data/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface WorkCardProps {
  // Define the props if needed, e.g. project data
  project: workData;
  gridCol?: string;
}
const transition = { duration: 1, ease: [0.65, 0, 0.35, 1] };

const variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 0, transition },
};

const WorkCard = ({ project }: WorkCardProps) => {
  const [hover, setHover] = useState(false);

  const getGridStyle = () => {
    if (!project.gridCol) return {};

    const [start, end] = project.gridCol.split("/");
    return {
      "--grid-start": start,
      "--grid-end": end || start,
    } as React.CSSProperties;
  };

  return (
    <Link
      to={`/work/${project.title.replace(/\s+/g, "-").toLowerCase()}`}
      state={{ project }}
      className="col-span-1 md:col-start-[var(--grid-start)] md:col-end-[var(--grid-end)]"
      style={getGridStyle()}
    >
      <div className=" flex flex-col gap-4 relative">
        <div
          className="relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <CustomImage
            imgSrc={project.cover?.[0]?.imgSrc ?? ""}
            imgAlt={project.cover?.[0]?.imgAlt ?? ""}
            width={project.cover?.[0]?.imgWidth ?? 0}
            height={project.cover?.[0]?.imgHeight ?? 0}
            classname={
              project.cover?.[0]?.containerClassname ?? "max-h-[500px] flex"
            }
          />
          <motion.div
            className="absolute w-full h-full top-0 left-0"
            style={{ backgroundColor: `var(--color-${project.accentColor})` }}
            variants={variants}
            initial="hidden"
            animate={hover ? "visible" : "hidden"}
          ></motion.div>
        </div>
        <div>
          <p className="text-xl">{project.title}</p>
          <p className="text-lg text-neutral-400">{project.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
