import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvmolinafacundoService {

  profesional: any[] = [];
  educacion: any[] = [];
  experiencia: any[] = [];
  proyectos: any[] = [];
  /* cv: any; */

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarExperiencia();
    this.CargarProyectos();
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
