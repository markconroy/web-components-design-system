import { Container } from "./Container.js";

export class Breadcrumbs extends HTMLElement {
  static {
    customElements.define("mc-breadcrumbs", this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/style.css">
      <style>
        :host {
          background-color: var(--mc-color-primary);
        }
        ::slotted(ul) {
          display: flex;
          flex-wrap: wrap;
          gap: var(--mc-spacing);
          list-style: none;
          margin: 0;
          padding: 0;
        }
      </style>
      <mc-container padding="inline">
        <nav class="mc-breadcrumbs__nav">
          <slot></slot>
        </nav>
      </mc-container>
    `;
  }
}
