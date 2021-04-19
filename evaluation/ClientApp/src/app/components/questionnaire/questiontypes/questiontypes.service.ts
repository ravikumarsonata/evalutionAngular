
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestiontypesService {

  constructor(private http: HttpClient) { }
  getquestiontype(type:any) {

  
    return type;
    //.get<employee[]>(this.employeeData)
    // .pipe(map(x => x));
  }



  
}
