import VConsole from 'vconsole'
const vConsole = process.env.base_env === 'prod' ? '' : new VConsole()
export default vConsole
