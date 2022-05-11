import DispLang from "../../../../../utils/HEADERS";
export const Columns = [
  {
    Header: "ID",
    id: "row",
    accessor: (_row, i) => i + 1,
  },
  {
    Header: "REGION",
    accessor: DispLang ? "region.ar" : "region.en",
  },
  {
    Header: "COUNTRY",
    accessor: DispLang ? "countryId.country.ar" : "countryId.country.en",
  },
  {
    Header: "CITY",
    accessor: DispLang ? "cityId.city.ar" : "cityId.city.en",
  },
  {
    Header: "PRICE",
    accessor: "price",
  },
  {
    Header: "ACTIONS",
  },
];
