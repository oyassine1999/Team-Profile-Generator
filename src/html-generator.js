const fs = require('fs');
const path = require('path');

const createHTML = (team) => {
    const css = `
        body {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 2%;
            font-family: Arial, sans-serif;
        }

        .card {
            border: 1px solid #ccc;
            border-radius: 10px;
            width: 300px;
            padding: 2%;
            margin: 1%;
            text-align: center;
            background-color: #fff;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }

        .card:hover {
            transform: scale(1.05);
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            cursor: pointer;
        }
        
        .card h2 {
            margin: 0;
            padding: 0;
        }
        
        .manager {
            background-color: #99ffbb;
        }
        
        .engineer {
            background-color: #ffcc99;
        }
        
        .intern {
            background-color: #99ccff;
        }
    `;
    fs.writeFileSync(path.resolve(__dirname, '..', 'dist', 'styles.css'), css);
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
            html += `<p>`;
            if (member.github && member.github !== 'N/A') {
                html += `GitHub: <a href="https://github.com/${member.github}">${member.github}</a>`;
            } else {
                html += `GitHub: ${member.github}`;
            }
            html += `</p>`;
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