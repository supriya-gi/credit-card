import "../style.css";
import rewards from "../assets/images/rewards.png";
import camp from "../assets/images/camp.png";
import frame from "../assets/images/frame.png";
function Reward() {
  return (
    <>
      <div class="revards">
        <div className="container reward-cont">
          <div class="row">
            <div class="col-md-6 reward-cont">
              <img src={rewards} alt="" />
              <h1>Choose Your Rewards</h1>
              <p>
                Match your card to your lifestyle. We’ve got benefits from
                across brands & categories for you to choose from. Each benefit
                has an attached fee. Just add the ones you like to your card.
              </p>
            </div>
            <div class="col-md-6 buy-card">
              <img src={camp} alt="" class="img-fluid" />
            </div>
          </div>
        </div>
        <div className="container reward-mess">
          <div className="row">
            <div className="col-md-6">
              <img src={frame} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 choose-reward">
              <p className="rew-head">Choose Your Rewards</p>
              <p className="rew-info">
                Choose rewards from brands and categories that fit in with your
                personality. Your card’s annual fee will based on the rewards
                you select.
              </p>
              <a href="#" class="getting-str">
                Get Started
              </a>
              <span class="glyphicon glyphicon-chevron-right gily"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reward;
