import Layout from "../components/Layout";
import MFTable from "../components/MFTable";
import axios from "axios";

const Male = ({ killers }) => (
  <Layout>
    <MFTable killers={killers} />
  </Layout>
);

Male.getInitialProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return {
    killers: data
  };
};

export default Male;
