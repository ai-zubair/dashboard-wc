import { FancyTabs } from "./components/FancyTabs/FancyTabs";
import { FancyList } from "./components/FancyList/FancyList";
import { FancyCard } from "./components/FancyCard/FancyCard";
import { generateFakeAppointments } from "./utils/fakeDataGenerator";

customElements.define("fancy-tabs", FancyTabs);
customElements.define("fancy-list", FancyList);
customElements.define("fancy-card", FancyCard);

const totalAppointments = 10;
const randomAppointmentData = generateFakeAppointments(totalAppointments);
const appointmentContainer = document.getElementById("appointment-container") as HTMLDivElement;

randomAppointmentData.forEach( appointment => {
  const appointmentCard = document.createElement("fancy-card");
  Object.keys(appointment).forEach((propKey: string):void=>{
    const propSlotName = propKey.toLowerCase().split("_").join("-");
    const propContainer = document.createElement("p");
    propContainer.setAttribute("slot",propSlotName);
    propContainer.innerText = appointment[propKey];
    appointmentCard.appendChild(propContainer);
  } )
  appointmentContainer.appendChild(appointmentCard);
})