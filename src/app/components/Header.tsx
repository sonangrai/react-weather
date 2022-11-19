import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "2em",
      }}
    >
      <h1>{t("app_title")}</h1>
    </div>
  );
}

export default Header;
