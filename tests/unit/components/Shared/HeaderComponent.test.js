import { mount } from "@/vue/test-utils";
import HeaderContainer from "@/components/Shared/HeaderContainer";
describe("HeaderComponent", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h1>Some title</h1>",
      },
    });
    expect(wrapper.text()).toMatch("Some title");
  });
});
