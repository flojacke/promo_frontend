import { CreatePromotionDTO } from './CreatePromotionDTO';

export class CreatePromotionDTOimpl  implements CreatePromotionDTO {
    description?: string;
    discountValue?: number;
    idCommerce?: number;
    isCumulative?: boolean;
    minPurchaseAmountDiscount?: number;
    minPurchaseAmountPercent?: number;
    numberOffered?: number;
    numberPurchase?: number;
    percentValue?: number;
    productId?: number;
    productTakeAwayDuration?: number;
    promotionDuration?: number;
    promotionName?: string;
    quantityInitAvailable?: number;
    typePromotion?: string;
}
