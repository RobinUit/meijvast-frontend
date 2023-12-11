import { Link, NavLink, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab, tabClasses } from "@mui/base/Tab";
import { Box, Breadcrumbs, Divider, Typography } from "@mui/joy";
import { KeyboardArrowRight } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MapIcon from "@mui/icons-material/Map";
import NavigationIcon from "@mui/icons-material/Navigation";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

import properties from "app/data/aanbod.json";

import "./PropertyView.scss";
import DocumentList from "app/components/DocumentList";
import CurrencyFormat from "app/components/CurrencyFormat";
import Price from "app/models/Price";
import CustomMap from "app/components/CustomMap";
import { Property } from "app/models/Property";
import { SyntheticEvent, useState } from "react";

export default function PropertyView() {
  const { propertyId } = useParams();
  const [currentTab, setCurrentTab] = useState(1);

  const property: Property =
    properties.find(({ id }) => id === propertyId) || properties[0];

  const { id, prices, address, media, description, location, documents } =
    property;

  const handleImageClick = () => {
    const element = document.getElementById("tabs");
    element?.scrollIntoView({ behavior: "smooth" });
    setCurrentTab(2);
  };

  const handleTabChange = (
    event: SyntheticEvent | null,
    newValue: number | string | null
  ) => {
    setCurrentTab(newValue as number);
  };

  return (
    <div className="property">
      <Breadcrumbs separator={<KeyboardArrowRight />}>
        <NavLink to="/" className="bread-link">
          Home
        </NavLink>
        <NavLink to="/aanbod" end className="bread-link">
          Aanbod
        </NavLink>
        <NavLink to={`/aanbod/${id}`} end className="bread-link">
          {address.street}
        </NavLink>
      </Breadcrumbs>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          maxHeight: { xs: "100%", sm: "450px" },
        }}
      >
        <img
          src={media.photos[0]}
          alt=""
          className="property-image"
          onClick={handleImageClick}
        />
        <Box sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}>
          <CustomMap
            latitude={location.lat}
            longitude={location.lng}
            zoom={location.zoom}
            interactive
          />
        </Box>

        <Accordion sx={{ display: { xs: "block", sm: "none" } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
            id="panel-header"
          >
            <MapIcon
              fontSize="large"
              sx={{ color: "#289837", margin: "auto 10px auto 0" }}
            />
            <Typography level="h4" fontWeight="bold">
              Kaart
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <CustomMap
              latitude={location.lat}
              longitude={location.lng}
              zoom={location.zoom}
              interactive
              mobile
            />
          </AccordionDetails>
        </Accordion>
      </Box>
      <Divider
        sx={{ margin: "1rem 0", backgroundColor: "#289837", height: "2px" }}
      />
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        <Box>
          <Typography level="h3" fontWeight="bold">
            {address.street}
          </Typography>
          <Typography level="h5">
            {address.zip} {address.city}
          </Typography>
          <div className="property-price">
            {prices.map((price: Price, index: number) => {
              return (
                <Typography
                  key={index}
                  level="h5"
                  sx={{
                    color: "#289837",
                    fontWeight: "bold",
                  }}
                >
                  <CurrencyFormat price={price} />
                </Typography>
              );
            })}
          </div>
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: "10px",
            margin: "auto 0",
            minWidth: "300px",
          }}
        >
          <NavLink
            to={`/contact`}
            className="ui-button"
            style={{ width: "auto" }}
          >
            <PermContactCalendarIcon sx={{ mr: "5px" }} />
            Contact
          </NavLink>
          <Link
            to={location.url}
            className="ui-button secondary"
            target="_blank"
            rel="noreferrer"
            style={{ width: "auto" }}
          >
            <NavigationIcon sx={{ mr: "5px" }} />
            Route
          </Link>
        </Box>
      </Box>
      <Tabs value={currentTab} onChange={handleTabChange} id="tabs">
        <StyledTabsList>
          <StyledTab value={1}>Info</StyledTab>
          <StyledTab value={2}>Media</StyledTab>
          <StyledTab value={3}>Documenten</StyledTab>
        </StyledTabsList>
        <StyledTabPanel value={1}>
          <Typography level="h3" fontWeight="bold">
            Omschrijving
          </Typography>
          <br />
          <Typography className="property-info">
            {parse(description)}
          </Typography>
        </StyledTabPanel>
        <StyledTabPanel value={2}>
          {media.photos.map((photo: string, index: number) => (
            <img
              src={photo}
              alt=""
              loading="lazy"
              key={index}
              className="property-images"
            />
          ))}
        </StyledTabPanel>
        <StyledTabPanel value={3}>
          <DocumentList documents={documents} id={id} />
        </StyledTabPanel>
      </Tabs>
    </div>
  );
}

const StyledTab = styled(Tab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #39b54a;
  }

  &:focus {
    color: #fff;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #289837;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTabPanel = styled(TabPanel)`
  font-family: "IBM Plex Sans", sans-serif;
  background-color: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  @media (max-width: 601px) {
    padding: 16px;
  }
`;

const StyledTabsList = styled(TabsList)`
  background-color: #289837;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;
