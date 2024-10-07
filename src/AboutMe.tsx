// Import necessary modules and styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faWandMagicSparkles, faCode } from '@fortawesome/free-solid-svg-icons';
import "./AboutMe.css";
import React from 'react';
import './Experience.css';
import { faCircle, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Type definition for the generateListItems function
type GenerateListItemsProps = {
  items: string[];
};

const generateListItems: React.FC<GenerateListItemsProps> = ({ items }) => (
  <ul className="tool-list flex flex-row text-center justify-start gap-2 flex-wrap mt-2 text-md w-auto">
    {items.map((item, index) => (
      <li key={index} className='bg-gray-200 p-2 '>{item}</li>
    ))}
  </ul>
);


const generateListsItems: React.FC<GenerateListItemsProps> = ({ items }) => (
  <ul className="tool-list flex flex-row text-center justify-start gap-2 flex-wrap mt-2 text-sm lg:text-md w-auto">
    {items.map((item, index) => (
      <li key={index} className='bg-gray-200 p-2'>{item}</li>
    ))}
  </ul>
);

type JobProps = {
  date: string;
  jobTitle: string;
  companyName: string;
  companyLink: string;
  description: string[];
  tools: string[];
};

const Job: React.FC<JobProps> = ({ date, jobTitle, companyName, companyLink, description, tools }) => (
  <div className="job flex flex-col  w-full text-2xl pt-5 pb-5">
    <div className="left-side font-roboto text-gray-900 text-lg md:text-2xl leading-none">{date}</div>
    <div className="right-side">
      <p className="job-title font-roboto my-2 text-3xl">{jobTitle}</p>
      <p className="company-name hover:text-orange-500 transition-all text-lg md:text-2xl w-fit">
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
          {companyName}
        </a>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-2' href={companyLink} target="_blank"/>
      </p>
      <ul className="description justify-normal sm:text-justify text-lg mt-4 text-gray-700">
        {description.map((item, index) => (
          <li key={index}><FontAwesomeIcon icon={faCircle} className='fa-2xs text-orange-500' /> {item}</li>
        ))}
      </ul>
      {generateListsItems({ items: tools })}
    </div>
  </div>
);

function AboutMe() {
  return (
    <>
      <section id="aboutme-container" className=" bg-gray-50 tracking-wide min-h-fit flex flex-wrap flex-col  p-5 lg:pt-16 lg:pb-16 lg:p-l10 lg:pr-10 justify-center items-center">
        <div className="left-side lg:w-2/3">
          <h2 className="about-me-header text-gray-900 font-roboto text-6xl text-start">
            About Me
          </h2>
          <div className="about-me-description text-gray-700  mt-5 text-lg md:text-2xl">
          I'm a software engineer with just over two years in web development and three years in tech. I've led full-stack web dev projects to build e-Commerce solutions for folks like Subaru, Nissan, Mazda, and more. I'm also a Master's Student in Computer Science at Georgia tech, where I'm constantly learning about artificial intelligence and its real-world applications.
          </div>
        </div>
        <div id="tools" className="right-side flex gap-5 flex-col w-full flex-wrap lg:flex-nowrap lg:w-2/3 justify-between mt-5">
          
          {/* Design Tools Section */}
          <div className="design-tools text-center w-full flex flex-col justify-start items-start">
            <div className="about-me-section w-auto flex">
              <div className="icon design-tools bg-orange-500 text-gray-50 mr-2 mt-auto mb-auto rounded-md">
                <FontAwesomeIcon icon={faPenRuler} />
              </div>
              <h3 className="font-roboto text-3xl leading-loose">Design Tools</h3>
            </div>
            {generateListItems({ items: ['Figma', 'Invision', 'Sketch', 'Responsive Web Design'] })}
          </div>

          {/* Web Development Section (Styled to Match Design Tools) */}
          <div className="web-development-tech text-center w-full flex flex-col justify-start items-start">
            <div className="about-me-section w-auto flex">
              <div className="icon web-tools bg-orange-500 text-gray-50 mr-2 rounded-md mt-auto mb-auto">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3 className="font-roboto text-3xl leading-loose">Web Development</h3>
            </div>
            {generateListItems({ 
              items: [
                'HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'LESS', 
                'Javascript', 'Typescript', 'C#', 'Vue', 'React', 
                '.NET', 'MS SQL', 'REST APIs'
              ] 
            })}
          </div>

          {/* Other Technologies Section (Styled to Match Design Tools) */}
          <div className="other-tech text-center w-full flex flex-col justify-start items-start lg:pb-16">
            <div className="about-me-section w-auto flex">
              <div className="icon web-tools bg-orange-500 text-gray-50 mr-2 rounded-md mt-auto mb-auto">
                <FontAwesomeIcon icon={faWandMagicSparkles} />
              </div>
              <h3 className="font-roboto text-3xl leading-loose">Other Technologies</h3>
            </div>
            {generateListItems({ 
              items: [
                'Git', 'Github', 'Azure', 'Vercel', 'Unit Testing', 
                'Vite', 'Agile Software Development', 'SSH', 
                'Version Control', 'Web Accessibility (WCAG)', 
                'English', 'Spanish', 'Japanese'
              ] 
            })}
          </div>
        
        <h2 id='experience-container' className="about-me-header text-gray-900 font-roboto text-5xl lg:text-6xl text-start w-full lg:w-full lg: pt-16">
          Work Experience
        </h2>
        <div className="jobs-list flex items-start flex-col font-roboto w-full lg:w-full">
          <Job
            date="Sep. 2022 - Aug. 2024"
            jobTitle="Software Engineer"
            companyName="SimplePart LLC | Atlanta, GA"
            companyLink="https://www.simplepart.com/"
            description={[
              'Led the development of enterprise-level e-Commerce web applications for clients including Subaru, Toyota and more, generating over one million dollars in yearly revenue, utilizing Vue, React, .NET, MS SQL, Azure DevOps and Git',
              'Designed and implemented a new in-house styling platform for readily creating new sites for clients, reducing new client site development times by over 50%',
              'Managed full-stack standups including database configurations, backend logic, and frontend design',
              'Created scalable components using SOLID principles to meet client requirements, improving on functionality and user experience',
              'Increased WCAG compliance scores and test evaluations by 20%, directly improving accessibility within client-facing applications',
              'Conducted continuous integration, code reviews, and unit testing, maintaining high code quality and adherence to project deadlines'
            ]}
            tools={['Vue', 'React', 'Typescript', 'Javascript', 'Bootstrap', 'C#', '.NET', 'MS SQL Server', 'SSIS', 'Azure DevOps', 'Git']}
          />
          <Job
            date="Apr. 2022 - Jul. 2022"
            jobTitle="System Integrator"
            companyName="Meta Reality Labs | Pittsburgh, PA"
            companyLink="https://about.meta.com/realitylabs/"
            description={[
              'Created internal automation tools and scripts to improve collection of data for the creation of hyper-realistic virtual avatars, using Linux, Python, Bash, and PowerShell',
              'Implemented reusable unit test documents, contributing to improved quality control and a 10% increase in data capture success rates through effective collaboration with system engineers',
              'Employed Root Cause Analysis and technical troubleshooting to detect and resolve complex issues across data collection instrumentation'
            ]}
            tools={['Linux', 'Python', 'Bash', 'Powershell', 'SSH', 'Computer Networks', 'Github']}
          />
          <Job
            date="May 2021 - Aug. 2021"
            jobTitle="Embedded Systems Researcher"
            companyName="University of Toledo | Toledo, OH"
            companyLink="https://www.utoledo.edu/"
            description={[
              'Contributed to a $30 million dollar Assured Digital Microelectronics Education & Training Ecosystem grant as a flagstone researcher at the University of Toledo',
              'Collaborated with post-doctorates to create an FPGA and VHDL-based class “Hardware Oriented Security and Trust”',
              'Created projects for undergraduate students to gain experience with related FPGA technologies, including Xilinx Vivado, embedded systems development in C/C++, and real time operating systems'
            ]}
            tools={['Linux', 'C', 'VHDL', 'FPGAs', 'UART', 'Cryptography', 'Cyber Security', 'Git', 'Github']}
          />
          <Job
            date="May 2020 - Aug. 2020"
            jobTitle=".NET Developer"
            companyName="PCC Airfoils | Mentor, OH"
            companyLink="https://www.pccairfoils.com/"
            description={[
              'Developed 10+ .NET applications using C#, .NET, MS SQL, and Azure DevOps',
              'Implemented employee work-hour reporter, comparing employee work times to average part development times, decreasing product development times',
              'Created unit tests and operating procedures to ensure reliable, bug-free code'
            ]}
            tools={['C#', '.NET', 'MS SQL', 'SSIS', 'Azure DevOps']}
          />
          <Job
            date="May 2019 - Aug. 2019"
            jobTitle="Physics Researcher"
            companyName="University of Toledo | Toledo, OH"
            companyLink="https://www.utoledo.edu/"
            description={[
              'Developed a new method of computing reflections from solar arrays using Python, Pandas, and NumPy',
              'Published physics research and presented at the IEEE Photovoltaics Specialists Conference in 2020',
              'Provided continuous support with the University of Toledo as needed for work on software development'
            ]}
            tools={['Python', 'Pandas', 'Scipy', 'Jupyter', 'Data Analysis', 'University Research', 'IEEE Publication']}
          />
        </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;

