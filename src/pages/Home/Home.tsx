import CustomImage from "../../components/CustomImage/CustomImage";
import WorkCard from "../../components/WorkCard/WorkCard";
import { workData } from "../../data/data";

const Home = () => {
  return (
    <main>
      {/* Landing Page Section */}
      <section className="flex flex-col gap-20 p-5 pt-20">
        <div>
          <CustomImage
            imgSrc={"/public/images/home_images/issy_home.JPG"}
            imgAlt="Isioma Idehen Profile Picture"
            width={2400}
            height={3600}
            classname="max-h-[50vh] sm:max-h-[70vh] flex py-2"
          />

          <div>
            <h1>Isioma Idehen</h1>
            <p>Director, Creative Director and Writer</p>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:flex justify-between">
          <h2>Selected Work</h2>
          <a href="/work">View All Projects</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <WorkCard project={workData[0]} />
          <WorkCard project={workData[1]} />
          <WorkCard project={workData[2]} />
          <WorkCard project={workData[3]} />
        </div>
      </section>
    </main>
  );
};

export default Home;
