import WeatherCard from "./WeatherCard";

function Lists() {
  return (
    <div
      style={{
        margin: "2em 0",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
    >
      {[...Array(4)].map((d, i) => (
        <WeatherCard key={i} />
      ))}
    </div>
  );
}

export default Lists;
