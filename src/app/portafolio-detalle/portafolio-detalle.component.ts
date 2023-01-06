import { Component, OnInit } from '@angular/core';
import { CvmolinafacundoService } from '../services/cvmolinafacundo.service';
import {Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-portafolio-detalle',
  templateUrl: './portafolio-detalle.component.html'
})
export class PortafolioDetalleComponent implements OnInit {
  Proyectos:any = {};
  constructor(public cv: CvmolinafacundoService, private storage: Storage) 
  {}

  ngOnInit(): void {
  }

}

