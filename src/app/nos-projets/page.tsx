import Layout from "@/components/Layout";

const ProjetPage = () => {
  return (
    <>
      <Layout>
        <main className="my-10 mb-50">
          <div className="text-center space-y-5">
            <h1 className="text-[40px] font-bold">
              Explorer les projets récents
            </h1>
            <h3 className="text-lg text-[#444444] leading-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has <br /> been the industry&apos;s standard dummy
              text ever since the 1500s.
            </h3>
          </div>

          <section className="flex items-center justify-center my-20">
            <div className="grid grid-cols-[340px_340px_340px_340px] gap-10">

              <div className="space-y-15">
                <div className="space-y-5">
                  <div className="bg-[url('/project1_1.svg')] w-full h-[386px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-[url('/project1_2.svg')] w-full h-[534px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-[url('/project1_3.svg')] w-full h-[285px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>
              </div>

              <div className="space-y-15">
                <div className="space-y-5">
                  <div className="bg-[url('/project2_1.svg')] w-full h-[285px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-[url('/project2_2.svg')] w-full h-[534px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-[url('/project2_3.svg')] w-full h-[386px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>
              </div>

              <div className="space-y-15">
                <div className="space-y-5">
                  <div className="bg-[url('/project3_1.svg')] w-full h-[534px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-[url('/project3_2.svg')] w-full h-[385px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-[url('/project3_3.svg')] w-full h-[534px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>
              </div>

              <div className="space-y-15">
                <div className="space-y-5">
                  <div className="bg-[url('/project4_1.svg')] w-full h-[385px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-[url('/project4_2.svg')] w-full h-[386px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-[url('/project4_3.svg')] w-full h-[385px] bg-no-repeat bg-cover"/>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">Architecture</span>
                    <span className="text-xl font-light">Construction</span>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProjetPage;
