import { Layout, PageHeader, StatCard, StaggeredGrid, AnimatedTeamMemberCard } from '@/components';
import { teamMembers } from '@/data/teamMembers';

const TeamMembers = () => {
  return (
    <Layout>
      <main className="containerClass my-10">
        <PageHeader title="Notre équipe" />

        <section className="mt-12 border-b border-[#EDEDEE] pb-20">
          <StaggeredGrid 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto max-w-6xl px-4"
            staggerDelay={0.1}
            animationDuration={0.6}
          >
            {teamMembers.map((member) => (
              <AnimatedTeamMemberCard
                key={member.id}
                name={member.name}
                position={member.position}
                image={member.image}
                alt={member.alt}
              />
            ))}
          </StaggeredGrid>
        </section>

        <section className="py-20">
          <div className="mx-auto px-4">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <div className="flex items-center gap-5">
                  <hr className="border-t border-[#C0D22C] w-20" />
                  <span className="text-[#00AAE5] font-bold">
                    Nos professionnels
                  </span>
                </div>

                <div className="md:ml-25">
                  <h2 className="text-2xl md:text-[40px] tracking-tight font-bold text-black mb-6 leading-tight">
                    En savoir plus sur <br /> notre succès
                  </h2>
                  <p className="text-gray-600 text-sm md:text-lg leading-tight">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <StatCard value="2,879" label="Projets" />
                <StatCard value="2,879" label="Projets" />
                <StatCard value="2,879" label="Projets" />
                <StatCard value="2,879" label="Projets" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default TeamMembers;