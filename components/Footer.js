import { Logo } from './Logo.js';

export class Footer extends HTMLElement {
  static {
    customElements.define('mc-footer', this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('../style.css');
        .mc-footer {
          margin-block-start: var(--mc-spacing-largest);
          background: var(--mc-color-primary);
          padding-block: var(--mc-spacing-largest);
        }
        .mc-footer__nav {
          margin-block-start: var(--mc-spacing);
        }
        .mc-footer__menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
          font-family: var(--mc-font-secondary);
        }
        .mc-footer__menu li + li {
          margin-block-start: var(--mc-spacing);
        }
        .mc-footer__menu a {
          color: var(--mc-color-white);
          display: inline-block;
          text-decoration: none;
        }
        .mc-footer__menu a:hover {
          text-decoration: underline;
        }
        .mc-footer__legal {
          display: flex;
          justify-content: center;
          background: var(--mc-color-white);
          padding-inline: var(--mc-spacing);
          margin-block-start: var(--mc-spacing);
        }
        .mc-footer__legal a {
          color: var(--mc-color-primary);
          text-decoration: none;
        }
      </style>
      <footer class="mc-footer">
        <div class="mc-container mc-container--padding-inline">
          <div class="mc-footer__inner">
            <div class="mc-footer__logo">
              <mc-logo></mc-logo>
            </div>
            <nav class="mc-footer__nav">
              <div class="mc-grid mc-grid--quarters">
                <div class="mc-footer__menu">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Work</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
                <div class="mc-footer__menu">
                  <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Returns</a></li>
                  </ul>
                </div>
                <div class="mc-footer__menu">
                  <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Events</a></li>
                  </ul>
                </div>
                <div class="mc-footer__menu">
                  <ul>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">TikTok</a></li>
                    <li><a href="#">YouTube</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div class="mc-footer__legal">
              <p>Created by <a href="https://mark.ie">Mark Conroy</a> | Code available on <a href="https://github.com/markconroy/web-components-design-system">GitHub</a></p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
