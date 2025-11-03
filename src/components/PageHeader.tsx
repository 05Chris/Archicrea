interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
}

export default function PageHeader({ 
  title, 
  backgroundImage,
}: PageHeaderProps) {
  return (
    <div className={`containerClass relative z-10 flex justify-center items-center`}>
      {backgroundImage && (
        <div className={`absolute top-0 right-0 w-full h-full ${backgroundImage} bg-cover bg-bottom z-0`} />
      )}
      <div className="text-center relative z-10">
        <h1 className="font-bold text-2xl md:text-4xl xl:text-5xl text-black mb-4">{title}</h1>
        <div className="w-9/12 h-px bg-[#C0D22C] mx-auto"></div>
      </div>
    </div>
  );
}