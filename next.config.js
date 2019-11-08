const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const fetch = require('isomorphic-unfetch');

const nextConfig = {
    exportPathMap: async function() {
      const paths =  {
        '/': { page: '/' },
        '/all-jobs': { page: '/all-jobs' },
      };

      const res = await fetch("https://us-central1-hca-web-static.cloudfunctions.net/fn-jrn-latest-jobs");
      const jobs = await res.json();
  
      jobs.forEach(job => {
          paths[`/job-details/${job.id}`] = { page: '/job-details/[id]', query: { id: job.id } };
      });

      return paths;
    }
  };

module.exports = withPlugins([withSass], nextConfig);