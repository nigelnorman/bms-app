/* tslint:disable */
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpHeaders
} from "@angular/common/http";
import { BaseService as __BaseService } from "../base-service";
import { ApiConfiguration as __Configuration } from "../api-configuration";
import { StrictHttpResponse as __StrictHttpResponse } from "../strict-http-response";
import { Observable as __Observable } from "rxjs";
import { map as __map, filter as __filter } from "rxjs/operators";

import { UserViewModel } from "../models/user-view-model";
@Injectable({
  providedIn: "root"
})
class UsersService extends __BaseService {
  static readonly GetPath = "/api/Users";
  static readonly PostPath = "/api/Users";
  static readonly GetByIdPath = "/api/Users/{id}";
  static readonly PutPath = "/api/Users/{id}";
  static readonly DeletePath = "/api/Users/{id}";

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  /**
   * @param api-version undefined
   * @return Success
   */
  GetResponse(
    apiVersion?: string
  ): __Observable<__StrictHttpResponse<Array<UserViewModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (apiVersion != null)
      __params = __params.set("api-version", apiVersion.toString());
    let req = new HttpRequest<any>("GET", this.rootUrl + `/api/Users`, __body, {
      headers: __headers,
      params: __params,
      responseType: "json"
    });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<Array<UserViewModel>>;
      })
    );
  }
  /**
   * @param api-version undefined
   * @return Success
   */
  Get(apiVersion?: string): __Observable<Array<UserViewModel>> {
    return this.GetResponse(apiVersion).pipe(
      __map(_r => _r.body as Array<UserViewModel>)
    );
  }

  /**
   * @param params The `UsersService.PostParams` containing the following parameters:
   *
   * - `userVm`:
   *
   * - `api-version`:
   */
  PostResponse(
    params: UsersService.PostParams
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.userVm;
    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json"
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `UsersService.PostParams` containing the following parameters:
   *
   * - `userVm`:
   *
   * - `api-version`:
   */
  Post(params: UsersService.PostParams): __Observable<null> {
    return this.PostResponse(params).pipe(__map(_r => _r.body as null));
  }

  /**
   * @param params The `UsersService.GetByIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  GetByIdResponse(
    params: UsersService.GetByIdParams
  ): __Observable<__StrictHttpResponse<UserViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Users/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json"
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<UserViewModel>;
      })
    );
  }
  /**
   * @param params The `UsersService.GetByIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  GetById(params: UsersService.GetByIdParams): __Observable<UserViewModel> {
    return this.GetByIdResponse(params).pipe(
      __map(_r => _r.body as UserViewModel)
    );
  }

  /**
   * @param params The `UsersService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `userVm`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  PutResponse(
    params: UsersService.PutParams
  ): __Observable<__StrictHttpResponse<UserViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.userVm;
    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Users/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json"
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<UserViewModel>;
      })
    );
  }
  /**
   * @param params The `UsersService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `userVm`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  Put(params: UsersService.PutParams): __Observable<UserViewModel> {
    return this.PutResponse(params).pipe(__map(_r => _r.body as UserViewModel));
  }

  /**
   * @param params The `UsersService.DeleteParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   */
  DeleteResponse(
    params: UsersService.DeleteParams
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/Users/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json"
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `UsersService.DeleteParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   */
  Delete(params: UsersService.DeleteParams): __Observable<null> {
    return this.DeleteResponse(params).pipe(__map(_r => _r.body as null));
  }
}

module UsersService {
  /**
   * Parameters for Post
   */
  export interface PostParams {
    userVm?: UserViewModel;
    apiVersion?: string;
  }

  /**
   * Parameters for GetById
   */
  export interface GetByIdParams {
    id: number;
    apiVersion?: string;
  }

  /**
   * Parameters for Put
   */
  export interface PutParams {
    id: number;
    userVm?: UserViewModel;
    apiVersion?: string;
  }

  /**
   * Parameters for Delete
   */
  export interface DeleteParams {
    id: number;
    apiVersion?: string;
  }
}

export { UsersService };
