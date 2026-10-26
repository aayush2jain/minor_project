
export function normalizeContent(content) {
    if (typeof content !== "string" || !content) {
        return "";
    }

    // Remove a UTF-8 BOM if present.
    if (content.charCodeAt(0) === 0xfeff) {
        content = content.slice(1);
    }

    // Normalize Windows and old Mac line endings.
    content = content.replace(/\r\n?/g, "\n");

    // Remove Markdown fences only when they wrap the entire file.
    const trimmed = content.trim();

    const fenced = trimmed.match(
        /^```(?:jsx|javascript|js|tsx|typescript|ts)?[ \t]*\n([\s\S]*?)\n```$/i
    );

    if (fenced) {
        content = fenced[1];
    }

    // Remove accidental surrounding whitespace, preserving internal formatting.
    return content.trim();
}
