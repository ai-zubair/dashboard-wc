//@ts-ignore
import tabStyles from 'bundle-text:./fancyTabs.scss';

export const FancyTabContent = `
  <style>
    ${tabStyles}
  </style>

  <div class="tab-container" id="tab-container">
    <slot id="tab-slot" name="tab"></slot>
  </div>
  <div class="panel-container" id="panel-container">
    <slot id="panel-slot" name="panel"></slot>
  </div>
`;