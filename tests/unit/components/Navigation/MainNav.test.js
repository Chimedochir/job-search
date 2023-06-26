import { mount, shallowMount } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";
describe("MainNav", () => {
  it("display company name", () => {
    const wrapper = mount(MainNav);

    console.log(wrapper.text());
    expect(wrapper.text()).toMatch("Bobo Careers");
  });
  it("displays menu items for navigatioin", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll("li");
    console.log(navigationMenuItems);

    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    console.log(navigationMenuTexts);

    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Location",
      "Life at Bobo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("logged out", () => {
    it("User sign out", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.findComponent({ name: "ActionButton" });
      expect(loginButton.exists()).toBe(true);
    });
  });
  describe("logged in", () => {
    it("User sign in ", async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    it("displays subnavigation menu with additional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
