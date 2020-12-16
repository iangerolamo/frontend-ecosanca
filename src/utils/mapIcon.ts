import Leaftlet from 'leaflet';
import mapMarkerImg from '../assets/yellowLogo.png';

const mapIcon = Leaftlet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default mapIcon;
