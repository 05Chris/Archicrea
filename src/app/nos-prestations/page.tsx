import { Layout, PageHeader } from "@/components";

const PrestationPage = () => {
  return (
    <>
      <Layout>
        <main className="my-10">
          <PageHeader title="Nos prestations" />

          <section className="my-15">
            <div className="grid grid-cols-[280px_280px_280px] lg:grid-cols-[280px_280px_280px] gap-[50px_30px] justify-center mx-auto">
              <div className="h-[378px] bg-[#F8F8F8] rounded-xl flex flex-col justify-between gap-6 p-4">
                <div className="size-[57px] border border-[#00AAE5] rounded-full flex items-center justify-center">
                  <div className="bg-[url('/1.svg')] bg-no-repeat bg-center bg-contain size-7/12" />
                </div>
                <div className="h-[70px] font-bold text-xl w-50 leading-5">
                  Etudes Architecturales
                </div>
                <div className="w-[247px] h-[178px] bg-[url('/presentation-house.svg')] bg-no-repeat rounded-lg"></div>
              </div>

              <div className="h-[378px] bg-[#F8F8F8] rounded-xl flex flex-col justify-between gap-6 p-4">
                <div className="size-[57px] border border-[#00AAE5] rounded-full flex items-center justify-center">
                  <div className="bg-[url('/2.svg')] bg-no-repeat bg-center bg-contain size-7/12" />
                </div>
                <div className="h-[70px] font-bold text-xl w-50 leading-5">
                  Assistance aux démarches de Permis de construire
                </div>
                <div className="w-[247px] h-[178px] bg-[url('/permis.svg')] bg-no-repeat rounded-lg"></div>
              </div>

              <div className="h-[378px] bg-[#F8F8F8] rounded-xl flex flex-col justify-between gap-6 p-4">
                <div className="size-[57px] border border-[#00AAE5] rounded-full flex items-center justify-center">
                  <div className="bg-[url('/3.svg')] bg-no-repeat bg-center bg-contain size-7/12" />
                </div>
                <div className="h-[70px] font-bold text-xl w-50 leading-5">
                  Suivi des travaux de construction ou rénovation
                </div>
                <div className="w-[247px] h-[178px] bg-[url('/construction.svg')] bg-no-repeat rounded-lg"></div>
              </div>

              <div className="h-[378px] bg-[#F8F8F8] rounded-xl flex flex-col justify-between gap-6 p-4">
                <div className="size-[57px] border border-[#00AAE5] rounded-full flex items-center justify-center">
                  <div className="bg-[url('/4.svg')] bg-no-repeat bg-center bg-contain size-7/12" />
                </div>
                <div className="h-[46px] font-bold text-xl w-50 leading-5">
                  Maitrise d’œuvre
                </div>
                <div className="w-[247px] h-[178px] bg-[url('/maitrise-oeuvre.svg')] bg-no-repeat rounded-lg"></div>
              </div>

              <div className="h-[378px] bg-[#F8F8F8] rounded-xl flex flex-col justify-between gap-6 p-4">
                <div className="size-[57px] border border-[#00AAE5] rounded-full flex items-center justify-center">
                  <div className="bg-[url('/5.svg')] bg-no-repeat bg-center bg-contain size-7/12" />
                </div>
                <div className="h-[46px] font-bold text-xl w-50 leading-5">
                  Assistance à Maitrise d’ouvrage
                </div>
                <div className="w-[247px] h-[178px] bg-[url('/ouvrage.svg')] bg-no-repeat rounded-lg"></div>
              </div>

              <div className="h-[378px] bg-[#F8F8F8] rounded-xl flex flex-col justify-between gap-6 p-4">
                <div className="size-[57px] border border-[#00AAE5] rounded-full flex items-center justify-center">
                  <div className="bg-[url('/6.svg')] bg-no-repeat bg-center bg-contain size-7/12" />
                </div>
                <div className="h-[46px] font-bold text-xl w-50 leading-5">
                  Maitrise d’ouvrage déléguée
                </div>
                <div className="w-[247px] h-[178px] bg-[url('/delegue.svg')] bg-no-repeat rounded-lg"></div>
              </div>
            </div>
          </section>
        </main>
        <section className="mt-60">
          <div className="bg-red-400 h-[442px] w-full bg-[url('/house-interior.svg')] bg-cover bg-center">
            <div className="relative bg-[#0A1222] w-[609px] h-full p-12 text-white xl:left-60 2xl:left-90">
              {/* Bouton vidéo */}
              <button className="absolute -top-10 right-0 size-[138px] bg-[#C0D22C] flex items-center justify-center hover:bg-lime-300 transition-colors">
                <svg
                  className="size-20 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Contenu principal */}
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-5">
                  <hr className="border-t border-[#C0D22C] w-8" />
                  <span className="text-[#00AAE5] font-bold">
                    Plus grand, plus performant, plus rapide
                  </span>
                </div>

                <h2 className="text-4xl text-[#C0D22C] font-bold leading-tight">
                  Pionnier dans le domaine
                  <br />
                  de la construction civile
                </h2>

                <p className="text-lg leading-relaxed max-w-md">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s.
                </p>

                <span className="text-[#00AAE5] font-bold">
                  Demandez un rendez-vous {">"}
                </span>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PrestationPage;
