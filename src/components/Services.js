const Services = ({ data, title }) => {
  return (
    <section id="services" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Services</h3>
              <p className="text-uppercase small">
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* feaure box */}
          {data && data.map(service => (
            <div className="col-sm-6 col-lg-4 m-15px-tb" key={service._id}>
              <div className="feature-box-1 box-shadow-lg">
                <div className="icon">
                  <i className="icon-desktop" />
                </div>
                <div className="feature-content">
                  <h5>{service.name}</h5>
                  <p>
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* / */}
        </div>
      </div>
    </section>
  );
};
export default Services;
