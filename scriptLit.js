import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3/+esm';

class CartaoSpoiler extends LitElement {

    static properties = {
        revelado: { type: Boolean },
        spoiler: { type: String }
    };

    static styles = css`
        :host {
            display: block;
            width: 400px;
            height: 400px;
            flex-shrink: 0;
        }

        .container {
            display: flex;
            background-color: rgba(206, 50, 30, 0.84);
            width: 400px;
            height: 400px;
            border-radius: 10%;
            border: 2px solid white;
            justify-content: center;
            align-items: center;
            color: white;
            cursor: pointer;
            text-align: center;
            padding: 20px;
            box-sizing: border-box;
            transition: all 0.6s ease-in-out;
        }

        .container.ativo {
            background-color: rgb(139, 0, 0);
            border-color: black;
            transform: scale(1.05);
        }

        h2 {
            margin: 0;
            font-size: 24px;
        }
    `;

    constructor() {
        super();

        this.revelado = false;
        this.spoiler = 'Plot twist não informado.';
    }

    render() {
        return html`
            <div
                class="container ${this.revelado ? 'ativo' : ''}"
                @click="${this.alternarTexto}"
            >
                <h2>
                    ${this.revelado
                        ? this.spoiler
                        : 'Revelar Plot Twist'}
                </h2>
            </div>
        `;
    }

    alternarTexto() {
        this.revelado = !this.revelado;
    }
}

customElements.define('cartao-spoiler', CartaoSpoiler);