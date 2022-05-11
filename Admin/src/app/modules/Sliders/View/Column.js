import DispLang from "../../../../utils/HEADERS";
import { format } from "date-fns";
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
    Header: "ISMOBILE",
    accessor: "isMobile",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyy"),
  },
  {
    Header: "ACTIONS",
  },
];
