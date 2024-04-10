class Jugador {
    nombre: string;
    goles: number;
    asistencias: number;
    numeroEspalda: number;
    imagen: string;
    
    constructor(nombre: string, goles: number, asistencias: number, numeroEspalda: number, imagen: string) {
        this.nombre = nombre;
        this.goles = goles;
        this.asistencias = asistencias;
        this.numeroEspalda = numeroEspalda;
        this.imagen = imagen;
    }
    
    desplegar(): string {
        return ` 
        
        
        <img src=" ${this.imagen}" alt="imagen" width="100" height="100">
        
        
       `
        ;
    }

}