import { Injectable } from '@angular/core';
import { Mascota } from '../../mascotas/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor() { }

  mascotasList: Mascota[] = [
    {
      "id": 1,
      "nombre": "Jack",
      "raza": "Siamés",
      "edad": 2,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://blogger.googleusercontent.com/img/a/AVvXsEjkJLupeAFKtrO6_cQuZlns2Og3ur5WTFilP13nVwThhYDzja8Ek45mFAa5oUZwIw4kObxpDKFs_CiH6Ho6turTohDH7Fd7-iaKslaFK9zdXF-38v8KvqDX8DAzDF3FVzJY_U-ZeYBBM46osdrgG9Wm5r9y2dEJnxh4_NIzXWQF5yWnQqdwmhoZpcNF1qAN"
    },
    {
      "id": 2,
      "nombre": "Sasha",
      "raza": "Criollo",
      "edad": 5,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://blogger.googleusercontent.com/img/a/AVvXsEgvSmCBsSlMDMRVX0FBoZEHUM4iS9ceeBp6ymPsKZHbfo-eTTcDL8_VTlb_etI0SjsF9RjzupZKslmfA4eDhjq3tfBvI20mBVakHKETtpyzdcV05-yMt7_WbQUyKEx9WDS5jwrDdKOdOTmxq45eoigII5MLt-VQ9Ycf69IO2UkGW3p6hdcSAyCvVEq6o0KJ"
    },
    {
      "id": 3,
      "nombre": "Luna",
      "raza": "Persa",
      "edad": 2,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSqf5LDj1H5vzo8j7gd-Iw3Oc2Y8s2ZavlA&usqp=CAU"
    },
    {
      "id": 4,
      "nombre": "Max",
      "raza": "Maine Coon",
      "edad": 4,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNu8vbUF0Hy8wDDZ1keNcyGlILzaVabtuI9Q&usqp=CAU"
    },
    {
      "id": 5,
      "nombre": "Oliver",
      "raza": "Bengala",
      "edad": 1,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyswh9E28aNlky97G4SiOIf1-Wbl54VVl_A&usqp=CAU"
    },
    {
      "id": 6,
      "nombre": "Milo",
      "raza": "Sphynx",
      "edad": 2,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQN_qvH-nKWyHHc-D1a6JpVLRXxbfu_4yfA&usqp=CAU"
    },
    {
      "id": 7,
      "nombre": "Simba",
      "raza": "Ragdoll",
      "edad": 3,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThm7eIQFM-ZCoZBDA2LfLpo7mDi50GHRxg3Q&usqp=CAU"
    },
    {
      "id": 8,
      "nombre": "Charlie",
      "raza": "Abisinio",
      "edad": 2,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScAoBo0zZ8sQlVUB9dCxNr8Dl7Tvrbox0pPA&usqp=CAU"
    },
    {
      "id": 9,
      "nombre": "Tiger",
      "raza": "Somalí",
      "edad": 5,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8pCcU438Qew8KnCmyWCzboxBbJVFEnCCbg&usqp=CAU"
    },
    {
      "id": 10,
      "nombre": "Leo",
      "raza": "Oriental de Pelo Corto",
      "edad": 2,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoGMvz1nIoZ5aBAEiUZqMKP8KXhTSTIPSTw&usqp=CAU"
    },
    {
      "id": 11,
      "nombre": "Oscar",
      "raza": "Siberiano",
      "edad": 4,
      "enfermedad": "NA",
      "estado": true,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUMZHTtsdUZGQREg0EG9Ba3Rz1t8dmMpqag&usqp=CAU"
    }
  ]

  findAll(){
    return this.mascotasList;
  }

  findById(id:number):Mascota{
    const mascota:Mascota = this.mascotasList.find(o => o.id === id)!;
    return mascota;
  }
}
