import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import Wave from "@/components/Wave";
import Icon from "@/components/Icon";
import CallToAction from "@/components/CallToAction";
import FancyHeader from "@/components/FancyHeader";
import CalloutBox from "@/components/CalloutBox";
import Testimonial from "@/components/Testimonial";
import ProjectCard from "@/components/ProjectCard";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";

export const metadata: Metadata = {
  title: "Home | UX Designer & Front-End Developer",
  description:
    "Start building your online presence today by working with me. I'm a freelance User Interface designer and developer who always puts the user first.",
};

const Home = async () => {
  const projects = await getContentList(CONTENT_PATHS["projects"]);
  return (
    <>
      <header className="header header--home">
        <Container narrow>
          <div className="home-header">
            <div className="home-header__content">
              <p className="eyebrow">Howdy, I'm Traek. 🐜</p>
              <h1>
                <span className="home-header__highlight">
                  I build beautiful websites that work.
                </span>
              </h1>
              <span>
                I know it's ironic that right now, this site doesn't really
                work.
              </span>
              <p className="lead">
                I'm a freelance web designer and developer, specializing in
                helping small businesses build an online presence, while putting
                the <strong>user first</strong>.
              </p>
              <div className="d-inline">
                <Link href="/projects" className="button button--primary mr-2">
                  See My Work <Icon type="arrowRight" />
                </Link>
                <Link href="/contact-me" className="button button--ghost">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="home-header__image-container fancy-image">
              <figure className="home-header__image">
                <img
                  src="../images/about-me-hero-image.jpg"
                  className="home-header__image"
                  alt="An image of Traek Wells"
                />
                <figcaption className="text-small text-center mt-15">
                  No one told me that my tie clip was crooked.
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
        <Wave color="white" />
      </header>
      <main id="main">
        <Section>
          <Container narrow>
            <p className="lead">
              The goal isn’t just to simply <em>build</em> a website. The goal
              is to craft an experience that your{" "}
              <strong>users will love</strong>.
            </p>
            <div className="d-grid-two-columns">
              <div className="d-grid__column">
                <img
                  className="service-image"
                  src="../images/homepage-featured-image.jpg"
                  alt="Picture of mobile wireframes"
                />
              </div>
              <div className="d-grid__column">
                <p>
                  It's far too easy to fall into the trap of designing a digital
                  product that meet the needs of just the designer. Ultimately,
                  the goal should be to design and build something that caters
                  to your users.
                </p>
                <p>
                  <strong>That's where I come in.</strong>
                </p>
                <p>I pride myself in creating websites that:</p>
                <ul>
                  <li>Optimize digital usability</li>
                  <li>Give the users what their looking for</li>
                  <li>Meet the needs of the business</li>
                </ul>
              </div>
            </div>
          </Container>
          <Wave color="purple" />
        </Section>
        <Section secondary>
          <Container narrow>
            <FancyHeader>Skills I Have</FancyHeader>
            <p className="lead">
              I've spent a lot of time over the years working hard to get better
              at both design and development, in order to deliver the best
              possible product.
            </p>
            <div className="callout-blocks">
              <CalloutBox
                iconType="design"
                title="UI Design"
                body="Meticulously designing good looking websites for an existing brand, or a brand new one."
              />
              <CalloutBox
                iconType="development"
                title="Web Development"
                body="Taking an existing design or one I've created and building that into to an interactive, usable website."
              />
              <CalloutBox
                iconType="user"
                title="User Experience"
                body="Making the digital product as usable and enjoyable as possible for the user. This is very important."
              />
            </div>
            <Link href="/services" className="read-more">
              Learn more about my services <Icon type="arrowRight" />
            </Link>
          </Container>
          <Wave color="white" />
        </Section>
        <Section>
          <Container narrow>
            <FancyHeader>Projects I've Built</FancyHeader>
            <p className="lead">
              I've had the great pleasure of working on some amazing projects.
            </p>
            <div className="projects">
              {projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.slug}
                    slug={`/projects/${project.slug}`}
                    title={project.title}
                    previewImage={project.previewImage}
                    summary={project.summary}
                  />
                );
              })}
            </div>
          </Container>
          <Wave color="purple" />
        </Section>
        <Section secondary>
          <Container narrow>
            <FancyHeader>Beliefs</FancyHeader>
            <p className="lead mb-4">
              Over the years, I've gathered a few things that I've come to
              prioritize in the work I do. I approach every project with these
              in mind.
            </p>
            <div className="callout-blocks">
              <CalloutBox
                iconType="user"
                title="Users come first"
                body="Optimizing websites for the user is absolutely critical in earning their trust and building credibility."
              />
              <CalloutBox
                iconType="communication"
                title="Focused attention"
                body="I only work with one or two clients at a time which allows me to give clients the attention they need."
              />
              <CalloutBox
                iconType="fun"
                title="Honesty"
                body="I'm transparent about what I can and can't do. You can trust me to give you an honest quote for your project."
              />
            </div>
            <Link href="/about-me" className="read-more">
              Learn more about me <Icon type="arrowRight" />
            </Link>
          </Container>
          <Wave color="white" />
        </Section>
        <Section>
          <Container narrow>
            <h2 className="text-center">What others have said about me</h2>
            <p className="lead text-center centered-block">
              Here are some kind words from people I've worked with in the past.
            </p>
            <div className="testimonials">
              <Testimonial
                quote="Traek created a website for me where I can share my artwork, blogs, and accomplishments with the world. He really pulled off a design that fits my personality and passion, so if anyone is looking for a website designer. He’s the perfect person to work with"
                author="– Emeche Wells"
              />
            </div>
          </Container>
        </Section>
        <Section>
          <Container narrow>
            <CallToAction />
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Home;
