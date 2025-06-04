import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import { workData } from "../../data/data";

interface WorkCardProps {
  // Define the props if needed, e.g. project data
  project: workData;
}
const WorkCard = ({ project }: WorkCardProps) => {
  return (
    <div className="p-5">
      <CustomImage
        imgSrc={project.cover?.[0]?.imgSrc ?? ""}
        imgAlt={project.cover?.[0]?.imgAlt ?? ""}
        width={project.cover?.[0]?.imgWidth ?? 0}
        height={project.cover?.[0]?.imgHeight ?? 0}
        classname={
          project.cover?.[0]?.containerClassname ?? "max-h-[500px] flex py-2"
        }
      />
      <p>{project.title}</p>
      <p>{project.category}</p>
    </div>
  );
};

export default WorkCard;
