import Image from "next/image";
import { Layout, PageHeader } from '@/components';

export default function Presentation() {
  return (
    <Layout 
      headerClassName="relative h-[339px] w-full py-10"
      headerBackgroundImage="bg-[url('/banner.svg')]"
    >
      <main className="relative py-5 md:py-20">
        <PageHeader title="Présentation" />
        <section className="containerClass border-b border-black/20 pb-20 mt-5 md:mt-20">
          <div className="mb-16">
            <h2 className="font-bold text-[#A94438] text-xl md:text-3xl xl:text-[40px] leading-6 md:leading-tight mb-8">
              ARCHICREA SARL :
              <br />
              <span>Une décennie d&apos;architecture engagée et durable</span>
            </h2>

            <div className="text-sm md:text-base xl:text-lg leading-5 space-y-2 md:space-y-5">
              <p>
                Créé en 2009, la Société ARCHICREA SARL est un cabinet
                d&apos;Architecture qui a pour vocation d&apos;accompagner les
                entreprises et les particuliers dans leurs divers projets
                immobiliers.
              </p>

              <p>
                Pour ces projets, ARCHICREA assure les missions de conception,
                le suivi des démarches d&apos;autorisation de construire puis la
                mise en œuvre du projet.
                <br /> C&apos;est ainsi que tout au long de ces années
                d&apos;exercice, ARCHICREA a cumulé de nombreuses expériences
                dans les domaines suivants :
              </p>

              <ul className="space-y-1 ml-4">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    LE LOGEMENT : Résidences privées, Immeubles et Programmes
                    immobiliers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    L&apos;EDUCATION ET LA CULTURE : Ecoles, Centres Culturels,
                    Etablissements d&apos;enseignement professionnel
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    LES EQUIPEMENTS : Hôpitaux, Sièges de société, etc... Depuis
                    ces 5 dernières années, le cabinet ARCHICREA s&apos;attache
                    également à développer une démarche de développement
                    durable. Par conséquent, les projets sont conçus selon
                    l&apos;architecture bioclimatique, de sorte à réduire dans
                    la mesure du possible les équipements énergivores, tout en
                    assurant un certain confort aux usagers.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-8">
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg h-[300px]">
                <Image
                  src="/logement-image.svg"
                  alt="Logements"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 xl:bottom-6 xl:left-6">
                  <div className="bg-[url('/md-clippath-blue.svg')] w-[126px] h-[58px] bg-no-repeat bg-contain pl-3 pt-5 xl:pt-2">
                    <h3 className="text-white font-bold text-2xl xl:text-[32px] mb-2 text-nowrap">
                    Logements
                  </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg h-[300px]">
                <Image
                  src="/education-image.svg"
                  alt="Education & culture"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 xl:bottom-6 xl:left-6">
                  <div className="bg-[url('/md-clippath-green.svg')] w-[126px] h-[58px] bg-no-repeat bg-cover pl-3 pt-5 xl:pt-2">
                    <h3 className="text-white font-bold text-2xl xl:text-[32px] mb-2 text-nowrap">
                      Education & culture
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg h-[300px]">
                <Image
                  src="/equipement-image.svg"
                  alt="Équipements"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 xl:bottom-6 xl:left-6">
                  <div className="bg-[url('/md-clippath-orange.svg')] w-[126px] h-[58px] bg-no-repeat pl-3 pt-5 xl:pt-2">
                    <h3 className="text-white font-bold text-2xl xl:text-[32px] mb-2 text-nowrap">
                      Équipements
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="containerClass mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_550px] xl:grid-cols-[1fr_750px] 2xl:grid-cols-[1fr_850px] items-center">
              <div className="hidden lg:block relative lg:h-full lg:w-full">
                <div className="absolute bottom-0 right-8 xl:right-15 2xl:right-30 bg-[url('/archicrea-gold.svg')] bg-contain bg-center bg-no-repeat w-[400px] xl:w-[529px] h-[500px] xl:h-[788px]" />
                <div className="absolute top-0 -right-10 bg-[url('/carine-kangou.svg')] bg-contain bg-center bg-no-repeat w-[400px] xl:w-[514px] h-[650px]" />
              </div>

              <div className="-space-y-2">
                <h2 className="font-bold text-[#A94438] text-2xl md:text-5xl xl:text-[64px] xl:leading-15 tracking-tight ml-20">
                  Carine Kangou
                  <br />
                  Baroan,
                </h2>

                <div className="text-[#444444] bg-[#FBF6F1] text-sm xl:text-lg leading-4 xl:leading-5 space-y-3 xl:space-y-6 py-5 md:py-13 px-5 md:px-14 xl:px-16 2xl:px-24 mb-10 rounded-[20px] text-justify">
                  <p>
                    est une Architecte Ivoirienne diplômée de l&apos;École
                    d&apos;Architecture de Paris-La-Villette en 2004. Elle a
                    créé à Abidjan le cabinet d&apos;architecture ARCHICREA
                    qu&apos;elle dirige depuis 2009. Elle est inscrite à
                    l&apos;Ordre des Architectes de Côte d&apos;Ivoire sous le
                    numéro 2006/178/117depuis 2006.
                  </p>

                  <p>
                    Carine Kangou Baroan se distingue, dans ses projets, par une
                    approche collaborative impliquant activement ses clients dès
                    la phase de conception, leur permettant ainsi de
                    s&apos;approprier pleinement leurs futurs espaces. Cette
                    démarche participative a permis à de nombreux particuliers
                    et sociétés, de réaliser leur rêve de propriété et de bâtir
                    des maisons uniques qui reflètent leur personnalité et leur
                    style de vie.
                  </p>

                  <p>
                    Parmi ses réalisations architecturales majeures en Côte
                    d&apos;Ivoire, on compte l’établissement scolaire
                    ETIMOE-MAKORE situé à Abatta, l’Opération Immobilière de la
                    LONACI à Bessikoi- Yopougon-Anyama, l’ Agence IPS CGRAEE de
                    Yopougon, La Régie de communication de la LONACI à Bietry ,
                    etc... Ces projets témoignent de son expertise et de sa
                    vision avant-gardiste dans la conception architecturale.
                  </p>

                  <p>
                    Au-delà de ses réalisations, Carine Kangou Baroan est une
                    fervente promotrice de la construction écologique, mettant
                    en avant des pratiques durables et respectueuses de
                    l’environnement dans ses projets. L’ Architecte Kangou
                    Baroan a participé à plusieurs conférences dans le domaine
                    de l’Architecture et du Bâtiment, partageant son
                    savoir-faire et encourageant l’innovation dans le secteur.
                  </p>

                  <p>
                    Elle a été chargée de Communication de l&apos;Ordre des
                    Architectes de Côte d&apos;Ivoire sous deux mandats, de 2011
                    à 2014, puis de 2014 à 2017. De plus, c&apos;est une femme
                    engagée et de foi inébranlable dans le BTP, encourageant
                    activement les femmes à embrasser les carrières dans ce
                    domaine et à poursuivre leurs aspirations.
                  </p>

                  <p>
                    En reconnaissance de ses contributions, elle a été primée à
                    de nombreuses reprises pour son engagement de solidarité
                    auprès des communautés et son influence dans le domaine de
                    l&apos;architecture
                  </p>
                  <div className="flex justify-end">
                    <div 
                      className="w-[74px] h-[34px] bg-[url('/sm-clippath-green.svg')] bg-contain bg-center bg-no-repeat"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
