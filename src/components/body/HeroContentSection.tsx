import { FC } from "react";
import {
  HeroBodyContainer,
  HeroBodyDescriptionContainer,
  HeroBodyDescriptionContent,
  HeroBodyDescriptionTitle,
  HeroBodyImage,
  HeroContainerSearch,
} from "../../styles/body/herocontentsectionstyles";
import HeroImage from "../../assets/images/HeroBodyImage.jpg";
import { HeroBodyLabels } from "../../../config/data/home";
import Search from "../search/Search";
import TopJobCategories from "./TopJobCategories";

const HeroContentSection: FC = () => {
  const { body_title_name, body_description } = HeroBodyLabels;
  return (
    <>
      <HeroBodyContainer>
        <HeroBodyDescriptionContainer>
          <HeroBodyDescriptionTitle>{body_title_name}</HeroBodyDescriptionTitle>
          <HeroBodyDescriptionContent>
            {body_description}
          </HeroBodyDescriptionContent>
        </HeroBodyDescriptionContainer>
        <HeroBodyImage src={HeroImage} alt="Body Image"></HeroBodyImage>
      </HeroBodyContainer>
      <HeroContainerSearch>
        <Search />
      </HeroContainerSearch>
      <TopJobCategories/>
    </>
  );
};
export default HeroContentSection;
