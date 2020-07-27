import { FancyCardContent  } from "./fancyCardContent";

class FancyCard extends HTMLElement{

  public domContent: string = FancyCardContent;

  constructor(){
    super();
    this.bindDomContent();
  }

  bindDomContent = () => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode:"open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));

  }
}

export { FancyCard }