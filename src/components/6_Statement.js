import React from 'react'

const Statement = () => {
  return (
    <section class="section double-top fade-in wf-section">
      <div class="container">
        <div class="_12-columns">
          <div class="column desktop-6 tablet-12">
            <div class="image-wrapper">
              <img
                src="/images/Features-Image.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 46vw"
                alt="Young woman at table on phone"
                class="image-fit"
              />
            </div>
          </div>
          <div class="column desktop-1 tablet-12">
            <div class="spacer _32"></div>
          </div>
          <div class="column desktop-4 tablet-12">
            <h2 class="heading l">The best tool out there for investments</h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin eleifend vel
              egestas at. Eleifend faucibus sit pellentesque enim elementum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statement
