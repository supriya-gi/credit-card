import "../style.css";
import go from "../assets/images/go.png";
function Freedom() {
  return (
    <>
      <div class="freedom">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="free-heading">
                The Freedom to Create The Credit Card You Want
              </p>
            </div>
            <div class="col-md-6">
              <div class="free-info">
                <p>
                  That's why it comes with benefits & rewards chosen by you.
                  Available in multiple designs, your card comes in a style
                  selected by you. You can come back each year, to edit your
                  benefits or update your style.
                </p>
                <p>
                  Your OneSync Credit Card stays true to you, year after year.
                  It’s the only card you’ll ever need.
                </p>
              </div>
              <a href="#" class="free-start">
                Get Started
              </a>
              <span class="glyphicon glyphicon-chevron-right glyphi"></span>
              <div className="free-mobile">
                <p className="mobile-text">
                  Build your own Credit Card that fits in your day to day
                  lifestyle. First, choose your rewards and then select your
                  card design.
                </p>
                <p>Check if the card is available in your city</p>
                <div className="city">
                  <select class="form-control form-control-md select">
                    <option>Select City</option>
                    <option>Pune</option>
                    <option>Mumbai</option>
                    <option>Nagpur</option>
                    <option>Hydrabad</option>
                  </select>
                  <img src={go} alt="go-btn" className="img-fluid go" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Freedom;
