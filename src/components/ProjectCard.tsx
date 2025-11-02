'use client';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  height: number;
  className?: string;
}

export const ProjectCard = ({ 
  imageUrl, 
  title, 
  subtitle, 
  height,
  className = "" 
}: ProjectCardProps) => {
  return (
    <div className={`space-y-5 ${className}`}>
      <div
        className="w-full bg-no-repeat bg-cover"
        style={{ 
          height: `${height}px`,
          backgroundImage: `url('${imageUrl}')`
        }}
      />
      <div className="flex flex-col">
        <span className="font-bold text-xl">{title}</span>
        <span className="text-xl font-light">{subtitle}</span>
      </div>
    </div>
  );
};