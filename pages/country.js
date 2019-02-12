import Layout from "../components/Layout";
import axios from "axios";
import Link from "next/link";

const Country = ({ countries }) => (
  <Layout>
    <div>
      <table>
        <thead>
          <tr>
            <th />
            <th>Country</th>
            <th>Killers</th>
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country.name}>
              <td>
                <img
                  src={`https://www.countryflags.io/${
                    country.alpha2Code
                  }/flat/24.png`}
                />
              </td>
              <td>
                <Link href={`/country/${country.name}`}>
                  <a>{country.name}</a>
                </Link>
              </td>
              <td>{country.name.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Layout>
);

export default Country;

Country.getInitialProps = async () => {
  const { data } = await axios.get(
    "https://restcountries.eu/rest/v2/all?fields=name;alpha2Code"
  );

  return { countries: data };
};
