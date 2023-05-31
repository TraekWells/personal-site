import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import Icon from "@/components/Icon";
import { NextSeo } from "next-seo";

const ContactMe = () => {
  return (
    <>
      <NextSeo
        title="Contact Me"
        description="Contact me today so that we can start to turn your web project into a reality.
        "
        openGraph={{
          url: "https://www.traekwells.com/contact-me",
        }}
        canonical="https://www.traekwells.com/contact-me"
      />
      <PageHeader eyebrow="Contact me" title="Get in touch" />
      <main id="main">
        <Section>
          <Container narrow>
            <div className="d-grid-two-columns">
              <form
                name="contact-form"
                action="/thank-you"
                className="form"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input value="contact-form" name="form-name" type="hidden" />
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="more-details">Anything else?</label>
                  <textarea
                    id="more-details"
                    cols={30}
                    rows={6}
                    name="more-details"
                    placeholder="Any other details I should know?"
                  ></textarea>
                </div>
                <button className="button button--primary">
                  Send Message <Icon type="arrowRight" />
                </button>
              </form>
              <div className="d-grid__half">
                <p>
                  I'll respond to your message within 24 to 48 hours as long as
                  I'm not on vacation. Prefer to send a direct email and skip
                  the form? Feel free to send me a message to email below.
                  Looking forward to chatting with you!
                </p>
                <a className="big-link" href="mailto:howdy@traekwells.com">
                  howdy@traekwells.com
                </a>
              </div>
            </div>
          </Container>
        </Section>
        <Section>
          <Container narrow>
            <h3>Around the area?</h3>
            <p>I’d love to connect in person over a coffee or tea.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26809.57649531089!2d-93.15367952228985!3d44.982648590140556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1674156973178!5m2!1sen!2sus"
              width="100%"
              height="500"
              className="mb-5"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of the Como area in Saint Paul, MN"
            ></iframe>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default ContactMe;
