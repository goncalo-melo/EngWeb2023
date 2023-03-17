import json

def index_generator(cities):
    index_html = """
<!DOCTYPE html>
    <html>
        <head>
            <title>Índice</title>
            <meta charset="utf-8"/>
        </head>
        <body>
            <table>
                <tr>
                    <td>
                        <h2>Índice</h2>
                        <ul>
    """

    for c in cities:
        index_html += f"""
                            <li>
                                <a href="{c['id']}">{c['nome']}</a>
                            </li>
        """

    with open("./html_pages/index.html", "w") as f:
        f.write(index_html)

def city_page_generator(city, connections, dict):
    city_html = """
<!DOCTYPE html>
    <html>
        <head>
            <title>Mapa Virtual</title>
            <meta charset="utf-8"/>
        </head>
        <body>
            <center>
                <h2>Mapa Virtual</h2>
                <hr width="80%"/>
            </center>
            <table style="width:100%">
                <tr>
                    <td>
    """

    city_html += f"""
                        <h2>{city["nome"]}</h2>
                        <p><b>População: </b>{city["população"]}</p>
                        <p><b>Descrição: </b>{city["descrição"]}</p>
                        <p><b>Distrito: </b>{city["distrito"]}</p>
                        <table style="width:100%">
                            <td valign="top">
                                <p><b>Licações:</b>
                                <ul>
    """

    for connection in connections:
        if connection["origem"] == city["id"]:
            city_html += f"""
                                    <li>
                                        <a href="{connection["destino"]}">{dict[connection["destino"]]["nome"]}</a> - {connection["distância"]} km
                                    </li>
            """
        elif connection["destino"] == city["id"]:
            city_html += f"""
                                    <li>
                                        <a href="{connection["origem"]}">{dict[connection["origem"]]["nome"]}</a> - {connection["distância"]} km
                                    </li>
        """
            
    city_html += f"""
                                </ul>
                                </p>
                                <address>[<a href="/">Voltar ao Índice</a>]
                            </td>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
    </html>           
    """

    with open(f"./html_pages/{city['id']}.html", "w") as f:
        f.write(city_html)

dict = dict()

def main():
   
    dataset = open("mapa.json")
    map = json.load(dataset)

    cities = map["cidades"]
    connections = map["ligações"]

    cities.sort(key=lambda c : c["nome"]) 

    index_generator(cities)    

    for city in cities:
        dict[city["id"]] = city
    
    for city in cities:
        city_page_generator(city, connections, dict)

if __name__ == '__main__':
    main()




