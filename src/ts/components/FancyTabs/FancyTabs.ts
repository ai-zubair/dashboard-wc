import { FancyTabContent } from "./FancyTabContent";

interface TabData {
  tabTitle: HTMLElement;
  tabPanel: HTMLElement;
}
interface TabMap {
  [key: string] : TabData;
}
class FancyTabs extends HTMLElement{

  public tabMap: TabMap = {};
  public domContent: string = FancyTabContent;
  public activeTabId: string = "";
  public tabTitle: HTMLElement[] = [];
  public tabPanel: HTMLElement[] = [];

  constructor(){
    super();
    this.bindDomContent();
  }

  bindDomContent = () => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
  }

  connectedCallback(){
    const tabSlot = this.shadowRoot?.getElementById("tab-slot") as HTMLSlotElement;
    const panelSlot = this.shadowRoot?.getElementById("panel-slot") as HTMLSlotElement;
    this.tabTitle = tabSlot.assignedNodes({flatten: true}) as HTMLElement[];
    this.tabPanel = panelSlot.assignedNodes({flatten: true}) as HTMLElement[];
    this.createTabMap();
    this.bindClickHandlers();
  }

  createTabMap = () => {
    this.tabTitle.forEach( (tabTitle, tabTitleIndex) => {
      const tabId = tabTitle.getAttribute("tabId");
      const isTabActive = tabTitle.hasAttribute("active") ? true : false;
      if(tabId && isTabActive){
        this.activeTabId = tabId;
      }

      if(tabId){
        this.tabMap[tabId] = {
          tabTitle: tabTitle,
          tabPanel: this.tabPanel[tabTitleIndex]
        }
      }
    })
    if(!this.activeTabId){
      this.activeTabId = Object.keys(this.tabMap)[0];
      this.tabMap[this.activeTabId].tabTitle.setAttribute("active","true");
    }
  }

  setActiveTab = ( tabId: string ): void => {

  }

  getActiveTab = () => {
    return this.tabMap[this.activeTabId].tabTitle;
  }

  bindClickHandlers = () => {
    this.tabTitle.forEach( tabTitle => {
      tabTitle.addEventListener("click",(event)=>{
        const activeTab = this.getActiveTab();
        activeTab.removeAttribute("active");
        const currentTab = event.target as HTMLElement;
        const currentTabId = currentTab.getAttribute("tabId");
        currentTab.setAttribute("active", "true");
        if(currentTabId){
          this.activeTabId = currentTabId
        }
      })
    })
  }

}

export { FancyTabs };