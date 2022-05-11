/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers";
import { FormattedMessage } from "react-intl";
export function DropdownMenu2() {
  return (
    <ul className="navi navi-hover">
      <li className="navi-item" onClick={() => window.print()}>
        <a href="#" className="navi-link">
          <span className="navi-icon">
            <SVG src={toAbsoluteUrl("/media/svg/files/pdf.svg")}></SVG>
          </span>
          <span className="navi-text ml-2">
            <FormattedMessage id="BUTTON.PDF" />
          </span>
        </a>
      </li>
      <li className="navi-item" onClick={() => exportTableToCSV("members.csv")}>
        <a href="#" className="navi-link">
          <span className="navi-icon">
            <SVG src={toAbsoluteUrl("/media/svg/files/csv.svg")}></SVG>
          </span>
          <span className="navi-text ml-2">
            <FormattedMessage id="BUTTON.CSV" />
          </span>
        </a>
      </li>
    </ul>
  );
}

function exportTableToCSV(filename) {
  var csv = [];
  var rows = document.querySelectorAll("table tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [],
      cols = rows[i].querySelectorAll("td, th");

    for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);

    csv.push(row.join(","));
  }

  // Download CSV file
  downloadCSV(csv.join("\n"), filename);
}

function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;
  csvFile = new Blob([csv], { type: "text/csv" });
  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
}
