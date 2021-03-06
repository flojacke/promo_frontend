/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../../../../encoder';

import { Observable }                                        from 'rxjs';

import { User } from '../models/user';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../../../../variables';
import { Configuration }                                     from '../../../../configuration';


@Injectable()
export class ConnectionControllerService {

    protected basePath = 'http://localhost:8081';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * connect
     * 
     * @param login login
     * @param password password
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public connectUsingPOST(login: string, password: string, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public connectUsingPOST(login: string, password: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public connectUsingPOST(login: string, password: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public connectUsingPOST(login: string, password: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling connectUsingPOST.');
        }
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling connectUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<User>(`${this.basePath}/api/auth/connexion/${encodeURIComponent(String(login))}/${encodeURIComponent(String(password))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * logout
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public logoutUsingGET(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public logoutUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public logoutUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public logoutUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/api/auth/logout`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
