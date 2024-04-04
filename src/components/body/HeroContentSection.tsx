import { FC } from "react"
import { HeroBodyContainer, HeroBodyDescriptionContainer, HeroBodyDescriptionContent, HeroBodyDescriptionTitle, HeroBodyImage } from "../../styles/body/herocontentsectionstyles";
import HeroImage from "../../assets/images/HeroBodyImage.jpg";
import { HeroBodyLabels } from "../../../config/data/home";


const HeroContentSection: FC = () => {
    const {
        body_title_name,
        body_description
    } = HeroBodyLabels;
    return(
        
            <HeroBodyContainer>
                
                <HeroBodyDescriptionContainer>
                    <HeroBodyDescriptionTitle>{body_title_name}</HeroBodyDescriptionTitle>
                    <HeroBodyDescriptionContent>
                     {body_description}
                    </HeroBodyDescriptionContent>

                </HeroBodyDescriptionContainer>
                <HeroBodyImage src = {HeroImage} alt = "Body Image"></HeroBodyImage>

            </HeroBodyContainer>
        
    );
}
export default HeroContentSection;