/* =====================================================
   KAOUZA.RAW
   FRANCISCO & STEPHANY
   19 · 10 · 2027
===================================================== */


/* =========================
   ABRIR INVITACIÓN
========================= */

function abrirInvitacion() {

    const portada = document.getElementById("portada");
    const contenido = document.getElementById("contenido");
    const musica = document.getElementById("musica");

    // Intentar reproducir la música
    musica.volume = 0.35;

    musica.play().catch(error => {
        console.log("No se pudo reproducir la música:", error);
    });

    // Animación de la portada
    portada.style.opacity = "0";

    setTimeout(() => {

        portada.style.display = "none";

        contenido.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);
}


/* =========================
   CUENTA REGRESIVA
========================= */

// Fecha de la boda
const fechaBoda = new Date("October 19, 2027 17:00:00").getTime();


function actualizarCuentaRegresiva() {

    const ahora = new Date().getTime();

    const diferencia = fechaBoda - ahora;


    // Si ya llegó el día
    if (diferencia <= 0) {

        document.getElementById("dias").innerText = "00";
        document.getElementById("horas").innerText = "00";
        document.getElementById("minutos").innerText = "00";
        document.getElementById("segundos").innerText = "00";

        return;
    }


    // Cálculos
    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    // Mostrar números
    document.getElementById("dias").innerText =
        String(dias).padStart(2, "0");

    document.getElementById("horas").innerText =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").innerText =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").innerText =
        String(segundos).padStart(2, "0");
}


// Actualizar cada segundo
setInterval(actualizarCuentaRegresiva, 1000);

// Ejecutar inmediatamente
actualizarCuentaRegresiva();


/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const elementos = document.querySelectorAll(
    ".seccion, .evento, .dress-code, .galeria-section, .confirmacion"
);


const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(30px)";

    elemento.style.transition =
        "opacity 1s ease, transform 1s ease";

    observador.observe(elemento);

});


/* =========================
   EFECTO SUAVE EN FOTOS
========================= */

const fotos = document.querySelectorAll(
    ".foto-grande img, .galeria img"
);


fotos.forEach((foto) => {

    foto.addEventListener("click", () => {

        foto.classList.toggle("foto-ampliada");

    });

});


/* =========================
   MENSAJE EN CONSOLA
========================= */

console.log(
    "♡ Francisco & Stephany — 19.10.2027 ♡"
);

console.log(
    "Invitación creada con Kaouza.raw"
);
