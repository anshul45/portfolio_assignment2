import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import Layout from "@/src/layouts/Layout";

import Services from "@/src/components/Services";
import TypingAnimation from "@/src/components/TypingAnimation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Preloader from "@/src/layouts/Preloader";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index3 = () => {
  const [fetchedData, setFetchedData] = useState([])
  const [loading, setLoading] = useState(false)

  const apiData = async () => {
    setLoading(true)
    const data = await fetch("https://portfolio-assignment2.vercel.app/api/data");
    const userData = await data.json();
    setFetchedData(userData.user)
    setLoading(false)
  }

  useEffect(() => {
    apiData()
  }, [])

  return (
    <Layout headerColor={"dark"}>
      {loading && <Preloader />}
      {/* Home Banner */}
      <section id="home" className="home-banner-01">
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
            <div className="col-md-6">
              <img src={fetchedData?.about?.avatar?.url} alt="image" />
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
    </Layout>
  );
};
export default Index3;
