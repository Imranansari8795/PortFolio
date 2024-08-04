import React from "react";
import java from "../../public/java.png";

import tour from "../../public/tour.png"
import realchat from "../../public/realchat.png"
import gif from "../../public/Random-GIF-Generator.png"
import passgen from "../../public/passgen.png"
import topcourses from "../../public/topcourses.png"
import bgchanger from "../../public/bgchanger.png"
import food from "../../public/food.png"
import wordtopdf from "../../public/wordpdf.png"
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      image: gif,
      netlify_link: "https://random-gifs-generator-react-app.netlify.app/",
      github_link: "https://github.com/Imranansari8795/Random_GIFs_Generator",
      name: "Random GIF Generator",
    },
    {
      id: 2,
      image: realchat,
      netlify_link: "https://real-time-chat-app-d8vq.onrender.com/",
      github_link: "https://github.com/Imranansari8795/Real-time-chat-application",
      name: "Chat Application",
    },
    {
      id: 3,
      image: passgen,
      netlify_link: "https://random-password-generator-react.netlify.app",
      github_link: "https://github.com/Imranansari8795/Random_password_Generator",
      name: "Password Generator",
    },
    {
      id: 4,
      image: topcourses,
      netlify_link: "https://top-learning-courses-react.netlify.app",
      github_link: "https://github.com/Imranansari8795/Top_Learning_Courses",
      name: "Learning Courses",
    },
    {
      id: 5,
      image: tour,
      netlify_link: "https://tourism-plan-react.netlify.app/",
      github_link: "https://github.com/Imranansari8795/Tourism_Plan_React_Project",
      name: "Tourism Plan",
    },
    {
      id: 6,
      image: bgchanger,
      netlify_link: "https://bg-changer-react-app.netlify.app/",
      github_link: "https://github.com/Imranansari8795/bgChangerReactProject",
      name: "Background Color changer",
    },
    {
      id: 7,
      image: food,
      // netlify_link: "https://bg-changer-react-app.netlify.app/",
      github_link: "https://github.com/Imranansari8795/food-delivery-mern-project",
      name: "Food Delivery Application",
    },
    {
      id:8,
      image: wordtopdf,
      github_link:"https://github.com/Imranansari8795/WordToPDF_Convertor"
    }
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, image, name, netlify_link, github_link }) => (
            <div
              className=" md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <div className="flex flex-col items-center justify-start mt-8">
                <img
                  src={image}
                  className=" w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                  alt=""
                />

              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
              </div>
              <div className="px-6 py-2 space-x-3 flex justify-around ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  <a href={netlify_link} target="_blank" rel="noopener noreferrer">Click Me</a>
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  <a href={github_link} target="_blank" rel="noopener noreferrer">Source Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
