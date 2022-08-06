import dotenv from "dotenv"

// XXX Unlike what could be expected, once an ENV var is found by dotenv, it
//  won't be overridden So, the order must be from the most important to the
//  less important See
//  https://github.com/motdotla/dotenv/issues/256#issuecomment-598676663
dotenv.config({ path: ".env.local" })

dotenv.config({ path: ".env.test" })

dotenv.config({ path: ".env" })

// Backup of the native console object for later re-use
global._console = global.console

// Force mute console by returning a mock object that mocks the props we use
global.muteConsole = () => ({
  debug: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  log: jest.fn(),
  warn: jest.fn(),
})

// Force mute console by returning a mock object that mocks the props we use,
// except for "log"
global.muteConsoleButLog = () => ({
  debug: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  // eslint-disable-next-line @typescript-eslint/unbound-method
  log: global._console.log,
  warn: jest.fn(),
})

// Restore previously made "console" object
global.unmuteConsole = () => global._console

export {}
