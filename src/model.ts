import { Icon } from "./components/atoms/icon/faIcon";

type Profile = {
  imgSrc: string;
  name: string;
  job: string;
};

type ContactInfo = { icon: Icon; descript: string };

type EducationInfo = {
  term: string;
  title: string;
  organization: string;
};

type LanguageInfo = {
  language: string;
  percent: number;
};

type About = {
  mainText: string;
};

type ExperienceInfo = {
  term: string;
  company: string;
  duty: string;
  mainText: string;
};

type Skiil = {
  title: string;
  percent: number;
};

type Interest = {
  icon: Icon;
  descript: string;
};

interface Model {
  profile: Profile;
  contactInfo: ContactInfo[];
  educationInfo: EducationInfo[];
  languageInfo: LanguageInfo[];
  about: About;
  experienceInfo: ExperienceInfo[];
  skill: Skiil[];
  interest: Interest[];
}

export const model: Model = {
  profile: { imgSrc: "./img.jpg", name: "박윤성", job: "front-end engineer" },
  contactInfo: [
    { icon: "phone", descript: "+1 234 5678" },
    { icon: "mail", descript: "john_doe@email.com" },
    { icon: "globe", descript: " www.mywebsite.com" },
    { icon: "map", descript: "Suwon" },
  ],
  educationInfo: [
    {
      term: "2010 - 2013",
      title: "Master Degree in Computer Science",
      organization: "University Name",
    },
    {
      term: "2007 - 2010",
      title: "Bechelor Degree in Computer Science",
      organization: "University Name",
    },
    {
      term: "1997 - 2007",
      title: "Matriculation",
      organization: "University Name",
    },
  ],
  languageInfo: [
    { language: "english", percent: 90 },
    { language: "spanish", percent: 50 },
    { language: "hindi", percent: 85 },
  ],
  about: {
    mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illo
    repellendus doloribus vero assumenda quod, eligendi, modi numquam
    voluptas fugiat sunt officiis quas illum facilis eius adipisci eum
    expedita. Quam?<br /><br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quam
    sequi eveniet commodi placeat modi quos error odit, numquam sed?
    Aliquam expedita eum pariatur. Perferendis fugiat animi numquam sit
    facilis.`,
  },
  experienceInfo: [
    {
      term: "2019 - PRESENT",
      company: "COMPANY NAME",
      duty: "SENIOR UX DESIGNER",
      mainText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fuga. Laudantium voluptas quasi, nostrum quae nam repudiandae ut illo exercitationem rem animi possimus officia magnam. Nemo quae excepturi ad asperiores!",
    },
    {
      term: "2016 - 2019",
      company: "COMPANY NAME",
      duty: "UX/UI DESIGNER",
      mainText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fuga. Laudantium voluptas quasi, nostrum quae nam repudiandae ut illo exercitationem rem animi possimus officia magnam. Nemo quae excepturi ad asperiores!",
    },
    {
      term: "2014 - 2016",
      company: "COMPANY NAME",
      duty: "JUNIOR UX DESIGNER",
      mainText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fuga. Laudantium voluptas quasi, nostrum quae nam repudiandae ut illo exercitationem rem animi possimus officia magnam. Nemo quae excepturi ad asperiores!",
    },
  ],
  skill: [
    {
      title: "html",
      percent: 95,
    },
    {
      title: "css",
      percent: 95,
    },
    {
      title: "javascript",
      percent: 90,
    },
    {
      title: "photoshop",
      percent: 60,
    },
    {
      title: "illustrator",
      percent: 80,
    },
    {
      title: "adobe xd",
      percent: 65,
    },
  ],
  interest: [
    { icon: "gamePad", descript: "gaming" },
    { icon: "microphone", descript: "singing" },
    { icon: "book", descript: "reading" },
    { icon: "cutlery", descript: "cooking" },
  ],
};
