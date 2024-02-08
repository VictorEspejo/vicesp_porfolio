import WaveBottom from "../../components/WaveBottom";
import WaveTop from "../../components/WaveTop";
import VictorImage from "../../assets/images/victor.jpg";

export default function About() {
  return (
    <section className="w-full bg-gray-100 dark:bg-slate-800">
      <WaveTop />
      <article className="w-full bg-sky-600 text-white">
        <h1 className="w-full text-6xl font-bold text-center py-16">
          About Me
        </h1>
        <div className="flex flex-col gap-16 lg:flex-row wrap justify-center items-center ">
          <div className="flex justify-center w-full">
            <img
              src={VictorImage}
              alt="Victor Dev"
              className="w-96 h-96 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-white px-10 lg:px-8">
            <h1 className="text-4xl font-bold">Victor Espejo</h1>
            <p className="text-xl mt-4 leading-8 lg:w-1/2">
              I am Victor Espejo, a seasoned front-end developer with over 5
              years of experience, specializing in the banking sector.
              Proficient in various frameworks, I am passionate about technology
              and have a keen interest in cinema and video games.
            </p>
          </div>
        </div>
      </article>
      <WaveBottom />
    </section>
  );
}