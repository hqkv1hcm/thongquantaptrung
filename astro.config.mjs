import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://thongquantaptrung.com',
  base: '/ptpl', // Đường dẫn thư mục con thực tế
  outDir: './dist/ptpl', // <--- THÊM DÒNG NÀY VÀO ĐÂY
  server: {
    // Ép buộc máy chủ thử nghiệm cục bộ cũng phải chạy dưới đường dẫn /ptpl
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
});