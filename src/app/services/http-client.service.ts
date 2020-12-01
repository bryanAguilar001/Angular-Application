import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user.model';

/*
* Variable para adicionar información a las peticiones
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  //Variable global para manejar la dirección del servidor
  private SEVER_URL: string = 'https://your-server.com';

  constructor(
    private httpClient: HttpClient
  ) { }

  private getEndUrl(endPoint: string): string {
    return `${this.SEVER_URL}${endPoint}`;
  }

  private doGetRequest(url: string): Observable<any> {
    console.log('Enviando HTTP GET: ' + url);
    return this.httpClient.get(url, httpOptions);
  }

  private doPostRequest(url: string, body: any = null, requestOptions: HttpHeaders = null): Observable<any> {
    console.log('Enviando HTTP POST: ' + url);
    return this.httpClient.post(url, body, httpOptions);
  }

  private doPutRequest(url: string, body: any = null, requestOptions: HttpHeaders = null): Observable<any> {
    console.log('Enviando HTTP PUT: ' + url);
    return this.httpClient.put(url, httpOptions);
  }

  private doDeleteRequest(url: string, body: any = null, requestOptions: HttpHeaders = null): Observable<any> {
    console.log('Enviando HTTP DELETE: ' + url);
    return this.httpClient.put(url, httpOptions);
  }

  public testConnection(url: string = null): Observable<any> {
    return this.doGetRequest(url + "/test");
  }

  /* Http request - get*/
  public get(): Observable<any> {
    let url = this.getEndUrl(`/api/example/get`);
    return this.doGetRequest(url);
  }

  /* Http request - post*/
  public post(param: any): Observable<any> {
    let url = this.getEndUrl('/api/example/post');
    return this.doPostRequest(url, param);
  }

  /* Http request - put*/
  public put(param: any): Observable<any> {
    let url = this.getEndUrl('/api/example/post');
    return this.doPutRequest(url, param);
  }

  /* Http request - delete*/
  public delete(param: any): Observable<any> {
    let url = this.getEndUrl('/api/example/delete');
    return this.doDeleteRequest(url, param);
  }

  /* Login */
  public login(user: User) {
    console.log(user);
  }

}
