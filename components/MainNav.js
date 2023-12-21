export class MainNav extends HTMLElement {
  static {
    customElements.define('mc-main-nav', this);
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('../style.css');

      </style>
      <button id="mc-main-nav-button" class="mc-main-nav-button">Menu</button>
    `;

    let menuDialog = document.querySelector('#mc-main-nav-dialog');
    if (!menuDialog) {
      const menuDialogElement = document.createElement('dialog');
      menuDialogElement.setAttribute('id', 'mc-main-nav-dialog');
      menuDialogElement.classList.add('mc-main-nav-dialog');
      const body = document.querySelector('body');
      body.appendChild(menuDialogElement);
      menuDialog = document.querySelector('#mc-main-nav-dialog');
    }
    menuDialog.innerHTML = `
    <style>
        @import url('../style.css');
        .mc-main-nav-dialog,
        .mc-main-nav-dialog[open].mc-main-nav-dialog--closing {
          position: fixed;
          transition: .3s;
          margin: 0;
          margin-left: auto;
          min-height: 100vh;
          width: 400px;
          max-width: 80%;
          transform: translateX(100%);
        }
        .mc-main-nav-dialog[open] {
          display: flex;
          margin: 0;
          margin-left: auto;
          flex-direction: column;
          transform: translateX(0);
          transition: .3s;
        }
        .mc-main-nav-dialog__close {
          margin-left: auto;
        }
      </style>
      <div class="mc-main-nav-dialog__close">
        <button class="mc-main-nav-dialog__close-button">Close</button>
      </div>
      <nav class="mc-main-nav-dialog__nav">
        <ul>
          <li><a href="/colors">Colors</a></li>
          <li><a href="/typography">Typography</a></li>
          <li><a href="/containers">Containers</a></li>
          <li><a href="/grids">Grid system</a></li>
        </ul>
      </nav>
    `;

    const menuDialogCloseButton = document.querySelector(".mc-main-nav-dialog__close-button");
    const menuDialogOpenButton = this.shadowRoot.querySelector("#mc-main-nav-button");

    menuDialogOpenButton.addEventListener("click", () => {
      menuDialog.style.display = "flex";
      setTimeout(() => {
        menuDialog.showModal();
      }, 100);
    });


    menuDialogCloseButton.addEventListener('click', () => {
      menuDialog.classList.add("mc-main-nav-dialog--closing");
      setTimeout(() => {
        menuDialog.close();
        menuDialog.style.display = "none";
        menuDialog.classList.remove("mc-main-nav-dialog--closing");
      }, 100);
    });


  }
}