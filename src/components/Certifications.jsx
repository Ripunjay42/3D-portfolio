import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import React from 'react';
import { link } from '../assets';
import { certifications } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Card = ({ index, name, image, icon, url }) => {
  return (
    <div 
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="w-[300px] md:w-[300px] lg:w-[300px]"
    >
      <Tilt
        options={{
          max: 12,
          scale: 1,
          speed: 200,
        }}
        className='bg-tertiary rounded-2xl h-full green-pink-gradient p-[1px] min-h-[290px] shadow-card'
      >
        <div className="bg-black-200 p-4 rounded-2xl w-full h-full flex flex-col justify-between">
          <img src={image} className=' w-full h-[190px] rounded-[10px] object-cover border-[1px] border-secondary pointer-events-none' alt='Certificate'/>
          
          <div className="mt-7 flex justify-between items-center gap-1">
            <a className='hover:underline hover:underline-offset-1 cursor-pointer' href={url} target='_blank' rel="noopener noreferrer">
              <p className="text-white font-bold text-[18px] flex items-center">
                {name} 
                <span>
                  <img src={link} alt="" className='h-3 w-3 ml-3 pointer-events-none'/>
                </span>
              </p>
            </a>
            <img src={icon} alt='Issuer' className="w-10 h-10 rounded-full object-cover bg-white border-[1px] border-secondary pointer-events-none"/>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className='rounded-[20px]'>
      {/* <div className={`rounded-2xl min-h-[300px] ${styles.padding}`}> */}
        <div variants={textVariant()}>
          <h5 className={`${styles.sectionHeadText}`}>
            Certifications.
          </h5>
        </div>
      {/* </div> */}

      <div className={`mt-12 gap-8 flex items-stretch justify-center flex-wrap`}>
        {certifications.map((certification, index) => (
          <Card 
            key={certification.name}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "cer");


