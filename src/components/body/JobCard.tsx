import {
  JobCardApply,
  JobCardCompanyLogoName,
  JobCardCompanyLogoPlaceHolder,
  JobCardCompanyName,
  JobCardCompanyNameLocation,
  JobCardContainer,
  JobCardDefaultContainer,
  JobCardKeySkills,
  JobCardKeySkillsContainer,
  JobCardLocationTitle,
  JobCardLocationTitleContainer,
  JobCardPayPerHourWithApplyButtonContainer,
  JobCardTitle,
  JobDescription,
  JobPostedDateContent,
  JobTypeAndPostedDateContainer,
  JobTypeContent,
} from "../../styles/body/jobcard.style";

import GoogleLogo from "../../../public/googleIcon.webp";
import MicrosoftLogo from "../../../public/microsoftLogo.svg";
import AmazonLogo from "../../../public/amazonLogo.webp";
import AppleLogo from "../../../public/appleLogo.png";
import FacebookLogo from "../../../public/facebookLogo.png";
import TeslaLogo from "../../../public/Tesla.png";

import AddLocationIcon from "@mui/icons-material/AddLocation";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { FC } from "react";
interface JobCardItemProps {
  companyName: string;
  location: string;
  jobTitle: string;
  jobDescription: string;
  postedTime: string;
  jobType: string;
  image: string;
  keySkills: string[];
}

const styles = {
  textDecoration: "none",
  fontFamily: "'Montserrat Variable', 'sans-serif'",
};

const stylesHover = {
  textDecoration: "none",
  color: "white",
  fontFamily: "'Montserrat Variable', 'sans-serif'",
};

// function signature to accept props
const JobCardItem: FC<JobCardItemProps> = ({
  companyName,
  location,
  jobTitle,
  jobDescription,
  postedTime,
  jobType,
  image,
  keySkills,
}) => {
  return (
    <JobCardContainer>
      <JobCardCompanyLogoName>
        <JobCardCompanyLogoPlaceHolder src={image} />
        <JobCardCompanyNameLocation>
          <JobCardCompanyName>{companyName}</JobCardCompanyName>
          <JobCardLocationTitleContainer>
            <AddLocationIcon sx={{ fontSize: "15px" }} />
            <JobCardLocationTitle>{location}</JobCardLocationTitle>
          </JobCardLocationTitleContainer>
        </JobCardCompanyNameLocation>
      </JobCardCompanyLogoName>
      <JobCardTitle>{jobTitle}</JobCardTitle>
      <JobTypeAndPostedDateContainer>
        <WorkOutlineIcon sx={{ fontSize: "15px" }} />
        <JobTypeContent>{jobType}</JobTypeContent>
        <AccessTimeIcon sx={{ fontSize: "15px" }} />
        <JobPostedDateContent>{postedTime} ago</JobPostedDateContent>
      </JobTypeAndPostedDateContainer>
      <JobDescription>{jobDescription}</JobDescription>
      <JobCardKeySkillsContainer>
        {keySkills.map((skill, index) => (
          <a href="#" style={styles} key={index}>
            <JobCardKeySkills>{skill}</JobCardKeySkills>
          </a>
        ))}
      </JobCardKeySkillsContainer>
      <JobCardPayPerHourWithApplyButtonContainer>
        <JobCardApply>
          <a href="#" style={stylesHover}>
            Apply Now
          </a>
        </JobCardApply>
      </JobCardPayPerHourWithApplyButtonContainer>
    </JobCardContainer>
  );
};

const JobCard: FC = () => {
  return (
    <JobCardDefaultContainer>
      {companies.map((company, index) => (
        <JobCardItem
          key={index}
          companyName={company.name}
          location={company.location}
          jobTitle={company.jobTitle}
          jobDescription={company.description}
          postedTime={company.postedTime}
          jobType={company.jobType}
          image={company.image}
          keySkills={company.keySkills}
        />
      ))}
    </JobCardDefaultContainer>
  );
};

export default JobCard;

const companies = [
  {
    name: "Google",
    location: "San Diego, US",
    jobTitle: "UI/UX Designer",
    description:
      "Join Google's innovative design team and work on cutting-edge projects to create exceptional user experiences.",
    postedTime: "4 minutes",
    jobType: "Part Time",
    image: GoogleLogo,
    keySkills: ["UI", "UX", "Figma"],
  },
  {
    name: "Microsoft",
    location: "New York, US",
    jobTitle: "Mid Frontend Developer",
    description:
      "Be a part of Microsoft's dynamic frontend development team, building next-generation web applications and platforms.",
    postedTime: "8 minutes",
    jobType: "Full Time",
    image: MicrosoftLogo,
    keySkills: ["React", "HTML", "CSS"],
  },
  {
    name: "Amazon",
    location: "Los Angeles, US",
    jobTitle: "UI Designer",
    description:
      "Amazon is seeking a talented UI Designer to help shape the future of online shopping experiences.",
    postedTime: "12 minutes",
    jobType: "Contract",
    image: AmazonLogo,
    keySkills: ["UI", "Wireframing", "Photoshop"],
  },
  {
    name: "Apple",
    location: "Cupertino, US",
    jobTitle: "Senior Software Engineer",
    description:
      "Join Apple's world-class engineering team and contribute to building groundbreaking software products and services.",
    postedTime: "16 minutes",
    jobType: "Remote",
    image: AppleLogo,
    keySkills: ["Swift", "Objective-C", "Xcode"],
  },
  {
    name: "Facebook",
    location: "Menlo Park, US",
    jobTitle: "Data Scientist",
    description:
      "Facebook is looking for talented data scientists to analyze massive datasets and drive insights for improving user experiences.",
    postedTime: "20 minutes",
    jobType: "Full Time",
    image: FacebookLogo,
    keySkills: ["ML", "Python", "SQL"],
  },
  {
    name: "Tesla",
    location: "Palo Alto, US",
    jobTitle: "Hardware Engineer",
    description:
      "Join Tesla's innovative hardware engineering team and contribute to the development of cutting-edge automotive technologies.",
    postedTime: "24 minutes",
    jobType: "Contract",
    image: TeslaLogo,
    keySkills: ["CAD", "Simulation", "Testing"],
  },
];
