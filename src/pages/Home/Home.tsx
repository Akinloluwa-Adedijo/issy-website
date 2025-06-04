import CustomImage from "../../components/CustomImage/CustomImage";

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

          <div className="flex flex-col gap-2 sm:flex-row sm:flex justify-between">
            <h1>Isioma Idehen</h1>
            <p>Director, Creative Director and Writer</p>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:flex justify-between">
          <h2>Selected Work</h2>
          <a href="">View All Projects</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
