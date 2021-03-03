/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class ValuesService extends __BaseService {
  static readonly getApiValuesPath = '/api/Values';
  static readonly postApiValuesPath = '/api/Values';
  static readonly getApiValuesIdPath = '/api/Values/{id}';
  static readonly putApiValuesIdPath = '/api/Values/{id}';
  static readonly deleteApiValuesIdPath = '/api/Values/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param api-version undefined
   * @return Success
   */
  getApiValuesResponse(apiVersion?: string): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (apiVersion != null) __params = __params.set('api-version', apiVersion.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Values`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @param api-version undefined
   * @return Success
   */
  getApiValues(apiVersion?: string): __Observable<Array<string>> {
    return this.getApiValuesResponse(apiVersion).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param params The `ValuesService.PostApiValuesParams` containing the following parameters:
   *
   * - `body`:
   *
   * - `api-version`:
   */
  postApiValuesResponse(params: ValuesService.PostApiValuesParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.body;
    if (params.apiVersion != null) __params = __params.set('api-version', params.apiVersion.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Values`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ValuesService.PostApiValuesParams` containing the following parameters:
   *
   * - `body`:
   *
   * - `api-version`:
   */
  postApiValues(params: ValuesService.PostApiValuesParams): __Observable<null> {
    return this.postApiValuesResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ValuesService.GetApiValuesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  getApiValuesIdResponse(params: ValuesService.GetApiValuesIdParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiVersion != null) __params = __params.set('api-version', params.apiVersion.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Values/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param params The `ValuesService.GetApiValuesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  getApiValuesId(params: ValuesService.GetApiValuesIdParams): __Observable<string> {
    return this.getApiValuesIdResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `ValuesService.PutApiValuesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * - `api-version`:
   */
  putApiValuesIdResponse(params: ValuesService.PutApiValuesIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.apiVersion != null) __params = __params.set('api-version', params.apiVersion.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Values/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ValuesService.PutApiValuesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * - `api-version`:
   */
  putApiValuesId(params: ValuesService.PutApiValuesIdParams): __Observable<null> {
    return this.putApiValuesIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ValuesService.DeleteApiValuesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   */
  deleteApiValuesIdResponse(params: ValuesService.DeleteApiValuesIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiVersion != null) __params = __params.set('api-version', params.apiVersion.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Values/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ValuesService.DeleteApiValuesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   */
  deleteApiValuesId(params: ValuesService.DeleteApiValuesIdParams): __Observable<null> {
    return this.deleteApiValuesIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ValuesService {

  /**
   * Parameters for postApiValues
   */
  export interface PostApiValuesParams {
    body?: string;
    apiVersion?: string;
  }

  /**
   * Parameters for getApiValuesId
   */
  export interface GetApiValuesIdParams {
    id: number;
    apiVersion?: string;
  }

  /**
   * Parameters for putApiValuesId
   */
  export interface PutApiValuesIdParams {
    id: number;
    body?: string;
    apiVersion?: string;
  }

  /**
   * Parameters for deleteApiValuesId
   */
  export interface DeleteApiValuesIdParams {
    id: number;
    apiVersion?: string;
  }
}

export { ValuesService }
