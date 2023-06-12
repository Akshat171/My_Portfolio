import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import Profile from "../../public/images/profile/prof10.jpg";
import Skills from "@/components/skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Transition from "@/components/Transition";
const about = () => {
  return (
    <>
      <Head>
        <title>AJ | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="">
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light ">
                About me
              </h2>
              <p className=" font-medium">
                {" "}
                Hi, I'm Akshat, a passionate web developer with a strong drive
                to contribute to innovative ideas and As an innovative and
                driven individual with a start-up mentality, I bring a high
                willingness to learn.
              </p>
              <p className="my-4 font-medium">
                Beyond the realm of coding, I have a passion for Traveling and
                exploration. When I'm not immersed in the world of coding,
                you'll often find me traveling, seeking inspiration. This makes
                me creative, allowing me to bring fresh perspectives to my work.
              </p>
              <p className=" font-medium">
                In my downtime, I find solace in the enchanting melodies of soft
                rock and pop music. It's a source of inspiration that keeps my
                mind in tune with creativity and innovation. Additionally, I
                also enjoy 3D modeling using CAD software, where I bring my
                imaginative designs to life in a virtual world. I look forward
                to the opportunity to bring my skills and passion to your next
                project.
              </p>
              <p className=" font-medium my-3">
                Let's connect and embark on a journey to transform your ideas
                into remarkable digital realities.
              </p>
            </div>
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-3 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={Profile}
                alt="image"
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
