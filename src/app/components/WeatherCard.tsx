import { Card } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface props {
  city: string;
  degree: number;
  icon: string;
}

function WeatherCard({ city, degree, icon }: props) {
  return (
    <Card variant="outlined">
      <div className="weather_card">
        <div className="city">
          <div>
            <PlaceIcon />
            <h3>{city}</h3>
          </div>
          <strong>{Math.ceil(degree)}°C </strong>
        </div>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
        <span className="close">
          <HighlightOffIcon />
        </span>
      </div>
    </Card>
  );
}

export default WeatherCard;
