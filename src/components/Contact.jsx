import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { styles } from '../styles';
// import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { linkedin, githubs } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_ppggetc', // replace with your EmailJS Service ID
        'template_369nstg', // replace with your EmailJS Template ID
        form,
        'eZlX0ZPyVjb0fuMm-'
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccessMessage('🎉 Your message has been sent successfully!');
          setErrorMessage(''); // Clear any previous error message
          setForm({
            name: '',
            email: '',
            message: '',
          });

          setTimeout(() => {
            setSuccessMessage(''); // Clear the success message after a few seconds
          }, 5000);
        },
        (error) => {
          setLoading(false);
          setErrorMessage('❌ Something went wrong. Please try again.');
          setSuccessMessage(''); // Clear any previous success message

          setTimeout(() => {
            setErrorMessage(''); // Clear the error message after a few seconds
          }, 5000);
        }
      );
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden '>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-[520px] border-[1px] border-green-400 shadow-card"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-4"
        >
          <label className='flex flex-col'>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className='bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <label className='flex flex-col'>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className='bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <label className='flex flex-col'>
            <textarea
              type="text"
              name='message'
              value={form.message}
              rows="7"
              onChange={handleChange}
              placeholder="Your Message"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        <div className="flex gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/ripunjay-choudhury-83864524b/"
              target="_blank"
              className="rounded-full border-[1px] border-[#915EFF] p-2 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-md hover:scale-105"
            >
              <img src={linkedin} alt="LinkedIn" className="h-5 w-5 pointer-events-none" />
            </a>
            <a
              href="https://github.com/Ripunjay42"
              target="_blank"
              className="rounded-full border-[1px] border-[#915EFF] p-2 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-md hover:scale-105"
            >
              <img src={githubs} alt="GitHub" className="h-5 w-5 pointer-events-none" />
            </a>
          </div>

        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-green-400 font-medium text-lg"
          >
            {successMessage}
          </motion.div>
        )}

        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-red-400 font-medium text-lg"
          >
            {errorMessage}
          </motion.div>
        )}
      </motion.div>

      {/* <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"  
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
