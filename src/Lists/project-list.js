import EchoReaderProject from "../assets/echo-reader-project.png";
import ChipotleModalProject from "../assets/chipotle-modal-project.png";
import SkillsIcons from "../assets/skills-icons/SkillsIcons";

const projectList = [
  {
    id: 0,
    title: "Echo Reader",
    skills: [
      SkillsIcons.iconReact,
      SkillsIcons.iconGoogleCloud,
      SkillsIcons.iconApi,
      SkillsIcons.iconTailwindCSS,
      SkillsIcons.iconDocker,
    ],
    image: EchoReaderProject,
    body: "The possibilities of combining speech to text and generative AI to support those learning to read are boundless. This application uses the Google Cloud speech-to-text API and ChatGPT to assess a user's oral reading. The UI is built using primarily React and Tailwind. Express, SocketIO, MediaStreaming Recording API and  are used to send data to the server for processing. The application is deployed on AWS.",
    githubURL: "https//github.com",
    liveURL: "https://echoreader.imaricodes.com/",
  },
  {
    id: 1,
    title: "Chipotle Locator Clone",
    skills: [
      SkillsIcons.iconReact,
      SkillsIcons.iconGoogleCloud,
      SkillsIcons.iconApi,
      SkillsIcons.iconTailwindCSS,
    ],
    image: ChipotleModalProject,
    body: "This Chipotle modal clone is an exercise in recreating a pixel-perfect (pretty close) clone of a modal the Chipotle website uses to find nearby restaurants. One of the key things I learned doing this project is that the Google Maps API can be EXPENSIVE! I ran up a $150 data bill in two days of testing :(  The UI is built using React and Tailwind. All processing happens on the client side. The application is deployed on Google Cloud Run.",
    githubURL: "https://github.com",
    liveURL: "http://chipotle-modal-clone.s3-website.us-east-2.amazonaws.com/",
  },
];

export default projectList;
