const fs = require('fs');
const path = require('path');

const createHTML = (team) => {
    let html = `<!DOCTYPE html>
                <html>
                <head>
                    <title>Team Profile</title>
                    <link rel="stylesheet" type="text/css" href="styles.css">
                </head>
                <body>`;

    for (let member of team) {
        html += `<div class="card ${member.role.toLowerCase()}">
                    <h2>${member.name}</h2>
                    <p>ID: ${member.id}</p>
                    <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>`;

        if (member.role === 'Manager') {
            html += `<p>Office number: ${member.officeNumber}</p>`;
        } else if (member.role === 'Engineer') {
            html += `<p>GitHub: <a href="https://github.com/${member.username}">${member.username}</a></p>`;
        } else if (member.role === 'Intern') {
            html += `<p>School: ${member.school}</p>`;
        }

        html += `</div>`;
    }

    html += `</body>
            </html>`;
    const distPath = path.resolve(__dirname, '..', 'dist')
    if(!fs.existsSync(distPath)){
        fs.mkdirSync(distPath)
    }
    fs.writeFileSync(path.resolve(__dirname, '..', 'dist', 'team.html'), html);
};

module.exports = { createHTML };
