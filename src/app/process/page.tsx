import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "This lays out the step by step process from starting with an email to me, all the way to launching the finished project and celebrating. The goal of this page is to clear up any confusion on what to expect during the process.",
};

const Process = () => {
  return (
    <>
      <PageHeader title="How does the process work?" />
      <main id="main">
        <section className="section pb-7">
          <div className="wave-white"></div>
          <div className="container container--narrow">
            <div className="process-block">
              <div className="process-number">1</div>
              <div className="process-description">
                <h3>Book a short discovery call</h3>
                <p>
                  After sending me an email inquiry, I'll respond with a thank
                  you and a questionaire for you to complete that allow me me
                  learn more about your project, budget, timeline, audience,
                  etc.
                </p>
                <p>
                  Once I get that back, I'll schedule a short meeting to talk
                  about the questionaire to hash out any details. Typically this
                  is done over Zoom but I'd love to meet in person if that's
                  possible as well.
                </p>
              </div>
            </div>
            <div className="process-block">
              <div className="process-number">2</div>
              <div className="process-description">
                <h3>Start the design process</h3>
                <p>
                  This is where I start to wireframe and sketch out ideas that
                  begin to establish the vision for your project. Shortly after
                  the rough draft phase, I'll start to design these in
                  <strong>much</strong> greater detail in
                  <a href="https://www.sketch.com/" target="_blank">
                    Sketch
                  </a>{" "}
                  and really polish up the mockups. I'll collect any brand
                  assets that you might have to make sure they're included in
                  the final result.
                </p>
                <p>
                  These mockups will be a static, highly-detailed, replica of
                  what the final product will look like. This will allow you to
                  see all elements assembled in a cohesive manner.
                </p>
                <p>
                  At this stage, I'll send over a link that will allow you
                  preview the design as I make updates to it.
                </p>
                <p>I love this part.</p>
              </div>
            </div>
            <div className="process-block">
              <div className="process-number">3</div>
              <div className="process-description">
                <h3>Start the development process</h3>
                <p>
                  <strong>After</strong> I get the green light to proceed with
                  the mockups from the previous step, I will begin to setup my
                  workspace to begin transforming the design into an interative
                  website.
                </p>
                <p>
                  I always pay special attention to mobile responsiveness and
                  accessibility when I'm coding the project.
                </p>
                <p>
                  Similar to the previous step, I'll provide a URL where you'll
                  be able to follow my progress.
                </p>
              </div>
            </div>
            <div className="process-block">
              <div className="process-number">4</div>
              <div className="process-description">
                <h3>Test, test, test</h3>
                <p>
                  As a web developer, I'm kind of naturally testing things as I
                  go. It's important though that after the development step is
                  finished, you take time to thoroughly test everything and make
                  sure it meets your needs.
                </p>
                <p>
                  This is one of the reason I like to give myself eight full
                  weeks. In the event that something isn't quite working as
                  expected, there's still time to fix without drastically
                  changing the launch date.
                </p>
              </div>
            </div>
            <div className="process-block">
              <div className="process-number">5</div>
              <div className="process-description">
                <h3>Launch and celebrate</h3>
                <p>
                  After the testing is complete and everyone is happy with the
                  final product, I can assist you in getting the website onto a
                  new or existing webhost with a real domain so that other
                  people can visit and start to interact with it.
                </p>
                <p>
                  This part of the process should be all smiles. I'm always open
                  for a celebratory coffee or tea with the people I work with.
                </p>
              </div>
            </div>
            <div className="process-block">
              <div className="process-number">6</div>
              <div className="process-description">
                <h3>Maintenance</h3>
                <p>
                  As part of working with me, I'll make sure I'm available for a
                  full
                  <strong>30 days</strong> after the launch of the website to
                  ensure things are running smoothly and all of your questions
                  are answered.
                </p>
                <p>After that 30 day period, there are two options:</p>
                <ul>
                  <li>
                    We can say our goodbyes, both go our own ways and hopefully
                    work together again the future
                  </li>
                  <li>
                    Or I'm available as a monthly retainer to be available for
                    general updates and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Process;
