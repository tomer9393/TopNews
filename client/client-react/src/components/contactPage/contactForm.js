import { createContact } from "../../api/ContactAPI";
import { useState } from "react";

function ContactForm() {
  const [fullName, setFullName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [message, setMessage] = useState(undefined);

  return (
    <>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={(event) => setFullName(event.target.value)}
            id="contact-name"
            placeholder="Enter Your Full Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="contact-email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Message"
            defaultValue={""}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </form>
      <button
        onClick={() => {
          createContact(fullName, email, message);
          window.location.reload();
        }}
        type="submit"
        className="btn contact-btn"
      >
        SUBMIT <i className="fa fa-angle-right ml-2" />
      </button>
    </>
  );
}

export default ContactForm;
