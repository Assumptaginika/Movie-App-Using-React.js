import Hero from "./Hero";

const About = () => {
  return (
    <>
      <Hero text="About the movies" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              quas saepe esse fugiat animi hic odio sit, nihil, vitae commodi
              molestias, distinctio ullam incidunt. Ipsa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
