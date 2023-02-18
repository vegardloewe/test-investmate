import React, { useState } from 'react'

const ValueProposition = () => {
  const [tab, setTab] = useState('Automate')

  return (
    <section class="section fade-in wf-section">
      <div class="container">
        <div class="_12-columns">
          <div class="column desktop-8 tablet-12">
            <div class="heading-wrapper centered">
              <h2 class="heading xl">
                Manage your entire portfolio in one place
              </h2>
            </div>
          </div>
        </div>
        <div class="tabs w-tabs">
          <div class="tabs-menu w-tab-menu" role="tablist">
            <a
              class={`tab-link w-inline-block w-tab-link ${
                tab === 'Automate' && 'w--current'
              }`}
              onClick={() => setTab('Automate')}
            >
              <div>Automate</div>
            </a>
            <a
              class={`tab-link w-inline-block w-tab-link ${
                tab === 'Invest' && 'w--current'
              }`}
              onClick={() => setTab('Invest')}
            >
              <div>Invest</div>
            </a>
            <a
              class={`tab-link w-inline-block w-tab-link ${
                tab === 'Manage' && 'w--current'
              }`}
              onClick={() => setTab('Manage')}
            >
              <div>Manage</div>
            </a>
          </div>
          <div class="tabs-content w-tab-content">
            {tab === 'Automate' && (
              <div class="w-tab-pane w--tab-active">
                <div class="_12-columns">
                  <div class="column desktop-7 tablet-12">
                    <div class="image-ui-wrapper">
                      <img
                        loading="lazy"
                        src="/images/Portfolio.svg"
                        alt=""
                        class="ui-element automate-1"
                      />
                      <img
                        loading="lazy"
                        src="/images/Range-Slider.svg"
                        alt=""
                        class="ui-element automate-2"
                      />
                      <div class="image-wrapper wide">
                        <img
                          sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 54vw"
                          src="/images/Features-1.jpg"
                          loading="lazy"
                          alt="Young woman smiling in cafe"
                          class="image-fit"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="column desktop-1 tablet-12">
                    <div class="spacer _40"></div>
                  </div>
                  <div class="column desktop-4 tablet-12">
                    <div class="text-wrapper">
                      <div class="chip">
                        <img
                          loading="lazy"
                          src="/images/Automate.svg"
                          alt=""
                          class="chip-icon"
                        />
                        <div>Automate</div>
                      </div>
                      <div class="spacer _16"></div>
                      <h3 class="heading l">
                        Put your investments on autopilot
                      </h3>
                      <p class="paragraph">
                        Lorem ipsum dolor sit amet consectetur. Sollicitudin
                        eleifend vel egestas at. Eleifend faucibus sit
                        pellentesque enim elementum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tab === 'Invest' && (
              <div class="w-tab-pane w--tab-active">
                <div class="_12-columns">
                  <div class="column desktop-7 tablet-12">
                    <div class="image-ui-wrapper">
                      <img
                        loading="lazy"
                        src="/images/Crypto-Assets.svg"
                        alt=""
                        class="ui-element invest-1"
                      />
                      <img
                        loading="lazy"
                        src="/images/Bitcoin.svg"
                        alt=""
                        class="ui-element invest-2"
                      />
                      <div class="image-wrapper wide">
                        <img
                          sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 54vw"
                          src="/images/Features-2.jpg"
                          loading="lazy"
                          alt="Two friends laughing together"
                          class="image-fit"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="column desktop-1 tablet-12">
                    <div class="spacer _40"></div>
                  </div>
                  <div class="column desktop-4 tablet-12">
                    <div class="text-wrapper">
                      <div class="chip">
                        <img
                          loading="lazy"
                          src="/images/Invest.svg"
                          alt=""
                          class="chip-icon"
                        />
                        <div>Invest</div>
                      </div>
                      <div class="spacer _16"></div>
                      <h3 class="heading l">Buy and trade 300+ stocks</h3>
                      <p class="paragraph">
                        Lorem ipsum dolor sit amet consectetur. Sollicitudin
                        eleifend vel egestas at. Eleifend faucibus sit
                        pellentesque enim elementum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tab === 'Manage' && (
              <div class="w-tab-pane w--tab-active">
                <div class="_12-columns">
                  <div class="column desktop-7 tablet-12">
                    <div class="image-ui-wrapper">
                      <img
                        loading="lazy"
                        src="/images/Portfolio.svg"
                        alt=""
                        class="ui-element manage-1"
                      />
                      <img
                        loading="lazy"
                        src="/images/Buy-Button.svg"
                        alt=""
                        class="ui-element manage-2"
                      />
                      <img
                        loading="lazy"
                        src="/images/Rebalance-Button.svg"
                        alt=""
                        class="ui-element manage-3"
                      />
                      <div class="image-wrapper wide">
                        <img
                          sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 54vw"
                          src="/images/Features-3.jpg"
                          loading="lazy"
                          alt="Woman smiling while using tablet"
                          class="image-fit"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="column desktop-1 tablet-12">
                    <div class="spacer _40"></div>
                  </div>
                  <div class="column desktop-4 tablet-12">
                    <div class="text-wrapper">
                      <div class="chip">
                        <img
                          loading="lazy"
                          src="/images/Manage.svg"
                          alt=""
                          class="chip-icon"
                        />
                        <div>Manage</div>
                      </div>
                      <div class="spacer _16"></div>
                      <h3 class="heading l">
                        Manage your investments with real-time data
                      </h3>
                      <p class="paragraph">
                        Lorem ipsum dolor sit amet consectetur. Sollicitudin
                        eleifend vel egestas at. Eleifend faucibus sit
                        pellentesque enim elementum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
