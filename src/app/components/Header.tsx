import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import i8next from "i18next";

function Header() {
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i8next.changeLanguage(event.target.value);
  };

  return (
    <header className="app_header">
      <div className="lang_selector">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">
              {t("Language")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Region"
              onChange={handleChange}
            >
              <MenuItem value={"en"}>
                <div className="lngitm">
                  <img src="/en.png" alt="en" width={20} height={20} />{" "}
                  <span>En</span>
                </div>
              </MenuItem>
              <MenuItem value={"np"}>
                <div className="lngitm">
                  <img src="/np.png" alt="np" width={20} height={20} />{" "}
                  <span>नेप</span>
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="title">
        <h1>{t("app_title")}</h1>
      </div>
    </header>
  );
}

export default Header;
