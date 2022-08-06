const fs = require("fs")
const path = require("path")

function joinPaths(...paths) {
  return paths.join("/")
}

function listFolders(rootDir) {
  return fs.readdirSync(rootDir).filter((item) => {
    const stats = fs.statSync(path.join(rootDir, item))
    return stats.isDirectory()
  })
}

function getModuleNameMapper({ sourceRoot = "", pathPrefix = "" }) {
  const pathNames = listFolders(sourceRoot)

  return Object.fromEntries(
    pathNames.map((pathName) => {
      const key = `^${pathPrefix}(${pathName})/(.*)`
      const value = joinPaths(`<rootDir>/${sourceRoot}`, "$1/$2")

      return [key, value]
    })
  )
}

module.exports = getModuleNameMapper
