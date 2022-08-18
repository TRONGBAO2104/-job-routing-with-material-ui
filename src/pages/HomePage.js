import { Grid } from "@mui/material";
import React from "react";
import JobCard from "../components/JobCard";
import jobs from "../jobs.json";
import Pagination from "../components/Pagination";

function HomePage() {
  return (
    <>
      <Grid container spacing={2} mt={1}>
        {jobs.map((job) => (
          <Grid key={job.id} item xs={6} md={4} lg={3}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Pagination />
    </>
  );
}

export default HomePage;
