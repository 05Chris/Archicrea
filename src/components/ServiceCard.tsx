interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className={`size-17 bg-black ${icon} bg-no-repeat bg-center rounded-[20px]`} />
        <span className="text-3xl font-medium text-[#4E3D32] leading-8">
          {title}
        </span>
      </div>
      <div className="text-lg text-[#444444] leading-5">
        {description}
      </div>
    </div>
  );
}