import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Type definition for the generateListItems function
type GenerateListItemsProps = {
  items: string[];
};

const generateListItems: React.FC<GenerateListItemsProps> = ({ items }) => (
  <ul className="tool-list flex flex-row text-center justify-center gap-2 flex-wrap mt-3 text-xs md:text-sm w-auto sm:w-2/3 ml-auto mr-auto md:w-auto">
    {items.map((item, index) => (
      <li key={index} className='bg-gray-700 p-1'>{item}</li>
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
  <div className="job text-gray-50 flex flex-col gap-2 lg:gap-4 w-full sm:w-1/2">
    <div className="left-side font-vidaloka text-gray-500 whitespace-nowrap text-lg leading-none">{date}</div>
    <div className="right-side">
      <p className="job-title font-vidaloka text-lg leading-none">{jobTitle}</p>
      <p className="company-name hover:text-orange-500 transition-all w-fit">
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
          {companyName}
        </a>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-2' href={companyLink} target="_blank"/>
      </p>
      <ul className="description justify-normal sm:text-justify text-sm mt-2">
        {description.map((item, index) => (
          <li key={index}><FontAwesomeIcon icon={faCircle} className='fa-2xs text-orange-500' /> {item}</li>
        ))}
      </ul>
      {generateListItems({ items: tools })}
    </div>
  </div>
);

function Experience() {
  return (
    <>
      <section id="experience-container" className=" bg-gray-900 h-fit p-5 sm:p-10">
        <h2 className="about-me-header text-gray-50 font-vidaloka text-3xl lg:text-5xl text-center">
          Work Experience
        </h2>
        <div className="jobs-list flex items-center ml-auto mr-auto flex-col gap-10 mt-8">
          <Job
            date="Sep. 2022 - present"
            jobTitle="Full Stack & Front End Engineer"
            companyName="SimplePart LLC | Atlanta, GA"
            companyLink="https://www.simplepart.com/"
            description={[
              'worked on new client deployment, creating e-commerce solutions for automotive OEMS',
              'led the creation of multiple news sites for clients like Lexus, Volvo, and Kia',
            ]}
            tools={['Invision', 'Javascript', 'Vue', 'C#', '.NET', 'MS SQL', 'Bootstrap', 'Azure', 'Git']}
          />
          <Job
            date="Apr. 2022 - Jul. 2022"
            jobTitle="System Integrator"
            companyName="Meta Reality Labs | Pittsburgh, PA"
            companyLink="https://about.meta.com/realitylabs/"
            description={[
              'oversaw and maintained research systems used to create hyperrealistic virtual avatars',
              'led the creation of multiple news sites for clients like Lexus, Volvo, and Kia',
            ]}
            tools={['Linux', 'Python', 'Bash', 'Powershell', 'SSH', 'Computer Networks', 'Github']}
          />
          <Job
            date="May 2021 - Aug. 2021"
            jobTitle="Hardware Security Researcher"
            companyName="University of Toledo | Toledo, OH"
            companyLink="https://www.utoledo.edu/"
            description={[
              'Assisted in creating the first field study and class for Hardware Security at The University of Toledo with a team of professors, post-doctorates, and Graduate Students',
              'Contributed to a $30 million project funded by the U.S. Air Force Research Lab, titled “Assured Digital Microelectronics Education and Training Ecosystem”.',
            ]}
            tools={['Linux', 'C', 'VHDL', 'Verilog HDL', 'FPGAs', 'Cyber Security', 'Git', 'Github']}
          />
          <Job
            date="May 2019 - Aug. 2019"
            jobTitle="Physics Researcher"
            companyName="University of Toledo | Toledo, OH"
            companyLink="https://www.utoledo.edu/"
            description={[
              'Created and demonstrated a computational method of calculating reflections off Solar Arrays',
              'Published physics research after the 2020 IEEE Photovoltaics Specialists Conference',
            ]}
            tools={['Linux', 'Python', 'numPy', 'Pandas', 'Data Analysis', 'Computational Physics']}
          />
        </div>
      </section>
    </>
  );
}

export default Experience;
