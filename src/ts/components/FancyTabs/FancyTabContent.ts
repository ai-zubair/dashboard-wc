export const FancyTabContent = `
  <style>
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      contain: content;
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
    }
    ::slotted([slot="tab"]:hover){
      cursor: pointer;
      background-color: white;
    }
    .panel-container {
      flex-basis: 90%;
      background-color: #fff;
      padding: 10px;
    }
    ::slotted([slot="panel"]){
      width: 100%;
      height: 100%;
    }
  </style>

  <div class="tab-container" id="tab-container">
    <slot id="tab-slot" name="tab"></slot>
  </div>
  <div class="panel-container" id="panel-container">
    <slot id="panel-slot" name="panel"></slot>
  </div>
`;