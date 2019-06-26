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

import { BusinessViewModel } from "../models/business-view-model";
@Injectable({
  providedIn: "root"
})
class BusinessesService extends __BaseService {
  static readonly GetPath = "/api/Businesses";
  static readonly PostPath = "/api/Businesses";
  static readonly GetByIdPath = "/api/Businesses/{id}";
  static readonly PutPath = "/api/Businesses/{id}";
  static readonly DeletePath = "/api/Businesses/{id}";

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  /**
   * @param api-version undefined
   * @return Success
   */
  GetResponse(
    apiVersion?: string
  ): __Observable<__StrictHttpResponse<Array<BusinessViewModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (apiVersion != null)
      __params = __params.set("api-version", apiVersion.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Businesses`,
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
        return _r as __StrictHttpResponse<Array<BusinessViewModel>>;
      })
    );
  }
  /**
   * @param api-version undefined
   * @return Success
   */
  Get(apiVersion?: string): __Observable<Array<BusinessViewModel>> {
    return this.GetResponse(apiVersion).pipe(
      __map(_r => _r.body as Array<BusinessViewModel>)
    );
  }

  /**
   * @param params The `BusinessesService.PostParams` containing the following parameters:
   *
   * - `businessVm`:
   *
   * - `api-version`:
   */
  PostResponse(
    params: BusinessesService.PostParams
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.businessVm;
    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Businesses`,
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
   * @param params The `BusinessesService.PostParams` containing the following parameters:
   *
   * - `businessVm`:
   *
   * - `api-version`:
   */
  Post(params: BusinessesService.PostParams): __Observable<null> {
    return this.PostResponse(params).pipe(__map(_r => _r.body as null));
  }

  /**
   * @param params The `BusinessesService.GetByIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  GetByIdResponse(
    params: BusinessesService.GetByIdParams
  ): __Observable<__StrictHttpResponse<BusinessViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Businesses/${params.id}`,
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
        return _r as __StrictHttpResponse<BusinessViewModel>;
      })
    );
  }
  /**
   * @param params The `BusinessesService.GetByIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  GetById(
    params: BusinessesService.GetByIdParams
  ): __Observable<BusinessViewModel> {
    return this.GetByIdResponse(params).pipe(
      __map(_r => _r.body as BusinessViewModel)
    );
  }

  /**
   * @param params The `BusinessesService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `businessVm`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  PutResponse(
    params: BusinessesService.PutParams
  ): __Observable<__StrictHttpResponse<BusinessViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.businessVm;
    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Businesses/${params.id}`,
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
        return _r as __StrictHttpResponse<BusinessViewModel>;
      })
    );
  }
  /**
   * @param params The `BusinessesService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `businessVm`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  Put(params: BusinessesService.PutParams): __Observable<BusinessViewModel> {
    return this.PutResponse(params).pipe(
      __map(_r => _r.body as BusinessViewModel)
    );
  }

  /**
   * @param params The `BusinessesService.DeleteParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   */
  DeleteResponse(
    params: BusinessesService.DeleteParams
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/Businesses/${params.id}`,
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
   * @param params The `BusinessesService.DeleteParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   */
  Delete(params: BusinessesService.DeleteParams): __Observable<null> {
    return this.DeleteResponse(params).pipe(__map(_r => _r.body as null));
  }
}

module BusinessesService {
  /**
   * Parameters for Post
   */
  export interface PostParams {
    businessVm?: BusinessViewModel;
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
    businessVm?: BusinessViewModel;
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

export { BusinessesService };
