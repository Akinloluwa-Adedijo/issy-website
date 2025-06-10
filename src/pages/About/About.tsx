import CustomImage from "../../components/CustomImage/CustomImage";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

const aboutImages = [
  {
    imgSrc: "/images/home_images/issy_home.JPG",
    imgAlt: "Isioma Idehen in a studio setting",
    imgWidth: 2400,
    imgHeight: 3600,
    containerClassname: "max-h-[50vh] sm:max-h-[70vh] flex",
  },
  {
    imgSrc: "/images/home_images/issy_home.JPG",
    imgAlt: "Isioma Idehen in a creative workspace",
    imgWidth: 2400,
    imgHeight: 3600,
    containerClassname: "max-h-[50vh] sm:max-h-[70vh] flex",
  },
];
const About = () => {
  return (
    <SectionWrapper title="About">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
        <p>
          Isioma Idehen is a director, creative director and writer passionate
          about telling emotive and raw stories across different mediums. With a
          background in fashion textiles and years spent as a cinema host ion my
          late teens. I've been able to merge my love for fashion and film to
          create visually appealing narratives
        </p>
        <p>
          Isioma Idehen is a director, creative director and writer passionate
          about telling emotive and raw stories across different mediums. With a
          background in fashion textiles and years spent as a cinema host ion my
          late teens. I've been able to merge my love for fashion and film to
          create visually appealing narratives
        </p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
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
