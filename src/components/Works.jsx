import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { github, gotosite } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
  return (
	<div 
	className="xs:w-[90%] sm:w-[90%] md:w-[45%] lg:w-[38%] xl:w-[30%]"
  >
      <Tilt
        tiltMaxAngleX={7} 
        tiltMaxAngleY={7}  
        scale={1}       
        transitionSpeed={250} 
        className='bg-tertiary rounded-2xl w-full sm:w-[362px] flex-shrink-0 green-pink-gradient p-[1px]'
      >
        <div className='bg-tertiary w-full h-full rounded-2xl p-4 flex flex-col justify-between'>
          <div>
            <div className='relative w-full rounded-2xl'>
              <img
                src={image}
                alt={name}
                className='w-full h-auto max-h-[210px] rounded-[10px] object-cover border-[1px] border-secondary'
              />
            </div>
            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>{name}</h3>
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map(tag => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <div className='mt-4 flex gap-2'>
            <div onClick={() => window.open(website_link, '_blank')}
              className='black-gradient w-9 h-9 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer mr-2'
            >
              <img src={gotosite} alt="Go to site" className='w-4/5 h-4/5 object-contain' />
            </div>
            <div onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-9 h-9 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer '
            >
              <img src={github} alt="GitHub" className='w-4/5 h-4/5 object-contain' />
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my&nbsp;skills and&nbsp;experience through real&#8209;world
          examples of&nbsp;my work. Each project is&nbsp;briefly described with&nbsp;links
          to&nbsp;code repositories and&nbsp;live demos. They reflect my&nbsp;ability
          to&nbsp;solve complex problems, work with&nbsp;different technologies, and&nbsp;manage
          projects effectively.
        </p>
      </div>

      <div className='mt-16 flex items-stretch justify-center flex-wrap gap-8'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
