import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/joy";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import NavigationIcon from "@mui/icons-material/Navigation";

import CustomMap from "app/components/CustomMap";
import { Box, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Card orientation="horizontal" variant="outlined">
      <CardContent>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            maxHeight: { xs: "100%", sm: "450px" },
          }}
        >
          <Box
            sx={{
              width: { sx: "100%", sm: "50%" },
              mr: { sx: 0, sm: 2 },
              textAlign: { sx: "center", sm: "left" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <address
              style={{
                fontStyle: "normal",
              }}
            >
              <Typography level="h4" fontWeight="bold">
                De Schans II
              </Typography>
              <Typography level="h5">
                Tankval 11
                <br />
                2408ZC, Alphen aan den Rijn
              </Typography>

              <Link
                to="https://goo.gl/maps/zThqj1UPaUafDT4q6"
                target="_blank"
                rel="noreferrer"
                style={{ margin: "1rem 0", width: "auto" }}
                className="ui-button"
              >
                <NavigationIcon /> Route
              </Link>

              <List>
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      window.location.href = "tel:0172-255-000";
                    }}
                  >
                    <ListItemIcon>
                      <PhoneIcon sx={{ color: "#289837" }} />
                    </ListItemIcon>
                    <ListItemText primary="(0172) 255 000" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      window.location.href = "mailto:info@meijvast.nl";
                    }}
                  >
                    <ListItemIcon>
                      <EmailIcon sx={{ color: "#289837" }} />
                    </ListItemIcon>
                    <ListItemText primary="info@meijvast.nl" />
                  </ListItemButton>
                </ListItem>
              </List>
            </address>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}>
            <CustomMap
              latitude={52.11397723912799}
              longitude={4.665699654577054}
              interactive
            />
          </Box>

          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <CustomMap
              latitude={52.11397723912799}
              longitude={4.665699654577054}
              interactive
              mobile
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
