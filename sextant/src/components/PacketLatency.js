import React, { useState, useEffect } from 'react';
import './PacketLatency.css';
import ReconnectingWebSocket from 'reconnecting-websocket';

const PacketLatency = () => {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const socket = new ReconnectingWebSocket('ws://localhost:55455');
    console.log("Socket", socket)

    socket.addEventListener('message', (event) => {
      const packetTimestamp = JSON.parse(event.data);
      if (!isNaN(packetTimestamp)) {
        const currentTime = new Date().getTime();
        setLatency(currentTime - packetTimestamp);
      }
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="packet-latency">
      <p className="packet-latency-label">Packet Latency:</p>
      <p className="packet-latency-value">{latency}ms</p>
    </div>
  );
};

export default PacketLatency;
