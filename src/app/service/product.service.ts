import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://192.168.100.84:3001/';

  private refreshNewData = new Subject<void>();

  get RefreshNewData() {
    return this.refreshNewData;
  }

  SaveProduct(productData: any) {
    return this.httpClient.post(this.apiUrl + 'products', productData).pipe(
      tap(() => {
        this.refreshNewData.next();
      })
    );
  }

  GellAllProducts() {
    return this.httpClient
      .get(this.apiUrl + 'products')
      .pipe(catchError(this.handleError));
  }

  GellProductsId(productId: string) {
    return this.httpClient
      .get(this.apiUrl + `products/${productId}`)
      .pipe(catchError(this.handleError));
  }

  EditProduct(productId: string, productData: any) {
    return this.httpClient
      .put(this.apiUrl + `products/${productId}`, productData)
      .pipe(catchError(this.handleError));
  }

  DeleteProduct(productId: string) {
    return this.httpClient
      .delete(this.apiUrl + `products/${productId}`)
      .pipe(catchError(this.handleError));
  }

  getColor() {
    return this.httpClient
      .get(this.apiUrl + 'color')
      .pipe(catchError(this.handleError));
  }

  getCategory() {
    return this.httpClient
      .get(this.apiUrl + 'category')
      .pipe(catchError(this.handleError));
  }

  getSize() {
    return this.httpClient
      .get(this.apiUrl + 'size')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
