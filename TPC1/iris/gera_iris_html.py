import json

f = open("iris.json")

iris = json.load(f)

table_html = """
                    <table border="1">
                        <tr>
                            <th colspan="2">Sépala</th>
                            <th colspan="2">Pétala</th>
                        </tr>
                        <tr>
                            <th>Comprimento(cm)</th>
                            <th>Largura(cm)</th>
                            <th>Comprimento(cm)</th>
                            <th>Largura(cm)</th>
                        </tr>
"""

setosas = list()
versicolors = list()
virginicas = list()

for i in iris:
    if i['species'] == "setosa":
          setosas.append(i)
    if i['species'] == "versicolor":
          versicolors.append(i)
    if i['species'] == "virginica":
          virginicas.append(i)


pagHTML = """
<!DOCTYPE html>
<html>
    <head>
        <title>Íris</title>
    </head>
    <body>
        <center>
            <h1>Íris</h1>
        </center>
        <table>
            <tr>
            <!--- Índice -->
                <td style="padding-left: 10px; padding-right: 100px;" valign="top" >
                    <a name="indice"/>
                    <h2>Índice de Espécies</h2>
                    <ul>
                        <li>
                            <a href="#setosa">Setosa</a>
                        </li>
                        <li>
                            <a href="#versicolor">Versicolor</a>
                        </li>
                        <li>
                            <a href="#virginica">Virginica</a>
                        </li>
                    </ul>
                </td>
                <!-- Conteúdo -->
                <td>
                    

""" 

pagHTML += """
                    <a name="setosa"/>
                    <h2><em><u>Setosa<em/></u> <a href="#indice">[Índice]</a></h2> 
"""

pagHTML += table_html

setosas_sepal_length_sum = 0
setosas_sepal_width_sum = 0
setosas_petal_length_sum = 0
setosas_petal_width_sum = 0
num_entries = 0
for s in setosas:
        setosas_sepal_length_sum += s['sepalLength']
        setosas_sepal_width_sum += s['sepalWidth']
        setosas_petal_length_sum += s['petalLength']
        setosas_petal_width_sum += s['petalWidth']
        num_entries += 1
        
        
        pagHTML += f"""
                            <tr>
                                <td>{s['sepalLength']}</td>
                                <td>{s['sepalWidth']}</td>
                                <td>{s['petalLength']}</td>
                                <td>{s['petalWidth']}</td>
                            </tr>

        """

pagHTML += f"""
                    </table>
                    <p><b>Comprimento Médio da Sépala:</b> {"{:.2f}".format(setosas_sepal_length_sum/num_entries)}cm<br><b>Largura Média da Sépala:</b> {"{:.2f}".format(setosas_sepal_width_sum/num_entries)}cm<br><b>Comprimento Médio da Pétala:</b> {"{:.2f}".format(setosas_petal_length_sum/num_entries)}cm<br><b>Largura Média da Pétala:</b> {"{:.2f}".format(setosas_petal_width_sum/num_entries)}cm<br></p>

"""

pagHTML += """
                    <center>
                        <hr width="100%"/>
                    </center>"""


pagHTML += """
                    <a name="versicolor"/>
                    <h2><em><u>Versicolor<em/></u> <a href="#indice">[Índice]</a></h2>
"""

pagHTML += table_html

versicolors_sepal_length_sum = 0
versicolors_sepal_width_sum = 0
versicolors_petal_length_sum = 0
versicolors_petal_width_sum = 0
num_entries = 0
for v in versicolors:
        versicolors_sepal_length_sum += v['sepalLength']
        versicolors_sepal_width_sum += v['sepalWidth']
        versicolors_petal_length_sum += v['petalLength']
        versicolors_petal_width_sum += v['petalWidth']
        num_entries += 1
        pagHTML += f"""
                        <tr>
                            <td>{v['sepalLength']}</td>
                            <td>{v['sepalWidth']}</td>
                            <td>{v['petalLength']}</td>
                            <td>{v['petalWidth']}</td>
                        </tr>    
        """
       
pagHTML += f"""
                    </table>
                    <p><b>Comprimento Médio da Sépala:</b> {"{:.2f}".format(versicolors_sepal_length_sum/num_entries)}cm<br><b>Largura Média da Sépala:</b> {"{:.2f}".format(versicolors_sepal_width_sum/num_entries)}cm<br><b>Comprimento Médio da Pétala:</b> {"{:.2f}".format(versicolors_petal_length_sum/num_entries)}cm<br><b>Largura Média da Pétala:</b> {"{:.2f}".format(versicolors_petal_width_sum/num_entries)}cm</p>
"""

pagHTML += """
                    <center>
                        <hr width="100%"/>
                    </center>"""


pagHTML += """
                    <a name="virginica"/>
                    <h2><em><u>Virginica<em/></u> <a href="#indice">[Índice]</a></h2> 
"""

pagHTML += table_html

virginicas_sepal_length_sum = 0
virginicas_sepal_width_sum = 0
virginicas_petal_length_sum = 0
virginicas_petal_width_sum = 0
num_entries = 0
for v in virginicas:
        virginicas_sepal_length_sum += v['sepalLength']
        virginicas_sepal_width_sum += v['sepalWidth']
        virginicas_petal_length_sum += v['petalLength']
        virginicas_petal_width_sum += v['petalWidth']
        num_entries += 1
        pagHTML += f"""
                            <tr>
                            <td>{v['sepalLength']}</td>
                            <td>{v['sepalWidth']}</td>
                            <td>{v['petalLength']}</td>
                            <td>{v['petalWidth']}</td>
                        </tr>    
        """
       
pagHTML += f""" 
                    </table>
                    <p><b>Comprimento Médio da Sépala:</b> {"{:.2f}".format(virginicas_sepal_length_sum/num_entries)}cm<br><b>Largura Média da Sépala:</b> {"{:.2f}".format(virginicas_sepal_width_sum/num_entries)}cm<br><b>Comprimento Médio da Pétala:</b> {"{:.2f}".format(virginicas_petal_length_sum/num_entries)}cm<br><b>Largura Média da Pétala:</b> {"{:.2f}".format(virginicas_petal_width_sum/num_entries)}cm</p>
"""

pagHTML += """  
                <td style="padding-left: 300px; padding-right: 300px;" valign="top" >
                    <a name="descricao"/>
                    <h3>Descrição das Espécies</h3>
                </td>
                </td>
            </tr>
        </table>
    </body>
</html>
"""

print(pagHTML)