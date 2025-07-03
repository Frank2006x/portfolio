import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Frank
          </a>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <ul className="nav-ul">
              <li className="nav-li">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-li">
                <a className="nav-link" href="#home">
                  Projects
                </a>
              </li>
              <li className="nav-li">
                <a className="nav-link" href="#home">
                  About
                </a>
              </li>
              <li className="nav-li">
                <a className="nav-link" href="#home">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className=" overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            exit={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 1 }}
          >
            <nav className="pb-5">
              <ul className="nav-ul">
                <li className="nav-li">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-li">
                  <a className="nav-link" href="#home">
                    Projects
                  </a>
                </li>
                <li className="nav-li">
                  <a className="nav-link" href="#home">
                    About
                  </a>
                </li>
                <li className="nav-li">
                  <a className="nav-link" href="#home">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
