import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { User } from "src/entity/User";
import { API_URL } from "src/environments/back_url";
import { RequestHttpService } from "../requestHttpService";

@Injectable({
  providedIn: "root"
})
export class UserService extends RequestHttpService {
  constructor(public http: HttpClient) {
    super();
  }

  getUserById(idUser: number): Observable<User> {
    return this.http
      .get(this.serverUrl + API_URL.USER + "/" + idUser, this.httpOptions)
      .pipe(
        map((res: any) => res),
        catchError(this.handleError("getUser", null))
      );
  }

  login(userLogin: FormData): Observable<any> {
    return this.http
      .post(this.serverUrl + API_URL.LOGIN, userLogin)
      .pipe(
        map((res: any) => res),
        catchError(this.handleError("login", null))
      );
  }

  register(user: FormData): Observable<User> {
    return this.http.post(this.serverUrl + API_URL.REGISTER, user).pipe(
      map((res: User) => res),
      catchError(this.handleError("register", null))
    );
  }
}
