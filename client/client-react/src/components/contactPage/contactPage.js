import ContactForm from "./contactForm";
import moment from "moment";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function AboutUsPage() {
  // optional configuration
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };

  return (
    <>
      {/* Breadcumb Area Start */}
      <div className="breadcumb-area section_padding_50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breacumb-content d-flex align-items-center justify-content-between">
                <h3 className="font-pt mb-0">Contact</h3>
                <p className="editorial-post-date text-dark mb-0">
                  {moment().format("DD/MM/YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcumb Area End */}
      <section className="gazette-contact-area section_padding_100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="gazette-heading">
                <h4 className="font-bold">address</h4>
              </div>

              {/* Contact Form */}
              <AlertProvider template={AlertTemplate} {...options}>
                <ContactForm />
              </AlertProvider>
            </div>
            <div className="col-12 col-md-4">
              <div className="gazette-heading">
                <h4 className="font-bold">address</h4>
              </div>
              <div className="contact-address-info mb-50">
                <p>
                  Address: Eli Vizel 2 Street <br /> City / State: Rishon Le
                  Tzion <br /> Phone: 03-9634140
                </p>
              </div>
              {/* <div className="gazette-heading">
                                <h4 className="font-bold">Phone</h4>
                            </div>
                            <div className="contact-address-info">
                                <p>Phone #1: 126-632-2345 <br />Phone #2: 126-632-2345 <br />Phone #3: 126-632-2345 <br />Phone #4: 126-632-2345</p>
                            </div> */}
            </div>
          </div>
        </div>
      </section>

      <div id="googleMap">
        <iframe
          title="My map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12779.141461338724!2d34.77462410801682!3d31.96748838686271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b3f5eb44e1c1%3A0xfbe9b8c6bce59319!2z15TXnteh15zXldecINeU15DXp9eT157XmSDXlNee15vXnNec15Qg15zXnteZ16DXlNec!5e0!3m2!1siw!2sil!4v1613504947364!5m2!1siw!2sil"
          width="100%"
          height={560}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </>
  );
}

export default AboutUsPage;
