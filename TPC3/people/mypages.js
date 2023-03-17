// mypages.js
// 2023-03-03 by gui
// HTML templates generating function

exports.genIndexPage = function(data){
    html = `
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Index</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-purple">
                    <a href="/pessoas" class="w3-button w3-block w3-xlarge">Pessoas</a>
                    <a href="/sexo" class="w3-button w3-block w3-xlarge">Distribuição por sexo</a>
                    <a href="/desportos" class="w3-button w3-block w3-xlarge">Distribuição por desportos</a>
                    <a href="/top10profissoes" class="w3-button w3-block w3-xlarge">Top 10 profissões</a>
                </header>

                <footer class="w3-container w3-blue">
                    <h5>Generated in EngWeb2023 ${data}</h5>
                 </footer>

            </div>
    </body>
    </html>

    `


    return html
}

exports.genMainPage = function(lista, data){
    var pagHTML = `
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>About People...</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-purple">
                    <h1>Lista de pessoas</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>Nome</th>

                        <th>Idade</th>

                        <th>Sexo</th>

                        <th>Cidade</th>
                    </tr>

                `

    for(let i = 0; i < lista.length; i++){
        pagHTML += `
        <tr>
            <td>
                <a href="/pessoas/${lista[i].id}">${lista[i].nome}</a>
            </td>
            <td>${lista[i].idade}</td>

            <td>${lista[i].sexo}</td>

            <td>${lista[i].morada.cidade}</td>
        </tr>
        `

    }

    pagHTML += `
                    </table>
                </div>

                    <footer class="w3-container w3-blue">
                        <h5>Generated in EngWeb2023 ${data}</h5>
                    </footer>

                </div>
            </body>
        </html>
        `

    return pagHTML
}

exports.genPersonPage = function(p, d){
    var pagHTML = `
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Person Page...</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-purple">
                    <h1>${p.nome}</h1>
                </header>

            <div class"container">
                <table class="w3-table-all">
                    <tr>
                        <th>Idade</th>

                        <th>Sexo</th>

                        <th>Cidade</th>

                        <th>Distrito</th>

                        <th>Profissão</th>
                    </tr>

                    <tr>
                        <td>${p.idade}</td>

                        <td>${p.sexo}</td>

                        <td>${p.morada.cidade}</td>

                        <td>${p.morada.distrito}</td>

                        <td>${p.profissao}</td>
                    </tr>
                </table>
            </div>

                <footer class="w3-container w3-blue">
                    <h5>Generated in EngWeb2023 ${d}</h5>
                 </footer>

            </div>
    </body>
    </html>

        `
    return pagHTML
}


exports.genDistPage = function(dist, type, ref, d){
    pagHTML =`
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Distribuição ${type}</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>

        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-purple">
                    <h1>Lista de pessoas</h1>
                </header>
                
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>${type}</th>
                            <th>Frequência</th>
                        </tr>
    `

    var sorted_keys = Object.keys(dist).sort()
    for(let i = 0; i < sorted_keys.length; i++){
        pagHTML += `
        <tr>
            <td>
            ${sorted_keys[i]}
            </td>

            <td>
            <a href="/${ref}/${sorted_keys[i]}">${dist[sorted_keys[i]]}</a>
            </td>
        </tr>
        `
    }

    pagHTML += `
                    </table>
                </div>

                <footer class="w3-container w3-blue">
                    <h5>Generated in EngWeb2023 ${d}</h5>
                </footer>

            </div>
        </body>
    </html>
    `

    return pagHTML
}