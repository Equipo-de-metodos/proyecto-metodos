//console.log("Sin solventar el problema");

console.log("Se sabe que por cada par de clientes que visitan un establecimiento y desean realizar una compra la media de tiempo en las actividades son las siguientes tomando en cuenta que solo hay una caja operativa: ");

const tasks_1 = [
    "registrar producto(s) -> 2min",
    "ingresar datos del comprador -> 3min",
    "esperar a que se realice la transaccion -> 3min",
    "guardar producto(s) en bolsa -> 1min"
];

const tasks_3 = [
    "Se registra el producto a facturar",
    "Se ingresan los datos del comprador",
    "Se espera que se procese la transaccion",
    "Se guarda el producto en una bolsa"
];
//console.log("las tareas a realizar son las siguientes:");

for(let i = 0; i < tasks_1.length; i++) {
    console.log(tasks_1[i]);
}

let clientes = true;

function time(ms) {

    return new Promise((resolve, reject) => {
        if (clientes) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("No hay clientes por atender"));
        };
    });
};

async function procesos() {
    try {
        await time(2000);
        console.log(`Paso 1: ${tasks_3[0]}`);

        await time(3000);
        console.log(`Paso 2: ${tasks_3[1]}`);

        await time(3000);
        console.log(`Paso 3: ${tasks_3[2]}`);

        await time(1000);
        console.log(`Paso 4: ${tasks_3[3]}`);

    } catch (error) {
        console.log("el cliente se salio de la fila", error);
    }

    finally {
        console.log("tiempo total de ejecucion: 9min");
        console.log(`La media de clientes atendidos en 8h es de ${Math.round(media_1)} clientes`);
    };
};

procesos();

let mensaje = `Como podemos ver el tiempo de respuesta para atender a los clientes y realizar las actividades esta sujeto a la cantidad de cajas operativas, entonces podemos proceder a habilitar una segunda caja y analizar el resultado`;

const tasks_2 = [
    "registrar producto(s) -> 1min",
    "ingresar datos del comprador -> 1.5min",
    "esperar a que se realice la transaccion -> 1.5min",
    "guardar producto(s) en bolsa -> 0.5min"
];

let media_1 = 480 / 9;
let media_2 = 480 / 4.5;
let mejora = media_2 - media_1;
let procentaje = (mejora / media_1) * 100;

async function procesos_2() {
    try {

        await time(11000);
        console.log(mensaje);

        for(let i = 0; i < tasks_2.length; i++) {
            console.log(tasks_2[i]);
        }

        await time(1000);
        console.log(`Paso 1: ${tasks_3[0]}`);

        await time(1500);
        console.log(`Paso 2: ${tasks_3[1]}`);

        await time(1500);
        console.log(`Paso 3: ${tasks_3[2]}`);

        await time(500);
        console.log(`Paso 4: ${tasks_3[3]}`);

    } catch (error) {
        console.log("el cliente se salio de la fila", error);
    }

    finally {
        console.log("tiempo total de ejecucion: 4.5min");
        console.log(`La media de clientes atendidos en 8h es de ${Math.round(media_2)} clientes`);
        console.log(`Resultando en un incremento de ${Math.round(mejora)} clientes atendidos en una jornada`);
        console.log(`Resultando en un incremento de ${Math.round(procentaje)}%`);
    };
};

procesos_2();
