import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
// import profilePic from "../../public/images/profile/developer-pic-1.png";
import profilePic from "../../public/images/profile/prof5.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Transition from "@/components/Transition";
export default function Home() {
  return (
    <>
      <Head>
        <title>Akshat Jangid</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transition />
      <main className="flex font-mont items-center text-dark w-full dark:text-light min-h-screen">
        <Layout className="pt-0 md:!pt-16 sm:!pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Image"
                className="w-full h-auto lg:!hidden md:!inline-block md:!w-full "
                priority
                sizes="(max-width:500px) 50vw, (max-width:600px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:!w-full lg:text-center ">
              <AnimatedText
                text="Hi, I'm Akshat, web Developer."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base  font-medium md:text-sm sm:text-xs">
                As a MERN-stack developer, I am devoted to Transforming visions
                into reality with elegant front-end development and seamless
                back-end integration.
                {/* As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development. */}
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://drive.google.com/file/d/1c4LiB22mxJaT8L9dYFrUuH91N-J45WxQ/view?usp=sharing"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark  border-solid border-transparent hover:border-dark border-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md-px-4 md:text-base "
                >
                  Resume <LinkArrow className={"w-6 ml-1 "} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  href="mailto:akshatjangir1710@gmail.com"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
