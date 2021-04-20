
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
 /* public employeeData: any = data*/
  constructor(private http: HttpClient) { }
  //getData() {
  //  console.info("calling...")
  //  return this.http
  //    .get('https://localhost:44389/api/QuestionType/GetAll')
  //  //.get<employee[]>(this.employeeData)
  //  // .pipe(map(x => x));
  //}

  getData(): Observable<any> {
    return this.http.get('https://localhost:44389/api/QuestionType/GetAll');
  }
}
