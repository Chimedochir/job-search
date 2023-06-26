import { RouterLinkStub, mount } from "@vue/test-utils";
import JobListing from "@/components/JobSearch/JobListing";
describe("JobListing", () => {
  const createConfig=()=>({
    props:{
      job:{
        title:"Vue Developer"
      },
    },
    global:{
      stubs:{
        "router-link":RouterLinkStub,
      }
    }
  });
  it("renders job title", () => {
    const wrapper = mount(JobListing,createConfig());
    });
    expect(wrapper.test()).toMatch("Vue Developer");
  });
  it("renders job organization", () => {
    const wrapper = mount(JobListing, createConfig());

    expect(wrapper.test()).toMatch("AirBnB");
  });
});
