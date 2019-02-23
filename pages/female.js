import Layout from "../components/Layout";
import MFTable from "../components/MFTable";
import axios from "axios";

const Female = ({ killers }) => (
  <Layout>
    <MFTable killers={killers} />
  </Layout>
);

Female.getInitialProps = async () => {
  const { data } = await axios.get("http://localhost:3001/killers/female");
  return {
    killers: data
  };
};

export default Female;
