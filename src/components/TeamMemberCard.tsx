import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  alt: string;
}

export default function TeamMemberCard({ name, position, image, alt }: TeamMemberCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-[15px] h-[367px] w-[258px] mx-auto">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0">
          <div className="bg-[url('/lg-clippath-green.svg')] w-[260px] h-[119px] bg-no-repeat bg-bottom-left flex flex-col justify-end pl-3 pb-4 text-white">
            <h3 className="font-bold leading-tight w-40">
              {name}
            </h3>
            <p className="text-sm mt-1">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}