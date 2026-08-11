<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Recoger y limpiar los datos del formulario para evitar inyecciones
    $nombre = strip_tags(trim($_POST["nombre"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars(trim($_POST["mensaje"]));

    // 2. CONFIGURACIÓN DEL CORREO (Modifica esto)
    // El correo a donde te van a llegar los mensajes (ej: tu correo personal o corporativo)
    $destinatario = "info@goldentidecharter.com"; 
    
    // Asunto del correo
    $asunto = "Nuevo mensaje de contacto de: $nombre";

    // 3. Construir el cuerpo del email
    $contenido_email = "Has recibido un nuevo mensaje desde el formulario de tu web.\n\n";
    $contenido_email .= "Nombre: $nombre\n";
    $contenido_email .= "Email: $email\n\n";
    $contenido_email .= "Mensaje:\n$mensaje\n";

    // 4. Cabeceras del correo (Importante para evitar que caiga en Spam)
    // Hostinger exige que el 'From' sea una cuenta existente de tu propio dominio
    $remitente_sistema = "no-reply@tudominio.com"; 
    
    $headers = "From: Web Contacto <" . $remitente_sistema . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n"; // Al responder el correo, le responderás directamente al cliente
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 5. Enviar el correo
    if (mail($destinatario, $asunto, $contenido_email, $headers)) {
        // Redirección si el envío es exitoso (puedes crear una página de gracias)
        echo "<script>alert('Mensaje enviado con éxito. Nos contactaremos pronto.'); window.location.href='index.html';</script>";
    } else {
        // Alerta si ocurre un error en el servidor
        echo "<script>alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.'); window.history.back();</script>";
    }
} else {
    // Si intentan entrar directo al archivo PHP sin rellenar el formulario, los echa
    header("Location: index.html");
    exit;
}
?>