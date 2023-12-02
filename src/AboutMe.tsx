// Import necessary modules and styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faWandMagicSparkles, faCode } from '@fortawesome/free-solid-svg-icons';
import "./AboutMe.css";

// Type definition for the generateListItems function
type GenerateListItemsProps = {
  items: string[];
};

const generateListItems: React.FC<GenerateListItemsProps> = ({ items }) => (
  <ul className="tool-list flex flex-row text-center justify-center gap-2 flex-wrap mt-3 text-sm md:text-md w-auto sm:w-2/3 ml-auto mr-auto md:w-auto">
    {items.map((item, index) => (
      <li key={index} className='bg-gray-200 p-2 text-xs'>{item}</li>
    ))}
  </ul>
);

function AboutMe() {
  return (
    <>
      <section id="aboutme-container" className=" bg-gray-50 h-screen min-h-100 flex flex-wrap flex-row sm:flex-col p-5 lg:p-l10 lg:pr-10 justify-center items-center gap-5">
        <div className="left-side lg:w-2/3">
          <h2 className="about-me-header text-gray-900 font-vidaloka text-3xl lg:text-5xl text-center">
            About Me
          </h2>
          <div className="about-me-description text-gray-500 text-justify mt-8 text-sm">
            As a web developer, I've worked on numerous projects working for amazing clients such as Lexus, Subaru, and Volvo in order to create e-Commerce solutions that thousands of people utilize on a day to day basis. I'm always passionate to learn and grow within the field of Tech - I'm currently working on Master's Degree in Computer Science, and I'm always striving to improve my professional skillset.
          </div>
        </div>
        <div className="right-side flex flex-row w-full flex-wrap lg:flex-nowrap lg:w-2/3 justify-between gap-5">
          <div className="design-tools text-center w-full lg:w-1/3">
            <div className="icon design-tools bg-orange-500 text-gray-50 ml-auto mr-auto rounded-full">
              <FontAwesomeIcon icon={faPenRuler} />
            </div>
            <h3 className="font-vidaloka text-lg lg:text-2xl leading-loose">Design Tools</h3>
            {generateListItems({ items: ['Figma', 'Invision'] })}
          </div>
          <div className="web-development-tech text-center w-full lg:w-1/3">
            <div className="icon web-tools bg-orange-500 text-gray-50 ml-auto mr-auto rounded-full">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3 className="font-vidaloka text-lg lg:text-2xl leading-loose">Web Development </h3>
            {generateListItems({ items: ['HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'LESS', 'Javascript', 'Typescript', 'C#', 'Vue', 'React', '.NET', 'MS SQL'] })}
          </div>
          <div className="other-tech text-center w-full lg:w-1/3">
            <div className="icon web-tools bg-orange-500 text-gray-50 ml-auto mr-auto rounded-full">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </div>
            <h3 className="font-vidaloka text-lg lg:text-2xl leading-loose">Other Technologies</h3>
            {generateListItems({ items: ['Git', 'Github', 'Azure', 'Vercel', 'Unit Testing', 'Vite'] })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
