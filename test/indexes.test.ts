/* eslint-disable jest/valid-title */
import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

const dataSketch: {
	items: {
		img: string;
		link: string;
		title: string;
	}[];
} = { items: [] };
const jsonPath = "./src/dataSketches.json";

test.describe("Cover and index generation", () => {
	const dir = fs.readdirSync("./public/pages");
	dir.forEach((id) => {
		const file = path.resolve("public/pages/", `${id}/${id}.html`);
		test(`Cover ${id}`, async ({ page }) => {
			const canvas = page.locator("canvas");
			await page.goto(`file:${file}`);
			await expect(canvas).toBeVisible();
			await canvas.hover();
			const cover = await page.locator("canvas").screenshot();
			fs.writeFileSync(`./public/pages/${id}/cover.png`, cover);
			const img = `./pages/${id}/cover.png`;
			const link = `/pages/${id}/${id}.html`;
			const element = { img: `${img}`, link: `${link}`, title: `${id}` };
			dataSketch.items.push(element);
			await page.pause();
		});
	});
	test("Index", async () => {
		fs.writeFileSync(jsonPath, JSON.stringify(dataSketch, undefined, 2));
	});
});
