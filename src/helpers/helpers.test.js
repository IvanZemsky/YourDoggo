import { escapeHTML } from "./escapeHTML";

describe('Проверка на замену символов HTML', () => {
   test("<div>", () => {
      expect(escapeHTML("<div>Hi!</div>")).toBe("&lt;div&gt;Hi!&lt;/div&gt;");
   });
   test("<br>", () => {
      expect(escapeHTML("<br>")).toBe("&lt;br&gt;");
   });
   test("<input value=\"dangerous value\"/>", () => {
      expect(escapeHTML("<input type=\"text\" value=\"dangerous value\"/>")).toBe("&lt;input type=&quot;text&quot; value=&quot;dangerous value&quot;/&gt;");
   });
})
