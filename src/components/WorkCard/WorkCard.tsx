import CustomImage from "../CustomImage/CustomImage";
import { workData } from "../../data/data";
import { Link } from "react-router-dom";

interface WorkCardProps {
  // Define the props if needed, e.g. project data
  project: workData;
}
const WorkCard = ({ project }: WorkCardProps) => {
  return (
    <Link
      to={`/work/${project.title.replace(/\s+/g, "-").toLowerCase()}`}
      state={{ project }}
    >
      <div className="p-5 flex flex-col gap-4">
        <CustomImage
          imgSrc={project.cover?.[0]?.imgSrc ?? ""}
          imgAlt={project.cover?.[0]?.imgAlt ?? ""}
          width={project.cover?.[0]?.imgWidth ?? 0}
          height={project.cover?.[0]?.imgHeight ?? 0}
          classname={
            project.cover?.[0]?.containerClassname ?? "max-h-[500px] flex"
          }
        />
        <div>
          <p>{project.title}</p>
          <p>{project.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
