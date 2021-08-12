export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Capital",
    accessor: "capital",
  },
  {
    Header: "Region",
    accessor: "region",
  },
  {
    Header: "Flag",
    accessor: "flag",
    Cell: props => (
      <img
        src={props.row.original.flag}
        width={100}
        style={{border:'3px solid #000'}}
        alt={props.row.original.name}
      />
    )
  },
];