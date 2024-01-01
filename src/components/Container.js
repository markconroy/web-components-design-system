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
          width: 100%;
          max-width: var(--mc-width-content-area);
          margin-inline: auto;
        }
        :host([size="small"]) {
          max-width: var(--mc-width-small);
        }
        :host([size="medium"]) {
          max-width: var(--mc-width-medium);
        }
        :host([size="large"]) {
          max-width: var(--mc-width-large);
        }
        :host([size="xlarge"]) {
          max-width: var(--mc-width-xl);
        }
        :host([size="100"]) {
          max-width: none;
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
        :host([gap]) {
          display: grid;
          grid-template-columns: 1;
        }
        :host([gap="small"]) {
          gap: var(--mc-spacing-small);
        }
        :host([gap="medium"]) {
          gap: var(--mc-spacing);
        }
        :host([gap="large"]) {
          gap: var(--mc-spacing-large);
        }
        :host([gap="larger"]) {
          gap: var(--mc-spacing-larger);
        }
        :host([gap="largest"]) {
          gap: var(--mc-spacing-largest);
        }
      </style>
      <slot></slot>
    `;
  }
}
