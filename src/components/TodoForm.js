import React, { useState, useEffect } from 'react';

function TodoForm({ onAdd }) {
  // Estado para el texto de la nueva tarea
  const [text, setText] = useState(() => {
    // Obtener el valor almacenado en el localStorage
    const saved = localStorage.getItem("text");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  // useEffect para almacenar el valor del input en el localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text));
  }, [text]);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Evitar agregar tarea vacía
    if (!text.trim()) return;
    // Llamar a la función onAdd con el texto de la tarea
    onAdd(text);
    // Limpiar el texto después de agregar la tarea
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input para ingresar el texto de la nueva tarea */}
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* Botón para agregar la tarea */}
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TodoForm;
