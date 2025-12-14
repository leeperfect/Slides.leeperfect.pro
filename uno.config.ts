import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      audi: {
        red: '#FF1E1E',       // 奥迪竞速红
        darkRed: '#8a0000',   // 深红
        silver: '#D1D5DB',    // 浅银
        titanium: '#6B7280',  // 钛灰 (你代码里的核心颜色)
        graphite: '#374151',  // 石墨灰
        black: '#0A0A0A',     // 碳纤深黑
        cloud: '#F0EEE9',     // 云上舞白
        white: '#FFFFFF',
      }
    },
    fontFamily: {
      // 核心配置：MiSans 是老大
      sans: ['"MiSans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      // 你的 F1 数字字体
      display: ['Rajdhani', '"MiSans"', 'sans-serif'],
      
      
    },
    boxShadow: {
      'neon': '0 0 10px rgba(255, 30, 30, 0.6)', // 霓虹发光特效
      'float': '0 10px 30px -10px rgba(0, 0, 0, 0.5)', // 悬浮阴影
    }
  }
})