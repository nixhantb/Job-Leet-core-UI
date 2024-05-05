import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FC } from "react"
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";


const NavBar: FC = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
            {matches ? <NavBarMobile/> : <NavBarDesktop/>}
        </>
    );
};

export default NavBar;