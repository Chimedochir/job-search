import usePreviousAndNextPages from "@/composable/usePreviousAndNextPages";
describe("usePreviousNextPages",()=>{
  it("calcullates page before current one",()=>{
    const currentPage={value:8};
    const maxPage={value:10};
    const {previousPage}=usePreviousAndNextPages(currentPage,maxPage)
expect(previousPage.value).toBe(7);
  })
})