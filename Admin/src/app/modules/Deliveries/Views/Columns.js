import { format } from "date-fns";
export const Columns = [
  {
    Header: "ID",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "DELIVERY",
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
    Cell: ({ value }) => Number(value),
  },
  {
    Header: "STATUS",
    accessor: "__",
  },
  {
    Header: "INORDER",
    accessor: "inOrder",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "ACTIONS",
  },
];
