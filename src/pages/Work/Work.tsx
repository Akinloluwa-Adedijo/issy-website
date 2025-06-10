import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import WorkCard from "../../components/WorkCard/WorkCard";
import { workData } from "../../data/data";

const Work = () => {
  return (
    <SectionWrapper title="Work">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {workData.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Work;
