import { format } from "date-fns";
import DispLang from "../../../../../utils/HEADERS";
export const Columns = [
  {
    Header: "ID",
    id: "row",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "IMAGE",
    accessor: "image",
  },
  {
    Header: "NAME",
    accessor: DispLang ? "country.ar" : "country.en",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },

  {
    Header: "ACTIONS",
  },
];
