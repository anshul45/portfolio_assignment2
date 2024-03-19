import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import Layout from "@/src/layouts/Layout";

import Services from "@/src/components/Services";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import Preloader from "@/src/layouts/Preloader";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index5 = () => {
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
    apiData()
  }, [])
  return (
    <Layout headerColor={"dark"} isTransparent={true}>
      {loading && <Preloader />}
      <Head>
        <link href="static/style/master-pink.css" rel="stylesheet" />
      </Head>
      {/* Home Banner */}
      <section id="home" className="home-banner-03">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-md-6 full-scree bg-cover"
              style={{ backgroundImage: `url(${fetchedData?.about?.avatar?.url})` }}
            ></div>
            <div className="col-md-6">
              <div className="ht-text">
                <h6>Hello There!</h6>
                <h1>I'm {fetchedData?.about?.name}</h1>
                <p>
                  {fetchedData?.about?.subTitle}
                </p>
                <div className="nav social-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
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
export default Index5;
