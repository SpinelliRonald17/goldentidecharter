document.addEventListener('DOMContentLoaded', () => {
            const btnToggle = document.getElementById('btnToggle');
            const contenedor = document.getElementById('formularioContenedor');
            const widget = document.getElementById('widgetContacto');

            btnToggle.addEventListener('click', () => {
                widget.classList.toggle('abierto');
                const estaExpandido = btnToggle.getAttribute('aria-expanded') === 'true';
                btnToggle.setAttribute('aria-expanded', !estaExpandido);

                if (!estaExpandido) {
                    contenedor.style.maxHeight = contenedor.scrollHeight + "px";
                } else {
                    contenedor.style.maxHeight = "0px";
                }
            });
        });