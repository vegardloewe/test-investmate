import React from 'react'

const Join = () => {
  return (
    <section class="section fade-in wf-section">
      <div class="container">
        <div class="_12-columns mobile-reverse">
          <div class="column desktop-4 tablet-12">
            <h2 class="heading l">Join the millions of satisfied users</h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin eleifend vel
              egestas at. Eleifend faucibus sit pellentesque enim elementum.
            </p>
          </div>
          <div class="column desktop-1 tablet-12">
            <div class="spacer _32"></div>
          </div>
          <div class="column desktop-6 tablet-12">
            <div class="image-wrapper">
              <img
                src="/images/Users-Image.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 46vw"
                alt="Two friends smiling while looking at a phone"
                class="image-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join
