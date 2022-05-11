import { format } from "date-fns";
export const Columns = [
  {
    Header: "ID",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "VENDOR",
    accessor: " ",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "RATES",
    accessor: "rate.value",
    Cell: ({ value }) => Number(value),
  },
  {
    Header: "STATUS",
    accessor: "__",
  },

  {
    Header: "ACTION",
  },
];
