interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  lineColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  className?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  lineColor = "#D7A645",
  titleColor = "#4E3D32",
  descriptionColor = "#444444",
  className = ""
}: SectionTitleProps) {
  return (
    <div className={`containerClass space-y-6 ${className}`}>
      {subtitle && (
        <div className="flex items-center gap-5">
          <hr className={`border-t border-[${lineColor}] w-20`} />
          <span className="text-[#00AAE5]">{subtitle}</span>
        </div>
      )}
      <h2 
        className={`font-bold text-[${titleColor}] text-3xl lg:text-4xl xl:text-[40px] leading-11 tracking-tight`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p className={`text-xs lg:text-base xl:text-lg text-[${descriptionColor}] leading-6 text-justify`}>
          {description}
        </p>
      )}
    </div>
  );
}