import React, { useEffect, useState } from 'react'

const Footer = () => {
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
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="_12-columns align-top">
            <div class="column desktop-2 tablet-12">
              <a
                href="https://automator-template.webflow.io/"
                aria-current="page"
                class="brand w-nav-brand w--current"
              >
                <img
                  src="/images/Logo-light.svg"
                  loading="lazy"
                  alt="InvestMate logo"
                  class="logo large"
                />
              </a>
            </div>
            <div class="column desktop-1 tablet-0"></div>
            <div class="column desktop-4 tablet-12"></div>
            <div class="column desktop-1 tablet-0"></div>
            <div class="column desktop-4 tablet-12">
              <div class="footer-link-column">
                <div class="footer-link-subhead">Subscribe</div>
                <p class="paragraph s">
                  Stay up to date with the latest finance news.
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
                        class="form-input dark w-input"
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
                        value="Subscribe"
                        data-wait="Please wait..."
                        class="button w-button"
                      />
                    </form>
                  ) : (
                    <p style={{ textAlign: 'center', color: '#255cff' }}>
                      Thank you for your interest! The submission is received.
                    </p>
                  )}
                  <p class="field-hint-text dark">
                    By subscribing, you agree to our privacy policy and consent
                    to receive marketing email from InvestMate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="_12-columns">
            <div class="column desktop-8 tablet-12">
              <div class="footer-text">
                © InvestMate 2023. All Rights Reserved.
              </div>
            </div>
            <div class="column desktop-2 tablet-6 mobile-12"></div>
            <div class="column desktop-2 tablet-6 mobile-12"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
