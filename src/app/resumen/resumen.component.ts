import { Component, OnInit } from '@angular/core';
import { CvmolinafacundoService } from '../services/cvmolinafacundo.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: CvmolinafacundoService) {

  }

  ngOnInit(): void {
  }

}
