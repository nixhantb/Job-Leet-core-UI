import { FC } from "react";
import { JobCategory, CategoryHeader, JobCategoriesContainer, IndividualSubContainer, CategoryBoxStyle, PrimaryHeaderInsideBox, PrimaryDescriptionInsideBox } from "../../styles/body/topjobcategories.style";
import GridViewIcon from '@mui/icons-material/GridView';
import WebhookIcon from '@mui/icons-material/Webhook';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
const TopJobCategories: FC = () => {
    return(
        <>
        <JobCategoriesContainer>
        <PrimaryDescriptionInsideBox>FEATURED CHOICES</PrimaryDescriptionInsideBox>
            <CategoryHeader>Browse Top Categories</CategoryHeader>
            <JobCategory>
                <IndividualSubContainer>
                    <GridViewIcon sx = {CategoryBoxStyle}/>
                    <PrimaryHeaderInsideBox>Design & Creative</PrimaryHeaderInsideBox>
                    <PrimaryDescriptionInsideBox>(32)</PrimaryDescriptionInsideBox>
                </IndividualSubContainer>
                <IndividualSubContainer>
                    <WebhookIcon sx = {CategoryBoxStyle}/>
                    <PrimaryHeaderInsideBox>Design & Development</PrimaryHeaderInsideBox>
                    <PrimaryDescriptionInsideBox>(45)</PrimaryDescriptionInsideBox>
                </IndividualSubContainer>
                <IndividualSubContainer>
                    <StackedBarChartIcon sx = {CategoryBoxStyle}/>
                    <PrimaryHeaderInsideBox>Sales & Marketing</PrimaryHeaderInsideBox>
                    <PrimaryDescriptionInsideBox>(51)</PrimaryDescriptionInsideBox>
                </IndividualSubContainer>
                <IndividualSubContainer>
                    <PhoneIphoneIcon sx = {CategoryBoxStyle}/>
                    <PrimaryHeaderInsideBox>Mobile Application</PrimaryHeaderInsideBox>
                    <PrimaryDescriptionInsideBox>(34)</PrimaryDescriptionInsideBox>
                </IndividualSubContainer>
                <IndividualSubContainer>
                    <EngineeringIcon sx = {CategoryBoxStyle}/>
                    <PrimaryHeaderInsideBox>Construction</PrimaryHeaderInsideBox>
                    <PrimaryDescriptionInsideBox>(11)</PrimaryDescriptionInsideBox>
                </IndividualSubContainer>
                <IndividualSubContainer>
                    <ImportantDevicesIcon sx = {CategoryBoxStyle}/>
                    <PrimaryHeaderInsideBox>Information & Technology</PrimaryHeaderInsideBox>
                    <PrimaryDescriptionInsideBox>(32)</PrimaryDescriptionInsideBox>
                </IndividualSubContainer>
                <IndividualSubContainer>
                    <SettingsInputAntennaIcon sx = {CategoryBoxStyle}/>
                    <PrimaryHeaderInsideBox>Cloud Computing</PrimaryHeaderInsideBox>
                    <PrimaryDescriptionInsideBox>(14)</PrimaryDescriptionInsideBox>
                </IndividualSubContainer>
            </JobCategory>
        </JobCategoriesContainer>
        </>
    )
}
export default TopJobCategories;