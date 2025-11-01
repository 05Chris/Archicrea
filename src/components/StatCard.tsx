interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 text-center border border-[#D9D9D9] flex items-center gap-5">
      <div className={`w-16 h-16 ${icon ? `${icon}` : 'bg-[#D9D9D9]'} rounded-full`} />
      <div className="flex flex-col items-start">
        <div className="text-[40px] font-bold text-[#00AAE5] leading-10">
          {value}
        </div>
        <div className="text-xl font-bold">{label}</div>
      </div>
    </div>
  );
}