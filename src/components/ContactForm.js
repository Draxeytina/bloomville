function ContactForm() {
  return (
    <div id="get-in-touch" className="contact-from-wrap">
      <h2>Get in touch</h2>
      <form
        action="https://formspree.io/f/myyvvzda"
        method="POST"
      >
        <div className="form-1">
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="form-2">
          <textarea name="message" placeholder="Your message" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
