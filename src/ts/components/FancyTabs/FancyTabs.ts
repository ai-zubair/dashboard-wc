import { FancyTabContent } from "./fancyTabsContent";
import { TabMap } from "./types";

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

  connectedCallback(){
    const tabSlot = this.shadowRoot?.getElementById("tab-slot") as HTMLSlotElement;
    const panelSlot = this.shadowRoot?.getElementById("panel-slot") as HTMLSlotElement;
    this.tabTitle = tabSlot.assignedNodes({flatten: true}) as HTMLElement[];
    this.tabPanel = panelSlot.assignedNodes({flatten: true}) as HTMLElement[];
    this.createTabMap();
    this.bindClickHandlers();
  }

  disconnectedCallback(){

  }

  attributeChangedCallback(){

  }

  bindDomContent = (): void => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
  }

  createTabMap = (): void => {
    this.tabTitle.forEach( (tabTitle, tabTitleIndex) => {
      const tabId = tabTitle.getAttribute("tabId");
      if(tabId){
        if(tabTitleIndex === 0){
          this.defaultActiveTabId = tabId;
        }
        const isTabActive = tabTitle.hasAttribute("active") ? true : false;
        this.tabMap[tabId] = {
          tabTitle: tabTitle,
          tabPanel: this.tabPanel[tabTitleIndex]
        }
        if(isTabActive){
          this.setActiveTab(tabId);
        }
      }
    })

    if(!this.activeTabId){
      this.setActiveTab();
    }
  }

  bindClickHandlers = (): void => {
    this.tabTitle.forEach( tabTitle => {
      tabTitle.addEventListener("click", this.handleTabTitleClick)
    })
  }

  unsetActiveTab = (): void => {
    const [activeTabTitle, activeTabPanel] = this.getActiveTab();
    activeTabTitle.removeAttribute("active");
    activeTabPanel.removeAttribute("active");
  }

  setActiveTab = ( tabId = this.defaultActiveTabId ): void => {
    if(this.activeTabId){
      this.unsetActiveTab();
    }
    this.activeTabId = tabId;
    const [activeTabTitle,activeTabPanel] = this.getActiveTab();
    activeTabTitle.setAttribute("active","true");
    activeTabPanel.setAttribute("active","true");
  }

  getActiveTab = (): HTMLElement[] => {
    return [this.tabMap[this.activeTabId].tabTitle, this.tabMap[this.activeTabId].tabPanel ];
  }

  handleTabTitleClick = (event: MouseEvent): void => {
    this.unsetActiveTab();
    const targetTab = event.target as HTMLElement;
    const targetTabId = targetTab.getAttribute("tabId");
    if(targetTabId){
      this.setActiveTab(targetTabId);
    }
  }

}

export { FancyTabs };