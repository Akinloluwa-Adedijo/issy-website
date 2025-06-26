import CustomImage from "../../components/CustomImage/CustomImage";
import WorkCard from "../../components/WorkCard/WorkCard";
import { workData } from "../../data/data";
import useDocumentTitle from "../../utils/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Isioma Idehen | Home");
  return (
    <>
      {/* Landing Page Section */}
      <section className="flex flex-col gap-20">
        <section className="flex flex-col gap-5 p-5">
          <CustomImage
            imgSrc={"/images/home_images/issy_home.webp"}
            imgAlt="Isioma Idehen Profile Picture"
            width={2400}
            height={3600}
            classname="max-h-screen flex"
          />

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-2">
            <h1 className="text-5xl md:text-6xl lg:text-[8vw] uppercase">
              Isioma Idehen
            </h1>
            <div className="flex flex-row lg:flex-col items-end gap-5 lg:gap-2 text-lg">
              <p>Director</p>
              <p>Creative Director</p>
              <p>Writer</p>
            </div>
          </div>
        </section>

        <section className="p-5 flex flex-col gap-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end justify-between">
            <h2 className="uppercase text-3xl sm:text-[3vw]">Selected Work</h2>
            <a className="underline" href="/work">
              View All Projects
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-5">
            <WorkCard project={workData[0]} />
            <WorkCard project={workData[1]} />
            <WorkCard project={workData[2]} />
            <WorkCard project={workData[3]} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
