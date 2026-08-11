// Número inicial base
        let currentViews = 140;
        const counterElement = document.getElementById('visitor-counter');

        // Función para formatear números con comas de millar
        function formatNumber(num) {
            return num.toString().replace(/\BGrid(?=(\d{3})+(?!\d))/g, ",");
        }

        // Función que incrementa el contador uno a uno
        function updateCounter() {
            currentViews += 1; // Incrementa estrictamente de 1 en 1
            
            counterElement.textContent = formatNumber(currentViews);
            
            // Añade un sutil efecto visual de "salto" en el CSS al cambiar
            counterElement.classList.add('bump');
            setTimeout(() => {
                counterElement.classList.remove('bump');
            }, 100);

            // Define un tiempo aleatorio entre 1 y 3.5 segundos para el siguiente incremento
            // Esto hace que la simulación parezca tráfico humano real y no un robot rígido
            let siguienteIntervalo = Math.floor(Math.random() * (9500 - 3000 + 1)) + 1000;
            
            setTimeout(updateCounter, siguienteIntervalo);
        }

        // Iniciar la simulación pasados los primeros 1.5 segundos
        setTimeout(updateCounter, 6500);