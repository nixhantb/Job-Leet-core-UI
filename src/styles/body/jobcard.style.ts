import { styled, Typography } from "@mui/material"
import {Box} from "@mui/system"
import "@fontsource-variable/open-sans";
import "@fontsource-variable/montserrat";
import { Colors } from "../basetheme/basetheme";

export const JobCardDefaultContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 'auto',
    width: '75%',
    [theme.breakpoints.down("md")]:{
        width: "80%"
    }

}))
export const JobCardContainer = styled(Box)(({theme}) => ({
    height: 'auto',
    padding: '1.1em',
    background: '#ecf4fc',
    borderRadius: '10px',
    width: '18em',
    margin: '1em 1em',
    [theme.breakpoints.down("md")]: {
        width: '100%'
    }
}));

export const JobCardCompanyLogoName = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin:"1em 0"
}))

export const JobCardCompanyLogoPlaceHolder = styled("img")(({src, theme}) => ({
    src: `url(${src})`,
    width: '3em',
    height: '3em',
    [theme.breakpoints.down("md")]: {
        width: '2.2em',
        height: '2.2em'
    }
    
}));

export const JobCardCompanyNameLocation = styled(Box)(() => ({
    marginLeft: '1em',
}));

export const JobCardCompanyName = styled(Typography)(({theme}) => ({
    fontSize: '1.2em',
    [theme.breakpoints.down("md")]: {
        fontSize: '1em',
        fontWeight: '600'
    }
}));

export const JobCardLocationTitleContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#a0abb8',
    fontFamily: "'Montserrat Variable', 'sans-serif'",
    fontSize: '12px',
    fontWeight: '600',
}));
export const JobCardLocationTitle = styled(Box)(() => ({
    fontFamily: "'Montserrat Variable', 'sans-serif'",
    fontSize: '12px',
    fontWeight: '600',
    color: '#a0abb8',
    
}));

export const JobCardTitle = styled(Typography)(({theme}) => ({
    fontSize: '1em',
    fontWeight: '600',
    fontFamily: "'Montserrat Variable', 'sans-serif'",
    [theme.breakpoints.down("md")]: {
        fontSize: '0.9em',
        fontWeight: '600'
    }
    
}));

export const JobTypeAndPostedDateContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#a0abb8',
    fontFamily: "'Montserrat Variable', 'sans-serif'",
    marginBottom: '1em',
}));

export const JobTypeContent = styled(Typography)(({theme}) => ({
    fontSize: '12px',
    fontWeight: '600',
    fontFamily: "'Montserrat Variable', 'sans-serif'",
    marginRight: '1em',
    [theme.breakpoints.down("md")]: {
        fontSize: '10px',
    }
   
}));

export const JobPostedDateContent = styled(Typography)(({theme}) => ({
    fontFamily: "'Montserrat Variable', 'sans-serif'",
    fontSize: '12px',
    fontWeight: '600',
    [theme.breakpoints.down("md")]: {
        fontSize: '10px'
    }
}));

export const JobDescription = styled(Typography)(({theme}) => ({
    fontSize: '0.8em',
    fontFamily: "'Montserrat Variable', 'sans-serif'",
    marginBottom: '1.5em',
    [theme.breakpoints.down("md")]: {
        fontSize: '0.8em',
    }
}));

export const JobCardKeySkillsContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap'
}));

export const JobCardKeySkills = styled(Typography)(({theme}) => ({
    color: 'black',
    marginRight: '0.4em',
    background: '#c8d2de',
    fontSize: '0.7em',
    textAlign: 'center',
    padding: '0.3em 1em',
    marginBottom: '0.7em',
    borderRadius: '4px',
    [theme.breakpoints.down("md")]: {
        fontSize: '0.7em',
        marginBottom: '0.6em'
    }
}));

export const JobCardPayPerHourWithApplyButtonContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const JobCardApply = styled(Box)`
  && {
    margin-right: 1em;
    background: ${Colors.biscay};
    font-size: 0.8em;
    text-align: center;
    padding: 1em 3em;
    border: none;
    border-radius: 4px;
    margin: 0.5em 0;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background: darkblue;
    }
  }
`;
