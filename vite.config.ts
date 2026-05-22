import {reactRouter} from "@react-router/dev/vite";
import {defineConfig} from "vite";
import devtoolsJson from 'vite-plugin-devtools-json'
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
    plugins: [tailwindcss(),
        , devtoolsJson(), reactRouter(), tsconfigPaths()],
});
