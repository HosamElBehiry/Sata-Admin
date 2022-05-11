import DispLang from "../../../../utils/HEADERS";
export const column = [
  {
    Header: "ID",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "IMAGE",
    accessor: "image",
  },
  {
    Header: "TITLE",
    accessor: DispLang ? "title.ar" : "title.en",
  },
  {
    Header: "ISACTIVE",
    accessor: "isActive",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "SHOWINHOME",
    accessor: "showInHome",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "STARTDATE",
    accessor: "startDate",
    // Cell: ({ value }) => format(new Date(value), "dd/MM/yyy"),
  },
  {
    Header: "ENDDATE",
    accessor: "endDate",
    // Cell: ({ value }) => format(new Date(value), "dd/MM/yyy"),
  },
  {
    Header: "ACTIONS",
  },
];
