import { Logo } from './Logo.js';
import { MainNav } from './MainNav.js';

export class Header extends HTMLElement {
  static {
    customElements.define('mc-header', this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
      @import url('../style.css');
      .mc-header {
        padding-block: var(--mc-spacing-largest);
      }
      .mc-header__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .mc-header__menu ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .mc-header__menu a {
        display: inline-block;
        text-decoration: none;
      }
      </style>
      <header class="mc-header">
        <div class="mc-container mc-container--padding-inline">
          <div class="mc-header__inner">
            <div class="mc-header__logo">
              <mc-logo></mc-logo>
            </div>
            <nav class="mc-header__menu">
              <mc-main-nav></mc-main-nav>
            </nav>
          </div>
        </div>
      </header>
    `;
  }
}
