import { useLocation, Link } from "react-router-dom";
import CustomImage from "../CustomImage/CustomImage";
import { workData } from "../../data/data";

const WorkDetailPage = () => {
  const location = useLocation();
  const detailData = location.state;

  console.log(detailData);

  // Find current project index
  const currentProjectIndex = workData.findIndex(
    (project) => project.title === detailData.project.title
  );

  // Calculate next and previous indices with wrap-around
  const nextProjectIndex = (currentProjectIndex + 1) % workData.length;
  const prevProjectIndex =
    currentProjectIndex === 0 ? workData.length - 1 : currentProjectIndex - 1;

  const nextProject = workData[nextProjectIndex];
  const prevProject = workData[prevProjectIndex];

  return (
    <main>
      <section className="p-5 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <CustomImage
            imgSrc={detailData.project.cover[0].imgSrc}
            imgAlt={detailData.project.cover[0].imgAlt}
            width={detailData.project.cover[0].imgWidth}
            height={detailData.project.cover[0].imgHeight}
            classname="h-[50vh] lg:min-h-screen"
          />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-2">
            <h1
              className="text-5xl md:text-6xl lg:text-[8vw] uppercase"
              style={{
                color: `var(--color-${detailData.project.accentColor})`,
              }}
            >
              {detailData.project.title}
            </h1>
            <p className="text-neutral-400 text-lg">
              {detailData.project.year}
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Role Section */}
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-4xl font-medium mb-2">Role</h2>
              <p className="text-neutral-400 text-lg">
                {detailData.project.roleDescription}
              </p>
            </div>
            {detailData.project.collaborators && (
              <div>
                <h3 className="text-4xl font-medium">Collaborators</h3>
                <ul className="list-none  text-neutral-400 text-lg">
                  {detailData.project.collaborators.map(
                    (collaborator: string, index: number) => (
                      <li key={index}>{collaborator}</li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-10">
            {detailData.project.description && (
              <>
                {detailData.project.description.map(
                  (desc: string, index: number) => (
                    <p key={index} className="text-white text-lg">
                      {desc}
                    </p>
                  )
                )}
              </>
            )}
          </div>
        </div>

        {/* Reference Images */}
        {detailData.project.referenceImages && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <h2 className="text-4xl font-medium">Inspiration</h2>
            <div className="col-span-2">
              <>
                {detailData.project.referenceImages.map(
                  (
                    image: {
                      imgSrc: string;
                      imgAlt: string;
                      imgWidth: number;
                      imgHeight: number;
                      containerClassname?: string;
                    },
                    index: number
                  ) => (
                    <CustomImage
                      key={index}
                      imgSrc={image.imgSrc}
                      imgAlt={image.imgAlt}
                      width={image.imgWidth}
                      height={image.imgHeight}
                      classname={image.containerClassname}
                    />
                  )
                )}
              </>
            </div>
          </div>
        )}

        {/* Final Images */}
        {detailData.project.finalImages && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
            <h2 className="text-4xl font-medium">Execution</h2>
            <div className="col-span-2">
              <>
                {detailData.project.finalImages.map(
                  (
                    image: {
                      imgSrc: string;
                      imgAlt: string;
                      imgWidth: number;
                      imgHeight: number;
                      containerClassname?: string;
                    },
                    index: number
                  ) => (
                    <CustomImage
                      key={index}
                      imgSrc={image.imgSrc}
                      imgAlt={image.imgAlt}
                      width={image.imgWidth}
                      height={image.imgHeight}
                      classname={image.containerClassname}
                    />
                  )
                )}
              </>
            </div>
          </div>
        )}

        {/* Project with just Images */}
        {detailData.project.shootImages && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <>
              {detailData.project.shootImages.map(
                (
                  image: {
                    imgSrc: string;
                    imgAlt: string;
                    imgWidth: number;
                    imgHeight: number;
                    containerClassname?: string;
                  },
                  index: number
                ) => (
                  <CustomImage
                    key={index}
                    imgSrc={image.imgSrc}
                    imgAlt={image.imgAlt}
                    width={image.imgWidth}
                    height={image.imgHeight}
                    classname={image.containerClassname}
                  />
                )
              )}
            </>
          </div>
        )}
        {/* Project with just Images */}
        {detailData.project.upcomingImages && (
          <div className="grid grid-cols-1 gap-5">
            <>
              {detailData.project.upcomingImages.map(
                (
                  image: {
                    imgSrc: string;
                    imgAlt: string;
                    imgWidth: number;
                    imgHeight: number;
                    containerClassname?: string;
                  },
                  index: number
                ) => (
                  <CustomImage
                    key={index}
                    imgSrc={image.imgSrc}
                    imgAlt={image.imgAlt}
                    width={image.imgWidth}
                    height={image.imgHeight}
                    classname={image.containerClassname}
                  />
                )
              )}
            </>
          </div>
        )}

        {detailData.project.externalLink && (
          <div className="w-full pt-20">
            <a
              href={`https://${detailData.project.externalLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors p-5 border text-3xl"
              style={{
                color: `var(--color-${detailData.project.accentColor})`,
              }}
            >
              View Full Video
            </a>
          </div>
        )}

        {/* Project Navigation */}
        <div className="flex justify-between items-center pt-10 border-t border-neutral-800">
          <Link
            to={`/works/${prevProject.title
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            state={{ project: prevProject }}
            className="flex flex-col gap-2 hover:opacity-70 transition-opacity"
          >
            <span className="text-sm text-neutral-400">Previous Project</span>
            <span className="text-lg font-medium">{prevProject.title}</span>
          </Link>

          <Link
            to={`/works/${nextProject.title
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            state={{ project: nextProject }}
            className="flex flex-col gap-2 hover:opacity-70 transition-opacity text-right"
          >
            <span className="text-sm text-neutral-400">Next Project</span>
            <span className="text-lg font-medium">{nextProject.title}</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WorkDetailPage;
