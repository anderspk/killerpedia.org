import Link from "next/link";

export default props => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Victims</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {props.killers.map(killer => (
          <tr key={killer.id}>
            <td>
              <Link
                as={`/killer/${killer.slug}`}
                href={`/killer?slug=${killer.slug}`}
              >
                <a>{killer.name}</a>
              </Link>
            </td>
            <td>{killer.date_of_murders}</td>
            <td>{killer.number_of_victims}</td>
            <td>{killer.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <style jsx>{`
      table,
      td,
      th {
        border: 1px solid black;
      }

      table {
        border-collapse: collapse;
        margin: 0 auto;
      }

      a {
        text-decoration: none;
      }
    `}</style>
  </div>
);
