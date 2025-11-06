'use client';

import Link from 'next/link';

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
  className = "",
}: ProjectCardProps) => {
  const content = (
    <div className={`space-y-5 ${className} ${ 'cursor-pointer group'}`}>
      <div
        className={`w-full bg-no-repeat bg-cover ${'group-hover:opacity-90 transition-opacity duration-300'}`}
        style={{ 
          height: `${height}px`,
          backgroundImage: `url('${imageUrl}')`
        }}
      />
      <div className="flex flex-col">
        <span className={`font-bold text-xl ${'group-hover:text-[#00D4FF] transition-colors'}`}>
          {title}
        </span>
        <span className="text-xl font-light">{subtitle}</span>
      </div>
    </div>
  );

    return (
      <Link href={`/nos-projets/details`}>
        {content}
      </Link>
    );

  return content;
};