import json

def ordCidade(c):
    return c['nome'] 

f = open("mapa.json")

mapa = json.load(f)

cidades = mapa['cidades']
ligacoes = mapa["ligações"]

cidades.sort(key=ordCidade)

dict = dict()

pagHTML = """
<!DOCTYPE html>
<html>
    <head>
        <title>Mapa Virtual</title>
    </head>
    <body>
        <center>
            <h1>Mapa Virtual</h1>
        </center>
        <table>
            <tr>
                <!--- Índice -->
                <td valign="top">
                    <a name="indice"/>
                    <h3>Índice</h3>
                    <ul>
"""

for c in cidades:
    dict[c["id"]] = c
    pagHTML += f"""
                        <li>
                            <a href="#{c['id']}">{c['nome']}</a>
                        </li>
    """

pagHTML += """
                    </ul>
                </td>
                <!-- Conteúdo -->
                <td>
"""

for c in cidades:
    pagHTML += f"""
                    <a name="{c['id']}"/>
                    <h3>{c['nome']}</h3>
                    <p><b>População:</b> {c['população']}</p>
                    <p><b>Descrição:</b> {c['descrição']}</p>
                    <p><b>Distrito</b> {c['distrito']}</p>
                    <p><b>Ligações: </b>
                        <ul>
"""

    for l in ligacoes:
        if l["origem"] == c["id"]:
            pagHTML += f"""
                <li>
                    <a href="#{l["destino"]}">{dict[l["destino"]]["nome"]}</a> - {l["distância"]} km
                </li>
            """
        elif l["destino"] == c["id"]:
            pagHTML += f"""
                <li>
                    <a href="#{l["origem"]}">{dict[l["origem"]]["nome"]}</a> - {l["distância"]} km
                </li>
        """

    pagHTML += """      
                        </ul>
                    </p>
                    <address>[<a href="#indice">Voltar ao indice</a>]
                    <center>
                        <hr width="80%"/>
                    </center>
    """

pagHTML += """
                </td>
            </tr>
        </table>
    </body>
</html>
"""

print(pagHTML)