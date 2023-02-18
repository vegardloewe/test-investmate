import React from 'react'

const Testimonials = () => {
  return (
    <section class="section fade-in wf-section">
      <div class="container">
        <div class="heading-wrapper centered">
          <h2 class="heading xl">Hear it from our customers</h2>
        </div>
        <div class="_12-columns justify-left">
          <div class="column desktop-10 tablet-12">
            <div class="testimonial-wrapper">
              <div class="testimonial-photo">
                <img
                  src="/images/Testimonial-1.jpg"
                  loading="lazy"
                  alt="Testimonial"
                  class="image-fit"
                />
              </div>
              <div class="testimonial-quote-block">
                <div class="testimonial-author">
                  Nick, InvestMate user for 13 months
                </div>
                <div class="testimonial-quote">
                  Lorem ipsum dolor sit amet consectetur. Integer quis leo
                  maecenas eu amet. At eu vitae sapien interdum sed et ac.
                  Interdum non enim sed blandit vel nisl.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="_12-columns justify-right">
          <div class="column desktop-10 tablet-12">
            <div class="testimonial-wrapper flipped">
              <div class="testimonial-quote-block flipped">
                <div class="testimonial-author">
                  Jasmine, InvestMate user for 6 months
                </div>
                <div class="testimonial-quote">
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper tincidunt
                  sed ornare nec blandit elit enim ullamcorper est. Pellentesque
                  ac cras duis non morbi. Dis integer vitae proin lacus. Netus
                  at dignissim ipsum pellentesque proin convallis.
                </div>
              </div>
              <div class="testimonial-photo">
                <img
                  src="/images/Testimonial-2.jpg"
                  loading="lazy"
                  alt="Jasmine"
                  class="image-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
