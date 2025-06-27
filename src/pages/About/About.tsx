import CustomImage from "../../components/CustomImage/CustomImage";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import useDocumentTitle from "../../utils/useDocumentTitle";

const aboutImages = [
  {
    imgSrc: "/images/about_images/issy_about_1.webp",
    imgAlt: "Isioma Idehen in a studio setting",
    imgWidth: 2400,
    imgHeight: 3600,
    containerClassname: "max-h-[50vh] sm:max-h-[70vh] flex",
  },
  {
    imgSrc: "/images/about_images/issy_about_2.webp",
    imgAlt: "Isioma Idehen in a creative workspace",
    imgWidth: 2400,
    imgHeight: 3600,
    containerClassname: "max-h-[50vh] sm:max-h-[70vh] flex",
  },
];
const About = () => {
  useDocumentTitle("Isioma Idehen | About");
  return (
    <SectionWrapper title="About">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-lg">
        <p className="text-xl lg:text-2xl">
          Isioma (Issy) Idehen, is a British-Nigerian filmmaker and creative
          director based in Canada. She began her career in finance in the UK,
          but eventually felt called to a different kind of storytelling — one
          rooted not in numbers, but in emotion and truth. Her transition into
          film was driven by a desire to make work that feels lived-in,
          unpolished, and deeply personal.
        </p>
        <p className="text-xl lg:text-2xl">
          Issy's projects often explore identity, silence, cultural dissonance,
          and spiritual reconnection. In 2025, she was selected for the Montreal
          International Film Festival's Global Impact Program and released Dear
          Creative - a visual essay that reflects her growing voice as a
          filmmaker who leans into discomfort and emotional vulnerability.
        </p>
        <p className="text-xl lg:text-2xl">
          Her latest project, In the Night I Dream, is her most personal yet.
          Told with minimal dialogue and rich visual symbolism, it explores the
          diasporan struggle to reconnect with faith, self, and indigenous
          heritage after years of erasure and distance. Isioma creates for those
          navigating multiple worlds — people who long for home, even when they
          can't name it. Her work doesn't aim to please everyone — only to speak
          clearly to the ones it's meant for.
        </p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div></div>

        {aboutImages.map((image, index) => (
          <CustomImage
            key={index}
            imgSrc={image.imgSrc}
            imgAlt={image.imgAlt}
            width={image.imgWidth}
            height={image.imgHeight}
            classname={image.containerClassname}
          />
        ))}
      </section>
    </SectionWrapper>
  );
};

export default About;
