const getModuleNameMapper = require("./tools/jest/module-name-mapper")

const config = {
  preset: "ts-jest",
  globals: { "ts-jest": { tsconfig: "tsconfig.json" } },
  transform: { ".(ts|tsx)": "ts-jest" },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: getModuleNameMapper({
    sourceRoot: "src",
    pathPrefix: "@/",
  }),
  passWithNoTests: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
}

module.exports = config
