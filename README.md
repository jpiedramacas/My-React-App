**Administrador de Usuarios - Aplicación React**

Este proyecto es un simple administrador de usuarios desarrollado en React. Permite a los usuarios agregar nuevos usuarios, eliminar usuarios existentes y muestra estadísticas básicas sobre la cantidad total de usuarios.

### Funcionalidades

1. **Agregar Usuarios**
   - Los usuarios pueden agregar nuevos usuarios utilizando el formulario de agregación provisto.
   - Para agregar un usuario, simplemente ingresan el nombre y hacen clic en el botón "Agregar Usuario".

2. **Eliminar Usuarios**
   - Los usuarios existentes pueden ser eliminados individualmente haciendo clic en el botón "Eliminar" junto a su nombre en la lista de usuarios.

3. **Contador de Usuarios**
   - Se muestra en tiempo real la cantidad total de usuarios en la lista.

### Estructura del Proyecto

El proyecto se organiza de la siguiente manera:

- **`src/components`**: Contiene los componentes React reutilizables utilizados en la aplicación.
  - `AddUserForm.js`: Componente para agregar nuevos usuarios.
  - `DeleteUserButton.js`: Componente para eliminar usuarios.
  - `UserCounter.js`: Componente para mostrar el contador de usuarios.
  - `UserList.js`: Componente para mostrar la lista de usuarios.

- **`App.js`**: Componente principal de la aplicación que gestiona el estado de los usuarios y renderiza los componentes.

- **`App.css`**: Estilos CSS para la aplicación.

### Uso

1. Clona este repositorio en tu máquina local.
   ```
   git clone https://github.com/tu_usuario/administrador-usuarios-react.git
   ```

2. Navega al directorio del proyecto.
   ```
   cd administrador-usuarios-react
   ```

3. Instala las dependencias.
   ```
   npm install
   ```

4. Inicia la aplicación.
   ```
   npm start
   ```

5. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

### Contribuir

¡Las contribuciones son bienvenidas! Si encuentras algún error, tienes alguna sugerencia de mejora o quieres agregar nuevas características, no dudes en abrir un issue o enviar un pull request.

### Autor

Este proyecto fue desarrollado por [Tu Nombre](https://github.com/jpiedramacas).

### Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
