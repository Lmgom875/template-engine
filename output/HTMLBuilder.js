const fs = require("fs");


const generateHTML = async (team) => {
    const html1 =
        `<!DOCTYPE html>
         <html lang="en">
         <head>  
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <title>My Team</title>
        </head>
        <style>
          #header-row {
          background-color: #afafaf;
          color: white;
          height: 150px;
          margin-bottom: 30px;
          margin-top: 10px;
          border-radius: 15px;
          -moz-box-shadow: 5px 5px 7px black;
          -webkit-box-shadow: 5px 5px 7px black;
          box-shadow: 5px 5px 7px black;
          }

        #header-h1 {
          font-size: 70px;
          font-weight: 700;
          letter-spacing: 40px;
          }

        .card {
          margin: 20px;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          box-shadow: 6px 6px 8px 0;
          }

        #card-header {
          background-color: #c0c2ce;
          color: #f8f8fa;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          }

        #card-body {
          background-color: #e5e6ed;
          }
        .h4-atri {
          background-color: #f8f8fa;
          color: #afafaf;
          }
        </style>
        <body>
        <div class="container main-container">
        <div class="row align-items-center" id="header-row">
            <div class="col text-center" id="header-col">
                <h1 id="header-h1">TEAM</h1>
            </div>
        </div>
        </div>
        <div class="central-container">
        <div class="row no-gutters justify-content-center">`;

    fs.writeFile("./template/indexTeam.html", html1, function (err) {
        if (err) {
            throw err;
        }
        htmlAppend2()
    })
    const htmlAppend2 = () => {
        for (i = 0; i < team.length; i++) {
            let attr = ""
            let role = team[i].getRole()
            let title = ""
            switch (role) {
                case "Manager":
                    attr = team[i].getOfficeNumber()
                    title = "Office number: "
                    break;
                case "Engineer":
                    attr = team[i].getGithub()
                    title = "Github Name: "
                    break;
                case "Intern":
                    attr = team[i].getSchool()
                    title = "School name: "
                    break;

                default:
                    break;
            }
            const html2 =
                `<div class="card col-sm-12 col-md-6 col-lg-3 col-xl-3">
                    <div class="card-header text-center" id="card-header">
                        <h3>${team[i].name}</h3>
                    </div>
                    <div class="card-body" id="card-body">
                        <div class="card-content text-center" id="card-content">
                            <h4 class="h4-atri">ID : ${team[i].id}</h4>
                            <h4 class="h4-atri">Email : ${team[i].email}</h4>
                            
                            <h4 class="h4-atri">${title} ${attr} </h4>
                            
                        </div>
                    </div>
                </div>`
            fs.appendFile("./template/indexTeam.html", html2, function (err) {
                if (err) {
                    throw err;
                }
            })
        }
        htmlAppend3();
    }

    const htmlAppend3 = () => {
        const html3 =
            `</div>
        </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
        </body>
        </html>`;

        fs.appendFile("./template/indexTeam.html", html3, function (err) {
            if (err) {
                throw err;
            }
        })
        console.log("html file created");
    }
}

module.exports = {
    generateHTML
}