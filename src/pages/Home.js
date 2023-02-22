import React from 'react';
import

const Home = () => {
  return (
    <>
      <div class="cotainer">
        <div class="topbar">
          <div class="menu__container">
            <img src="/static/icons/ic_menu.svg" alt="" class="menu" />
          </div>
          <div class="topbar__left">
            <h1 class="topbar__logo">
              <span class="highlight1">Port</span>
              <span class="highlight2">folio</span>
            </h1>

            <div class="topbar__menu">
              <div class="menu__item">
                <a href="#hero">
                  <h4 class="menu__txt">Home</h4>
                </a>
                <div class="line line--active"></div>
              </div>
              <div class="menu__item">
                <a href="#section__two">
                  <h4 class="menu__txt">Skills</h4>
                </a>
                <div class="line"></div>
              </div>
              <div class="menu__item">
                <a href="#section__three">
                  <h4 class="menu__txt">Projects</h4>
                </a>
                <div class="line"></div>
              </div>
              <div class="menu__item">
                <a href="#section__four">
                  <h4 class="menu__txt">Contact</h4>
                </a>
                <div class="line"></div>
              </div>
            </div>
          </div>

          <button class="topbar__button">Resume</button>
        </div>

        <section class="section section__one">
          <div class="hero" id="hero">
            <div class="hero__left">
              <div class="hero__obj-blur"></div>
              <div class="hero__txt-container">
                <img
                  src="/static/images/line1.svg"
                  alt=""
                  class="hero__line object"
                  data-value="-1"
                />
                <h5 class="hero__hello-txt">Hello!</h5>
                <div class="hero__about">
                  <h1 class="hero__about-txt hero_reveal1">I'm</h1>
                  <h1 class="hero__about-txt hero_reveal2">
                    <span class="highlight1">Cyphar</span>
                    <span class="highlight2">Link</span>
                  </h1>
                </div>
                <h4 class="hero__description-txt hero_reveal3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing Modi
                  aliquid fuga, ea impedit, repellendus eveniet maxime aperiam
                  hic
                </h4>
              </div>

              <div class="button__container hero_reveal3">
                <button class="hero__button">
                  <p>Hire me</p>
                  <img
                    src="/static/icons/ic_arrow.svg"
                    alt=""
                    class="hero__button-img"
                  />
                </button>
              </div>
            </div>
            <div class="hero__right">
              {/* <!-- <div class="hero__round object hidden4"  data-value="-1"></div> --> */}
              <img
                class="hero__eclipse object"
                src="/static/images/eclipse.svg"
                data-value="4"
                alt=""
              />
              <img
                class="hero__person object2"
                src="/static/images/person.svg"
                data-value="-3"
                alt=""
              />
            </div>
          </div>
        </section>

        <section class="section section__two" id="section__two">
          {/* <!-- <div class="empty1 object" data-value="-5"></div>
            <div class="empty2 object" data-value="-5"></div> -->
            <!-- <img src="/static/images/line2.svg" alt="" class="hero__line2 object"  data-value="-5">
            <img src="/static/images/line3.svg" alt="" class="hero__line3 object"  data-value="-4">
            <img src="/static/images/line4.svg" alt="" class="hero__line4 object"  data-value="3"> --> */}
          <div class="skill reveal reveal1">
            <h2 class="skill__title">Android</h2>
            <div class="skill__card-container">
              <div class="skill__Card">
                <img
                  src="/static/icons/kotlin-1.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">Kotlin</h5>
              </div>
              <div class="skill__Card">
                <img src="/static/icons/java.svg" alt="" class="skill__img" />
                <h5 class="skill__name">Java</h5>
              </div>
              <div class="skill__Card">
                <img
                  src="/static/icons/gradle-1.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">Gradle</h5>
              </div>
              <div class="skill__Card">
                <img
                  src="/static/icons/firebase-1.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">Firebase</h5>
              </div>
            </div>
          </div>

          <div class="skill reveal reveal2">
            <h2 class="skill__title">UI/UX</h2>
            <div class="skill__card-container2">
              <div class="skill__Card">
                <img
                  src="/static/icons/figma-1.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">Figma</h5>
              </div>
              <div class="skill__Card">
                <img
                  src="/static/icons/adobe-xd-1.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">XD</h5>
              </div>
              <div class="skill__Card">
                <img
                  src="/static/icons/blender-2.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">Blender</h5>
              </div>
            </div>
          </div>

          <div class="skill reveal reveal1">
            <h2 class="skill__title">Web</h2>
            <div class="skill__card-container">
              <div class="skill__Card">
                <img src="/static/icons/html-1.svg" alt="" class="skill__img" />
                <h5 class="skill__name">HTML</h5>
              </div>
              <div class="skill__Card">
                <img src="/static/icons/css-3.svg" alt="" class="skill__img" />
                <h5 class="skill__name">CSS</h5>
              </div>
              <div class="skill__Card">
                <img
                  src="/static/icons/logo-javascript.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">Javascript</h5>
              </div>
              <div class="skill__Card">
                <img
                  src="/static/icons/react-2.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">React</h5>
              </div>
              <div class="skill__Card">
                <img
                  src="/static/icons/python-5.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">Python</h5>
              </div>
              <div class="skill__Card">
                <img src="/static/icons/django.svg" alt="" class="skill__img" />
                <h5 class="skill__name">Django</h5>
              </div>
              <div class="skill__Card">
                <img
                  src="/static/icons/postgresql.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">PostgreSQL</h5>
              </div>
              <div class="skill__Card">
                <img
                  src="/static/icons/amazon-web-services-2.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">AWS</h5>
              </div>
            </div>
          </div>

          <div class="skill reveal reveal2">
            <h2 class="skill__title">Version Control</h2>
            <div class="skill__card-container2">
              <div class="skill__Card">
                <img src="/static/icons/git.svg" alt="" class="skill__img" />
                <h5 class="skill__name">Git</h5>
              </div>
              <div class="skill__Card">
                <img
                  src="/static/icons/github-icon.svg"
                  alt=""
                  class="skill__img"
                />
                <h5 class="skill__name">Github</h5>
              </div>
              <div class="skill__Card">
                <img src="/static/icons/docker.svg" alt="" class="skill__img" />
                <h5 class="skill__name">Docker</h5>
              </div>
            </div>
          </div>
        </section>

        <section class="section section__three" id="section__three">
          <div class="projects__container">
            <div class="project__card reveal1">
              <div class="project__img-container">
                <img
                  src="/static/images/Robox.png"
                  alt=""
                  class="project__img"
                />
                <div class="project__hover-bg">
                  <img
                    src="/static/icons/arrow-right.svg"
                    alt=""
                    class="project__hover-img"
                  />
                </div>
              </div>
              <div class="project__txt-container">
                <h5 class="project__name">Robox website</h5>
                <h5 class="project__desc">robotics company website</h5>
              </div>
              <div class="project__tag">
                <div class="project__tag-container">
                  <h5 class="project__tag"></h5>
                </div>
              </div>
            </div>

            <div class="project__card  reveal1">
              <div class="project__img-container">
                <img src="/static/images/P5.webp" alt="" class="project__img" />
                <div class="project__hover-bg">
                  <img
                    src="/static/icons/arrow-right.svg"
                    alt=""
                    class="project__hover-img"
                  />
                </div>
              </div>
              <div class="project__txt-container">
                <h5 class="project__name">Robox website</h5>
                <h5 class="project__desc">robotics company website</h5>
              </div>
              <div class="project__tag">
                <div class="project__tag-container">
                  <h5 class="project__tag"></h5>
                </div>
              </div>
            </div>

            <div class="project__card reveal2">
              <div class="project__img-container">
                <img
                  src="/static/images/DribbleShowCase.png"
                  alt=""
                  class="project__img"
                />
                <div class="project__hover-bg">
                  <img
                    src="/static/icons/arrow-right.svg"
                    alt=""
                    class="project__hover-img"
                  />
                </div>
              </div>
              <div class="project__txt-container">
                <h5 class="project__name">Robox website</h5>
                <h5 class="project__desc">robotics company website</h5>
              </div>
              <div class="project__tag">
                <div class="project__tag-container">
                  <h5 class="project__tag"></h5>
                </div>
              </div>
            </div>

            <div class="project__card reveal2">
              <div class="project__img-container">
                <img
                  src="/static/images/Dribble.png"
                  alt=""
                  class="project__img"
                />
                <div class="project__hover-bg">
                  <img
                    src="/static/icons/arrow-right.svg"
                    alt=""
                    class="project__hover-img"
                  />
                </div>
              </div>
              <div class="project__txt-container">
                <h5 class="project__name">Robox website</h5>
                <h5 class="project__desc">robotics company website</h5>
              </div>
              <div class="project__tag">
                <div class="project__tag-container">
                  <h5 class="project__tag"></h5>
                </div>
              </div>
            </div>

            <div class="project__card reveal1">
              <div class="project__img-container">
                <img src="/static/images/p2.webp" alt="" class="project__img" />
                <div class="project__hover-bg">
                  <img
                    src="/static/icons/arrow-right.svg"
                    alt=""
                    class="project__hover-img"
                  />
                </div>
              </div>
              <div class="project__txt-container">
                <h5 class="project__name">Robox website</h5>
                <h5 class="project__desc">robotics company website</h5>
              </div>
              <div class="project__tag">
                <div class="project__tag-container">
                  <h5 class="project__tag"></h5>
                </div>
              </div>
            </div>

            <div class="project__card reveal1">
              <div class="project__img-container">
                <img src="/static/images/p3.webp" alt="" class="project__img" />
                <div class="project__hover-bg">
                  <img
                    src="/static/icons/arrow-right.svg"
                    alt=""
                    class="project__hover-img"
                  />
                </div>
              </div>
              <div class="project__txt-container">
                <h5 class="project__name">Robox website</h5>
                <h5 class="project__desc">robotics company website</h5>
              </div>
              <div class="project__tag">
                <div class="project__tag-container">
                  <h5 class="project__tag"></h5>
                </div>
              </div>
            </div>

            <div class="project__card reveal2">
              <div class="project__img-container">
                <img src="/static/images/p4.webp" alt="" class="project__img" />
                <div class="project__hover-bg">
                  <img
                    src="/static/icons/arrow-right.svg"
                    alt=""
                    class="project__hover-img"
                  />
                </div>
              </div>
              <div class="project__txt-container">
                <h5 class="project__name">Robox website</h5>
                <h5 class="project__desc">robotics company website</h5>
              </div>
              <div class="project__tag">
                <div class="project__tag-container">
                  <h5 class="project__tag"></h5>
                </div>
              </div>
            </div>

            <div class="project__card reveal2">
              <div class="project__img-container">
                <img src="/static/images/p1.webp" alt="" class="project__img" />
                <div class="project__hover-bg">
                  <img
                    src="/static/icons/arrow-right.svg"
                    alt=""
                    class="project__hover-img"
                  />
                </div>
              </div>
              <div class="project__txt-container">
                <h5 class="project__name">Robox website</h5>
                <h5 class="project__desc">robotics company website</h5>
              </div>
              <div class="project__tag">
                <div class="project__tag-container">
                  <h5 class="project__tag"></h5>
                </div>
              </div>
            </div>
          </div>

          <h5 class="view reveal3">View more ..</h5>
        </section>

        <section class="section section__four" id="section__four">
          <div class="body">
            <h2 class="contact__title">Contact me</h2>
            <div class="body__top">
              <input
                type="text"
                placeholder="name"
                class="inp__name body__inp"
              />
              <input
                type="text"
                placeholder="email"
                class="inp__email body__inp"
              />
            </div>
            <div class="body__message">
              <textarea
                placeholder="message"
                name="input__message body__inp"
                cols="50"
                rows="10"
              ></textarea>
            </div>
            <button class="body__button">Send</button>
          </div>
          <div class="footer">
            <h1 class="footer__title">Portfolio</h1>

            <div class="social__links">
              <h4 class="social__title">Stay Tuned</h4>
              <div class="social__menu">
                <img
                  src="/static/icons/github.svg"
                  alt=""
                  class="social__img"
                />
                <img
                  src="/static/icons/linkdin.svg"
                  alt=""
                  class="social__img"
                />
                <img
                  src="/static/icons/twitter.svg"
                  alt=""
                  class="social__img"
                />
                <img
                  src="/static/icons/instagram.svg"
                  alt=""
                  class="social__img"
                />
              </div>
              <h6 class="copyright__title">
                copyright 2022 all right reserved
              </h6>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
