import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Divider } from "@mui/joy";
import { NavLink } from "react-router-dom";
import CurrencyFormat from "app/components/CurrencyFormat";
import Price from "app/models/Price";
import StraightenIcon from "@mui/icons-material/Straighten";

export default function PropertyCard(props: any) {
  const { id, prices, address, media, totalArea } = props.property;

  return (
    <Card variant="outlined" sx={{ width: 320 }} color="neutral">
      <div>
        <Typography level="h4" fontWeight="bold">
          {address.street}
        </Typography>
        <Typography>
          {address.zip} {address.city}
        </Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={media.photos[0]} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent
        orientation="horizontal"
        sx={{ justifyContent: "space-between" }}
      >
        <div style={{ margin: "auto 0" }}>
          {prices.map((price: Price, index: number) => (
            <div key={index}>
              <Typography
                sx={{
                  margin: 0,
                  color: "#289837",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                <CurrencyFormat price={price} />
              </Typography>
              {index < prices.length - 1 && (
                <Divider sx={{ my: 1 }}>OF</Divider>
              )}
            </div>
          ))}
        </div>
        <div
          className="area"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StraightenIcon />
          <p style={{ margin: 0 }}>
            {totalArea.value} m<sup>2</sup>
          </p>
        </div>
        <div className="info-button" style={{ margin: "auto 0" }}>
          <NavLink to={`/aanbod/${id}`} className="ui-button">
            Meer info
          </NavLink>
        </div>
      </CardContent>
    </Card>
  );
}
