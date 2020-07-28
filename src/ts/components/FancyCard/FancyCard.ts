import { FancyCardContent  } from "./fancyCardContent";

class FancyCard extends HTMLElement{

  public domContent: string = FancyCardContent;
  public isActive: boolean = false;

  constructor(){
    super();
    this.bindDomContent();
    this.bindEventListener();
  }

  bindDomContent = (): void => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode:"open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));

  }

  handleCardClick = (event: MouseEvent): void => {
    this.toggleCardActivation();
  }

  toggleCardActivation = (): void => {
    this.isActive= !this.isActive;
    this.isActive === true ? this.setAttribute("active","true") : this.removeAttribute("active");
  }

  bindEventListener = (): void => {
    this.addEventListener("click", this.handleCardClick)
  }
}

export { FancyCard }