import Image from 'next/image';
import ThemeSwitch from './components/ThemeSwitch';
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-tea-300 dark:bg-pale-600 font-changa text-black dark:text-white font-[family-name:var(--font-Changa-Bold)]">
      {/* Navbar */}
      <header className="bg-pale-400 dark:bg-pale-800 p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center w-full sm:w-auto">
            <h1 className="text-2xl font-bold">     
              Hi, welcome to <br />
              My Portfolio👋
            </h1>
            <div className="flex flex-wrap mt-4 sm:mt-0">
              <img src="pepe.gif" alt="emoji" className="inline-block ml-2 w-10 h-10" />
              <img src="cat.gif" alt="emoji" className="inline-block ml-2 w-10 h-10" />
              <img src="abc.gif" alt="emoji" className="inline-block ml-2 w-12 h-12" />
              <img src="carp.gif" alt="emoji" className="inline-block ml-2 w-12 h-12" />
              <img src="catpp.gif" alt="emoji" className="inline-block ml-2 w-12 h-12" />
            </div>
          </div>
          <nav className="flex flex-wrap space-x-6 w-full sm:w-auto mt-4 sm:mt-0 mr-20">
            <a href="#about" className="hover:underline transform hover:translate-y-1 transition-all">
              About me
            </a>
            <a href="#projects" className="hover:underline transform hover:translate-y-1 transition-all">
              My projects
            </a>
            <a href="#stacks" className="hover:underline transform hover:translate-y-1 transition-all">
              My stacks
            </a>
            <a href="#education-jobs" className="hover:underline transform hover:translate-y-1 transition-all">
              My education and jobs
            </a>
          </nav>

        </div>
      </header>


      {/* Theme Switch */}
      <section className="absolute top-16 right-10 hover:underline transform hover:translate-y-1 transition-all">
        <ThemeSwitch />
      </section>




      <main className="container mx-auto p-8">
        {/* About Me Section */}
        <h2 className="text-2xl text-center font-bold mb-2">🎄About Me🎄</h2>
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
          <div className="text-center pt-12">
            <Image
              src="/foto.jpeg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-lg mx-auto"
            />
            <p className="italic mt-4">
              "Loyalty is a two-way street. If I'm asking you, then you'll get it from me."
            </p>
          </div>
          <div className="text-center">
            <p>
              <span className="font-bold text-xl">My name is Paulo Isaac Tibanta Delgado and I...</span> <br />
              <span className="mt-4">I am a software engineer with a passion for design and a deep fascination for all things gaming. 
                I love combining my technical skill with creativity to develop innovative and efficient solutions. 
                My goal is to create digital experiences that are both functional and visually appealing, 
                and I am constantly motivated by the possibility of learning and exploring new technologies 
                in the field of software development and interactive design.</span>
            </p>
          </div>
          <div className="text-center pt-12">
            <Image
              src="/anime.gif"
              alt="Cityscape"
              width={300}
              height={200}
              className="rounded-lg mx-auto"
            />
          </div>
        </section>

        {/* did you know  */}
        <section className="mb-12 flex gap-8 justify-between items-start">
          <div className="max-w-[600px] dark:text-white w-full bg-white dark:bg-pale-400 p-4 rounded shadow flex items-center">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Did you know what?</h3>
              <p>
              When I was 15 years old I created my first mod and resource pack in Minecraft, a game that to this day I still love and would like to work one day in the game development company, Mojang Studios.
              </p>
            </div>
            <div className="ml-4">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqTLzMIn5ClvjniLKhhqlJeUh4vqxVqmGztAiWcdmubVUZ7peAOb-7eVDveukGFWYiVg&usqp=CAU" 
                alt="Mojang Studios Logo" 
                className="w-20 h-20 border-2 border-gray-300"
              />
            </div>
          </div>

          {/* networks */}
          <div className="flex gap-7 justify-center flex-wrap pt-2 w-3/3 ">
            <a
              href="https://x.com/sawlife23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:underline transform hover:translate-y-1 transition-all"
            >
              <Image
                src="https://pbs.twimg.com/profile_images/1683364031921356800/lC0xkPJZ_400x400.jpg"
                alt="Twitter Logo"
                width={50}
                height={50}
                className="rounded-[20px] mx-auto hover:underline transform hover:translate-y-1 transition-all"
              />
              <p className="mt-2 text-blue-500">Twitter</p>
            </a>
            <a
              href="https://www.instagram.com/sawlife.09/profilecard/?igsh=MWh0MG5lenBjbmJzdA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:underline transform hover:translate-y-1 transition-all"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                alt="Instagram Logo"
                width={50}
                height={50}
                className="rounded-[20px] mx-auto hover:underline transform hover:translate-y-1 transition-all"
              />
              <p className="mt-2 text-pink-500">Instagram</p>
            </a>
            <a
              href="https://github.com/pauloodd723"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:underline transform hover:translate-y-1 transition-all"
            >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s"
                alt="GitHub Logo"
                width={50}
                height={50}
                className="rounded-[20px] mx-auto hover:underline transform hover:translate-y-1 transition-all"
              />
              <p className="mt-2 text-black">GitHub</p>
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:underline transform hover:translate-y-1 transition-all"
            >
              <Image
                src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-icon-png-image_8704827.png"
                alt="WhatsApp Logo"
                width={50}
                height={50}
                className="rounded-[20px] mx-auto hover:underline transform hover:translate-y-1 transition-all"
              />
              <p className="mt-2 text-green-500">WhatsApp</p>
            </a>
            <a
              href="https://www.facebook.com/share/3MYXKWNfGsqyo78p/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:underline transform hover:translate-y-1 transition-all"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png"
                alt="Facebook Logo"
                width={50}
                height={50}
                className="rounded-[20px] mx-auto hover:underline transform hover:translate-y-1 transition-all"
              />
              <p className="mt-2 text-blue-700">Facebook</p>
            </a>
          </div>
        </section>

        {/* my projects */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="flex justify-center gap-8 mb-8">
            {/* figma */}
            <div className="text-center w-1/2 hover:underline transform hover:translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4">Figma</h3>
              <a href="https://www.figma.com/design/Wa3gmTKVIEG29UyTztSPSs/Untitled?node-id=1-3&t=R2AgJtMDZuPaXaph-1" target="_blank" rel="noopener noreferrer">
              <div className="relative w-full h-[300px]">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdoMAt0SJw1NoRPiNOXye85aCIn3bQ_zLSQ&s"
                  alt="Figma Project"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg mx-auto"
                />
              </div>
              </a>
              <p className="mt-4">My portfolio wireframe</p>
            </div>

            {/* mod */}
            <div className="text-center w-1/2 hover:underline transform hover:translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4">Mod</h3>
              <a href="https://www.curseforge.com/minecraft" target="_blank" rel="noopener noreferrer">
              <div className="relative w-full h-[300px]">
                <Image
                  src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/marketplace/Marketplace_AddOnsPilot_NetBlog_1170x500.jpg"
                  alt="Minecraft Mod"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg mx-auto"
                />
              </div>
              </a>
              <p className="mt-4">Minecraft mod project (video game)</p>
            </div>
          </div>

          {/* django */}
          <div className="text-center w-1/2 mx-auto mb-8 hover:underline transform hover:translate-y-1 transition-all">
            <h3 className="text-2xl font-bold mb-4">Django Project</h3>
            <a href="https://github.com/pauloodd723/ParkingProject" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-[300px]">
              <Image
                src="https://miro.medium.com/v2/resize:fit:750/0*wGZaCDK7BVhaKbeW.jpeg"
                alt="Django Project"
                layout="fill"
                objectFit="cover"
                className="rounded-lg mx-auto"
              />
            </div>
            </a>
            <p className="mt-4">Django JustWork project (app to search for jobs or post business positions)</p>
          </div>

        </section>

        <section id="stacks" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">My Stacks</h2>
          <div className="flex flex-wrap justify-center gap-24 md:grid md:grid-cols-5 md:gap-24">
            {/* java */}
            <div className="text-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_3UpxmlmvA0lWsutXx_1Pa2lrgXbiBtpKw&s"
                alt="Java"
                width={80}
                height={80}
                className="rounded-lg hover:underline transform hover:translate-y-1 transition-all"
              />
            </div>

            {/* python */}
            <div className="text-center">
              <Image
                src="https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png"
                alt="Python"
                width={80}
                height={80}
                className="rounded-lg hover:underline transform hover:translate-y-1 transition-all"
              />
            </div>

            {/* javaS */}
            <div className="text-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                alt="JavaScript"
                width={80}
                height={80}
                className="rounded-lg hover:underline transform hover:translate-y-1 transition-all"
              />
            </div>

            {/* hTML */}
            <div className="text-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
                alt="HTML5"
                width={80}
                height={80}
                className="rounded-lg hover:underline transform hover:translate-y-1 transition-all"
              />
            </div>

            {/* css */}
            <div className="text-center">
              <Image
                src="https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png"
                alt="CSS"
                width={80}
                height={80}
                className="rounded-lg hover:underline transform hover:translate-y-1 transition-all"
              />
            </div>
          </div>
        </section>


        <section id="education-jobs" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 ">My Education and Jobs</h2>
        <div className="flex justify-center gap-16 ">
          {/* secundaria */}
          <div className="text-center max-w-[400px] hover:underline transform hover:translate-y-1 transition-all">
            <div className="relative w-full h-0 pb-[56.25%] mb-4 overflow-hidden rounded-lg">
              <Image
                src="https://static.wixstatic.com/media/46bbac_c539faace5fc4d05bd462afcdbcf14c2~mv2_d_4500_3000_s_4_2.jpg/v1/fit/w_2500,h_1330,al_c/46bbac_c539faace5fc4d05bd462afcdbcf14c2~mv2_d_4500_3000_s_4_2.jpg"
                alt="Basic High School"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Basic High School</h3>
            <p className="text-black dark:text-white">
              "Values ​​as a guide, to build our being, we find them along the way
              and in knowledge. For them, without a doubt, in daily life we ​​need them to live happily and better."
            </p>
          </div>

          {/* academia */}
          <div className="text-center max-w-[400px] hover:underline transform hover:translate-y-1 transition-all">
            <div className="relative w-full h-0 pb-[56.25%] mb-4 overflow-hidden rounded-lg">
              <Image
              
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiT9IJMewsuG62FEWipujh-0bUU1JlOdetmQ&s"
                alt="English Academy"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">English Academy</h3>
            <p className="text-black dark:text-white">
              Cambridge Academy is a legally constituted institution, certified of quality by 
              INTERNATIONAL CERTIFICATION AND TRAINING.
            </p>
          </div>
        </div>
      </section>
      </main>
    </main>
  );
}
