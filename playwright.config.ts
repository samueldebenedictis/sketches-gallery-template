import { type PlaywrightTestConfig } from "@playwright/test";

export const config: PlaywrightTestConfig = {
	testDir: "./test",
	timeout: 60_000,
	snapshotDir: "./snapshots",
	expect: {
		timeout: 5_000,
	},
	fullyParallel: true,
	retries: 0,
	workers: 1,
	reporter: [["list"], ["html", { open: "never" }]],
	use: {
		trace: { mode: "on", screenshots: true, snapshots: true, sources: true },
		ignoreHTTPSErrors: true,
		locale: "it-IT",
		video: "off",
	},
	projects: [{ name: "generate-cover", testDir: "test" }],
	outputDir: "test-results/",
};

export default config;
