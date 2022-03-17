import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    base: '/oms/',
    'resolve': {
        'alias': {
            '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    }
})
