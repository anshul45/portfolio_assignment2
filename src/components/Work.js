import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Work = ({data, title}) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-content", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">LATEST WORKS</h3>
              <p className="text-uppercase small">
                {title?title:""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-content lightbox-gallery">
          {/* grid item */}
          {data && data.map((work) => (
           <div key={work._id}>
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src={work.image.url} alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>{work.title}</h5>
                <div>
                  {work.techStack.map(tech => 
                    (

                <span key={tech}>{tech}</span>
                    ))}
                </div>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
           </div>
            ))}
            {/* grid item */}
        
        </div>{" "}
        {/* portfolio-content */}
      </div>
    </section>
  );
};
export default Work;
