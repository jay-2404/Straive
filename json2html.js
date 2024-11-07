export default function json2html(data) {
    // Extract unique keys for the header row
    const keys = [...new Set(data.flatMap(Object.keys))];

    // Generate HTML for the table
    let html = `<table data-user="jayendra.codes@gmail.com">\n`;
    html += `  <thead>\n    <tr>${keys.map(key => `<th>${key}</th>`).join('')}</tr>\n  </thead>\n`;
    html += `  <tbody>\n`;

    // Add rows of data
    data.forEach(item => {
        html += `    <tr>${keys.map(key => `<td>${item[key] || ''}</td>`).join('')}</tr>\n`;
    });

    html += `  </tbody>\n</table>`;
    return html;
}
