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
import { Address } from './address';
import { CategoryProduct } from './categoryProduct';
import { CompanyType } from './companyType';
import { ShopRegistration } from './shopRegistration';
import { Shopkeeper } from './shopkeeper';


export interface Shop {
    address?: Address;
    capital?: number;
    categoryProducts?: { [key: string]: CategoryProduct; };
    companyType?: CompanyType;
    description?: string;
    id?: number;
    image?: string;
    name?: string;
    owner?: Shopkeeper;
    registrations?: { [key: string]: ShopRegistration; };
    siretNumber?: string;
    type?: string;
    websiteUrl?: string;
}