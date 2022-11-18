import { Card } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function WeatherCard() {
  return (
    <Card variant="outlined">
      <div className="weather_card">
        <div className="city">
          <div>
            <PlaceIcon />
            <h3>Kathmandu</h3>
          </div>
          <strong>24^F</strong>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2022/11/01/08/43/mountains-7561636_1280.png"
          alt=""
        />
        <span className="close">
          <HighlightOffIcon />
        </span>
      </div>
    </Card>
  );
}

export default WeatherCard;
