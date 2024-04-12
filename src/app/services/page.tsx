import PageHeader from "@/components/PageHeader";
import FancyHeader from "@/components/FancyHeader";
import CallToAction from "@/components/CallToAction";
import Icon from "@/components/Icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "I offer web design and web development services to small businesses that want to build or expand their online presence.",
};

const Services = () => {
  return (
    <>
      <PageHeader eyebrow="Services" title="Here's how I can help">
        <p className="lead">
          I have the skills to design and build you a beautiful website that
          works.
        </p>
      </PageHeader>
      <main id="main">
        <section className="section">
          <div className="wave-white"></div>
          <div className="container container--narrow">
            <article className="mb-10">
              <FancyHeader>User Interface Design</FancyHeader>
              <p className="lead">
                Designing a website is where I have the most fun in any given
                project. It's where a blend of business needs, user needs and
                creativity come together to form one, cohesive product that's
                mutually beneficial.
              </p>
              <div className="d-grid-two-columns">
                <div className="d-grid__column">
                  <img
                    className="service-image"
                    src="/images/ui-design-image.jpg"
                    alt="An image of drawings and a laptop"
                  />
                </div>
                <div className="d-grid__column">
                  <Icon type="responsive" />
                  <h3>Responsive design</h3>
                  <p>
                    It's no secret that most internet traffic is from users on a
                    mobile device. It's about 60%. That's why all of the
                    websites that I design look great on all device sizes.
                  </p>
                  <Icon type="accessibility" />
                  <h3>Accessible for all</h3>
                  <p>
                    Using the web is a fundamental <strong>right</strong> for
                    all people today. In the design phase, I make sure that I'm
                    building something that can be used by people of all
                    capabilities.
                  </p>
                </div>
              </div>
            </article>
            <article className="mb-10">
              <FancyHeader>Web Development</FancyHeader>
              <p className="lead">
                As a web developer with over five years of experience, I know
                how to bridge the gap between great design and excellent
                functionality.
              </p>
              <div className="d-grid-two-columns">
                <div className="d-grid__column">
                  <img
                    className="service-image"
                    src="/images/web-development-image.jpg"
                    alt="An image of two computers with code on them"
                  />
                </div>
                <div className="d-grid__column">
                  <Icon type="performant" />
                  <h3>Performance</h3>
                  <p>
                    No one likes a slow website. Not only that, the chances of
                    someone coming back to a slow are <em>very</em> slim. That's
                    why during development, I make it a point to optimize
                    performance.
                  </p>
                  <Icon type="hosting" />
                  <h3>Hosting and domain</h3>
                  <p>
                    Rest assured that after the development is finished, I'll
                    help you get a domain if you don't already have one and
                    assist in setting up web hosting so people can actually
                    visit your new site!
                  </p>
                </div>
              </div>
            </article>
            <article className="mb-10">
              <FancyHeader>Tools that I use</FancyHeader>
              <p className="lead">
                I've used a handful of different tools over the years and they
                all help to accomplish the same goal. Here are some tools that
                I've come to love.
              </p>
              <div className="tools">
                <div className="tool">
                  <img src="/images/react-logo.png" alt="React JS icon" />
                </div>
                <div className="tool">
                  <img src="/images/vue-js-logo.png" alt="Vue JS icon" />
                </div>
                <div className="tool">
                  <img src="/images/wordpress-logo.png" alt="WordPress icon" />
                </div>
                <div className="tool">
                  <img src="/images/sass-logo.png" alt="SASS icon" />
                </div>
                <div className="tool">
                  <img src="/images/sketch-logo.png" alt="Sketch icon" />
                </div>
              </div>
            </article>
            <section className="section">
              <div className="container container--narrow">
                <CallToAction />
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
