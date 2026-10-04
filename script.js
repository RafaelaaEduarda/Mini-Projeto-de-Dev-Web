class CartaoSpoiler extends HTMLElement {
    constructor() {
        super();

        // Estado interno manual
        this.revelado = false;

        // Criando o Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Injetando o HTML e o CSS diretamente no Shadow DOM
        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    display: flex;
                    background-color: #8B1E3F; 
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
                    /* Animação de transição fluida */
                    transition: all 0.6s ease-in-out;
                }
                
                /* Classe que será adicionada e removida via JS */
                .container.ativo {
                    background-color: #5C0A1A;
                    border-color: black;
                    transform: scale(1.05); /* Efeito de pulo/zoom */
                }

                h2 {
                    margin: 0;
                    font-size: 24px;
                }
            </style>
            
            <div class="container">
                <h2 id="texto-spoiler">Revelar Plot Twist</h2>
            </div>
        `;

        this.container = this.shadowRoot.querySelector('.container');
        this.textoElement = this.shadowRoot.querySelector('#texto-spoiler');

        // Atributos definidos no HTML
        this.textoSpoiler = this.getAttribute('spoiler') || 'Plot twist não informado.';
        // Guardando o texto inicial para poder restaurá-lo
        this.textoInicial = 'Revelar Plot Twist';
    }

    connectedCallback() {
        this.container.addEventListener('click', () => this.alternarTexto());
    }

    // Faz o efeito "Toggle"
    alternarTexto() {
        // Inverte o valor do estado (Se era falso, vira verdadeiro. Se era verdadeiro, vira falso)
        this.revelado = !this.revelado;

        if (this.revelado) {
            // Estado 1: Spoiler Revelado
            this.container.classList.add('ativo'); // Fica vermelho escuro e cresce
            this.textoElement.textContent = this.textoSpoiler; // Mostra o segredo de Marrowbone
        } else {
            // Estado 2: Spoiler Escondido novamente
            this.container.classList.remove('ativo'); // Volta pro amarelo original
            this.textoElement.textContent = this.textoInicial; // Volta a dizer "Revelar Plot Twist"
        }
    }
}

customElements.define('cartao-spoiler', CartaoSpoiler);