export interface PaymentInterface {
    creditCard: string;
    creditCardDate: [];
    creditCardCvv: [];
}

export class Payment implements PaymentInterface {
    creditCard:string = '';
    creditCardDate:any= [];
    creditCardCvv:any= [];

    constructor() {}
}