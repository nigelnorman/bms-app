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

@Injectable({
  providedIn: "root"
})
class ValuesService extends __BaseService {
  static readonly GetPath = "/api/Values";
  static readonly PostPath = "/api/Values";
  static readonly Get_1Path = "/api/Values/{id}";
  static readonly PutPath = "/api/Values/{id}";
  static readonly DeletePath = "/api/Values/{id}";

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  /**
   * @param api-version undefined
   * @return Success
   */
  GetResponse(
    apiVersion?: string
  ): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (apiVersion != null)
      __params = __params.set("api-version", apiVersion.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Values`,
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
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param api-version undefined
   * @return Success
   */
  Get(apiVersion?: string): __Observable<Array<string>> {
    return this.GetResponse(apiVersion).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param params The `ValuesService.PostParams` containing the following parameters:
   *
   * - `value`:
   *
   * - `api-version`:
   */
  PostResponse(
    params: ValuesService.PostParams
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.value;
    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Values`,
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
   * @param params The `ValuesService.PostParams` containing the following parameters:
   *
   * - `value`:
   *
   * - `api-version`:
   */
  Post(params: ValuesService.PostParams): __Observable<null> {
    return this.PostResponse(params).pipe(__map(_r => _r.body as null));
  }

  /**
   * @param params The `ValuesService.Get_1Params` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  Get_1Response(
    params: ValuesService.Get_1Params
  ): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Values/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "text"
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param params The `ValuesService.Get_1Params` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  Get_1(params: ValuesService.Get_1Params): __Observable<string> {
    return this.Get_1Response(params).pipe(__map(_r => _r.body as string));
  }

  /**
   * @param params The `ValuesService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `value`:
   *
   * - `api-version`:
   */
  PutResponse(
    params: ValuesService.PutParams
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.value;
    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Values/${params.id}`,
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
   * @param params The `ValuesService.PutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `value`:
   *
   * - `api-version`:
   */
  Put(params: ValuesService.PutParams): __Observable<null> {
    return this.PutResponse(params).pipe(__map(_r => _r.body as null));
  }

  /**
   * @param params The `ValuesService.DeleteParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   */
  DeleteResponse(
    params: ValuesService.DeleteParams
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiVersion != null)
      __params = __params.set("api-version", params.apiVersion.toString());
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/Values/${params.id}`,
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
   * @param params The `ValuesService.DeleteParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   */
  Delete(params: ValuesService.DeleteParams): __Observable<null> {
    return this.DeleteResponse(params).pipe(__map(_r => _r.body as null));
  }
}

module ValuesService {
  /**
   * Parameters for Post
   */
  export interface PostParams {
    value?: string;
    apiVersion?: string;
  }

  /**
   * Parameters for Get_1
   */
  export interface Get_1Params {
    id: number;
    apiVersion?: string;
  }

  /**
   * Parameters for Put
   */
  export interface PutParams {
    id: number;
    value?: string;
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

export { ValuesService };
