import "../style.css";
import form from "../assets/images/form.png";
import animation from "../assets/images/animation.png";
function Form() {
  return (
    <>
      <div className="container-fluid">
        <div class="row">
          <div class="col-md-6 fileds">
            <div className="text-center">
              <form class="form">
                <input
                  type="text"
                  class="form-control mb-2 mr-sm-2"
                  id="phone"
                  placeholder="Enter your phone number"
                  name="phone"
                  required
                />
                <input
                  type="text"
                  class="form-control mb-2 mr-sm-2"
                  id="pan"
                  placeholder="Enter your PAN number"
                  name="pan"
                  required
                />
                <input
                  type="text"
                  class="form-control mb-2 mr-sm-2"
                  id="address"
                  placeholder="Enter your Address"
                  name="address"
                  required
                />
              </form>
            </div>
            <div className="mobile-form">
              <p className="form-head">
                Create your own credit card in three easy steps
              </p>
              <img
                src={animation}
                alt="annimation"
                className="img-fluid annimation"
              />
            </div>
          </div>
          <div class="col-md-6 fixes">
            <img src={form} alt="" class="img-fluid" />
            <h1 className="fill-form">Fill Eligibility Form</h1>
            <p className="your-self">
              Tell us about yourself, to find out if
              <br /> you’re eligible to apply.
            </p>
            <p className="your-info">
              Please fill an application form to make sure you’re eligible for
              the card. You can fill this later as well
            </p>
            <a href="#" className="getting-str">
              Get Started
            </a>
            <span class="glyphicon glyphicon-chevron-right gily"></span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Form;
