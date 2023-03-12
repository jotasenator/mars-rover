import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  iso639_1: string;
  customClass: string;
  flagIcon: any;
}

export const CustomButton: FC<Props> = ({
  flagIcon,
  iso639_1,
  customClass,
}) => {
  const { i18n } = useTranslation("global");
  const [lang, setLang] = useState<Props["iso639_1"]>(iso639_1);

  const handleAction = () => {
    setLang(iso639_1);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <button type="button" className={customClass} onClick={handleAction}>
        {flagIcon}
      </button>
    </>
  );
};
