import { ServiceCardProps } from "./types/serveces";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  profession,
  description,
}) => {
  return (
    <div className="fixed  top-40 left-30 ">
      <div className=" container   mx-auto  rounded overflow-hidden shadow-lg p-4 bg-white">
        <div className="px- py-">
          <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
          <p className="text-gray-600 text-base">{profession}</p>
          {description && (
            <p className="text-gray-700 text-sm mt-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
