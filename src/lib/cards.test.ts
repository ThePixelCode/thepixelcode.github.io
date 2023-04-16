import { describe, it, expect } from "vitest";
import { Card } from "./cards";
import { ProjectLanguajes } from "./project";

describe("Test Card", ()=>{
    it("Check localization with different numbers", ()=>{
        let cardToTest = new Card(ProjectLanguajes.Rust)
        cardToTest.count = 0
        expect(cardToTest.getCountAsString()).toBe("Comming Soon...")
        cardToTest.count = 1
        expect(cardToTest.getCountAsString()).toBe("There is 1 project")
        cardToTest.count = 5
        expect(cardToTest.getCountAsString()).toBe("There are 5 projects")
    })
    it("Test beheavor of count", ()=>{
        let cardToTest = new Card(ProjectLanguajes.Rust)
        cardToTest.count = 0
        expect(cardToTest.count).toBe(0)
        cardToTest.count = 1
        expect(cardToTest.count).toBe(1)
        cardToTest.count = -1
        expect(cardToTest.count).toBe(0)
    })
})
