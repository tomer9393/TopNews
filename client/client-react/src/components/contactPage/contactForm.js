import { createContact } from "../../api/ContactAPI";
import { useState } from "react";
import { useAlert, withAlert } from "react-alert";

function ContactForm() {
  const [fullName, setFullName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [message, setMessage] = useState(undefined);
  const alert = useAlert();

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
            value={fullName}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="contact-email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
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
            value={message}
          />
        </div>
      </form>
      <button
        onClick={() => {
          if (fullName && email && message) {
            createContact(fullName, email, message);
            alert.success("Message was sent successfuly");
            setMessage("");
            setEmail("");
            setFullName("");
          } else {
            alert.error("Please fill all the fields");
          }
        }}
        type="submit"
        className="btn contact-btn"
      >
        SUBMIT <i className="fa fa-angle-right ml-2" />
      </button>
    </>
  );
}

export default withAlert()(ContactForm);
