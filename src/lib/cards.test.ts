import { describe, it, expect } from "vitest";
import { card } from "./cards";

describe("Test Card", ()=>{
    it("Check behavor when 0 projects", ()=>{
        let cardToTest = new card("", "", "", 0)
        expect(cardToTest.Count).toBe("Comming Soon...")
    })
    it("Check behavor when 1 projects", ()=>{
        let cardToTest = new card("", "", "", 1)
        expect(cardToTest.Count).toBe("There is 1 project")
    })
    it("Check behavor when 1+ projects", ()=>{
        let cardToTest = new card("", "", "", 2)
        expect(cardToTest.Count).toBe("There are 2 projects")
    })
})
