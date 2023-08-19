console.log("Sin solventar el problema");

const tasks_1 = [
    "registrar producto(s) -> 2min",
    "ingresar datos del comprador -> 3min",
    "esperar a que se realice la transaccion -> 3min",
    "guardar producto(s) en bolsa -> 1min"
];

console.log("las tareas a realizar son las siguientes:");

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
        console.log("Se ha(n) registrado el(los) producto(s) del comprador");

        await time(3000);
        console.log("se han ingresado los datos del comprador");

        await time(1500);
        console.log("la compra se realizo correctamente");

        await time(1000);
        console.log("se guardaron los productos en la bolsa");

    } catch (error) {
        console.log("el cliente se cambio de fila", error);
    }

    finally {
        console.log("tiempo total de ejecucion: 9min");
    };
};

procesos();

let mensaje = `Como podemos ver, el problema radica en el ingreso de los datos del comprador.
Este problema se puede resolver si agregamos otra caja, reduciendo el tiempo a la mitad`;

const tasks_2 = [
    "registrar producto(s) -> 2min",
    "ingresar datos del comprador -> 1.5min",
    "esperar a que se realice la transaccion -> 3min",
    "guardar producto(s) en bolsa -> 1min"
];

async function procesos_2() {
    try {

        await time(10000);
        console.log(mensaje);

        for(let i = 0; i < tasks_2.length; i++) {
            console.log(tasks_2[i]);
        }

        await time(2000);
        console.log("Se ha(n) registrado el(los) producto(s) del comprador");

        await time(1500);
        console.log("se han ingresado los datos del comprador");

        await time(3000);
        console.log("la compra se realizo correctamente");

        await time(1000);
        console.log("se guardaron los productos en la bolsa");

    } catch (error) {
        console.log("el cliente se cambio de fila", error);
    }

    finally {
        console.log("tiempo total de ejecucion: 7.5min");
    };
};

procesos_2();