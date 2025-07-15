import { css } from 'https://unpkg.com/lit@3.3.1/index.js?module';

export const themes = {
  azul: css`
    :host {
      display: block;
      border: 3px solid #003366;
      background-color: #e6f0ff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 51, 102, 0.2);
      font-family: 'Segoe UI', sans-serif;
    }
  `,
  verde: css`
    :host {
      display: block;
      border: 3px solid #2e7d32;
      background-color: #e8f5e9;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(46, 125, 50, 0.2);
      font-family: 'Segoe UI', sans-serif;
    }
  `,
  rojo: css`
    :host {
      display: block;
      border: 3px solid #c62828;
      background-color: #ffebee;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(198, 40, 40, 0.2);
      font-family: 'Segoe UI', sans-serif;
    }
  `,
  gris: css`
    :host {
      display: block;
      border: 3px solid #616161;
      background-color: #f5f5f5;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(97, 97, 97, 0.2);
      font-family: 'Segoe UI', sans-serif;
    }
  `,
  naranja: css`
    :host {
      display: block;
      border: 3px solid #ef6c00;
      background-color: #fff3e0;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(239, 108, 0, 0.2);
      font-family: 'Segoe UI', sans-serif;
    }
  `,
};

// Función para obtener el tema según el último dígito de la cédula
export function getThemeByDigit(digit) {
  const d = parseInt(digit);
  if ([0, 1].includes(d)) return themes.azul;
  if ([2, 3].includes(d)) return themes.verde;
  if ([4, 5].includes(d)) return themes.rojo;
  if ([6, 7].includes(d)) return themes.gris;
  if ([8, 9].includes(d)) return themes.naranja;
  return themes.azul;
}
