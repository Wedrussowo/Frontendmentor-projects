//This file will be the web component
//It only needs to run, not be imported by main.js
const template = document.createElement('template');
template.innerHTML = `
    <style>
        /* @import url(); */

        div {
            /* border: 2px solid red; */
            padding: 3rem;
            margin: 3rem;
        }
        :host {
             /* for the shadow root */
            background-color: lavender;
            display: block;
        }
        :host(big-bang) {
            background-color: cornflowerblue;
        }
        :host-context(main){
            background-color: gold;
        }
    </style>

    <div>
        <h1>Big Bang Theory</h1>
        <slot name="title">Default text if not title slot used in HTML</slot>
        <slot name="list"></slot>
    </div>
    `;


class BigBang extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        // let div = document.createElement('div');
        // div.textContent = 'Big Bang Theory';
        // shadowRoot.append(div);
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define('big-bang', BigBang);
// <big-bang> has to be hyphen