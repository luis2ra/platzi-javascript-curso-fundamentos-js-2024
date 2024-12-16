// Clase padre estudiante
class estudiante {
    constructor (nombre, edad, grado){
      this.nombre = nombre;
      this.edad = edad;
      this.grado = grado;
      }
  // Método que comparten todos los estudiantes
  saludar() { 
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
}
  
// Clase hija estudianteUniversitario que hereda de Estudiante
class estudianteUniversitario extends estudiante{
  constructor (nombre, edad, grado,materiaFavorita){
    // Llamamos al constructor de la clase padre con 'super'
    super (nombre, edad, grado);
    this.materiaFavorita = materiaFavorita; // Nueva propiedad específica de estudianteUniversitario
  }
  mostrarClaseFavorita (){
    console.log(`Mi clase favorita es ${this.materiaFavorita}`)
  }
}
  
// Crear una instancia de estudianteUniversitario
const estudianteUni = new estudianteUniversitario ("Miguel", 23, "11°", "Matematicas");

// Usamos los métodos heredados y los específicos
estudianteUni.saludar();
estudianteUni.mostrarClaseFavorita();
  