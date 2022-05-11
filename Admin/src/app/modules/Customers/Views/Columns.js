import { format } from "date-fns";
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
    Header: "FULLNAME",
    accessor: "fullname",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "EMAIL",
    accessor: "email",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },

  {
    Header: "ACTIONS",
  },
];
