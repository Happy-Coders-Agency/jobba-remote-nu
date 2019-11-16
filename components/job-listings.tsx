import { FunctionComponent } from "react";
import { JobListing } from "../models/job-listing";
import Link from "next/link";

type JobListingsProps = {
  jobs: JobListing[];
};

const layoutStyle = {
  backgroundColor: "#E0E0E0",
  padding: "10px",
  borderRadius: "3px"
};

const JobListings: FunctionComponent<JobListingsProps> = (
  props: JobListingsProps
) => (
  <div style={layoutStyle}>
    <div className="title has-text-centered">Latest jobs</div>
    <ul>
      {props.jobs.slice(0, 5).map(job => (
        <li key={job.id}>
          <Link href="/job-details/[id]" as={`/job-details/${job.id}`}>
            <a>{job.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <div className="has-text-right">
      <Link href="/all-jobs"><a>Show all</a></Link>
    </div>
  </div>
);

export default JobListings;
