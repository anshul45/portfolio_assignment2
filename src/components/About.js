const About = ({ data, email }) => {
  return (
    <section id="about" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">ABOUT ME</h3>
              <p className="text-uppercase small">
                {data?.title}
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src={data?.avatar?.url} alt="image" />
              <div className="nav social-icon">
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
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
            <div className="about-me">
              <h4>I'M {data?.name}</h4>
              <h6>
                A <span className="theme-color">{data?.title}</span> designer
                based in <span className="theme-color">{data?.address}</span>
              </h6>
              <p>
                {data?.description}
              </p>
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>Experience</label>
                    <p>{data?.exp_year}</p>
                  </div>
                  <div className="media">
                    <label>Quote</label>
                    <p>{data?.quote}</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>{data?.address}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>Email</label>
                    <p>{email ? email : ""}</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>{data?.phoneNumber}</p>
                  </div>
                  <div className="media">
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className="btn-bar">
                <a className="m-btn m-btn-theme" href="#work">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
