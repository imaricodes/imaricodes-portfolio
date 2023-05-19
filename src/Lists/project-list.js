import EchoReaderProject from "../assets/echo-reader-project.png";
import ChipotleModalProject from "../assets/chipotle-modal-project.png";
import SkillsIcons from "../assets/SkillsIcons";


const projectList = [
    {
        id:0,
        title: 'Echo Reader',
        skills: [SkillsIcons.iconReact,SkillsIcons.iconGoogleCloud, SkillsIcons.iconApi, SkillsIcons.iconTailwindCSS],
        image: EchoReaderProject,
        body:   ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        githubURL: 'https//github.com',
        liveURL: 'https://cars.com'
    },
    {
        id:1,
        title: 'Chipotle Locator Clone',
        skills: [SkillsIcons.iconReact,SkillsIcons.iconGoogleCloud, SkillsIcons.iconApi, SkillsIcons.iconTailwindCSS],
        image: ChipotleModalProject,
        body:   ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        githubURL: 'https://github.com',
        liveURL: 'https://cars.com'
    }
];

export default projectList;