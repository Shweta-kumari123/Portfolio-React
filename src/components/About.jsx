import React from 'react'
import user_Image from '../assets/user-Image.png'

import code_icon from '../assets/code-icon.png'
import code_icon_dark from '../assets/code-icon-dark.png'
import edu_icon from '../assets/edu-icon.png'
import edu_icon_dark from '../assets/edu-icon-dark.png'
import project_icon from '../assets/project-icon.png'
import project_icon_dark from '../assets/project-icon-dark.png'
import vscode from '../assets/vscode.png'
import firebase from '../assets/firebase.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import mongodb from '../assets/mongodb.png'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img src={user_Image} alt="" className="w-64 sm:w-80 rounded-3xl max-w-none"/>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            "Hi, I'm Shweta, a passionate software developer who loves creating innovative solutions. I'm skilled in Java and enjoy working on projects. When I'm not coding, I like to hike and learn new things. Let's connect and create something amazing together!"
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={code_icon} alt="" className="w-7 mt-3 dark:hidden"/>
              <img src={code_icon_dark} alt="" className="w-7 mt-3 hidden dark:block"/>
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Languages</h3>
              <p className="text-gray-600 text-sm dark:text-white/80">HTML, CSS, JavaScript, React Js, Next Js, Java</p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={edu_icon} alt="" className="w-7 mt-3 dark:hidden"/>
              <img src={edu_icon_dark} alt="" className="w-7 mt-3 hidden dark:block"/>
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Education</h3>
              <p className="text-gray-600 text-sm dark:text-white/80">BCA in Computer Application</p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={project_icon} alt="" className="w-7 mt-3 dark:hidden"/>
              <img src={project_icon_dark} alt="" className="w-7 mt-3 hidden dark:block"/>
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">Projects</h3>
              <p className="text-gray-600 text-sm dark:text-white/80">Built more than 5 projects</p>
            </li>
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={vscode} alt="" className="w-5 sm:w-7"/>
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={firebase} alt="" className="w-5 sm:w-7"/>
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={mongodb} alt="" className="w-5 sm:w-7"/>
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={figma} alt="" className="w-5 sm:w-7"/>
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={git} alt="" className="w-5 sm:w-7"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
