let head = document.getElementsByTagName("head")[0];
let link = document.createElement("link");
if (
  localStorage.getItem("i18nConfig") &&
  JSON.parse(localStorage.getItem("i18nConfig"))["selectedLang"] === "ar"
) {
  document.getElementById("kt_body").dir = "rtl";
  document.getElementById("kt_body").direction = "rtl";
  document.getElementById("kt_body").style.direction = "rtl";
  link.rel = "stylesheet";
  link.href = "/css/style.react.rtl.css";
  link.type = "text/css";
  link.media = "all";
  head.appendChild(link);
} else {
  document.getElementById("kt_body").dir = "ltr";
  document.getElementById("kt_body").direction = "ltr";
  document.getElementById("kt_body").style.direction = "ltr";
  link.rel = "stylesheet";
  link.href = "/css/style.react.css";
  link.type = "text/css";
  link.media = "all";
  head.appendChild(link);
}
