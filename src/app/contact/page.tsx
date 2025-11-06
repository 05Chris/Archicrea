"use client";

import { AnimatedIcon, FadeInUp, Layout, SlideIn } from "@/components";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setStatus("sending");

    // // Simulation d'envoi de formulaire
    // setTimeout(() => {
    //   console.log("Form data:", formData);
    //   setStatus("success");
    //   setFormData({ name: "", email: "", subject: "", message: "" });

    //   setTimeout(() => {
    //     setStatus("idle");
    //   }, 3000);
    // }, 1000);
  };

  return (
    <>
      <Layout>
        <main className="containerClass xl:ml-20! pb-20">
          <div className="h-[300px] lg:h-[500px] bg-gray-200 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127386.87267685376!2d-4.093093!3d5.359952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb6503d462db%3A0x53d82a64c40f0062!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          {/* Section Introduction */}

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-50 my-20 ml-40">
            <SlideIn direction="left">
              <FadeInUp>
                <div className=" max-w-3xl space-y-5">
                  <h2 className="text-3xl xl:text-[40px] font-bold">
                    Écrivez-nous
                  </h2>
                  <p className="text-lg text-[#444444] leading-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make
                  </p>
                  <h3 className="font-medium text-[#898A96] mb-6">
                    Les champs marqués d&apos;un * sont obligatoires
                  </h3>
                </div>
              </FadeInUp>

              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#444444] mb-2"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-none focus:outline-none focus:border-[#00AAE5] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#444444] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-none focus:outline-none focus:border-[#00AAE5] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#444444] mb-2"
                    >
                      Objet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-none focus:outline-none focus:border-[#00AAE5] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#444444] mb-2"
                    >
                      Écrivez votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-b border-gray-300 rounded-none focus:outline-none focus:border-[#00AAE5] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-fit border border-[#00AAE5] text-[#00AAE5] font-semibold py-3 px-8 hover:bg-[#00AAE5] hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending"
                      ? "Envoi en cours..."
                      : "Soumettre maintenant"}
                  </button>

                  {status === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3">
                      Votre message a été envoyé avec succès ! Nous vous
                      répondrons dans les plus brefs délais.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3">
                      Une erreur s&apos;est produite. Veuillez réessayer.
                    </div>
                  )}
                </form>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="space-y-15 mt-30">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-xl text-[#444444] mb-2">
                        Adresse
                      </h4>
                      <p className="text-[#444444]">
                        Lorem Ipsum is simply dummy text <br />
                        of the printing and typesetting
                        <br />
                        and typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-xl text-[#444444] mb-2">
                        Téléphone
                      </h4>
                      <p className="text-[#444444] font-medium">
                        +225 27 22 202 303
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-xl text-[#444444] mb-2">
                        Email
                      </h4>
                      <p className="text-[#444444]">
                        <a
                          href="mailto:info@archicrea.ci"
                          className="hover:text-[#00AAE5] transition-colors"
                        >
                          info@archicrea.ci.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </main>
      </Layout>
    </>
  );
}
