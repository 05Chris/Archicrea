import { MasonryColumn, ProjectCard, PageHeader } from "@/components";
import Layout from "@/components/Layout";

const ProjetPage = () => {
  return (
    <>
      <Layout>
        <main className="my-10 mb-50">
          <PageHeader title="Explorer les projets récents" />

          <div className="text-center space-y-5 my-10">
            <h3 className="text-xs md:text-base lg:text-lg text-[#444444] md:leading-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has <br /> been the industry&apos;s standard
              dummy text ever since the 1500s.
            </h3>
          </div>

          <section className="flex items-center justify-center my-20">
            <div className="grid grid-cols-[340px] md:grid-cols-[340px_340px] xl:grid-cols-[300px_300px_300px_300px] 2xl:grid-cols-[340px_340px_340px_340px] gap-6 2xl:gap-10">
              
              {/* Colonne 1 */}
              <MasonryColumn columnIndex={0} className="space-y-15">
                <ProjectCard 
                  imageUrl="/project1_1.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={386}
                />
                <ProjectCard 
                  imageUrl="/project1_2.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={534}
                />
                <ProjectCard 
                  imageUrl="/project1_3.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={285}
                />
              </MasonryColumn>

              {/* Colonne 2 */}
              <MasonryColumn columnIndex={1} className="space-y-15">
                <ProjectCard 
                  imageUrl="/project2_1.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={285}
                />
                <ProjectCard 
                  imageUrl="/project2_2.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={534}
                />
                <ProjectCard 
                  imageUrl="/project2_3.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={386}
                />
              </MasonryColumn>

              {/* Colonne 3 */}
              <MasonryColumn columnIndex={2} className="space-y-15">
                <ProjectCard 
                  imageUrl="/project3_1.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={534}
                />
                <ProjectCard 
                  imageUrl="/project3_2.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={385}
                />
                <ProjectCard 
                  imageUrl="/project3_3.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={534}
                />
              </MasonryColumn>

              {/* Colonne 4 */}
              <MasonryColumn columnIndex={3} className="space-y-15">
                <ProjectCard 
                  imageUrl="/project4_1.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={385}
                />
                <ProjectCard 
                  imageUrl="/project4_2.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={386}
                />
                <ProjectCard 
                  imageUrl="/project4_3.svg"
                  title="Architecture"
                  subtitle="Construction"
                  height={385}
                />
              </MasonryColumn>

            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProjetPage;
