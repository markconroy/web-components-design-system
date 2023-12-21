import { Button } from './Button.js';
import { Heading } from './Heading.js';

export class Card extends HTMLElement {
  // create a static method called define
  static {
    // define the web component
    customElements.define('component-card', this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.classList.add('component-card');
    this.setAttribute('role', 'article');
    this.setAttribute('aria-label', this.querySelector('[slot="title"]').textContent);
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: var(--color-background);
          border-radius: 4px;
          box-shadow: 0 0 4px rgba(0,0,0,0.2);
          overflow: hidden;
        }
        :host([data-scheme="image-left"]) {
          background: var(--color-background-dark);
        }
        :host(:not([data-image-position="top"])) > article {
          display: flex;
        }
        .component-card__content {
          padding: 1rem;
        }
      </style>

      ${this.getAttribute('data-image-position') !== 'right' ?
        `<div class="component-card__image">
          <slot name="image"></slot>
        </div>`
      : ''}

      <div class="component-card__content">
        <component-heading data-type="type-2" data-heading-level="2">
          <slot name="title"></slot>
        </component-heading>
        <slot name="content"></slot>
        <component-button data-size="small">Read More</component-button>
      </div>

      ${this.getAttribute('data-image-position') === 'right' ?
        `<div class="component-card__image">
          <slot name="image"></slot>
        </div>`
      : ''}

    `;
  }
}