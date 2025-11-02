import {
  ContactSection,
  CTAButton,
  Footer,
  Navbar,
  SectionTitle,
  FadeInUp,
  SlideIn,
  FadeInView,
  CountUp,
  AnimatedIcon,
  ProgressLine,
  ParallaxElement,
  SmoothScrollLink,
} from "@/components";

export default function Home() {
  return (
    <>
      <header className="relative lg:h-screen overflow-hidden w-full py-10">
        <ParallaxElement speed={-0.5} className="absolute top-0 right-0 w-full lg:w-[750px] xl:w-[1050px] 2xl:w-[1171px] h-[650px] xl:h-[750px] 2xl:h-[936px] z-10">
          <div className="w-full h-full bg-[url('/house-header.svg')] bg-cover bg-center bg-no-repeat" />
        </ParallaxElement>
        <div className="absolute hidden lg:block bottom-0 left-40 2xl:left-77 w-[532px] h-[650px] xl:h-[750px] 2xl:h-[866px] bg-[#FBF6F1] z-0" />

        <Navbar />

        <div className="containerClass relative space-y-6 z-30 mt-35 xl:mt-45 2xl:mt-56">
          <FadeInUp delay={0.3}>
            <div className="font-bold text-4xl xl:text-5xl tracking-tighter w-7/12">
              Donnez vie à vos idées,
              <br /> nous bâtissons vos projets.
            </div>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <div className="xl:text-xl">
              De la conception architecturale à la livraison de votre
              bâtiment,nous
              <br /> vous accompagnons à chaque étape avec expertise, rigueur et
              <br /> créativité.
            </div>
          </FadeInUp>
          <FadeInUp delay={0.9}>
            <SmoothScrollLink to="#services" className="inline-block">
              <CTAButton text="Demander un devis" />
            </SmoothScrollLink>
          </FadeInUp>
        </div>
      </header>

      <main className="relative">
        <SectionTitle
          subtitle="Présentation du cabinet"
          title="ARCHICREA SARL :<br />Une expérience d'architecture engagée et durable"
          description="Créé en 2009, la Société ARCHICREA SARL est un cabinet d'Architecture qui a pour vocation d'accompagner les entreprises et les particuliers dans leurs divers projets immobiliers."
          className="mt-10 mb-5"
        />

        <section id="services" className="containerClass">
          <div className="text-xs lg:text-base xl:text-lg text-[#444444] leading-6 lg:text-justify">
            Pour ces projets, ARCHICREA assure les missions de conception, le
            suivi des démarches d&apos;autorisation de construire puis la mise
            en œuvre du projet.
            <br />
            C&apos;est ainsi que tout au long de ces années d&apos;exercice,
            ARCHICREA a cumulé de nombreuses expériences dans les domaines
            suivants :
            <ul className="list-inside">
              <li className="before:content-['-'] before:mr-10">
                LE LOGEMENT : Résidences privées, Immeubles et Programmes
                immobiliers
              </li>
              <li className="before:content-['-'] before:mr-10">
                L&apos;EDUCATION ET LA CULTURE: Ecoles, Centres Culturels,
                Etablissements d&apos;enseignement professionnel
              </li>
              <li className="before:content-['-'] before:mr-10">
                LES EQUIPEMENTS : Hôpitaux, Sièges de société, etc… Depuis ces 5
                dernières années, le cabinet ARCHICREA s&apos;attache également
                à développer une démarche de développement durable. Par
                conséquent, les projets sont conçus selon l&apos;architecture
                bioclimatique, de sorte à réduire dans la mesure du possible les
                équipements énergivores, tout en assurant un certain confort aux
                usagers.
              </li>
            </ul>
          </div>

                    <div className="grid md:grid-cols-3 my-15 max-md:space-y-5">
            <div className="space-y-3 lg:space-y-6">
              <div className="flex lg:items-center gap-3">
                <AnimatedIcon 
                  iconUrl="/compas.svg"
                  className="size-14 lg:size-17"
                  animationType="rotate"
                  delay={0.2}
                />
                <span className="text-xl lg:text-2xl xl:text-3xl font-medium text-[#4E3D32] leading-6 lg:leading-8 tracking-tight">
                  Conception <br /> Architecturale
                </span>
              </div>
              <div>
                <div className="text-[10px] lg:text-sm xl:text-lg text-[#444444] leading-3 lg:leading-5">
                  Nous vous accompagnons depuis l&apos;idée <br />
                  jusqu&apos;à la formalisation technique et <br />
                  réglementaire de votre projet.
                </div>
              </div>
            </div>
            <div className="space-y-3 lg:space-y-6">
              <div className="flex items-center gap-3">
                <AnimatedIcon 
                  iconUrl="/worker.svg"
                  className="size-14 lg:size-17"
                  animationType="bounce"
                  delay={0.4}
                />
                <span className="text-xl lg:text-2xl xl:text-3xl font-medium text-[#4E3D32] leading-6 lg:leading-8 tracking-tight">
                  Pilotage et Suivi <br />
                  de Chantier
                </span>
              </div>
              <div>
                <div className="text-[10px] lg:text-sm xl:text-lg text-[#444444] leading-3 lg:leading-5">
                  Nous assurons la bonne réalisation de votre <br />
                  projet en veillant au respect des délais, du <br />
                  budget et de la qualité.
                </div>
              </div>
            </div>
            <div className="space-y-3 lg:space-y-6">
              <div className="flex items-center gap-3">
                <AnimatedIcon 
                  iconUrl="/building.svg"
                  className="size-14 lg:size-17"
                  animationType="pulse"
                  delay={0.6}
                />
                <span className="text-xl lg:text-2xl xl:text-3xl font-medium text-[#4E3D32] leading-6 lg:leading-8 tracking-tight">
                  Gestion de Projet <br /> Immobilier
                </span>
              </div>
              <div>
                <div className="text-[10px] lg:text-sm xl:text-lg text-[#444444] leading-3 lg:leading-5">
                  Nous représentons vos intérêts en tant que <br />
                  client, en vous déchargeant des contraintes <br />
                  techniques et administratives.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F4E6D5]/40 w-full overflow-x-scroll">
          <div className="containerClass relative grid grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] xl:grid-cols-[561px_1fr]">

            <SlideIn direction="left" delay={0.2}>
              <ParallaxElement speed={0.3}>
                <div className="bg-[url('/plan.svg')] bg-no-repeat bg-center w-[300px] lg:w-[400px] xl:w-[561px] h-[300px] lg:h-[474px]" />
              </ParallaxElement>
            </SlideIn>

            <FadeInView delay={0.6}>
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
            </FadeInView>

            <FadeInView delay={1.2}>
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
                <span className="text-[#00AAE5] font-bold">Voir plus {">"}</span>
              </div>
            </FadeInView>

            <SlideIn direction="right" delay={0.9}>
              <ParallaxElement speed={-0.3}>
                <div className="bg-[url('/house-section.svg')] bg-no-repeat h-[300px] lg:h-[474px]" />
              </ParallaxElement>
            </SlideIn>
          </div>
        </section>

        <section className="containerClass border-b border-black/40 my-10 lg:my-20 pb-20 grid xl:grid-cols-[1fr_550px] gap-20 xl:gap-30 2xl:gap-50">
          <div className="space-y-8 lg:space-y-13">
            <div className="flex items-center gap-5">
              <ProgressLine className="w-20" delay={0.2} />
              <span className="text-[#00AAE5]">Notre caractéristique</span>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl md:text-4xl xl:text-[45px] text-[#4E3D32] md:leading-12 tracking-tight">
                Des plans sur-mesure pour <br className="hidden xl:block" /> des
                espaces uniques.
              </h3>
              <p className="text-sm md:text-lg text-[#444444] md:leading-6 text-justify">
                Nous transformons vos idées en projets architecturaux solides et
                inspirants, alliant fonctionnalité, esthétisme et conformité
                réglementaire.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold md:text-3xl text-[#4E3D32] tracking-tight">
                Award Winning Interior & Architecture
              </h3>
              <p className="text-sm md:text-lg text-[#444444] md:leading-6 text-justify">
                The Clinic is set in beautiful grounds on the outskirts of
                Windsor, making it easily accessible by road and close to
                Heathrow Airport. With excellent facilities; comfortable
                consulting rooms, extensive grounds, en-suite bedrooms,
                patient’s dining room, indoor heated swimming pool and patient’s
                lounge to aid in your recovery.
              </p>
            </div>
            <ContactSection />
          </div>

          <div className="flex bg-[url('/building_2.svg')] bg-no-repeat bg-center md:w-[434px] h-[586px] font-bold text-white flex-col justify-start items-start xl:mr-50">
            <CountUp
              from={0}
              to={15}
              duration={2.5}
              delay={0.5}
              prefix="+"
              className="text-[128px] leading-22"
            />
            <span className="text-4xl leading-tight ml-4">
              ans <br />
              d&apos;expérience
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
