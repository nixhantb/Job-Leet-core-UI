import { FC } from "react";
import {
  SearchBar,
  SearchBarContainer,
  SearchButton,
  StyledButton,
} from "../../styles/search/searchstyles";

import SearchKeywords from "./SearchKeywords";
import CountrySelect from "./SearchCountry";

const Search: FC = () => {
  const companySkillsPositionsKeywords = [
    "Internship",
    "Junior Software Engineer",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Others"
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
          <SearchKeywords
            label="keywords, skills & positions"
            keywords={companySkillsPositionsKeywords}
          />
        </SearchBar>
        <SearchBar>
          <SearchKeywords label="Experience" keywords={experience} />
        </SearchBar>
        <SearchBar>
          <CountrySelect />
        </SearchBar>
        <SearchButton>
          <StyledButton variant="contained" size="large" sx = {{fontWeight: '600'}}>
            {ButtonKey}
          </StyledButton>
        </SearchButton>
      </SearchBarContainer>
    </>
  );
};

export default Search;
