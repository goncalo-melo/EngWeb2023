exports.distSexo = function(pessoas){
    dist = {}

    for(let i = 0; i < pessoas.length; i++){
        if(!(pessoas[i].sexo in dist)){
            dist[pessoas[i].sexo] = 1
        }
        else{
            dist[pessoas[i].sexo] += 1
        }
    }

    return dist
}

exports.distDesportos = function(pessoas){
    dist = {}

    for(let i = 0; i < pessoas.length; i++){
        var desportos = pessoas[i].desportos
        for(let j = 0; j < desportos.length; j++){
            if(!(desportos[j] in dist)){
                dist[desportos[j]] = 1
            }
            else{
                dist[desportos[j]] += 1
            }
        }
    }

    return dist
}


exports.distTop10Profissoes = function(pessoas){
    profissoes = {}

    for(let i = 0; i < pessoas.length; i++){
        if(!(pessoas[i].profissao in profissoes)){
            profissoes[pessoas[i].profissao] = 1
        }
        else{
            profissoes[pessoas[i].profissao] += 1
        }
    }

    var sorted = Object.keys(profissoes).sort((a,b) => profissoes[b] - profissoes[a])

    top10 = {}
    for(let i = 0; i < 10; i++){
        top10[sorted[i]] = profissoes[sorted[i]]
    }

    return top10
}