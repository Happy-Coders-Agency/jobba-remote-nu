import { FunctionComponent } from "react";
import { JobListing } from "../models/job-listing";
import Link from "next/link";

type JobListingsProps = {
  jobs: JobListing[];
};

const JobListings: FunctionComponent<JobListingsProps> = (
  props: JobListingsProps
) => (
  <div>
    <div className="title has-text-centered">Latest jobs</div>
    <ul>
      {props.jobs.slice(0, 5).map(job => (
        <li key={job.id}>
          <Link href="/JobDetails/[id]" as={`/JobDetails/${job.id}`}>
            <a>{job.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/AllJobs"><a>Show all</a></Link>
  </div>
);

export default JobListings;
