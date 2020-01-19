import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map, share } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface UserDetails {
  id: number
  name: string
  email: string
}

interface TokenResponse {
  token: string
}


export interface users {
  exp: string
}

export interface TokenPayload {
  id: number
  name: string
  // last_name: string
  email: string
  password: string
}

export interface loginTokenPayload {
  email: string
  password: string
}

interface SearchResults {
  total: number;
  results: Array<object>;
}

export interface Player {
  id: Number,
  name: String,
  answers: Number,
points: number
}

@Injectable()
export class AuthenticationService {
  private token: string
private userData:any
public result$: Observable<any> = null;

  constructor(private http: HttpClient, private router: Router) {
    this.result$ = this.http
          .get('https://api.github.com/users/hbrotan')
          .pipe(share());
  }

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }


  public getUserDetails(): UserDetails {
    const userdata = this.profile_check();
    return userdata.user;
  }


  public getUserDetailsToken(): number {
    const token = this.getToken();
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
     let check= JSON.parse(payload);
     return check.exp;
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetailsToken()
    if (user) {
      return user > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/api/register`, user)
  }

  public profile_check(){
    const token = this.getToken();
    if (token) {
        this.http.get('http://127.0.0.1:8000/api/profile?token='+token).subscribe(data => {
          this.userData=data;
      });
      return this.userData;
    } else {
      return false;
    }
  }

  

  public login(user: loginTokenPayload): Observable<any> {
    const base = this.http.post(`http://127.0.0.1:8000/api/login`, user)
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }
}
