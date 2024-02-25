import { ContainerImgFondo } from "../assets/styled/styleUniverse/FondoImg";
import { Animation } from "../component/common/Animation";
import { Img } from "../component/common/Img";
import img1 from "../assets/img/ingles.jpg";
import img2 from "../assets/img/sora.jpg";
import img3 from "../assets/img/sora2.jpg";
import img4 from "../assets/img/img1.jpg";
import miFoto from "../assets/img/fotope.jpg";
import { Texto } from "../component/common/Texto";
export const AboutPages = () => {
  return (
    <ContainerImgFondo>
      <div className="borde mx-auto p-5 relative max-w-6xl top-20 h-90 grid grid-cols-2 gap-4">
        <div>
          <div className="top-t p-10">
            <Animation title="SOBRE MI." subtitle="mis gustos" text="" />
            <p className="relative z-10 text-gray-200">
              disfruto mi trabajo de viaje
              Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
              Temporibus error enim facilis.
              Reprehenderit explicabo iure
              voluptate officiis! Ex fugit
              iste harum deserunt, earum quaerat
              omnis, tenetur quas obcaecati
              voluptatem molestias.</p>
          </div>
        </div>
        <div className="flex items-center justify-center  borde">
          <div className="relative borde inline-block overflow-hidden rounded-full w-52 h-52">
            <Img src={miFoto} text="foto" title="" />
          </div>
        </div>
      </div>

      <div className="borde mx-auto relative max-w-6xl top-20 h-90 space-y-10 grid grid-cols-1 gap-4">
        <div className="flex items-center justify-around">
          <div className="relative space-y-10 border inline-block overflow-hidden rounded w-52 h-52">
            <Img src={img1} text="foto" title="" />
          </div>
          <div className="relative border inline-block overflow-hidden rounded w-52 h-52">
            <Img src={img2} text="foto" title="" />
          </div>
          <div className="relative border inline-block overflow-hidden rounded w-52 h-52">
            <Img src={img3} text="foto" title="" />
          </div>
          <div className="relative border inline-block overflow-hidden rounded w-52 h-52">
            <Img src={img4} text="foto" title="" />
          </div>
        </div>
      </div>
    </ContainerImgFondo>
  );
};
