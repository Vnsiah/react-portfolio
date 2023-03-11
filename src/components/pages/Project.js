import React from "react";
import readMeGenerator from "../../assets/portfolio/ReadmeGenerator.jpg";
import TeamProfileGenerator from "../../assets/portfolio/TeamProfileGenerator.jpg";
import WeatherApp from "../../assets/portfolio/WeatherApp.jpg";
import FoonDer from "../../assets/portfolio/FoonDER.jpg";
import WebDesign from "../../assets/portfolio/WebDesign.jpg";
import WorkDay from "../../assets/portfolio/WorkDay.jpg";

const Project = () => {
  const portfolio = [
    {
      id: 1,
      src: readMeGenerator,
      link: 'https://vnsiah.github.io/readMeGenerator/',
      repo: 'https://github.com/Vnsiah/readMeGenerator',
   
    },
    {
      id: 2,
      src: TeamProfileGenerator,
      link: 'https://vnsiah.github.io/Team-Profile-Generator/',
      repo: 'https://github.com/Vnsiah/Team-Profile-Generator'
    },
    {
      id: 3,
      src: WeatherApp,
      link: ' https://vnsiah.github.io/Weather-Dashboard/',
      repo: 'https://github.com/Vnsiah/Weather-Dashboard'
    },
    {
      id: 4,
      src: WebDesign,
      link: 'https://vnsiah.github.io/Bootstrap-portfolio/',
      repo: 'https://github.com/Vnsiah/Bootstrap-portfolio/settings/pages'
    },
    {
      id: 5,
      src: WorkDay,
      link: 'https://vnsiah.github.io/WORKDAY/',
      repo: 'https://github.com/Vnsiah/WORKDAY'
    },
    {
      id: 6,
      src: FoonDer,
      link: 'https://rezan5910.github.io/project_1/',
      repo: 'https://github.com/rezan5910/project_1'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            PROJECT
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
                
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
