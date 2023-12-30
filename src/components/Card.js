export class Card extends HTMLElement {
  // create a static method called define
  static {
    // define the web component
    customElements.define("mc-card", this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.classList.add("mc-card");
    this.setAttribute("role", "article");
    this.setAttribute(
      "aria-label",
      this.getAttribute("card-title")
    );
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          @import url('../style.css');
          display: block;
          border-radius: var(--border-radius);
          box-shadow: 0 0 4px rgba(0,0,0,0.2);
          overflow: hidden;
        }
        h2 {
          margin-top: 0;
          line-height: var(--mc-line-height-small);
          font-family: var(--mc-font-secondary);
        }
        .mc-card__content {
          padding: 1rem;
        }
        .mc-card__link a {
          display: inline-block;
          padding: var(--mc-spacing-small) var(--mc-spacing);
          background-color: var(--mc-color-primary);
          color: var(--mc-color-white);
          transition: var(--mc-transition-time);
        }
        .mc-card__link a:focus,
        .mc-card__link a:hover {
          outline: var(--mc-border);
          outline-offset: var(--mc-border-width);
          text-decoration: none;
          background-color: var(--mc-color-secondary);
        }
        .mc-card__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media screen and (min-width: 768px) {
          :host([image-position="left"]),
        :host([image-position="right"]) {
          display: grid;
        }
        :host([image-position="left"]) {
          grid-template-columns: 1fr 2fr;
        }
        :host([image-position="right"]) {
          grid-template-columns: 2fr 1fr;
        }
      }
      </style>

      ${this.getAttribute("image-position") === "top" ||
        this.getAttribute("image-position") === "left"
          ? `<div class="mc-card__image">
              <img src="${this.getAttribute("image-src")}" alt="${this.getAttribute("image-alt")}">
            </div>`
          : ""
      }

      <div class="mc-card__content">
        <h2>${this.getAttribute("card-title")}</h2>
        <slot name="mc-card-content"></slot>
        <div class="mc-card__link">
          <a href="${this.getAttribute("card-link")}">Read More</a>
        </div>
      </div>

      ${this.getAttribute("image-position") === "right"
        ? `<div class="mc-card__image">
            <img src="${this.getAttribute("image-src")}" alt="${this.getAttribute("image-alt")}">
          </div>`
        : ""
      }
    `;
  }
}
