import Squares from '../components/retro';
import GridMotion from '../components/grid';
import Dock from "../components/Dock.jsx";
import StarBorder from '../components/StarBorder'
import { motion } from 'framer-motion';
import { link, text, title } from 'framer-motion/client';

const githubProjects = [
  {
    title: "Compiler Construction(CSCI 525 w/Dr.Jang)",
    description: "Currently building a Full C compiler using Flex and Bison with full symbol table support.",
    link: "https://github.com/LudaKrispyGits/Compiler-Construction"
  },
  {
    title: "Website Portfolio Website(your looking at it)",
    description: "A website portfolio showcasing my skills in Website Design, Website Development, and Software Development. Also directs users to pages of Graphic Design work and other relevant experience. Made utilizing Tailwind CSS and React.JS. Components found from https://reactbits.dev",
    link: "https://github.com/LudaKrispyGits/WebsitePortfolio_React"
  },
  {
    title: "SQL Database Course Project(Database w/Dr. Trotter)",
    description: "A SQL database project for my Database Systems course. The project involved designing and implementing a database for Anime, including creating tables, writing queries, and optimizing performance. Our tables included Anime Titles, Ratings, Characters, Intros, and Outros. Once code is recovered and modified, it will be uploaded to my github.",

  }
  // {
  //   title: "HTTP Server",
  //   description: "Implemented a TCP-based HTTP server handling multiple requests and caching.",
  //   link: "https://github.com/LudaKrispyGits"
  // }
];

const designProjects = [
  {
    title: "Front-End Mobile Design for HackBeta site",
    description: "During the inital contruction of the HackBeta website, i volunteeed to help create the front end design for the mobile version of the website. I used Figma to create a modern and sleek design that was both user-friendly and visually appealing. In the end, the design was not used for development, but was a great experience to work on and a fun project to be a part of.",
    image: "/images/Hackb.png",
    link: "https://www.figma.com/proto/mM5O8lFmYkK3oR1mCajOfX/Design?node-id=0-1&t=AyjkYPaG2kbloMTN-1"
  },
  {
    title: "Burger King Mock Design - Social Media Campaign",
    description: "Modern UI/UX mockups created in Figma for mobile and web apps.",
    image: "/images/realk.webp"
  },
  {
    title: "'THE INFILL' - Book Series Cover Design ",
    description: "Created as a assignment for my Mulitmedia Design Course(ART 363). The task was to create a conceptual book cover design blending technology and creativity for a popcast of our choice.",
    image: "/images/book3.webp"
  },
  {
    title: "Graphic Design for Esports Events and Teams",
    description: "Created promotional materials and branding assets for various esports events and teams.",
    image: "/images/Rivals_Tourney2.webp"
  },
  {
    title: "Marvel Rivals Tournament Branding",
    description: "Designed promotional materials and branding assets for the Marvel Rivals tournament.",
    image: "/images/Blackpan.webp"
  },
  {
    title: "My New Normal - Logo Design and Branding",
    description: "A current work in progress with the client, My New Normal is a theraputic company that focuses on helping primarily african american men with their mental health. Currently a ongoing project utilizing Logo Design and Branding.",
    image: "/images/Logo 1.png"
  },
  {
    title: "Festival Event Branding and Design",
    description: "Designed promotional materials and branding assets for various festival events.",
    image: "/images/eightonahand.webp"
  },
  {
    title: "Personal Art and Recreation Design Projects",
    description: "Honestly, a collection of some funny ass projects i thought were cool at the time.",
    image: "/images/CK.webp"
  }
];

const items2 = [
  'Item 1',
  <div key='jsx-item-1'>Christopher Trent Doss Jr</div>,
  <img key='img-1' src="/images/Gradutae Resume Adobe.webp" alt="Local Image 1" className="h-auto rounded-lg" />,
  <img key='img-1' src="/images/2025_p.webp" alt="Local Image 1" className="h-auto rounded-lg" />,

  'Item 2',
  <img key='img-2' src="/images/long_social_post.webp" alt="External Image" className="w-40 h-auto rounded-lg" />,
  'Item 3',
    <img key='img-3' src="/images/long_social_post.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,

  <img key='img-3' src="/images/inter.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-4' src="/images/groot.webp" alt="Local Image 2" className=" h-auto rounded-lg" />,
  <img key='img-5' src="/images/2025_b.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-6' src="/images/Book 2-Front-02.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-7' src="/images/Artboard 2 copy.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-8' src="/images/scarlet.webp" alt="Local Image 2" className=" w-auto h-auto rounded-l
  
  
   g" />,
  <img key='img-9' src="/images/2025_p.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-10' src="/images/bk_chess.webp" alt="Local Image 2" className=" w-auto h-auto rounded-lg" />,
  <img key='img-11' src="/images/2025_r.webp" alt="Local Image 2" className=" w-auto h-100% rounded-lg" />,
  <img key='img-12' src="/images/Blackpan.webp" alt="Local Image 2" className=" w-auto h-100% rounded-lg" />,
  <img key='img-13' src="/images/realk.webp" alt="Local Image 2" className=" w-auto h-100% rounded-lg" />,
  <img key='img-14' src="/images/book3.webp" alt="Local Image 2" className=" rounded-lg" />,
  <img key='img-15' src="/images/Sward.webp" alt="Local Image 2" className=" rounded-lg" />,
  <img key='img-16' src="/images/Magik.webp" alt="Local Image 2" className="rounded-lg" />,


  <div key='jsx-item-3'>Christopher Doss</div>,
  <div key='jsx-item-3'>Christopher Doss</div>,
  <div key='jsx-item-3'>Christopher Doss</div>,
  <div key='jsx-item-3'>Christopher Doss</div>,
  <img key='img-21' src="/images/Magik.webp" alt="Local Image 2" className="rounded-lg" />,
  <img key='img-22' src="/images/2025_r.webp" alt="Local Image 2" className="rounded-lg" />,
  <img key='img-22' src="/images/bk_chess.webp" alt="Local Image 2" className="rounded-lg" />,
];

//List for Dock items



export default function Exp() {
  return (
    <>
      <div>
        <GridMotion className='fixed h-screen' items={items2} />
      </div>
      <div className="flex flex-col items-center gap-3 h-auto">
        <h1 className="text-4xl font-bold mt-8">Work/Experience</h1>
        <h3 className='text-2xl font-bold text-cyan-400 pt-10'>Resume</h3>
        <a
          href="/images/Professional_Resume_Spring.Grad__compressed.webp"  // Replace with actual image path
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40%] max-w-xl"
        >
          <img
            src="/images/Professional_Resume_Spring.Grad__compressed.webp" // Same image path here
            alt="Resume preview"
            className="w-full h-auto rounded-md shadow-lg hover:opacity-90 transition duration-200"
          />
        </a>

        <footer className='mt-8 mb-10 w-[600px] border-t border-grey-500 '> </footer>



            <h1 className="text-2xxl font-bold mt-10 mb-10 text-white">Employment</h1>

        {/* OLEMISS HACKATHON SECTION */}
        {/* <div className="w-full mx-auto my-0 max-w-[65.5rem]  h-auto border-white rounded-sm flex ">
          <div className="ml-auto w-[50%] h-full">
            <img
              src="/images/WEir.webp"
              alt="Mock"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="w-[50%] p-4 flex flex-col text-white">
            <h1 className="text-2xl font-bold ">HackBeta Spring 25" </h1>
            <h2 className='text-2xl font-bold mb-3'>1st Place Project(Virtual Advisor)</h2>
            <h3 className="text-xl ">University of Mississippi</h3>
            <h3 className="text-l  text-cyan mb-2">March 22th, 2025</h3>

            <p className="text-m mt-10">
               <b>A</b>longside a team of 3 others, we created a website that uses AI to help students create a course plan for graduating with a Bachelor’s of Science in Computer Science at the University of Mississippi. I played a part in constructing the front end of the website, using React.js and its components to display an interactive and engaging experience for users. Our team, <b>Earth, Fire, Doss & Peter</b>, received 1st place in our project division.
            </p>
            <footer className='mt-6 border-t border-gray-500' ></footer>
            <p className='text-cyan-500 '>Github, React.js, HTML, CSS, Javascript, Figma, Adobe  Illustrator</p>
          </div>
          
        </div> */}
        <footer className='mt-8 mb-30 w-[80.5rem] border-t border-gray-500 '> </footer>

        {/* ECAC MEDIA INTERN SECTION */}
        <div className="w-full mx-auto my-0 max-w-[65.5rem]  h-auto border-white rounded-sm flex ">
          
          <div className="w-[60%] p-4 flex flex-col text-white">
            <h1 className="text-2xl font-bold mb-2">E.C.A.C Media Team Intern</h1>
            <h3 className="text-xl font-semibold">ECAC Esports</h3>
            <h3 className="text-l  text-cyan mb-2">March 10th,2025 - Present</h3>

            <p className="text-m mt-10">
              <b>A</b>s a member of the ECAC Media Team, I am responsible for creating and editing content for the ECAC Esports social media platforms. I work with a team of other media interns to create engaging content that promotes the ECAC Esports brand and its events. My role includes creating graphics and other media content that is shared on social media platforms such as their website, Twitter, and Instagram.
            </p>
             <footer className='mt-6 border-t border-grey-500' ></footer>
            <p className='text-cyan-500 '>Discord, Adobe PhotoShop, Adobe  Illustrator, Google Drive</p>
          </div>
        <div className="ml-auto w-[50%] h-full">
            <img
              src="/images/ECAC.webp"
              alt="Mock"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
       
        <footer className='mt-8 mb-30 w-[65.5rem] border-t border-grey-500 '> </footer>
        <div className="w-full mx-auto my-0 max-w-[65.5rem]  h-auto border-white rounded-sm flex ">
          <div className="ml-auto w-[50%] h-full">
            <img
              src="/images/UniversityofMississippiDorms-Secondary3.webp"
              alt="Mock"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="w-[50%] p-4 flex flex-col text-white">
            <h1 className="text-2xl font-bold mb-2">Graduate Assistant</h1>
            <h3 className="text-xl font-semibold">University of Mississippi -- <b>Student Housing</b></h3>
            <h3 className="text-l  text-cyan mb-2">July 14th, 2025 - Present</h3>

            <p className="text-m mt-10">
               <b>A</b>s a Graduate Assistant, I am responsible for assisting the Graduate Community Coordinator with various tasks related to the management of student housing at the university. This includes helping with the planning and execution of events, managing student records, and providing support to students living in the residence halls. I work closely with the Graduate Coordinator and resident assistants to ensure that all aspects of student housing run smoothly and efficiently.
            </p>
            <footer className='mt-6 border-t border-grey-100' ></footer>
            <p className='text-cyan-500 '>Team Communication, Event Planning, Time Management, Customer Service, Google Excel, Adobe Illustrator, Microsoft Teams</p>
          </div>
          
        </div>
        <footer className='mt-8 mb-30 w-[65.5rem] border-t border-grey-500 '> </footer>



        {/* CODING CAMP INTERN SECTION */}
        <div className="w-full mx-auto my-0 max-w-[65.5rem]  h-auto border-white rounded-sm flex ">

          <div className="w-[50%] p-4 flex flex-col text-white">
            <h1 className="text-2xl font-bold mb-2">Coding Camp Intern</h1>
            <h3 className="text-xl font-semibold ">Dealth Health Alliance</h3>
            <h3 className="text-l  text-cyan mb-2">May 27th,2024-July 3th,2024</h3>

            <p className="text-m mt-10">
              <b>I</b>nstructed students on the basics of coding languages and game development. During the six-week internship, I worked with a group of other interns to create teaching strategies to promote basic Python, Java, and Karel to high school students (9th–12th grade) in the Mississippi Delta.
            </p>
             <footer className='mt-6 border-t border-grey-500' ></footer>
            <p className='text-cyan-500 '>Karel, Python, Java, Unity, Html/CSS</p>
          </div>
          <div className="ml-auto w-[40%] h-full">
            <img
              src="/images/DHA.webp"
              alt="Mock"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>

        {/* Projects Section */}
                    <h1 className="text-2xxl font-bold mt-20 mb-4 text-white">Projects</h1>
                    <p style={{marginTop: '-1.3rem'}} className="text-m text-grey-300">Some recreational Projects that I have worked on during my time at the University</p>
      <div className="mb-16 w-[75%] mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Development Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {githubProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#060010] p-6 rounded-2xl shadow-lg border border-cyan-500"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Graphic Design Projects */}

   <div className="mb-1 w-[75%] mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Multimedia Design</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {designProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#060010] rounded-2xl overflow-hidden shadow-lg border border-white-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 rounded-lg transition underline mt-4 inline-block"
                >
                  Learn More about this project...
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Awards and Acknowledgments */}
            <h1 className="text-2xxl font-bold mt-20 mb-4 text-white">Awards and Acknowledgments</h1>

          <div className="w-full mx-auto my-0 max-w-[65.5rem]  h-auto border-white rounded-sm flex ">

          <div className="w-[50%] p-4 flex flex-col text-white">
            <h1 className="text-2xl font-bold mb-2">Hackbeta- Spring 2025" 1st Place Project(Virtual Advisor)</h1>
            <h3 className="text-xl  ">University of Mississippi - Department of Computer Science</h3>
            <h3 className="text-l  text-cyan mb-2">March 22th, 2025</h3>

            <p className="text-m mt-10">
              <b>A</b>longside a team of 3 others, we created a website that uses AI to help students create a course plan for graduating with a Bachelor’s of Science in Computer Science at the University of Mississippi. I played a part in constructing the front end of the website, using React.js and its components to display an interactive and engaging experience for users. Our team, Earth, Fire, Doss & Peter, received 1st place in our project division.
            </p>
             <footer className='mt-6 border-t border-grey-500' ></footer>
            <p className='text-cyan-500 '>Github, React.js, HTML, CSS, Javascript, Figma, Adobe Illustrator</p>
          </div>
          <div className="ml-auto w-[40%] h-full">
            <img
              src="/images/WEir.webp"
              alt="Mock"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
        <footer className='mt-8 mb-10 w-[65.5rem] border-t border-grey-500 '> </footer>

        <div className="h-[200px] w-full flex items-center justify-center m-2">
  {/* <button className="bg-cyan-500 text-white p-3 rounded-l hover:bg-black transition hover:text-black transition">
    <a href="https://chrisdoss.myportfolio.com/work"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-white hover:text-cyan no-underline">Link to Digital Arts Portfolio Website</a>
  </button> */}
  <StarBorder
  as="button"
  className="custom-class"
  color="cyan"
  speed="2s"
>
  
  <a href="https://chrisdoss.myportfolio.com/work"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-white hover:text-cyan no-underline">Link to Digital Arts Portfolio Website</a>
  </StarBorder>
  
</div>




      </div>
    </>
  );
}
