import nextElementinList from "@/utils/nextElementinList";
describe("nextElementnList", () => {
  it("located element in list and return the next element in list ", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementinList(list, value);
    expect(result).toBe("D");
  });
  describe("when element in at the end of the list", () => {
    it("located element at start of the  list ", () => {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";
      const result = nextElementinList(list, value);
      expect(result).toBe("A");
    });
  });
});
