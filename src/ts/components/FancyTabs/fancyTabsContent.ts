export const FancyTabContent = `
  <style>
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      contain: content;
      border-radius: 6px;
      box-shadow: 0px 0px 10px 0px #b4b4b4;
    }
    .tab-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-basis: 10%;

    }
    ::slotted([slot="tab"]){
      width: auto;
      padding: 10px;
      border: none;
      flex-basis: calc(100%/3);
      color: black;
      font-size: 20px;
      background-color: #ececec;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
      transition: font-size 0.5s ease;
      outline: none;
    }
    ::slotted([slot="tab"][active]){
      font-weight: bolder;
      background-color: white;
    }
    ::slotted(:not([active])[slot="tab"]:hover){
      cursor: pointer;
      background-color: #f3f3f3;
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