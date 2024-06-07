export class Tarea{
    public nombreTarea: string='';
    public prioridad: string='';
    public descripcion: string='';
    public fechaCreacion: string='';
    public status: boolean=true;
    constructor(nombreTarea: string, prioridad: string, descripcion: string, fechaCreacion: string, status: boolean) {
        this.nombreTarea = nombreTarea;
        this.prioridad = prioridad ;
        this.descripcion = descripcion || '';
        this.fechaCreacion = fechaCreacion ; 
        this.status = status; // Allow overriding status
      }
}