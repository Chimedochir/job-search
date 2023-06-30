import { FETCH_JOBS, RECEIVE_JOBS, ACTIONS_EXAMPLE } from "@/store/constants";
import getJobs from "@/api/getJobs";

const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
  [ACTIONS_EXAMPLE]: async (context) => {
    const jobLising = await getJobs();
    context.commit(RECEIVE_JOBS, jobLising);
  },
};
export default actions;
