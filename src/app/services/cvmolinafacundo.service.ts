import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvmolinafacundoService {
  cursos: any[] = [];
  idioma: any[] = [];
  profesional: any[] = [];
  experiencia: any[] = [];
  educacion: any[] = [];
  proyectos: any[] = [];
  /* cv: any; */

  constructor(private http: HttpClient) {
    this.CargarIdioma();
    this.CargarCursos();
    this.CargarProfesional();
    this.CargarExperiencia();
    this.CargarEducacion();
    this.CargarProyectos();
  }
  /*'https://cv-molinafacundo-default-rtdb.firebaseio.com/Cursos%20realizados.json'*/
  private CargarIdioma(){
    this.http.get('https://cv-molinafacundo-default-rtdb.firebaseio.com/Idioma.json')
      .subscribe((resp: any) => {
        this.idioma = resp;
        console.log(resp);
    });
  }
  private CargarCursos(){
    this.http.get('https://cv-molinafacundo-default-rtdb.firebaseio.com/Cursos%20realizados.json')
      .subscribe((resp: any) => {
        this.cursos = resp;
        console.log(resp);
    });
  }
  private CargarProfesional(){
    this.http.get('https://cv-molinafacundo-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp: any) => {
        this.profesional = resp;
        console.log(resp);
    });
  }

  private CargarEducacion(){
    this.http.get('https://cv-molinafacundo-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp: any) => {
        this.educacion = resp;
        console.log(resp);
    });
  }

  private CargarExperiencia(){
    this.http.get('https://cv-molinafacundo-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe((resp: any) => {
        this.experiencia = resp;
        console.log(resp);
    });
  }
  private CargarProyectos(){
    this.http.get('https://cv-molinafacundo-default-rtdb.firebaseio.com/Proyectos.json')
      .subscribe((resp: any) => {
        this.proyectos = resp;
        console.log(resp);
    });
  }
}
