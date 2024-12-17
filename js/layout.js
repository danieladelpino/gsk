// Funciones

/**
 * Checkea si estoy en notas o no para linkear las notas
 * @returns {string}
 */
function checkNotas() {
    return window.location.href.indexOf('notas') > -1 ? '' : 'notas/';
}

/**
 * Checkea si estoy en notas para buscar los otros assets y htmls
 * @returns {string}
 */
function checkCurrentNotas() {
    return window.location.href.indexOf('notas') > -1 ? '../' : '';
}

/**
 * Checkea si estoy en la página de resultados para que no imprima el header
 * @returns {string}
 */
function checkPrint() {
    return window.location.href.indexOf('resultados') > -1 ? 'd-print-none' : '';
}


//==================================== HEAD START ==================================================//
const templateHead = document.createElement('Template');
templateHead.innerHTML = `
    <head>

    </head>
`;

class Head extends HTMLElement {
    constructor() {
        super();

        const clone = templateHead.content.cloneNode(true);
        this.appendChild(clone);
    }
}

window.customElements.define('template-head', Header);

//======================================= HEAD END ==================================================//

//==================================== HEADER START ==================================================//
const templateHeader = document.createElement('Template');
templateHeader.innerHTML = `
    <header>
        
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();

        const clone = templateHeader.content.cloneNode(true);
        this.appendChild(clone);
    }
}

window.customElements.define('template-header', Header);

//======================================= HEADER END ==================================================//


//======================================= FOOTER START ============================================//

const templateFooter = document.createElement('template');
templateFooter.innerHTML = `
// Aqui va el codigo del footer
`;

class Footer extends HTMLElement {
    constructor() {
        super();

        const clone = templateFooter.content.cloneNode(true);
        this.appendChild(clone);
    }
}

window.customElements.define('template-footer', Footer);

//======================================= FOOTER END ============================================//

