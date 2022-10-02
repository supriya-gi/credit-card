import vng from "../assets/images/vng.png";
import card from "../assets/images/card-a.png";
import cardone from "../assets/images/cardone.png";
import "../script.js";
function Card() {
  return (
    <>
      <div className="card-wrap">
        <div className="container card-style desk-para">
          <div className="row">
            <div className="col-md-6 text-center match-per back-card">
              <img src={card} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 match-per">
              <img src={vng} alt="" />
              <h1>Select Your Style</h1>
              <p>
                Match your card to your personality. Whether you like a minimal
                look or something that catches everyone’s eyes, we’ve got a
                style for you. You can update your style every year, for a small
                fee
              </p>
            </div>
          </div>
        </div>
        <div className="container mobile-para">
          <div className="row">
            <div className="col-md-6">
              <img src={cardone} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 choose-reward">
              <p className="select-head">Select Your Style</p>
              <p className="select-info">
                Whether you like a minimal look or something that catches
                everyone’s eyes. We have a Card design for you
              </p>
              <a href="#" class="getting-str">
                Get Started
              </a>
              <span class="glyphicon glyphicon-chevron-right gily"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="card-head">
                Why the OneSync Card is the Best Choice for you?
              </p>
              <p className="card-information">
                You can create a Credit Card that fits all your needs on your
                own. Gone are the days when you had choose from premade credit
                cards with features that you did not need.
              </p>
              <p className="card-information">
                With the OneSync card you can save on all the things that you
                love to do with a unique personal touch
              </p>
              <a href="#" class="getting-str text-light">
                Get Started
              </a>
              <span class="glyphicon glyphicon-chevron-right gily text-light"></span>
            </div>
          </div>
        </div>
      </div>

      {/* slider */}

      {/* <div class="spacer_vertical"></div>
      <div class="spacer_vertical"></div>
      <div class="spacer_horizontal"></div>

      <div class="arrow" id="arrow_left">
        &#65513;
      </div>

      <div class="shower">
        <div class="holder" id="holder">
          <div class="slide" id="slide-0"></div>
          <div class="slide" id="slide-1"></div>
          <div class="slide" id="slide-2"></div>
        </div>
      </div>

      <div class="arrow" id="arrow_right">
        &#65515;
      </div>

      <div class="spacer_vertical"></div>
      <div class="spacer_horizontal"></div>

      <div class="shower demonstr">
        <div class="holder demonstr">
          <div class="slide" id="slide-0">
            <img
              src="https://images.unsplash.com/photo-1539840093138-9b3e230e5206?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765a2eb222b1851840a4a157780fb487&auto=format&fit=crop&w=1534&q=80"
              class="img-responsive center-block"
            />
          </div>
          <div class="slide" id="slide-1">
            <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-1520x800.png" />
          </div>
          <div class="slide" id="slide-2">
            <img src="https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png" />
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Card;
