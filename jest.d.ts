import "@testing-library/jest-dom"

/**
 * Enhance the Node.js environment "global" variable to add our own types
 *
 * @see https://stackoverflow.com/a/42304473/2391795
 */
declare global {
  function muteConsole(): any
  function muteConsoleButLog(): any
  function unmuteConsole(): any

  var _console: Console
}

export {}
