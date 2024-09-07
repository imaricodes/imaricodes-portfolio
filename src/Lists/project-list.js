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
    body: "The possibilities of combining speech to text and generative AI to support those learning to read are boundless. This application uses the Google Cloud speech-to-text API and ChatGPT to assess a user's oral reading. The UI is built using primarily React and Tailwind. Express, SocketIO, MediaStreaming Recording API and  are used to send data to the server for processing. The application is deployed on AWS.",
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
    body: "This Chipotle modal clone is an exercise in recreating a pixel-perfect (pretty close) clone of a modal the Chipotle website uses to find nearby restaurants. One of the key things I learned doing this project is that the Google Maps API can be EXPENSIVE! I ran up a $150 data bill in two days of testing :(  The UI is built using React and Tailwind. All processing happens on the client side. The application is deployed on Google Cloud Run.",
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
    body: "This Chipotle modal clone is an exercise in recreating a pixel-perfect (pretty close) clone of a modal the Chipotle website uses to find nearby restaurants. One of the key things I learned doing this project is that the Google Maps API can be EXPENSIVE! I ran up a $150 data bill in two days of testing :(  The UI is built using React and Tailwind. All processing happens on the client side. The application is deployed on Google Cloud Run.",
    githubURL: "https://github.com/imaricodes/standaman-memorial" ,
    liveURL: "https://standaman-memorial-lemon.vercel.app/",
  },
];

export default projectList;
