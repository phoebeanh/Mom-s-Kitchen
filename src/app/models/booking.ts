export interface BookingInterface {
    name: string;
    email: string;
    contactNumber: string;
    pickup: string;
    zipcode: string;
    deliveryAddress: string;  
}

export class Booking implements BookingInterface{
    name: string='';
    email: string='';
    contactNumber: string='';
    pickup: string='';
    zipcode: string='';
    deliveryAddress: string='';

    constructor() {}
}