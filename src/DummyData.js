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
    img: "https://a.cdn-hotels.com/gdcs/production57/d1333/f7a8b32f-b0f2-4272-8782-fab862fce06b.jpg",
  },
  {
    location: "Dong Khoi Street",
    address: "Ben Nghe, District 1, Ho Chi Minh",
    status: "empty",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/B%E1%BA%BFn_Ngh%C3%A9%2C_District_1%2C_Ho_Chi_Minh%2C_Vietnam_-_panoramio_%2838%29.jpg",
  },
  {
    location: "Cao Dai Temple",
    address: "3/10 Kha Van Can, Linh Trung, Thu Duc District, Ho Chi Minh",
    status: "full",
    img: "https://i.imgur.com/bOW7ssS.jpg",
  },
  {
    location: "Bitexco Financial Tower",
    address: "36 Ho Tung Mau, District 1, Ho Chi Minh",
    status: "full",
    img: "https://batdongsanonline.vn/uploads/tin-tuc/bitexco/hinh-1.jpg",
  },
  {
    location: "Saigon Opera House",
    address: "7 Lam Sons Sq., Ho Chi Minh City",
    status: "full",
    img: "https://www.luneproduction.com/content/images/thumbs/0002384_0_image.jpeg",
  },
  {
    location: "Vinh Nghiem Pagoda",
    address: "339 Nam Ki Khoi Nghia, District 3, Ho Chi Minh",
    status: "in progress",
    img: "https://cdn3.ivivu.com/2022/10/Ch%C3%B9a-V%C4%A9nh-Nghi%C3%AAm-ivivu.jpg",
  },
  {
    location: "Museum of Ho Chi Minh City",
    address: "65 Ly Tu Trong, Ben Nghe, District 1, Ho Chi Minh",
    status: "in progress",
    img: "https://toquoc.mediacdn.vn/Uploaded/minhkhanh/2017_07_27/BIN_6105_DVJJ.jpg",
  },
  {
    location: "Ho Chi Minh City Zoo",
    address: "2 Nguyen Binh Khiem, Ben Nghe, District 1, Ho Chi Minh",
    status: "in progress",
    img: "http://cdn.tgdd.vn/Files/2022/02/21/1416530/tham-quan-thao-cam-vien-sai-gon-cuc-ly-tuong-vao-cuoi-tuan-202202211013120090.jpg",
  },
  {
    location: "Jade Emperor Pagoda",
    address: "73 Mai Thi Luu, District 1, Ho Chi Minh",
    status: "in progress",
    img: "https://lp-cms-production.imgix.net/2019-06/c9fa556810d60b531e7ccaf3222a711c-jade-emperor-pagoda.jpg",
  },
];
