const HeroImg = "/IMAGE/WhatsApp Image 2026-02-02 at 23.34.43.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Engineer, Thinker, Developer, Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block grayscale hover:grayscale-0 transition-all duration-500"
                  alt="Paarth Dutta"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold text-blue-400">Paarth Dutta</span>, a B.Tech Computer Science Engineering student at 
                <span className="font-bold"> SRM Institute of Science and Technology</span>. I currently maintain a near-perfect CGPA of 
                <span className="text-blue-400 font-bold"> 9.85</span>, which reflects my dedication to academic excellence and deep technical understanding.
              </p>
              <p className="text-white">
                I specialize in building meaningful web applications that solve real-world problems. My projects, like 
                <span className="font-bold text-teal-400"> Suraksha One</span> (a women's safety system) and 
                <span className="font-bold text-teal-400"> Rentamoto</span> (a bike rental platform), showcase my ability to bridge the gap between 
                complex code and intuitive user experiences.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-blue-500 pl-4">
                  <p className="text-white italic">
                    "I believe in the power of code to transform lives. Whether it's optimizing a complex algorithm or 
                    designing a seamless user interface, my goal is always to create software that is both efficient and impactful."
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Paarth Dutta
                    </cite>
                    <div className="flex items-center gap-2">
                       <span className="text-sm text-gray-400">SRM Institute of Science and Technology</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
