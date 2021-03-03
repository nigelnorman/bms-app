/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StudentViewModel } from '../models/student-view-model';
@Injectable({
  providedIn: 'root',
})
class StudentsService extends __BaseService {
  static readonly getApiStudentsPath = '/api/Students';
  static readonly postApiStudentsPath = '/api/Students';
  static readonly getApiStudentsIdPath = '/api/Students/{id}';
  static readonly putApiStudentsIdPath = '/api/Students/{id}';
  static readonly deleteApiStudentsIdPath = '/api/Students/{id}';

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
  getApiStudentsResponse(apiVersion?: string): __Observable<__StrictHttpResponse<Array<StudentViewModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (apiVersion != null) __params = __params.set('api-version', apiVersion.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Students`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StudentViewModel>>;
      })
    );
  }
  /**
   * @param api-version undefined
   * @return Success
   */
  getApiStudents(apiVersion?: string): __Observable<Array<StudentViewModel>> {
    return this.getApiStudentsResponse(apiVersion).pipe(
      __map(_r => _r.body as Array<StudentViewModel>)
    );
  }

  /**
   * @param params The `StudentsService.PostApiStudentsParams` containing the following parameters:
   *
   * - `body`:
   *
   * - `api-version`:
   */
  postApiStudentsResponse(params: StudentsService.PostApiStudentsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.body;
    if (params.apiVersion != null) __params = __params.set('api-version', params.apiVersion.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Students`,
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
   * @param params The `StudentsService.PostApiStudentsParams` containing the following parameters:
   *
   * - `body`:
   *
   * - `api-version`:
   */
  postApiStudents(params: StudentsService.PostApiStudentsParams): __Observable<null> {
    return this.postApiStudentsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `StudentsService.GetApiStudentsIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  getApiStudentsIdResponse(params: StudentsService.GetApiStudentsIdParams): __Observable<__StrictHttpResponse<StudentViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiVersion != null) __params = __params.set('api-version', params.apiVersion.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Students/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StudentViewModel>;
      })
    );
  }
  /**
   * @param params The `StudentsService.GetApiStudentsIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  getApiStudentsId(params: StudentsService.GetApiStudentsIdParams): __Observable<StudentViewModel> {
    return this.getApiStudentsIdResponse(params).pipe(
      __map(_r => _r.body as StudentViewModel)
    );
  }

  /**
   * @param params The `StudentsService.PutApiStudentsIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  putApiStudentsIdResponse(params: StudentsService.PutApiStudentsIdParams): __Observable<__StrictHttpResponse<StudentViewModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.apiVersion != null) __params = __params.set('api-version', params.apiVersion.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Students/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StudentViewModel>;
      })
    );
  }
  /**
   * @param params The `StudentsService.PutApiStudentsIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * - `api-version`:
   *
   * @return Success
   */
  putApiStudentsId(params: StudentsService.PutApiStudentsIdParams): __Observable<StudentViewModel> {
    return this.putApiStudentsIdResponse(params).pipe(
      __map(_r => _r.body as StudentViewModel)
    );
  }

  /**
   * @param params The `StudentsService.DeleteApiStudentsIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   */
  deleteApiStudentsIdResponse(params: StudentsService.DeleteApiStudentsIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiVersion != null) __params = __params.set('api-version', params.apiVersion.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Students/${params.id}`,
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
   * @param params The `StudentsService.DeleteApiStudentsIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `api-version`:
   */
  deleteApiStudentsId(params: StudentsService.DeleteApiStudentsIdParams): __Observable<null> {
    return this.deleteApiStudentsIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module StudentsService {

  /**
   * Parameters for postApiStudents
   */
  export interface PostApiStudentsParams {
    body?: StudentViewModel;
    apiVersion?: string;
  }

  /**
   * Parameters for getApiStudentsId
   */
  export interface GetApiStudentsIdParams {
    id: number;
    apiVersion?: string;
  }

  /**
   * Parameters for putApiStudentsId
   */
  export interface PutApiStudentsIdParams {
    id: number;
    body?: StudentViewModel;
    apiVersion?: string;
  }

  /**
   * Parameters for deleteApiStudentsId
   */
  export interface DeleteApiStudentsIdParams {
    id: number;
    apiVersion?: string;
  }
}

export { StudentsService }
