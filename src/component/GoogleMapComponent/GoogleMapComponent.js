import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';

import './GoogleMapComponent.css';

export const GoogleMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `48%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap
    className="googlemap"
    defaultZoom={11}
    defaultCenter={{ lat: 40.1535005, lng: 44.4185274 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 40.1535005, lng: 44.4185274 }} />}
  </GoogleMap>
));
