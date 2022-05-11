import { format } from "date-fns";
export const VColumns = [
  {
    Header: "ID",
    id: "row",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "CUSTOMER",
    accessor: "user",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "VENDOR",
    accessor: "vendor",
  },
  {
    Header: "COMMENT",
    accessor: "comment",
    Cell: ({ value }) => String(value).slice(0, 25),
  },
  {
    Header: "RATE",
    accessor: "rate",
  },
  {
    Header: "ACTIONS",
  },
];

export const DColumns = [
  {
    Header: "ID",
    id: "row",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "CUSTOMER",
    accessor: "user",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "DELIVERY",
    accessor: "delivery",
  },
  {
    Header: "COMMENT",
    accessor: "comment",
    Cell: ({ value }) => String(value).slice(0, 25),
  },
  {
    Header: "RATE",
    accessor: "rate",
  },
  {
    Header: "ACTIONS",
  },
];

export const PColumns = [
  {
    Header: "ID",
    id: "row",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "CUSTOMER",
    accessor: "user",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "PRODUCT",
    accessor: "product",
  },
  {
    Header: "COMMENT",
    accessor: "comment",
    Cell: ({ value }) => String(value).slice(0, 25),
  },
  {
    Header: "RATE",
    accessor: "rate",
  },
  {
    Header: "ACTIONS",
  },
];

export const OColumns = [
  {
    Header: "ID",
    id: "row",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "CUSTOMER",
    accessor: "user",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "ORDER",
    accessor: "order",
  },
  {
    Header: "COMMENT",
    accessor: "comment",
    Cell: ({ value }) => String(value).slice(0, 25),
  },
  {
    Header: "RATE",
    accessor: "rate",
  },
  {
    Header: "ACTIONS",
  },
];
