import { format } from "date-fns";
export const COLUMN = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "CUSTOMERNAME",
    accessor: "customer.fullname",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "ADDRESS",
    accessor: "order.address",
  },
  {
    Header: "PAID",
    accessor: "order.is_paid",
    Cell: ({ value }) => String(value),
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "ACTIONS",
  },
];
