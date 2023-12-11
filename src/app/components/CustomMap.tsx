import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  interactive?: boolean;
  mobile?: boolean;
}

export default function CustomMap({
  latitude = 0,
  longitude = 0,
  zoom = 15,
  interactive = false,
  mobile = false,
}: MapProps) {
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      initialViewState={{
        latitude,
        longitude,
        zoom,
      }}
      cooperativeGestures={mobile}
      interactive={interactive}
      style={{ width: "100%", maxHeight: "450px", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      onRender={(event) => event.target.resize()}
      locale={{
        "ScrollZoomBlocker.CtrlMessage": "Gebruik ctrl + scroll om te zoomen",
        "ScrollZoomBlocker.CmdMessage": "Gebruik ⌘ + scroll om te zoomen",
        "TouchPanBlocker.Message": "Gebruik twee vingers om te bewegen",
      }}
      // onClick={(event) => {
      //   console.log(event.lngLat.lat, event.lngLat.lng);
      // }}
    >
      {interactive && (
        <>
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl position="bottom-right" />
        </>
      )}

      <Marker latitude={latitude} longitude={longitude} color="green" />
    </Map>
  );
}
