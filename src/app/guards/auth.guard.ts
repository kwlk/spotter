import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable(obs => {
      this.afAuth.authState.subscribe((user) => {
        if (!user) {
          console.error("User not authorized!");

          this.router.navigate(['/login']);
          obs.next(false);
        }

        obs.next(true);
      });
    });
  }

}
