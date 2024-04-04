# OpenSource_Grupo_2
Landing page sección: WS52 Ciclo 5
<div class="registro">
        <div class="form-container">
            <div class="options">
                <button class="active">Registrarse</button>
                <button>Iniciar Sesión</button>
            </div>
            <form>
                <input type="text" placeholder="Nombre de usuario">
                <input type="password" placeholder="Contraseña">
                <button type="submit">Enviar</button>
            </form>
        </div>
        <div class="image-container">
            <img src="tu_imagen.jpg" alt="Imagen">
        </div>
    </div>


    ----


    .registro {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form-container {
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    color: #0B3C5D;
  }
  
  button.active {
    background-color: #FFD166;
    color: #0B3C5D;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
  }
  
  button[type="submit"] {
    background-color: #FFD166;
    color: #0B3C5D;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .image-container {
    margin-left: 20px;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  ==============0


  .registro {
    background-color: #FFFFFF;
    color: #0B3C5D;
    padding: 80px;
    text-align: center;
}

.registro h2 {
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
    font-size: 16px;
}

button[type="submit"] {
    background-color: #FFD166;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: #FFB319;
}

/* fin registros*/




 <div class="registro" id="registro">
        <h2>Regístrate</h2>
        <form id="registro-form">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>
            <div class="form-group">
                <label for="apellido">Apellido</label>
                <input type="text" id="apellido" name="apellido" required>
            </div>
            <div class="form-group">
                <label for="correo">Correo</label>
                <input type="email" id="correo" name="correo" required>
            </div>
            <div class="form-group">
                <label for="dni">DNI</label>
                <input type="text" id="dni" name="dni" pattern="[0-9]{8}" title="Debe contener 8 dígitos numéricos" required>
            </div>
            <div class="form-group">
                <label for="contraseña">Contraseña</label>
                <input type="password" id="contraseña" name="contraseña" minlength="8" required>
            </div>
            <div class="form-group">
                <label for="confirm-contraseña">Repetir Contraseña</label>
                <input type="password" id="confirm-contraseña" name="confirm-contraseña" minlength="8" required>
            </div>
            <button type="submit">Registrarse</button>
        </form>
    </div>