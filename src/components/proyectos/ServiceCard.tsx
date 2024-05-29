import { CustomButton } from "../common/CustomButton";
import { ServiceCardProps } from "./types/ServiceCardProps";
CustomButton;
export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  profession,
  description,
  imageUrl,
  date,

  icons,
}) => {
  return (
    <div className="flex p-4 ">
      <div className="container mx-auto rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
        <div className="px-4 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
          <p className="text-gray-600 text-base">{profession}</p>
          {description && (
            <p className="text-gray-700 text-sm mt-2">{description}</p>
          )}
          <p className="text-gray-500 text-sm mt-2">{date}</p>
          {icons && <div className="flex mt-2 space-x-2"></div>}
          <CustomButton text="Ver mas" />
        </div>
      </div>
    </div>
  );
};
