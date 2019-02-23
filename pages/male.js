import Layout from "../components/Layout";
import MFTable from "../components/MFTable";
import axios from "axios";

const Male = ({ killers }) => (
  <Layout>
    <MFTable killers={killers} />
  </Layout>
);

Male.getInitialProps = async () => {
  const { data: killers } = await axios.get(
    "http://localhost:3001/killers/male"
  );
  return {
    killers
  };
};

export default Male;
