import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class UserService {

  private usersUrl = 'https://localhost:8080/api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    key: `MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBL/mtdiZmHHDd
    UbEPPVmkKIUrjpwYsj8S5fRlybAdchUi7D2Coz57WbOLgU1uzArJpKETQzyNObuC
    1utiSpYS0+zXt1ADflyvleDsRGa1ENmAXmWEaLgONbGz4Uq6D7frt4M1R+2qyFey
    70F4r5LKypTb9TtxHGuK2bZieYq7hUqVgfAXebgP2JA4TcM9BCekisaQk3qXzfZO
    mgL9QvuuwN/DcQ1/vHKZUHLJD6D1gwZvrPBIMZGkNeEN2DUpJcSD7Hv6tLvuZnE9
    QQ1Jimsf0rDD/TMmFufhe/JRKX8A04waAi3+qUoeh538yR8QsNmK3LIdU5qHtETC
    OKxdVlsXAgMBAAECggEATNPWeHxnMu6Wl/2X65abYqRWqYbSXyPr34kh06UM6/jl
    nPjUUXK4M3ft5knq0GhG1gApqq5vkz5latgrzfAZlK1BIFyfbnQ/SfjR9UQSkGl+
    BgYEW08F+2ixHfc3r5z2qMBXZsYPJ377GYb6w5MXTpyX7I2vMQF7Z0HDvY/Wc1IS
    +5K+AE9APwgcLQVCb3uUB1Fq+6VZR6qXf5g+mtkCvyvXLQ9a0TBKzhtWMtqyYwmd
    M6SX1/S09+ZgzgVz7bjy0f29fVGk1VhxO99oH3liIuTCUFcZCuh0AH4n9HvjttL4
    0k6B6udeyLS/2ixQFbWO0AwIf3oBI6u0nAAoRMazSQKBgQDbKW+586g5fpP//NT5
    R3UhzX+d4VSOvcNMzhQJ461W4VstJEfErSPY4FVTqmK9VwHV/0REjc1bleP9B+Vc
    3AdA+qmLokQUV0pwzCbA+BYwFfhyA7t/2iEudctqMaqxhlDS3BLtfASM5Ar9C9gT
    AVD6UyDAWitiAlrUzGR6Ms9xQwKBgQDhqNrEuwLnu4yv2WQv29z/WTR9Cc38Dvc7
    XLarmcUhBhsS68pBIFvM2BE6ir3ttZZQk0e900aggTBcL5zNNchRPIsb2RyQYVHI
    gp6YbsnWFOTU4nvGtKRCMo0oM5LgqhfcINFhSJIoiXQMW/Razj74xQAxzxOWeZLq
    PdvGs023nQKBgQDXVFwQ4OSNMN+rKTf7gIkGYEkdzxHseWgU43luygM6lIqnzLiy
    9cZ9xNQxMvx2ubD1GCx0CrsVXC04I/ToCssZve6tYg3vymA6eWsuN9JdBoknRKGJ
    mcD2TAhDW28xox1wP4hdS3eRElH1lBiFe8qbWOeZ9j4fut6RrAygv6FvzwKBgH5M
    S2UgZhfc2Hjzayd+Hsqr2rzA6BDTL3yB/5s7jSFWkYCdh627tqWHqNzjGjoZD/A4
    /kY4IadjpvVxkIkqONt+zzze3yXP0j4vHSSjnUO8nfaobC5inCyQroB5nRMxH/mM
    RKP2Qhd+Fv1z2eeY15XUbK9z/rqRgLCpvoAPisfhAoGAWtYrLC9dHgcmVfD49jMv
    5EpUiNqlVeFDQDYgKt5/4l3H5vODswFBpf0q0pQfG67gA7bHkhexQuwmJxr+8nAL
    W7qWjJGVv7c13QKyCZO1YHecXs6Hfa2YILRJoKuw9qZacju7xToAdFY1nyef1nbJ
    1HWZVquqHM/GIy5er1Xn/dc=`,
    cert: ` MIIDsTCCApkCFEDLHwqPriU5h7dbIBpzIRzdB446MA0GCSqGSIb3DQEBCwUAMIGU
    MQswCQYDVQQGEwJCUjEXMBUGA1UECAwORVNQSVJJVE8gU0FOVE8xEzARBgNVBAcM
    ClZJTEEgVkVMSEExDTALBgNVBAoMBFVGRVMxDTALBgNVBAsMBFVGRVMxDTALBgNV
    BAMMBFVGRVMxKjAoBgkqhkiG9w0BCQEWG2RheWFuZS5zLmNhc3Ryb0BlZHUudWZl
    cy5icjAeFw0yMjA1MTYwMTQ3MTVaFw00OTA5MzAwMTQ3MTVaMIGUMQswCQYDVQQG
    EwJCUjEXMBUGA1UECAwORVNQSVJJVE8gU0FOVE8xEzARBgNVBAcMClZJTEEgVkVM
    SEExDTALBgNVBAoMBFVGRVMxDTALBgNVBAsMBFVGRVMxDTALBgNVBAMMBFVGRVMx
    KjAoBgkqhkiG9w0BCQEWG2RheWFuZS5zLmNhc3Ryb0BlZHUudWZlcy5icjCCASIw
    DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMEv+a12JmYccN1RsQ89WaQohSuO
    nBiyPxLl9GXJsB1yFSLsPYKjPntZs4uBTW7MCsmkoRNDPI05u4LW62JKlhLT7Ne3
    UAN+XK+V4OxEZrUQ2YBeZYRouA41sbPhSroPt+u3gzVH7arIV7LvQXivksrKlNv1
    O3Eca4rZtmJ5iruFSpWB8Bd5uA/YkDhNwz0EJ6SKxpCTepfN9k6aAv1C+67A38Nx
    DX+8cplQcskPoPWDBm+s8EgxkaQ14Q3YNSklxIPse/q0u+5mcT1BDUmKax/SsMP9
    MyYW5+F78lEpfwDTjBoCLf6pSh6HnfzJHxCw2Yrcsh1Tmoe0RMI4rF1WWxcCAwEA
    ATANBgkqhkiG9w0BAQsFAAOCAQEAh7ipHAb/n7Bv/GT+DdK3/J1nCHb2QUnB2P1W
    RRbRXPDKVRBGb4POIw0QKzpf8UAYyCojRXx1A6bZka4yozzYmWTTU5BVE6jZYx1x
    VbUBu9dURS3TmO4AintxbN9SZ06+xCbIo45thCLsoyQdIeSLb5gcI4jjb6pSrI3k
    y7E1N+xSJsPAWE6BgFVmZLHt2xHdL2yEOw2DlAPzNIUC2xZfJNJiXpZ1gb4p9AQG
    eJGkzFglBdS/cqUgEgjRnv8HVXgce/3PcT0UrzTfbZeIVVnrHFdInQmBtsu2kNrA
    1DoUmguY1q2dXnMkOb/x3O22uzWMcEaAHCF6fjG8g6I3YAdp8g==`
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET users from the server */
  getUsers(): Observable<User[]> {
    this.http.get<User[]>(this.usersUrl)
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  /** GET user by id. Return `undefined` when id not found */
  getUserNo404<Data>(id: number): Observable<User> {
    const url = `${this.usersUrl}/?id=${id}`;
    return this.http.get<User[]>(url)
      .pipe(
        map(users => users[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} user id=${id}`);
        }),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }

  /** GET user by id. Will 404 if id not found */
  getById(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getById id=${id}`))
    );
  }

  /* GET users whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty user array.
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found users matching "${term}"`) :
         this.log(`no users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /** DELETE: delete the user from the server */
  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /** PUT: update the user on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
}
