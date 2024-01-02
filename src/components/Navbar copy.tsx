import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { RiMenu4Line } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useGlitch } from "react-powerglitch";
import NavLogo from '../../public/thumbnail.png';
import { itemsdes1, itemsdes2, items } from '../lib/config';
import NavItem from './NavItem';

const Navbar = () => {
  const glitch = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 250,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, [shadow]); // Include 'shadow' in the dependency array

  return (
    <div className={shadow ? 'fixed w-full h-[60px] shadow-xl shadow-black z-[100] ease-in-out duration-300' : 'fixed w-full h-[60px] z-[100]'}>
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-green-950 backdrop-filter backdrop-blur-xl bg-opacity-50 '>
      <Link href='/'>
        <Image src={NavLogo} alt='/' className='cursor-pointer ml-4 md:w-[110px] w-[100px]' />
      </Link>
      <div>
          
          <ul className='hidden md:flex text-white font-pixelate mr-11'>
            <ul className='flex gap-2'>
              {itemsdes1.map((itemsdes1) => (
                <NavItem key={itemsdes1.name} name={itemsdes1.name} link={itemsdes1.link} isActive={false} />
              ))}
            
              <Menu as="div" className="">
                <div>
                  <Menu.Button ref={glitch.ref} className="gap-5 w-[84px] bg-black/0 text-white text-md hover:text-md font-pixelate hover:font-bold mt-[14px] hover:text-white rounded-none flex justify-center text-sm ">
                    More
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-green-950 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 flex justify-center items-center">
                      <Menu.Item>
                        {({ active }) => (
                          <ul className='flex flex-col text-center'>
                            {itemsdes2.map((itemsdes2) => (
                              <NavItem key={itemsdes2.name} name={itemsdes2.name} link={itemsdes2.link} isActive={false} />
                            ))}
                          </ul>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </ul></ul>
            <div style={{ color: 'white' }} onClick={handleNav} className='md:hidden text-white'>
              <div className='text-white mr-2'>
                {nav ? (
                  <div
                    onClick={handleNav}
                    className='rounded-full shadow-lg shadow-green-700 bg-green-950 text-white font-bold p-3 cursor-pointer opacity-0'
                  >
                    <AiOutlineClose size={22} />
                  </div>
                ) : (
                  <motion.div
                    whileTap={{ scale: 0.6, rotate: 90 }} // Scale down when tapped
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <RiMenu4Line size={32} />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 backdrop-filter backdrop-blur-sm bg-opacity-50' : ''}>
          <AnimatePresence>
            {nav && (
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: 0 }}
                exit={{ left: '-100%' }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                className='md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-green-950 backdrop-filter backdrop-blur-md bg-opacity-50 shadow-green-700 shadow-lg p-10'
                style={{ backdropFilter: nav ? 'blur(10px)' : 'none' }}
              >
                <div>
                  <div className='flex w-full items-center justify-between'>
                    <Link href='/'>
                      <Image src={NavLogo} width='87' height='35' alt='/' />
                    </Link>
                    <div
                      onClick={handleNav}
                      className='rounded-full shadow-lg shadow-green-700 bg-green-950 text-white font-bold p-3 cursor-pointer animate-bounce'
                    >
                      <motion.div
                    whileTap={{ scale: 0.6, rotate: -90 ,opacity:0 }} // Scale down when tapped
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                      <AiOutlineClose size={22} /></motion.div>
                    </div>
                  </div>
                </div>
                <div className='py-4 flex flex-col'>
                  <ul className='uppercase font-pixelate text-white'>
                    <ul className='relative flex flex-col items-center gap-2 justify-around '>
                      {items.map((item) => (
                        <NavItem key={item.name} name={item.name} link={item.link} isActive={false} />
                      ))}
                    </ul>
                  </ul>
                  <div className='pt-40'></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
  
  );
};

export default Navbar;
