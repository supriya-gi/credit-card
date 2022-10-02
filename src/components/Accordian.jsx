function Accordian() {
  return (
    <>
      <div className="wrapper">
        <div className="container mx-auto">
          <h1 className="faq"> FAQs</h1>
          <div className="row ">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div
                class="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div class="panel ">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                      <a
                        class="accordion-toggle in"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Who’s eligible for the Card?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div class="panel-body">
                      If you’re between 23-60 years of age, have a monthly
                      income of ₹25,000 or more, and have never defaulted on a
                      credit card or loan payment, we’d encourage you to apply.
                      However, your application will be declined if your
                      location isn’t serviceable or if your credit score is low.
                    </div>
                  </div>
                </div>
                <div className="desk-accordin">
                  <div class="panel ">
                    <div class="panel-heading" role="tab" id="headingTwo">
                      <h4 class="panel-title">
                        <a
                          class="accordion-toggle collapsed "
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Is my location serviceable?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div class="panel-body">Content 2.</div>
                    </div>
                  </div>
                  <div class="panel ">
                    <div class="panel-heading" role="tab" id="headingThree">
                      <h4 class="panel-title">
                        <a
                          class="accordion-toggle collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What if I don’t want to pay at all?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div class="panel-body">Content 3.</div>
                    </div>
                  </div>
                  <div class="panel ">
                    <div class="panel-heading" role="tab" id="headingFour">
                      <h4 class="panel-title">
                        <a
                          class="accordion-toggle collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What happens after I’ve build my card?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFour"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour"
                    >
                      <div class="panel-body">Content 4.</div>
                    </div>
                  </div>
                </div>
                <div className="mobile-accordin">
                  <div class="panel ">
                    <div class="panel-heading" role="tab" id="headingTwo">
                      <h4 class="panel-title">
                        <a
                          class="accordion-toggle collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How is my credit score checked? Do I have to fill any
                          form?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div class="panel-body">Content 2.</div>
                    </div>
                  </div>
                  <div class="panel ">
                    <div class="panel-heading" role="tab" id="headingThree">
                      <h4 class="panel-title">
                        <a
                          class="accordion-toggle collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Are there any free rewards included in the card?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div class="panel-body">Content 3.</div>
                    </div>
                  </div>
                  <div class="panel ">
                    <div class="panel-heading" role="tab" id="headingFour">
                      <h4 class="panel-title">
                        <a
                          class="accordion-toggle collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What happens after I’ve build my card?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFour"
                      class="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour"
                    >
                      <div class="panel-body">Content 4.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Accordian;
