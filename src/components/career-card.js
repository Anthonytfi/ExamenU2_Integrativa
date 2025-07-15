import { LitElement, html } from 'https://unpkg.com/lit@3.3.1/index.js?module';
import { getThemeByDigit } from '../styles/themes.js';

export class CareerCard extends LitElement {
  static properties = {
    name: { type: String },
    faculty: { type: String },
    description: { type: String },
    img: { type: String },
    cedulaDigit: { type: String },
  };

  // Este getter nos permite aplicarle un estilo dinámico según la propiedad recibida
  getStyles() {
    return getThemeByDigit(this.cedulaDigit);
  }

  constructor() {
    super();
    this.name = '';
    this.faculty = '';
    this.description = '';
    this.img = '';
    this.cedulaDigit = '0'; 
  }

  // Este getter reemplaza la propiedad estática styles
  static get styles() {
    return [];
  }

  createRenderRoot() {
    const root = super.createRenderRoot();
    const style = document.createElement('style');
    style.textContent = getThemeByDigit(this.cedulaDigit).cssText;
    root.appendChild(style);
    return root;
  }

    render() {
    return html`
        <div class="card">
        <div class="header">
            <h2>${this.name}</h2>
            <h4>${this.faculty}</h4>
        </div>
        <img 
            src="./docs/${this.img}" 
            alt="Imagen de la carrera" 
            style="display: block; margin: 0 auto; max-width: 90%; border-radius: 6px;" />
        <p>${this.description}</p>
        </div>
    `;
    }

}

customElements.define('career-card', CareerCard);