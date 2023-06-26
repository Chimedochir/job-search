import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton";
describe("ActionButton", () => {
  it("render text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I'm so clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toBe("I'm so clickable");
  });
  it("applies one of severl styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
