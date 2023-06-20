import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators'
import { Page } from '../interfaces/getnewmovies/page';
import { Searched } from '../interfaces/searchmovies/searched';

@Injectable({ providedIn: 'root' })
export class GetMoviesService {

  constructor(private http: HttpClient) { }

  private apiNewUrl = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page="
  private apiSearchUrl = "http://www.omdbapi.com?s="
  private apiSearchUrlSuffix = "&apikey=f91ddec1"

  fetchNewMovies(): Observable<Page>{
    const oHeaders = new HttpHeaders({"X-RapidAPI-Key": "650dbe08b6msh67af47a89fe2d43p1cdbfdjsna6743fa4f9cd", "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"})
    return this.http.get<Page>(`${this.apiNewUrl}1`, {headers: oHeaders})
  }

  fetchSearchMovies(movie: string): Observable<Searched>{
    return this.http.get<Searched>(`${this.apiSearchUrl}${movie}${this.apiSearchUrlSuffix}`)
  }
}
