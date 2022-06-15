import { useState, useEffect } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState({
    isSuccess: false,
    isError: false,
    data: {
      latitude: null,
      longitude: null,
    },
    error: {
      message: '',
    },
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success({ coords }) {
    setLocation({
      ...location,
      data: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
      isSuccess: true,
    });
  }

  function error(err) {
    setLocation({
      ...location,
      error: {
        message: err.message,
      },
      isError: true,
    });
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      error({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    window.navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  console.log(location.data);

  return {
    data: location.data,
    error: location.error,
    isSuccess: !!location.data.latitude,
    location,
  };
};

export { useLocation };
