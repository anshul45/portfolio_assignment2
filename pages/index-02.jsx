import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import Layout from "@/src/layouts/Layout";

import Services from "@/src/components/Services";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Preloader from "@/src/layouts/Preloader";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index2 = () => {
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
    <Layout name={fetchedData?.about?.name.split(" ")[0]}>
      {loading && <Preloader />}
      {/* Home Banner */}
      <section
        id="home"
        className="home-banner-02 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(static/img/home-banner-1.jpg)" }}
      >
        <div className="container">
          <div className="row full-screen align-items-center p-100px-tb">
            <div className="col-12">
              <div className="ht-text text-center">
                <h6>Hello There!</h6>
                <h1>I'm {fetchedData?.about?.name}</h1>
                <div className="nav ht-list justify-content-center">
                  <span>{fetchedData?.about?.title}</span>
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
export default Index2;
