import { useLocation } from "react-router-dom";
import CustomImage from "../CustomImage/CustomImage";

const WorkDetailPage = () => {
  const location = useLocation();
  const detailData = location.state;

  console.log(detailData);

  return (
    <section className="pt-30 p-5">
      <div className="px-8 py-16">
        <div>
          <CustomImage
            imgSrc={"/images/home_images/issy_home.JPG"}
            imgAlt="Isioma Idehen Profile Picture"
            width={2400}
            height={3600}
            classname="max-h-[50vh] sm:max-h-[70vh] flex py-2"
          />
          <h1 className="text-yellow-900">{detailData.project.title}</h1>
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
        </div>
      </div>
    </section>
  );
};

export default WorkDetailPage;
