import { useLocation } from "react-router-dom";
import CustomImage from "../CustomImage/CustomImage";

const WorkDetailPage = () => {
  const location = useLocation();
  const detailData = location.state;

  console.log(detailData);

  return (
    <main>
      <section className="pt-30 p-5 flex flex-col gap-20">
        <div>
          <CustomImage
            imgSrc={"/images/home_images/issy_home.JPG"}
            imgAlt="Isioma Idehen Profile Picture"
            width={2400}
            height={3600}
            classname="max-h-[50vh] sm:max-h-[70vh] flex"
          />
          <h1 className="pt-5">{detailData.project.title}</h1>
          <p className="text-neutral-400">{detailData.project.year}</p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
          {/* Role Section */}
          <div>
            <h3 className="text-lg font-medium mb-2">Role</h3>
            <p className="text-gray-300">
              {detailData.project.roleDescription}
            </p>
            {detailData.project.collaborators && (
              <div className="mt-4">
                <h4 className="text-md font-medium mb-2">Collaborators</h4>
                <ul className="list-none  text-gray-300">
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
                    <p key={index} className="text-gray-300 mb-2">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
            {/* Role Section */}
            <h3 className="text-lg font-medium mb-2">Reference</h3>
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

        {/* Reference Images */}
        {detailData.project.finalImages && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
            {/* Role Section */}
            <h3 className="text-lg font-medium mb-2">Final</h3>
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
        {detailData.project.shootImages && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
            {/* Role Section */}

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
      </section>
    </main>
  );
};

export default WorkDetailPage;
