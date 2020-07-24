import { FancyTabContent } from "./FancyTabContent";

class FancyTabs extends HTMLElement{

  private domContent: string = FancyTabContent;

  constructor(){
    super();
    this.bindDomContent();
  }

  private bindDomContent = () => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
  }


}

export { FancyTabs };