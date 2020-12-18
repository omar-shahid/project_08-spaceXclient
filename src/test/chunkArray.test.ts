import { chunkArray } from "../utils/chunkArray";

describe("Testing \"Chunk Array\" utility function", () => {
  test("works correctly with single level elements", () => {
    const arr = [1,2,3,4,5,6]
    const chunkedArr = chunkArray(arr, 2);
    expect(chunkedArr).toStrictEqual([[1,2],[3,4],[5,6]])
  })

  test("works correctly with nested elements", () => {
    const arr = [[1,2],[3,4],[5,6],[7,8]]
    const chunkedArr = chunkArray(arr, 2);
    expect(chunkedArr).toStrictEqual([[[1,2],[3,4]],[[5,6], [7,8]]])
  })
})