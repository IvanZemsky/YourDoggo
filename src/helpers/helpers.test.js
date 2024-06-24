import { escapeHTML } from "./escapeHTML";

test("Проверка на замену HTML-символов", () => {
   expect(escapeHTML("<div>Hi!</div>")).toBe("&lt;div&gt;Hi!&lt;/div&gt;");
});
