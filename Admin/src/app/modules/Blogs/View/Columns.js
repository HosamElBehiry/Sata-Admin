import { format } from "date-fns";
import DispLang from "../../../../utils/HEADERS";
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
    Header: "TITLE",
    accessor: DispLang ? "title.ar" : "title.en",
  },
  {
    Header: "DESCRIPTION",
    accessor: DispLang ? "description.ar" : "description.en",
    Cell: ({ value }) => String(value).slice(0, 16),
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
