
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
 /* public employeeData: any = data*/
  constructor(private http: HttpClient) { }
  getData() {
    console.info("calling...")
    return this.http
      .get('assets/employee.json')
    //.get<employee[]>(this.employeeData)
    // .pipe(map(x => x));
  }
}
