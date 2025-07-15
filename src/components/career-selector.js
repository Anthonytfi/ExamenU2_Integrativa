import { LitElement, html, css } from 'https://unpkg.com/lit@3.3.1/index.js?module';

export class CareerSelector extends LitElement {
  static styles = css`
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    li {
      background-color: #eeeeee;
      padding: 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: transform 0.2s ease;
      font-weight: 600;
    }

    li:hover {
      transform: scale(1.05);
      background-color: #ddd;
    }
  `;

  constructor() {
    super();
    this.careers = [
      {
        name: 'Ingeniería de Tecnologías de la Información',
        faculty: 'Facultad de Ingeniería de Sistemas',
        description:
          'Formación integral en el diseño, implementación y gestión de sistemas de información y tecnologías digitales.',
        img: 'ITIN.jpg',
      },
      {
        name: 'Ingeniería en Biotecnología',
        faculty: 'Facultad de Ciencias Biológicas y Ambientales',
        description:
          'Aplicación de procesos biológicos y tecnológicos para el desarrollo de soluciones innovadoras en salud, agricultura e industria.',
        img: 'BIO.jpg',
      },
      {
        name: 'Ingeniería Agropecuaria',
        faculty: 'Facultad de Ciencias Agropecuarias',
        description:
          'Desarrollo y aplicación de técnicas para optimizar la producción agrícola y ganadera sostenible.',
        img: 'Agro.jpg',
      },
      {
        name: 'Ingeniería en Sistemas',
        faculty: 'Facultad de Ingeniería de Sistemas',
        description:
          'Especialización en análisis, diseño e implementación de sistemas computacionales para resolver problemas empresariales y sociales.',
        img: 'Sistemas.jpg',
      },
    ];
  }

  handleSelect(career) {
    // Despacho un evento personalizado con los datos completos de la carrera seleccionada
    this.dispatchEvent(
      new CustomEvent('career-selected', {
        detail: career,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <ul>
        ${this.careers.map(
          (career) => html`
            <li @click=${() => this.handleSelect(career)}>
              ${career.name}
            </li>
          `
        )}
      </ul>
    `;
  }
}

customElements.define('career-selector', CareerSelector);