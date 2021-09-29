import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  //news api url
  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e93bfd8dd99946c4abfb06c131b93b15';

  //technewsapiurl
  techApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=e93bfd8dd99946c4abfb06c131b93b15';

  //businessnewsapiurl
  businessApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e93bfd8dd99946c4abfb06c131b93b15';

  //topHeading()
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  //technews()
  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  //businessnews()
  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }
}
