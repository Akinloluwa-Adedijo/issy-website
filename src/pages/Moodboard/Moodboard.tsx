import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import useDocumentTitle from "../../utils/useDocumentTitle";

const Moodboard = () => {
  useDocumentTitle("Isioma Idehen | Moodboard");
  return (
    <SectionWrapper title="Moodboard">
      <div>This is the moodboard page</div>
    </SectionWrapper>
  );
};

export default Moodboard;
