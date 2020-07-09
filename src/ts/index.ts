class CustomElementTest extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback(){
    this.innerHTML = "<p>This is a test custom element.</p>"
  }
}
customElements.define("cutsom-element", CustomElementTest);
// setTimeout(()=>{
  
// },4000) 