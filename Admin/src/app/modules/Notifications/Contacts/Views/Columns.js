export const Columns = [
  {
    Header: " ",
  },
  {
    Header: "ID",
    id: "index",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "SUBJECT",
    accessor: "subject",
  },
  {
    Header: "EMAIL",
    accessor: "email",
  },
  {
    Header: "CREATEDAT",
    accessor: "createdAt",
  },
  {
    Header: "MESSAGE",
    accessor: "message",
    Cell: ({ value }) => String(value).slice(0, 30),
  },
  {
    Header: "ACTIONS",
  },
];
