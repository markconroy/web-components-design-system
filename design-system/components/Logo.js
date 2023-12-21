export class Logo extends HTMLElement {
  static {
    customElements.define('mc-logo', this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('../style.css');
        .mc-logo a {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--mc-spacing);
          background-color: var(--mc-color-secondary);
          color: var(--mc-color-white);
          font-family: var(--mc-font-secondary);
          text-decoration: none;
        }
        hr {
          border: none;
          width: 100%;
          border-bottom: var(--mc-border);
          border-color: var(--mc-color-white);
        }
      </style>
      <div class="mc-logo">
        <a href="/">
          Web Components
          <hr>
          Design System
        </a>
      </div>
    `;
  }
}
