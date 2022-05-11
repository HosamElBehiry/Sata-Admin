import { format } from "date-fns";

export const Columns = [
  {
    Header: "ID",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "VENDOR",
    accessor: "vendor",
  },
  {
    Header: "PRODUCT",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "STATE",
    accessor: "deliverdToSata",
  },
  {
    Header: "MONEY",
    accessor: "money",
  },
];
