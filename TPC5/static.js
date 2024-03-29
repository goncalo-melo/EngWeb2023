/*
    Module Static - to serve static resources in public folder
    Exports: 
        Bool staticResource(request) - tells if someone is asking a static resource
        Data serveStaticResource(req, res) - returns the resource
*/

var fs = require('fs')

function staticResource(request){
    return /\/w3.css$/.test(request.url) || 
            /\/favicon.png$/.test(request.url)
}

exports.staticResource = staticResource

function serveStaticResource(req, res){
    var partes = req.url.split('/')
    var file = partes[partes.length -1 ]
    fs.readFile('public/' + file, (error, data)=>{
        if(error){
            console.log('Error: file not found ' + error)
            res.statusCode = 404
            res.end('Error: file not found ' + error)
        }
        else{
            if(file == 'favicon.ico'){
                res.setHeader('Content-Type', 'image/x-icon')
                res.end(data)
            }
            else if(file == 'w3.css'){
                res.setHeader('Content-Type', 'text/css')
                res.end(data)
            }
            // PNG images
            else{
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }    
        }
    })
}

exports.serveStaticResource = serveStaticResource