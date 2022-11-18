import { Card } from "@mui/material";

function Empty() {
  return (
    <Card variant="outlined">
      <div
        style={{
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Its Empty Here
      </div>
    </Card>
  );
}

export default Empty;
