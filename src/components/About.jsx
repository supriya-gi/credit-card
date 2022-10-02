import "../style.css";
import about from "../assets/images/about.png";
function About() {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-md-6 abt">
            <h1 class="credit-card">
              Build a Credit Card <br /> That is Definitely Yours
            </h1>
            <p class="card-info">
              With the OneSync Credit Card you can customise your card the way
              you want
            </p>
            <button class="start-btn">Get Started</button>
          </div>
          <div class="col-md-6 p-5">
            <img src={about} alt="" class="img-fluid shape" />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
