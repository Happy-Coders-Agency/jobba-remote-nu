import { JobListing } from "../models/job-listing";
import { NextPage, NextPageContext } from "next";
import Layout from "../components/layout";
import fetch from 'isomorphic-unfetch';

interface Props {
  jobs: JobListing[];
};

const AllJobs: NextPage<Props> = (props: Props) => (
  <Layout>
    <article className="panel is-active">
      <p className="panel-heading">All jobs</p>
      {props.jobs.map(job => (
          <a className="panel-block" key={job.id}>
            <h6 className="title">{job.title}</h6>
            <div className="container">
                <div className="content">
                    <p>{job.description}</p>
                </div>
            </div>
          </a>
      ))}
    </article>
  </Layout>
);

AllJobs.getInitialProps = async (ctx: NextPageContext) => {
  console.log(JSON.stringify(ctx));
  const res = await fetch(
    "https://us-central1-hca-web-static.cloudfunctions.net/fn-jrn-latest-jobs"
  );
  const data = await res.json();

  return {
    jobs: data
  };
};

export default AllJobs;
