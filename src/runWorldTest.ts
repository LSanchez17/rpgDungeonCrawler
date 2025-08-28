// Simple script to run the world creation test
import { testWorldCreation } from "./test/worldCreationTest";

console.log("Running World Creation Library Test...\n");

try {
    testWorldCreation();
} catch (error) {
    console.error("Error running test:", error);
}