import React, { useEffect, useState } from 'react'

const Header = () => {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => setSuccess(true))
      .catch((error) => alert(error))
  }

  useEffect(() => {
    if (typeof document !== `undefined`) {
      document.querySelector('form')?.addEventListener('submit', handleSubmit)
    }
  }, [])

  return (
    <section class="section hero no-top-padding wf-section">
      <div class="container">
        <div class="spacer _40 tablet-32"></div>
        <div class="_12-columns justify-left mobile-reverse">
          <div class="column desktop-6 tablet-12">
            <img
              src="/images/Symbol.svg"
              loading="lazy"
              alt=""
              class="automator-icon"
            />
            <h1 class="heading xxl">Automate your investments</h1>
            <p class="paragraph l">
              Lorem ipsum dolor sit amet consectetur. Ut lectus a diam feugiat
              viverra nunc aliquam.
            </p>
            <div class="form-block w-form">
              {!success ? (
                <form
                  id="Join-List-Form"
                  name="Join-List-Form"
                  data-name="Join-List-Form"
                  method="get"
                  class="form horizontal"
                  aria-label="Newsletter Form"
                  data-netlify="true"
                >
                  <input
                    type="email"
                    class="form-input w-input"
                    maxlength="256"
                    name="Email"
                    data-name="Email"
                    placeholder="Email address"
                    id="Email-2"
                    required=""
                  />
                  <input
                    type="hidden"
                    name="form-name"
                    value="Join-List-Form"
                  />
                  <input
                    type="submit"
                    value="Join the Waitlist"
                    data-wait="Please wait..."
                    class="button w-button"
                    style={{ marginLeft: '1rem' }}
                  />
                </form>
              ) : (
                <p style={{ textAlign: 'center', color: '#255cff' }}>
                  Thank you for your interest! The submission is received.
                </p>
              )}
            </div>
          </div>
          <div class="column desktop-1 tablet-12">
            <div class="spacer _40 tablet-32"></div>
          </div>
          <div class="column desktop-5 tablet-12">
            <div class="image-ui-wrapper">
              <img
                src="/images/Portfolio.svg"
                loading="lazy"
                alt=""
                class="ui-element portfolio"
              />
              <img
                src="/images/Range-Slider.svg"
                loading="lazy"
                alt=""
                class="ui-element range-slider"
              />
              <div class="image-wrapper">
                <img
                  src="/images/Header.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 38vw"
                  alt="Young man on subway looking at phone"
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

export default Header
