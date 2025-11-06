"use client";

import Layout from "@/components/Layout";
import { FadeInUp, SlideIn } from "@/components";
import { motion } from "framer-motion";

const ProjectDetailPage = () => {

  return (
    <Layout>
      <main className="containerClass bg-white">
        <motion.div 
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/house-interior.svg')` }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        <div className="py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <FadeInUp delay={0.2}>
                <div className="grid grid-cols-2 gap-3 pb-8 border-b text-xl border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="font-semibold mb-1">Type de projet</h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="font-semibold mb-1">Localisation</h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <h3 className="font-semibold mb-1">Année</h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h3 className="font-semibold mb-1">Chef de projet</h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <h3 className="font-semibold mb-1">
                      Maitre d&apos;Ouvrage
                    </h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <h3 className="font-semibold mb-1">Modélisation</h3>
                  </motion.div>
                </div>
              </FadeInUp>              <FadeInUp delay={0.4}>
                <div>
                  <motion.h2 
                    className="text-[40px] font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Détail du projet
                  </motion.h2>
                  <motion.p 
                    className="leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait . Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat.
                    <br /> <br />
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait
                  </motion.p>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.6}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SlideIn direction="left" delay={0.7}>
                    <div>
                      <h3 className="text-[#898A96] font-semibold mb-2">
                        Faits sur le projet
                      </h3>
                      <motion.p 
                        className="text-[20px] font-bold flex flex-col"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.9 }}
                        >
                          Approche sur mesure
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 1.0 }}
                        >
                          Design d&apos;intérieur
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 1.1 }}
                        >
                          Conception d&apos;éclairage
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 1.2 }}
                        >
                          Conception architecturale
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 1.3 }}
                        >
                          Construction
                        </motion.span>
                      </motion.p>
                    </div>
                  </SlideIn>
                  <SlideIn direction="right" delay={0.7}>
                    <div>
                      <h3 className="text-[#898A96] font-semibold mb-2">Case study</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                        iriure dolor in hendrerit in vulputate velit esse molestie
                        consequat, vel illum dolore eu feugiat nulla facilisis at
                        vero eros et accumsan et iusto odio dignissim qui blandit
                        praesent luptatum zzril delenit augue duis dolore te feugait
                        .
                      </p>
                    </div>
                  </SlideIn>
                </div>
              </FadeInUp>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[#F5F5F5] border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6">Demander un devis gratuit</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nom"
                      className="w-full px-4 py-3 bg-white rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-white rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      className="w-full px-4 py-3 bg-white rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white rounded-md text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full border border-[#00AAE5] text-[#00AAE5] py-3 rounded-md hover:bg-[#00AAE5] hover:text-white transition-colors duration-600 font-medium"
                  >
                    Demander maintenant
                  </button>
                </form>
              </div>

              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Projets connexes</h2>
                <div className="group cursor-pointer">
                  <div
                    className="w-full h-64 bg-cover bg-center rounded-lg mb-3 group-hover:opacity-90 transition-opacity"
                    style={{
                      backgroundImage: `url('/project-detail.svg')`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProjectDetailPage;
