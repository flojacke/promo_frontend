import { CategoryProduct } from './categoryProduct';
import { RequestSearchDTO } from './requestSearchDTO';


export class RequestSearchDTOimpl implements RequestSearchDTO {
    categories?: Array<CategoryProduct>;
    searchField?: string;
    searchPerimeter?: number;
    searchSourceAddress?: string;
}
