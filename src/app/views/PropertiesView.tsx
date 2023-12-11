import PropertyCard from "app/components/PropertyCard";

import properties from "app/data/aanbod.json";

import "./PropertiesView.scss";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/joy";
import { NavLink } from "react-router-dom";

export default function Properties() {
  return (
    <>
      <Breadcrumbs separator={<KeyboardArrowRight />}>
        <NavLink to="/" className="bread-link">
          Home
        </NavLink>
        <NavLink to="/aanbod" end className="bread-link">
          Aanbod
        </NavLink>
      </Breadcrumbs>

      <Typography
        level="h1"
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
        fontWeight="bold"
      >
        Aanbod Bedrijfspanden
      </Typography>

      <div className="properties-container">
        {properties.map(
          (property, index) =>
            property.featured && (
              <PropertyCard key={index} property={property} />
            )
        )}
      </div>
    </>
  );
}
