import WaveBottom from "../../components/WaveBottom";
import WaveTop from "../../components/WaveTop";
import VictorImage from "../../assets/images/victor.png";

export default function About() {
  return (
    <section className="w-full bg-gray-100 dark:bg-slate-800">
      <WaveTop />
      <article className="w-full bg-sky-600 text-white">
        <h1 className="w-full text-6xl font-bold text-center py-16">
          About Me
        </h1>
        <div className="grid md:grid-cols-2 gap-6 md:gap-0 lg:px-32">
          <div className="flex justify-center w-full grid-span-2 md:grid-span-1">
            <img
              src={VictorImage}
              alt="Victor Dev"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full bg-white border-4 border-sky-600 dark:border-sky-800 shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-white px-10 lg:px-8">
            <h1 className="text-4xl font-bold w-full text-align-start">Victor Espejo</h1>
            <p className="text-xl mt-4 leading-8 lg:pr-32 text-align-start">
              I'm Victor Espejo, an experienced front-end developer with over 5
              years in the banking sector. Skilled in multiple frameworks, my
              passions extend to technology, cinema, and video games.
            </p>
          </div>
        </div>
      </article>
      <WaveBottom />
    </section>
  );
}
