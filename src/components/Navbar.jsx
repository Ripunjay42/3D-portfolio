import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close, linkedin, githubs, logo } from '../assets';
import { FaFileAlt, FaVolumeMute, FaVolumeUp, FaPlay, FaMusic} from 'react-icons/fa'; // Import Font Awesome icons
import { AudioContext } from '../AudioContext'; // Import the music file


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isPlaying, isMuted, canAutoplay, togglePlay, toggleMute } = useContext(AudioContext);

  const resumeLink = {
    id: 'resume',
    title: 'Resume',
    url: 'https://drive.google.com/file/d/1GgtkrPsKERVkkUxn2GrA_xgi9sFWQTBK/view?usp=sharing',
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((current) => {
        const sectionId = current.getAttribute('id');
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener('scroll', navbarHighlighter);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', navbarHighlighter);
    };
  }, []); 

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-4 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            className="flex items-center cursor-pointer"
            onClick={() => {
              setActive('home');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-10 h-10 object-contain pointer-events-none" />
            {/* <p className="text-white text-xl font-bold cursor-pointer flex tracking-wider">
              Ripunjay &nbsp;
            </p> */}
          </Link>

          <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ripunjay-choudhury-83864524b/"
                target="_blank"
                className="group relative rounded-full border-[2px] border-[#915EFF] p-2 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-md hover:scale-105"
              >
                <img src={linkedin} alt="LinkedIn" className="h-5 w-5" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute -right-3 transform rotate-45 border-t-2 border-r-2 border-[#48ccdd] w-2 h-2"></span>
                </span>
              </a>
              <a
                href="https://github.com/Ripunjay42"
                target="_blank"
                className="group relative rounded-full border-[2px] border-[#915EFF] p-2 transition-transform duration-300 hover:shadow-violet-700 hover:shadow-md hover:scale-105"
              >
                <img src={githubs} alt="GitHub" className="h-5 w-5" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute -right-3 transform rotate-45 border-t-2 border-r-2 border-[#4edbe6] w-2 h-2"></span>
                </span>
              </a>
            </div>

        </div>

        <ul className="list-none hidden xl:flex flex-row gap-12">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer flex items-center`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>
                  <Icon className="w-5 h-5 mr-2" />
                </a>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
          <li
            className="text-secondary font-poppins font-medium cursor-pointer text-[16px] flex items-center"
            onClick={() => setToggle(!toggle)}
          >
            <a
              href={resumeLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt className="w-5 h-5 mr-2" />
            </a>
            <a
              href={resumeLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeLink.title}
            </a>
          </li>
        </ul>

        {canAutoplay ? (
        <button onClick={toggleMute} className={`ml-4 relative rounded-full p-2 transition-all duration-300 ${isMuted ? '' : 'animate-glow'}`}>
          {isMuted ? (
            <FaVolumeMute className="w-5 h-5 text-white" />
        
          ) : (
              <FaVolumeUp className="w-5 h-5 text-white animate-dance"/>
          )}
        </button>
      ) : (
        <button onClick={togglePlay} className="ml-4 cursor-pointer flex gap-1">
            <span className="animate-bowText text-[18px] font-bold">
              play
            </span>
           <FaMusic className="w-5 h-7 text-white animate-dance" />
          {/* <FaPlay className="w-5 h-7 text-white animate-dance" />  */}
        </button>
      )}

        <div className="xl:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? 'translate-x-0' : 'translate-x-full'
            } px-8 py-10 bg-black border-[0.1px] border-violet-600 absolute top-[72px] left-0 min-w-[140px] z-10 rounded-xs transition-transform duration-300 transform-gpu`}
            style={{
              transform: toggle ? 'translateX(0)' : 'translateX(100%)',
              right: toggle ? '0' : '-100%',
            }}
          >
            <ul className="list-none flex flex-col items-start justify-end gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    } font-poppins font-medium cursor-pointer text-[16px] flex items-center`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>
                      <Icon className="w-5 h-5 mr-2" />
                    </a>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
              <li
                className="text-secondary font-poppins font-medium cursor-pointer text-[16px] flex items-center"
                onClick={() => setToggle(!toggle)}
              >
                <a
                  href={resumeLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileAlt className="w-5 h-5 mr-2" />
                </a>
                <a
                  href={resumeLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resumeLink.title}
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </nav>
  );
};

export default Navbar;
