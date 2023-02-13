import React, { useState, useEffect } from 'react';
import './IpAddress.css';

const IpAddress = ({ type }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {

      let ip = '';
      if (type === 'ipv4') {
        const response = await fetch(`https://api.ipify.org?format=json`);
        const result = await response.text();
        ip = JSON.parse(result.replace('callback(', '').replace(');', '')).ip;
      } else {
        const response = await fetch(`https://api64.ipify.org?format=json`);
        const result = await response.text();
        ip = JSON.parse(result.replace('callback(', '').replace(');', '')).ip;
      }
      setIpAddress(ip);
    };

    fetchIpAddress();
  }, [type]);

  return (
    <div className="ip-address">
      <p className="ip-address-label">
        Your public {type === 'json' ? 'IPv4' : 'IPv6'} address is:
      </p>
      <p className="ip-address-value">{ipAddress}</p>
    </div>
  );
};

export default IpAddress;
