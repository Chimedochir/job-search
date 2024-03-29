import { mount } from "@vue/test-utils";
import HeadLine from "@/components/HeadLine";
import { nextTick } from "vue";
describe("HeadLine", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it("display inroductory actioin verb", () => {
    const wrapper = mount(HeadLine);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });
  it("changes action erb at a consistent interval", () => {
    mount(HeadLine);
    expect(setInterval).toHaveBeenCalled();
  });
  it("swaps action verb after first interval", async () => {
    const wrapper = mount(HeadLine);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });
  it("removes interval when component disappers", () => {
    const wrapper = mount(HeadLine);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
