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
          <div className="flex flex-col justify-start text-white px-10 lg:px-8">
            <h1 className="text-4xl font-bold">Victor Dev</h1>
            <p className="text-xl mt-4 leading-8">
              I am a Front End Developer with 3 years of experience.<br/> I have
              worked with React, Angular and Vue. I am passionate about web
              development and I am always looking to learn new technologies.
            </p>
          </div>
        </div>
      </article>
      <WaveBottom />
    </section>
  );
}
