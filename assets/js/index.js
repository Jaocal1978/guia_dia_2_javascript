//EJERCICIO 1
function openModalEj1()
{
    $('#modalEjercicio2').modal('show');
    document.querySelector('.modal-title').innerHTML = "Ejercicio 1";
    let body;

    body = `
            <form>
                <div class="row">
                    <div class="col-12 text-center pt-3 pb-3">
                        <h2>Diagrama de Flujo</h2>
                    </div>
                    <div class="col-12 text-center pt-3 pb-3">
                        <img src="assets/img/operacion con 2 numeros.jpg"  alt="">
                    </div>
                </div>
            </form>`;
                
    document.querySelector('.modal-body').innerHTML = body;
}

//EJERCICIO 2
function openModalEj2()
{
    $('#modalEjercicio2').modal('show');
    document.querySelector('.modal-title').innerHTML = "Ejercicio 2";

    body = `
            <form id="formOperacionesAritmeticas">
                <div class="row">
                    <div class="col-12 text-center pt-3 pb-3">
                        <h2>Ejercicio 2</h2>
                    </div>
                    <div class="col pt-3 pb-3">
                        <input class="form-control" id="txtNumero1" name="txtNumero1" type="text" placeholder="Ingrese Numero">
                        <div class="form-group">
                        
                    </div>
                    <div class="col pt-3 pb-3">
                        <select class="form-control selectpicker" id="listOperadores" name="listOperadores">
                          <option value="1">+ Suma</option>
                          <option value="2">- Resta</option>
                          <option value="3">* Multiplicación</option>
                          <option value="4">/ División</option>
                          <option value="5">% Mod</option>
                        </select>
                    </div>
                    <div class="col pt-3 pb-3">
                        <input class="form-control" id="txtNumero2" name="txtNumero2" type="text" placeholder="Ingrese Numero">
                    </div>
                    <div class="col pt-3 pb-3">
                        <button id="press" type="submit" class="btn btn-primary">Presionar</button>
                        <button id="erased" type="text" class="btn btn-danger">Borrar</button>
                    </div>
                    <div class="col pt-3 pb-3">
                        <input class="form-control" id="txtResultado" name="txtResultado" type="text" placeholder="Resultado">
                    </div>
                </div>
            </form>`;
                
    document.querySelector('.modal-body').innerHTML = body;

    let btnBorrar = document.querySelector('#erased');
    btnBorrar.onclick = function(e)
    {
        e.preventDefault();

        document.querySelector('#formOperacionesAritmeticas').reset();
    }

    let formOperacionesAritmeticas = document.querySelector('#formOperacionesAritmeticas');
    formOperacionesAritmeticas.onsubmit = function(e)
    {
        e.preventDefault();

        let numero1 = document.querySelector('#txtNumero1').value;
        let numero2 = document.querySelector('#txtNumero2').value;
        let operador = document.querySelector('#listOperadores').value;
        let resultado;

        if(numero1 == '' || numero2 == '')
        {
            Swal.fire("Error", "Falta ingresar datos en los campos.", "error");
            return false;
        }
        else 
        {
            numero1 = parseInt(numero1);
            numero2 = parseInt(numero2);

            if(!isNaN(numero1) || !isNaN(numero2))
            {
                switch (operador) 
                {
                    case "1":
                    resultado = numero1 + numero2;
                    break;

                    case "2":
                    resultado = numero1 - numero2;
                    break;

                    case "3":
                    resultado = numero1 * numero2;
                    break;
    
                    case "4":
                    resultado = numero1 / numero2;
                    break;

                    case "5":
                    resultado = numero1 % numero2;
                    break;

                    default:
                    resultado = "";
                    break;
                }
            }
            else
            {
                Swal.fire("Error", "Los datos ingresados no son numeros.", "error");
                return false;
            }
        }
        document.querySelector('#txtResultado').value = resultado;
    }

}

//EJERCICIO 3
function openModalEj3()
{
    $('#modalEjercicio2').modal('show');
    document.querySelector('.modal-title').innerHTML = "Ejercicio 3";

    body = `
            <form id="formTemperaturas">
                <div class="row">
                    <div class="col-12 text-center pt-3 pb-3">
                        <h2>Ejercicio 3</h2>
                    </div>
                    <div class="col pt-3 pb-3">
                        <input class="form-control" id="txtCelcius" name="txtCelcius" type="text" placeholder="Ingrese Temperatura">
                        <div class="form-group">
                        
                    </div>
                    <div class="col pt-3 pb-3">
                        <select class="form-control selectpicker" id="listTemperaturas" name="listTemperaturas">
                            <option value="1">Kelvin</option>
                            <option value="2">Fahrenheit</option>
                        </select>
                    </div>
                    <div class="col pt-3 pb-3">
                        <button id="press" type="submit" class="btn btn-primary">Transformar</button>
                        <button id="erased" type="text" class="btn btn-danger">Borrar</button>
                    </div>
                    <div class="col pt-3 pb-3">
                        <input class="form-control" id="txtResultado" name="txtResultado" type="text" placeholder="Resultado">
                    </div>
                </div>
            </form>`;
                
    document.querySelector('.modal-body').innerHTML = body;

    let btnBorrar = document.querySelector('#erased');
    btnBorrar.onclick = function(e)
    {
        e.preventDefault();

        document.querySelector('#formTemperaturas').reset();
    }

    let formTemperaturas = document.querySelector('#formTemperaturas');
    formTemperaturas.onsubmit = function(e)
    {
        e.preventDefault();

        let temperatura = document.querySelector('#txtCelcius').value;
        const operador = document.querySelector('#listTemperaturas').value;
        let result;

        if(temperatura == '')
        {
            Swal.fire("Error", "Ingrese alguna temperatura", "error");
            return false;
        }
        else
        {
            temperatura = parseFloat(temperatura);

            if(!isNaN(temperatura))
            {
                if(operador == 1)
                {
                    result = temperatura + 273.15;
                }
                else
                {
                    result = (temperatura * 9.5) + 32;
                }
            }
            else
            {
                Swal.fire("Error", "Dato ingresado no es numerico", "error");
                document.querySelector('#formTemperaturas').reset();
                return false;
                
            }
        }
        document.querySelector('#txtResultado').value = result;
    }

}

//EJERCICIO 4
function openModalEj4()
{
    $('#modalEjercicio2').modal('show');
    document.querySelector('.modal-title').innerHTML = "Ejercicio 4";

    body = `
            <form id="formDiasSemanas">
                <div class="row">
                    <div class="col-12 text-center pt-3 pb-3">
                        <h2>Ejercicio 4</h2>
                    </div>

                    <div class="col-12 pt-3 pb-3 ">
                        <div class="form-group">
                            <input class="form-control" id="txtdias" name="txtdias" type="text" placeholder="Ingrese Cantidad de Dias">
                        </div>
                    </div>
                    <div class="col-12 pt-3 pb-3 form-group">
                        <button id="press" type="submit" class="btn btn-primary">Transformar</button>
                        <button id="erased" type="text" class="btn btn-danger">Borrar</button>
                    </div>
                    <div class="col-12 pt-3 pb-3">
                        <div class="form-group">
                            <input class="form-control" id="txtResultado" name="txtResultado" type="text" placeholder="Resultado">
                        </div>
                    </div>
                </div>
            </form>`;
                
    document.querySelector('.modal-body').innerHTML = body;

    let btnBorrar = document.querySelector('#erased');
    btnBorrar.onclick = function(e)
    {
        e.preventDefault();

        document.querySelector('#formDiasSemanas').reset();
    }

    let formDiasSemanas = document.querySelector('#formDiasSemanas');
    formDiasSemanas.onsubmit = function(e)
    {
        e.preventDefault();

        let dias = document.querySelector('#txtdias').value;
        let anio = 365;
        let semanas = 7;
        let totalAnios;
        let totalDias;
        let totalSemana;
        let reSemana;
        let respuesta;

        if(dias == '')
        {
            Swal.fire("Error", "Ingrese cantidad de días.", "error");
        }
        else
        {
            dias = parseInt(dias);
            semanas = parseInt(semanas);
            anio = parseInt(anio);

            if(!isNaN(dias))
            {
                totalAnios = Math.floor(dias / anio);
                reSemana = Math.floor(dias % anio);
                totalSemana = Math.floor(reSemana/semanas);

                totalDias = reSemana % semanas;
        
                respuesta = `La cantidad de dias corresponde a ${totalAnios} año(s), ${totalSemana} semana(s) y ${totalDias} dia(s)`;

                document.querySelector('#txtResultado').value = respuesta;
            }
            else
            {
                Swal.fire("Error", "Los datos ingresados no son numeros.", "error");
            }
        }
    }
}
    

function openModalEj5()
{
    $('#modalEjercicio2').modal('show');
    document.querySelector('.modal-title').innerHTML = "Ejercicio 5";

    body = `
            <form id="formOperaciones">
                <div class="row">
                    <div class="col-12 text-center pt-3 pb-3">
                        <h2>Ejercicio 5</h2>
                    </div>
                    <div class="col-12 pt-3 pb-3">
                        <input class="form-control" id="txtNumero1" name="txtNumero1" type="text" placeholder="Ingrese Numero"> 
                    </div>
                    <div class="col-12 pt-3 pb-3">
                        <input class="form-control" id="txtNumero2" name="txtNumero2" type="text" placeholder="Ingrese Numero">
                    </div>
                    <div class="col-12 pt-3 pb-3">
                        <input class="form-control" id="txtNumero3" name="txtNumero3" type="text" placeholder="Ingrese Numero">
                    </div>
                    <div class="col-12 pt-3 pb-3">
                        <input class="form-control" id="txtNumero4" name="txtNumero4" type="text" placeholder="Ingrese Numero">
                    </div>
                    <div class="col-12 pt-3 pb-3">
                        <input class="form-control" id="txtNumero5" name="txtNumero5" type="text" placeholder="Ingrese Numero">
                    </div>
                    <div class="col pt-3 pb-3">
                        <button id="press" type="submit" class="btn btn-primary">Presionar</button>
                        <button id="erased" type="text" class="btn btn-danger">Borrar</button>
                    </div>
                    <div class="col-12 pt-3 pb-3">
                        <input class="form-control" id="txtResultado1" name="txtResultado1" type="text" placeholder="Resultado 1">
                    </div>
                    <div class="col-12 pt-3 pb-3">
                        <input class="form-control" id="txtResultado2" name="txtResultado2" type="text" placeholder="Resultado 2">
                    </div>
                </div>
            </form>`;
                
    document.querySelector('.modal-body').innerHTML = body;

    let btnBorrar = document.querySelector('#erased');
    btnBorrar.onclick = function(e)
    {
        e.preventDefault();

        document.querySelector('#formOperaciones').reset();
    }

    let formOperaciones = document.querySelector('#formOperaciones');
    formOperaciones.onsubmit = function(e)
    {
        e.preventDefault();

        let n1 = document.querySelector('#txtNumero1').value;
        let n2 = document.querySelector('#txtNumero2').value;
        let n3 = document.querySelector('#txtNumero3').value;
        let n4 = document.querySelector('#txtNumero4').value;
        let n5 = document.querySelector('#txtNumero5').value;
        let result1;
        let result2;

        if(n1 == '' || n2 == '' || n3 == '' || n4 == '' || n5 == '')
        {
            Swal.fire("Error", "Ingrese los datos requeridos.", "error");
            return false
        }
        else
        {
            n1 = parseInt(n1);
            n2 = parseInt(n2);
            n3 = parseInt(n3);
            n4 = parseInt(n4);
            n5 = parseInt(n5);

            if(!isNaN(n1) || !isNaN(n2) || !isNaN(n3) || !isNaN(n4) || !isNaN(n5))
            {
                result1 = n1 + n2 + n3 + n4 + n5;
                result1 = `La suma de los 5 numeros es: ${result1}`;
                result2 = (n1 + n2 + n3 + n4 + n5) / 5;
                result2 = `El promedio de los 5 numeros es: ${result2}`;

                document.querySelector('#txtResultado1').value = result1;
                document.querySelector('#txtResultado2').value = result2;
            }
            else
            {
                Swal.fire("Error", "Los datos ingresados no son numeros o algunos no lo son.", "error");
                document.querySelector('#formOperaciones').reset();
                return false;

            }
        }
    }
}
    






