import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Doc {
  title: string;
  text: string;
  _id: string;
  createdAd: string;
  updatedAt: string;
}

@Injectable()
export class DocApiService {

  constructor(private httpThing: HttpClient) { }

  // GET /api/dashboard
  getDocs() {
    return this.httpThing.get(
      `${environment.backendURL}/api/dashboard`,
      {withCredentials: true}
    ).toPromise();
  }

  // GET /api/doc/:id
  getOneDoc(oneId: string) {
    return this.httpThing.get(
      `${environment.backendURL}/api/doc/${oneId}`,
      {withCredentials: true}
    ).toPromise();
  }

  // PATCH /api/doc/:id
  editOneDoc(oneId: string, docInfo: Doc) {
    return this.httpThing.patch(
      `${environment.backendURL}/api/doc/${oneId}`,
      docInfo,
    {withCredentials: true}
  ).toPromise();
  }

  // DELETE /api/doc/:id
  deleteOneDoc(oneId: string) {
    return this.httpThing.delete(
      `${environment.backendURL}/api/doc/${oneId}`,
      {withCredentials: true}
    ).toPromise();
  }




}
