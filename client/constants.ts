import Constants from 'expo-constants'
import url from 'url'

const debuggerHost = url.parse(`http://${Constants.manifest.debuggerHost}`)
export const serverUrl = `http://${debuggerHost.hostname}:4000`
