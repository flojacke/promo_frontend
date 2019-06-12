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
import { Client } from './client';
import { Evaluation } from './evaluation';
import { ReservationProduct } from './reservationProduct';


export interface Reservation {
    client?: Client;
    dateCreation?: Date;
    evaluation?: Evaluation;
    id?: number;
    reservationProduct?: ReservationProduct;
    withdrawalCode?: string;
}
