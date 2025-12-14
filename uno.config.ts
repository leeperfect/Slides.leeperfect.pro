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
      // 1. 定义正文默认字体 (Sans)：优先用思源黑体，没有就用系统黑体
    sans: ['"Noto Sans SC"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    
    // 2. 定义衬线字体 (Serif)：用于申论材料
    serif: ['"Noto Serif SC"', 'ui-serif', 'Georgia', 'serif'],
    
    // 3. 定义标题/展示字体 (Display)：用于大标题
    // 这里设置只要用了 font-display，就会用最粗的黑体
    display: ['"Noto Sans SC"', 'ui-sans-serif'],
      // 如果你电脑没装 Rajdhani，它会自动回退到 sans
      
    },
    boxShadow: {
      'neon': '0 0 10px rgba(255, 30, 30, 0.6)', // 霓虹发光特效
      'float': '0 10px 30px -10px rgba(0, 0, 0, 0.5)', // 悬浮阴影
    }
  }
})