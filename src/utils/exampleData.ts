import { v4 as uuidv4, v4 } from "uuid";
import { PersonFullDataInterface } from "./types/dataInterfaces";

export const exampleData: PersonFullDataInterface = {
  generalInfo: {
    name: "John Doe",
    email: "example@gmail.com",
    phone: "+57 3112467528",
  },
  schools: [
    {
      id: uuidv4(),
      schoolName: "Oxford University",
      degree: "Software Engineer",
      startDateEducation: "11/11/2015",
      endDateEducation: "11/11/2020",
      location: "Oxford",
    },
    {
      id: uuidv4(),
      schoolName: "Boston University",
      degree: "Computer Science",
      startDateEducation: "11/11/2015",
      endDateEducation: "Present",
      location: "Boston",
    },
  ],
  companys: [
    {
      id: uuidv4(),
      companyName: "Facebook",
      positionTitle: "CEO",
      responsabilities:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero corporis mollitia provident et aliquam, eveniet consequatur sit non possimus rerum quod aspernatur consequuntur ipsam perspiciatis necessitatibus consectetur voluptatum, omnis saepe.",
      startDateJob: "11/11/2015",
      endDateJob: "11/11/2020",
    },
    {
      id: uuidv4(),
      companyName: "Instagram",
      positionTitle: "CEO",
      responsabilities:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero corporis mollitia provident et aliquam, eveniet consequatur sit non possimus rerum quod aspernatur consequuntur ipsam perspiciatis necessitatibus consectetur voluptatum, omnis saepe.",
      startDateJob: "11/11/2015",
      endDateJob: "11/11/2020",
    },
  ],
};
