import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  iso639_1: string;
  customClass: string;
  flagIcon: any;
}

export const CustomI18nButton: FC<Props> = ({
  flagIcon,
  iso639_1,
  customClass,
}) => {
  const { i18n } = useTranslation("global");

  const handleAction = () => {
    i18n.changeLanguage(iso639_1);
  };

  return (
    <>
      <button type="button" className={customClass} onClick={handleAction}>
        {flagIcon}
      </button>
    </>
  );
};
