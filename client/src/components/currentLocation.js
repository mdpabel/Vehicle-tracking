import { useLocation } from '../hooks/useLocation';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const ZOOMLEVEL = 17;

function MyLocation() {
  const { isSuccess, data } = useLocation();
  console.log(data, isSuccess);

  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      if (isSuccess) {
        map.flyTo([data.latitude, data.longitude], ZOOMLEVEL, {
          duration: 3,
          animate: true,
        });
      }
    }, 1000);
  }, [data.latitude, data.longitude, isSuccess, map]);

  return null;
}

export default MyLocation;
