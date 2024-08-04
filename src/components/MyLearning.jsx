import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import swing from "../../public/swing.png"
import cpp from "../../public/cpp.png"
import mongo from "../../public/mongodb.jpg"
import tailwind from "../../public/tailwind.png"
import mysql from "../../public/mysql.png"
import react from "../../public/reactjs.png"
import express from "../../public/express.png"
import node from "../../public/node.png"
import docker from "../../public/docker.png"
function MyLearning() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: java,
      name: "Java",
    },
    {
      id:5,
      logo: cpp,
      name:"CPP"
    },
    
    {
      id: 6,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 7,
      logo: swing,
      // name: "swing",
    },
    {
      id:8,
      logo: tailwind,
      // name: "tailwind"
    },
    {
      id:9,
      logo:mysql,
      // name:"mysql"
    },
    {
      id: 10,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id:11,
      logo: express,
      name:"Express Js"
    },
    {
      id:12,
      logo: react,
      name:"React Js"
    },
    {
      id:13,
      logo:node,
      name:"Node Js"
    },
    {
      id:14,
      logo:docker,
      name:"Docker"
    }
  ];
  return (
    <div
      name="MyLearning"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">My Learning Technologies</h1>
        <p className="  ">
          {/* I've more than 2 years of experiance in below technologies. */}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3 mt-10">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyLearning;


