import { HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from 'src/environments/environment';

export class RequestHttpService {
  protected serverUrl = environment.BASE_URL;
  protected httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };

  protected deleteError: DeleteResponse = { error: true };
  protected deleteSuccess: DeleteResponse = { error: false };

  constructor() {}

  protected handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}

export interface DeleteResponse {
  error: boolean;
}
