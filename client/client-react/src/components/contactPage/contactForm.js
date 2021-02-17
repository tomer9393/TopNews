function ContactForm() {
    return (
        <>
            <form action="#" method="post">
                <div className="form-group">
                    <input type="text" className="form-control" id="contact-name" placeholder="Enter Your Full Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="contact-email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="message" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} />
                </div>
                <button type="submit" className="btn contact-btn">SUBMIT <i className="fa fa-angle-right ml-2" /></button>
            </form>
        </>
    );
}

export default ContactForm;