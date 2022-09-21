export interface User{

    id: number;
    name: {
       firstname: string;
       lastname: string;
     },
     username: string;
     password: string;
     address: {
       geolocation: {
         lat: string;
         long: string;
       },
       city?: string;
       street?: string;
       number?: number;
       zipcode?: string;
     }
     email: string;
     phone: string;
     image:string;
}

   
      
    