import { store } from "../redux/store.jsx";
import { provider } from "react-redux";
import { useGetAllJobsQuery } from "@/services/api.js";

const JobList = ({ job: any }) => {
  const { Job, isLoading, isError } = useGetAllJobsQuery();
  console.log(res);

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return
  (<div>
    {Job?.jobs.map((j) => (
      <h1 key={j.id}>{j.title}</h1>
    ))}
  </div>)
}9
export default JobList;
