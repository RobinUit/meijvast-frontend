import TankvalImage from "assets/tankval-11-1.jpeg";

import "./HomeView.scss";
import { NavLink } from "react-router-dom";
import { Card, Typography } from "@mui/joy";
export default function Home() {
  return (
    <Card variant="outlined">
      <Typography
        level="h1"
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
        fontWeight="bold"
      >
        Welkom bij Meijvast
      </Typography>

      <img
        src={TankvalImage}
        alt="Het kantoor van Meijvast B.V. op Tankval 11 (2408 ZC) in Alphen aan den Rijn"
      />

      <NavLink
        to="/aanbod"
        className="ui-button"
        style={{ margin: "12px auto 0 auto" }}
      >
        Bekijk ons aanbod
      </NavLink>
    </Card>
  );
}
