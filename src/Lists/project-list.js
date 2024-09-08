import InventoryTrackerProject from "../assets/inventory-tracker-project.png";
import EmployeeMapProject from "../assets/employee-map-project.png";
import SkillsIcons from "../assets/skills-icons/SkillsIcons";
import MemorialProject from "../assets/memorial-project.png";

const projectList = [
  {
    id: 0,
    title: "Employee Map Dashboard",
    skills: [
      SkillsIcons.iconReact,
      SkillsIcons.iconNextJS,
      SkillsIcons.iconMongoDB,
      SkillsIcons.iconTailwindCSS,
      SkillsIcons.iconGoogleCloud,
      SkillsIcons.iconApi,
    ],
    image: EmployeeMapProject,
    body: "With this employee mapping dashboard, the user can create, edit, and delete employee data as well as place markers for each employee's location on a Google map. Open Street map is used for real time location search. The application is built using Next.js and Mongodb.",
    githubURL: "https://github.com/imaricodes/mongo-crud-reference-2",
    liveURL: "https://mongo-crud-reference-2.vercel.app/",

  },
  {
    id: 1,
    title: "Inventory Tracker",
    skills: [
      SkillsIcons.iconReact,
      SkillsIcons.iconNextJS,
      SkillsIcons.iconMongoDB,
      SkillsIcons.iconTailwindCSS,
      SkillsIcons.iconApi,
    ],
    image: InventoryTrackerProject,
    body: "Track your inventory in real time. Create, edit, and delete inventory data. Switch between light and dark mode. The application is built using Next.js and Mongodb.",
    githubURL: "https://github.com/imaricodes/inventory-tracker",
    liveURL: "https://inventory-tracker-gilt-beta.vercel.app/",
  },
  {
    id: 1,
    title: "Memorial Website",
    skills: [
      SkillsIcons.iconReact,
      SkillsIcons.iconNextJS,
      SkillsIcons.iconTailwindCSS,
    ],
    image: MemorialProject,
    body: "This website was created to memorialize the life of my father. The user may explore the webiste by selecting a decade from the image gallery or a menu. The images used are placeholders with plans to update in the future. The application is built using Next.js and Tailwind.",
    githubURL: "https://github.com/imaricodes/standaman-memorial" ,
    liveURL: "https://standaman-memorial-lemon.vercel.app/",
  },
];

export default projectList;
