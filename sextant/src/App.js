import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import IpAddress from "./components/IpAddress";
import PacketLatency from "./components/PacketLatency";

function App() {
  return (
    <div>
      <Banner title="Sextant Dashboard" />
      <Exhibit heading="IP Stats">
        <IpAddress type="ipv4" />
        <IpAddress type="ipv6" />
        <PacketLatency />
      </Exhibit>{" "}
    </div>
  );
}

export default App;
