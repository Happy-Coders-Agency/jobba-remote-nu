import Layout from "../../components/layout";
import { JobListing } from '../../models/job-listing';
import { NextPage, NextPageContext } from 'next';
import { isArray } from 'util';
import fetch from 'isomorphic-unfetch';

type Props = {
    job?: JobListing;
};

const JobDetails: NextPage<Props> = (props: Props) => (
    <Layout>
        <h1 className="title">{props.job ? props.job.title : ''}</h1>
        <div className="section">
            <p>{props.job ? props.job.description : ''}</p>
        </div>
    </Layout>
);

JobDetails.getInitialProps = async (ctx: NextPageContext) => {
    const {id} = ctx.query;
    const jobId = isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);
    const res = await fetch("https://us-central1-hca-web-static.cloudfunctions.net/fn-jrn-latest-jobs");
    const data: JobListing[] = await res.json();
    
    const job = data.find(j => j.id === jobId);

    return {job: job};
}

export default JobDetails;