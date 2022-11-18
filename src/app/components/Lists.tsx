import Empty from "./Empty";
import WeatherCard from "./WeatherCard";

interface props {
  data: Ires[];
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
        data.map((d, i) => <WeatherCard key={i} />)
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Lists;
