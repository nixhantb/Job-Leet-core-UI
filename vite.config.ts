import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mui/x-date-pickers': '@mui/x-date-pickers',
      '@mui/material': '@mui/material',
    },
  },
})
