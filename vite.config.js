/** @format */

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                en: "en/index.html",
                enAbout: "en/about/index.html",
                zhHant: "zh-Hant/index.html",
                zhHantAbout: "zh-Hant/about/index.html",
            },
        },
    },
});
