/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandMongodb } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { FaCss3 } from "react-icons/fa";
const TechStacks = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mt-5 p-5" id="techstacks">
        Tech <span className="">Stacks</span>
      </h1>
      <div className="mt-5 flex  justify-center items-center gap-6 p-5 flex-wrap mx-auto">
        <div className="card bg-base-100 w-96  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] hover:bg-green-900 transition duration-500 hover:scale-90 ">
          <figure>
            <FaNodeJs size={200} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Node Js</h2>
            <p>
              JavaScript runtime built on Chrome's V8 engine for server-side
              development.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-success">Learn</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] hover:bg-blue-900 transition duration-500  hover:scale-90">
          <figure>
            <GrReactjs size={200} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">React Js</h2>
            <p>
              A JavaScript library for building user interfaces, maintained by
              Facebook.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-success">Learn</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] hover:bg-yellow-900 transition duration-500  hover:scale-90">
          <figure>
            <IoLogoJavascript size={200} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Javascript</h2>
            <p>
              A versatile programming language for web development and beyond.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-success">Learn</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] hover:bg-violet-900 transition duration-500  hover:scale-90">
          <figure>
            <TbBrandDjango size={200} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Django</h2>
            <p>Python backend library </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-success">Learn</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] hover:bg-cyan-900 transition duration-500  hover:scale-90">
          <figure>
            <FaCss3 size={200} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">CSS</h2>
            <p>Use for styling and designing beautiful UI</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-success">Learn</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96  shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] hover:bg-red-900 transition duration-500  hover:scale-90">
          <figure>
            <TbBrandMongodb size={200} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mongodb</h2>
            <p>
              A NoSQL database program that uses JSON-like documents with
              optional schemas.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-success">Learn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
