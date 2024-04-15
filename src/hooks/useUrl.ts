import * as React from 'react';
import * as Network from 'expo-network';

const useUrl = () => {
  //   const ipv4 = await Network.getIpAddressAsync();
  const ipv4 = '192.168.211.160';

  return `http://${ipv4}:3000/`;
};

export default useUrl;
