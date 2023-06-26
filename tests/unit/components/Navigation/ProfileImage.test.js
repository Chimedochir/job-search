import { shallowMount } from "@vue/test-utils";
import ProfileImage from "./../../../src/components/Navigation/ProfileImage";
describe("ProfileImage", () => {
  it("render", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
