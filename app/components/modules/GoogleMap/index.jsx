import GoogleMapReact from "google-map-react";
import LocationPoint from "./LocationPoint";

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 55.168476,
      lng: 30.19775,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "315px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPoint lat={55.168476} lng={30.19775} />
        <LocationPoint lat={55.172912} lng={30.221342} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
