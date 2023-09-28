import { Plugin} from 'obsidian';

// stole code from https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing#Post-process+Markdown+code+blocks

export default class CsvCodeBlockPlugin extends Plugin {
	
	async onload() {
		this.registerMarkdownCodeBlockProcessor("csv", (source, el, ctx) => {
			const rows = source.split("\n").filter((row) => row.length > 0);

			const table = el.createEl("table");
			const body = table.createEl("tbody");

			for (let i = 0; i < rows.length; i++) {
				const cols = rows[i].split(",");

				const row = body.createEl("tr");

				for (let j = 0; j < cols.length; j++) {
					row.createEl("td", { text: cols[j] });
				}
			}
		});
	}	
}
