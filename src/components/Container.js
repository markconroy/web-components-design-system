export class Container extends HTMLElement {
  static {
    customElements.define('mc-container', this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('../style.css');
        :host {
          display: block;
          max-width: var(--mc-width-content-area);
          margin-inline: auto;
        }
        :host([size="small"]) {
          width: var(--mc-width-small);
        }
        :host([size="medium"]) {
          width: var(--mc-width-medium);
        }
        :host([size="large"]) {
          width: var(--mc-width-large);
        }
        :host([size="xlarge"]) {
          width: var(--mc-width-xlarge);
        }
        :host([size="100"]) {
          width: var(--mc-width-100);
        }
        :host([alignment="start"]),
        :host([alignment="left"]) {
          margin-inline-start: 0;
        }
        :host([alignment="end"]),
        :host([alignment="right"]) {
          margin-inline-end: 0;
        }
        :host([padding="inline"]) {
          padding-inline: var(--mc-spacing);
        }
        :host([padding="block"]) {
          padding-block: var(--mc-spacing);
        }
        :host([padding="all"]) {
          padding: var(--mc-spacing);
        }
      </style>
      <slot></slot>
    `;
  }
}
