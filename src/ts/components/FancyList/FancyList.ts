import { FancyListContent } from "./fancyListContent";

class FancyList extends HTMLElement{
  public domContent: string = FancyListContent;

  constructor(){
    super();
    this.bindDomContent();
  }

  connectedCallback(): void{

  }

  disconnectedCallback(): void{

  }

  attributeChangedCallback(): void{

  }

  bindDomContent = () => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
  }
}

export { FancyList }