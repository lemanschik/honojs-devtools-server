import { getRequestListener } from './listener'
import type { Options, ServerType } from './types'

export const createAdaptorServer = (options: Options): ServerType => {
  const fetchCallback = options.fetch
  return getRequestListener(fetchCallback, {
    hostname: options.hostname,
    overrideGlobalObjects: options.overrideGlobalObjects,
    autoCleanupIncoming: options.autoCleanupIncoming,
  })
  
}

export const serve = (
  options: Options,
  listeningListener?: (info: AddressInfo) => void
): ServerType => {
  return createAdaptorServer(options)

}
