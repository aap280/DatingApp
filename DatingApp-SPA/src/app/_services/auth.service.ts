import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  baseUrl = "//localhost:5000/api/auth/";

  constructor(private http: HttpClient) {}

  login(model: any) {
    const url = this.baseUrl + "login";
    return this.http.post(url, model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
        }
      })
    );
  }

  register(model: any) {
    const url = this.baseUrl + 'register';
    return this.http.post(url, model);
  }
}
