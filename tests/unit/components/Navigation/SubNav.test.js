import { shallowMount } from "@vue/test-utils";
import SubNav from "./../../../src/components/Navigation/SubNav";
// import { faBedPulse } from "@fortawesome/free-solid-svg-icons";

describe("Subnav", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("when user is on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";
      const wrapper = shallowMount(SubNav, createConfig(routeName));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("when user is not on job page", () => {
    it("does not displays job count", () => {
      const routeName = "Home";

      const wrapper = shallowMount(SubNav, createConfig(routeName));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
});
