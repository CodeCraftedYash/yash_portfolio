import gsap from "gsap";
import { techStackData } from "../../data/techStack";

const Parallax = () => {
  const icons = techStackData.map((item, index) => {
    const random = gsap.utils.random(1.4, 1.7);

    return (
      <div key={index} className="border-2" data-speed={random}>
        <img
          src={item.img}
          alt={item.name}
          className="w-12 aspect-square object-contain"
          style={{ backgroundColor: item.color }}
        />
      </div>
    );
  });

  return (
    <div className="relative w-full h-[60vh] overflow-hidden grid place-items-center grid-cols-3 gap-4">
      {icons}
    </div>
  );
};

export default Parallax;
