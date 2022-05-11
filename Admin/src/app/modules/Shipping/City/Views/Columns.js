import { format } from "date-fns";
import DispLang from "../../../../../utils/HEADERS";
export const Columns = [
  {
    Header: "ID",
    id: "row",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "NAME",
    accessor: DispLang ? "city.ar" : "city.en",
  },
  {
    Header: "COUNTRY",
    accessor: DispLang ? "country.country.ar" : "country.country.en",
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
