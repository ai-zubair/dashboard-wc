export const FancyTabContent = `
  <style>
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      contain: content;
      border-radius: 6px;
      box-shadow: 0px 0px 10px 0px #444444;
    }
    .tab-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-basis: 10%;
      overflow: scroll;
      scrollbar-width: none;

    }
    .tab-container::-webkit-scrollbar{
      display: none;
      width: 0px;
    }
    ::slotted([slot="tab"]){
      width: auto;
      padding: 10px;
      border: none;
      flex-basis: calc(100%/3);
      color: black;
      font-size: 20px;
      background-color: #607D8B;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
      transition: font-size 0.5s ease;
      color : white;
      outline: none;
    }
    @media screen and (max-width: 576px){
      ::slotted([slot="tab"]){
        font-size: 14px;
      }
    }
    ::slotted([slot="tab"][active]){
      font-weight: bolder;
      background-color: white;
      color: black;
    }
    ::slotted(:not([active])[slot="tab"]:hover){
      cursor: pointer;
      background-color: #455A64;
      font-size: 21px;
      font-weight: bolder;
    }
    .panel-container {
      flex-basis: 90%;
      background-color: #fff;
      padding: 10px;
    }
    ::slotted([slot="panel"][active]){
      width: 100%;
      height: 100%;
    }
    ::slotted(:not([active])[slot="panel"]){
      display: none;
    }
  </style>

  <div class="tab-container" id="tab-container">
    <slot id="tab-slot" name="tab"></slot>
  </div>
  <div class="panel-container" id="panel-container">
    <slot id="panel-slot" name="panel"></slot>
  </div>
`;