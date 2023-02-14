import "./Mvp.css";

export const Mvp = () => {
  return (
    <section id="mvp">
      <h5 className="text-center">MVP IN A MONTH</h5>
      <article className="mvp-content">
        <div>
          <div className="mvp-content-head">
            <img src="" alt="square" />
            <h1 className="mvp-content-heading">
              From idea to prototype in 30 days.
            </h1>
            <button className="mvp-content-head-btn">
              Let's work together
            </button>
          </div>
          <p className="mvp-content-para">
            Instead of jumping into long and expensive development processes, we
            build out the initial prototype in a way that allows to either
            change it quickly, or scale it with additional technologies when
            necessary.
          </p>
          <div className="mvp-content-bubbles">
            {[
              { icon: "", text: "We can start within 3 days" },
              { icon: "", text: "First deliverables after 2 weeks" },
              { icon: "", text: "Prototype ready in 30 days" },
            ].map((item, index) => (
              <figure key={index} className="mvp-content-bubble">
                <img src={item.icon} alt="bubble_icon" />
                <figcaption className="mvp-content-bubble-text">
                  {item.text}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="timeline">
            <ul>
              {[
                {
                  timeRange: "DAY 1-2",
                  task: "You share your idea, your goals and needs. We analyse it.",
                },
                {
                  timeRange: "DAY 3-30",
                  task: "We use the most suitable design and code solution and build the prototype.",
                },
                {
                  timeRange: "DAY 30-45",
                  task: "Prototype is tested on real users, figuring out what to improve.",
                },
                {
                  timeRange: "NEXT ITERATION",
                  task: "Refinements and tweaks to make it better or to scale it for millions of users.",
                },
              ].map((item, index) => (
                <li key={index} className="">
                  <span>{item.timeRange}</span>
                  <a>{item.task}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};
