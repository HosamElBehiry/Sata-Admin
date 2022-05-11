import React from "react";

function DispLang({ title, fromProduct }) {
  return (
    <>
      {title && (
        <>
          {localStorage.getItem("i18nConfig") &&
          JSON.parse(localStorage.getItem("i18nConfig"))["selectedLang"] ===
            "ar"
            ? fromProduct
              ? title.ar.slice(0, 12)
              : title.ar
            : fromProduct
            ? title.en.slice(0, 12)
            : title.en}
        </>
      )}
    </>
  );
}

export default DispLang;
