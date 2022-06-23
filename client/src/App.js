import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import ReactLeafletDriftMarker from 'react-leaflet-drift-marker';
import { io } from 'socket.io-client';
import L from 'leaflet';
import tileLayer from './utils/tileLayer';
import 'leaflet/dist/leaflet.css';
import marker from './assets/car1.png';

import './App.css';
// import LocationButton from './components/LocationButton';
import MyLocation from './components/currentLocation';

const icon = L.icon({
  iconUrl: marker,
  iconSize: [35, 55],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  // shadowUrl: shadow,
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

const Map = () => {
  const [location, setLocation] = useState({
    lat: 23.4530972,
    lon: 91.1658009,
  });

  useEffect(() => {
    // setInterval(() => {
    //   const intervalId = setLocation({
    //     ...location,
    //     lat: Number.parseFloat((location.lat + 0.0001).toFixed(7)),
    //   });
    //   return () => clearInterval(intervalId);
    // }, 500);
  }, [location]);

  return (
    <MapContainer
      // whenCreated={setMap}
      center={location}
      zoom={4}
      minZoom={4}
    >
      <TileLayer {...tileLayer} />
      <ReactLeafletDriftMarker
        // if position changes, marker will drift its way to new position
        position={location}
        // time in ms that marker will take to reach its destination
        duration={1000}
        icon={icon}
      >
        <Popup>Bus-02</Popup>
      </ReactLeafletDriftMarker>
      <MyLocation />
    </MapContainer>
  );
};

function App() {
  const [gpsdata, setGpsdata] = useState([]);
  const socket = io('http://localhost:3000', { reconnectionAttempts: 5 });

  useEffect(() => {
    socket.emit('reply');
    socket.on('gpsdataforclients', (data) => {
      setGpsdata(JSON.parse(data));
    });
  }, [socket]);

  return (
    <div>
      <h3> lattitude : {gpsdata.lattitude}</h3>
      <h3> longitude : {gpsdata.longitude}</h3>
      <h3> busId : {gpsdata.busId}</h3>
    </div>
  );
}

export default App;
