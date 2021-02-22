import { checkImageUrlExtension } from "./extensions"

describe("Extensions Utils", () => {
  describe("checkImageUrlExtension", () => {
    it("returns url extension", () => {
      expect(checkImageUrlExtension("kUgT73SAawl5udid0DPA/2019-03-30-f-.jpg")).toBeTruthy();
    });
  });
});