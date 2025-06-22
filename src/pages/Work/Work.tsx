import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import WorkCard from "../../components/WorkCard/WorkCard";
import { workData } from "../../data/data";
import useDocumentTitle from "../../utils/useDocumentTitle";

const Work = () => {
  useDocumentTitle("Isioma Idehen | Works");
  return (
    <SectionWrapper title="Works">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {workData.map((project, index) => (
          <WorkCard key={index} project={project} gridCol={project.gridCol} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Work;
