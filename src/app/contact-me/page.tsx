import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Contact me today so that we can start to turn your web project into a reality.",
};

const ContactMe = () => {
  return (
    <>
      <PageHeader>
        <h1>Get in touch</h1>
      </PageHeader>
      <main id="main">
        <Section>
          <Container>
            <div className="d-grid-two-columns">
              <div className="d-grid__half">
                <p>
                  I'll respond to your message within 24 to 48 hours as long as
                  I'm not on vacation. Feel free to send me a message to email
                  below. Looking forward to chatting with you!
                </p>
                <a className="big-link" href="mailto:traek.wells@gmail.com">
                  traek.wells@gmail.com
                </a>
              </div>
              <div className="d-grid__half">
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
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default ContactMe;
