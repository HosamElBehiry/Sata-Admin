import { format } from "date-fns";
import DispLang from "../../../../utils/HEADERS";
export const Columns = [
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
    Header: "CATEGORY",
    accessor: " ",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "RATE",
    accessor: "rate.value",
  },
  {
    Header: "STATUS",
    accessor: "isApproved",
    Cell: ({ value }) => String(value),
  },

  {
    Header: "ACTIONS",
  },
];
