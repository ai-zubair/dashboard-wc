import faker from "faker";

interface Appointment{
  customerName: string;
  customerPhone: string;
  professionalName: string;
  professionalPhone: string;
  dateCreated: string;
  dateScheduled: string;
  serviceType: string;
  serviceLocation: string;
  serviceCost: string;
  paymentMethod: string;
  serviceCompleted: string;
  customerFeedback: string;
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

export const generateFakeAppointments = ( appointments: number ): Appointment[] => {
  const fakeAppointments: Appointment[] = [];

  for (let appointment = 0; appointment < appointments; appointment++) {

    const serviceNumber = Math.floor(Math.random()*10);
    const paymentNumber = Math.floor(Math.random()*3)
    const customerGender = Math.floor(Math.random()*2);
    const professionalGender = Math.floor(Math.random()*2);
    
    fakeAppointments.push({
      customerName: `${faker.name.firstName(customerGender)} ${faker.name.lastName(customerGender)}`,
      customerPhone: faker.phone.phoneNumberFormat(0),
      dateCreated: `${faker.date.recent(7)}`.split("G")[0],
      serviceLocation: `${faker.address.streetName()} ${faker.address.city()} ${faker.address.zipCode()}`,
      paymentMethod: paymentType[paymentNumber],
      customerFeedback: `${Math.floor(Math.random()*10)+1}/10`,
      professionalName: `${faker.name.firstName(professionalGender)} ${faker.name.lastName(professionalGender)}`,
      professionalPhone: faker.phone.phoneNumberFormat(0),
      dateScheduled: `${faker.date.recent(2)}`.split("G")[0],
      serviceType: services[serviceNumber],
      serviceCost: `${
        Math.round(faker.random.number({
          min: 1200,
          max: 5500
        }))
     }`,
      serviceCompleted: `${faker.random.boolean()}`
    })
  }
  return fakeAppointments;
}