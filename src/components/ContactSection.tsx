export default function ContactSection() {
  return (
    <div className={`h-[50px] flex flex-col md:flex-row gap-2`}>
      <div className="flex gap-2">
        <div className="bg-[#00AAE5] text-white font-semibold text-xl px-4 flex items-center justify-center">
          Prendre rendez-vous
        </div>
          <div className="size-[50px] bg-[#C0D22C] flex items-center justify-center">
            <div className="bg-[url('/phone.svg')] bg-no-repeat bg-center size-4" />
          </div>
      </div>
          <div className="flex flex-col">
            <span>Besoins d&apos;assistance ? Appelez-nous</span>
            <span className="font-bold text-xl">+225 27 22 202 202</span>
          </div>
    </div>
  );
}