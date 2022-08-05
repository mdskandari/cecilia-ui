import React, { Component } from "react";
import "./styles.css";
import logo from "./img/logo.svg";
import logoWhite from "./img/logo-white.svg";
import illustrationIntro from "./img/illustration-intro.svg";
import anisha from "./img/avatar-anisha.png";
import ali from "./img/avatar-ali.png";
import richard from "./img/avatar-richard.png";
import shanai from "./img/avatar-shanai.png";
import instagram from "./img/icon-instagram.svg";
import facebook from "./img/icon-facebook.svg";
import pinterest from "./img/icon-pinterest.svg";
import twitter from "./img/icon-twitter.svg";
import youtube from "./img/icon-youtube.svg";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    const nav = document.getElementById('menu')
    const btn = document.getElementById('menu-btn')
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');

  }

  render() {
    return (
      <div>
        {/* navbar */}
        <nav className="bg-red-200 fixed top-0 w-full" >
          <div className="relative container mx-auto p-6">
            {/* flex container */}
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-around space-x-7">
                {/* Logo */}
                <div className="pt-2">
                  <img src={logo} alt="" />
                </div>
                {/* menu Items */}
                <div className="hidden md:flex space-x-6">
                  <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
                  <a href="#" className="hover:text-darkGrayishBlue">Products</a>
                  <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
                  <a href="#" className="hover:text-darkGrayishBlue">Carriers</a>
                  <a href="#" className="hover:text-darkGrayishBlue">Commiunity</a>
                </div>

              </div>
              {/* Button */}
              <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                Get started
              </a>

              {/* Humburger Icon  */}
              <button id="menu-btn" className="block humbergur md:hidden focus:outline-none" onClick={this.handleClick}>
                <span className="humbergur-top"></span>
                <span className="humbergur-middle"></span>
                <span className="humbergur-bottom"></span>
              </button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <div id="menu" className="absolute flex-col items-center self-end hidden  py-8 mt-10 space-y-6 font-bold 
            bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                <a href="#" className="">Pricing</a>
                <a href="#" className="">Products</a>
                <a href="#" className="">About Us</a>
                <a href="#" className="">Carriers</a>
                <a href="#" className="">Commiunity</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="mt-28">
          {/* flex container */}
          <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto space-y-0 md:space-y-0">
            {/* left item */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
              <h1 className="max-w-md font-bold text-4xl text-center md:text-5xl  md:text-left">
                Bring everyone together to build better peroducts.
              </h1>

              <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger teams goals in view.
              </p>

              <div className="flex justify-center md:justify-start">
                <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                  Get started
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <img src={illustrationIntro} alt="" className="" />
            </div>


          </div>
        </section>

        {/* features section */}
        <section id="features">
          <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            {/* whats different */}
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                What's different about Manage?
              </h2>
              <p className="max-w-small text-centet text-darkGrayishBlue md:text-left">
                Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
              </p>
            </div>

            {/* numbred list */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              {/* list item 1 */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                      01
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Trak company-wide progress
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Trak company-wide progress
                  </h3>
                  <p className="text-darkGrayishBlue">
                    See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                  </p>
                </div>
              </div>
              {/* list item 2 */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                      01
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Advanced built-in reports
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Advanced built-in reports
                  </h3>
                  <p className="text-darkGrayishBlue">
                    Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                  </p>
                </div>
              </div>
              {/* list item 3 */}
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                      01
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      Everything you need in one place
                    </h3>
                  </div>
                </div>
                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    Everything you need in one place
                  </h3>
                  <p className="text-darkGrayishBlue">
                    Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* Testimonials */}
        <section id="testimonials">
          {/* container heading and testimonial block */}
          <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            {/* heading  */}
            <h2 className="text-4xl font-bold text-center">
              What's Different About Manage?
            </h2>
            {/* testimonials container */}
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
              {/* Testimonial 1 */}
              <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                <img className="w-16 -mt-14" src={anisha} alt="" />
                <h5 className="text-lg font-bold">Anisha Li</h5>
                <p className="text-sm text-darkGrayishBlue">
                  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
                </p>
              </div>
              {/* Testimonial 2 */}
              <div className="flex flex-col items-center mt-10 p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:mt-0">
                <img className="w-16 -mt-14" src={shanai} alt="" />
                <h5 className="text-lg font-bold">Shanai Mc II</h5>
                <p className="text-sm text-darkGrayishBlue">
                  “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”
                </p>
              </div>
              {/* Testimonial 3 */}
              <div className="flex flex-col items-center mt-10 p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:mt-0">
                <img className="w-16 -mt-14" src={ali} alt="" />
                <h5 className="text-lg font-bold">Ali Bravo</h5>
                <p className="text-sm text-darkGrayishBlue">
                  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
                </p>
              </div>
              {/* Testimonial 4 */}
              <div className="flex flex-col items-center mt-10 p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:mt-0">
                <img className="w-16 -mt-14" src={richard} alt="" />
                <h5 className="text-lg font-bold">Richard Watts</h5>
                <p className="text-sm text-darkGrayishBlue">
                  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”                </p>
              </div>
            </div>

            <div className="my-16">
              {/* Button */}
              <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                Get started
              </a>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section id="cta" className="bg-brightRed">
          {/* flex Container */}
          <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
            {/* Heading */}
            <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left ">
              Smplify How your team works today?
            </h2>
            {/* Button */}
            <div className="">
              <a href="#" className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-300">
                Get started
              </a>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-veryDarkBlue">
          {/* flex container */}
          <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0" >
            {/* Logo and social links container */}
            <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
              {/* Logo */}
              <div className="mt-6 md:mt-0">
                <img src={logoWhite} className='h-8' alt="" />
              </div>

              {/* Social links */}
              <div className="flex justify-center space-x-4">
                <a href="$">
                  <img src={facebook} className="h-8" alt="" />
                </a>
                <a href="$">
                  <img src={youtube} className="h-8" alt="" />
                </a>
                <a href="$">
                  <img src={twitter} className="h-8" alt="" />
                </a>
                <a href="$">
                  <img src={pinterest} className="h-8" alt="" />
                </a>
                <a href="$">
                  <img src={instagram} className="h-8" alt="" />
                </a>
              </div>
            </div>


            <div className="flex justify-around space-x-32">
              <div className="flex flex-col space-y-3 text-white">
                <a className="hover:text-brightRed" href="">Home</a>
                <a className="hover:text-brightRed" href="">Pricing</a>
                <a className="hover:text-brightRed" href="">Products</a>
                <a className="hover:text-brightRed" href="">About Us</a>
              </div>
              <div className="flex flex-col space-y-3 text-white">
                <a className="hover:text-brightRed" href="">Carriers</a>
                <a className="hover:text-brightRed" href="">Community</a>
                <a className="hover:text-brightRed" href="">Privacy Policy</a>
              </div>
            </div>


            {/* input Container */}
            <div className="flex flex-col justify-between">
              <form>
                <div className="flex space-x-3">
                  <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Update in your inbox" />
                  <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                    Go
                  </button>
                </div>
              </form>

              <div className="hidden text-white md:block">
                Copyright © 2022, All Rights Reserved
              </div>
            </div>


          </div>
        </footer>

      </div>
    );
  }
}

export default App;