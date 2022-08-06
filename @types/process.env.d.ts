/**
 * @fileoverview Declare known environment variables for auto-completion when using "process.env".
 * @see https://stackoverflow.com/a/53981706/2391795
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
      PRODUCTION_BROWSER_SOURCE_MAPS?: string | undefined
    }
  }
}

/**
 * @desc To make this type declaration file work, it needs to be a valid module.
 * Adding an empty export is a trick to meet that requirement.
 */
export {}
