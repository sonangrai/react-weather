import Chip from "@mui/material/Chip";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface props {
  msg?: string;
}

function Error({ msg }: props) {
  if (!msg) return null;
  return (
    <div
      style={{
        margin: "1em 0",
      }}
    >
      <Chip label={msg} color="error" icon={<ErrorOutlineIcon />} />
    </div>
  );
}

export default Error;
