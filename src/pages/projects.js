import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import Proj1 from "../../public/images/projects/proj2.png";
import Proj2 from "../../public/images/projects/proj4.png";
import Proj3 from "../../public/images/projects/proj3.png";
import Proj4 from "../../public/images/projects/Proj1.png";
import Proj5 from "../../public/images/projects/proj5.png";
// import Proj1 from "../../public/images/projects/proj2.png";
import Transition from "@/components/Transition";
const FeaturedProject = ({ type, tech, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex item-center relative rounded-br-2xl justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-2 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%]  xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {tech}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  hover:border-dark border-2 hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light md:p-4">
      <div className="absolute top-2 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold  lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="E-commerce User Dashboard"
                tech="React.js, Material UI, Node.js, MongoDB, Github"
                img={Proj1}
                summary="Dashboard website using React.js, MaterialUI, and Node.js. Optimized website for speed and user experience. Utilized
responsive design to ensure compatibility across all devices"
                link="https://admin-client-19v1.onrender.com/"
                github="https://github.com/Akshat171/User-Dashboard"
                type="Featured project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="CHAT Application"
                tech="Tech Used : Chat Engine, Node.js, Express, JavaScript, React, Redux-toolkit, Github"
                img={Proj2}
                link="/"
                summary="Build a CHAT
Application with a ChatEngine, OpenAI API, ChatGPT. Exposed POST, GET, HTTP methods using Express. Redux Toolkit
used for state management and Redux Toolkit for making API calls"
                github="https://github.com/Akshat171/ChatBot_ChatGPT"
                type="Featured project(in working)"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Data Management dashboard"
                tech="Tech Used : ReactJS , Tailwing CSS , React Data Table"
                img={Proj3}
                summary="Build a Data Management
Application with a ReactJS, JSON, Tailwind. libraries like Reat data table is used and Redux Toolkit for making API calls"
                link="https://tzz6lw-3000.csb.app/"
                github="https://github.com/Akshat171/Assignment-"
                type="Featured project"
              />
            </div>
            <div className="col-span-12 md:col-span-12">
              <FeaturedProject
                title="Tech-Stack Blog website"
                img={Proj4}
                tech="Tech Used : React.js, Next.js, Tailwind css, GraphQl, GraphCMS, Github"
                summary="Developed a clean and modern Tech-Stack Blog website using React.js, Tailwind CSS, and Next.js. creating schemas,
and models, and finally retrieving data using GraphQL Queries. used GraphCMS a best GraphQL Content Management
System (CMS). Utilized responsive design to ensure compatibility across all devices."
                link="https://teck-stack-blogs.netlify.app/"
                github="https://github.com/Akshat171/Tech_stack-Blogs"
                type="Featured project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="To Do List"
                img={Proj5}
                link="/"
                github="https://github.com/Akshat171/T0-Do-list"
                type="Featured project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Random-Quote generator"
                img={Proj2}
                tech="ReactJS , API, css"
                link="https://generate-quote-random.netlify.app/"
                github="https://github.com/Akshat171/random-quotes-generator"
                type="Featured project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
