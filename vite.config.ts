import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite"
import path from "path";
import runableAnalyticsPlugin from "./vite/plugins/runable-analytics-plugin";

// workerd (Cloudflare dev) has no binary for Windows ARM64; skip plugin so `vite` can run locally.
const cloudflareDevSupported =
	process.env.VITE_SKIP_CLOUDFLARE !== "1" &&
	!(process.platform === "win32" && process.arch === "arm64");

export default defineConfig(async () => {
	const plugins: PluginOption[] = [react(), runableAnalyticsPlugin()];

	if (cloudflareDevSupported) {
		const { cloudflare } = await import("@cloudflare/vite-plugin");
		plugins.push(cloudflare());
	}
	plugins.push(tailwind());

	return {
		plugins,
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src/web"),
			},
		},
		server: {
			allowedHosts: true,
			hmr: { overlay: false, }
		}
	};
});
