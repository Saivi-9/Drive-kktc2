## Prerequisites
- Node.js v18+
- pnpm (`npm install -g pnpm`)

## Setup
1. Clone the repo
2. In the root folder, run:
   pnpm install
   pnpm add @rollup/rollup-win32-x64-msvc @tailwindcss/oxide-win32-x64-msvc lightningcss-win32-x64-msvc --filter @workspace/drive-kktc
3. Run the app:
   pnpm --filter @workspace/drive-kktc run dev
4. Open http://localhost:5173