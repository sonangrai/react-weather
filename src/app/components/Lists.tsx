import Empty from "./Empty";
import WeatherCard from "./WeatherCard";

interface props {
  data: Idata[];
}

function Lists({ data }: props) {
  return (
    <div
      style={{
        margin: "2em 0",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
    >
      {data.length > 0 ? (
        data.map((d, i) => (
          <WeatherCard key={i} city={d.city} degree={d.degree} icon={d.icon} />
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Lists;
