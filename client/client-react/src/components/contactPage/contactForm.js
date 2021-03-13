import { createContact } from "../../api/ContactAPI";
import { useState } from "react";
import { useAlert, withAlert } from "react-alert";


function ContactForm() {
  var [fullName, setFullName] = useState(undefined);
  var [email, setEmail] = useState(undefined);
  var [message, setMessage] = useState(undefined);
  
  function reset(){
      fullName = undefined;
      email = undefined;
      message = undefined;
      document.getElementById('contact-name').value = '';
      document.getElementById('contact-email').value = '';
      document.getElementById('message').value = '';
  }

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
          if(fullName === undefined || email === undefined ||message === undefined )
            window.alert("Please fill all fields");
          else{
            createContact(fullName, email, message);
            window.alert("Thank you for contact us");
            reset();
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
