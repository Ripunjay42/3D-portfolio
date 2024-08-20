import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close, linkedin, githubs, logo } from '../assets'
import { FaFileAlt } from 'react-icons/fa'


const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);


  const resumeLink = {
    id: 'resume',
    title: 'Resume',
    url: 'https://drive.google.com/file/d/1GgtkrPsKERVkkUxn2GrA_xgi9sFWQTBK/view?usp=sharing' // Replace with your actual Google Drive link
  }




  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);




  return (
    <nav       className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <div className='flex gap-2 items-center'>

        <Link
          to='/'
          className='flex items-center gap-4'
          onClick={() => {
            setActive('home')
            window.scrollTo(0, 0)
          }}
        >
          <img  src={logo} alt="logo" className='w-10 h-10 object-contain' />
          <p className="text-white text-xl font-bold cursor-pointer flex tracking-wider">
            Ripunjay &nbsp;
          </p>
        </Link>

        
        <div className="hidden sm:flex gap-4">
          <a href="https://www.linkedin.com/in/ripunjay-choudhury-83864524b/" target='_blank'>
            <img src={linkedin} alt="linkedin" className='h-5 w-5'/>
          </a>
          <a href="https://github.com/Ripunjay42" target='_blank'>
            <img src={githubs} alt="github" className='h-5 w-5'/>
          </a>
        </div>

      </div>
      <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer flex items-center`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}><Icon className="w-5 h-5 mr-2" /></a>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
          <li
            className="text-secondary font-poppins font-medium cursor-pointer text-[16px] flex items-center"
            onClick={() => setToggle(!toggle)}
          >
            <a href={resumeLink.url} target="_blank" rel="noopener noreferrer"><FaFileAlt className="w-5 h-5 mr-2" /></a>
            <a href={resumeLink.url} target="_blank" rel="noopener noreferrer">
              {resumeLink.title}
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-8 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-140px z-10 rounded-xl`}>
            <ul className="list-none flex flex-col items-start justify-end gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px] flex items-center`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.title)
                    }}
                  >
                     <a href={`#${link.id}`}><Icon className="w-5 h-5 mr-2" /></a>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
              <li
                  className='text-secondary font-poppins font-medium cursor-pointer text-[16px] flex items-center'
                  onClick={() => setToggle(!toggle)}
              >
            <a href={resumeLink.url} target="_blank" rel="noopener noreferrer"><FaFileAlt className="w-5 h-5 mr-2" /></a>
            <a href={resumeLink.url} target="_blank" rel="noopener noreferrer">
              {resumeLink.title}
            </a>
          </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar