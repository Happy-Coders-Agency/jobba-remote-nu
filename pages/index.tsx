import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";
import JobListings from "../components/JobListings";
import NewsListings from "../components/NewsListings";


const Home = () => (
  <Layout title="jobbaremote.nu">
    <SearchForm />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-2">
            <JobListings/>
          </div>
          <div className="column is-4">
              <NewsListings/>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
