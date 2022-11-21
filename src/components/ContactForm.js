function ContactForm() {
  return (
    <div id="get-in-touch" className="contact-form-wrap">
      <h2>Get in touch</h2>
      <form
        action="https://formspree.io/f/myyvvzda"
        method="POST"
      >
        <div className="form-1">
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="form-2">
          <textarea name="message" placeholder="Your Message" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
