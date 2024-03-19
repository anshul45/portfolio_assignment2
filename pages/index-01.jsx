import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import { tony } from "@/src/layouts/utils";
import { Fragment, useEffect, useState } from "react";
import Preloader from "@/src/layouts/Preloader";

import Services from "@/src/components/Services";
import TypingAnimation from "@/src/components/TypingAnimation";
import Footer from "@/src/layouts/Footer";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index1 = () => {
  const [fetchedData, setFetchedData] = useState([])
  const [loading, setLoading] = useState(false)

  const apiData = async () => {
    setLoading(true)
    const data = await fetch("http://localhost:3000/api/data");
    const userData = await data.json();
    setFetchedData(userData.user)
    setLoading(false)
  }


  useEffect(() => {
    apiData();
    tony.scrollToActiveNav();
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      {loading && <Preloader />}
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text" href="index.html">
              Tony
            </a>
          </div>
          <button className="toggler-menu" onClick={() => setToggle(!toggle)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <header
        className={`header-left ${toggle ? "menu-open menu-open-desk" : ""}`}
        id="navbar-collapse-toggle"
      >
        <div className="navbar-brand">
          <a className="logo-text" href="index.html">
            {fetchedData?.about?.name.split(" ")[0]}
          </a>
        </div>
        <ul className="nav nav-ul">
          <li>
            <a className="nav-link" href="#home">
              <i className="fas fa-house-damage" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              <i className="far fa-address-card" />
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#services">
              <i className="fas fa-concierge-bell" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#work">
              <i className="fas fa-briefcase" />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#blog">
              <i className="fas fa-blog" />
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contactus">
              <i className="fas fa-id-card-alt" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </header>

      <main className="main-left">
        {/* Home Banner */}
        <section
          id="home"
          className="home-banner-01 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(static/img/home-banner.jpg)" }}
        >
          <div className="container">
            <div className="row full-screen align-items-center p-100px-tb">
              <div className="col-md-6">
                <div className="ht-text">
                  <h6>Hello there...</h6>
                  <h1>{fetchedData?.about?.name}</h1>
                  <h2>
                    I Am Passionate <TypingAnimation text={fetchedData?.about?.title} />
                  </h2>
                  <p>
                    {fetchedData?.about?.subTitle}
                  </p>
                  <div className="btn-bar go-to">
                    <a className="m-btn m-btn-theme" href="#work">
                      my work
                    </a>
                    <a className="m-btn m-btn-t-theme" href="#contactus">
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="go-to go-to-next">
            <a href="#about">
              <span />
            </a>
          </div>
        </section>
        {/* End Home Banner */}

        {/* End Home Banner */}
        {/* about us */}
        <About data={fetchedData?.about} email={fetchedData?.email} />
        {/* end about us */}
        {/* fun */}
        <Skills data={fetchedData?.skills} title={fetchedData?.about?.title} />
        {/* End fun */}
        {/* resume */}
        <Services data={fetchedData?.services} title={fetchedData?.about?.title} />
        {/* End resume */}
        {/* Work */}
        <Work data={fetchedData?.projects} title={fetchedData?.about?.title} />
        {/* End work */}
        {/* Testiminails */}
        <Testiminails data={fetchedData?.testimonials} title={fetchedData?.about?.title} />
        {/* End Testiminails */}
        {/* Blog */}
        <Blog title={fetchedData?.about?.title} />
        {/* End Blog */}
        <Contact title={fetchedData?.about?.title} contactEmail={fetchedData?.email} phone={fetchedData?.about?.phoneNumber} address={fetchedData?.about?.address} />
      </main>
      <Footer />
    </Fragment>
  );
};
export default Index1;
