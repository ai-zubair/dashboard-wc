import faker from "faker";

interface Appointment{
  [key: string]: string;
  customer_Name: string;
  customer_Phone: string;
  professional_Name: string;
  professional_Phone: string;
  date_Created: string;
  date_Scheduled: string;
  service_Type: string;
  service_Location: string;
  service_Cost: string;
  payment_Method: string;
  service_Completed: string;
  customer_Feedback: string;
}

const services = [
  "Cleaner",
  "Stylist",
  "Plumber",
  "Carpenter",
  "Electrician",
  "Gardener",
  "House Help",
  "Driver",
  "Sanitation Worker",
  "Security Guard"
]
const paymentType = [
  "Cash On Service",
  "Pre-Paid",
  "Gift-Coupon"
];

const serviceStatus = [
  "Pending",
  "In-Progress",
  "Complete"
];

export const generateFakeAppointments = ( appointments: number ): Appointment[] => {
  const fakeAppointments: Appointment[] = [];

  for (let appointment = 0; appointment < appointments; appointment++) {

    const serviceNumber = Math.floor(Math.random()*10);
    const paymentNumber = Math.floor(Math.random()*3)
    const serviceStatusNumber = Math.floor(Math.random()*3)
    const customerGender = Math.floor(Math.random()*2);
    const professionalGender = Math.floor(Math.random()*2);
    
    fakeAppointments.push({
      customer_Name: `${faker.name.firstName(customerGender)} ${faker.name.lastName(customerGender)}`,
      customer_Phone: faker.phone.phoneNumberFormat(0),
      date_Created: `${faker.date.recent(7)}`.split("G")[0],
      service_Location: `${faker.address.streetName()} ${faker.address.city()} ${faker.address.zipCode()}`,
      payment_Method: paymentType[paymentNumber],
      customer_Feedback: `${Math.floor(Math.random()*10)+1}/10`,
      professional_Name: `${faker.name.firstName(professionalGender)} ${faker.name.lastName(professionalGender)}`,
      professional_Phone: faker.phone.phoneNumberFormat(0),
      date_Scheduled: `${faker.date.recent(2)}`.split("G")[0],
      service_Type: services[serviceNumber],
      service_Cost: `${
        Math.round(faker.random.number({
          min: 1200,
          max: 5500
        }))
     }`,
      service_Completed: `${serviceStatus[serviceStatusNumber]}`
    })
  }
  return fakeAppointments;
}