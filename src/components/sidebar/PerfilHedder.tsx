import { PerfilHeaderProps } from "../../types/Header";

export const PerfilHeader: React.FC<PerfilHeaderProps> = ({
  imageSrc,
  name,
  profession,
  profesionName,
}) => {
  return (
    <div className="profile-header font-arial mt-20  ">
      <img
        src={imageSrc}
        alt="Foto de perfil"
        className="profile-picture mt-5 h-24 w-24 rounded-full object-cover transform transition-transform duration-300 hover:scale-11"
      />
      <div className="mt-2 -space-y-2">
        <h2 className="text-2xl text-zinc-600 flex font-bold">{name}</h2>
        <p className="font-bold text-dm text-900">{profession}</p>
        <span className="font-bold text-zinc-900 ">{profesionName}</span>
      </div>
    </div>
  );
};
