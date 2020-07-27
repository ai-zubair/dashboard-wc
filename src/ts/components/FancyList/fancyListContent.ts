export const FancyListContent = `
  <style>
    :host{
      display:block;
      height: 100%;
      width: 100%;
    }
    ::slotted([slot="list-item-slot"]){
      width: 100%;
    }
    ::slotted([slot="list-item-slot"]:hover){
      cursor: pointer;
    }
  </style>

  <div id="list-item-container">
    <slot id="list-item-slot" name="list-item-slot"></slot>
  </div>
`;