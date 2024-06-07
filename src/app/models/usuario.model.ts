export class Usuario{
    public email: string='';
    public nombre: string='';
    public dob: string='';
    public pass: string='';
    public genero: string='';
    constructor(email: string, nombre: string, dob: string, pass: string, genero: string) {
        this.email = email;
        this.nombre = nombre;
        this.dob = dob;
        this.pass = pass;
        this.genero = genero;
      }
}