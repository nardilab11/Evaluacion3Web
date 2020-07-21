<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Evaluacion 3 Web</title>
        <link href="CSS/CSSFormRUT.css" rel="stylesheet" type="text/css"/>
        <script src="Controlador/JSRut.js" type="text/javascript"></script>
    </head>
    <body>
        <h2>Formulario de validación de RUT</h2>
        <form action="index.php" method="GET">
            <label>Ingrese el RUT para validar: </label>
            <input id="iptRUT" name="rut" type="text" required> <a> - </a>
            <input id="iptDV" name="dv" type="text" required> <br>
            <button id="btnValidar" onclick="validarRUT()">Validar</button>
        </form>
    </body>
</html>
