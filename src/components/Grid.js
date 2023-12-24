export class Grid extends HTMLElement {
  static {
    customElements.define("mc-grid", this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('../style.css');
        :host {
          display: grid;
          gap: var(--mc-grid-gap);
          grid-template-columns: repeat(var(--mc-grid-columns), 1fr);
        }
        :host([gap="none"]) {
          gap: var(--mc-grid-gap-none);
        }
        :host([gap="small"]) {
          gap: var(--mc-grid-gap-small);
        }
        :host([gap="medium"]) {
          gap: var(--mc-grid-gap);
        }
        :host([gap="large"]) {
          gap: var(--mc-grid-gap-large);
        }
        :host([size]){
          --mc-grid-columns: 1;
        }
        @media screen and (min-width: 48em) {
          :host([size="halves"]),
          :host([size="thirds"]),
          :host([size="quarters"]) {
            --mc-grid-columns: 2;
          }
        }
        @media screen and (min-width: 60em) {
          :host([size="thirds"]) {
            --mc-grid-columns: 3;
          }
          :host([size="quarters"]) {
            --mc-grid-columns: 4;
          }
        }
      </style>
      <slot></slot>
    `;
  }
}

export class GridItem extends HTMLElement {
  static {
    customElements.define("mc-grid-item", this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host() {
          grid-column: span var(--mc-grid-columns);
        }
        :host([size="one-quarter"]),
        :host([size="one-third"]),
        :host([size="one-half"]),
        :host([size="two-thirds"]),
        :host([size="three-quarters"]) {
          grid-column: span var(--mc-grid-columns);
        }
        @media screen and (min-width: 48em) {
          :host([size="one-quarter"]),
          :host([size="one-third"]),
          :host([size="one-half"]),
          :host([size="two-thirds"]),
          :host([size="three-quarters"]) {
            grid-column: span calc(var(--mc-grid-columns) / 2);
          }
        }
        @media screen and (min-width: 60em) {
          :host([size="one-third"]) {
            grid-column: span calc(var(--mc-grid-columns) / 3);
          }
          :host([size="two-thirds"]) {
            grid-column: span calc(var(--mc-grid-columns) / 3 * 2);
          }
          :host([size="one-quarter"]) {
            grid-column: span calc(var(--mc-grid-columns) / 4);
          }
          :host([size="three-quarters"]) {
            grid-column: span calc(var(--mc-grid-columns) / 4 * 3);
          }
        }
      </style>
      <slot></slot>
    `;
  }
}
