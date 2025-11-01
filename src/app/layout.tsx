import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCHICREA",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="absolute top-0 left-0 text-2xl z-50">
          <div className="md:hidden">sm</div>
          <div className="hidden md:block lg:hidden">md</div>
          <div className="hidden lg:block xl:hidden">lg</div>
          <div className="hidden xl:block 2xl:hidden">xl</div>
          <div className="hidden 2xl:block 3xl:hidden">2xl</div>
          <div className="hidden 3xl:block">3xl</div>
        </div>
        {children}
      </body>
    </html>
  );
}


<section className="bg-[#F4E6D5]/40 w-full overflow-x-scroll">
          <div className="lg:containerClass relative grid grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] xl:grid-cols-[561px_1fr]">
            <div className="bg-[url('/plan.svg')] bg-no-repeat bg-center w-[300px] lg:w-[400px] xl:w-[561px] h-[300px] lg:h-[474px]" />
            <div className="flex flex-col justify-between p-10 lg:p-20">
              <div className="text-[#4E3D32] font-bold text-2xl lg:text-4xl xl:text-[45px] lg:leading-12">
                Etudes <br />
                Architecturales
              </div>
              <div className="text-[#444444] text-xs lg:text-base xl:text-lg leading-4 lg:leading-5 w-10/12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make
              </div>
              <span className="text-[#00AAE5] text-xs lg:text-base font-bold">Voir plus {">"}</span>
            </div>
            <div className="flex flex-col justify-between p-10 lg:p-20 pl-0">
              <div className="text-[#4E3D32] font-bold text-2xl lg:text-4xl xl:text-[45px] lg:leading-12">
                Programmes <br />
                immobiliers
              </div>
              <div className="text-[#444444] text-xs lg:text-base xl:text-lg leading-4 lg:leading-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make
              </div>
              <span className="text-[#00AAE5] text-xs lg:text-base font-bold">Voir plus {">"}</span>
            </div>
            <div className="bg-[url('/house-section.svg')] bg-no-repeat h-[300px] lg:h-[474px]" />
          </div>
        </section>