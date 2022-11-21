import {
  faTruck,
  faMapLocation,
  faRoute,
  faListCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const adminNavItems = [
  {
    name: "Employee",
    icon: faUsers,
    isActive: true,
  },
  {
    name: "Vehicles",
    icon: faTruck,
    isActive: false,
  },
  {
    name: "MCPs",
    icon: faMapLocation,
    isActive: false,
  },
  {
    name: "Optimized Routes",
    icon: faRoute,
    isActive: false,
  },
  {
    name: "Tasks Assignment",
    icon: faListCheck,
    isActive: false,
  },
];

export const employeeInfoDir = [
  "ID Number",
  "Full Name",
  "Email Address",
  "Phone Number",
  "Role",
  "Status",
];

export const vehiclesInfoDir = [
  "License Plate",
  "Vehicle Name",
  "Vehicle Type",
  "Vehicle's Insurer",
  "Active Area",
  "Status",
];

export const vehiclesData = [
  {
    id: "12L-6 31584",
    name: "Tesla Model",
    vehiclesType: "pickup truck",
    insurer: "Nguyen Thanh Duy An",
    area: "District 10",
    status: "pending task",
  },
  {
    id: "13H-6 39285",
    name: "BMW Model",
    vehiclesType: "pickup truck",
    insurer: "Nguyen Thanh Duy An",
    area: "Tan Phu District",
    status: "available",
  },
  {
    id: "11Z-7 13245",
    name: "Toyota Model",
    vehiclesType: "Truck",
    insurer: "Nguyen Thanh Duy An",
    area: "Tan Binh District",
    status: "unavailable",
  },
  {
    id: "12K-6 33514",
    name: "Honda Model",
    vehiclesType: "pickup truck",
    insurer: "Nguyen Thanh Duy An",
    area: "Go Vap District",
    status: "pending task",
  },
  {
    id: "1L-56 51654",
    name: "Subaru Model",
    vehiclesType: "Truck",
    insurer: "Nguyen Thanh Duy An",
    area: "Thu Duc District",
    status: "unavailable",
  },
];

export const employeeData = [
  {
    id: 2052851,
    name: "Nguyen Thanh Duy An",
    status: "unavailable",
    email: "an.nguyen.tdn@gmail.com",
    phoneNumber: "0965529766",
    role: "collector",
  },
  {
    id: 2052852,
    name: "Nguyen Thanh Duy An",
    status: "unavailable",
    email: "an.nguyen.tdn@gmail.com",
    phoneNumber: "0965529766",
    role: "janitor",
  },
  {
    id: 2052853,
    name: "Nguyen Thanh Duy An",
    status: "available",
    email: "an.nguyen.tdn@gmail.com",
    phoneNumber: "0965529766",
    role: "collector",
  },
  {
    id: 2052854,
    name: "Nguyen Thanh Duy An",
    status: "available",
    email: "an.nguyen.tdn@gmail.com",
    phoneNumber: "0965529766",
    role: "janitor",
  },
  {
    id: 2052855,
    name: "Nguyen Thanh Duy An",
    status: "pending task",
    email: "an.nguyen.tdn@gmail.com",
    phoneNumber: "0965529766",
    role: "janitor",
  },

  {
    id: 2052851,
    name: "Nguyen Thanh Duy An",
    status: "pending task",
    email: "an.nguyen.tdn@gmail.com",
    phoneNumber: "0965529766",
    role: "collector",
  },
  {
    id: 2052852,
    name: "Nguyen Thanh Duy An",
    status: "available",
    email: "an.nguyen.tdn@gmail.com",
    phoneNumber: "0965529766",
    role: "collector",
  },
  {
    id: 2052853,
    name: "Nguyen Thanh Duy An",
    status: "available",
    email: "an.nguyen.tdn@gmail.com",
    phoneNumber: "0965529766",
    role: "janitor",
  },
  {
    id: 2052854,
    name: "Nguyen Thanh Duy An",
    status: "unavailable",
    email: "an.nguyen.tdn@gmail.com",
    phoneNumber: "0965529766",
    role: "collector",
  },
  {
    id: 2052855,
    name: "Nguyen Thanh Duy An",
    status: "pending task",
    email: "an.nguyen.tdn@gmail.com",
    phoneNumber: "0965529766",
    role: "janitor",
  },
];

export const MCPsData = [
  {
    location: "Independence Palace",
    address: "Ben Than Quan, Ho Chi Minh City",
    status: "empty",
    employee: "Nguyen Hoang Long",
  },
  {
    location: "Dong Khoi Street",
    address: "Ben Nghe, District 1, Ho Chi Minh",
    status: "empty",
    employee: "Tran Huy Nam Hung",
  },
  {
    location: "Cao Dai Temple",
    address: "3/10 Kha Van Can, Linh Trung, Thu Duc District, Ho Chi Minh",
    status: "full",
    employee: "Not Assigned",
  },
  {
    location: "Bitexco Financial Tower",
    address: "36 Ho Tung Mau, District 1, Ho Chi Minh",
    status: "full",
    employee: "Nguyen Thanh Duy An",
  },
  {
    location: "Saigon Opera House",
    address: "7 Lam Sons Sq., Ho Chi Minh City",
    status: "full",
    employee: "Not Assigned",
  },
  {
    location: "Vinh Nghiem Pagoda",
    address: "339 Nam Ki Khoi Nghia, District 3, Ho Chi Minh",
    status: "progress",
    employee: "Vu Hung",
  },
  {
    location: "Museum of Ho Chi Minh City",
    address: "65 Ly Tu Trong, Ben Nghe, District 1, Ho Chi Minh",
    status: "progress",
    employee: "Nguyen Hiep",
  },
  {
    location: "Ho Chi Minh City Zoo",
    address: "2 Nguyen Binh Khiem, Ben Nghe, District 1, Ho Chi Minh",
    status: "progress",
    employee: "Vo Trung Kien",
  },
  {
    location: "Jade Emperor Pagoda",
    address: "73 Mai Thi Luu, District 1, Ho Chi Minh",
    status: "progress",
    employee: "Nguyen Thanh Duy An",
  },
];
