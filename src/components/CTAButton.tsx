interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
}

export default function CTAButton({ 
  text, 
  href = "#", 
  onClick,
  className = "",
  backgroundColor = "#00AAE5"
}: CTAButtonProps) {
  const baseClasses = `px-5 py-3 text-xl text-white font-semibold inline-block ${className}`;
  const style = { backgroundColor };

  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className={baseClasses}
        style={style}
      >
        {text}
      </button>
    );
  }

  return (
    <a 
      href={href}
      className={baseClasses}
      style={style}
    >
      {text}
    </a>
  );
}