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
        catchError(this.handleError("getUser", []))
      );
  }
}
