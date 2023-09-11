document.addEventListener("DOMContentLoaded", function() {
    const CALCULAR = document.getElementById("calcular");
    const BORRAR = document.getElementById("borrar");
    const ERROR = document.getElementById("error");
    const FLU = document.getElementById("flu");
    const MAN = document.getElementById("man");
    const METODO = document.getElementById("metodo");
    const PESO_INPUT = document.getElementById('peso');

    CALCULAR.addEventListener("click", () => {
        const DATO = PESO_INPUT.value;

        if (DATO > 0) {
            ERROR.style.display = "none";
            let flujo = calcFlujo(DATO);
            let mantenimiento = flujo * 1.5;
     
            FLU.textContent = `Volumen diario en cc: ${flujo}`;
            MAN.textContent = `Mantenimiento en cc/hr: ${mantenimiento}`;
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        } else {
            ERROR.style.display = 'block';
            FLU.style.display = 'none';
            MAN.style.display = 'none';
        }
    });

    BORRAR.addEventListener("click", () => {
        // Limpiar el valor del campo de entrada de peso
        PESO_INPUT.value = "";
        // Limpiar los resultados y el mensaje de error
        FLU.textContent = "";
        MAN.textContent = "";
        METODO.textContent = "Método utilizado: ";
        ERROR.style.display = 'none';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    });

    function calcFlujo(peso) {
        let resultado = 0;
        let metodo = "";

        if (peso <= 30) {
            if (peso <= 10) {
                resultado = peso * 100;
            }
            if (peso > 10 && peso <= 20) {
                resultado = 1000 + (resultado + ((peso - 10) * 50));
            }
            if (peso > 20 && peso <= 30) {
                resultado = 1500 + (resultado + ((peso - 20) * 20));
            }
            metodo = "Holliday-Segar";
        } else {
            let corporal = ((peso * 4) + 7) / (peso + 90);
            resultado = corporal * 1500;
            metodo = "SC";
        }

        METODO.textContent = `Método utilizado: ${metodo}`;
        return resultado;
    }
});
