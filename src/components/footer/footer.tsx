import { FC } from "react";
import {
  FooterBox,
  FooterContainer,
  FooterDescription,
  FooterLink,
  FooterResources,
  FooterSocials,
  FooterTitle,
  IconStyles,
} from "../../styles/footer/footer.style";
import { IconButton, ListItemButton, ListItemText } from "@mui/material";
import { primaryTypographyHeaderStyle } from "../../styles/navbar/navbar.styles";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Colors } from "../../styles/basetheme/basetheme";
const Footer: FC = () => {
  // Dummy Data for static frontend page
  const companyDescriptions = [
    "Welcome to Job Leet",
    "A powerful job portal website",
    "Designed to connect job seekers",
    "with the right opportunities.",
    "across the globe",
  ];

  const linksData = {
    "About us": [
      { label: "About us", url: "https://example.com/link1" },
      { label: "Our Services", url: "https://example.com/link2" },
      { label: "Our Newsletters", url: "https://example.com/link3" },
      { label: "Contact us", url: "https://example.com/link3" },
    ],
    "For Seekers": [
      { label: "Resume Builder", url: "https://example.com/link1" },
      { label: "Find Jobs", url: "https://example.com/link2" },
      { label: "Track applications", url: "https://example.com/link3" },
      { label: "Training courses", url: "https://example.com/link3" },
    ],
    Employers: [
      { label: "Become Employer", url: "https://example.com/link1" },
      { label: "Premium", url: "https://example.com/link2" },
      { label: "Hire recruiters", url: "https://example.com/link3" },
      { label: "Job Fairs", url: "https://example.com/link3" },
    ],
    "Important Resources": [
      { label: "Privacy Policies", url: "https://example.com/link1" },
      { label: "FAQ", url: "https://example.com/link2" },
      { label: "Events", url: "https://example.com/link3" },
      { label: "Careers", url: "https://example.com/link3" },
    ],
  };

  
  

  const renderLinks = (links: { label: string; url: string }[]) => {
    return links.map((link, index) => (
      <FooterLink
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </FooterLink>
    ));
  };

  return (
    <>
      <FooterContainer>
        <FooterResources>
          <FooterBox>
            <FooterTitle>
              <ListItemButton>
                <ListItemText
                  primary="Job Leet"
                  primaryTypographyProps={{
                    style: { fontSize: "33px" },
                    ...primaryTypographyHeaderStyle,
                  }}
                ></ListItemText>
              </ListItemButton>
            </FooterTitle>
            {companyDescriptions.map((description, index) => (
              <FooterDescription key={index}>{description}</FooterDescription>
            ))}
          </FooterBox>
          {Object.entries(linksData).map(([title, links], index) => (
            <FooterBox key={index}>
              <FooterTitle>{title}</FooterTitle>
              {renderLinks(links)}
            </FooterBox>
          ))}
        </FooterResources>
        <FooterSocials>
          <IconButton aria-label="menu-icon">
            <XIcon sx={IconStyles} />
          </IconButton>
          <IconButton aria-label="menu-icon">
            <FacebookIcon sx={IconStyles} />
          </IconButton>
          <IconButton aria-label="menu-icon">
            <InstagramIcon sx={IconStyles} />
          </IconButton>
          <IconButton aria-label="menu-icon">
            <LinkedInIcon sx={IconStyles} />
          </IconButton>
        </FooterSocials>
      </FooterContainer>
    </>
  );
};

export default Footer;
