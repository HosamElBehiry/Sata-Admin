import { format } from "date-fns";
export const Columns = [
  {
    Header: "ID",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "WORKER",
    accessor: " ",
  },
  {
    Header: "CREATEDAT",
    accessor: "user.createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "VENDOR",
    accessor: "__",
  },
  {
    Header: "STATUS",
    accessor: "user.status",
  },

  {
    Header: "ACTIONS",
  },
];
