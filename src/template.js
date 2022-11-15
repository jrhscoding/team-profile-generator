const generateCards = team => {
    const managerCard = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class ="list-group">
                    <li class="list-group-item">ID: ${manager.getId()} </li>
                    <li class="list-group-item">Email: ${manager.getEmail()} </li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
                </ul>
            </div>
        </div>

        `
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => managerCard(manager)));
    return html.join('')
};

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3" id="title">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                ${generateCards(team)}
                </div>
            </div>
        </div>
    </body>
    </html> 
    `;
};
