import PageHeader from "@/components/PageHeader";
import TableOfContents from "@/components/TableOfContents";
import useGetHeaders from "@/hooks/useGetHeaders";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import { NextSeo } from "next-seo";

const AboutMe = () => {
  const pageHeaders = useGetHeaders();
  return (
    <>
      <NextSeo
        title="About Me"
        description="I'm a freelance User Interface designer and web developer who takes pride in putting the user first in every step of the design process. Let's work together and build your online presence today."
        openGraph={{
          url: "https://www.traekwells.com/about-me",
        }}
        canonical="https://www.traekwells.com/about-me"
      />
      <PageHeader eyebrow="About me" title="My story">
        <p className="lead">
          From goals of being a concept artist to a zoologist, life led me to my
          true passion of being a User Interface designer and developer.{" "}
        </p>
      </PageHeader>
      <main className="post">
        <Section>
          <Container narrow>
            <div className="content">
              <div className="content__text">
                <p>
                  I feel that I have the best job in the world. I get to combine
                  my love for technology with inner calling of being creative.
                  On top of all of that, I get to work with people and bring
                  their visions of a digital product to life.
                </p>

                <p>
                  Like most other designers, as a kid I was fairly artistic. I
                  wanted to be a concept artist for a major video game company
                  because I thought drawing was my passion. Fast forward until I
                  graduated college with a graphic design degree and started to
                  teach myself how to code, and my life would forever change for
                  the better.
                </p>

                <p>
                  Since then, I've dedicated myself to becoming the best
                  designer and front-end developer possible. I'm inspir ed by
                  great work and great people and I truly working with people to
                  transform ideas into real, interactive prodcuts that users
                  love.
                </p>

                <h2 id="professional-values">Professional Values</h2>
                <h3>Always put the user first</h3>
                <p>
                  The primary goal of a website is to solve a problem for a user
                  or offer a solution to a problem they have. That's why it's{" "}
                  <strong>critical</strong> to always have the user in mind when
                  going through the design and development phases of a project.
                </p>
                <h3>Trends come and go, but good design remains the same</h3>
                <p>
                  Everything moves at lightspeed in the design and development
                  world. There's always a new <em>something</em> to learn and
                  that will likely always be the case.
                </p>

                <p>
                  What remains consistent though is applying the core design
                  principles to your work. A good design is:
                </p>

                <ul>
                  <li> Understandable</li>
                  <li>Visually pleasing</li>
                  <li>Usable</li>
                  <li>
                    and most importantly, <strong>user-focused</strong>
                  </li>
                </ul>

                <h3>Celebrate small wins</h3>
                <p>
                  Serious stuff aside, I'm a regular person who doesn't take
                  life too seriously. We're only on this planet for a short
                  amount of time so I want to spend that time doing things that
                  make me and my loved ones happy.
                </p>
                <h2 id="random-stuff-about-me">Random stuff about me</h2>
                <ul>
                  <li>
                    I was born in Iowa but was raised in Minnesota where I
                    currently reside.
                  </li>
                  <li>
                    Besides a concept artist, I also used to want to be a
                    zoologist out of my love for wildlife.
                  </li>
                  <li>
                    Neptune is my favorite planet because I read somewhere that
                    if we could stand on it, it would be like standing on jello.
                    I thought that was pretty cool.
                  </li>
                </ul>
              </div>
              <div className="content__sidebar">
                <TableOfContents headers={pageHeaders} />
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default AboutMe;
