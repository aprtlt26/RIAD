<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conexión a la base de datos
    $conn = new mysqli("Localhost", "root", "password", "usuarios");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Procesar los datos del formulario
    $nombre = $conn->real_escape_string($_POST['nombre']);  // Asegúrate de sanitizar y validar apropiadamente
    $email = $conn->real_escape_string($_POST['email']);
    // Similar para otros campos

    // Guardar el archivo de imagen
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["profilePhoto"]["name"]);
    move_uploaded_file($_FILES["profilePhoto"]["tmp_name"], $target_file);

    // SQL para insertar datos
    $sql = "INSERT INTO usuarios (nombre, email, foto_perfil) VALUES ('$nombre', '$email', '$target_file')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
