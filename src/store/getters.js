import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS,
} from "@/store/constants";
const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },

  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },

  [FILTERED_JOBS](state) {
    const noSelectedOrganizations = state.selectedOrganizations.length === 0;
    const noSelectedJobTypes = state.selectedJobTypes.length === 0;

    return state.jobs
      .filter((job) => {
        if (noSelectedOrganizations) return true;
        return state.selectedOrganizations.includes(job.organization);
      })

      .filter((job) => {
        if (noSelectedJobTypes) return true;
        return state.selectedJobTypes.includes(job.jobType);
      });
  },
  // [INCLUDE_JOB_BY_ORGANIZATION]: (state) => (job) => {
  //   if (state.selectedOrganizations.length === 0) return true;
  //   return state.selectedOrganizations.includes(job.organization);
  // },
  // [INCLUDE_JOB_BY_JOB_TYPE]: (state) => (job) => {
  //   if (state.selectedJobTypes.length === 0) return true;
  //   return state.selectedJobTypes.includes(job.jobType);
  // },
  // [FILTERED_JOBS](state, getters) {
  //   return state.jobs
  //     .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
  //     .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job));
  // },
};
export default getters;
