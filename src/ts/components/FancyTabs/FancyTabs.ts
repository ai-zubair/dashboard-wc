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
  public defaultActiveTabId: string = "";
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
      if(tabId && tabTitleIndex === 0){
        this.defaultActiveTabId = tabId;
      }
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
      this.setActiveTab();
    }
  }

  unsetActiveTab = (): void => {
    const activeTabTitle = this.getActiveTabTitle();
    activeTabTitle.removeAttribute("active");
  }

  setActiveTab = ( tabId = this.defaultActiveTabId ): void => {
    if(this.activeTabId){
      this.unsetActiveTab();
    }
    const tabTitle = this.tabMap[tabId].tabTitle;
    this.activeTabId = tabId;
    tabTitle.setAttribute("active","true");
  }

  getActiveTabTitle = () => {
    return this.tabMap[this.activeTabId].tabTitle;
  }

  bindClickHandlers = () => {
    this.tabTitle.forEach( tabTitle => {
      tabTitle.addEventListener("click",(event)=>{
        this.unsetActiveTab();
        const currentTab = event.target as HTMLElement;
        const currentTabId = currentTab.getAttribute("tabId");
        if(currentTabId){
          this.setActiveTab(currentTabId);
        }
      })
    })
  }

}

export { FancyTabs };