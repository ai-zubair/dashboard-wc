export interface TabData {
  tabTitle: HTMLElement;
  tabPanel: HTMLElement;
}
export interface TabMap {
  [key: string] : TabData;
}