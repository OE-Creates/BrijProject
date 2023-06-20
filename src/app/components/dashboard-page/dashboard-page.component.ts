import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '../../interfaces/getnewmovies/page';
import { Result } from '../../interfaces/getnewmovies/result';
import { Searched } from '../../interfaces/searchmovies/searched';
import { Search } from '../../interfaces/searchmovies/search';
import { GetMoviesService } from '../../services/getmovies.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})

export class DashboardPageComponent implements OnInit {

  constructor(private router: Router, private getMovies: GetMoviesService) {}

  userName = ""

  upcomingMovieList: Result[] = []
  searchedMovieList: Search[] = []

  userData = {
    usrnme: "",
    psswrd: ""
  }

  logOut() {
    this.router.navigate(['/'])
  }

  ngOnInit() {
    this.displayUserName()
    this.fetchUpcomingMovieList()
    this.displaySuggestions()
  }

  private displayUserName() {
    const localData = localStorage.getItem("loggedInUser")
    if (localData != null) {
      this.userData = JSON.parse(localData)
      this.userName = this.userData.usrnme
    }
  }

  private fetchUpcomingMovieList() {
    this.getMovies.fetchNewMovies()
    .subscribe(
      (response: Page) => this.upcomingMovieList = response.results,
      (error: any) => console.log(error),
      () => console.log("Movie List Received.")
    )
  }

  search: string = ""

  fetchSearchData() {
    if (this.search.length >= 3)
    {
      setTimeout(()=>{
          this.fetchSearchedMovieResult()
        }, 1000)
    }
    else {
      this.searchedMovieList = []
    }
  }

  private fetchSearchedMovieResult() {
    this.getMovies.fetchSearchMovies(this.search)
    .subscribe(
      (response: Searched) => this.searchedMovieList = response.Search,
      (error: any) => console.log(error),
      () => console.log("Search List Received.")
    )
  }

  choice: string = ""
  reason: string = ""
  image: string = ""

  suggestionObj = {
    chce: "",
    rson: "",
    imge: ""
  }

  suggestionArray: any[] = []

  storeSuggestion() {
      this.suggestionObj.chce = this.choice
      this.suggestionObj.rson = this.reason
      this.suggestionObj.imge = this.image
      this.suggestionArray.push(this.suggestionObj)
      localStorage.setItem("userSuggestions", JSON.stringify(this.suggestionArray))

      this.suggestionObj = {
        chce: "",
        rson: "",
        imge: ""
      }
  }

  displaySuggestions() {
    let suggData = localStorage.getItem("userSuggestions")
    if (suggData != null) {
      this.suggestionArray = JSON.parse(suggData)
    }
  }
}
