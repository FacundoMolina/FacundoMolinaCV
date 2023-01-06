import { Component, OnInit } from '@angular/core';
import { CvmolinafacundoService } from '../services/cvmolinafacundo.service';
import {Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  
  images: string[];
  constructor(public cv: CvmolinafacundoService,
              private storage: Storage) 
              {
                this.images = [];
              }
  
  ngOnInit(): void {
    this.getImages();
  }
  
  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
    .then(async response => {
      console.log(response);
      
      this.images = [];
      for(let item of response.items){
        const url = await getDownloadURL(item);
        this.images.push(url);
      }
    })
    .catch(error => console.log(error));
  }

}
