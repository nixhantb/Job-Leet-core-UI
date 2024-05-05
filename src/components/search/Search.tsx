import { FC } from "react";
import {
  SearchBar,
  SearchBarContainer,
  SearchButton,
  StyledButton,
  StyledButtonMobile,
} from "../../styles/search/searchstyles";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchCountryMobile from "./SearchCountryMobile";
import SearchKeywordsMobile from "./SearchKeywordsMobile";
import SearchKeywordsDesktop from "./SearchKeywordsDesktop";
import SearchCountryDesktop from "./SearchCountry";

const Search: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const companySkillsPositionsKeywords = [
    "Internship",
    "Junior Software Engineer",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Others",
  ];
  const experience = [
    "Internships",
    "Entry Level",
    "Intermediate Level",
    "Senior Level",
    "Others",
  ];

  const ButtonKey = "Find Jobs";
  return (
    <>
      <SearchBarContainer>
        <SearchBar>
          {matches? <SearchKeywordsMobile
            label="keywords, skills & positions"
            keywords={companySkillsPositionsKeywords}
          /> : <SearchKeywordsDesktop
          label="keywords, skills & positions"
          keywords={companySkillsPositionsKeywords}
        />}
          
        </SearchBar>
        <SearchBar>
          {matches? <SearchKeywordsMobile label="Experience" keywords={experience} /> : <SearchKeywordsDesktop label="Experience" keywords={experience} />}
        </SearchBar>
        <SearchBar>
          {matches? <SearchCountryMobile /> : <SearchCountryDesktop/>}
        </SearchBar>
        <SearchButton>
          {matches ? (
            <StyledButtonMobile
              variant="contained"
              size="large"
              sx={{ fontWeight: "600" }}
            >
              {ButtonKey}
            </StyledButtonMobile>
          ) : (
            <StyledButton
              variant="contained"
              size="small"
              sx={{ fontWeight: "600" }}
            >
              {ButtonKey}
            </StyledButton>
          )}
        </SearchButton>
      </SearchBarContainer>
    </>
  );
};

export default Search;
