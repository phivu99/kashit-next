// import Image from 'next/image'



"use client";

//import Logo from "./components/Logo";
//import ThemeSwitcher from "@/components/ThemeSwitcher";

import config from "../config/config.json";
import menu from "../config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from 'next/image'
import logo from '../assets/images/logo/logo.svg'
import '../css/global.css'
import '../css/bootstrap.css'
import '../css/header.css'
//import global from './src/app/css/global.css'
//import global from '../css/global.css'

//import { IoSearch } from "react-icons/io5/index.js";

export interface ChildNavigationLink {
  name: string;
  url: string;
}

export interface NavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}

const Header = () => {
  // distructuring the main menu from menu object
  const { main }: { main: NavigationLink[] } = menu;
  const { navigation_button, settings } = config;
  // get current path
  const pathname = usePathname();

  return (
    <header 
      className={`main-header header z-30 ${settings.sticky_header && "sticky top-0"}`}
    >
        {/* <div className="header-lower"> */}
      <nav className="navbar">
      <div className="auto-container">
      <div className="inner-container flex items-center justify-between">
      <div className="logo-box d-flex">
            <a
              href="/favicon.png"
            >
              {' '}
              <Image
                src={logo}
                alt=""
                className=""
                width={100}
                height={150}
                priority

              />
          
            </a>
          </div>
        {/* logo */}
    
   
        {/* navbar toggler */}


        {/* /navbar toggler */}
        <div className="nav-outer flex items-center">
        <div className="main-menu show navbar-expand-md">
        <div className="navbar-collapse  clearfix" >
        {/* <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8 navigation clearfix"
        > */}
        <ul
          id="nav-menu"
          className="navbar-nav navigation clearfix"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="nav-item nav-dropdown group relative">
                  <a
                    className={`nav-link inline-flex items-center ${
                      menu.children?.map(({ url }) => url).includes(pathname) ||
                      menu.children
                        ?.map(({ url }) => `${url}/`)
                        .includes(pathname)
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.name}
                  </a>
                  <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                    {menu.children?.map((child, i) => (
                      <li className="nav-dropdown-item" key={`children-${i}`}>
                        <Link
                          href={child.url}
                          className={`nav-dropdown-link block ${
                            (pathname === `${child.url}/` ||
                              pathname === child.url) &&
                            "active"
                          }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={menu.url}
                    className={`nav-link block ${
                      (pathname === `${menu.url}/` || pathname === menu.url) &&
                      "active"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          {navigation_button.enable && (
            <li className="mt-4 inline-block lg:hidden">
              <Link
                className="btn btn-outline-primary btn-sm"
                href={navigation_button.link}
              >
                {navigation_button.label}
              </Link>
            </li>
          )}
        </ul>
        </div>
        {/* <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          {settings.search && (
            <Link
              className="mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
              href="/search"
              aria-label="search"
            >
              <IoSearch />
            </Link>
          )}
          <ThemeSwitcher className="mr-5" />
          {navigation_button.enable && (
            <Link
              className="btn btn-outline-primary btn-sm hidden lg:inline-block"
              href={navigation_button.link}
            >
              {navigation_button.label}
            </Link>
          )}
        </div> */}
        </div>
        </div>
        </div>
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
};

export default Header;


{/* <div className="header__logo logo-box d-flex">
<a to="/"><img src={logo} alt="Icoland" /></a>

</div>
<div>
<a
  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>

</a>
</div> */}