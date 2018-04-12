import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    templateUrl:'./sandbox.component.html',
    styleUrls:['./sandbox.component.css']

    /*styles: [`
        .special{
            color:green;
            font-size:20px;
            text-transform:uppercase;
        }
    `]
    */
    
    /*`
        <h1>{{name}} is {{ age }} years old</h1>
        <h2>My name is {{ person.firstName }} {{ person.lastName }}
        <ul>
            <li> {{ 'Hello' }} </li>
            <li> {{ 1+1 }} </li>
            <li> {{ showAge() }} </li>
        </ul>
        `*/
})

export class SandboxComponent{
    // name='Kalyan';
    // age=26;
    // person={firstName:'Hemanth', lastName:'Kalyan'};

    //Types of Properties

    /*name:string='Hello...!';
    age:number=35;
    isMarried:boolean = false;
    city:any = 'bangalore';
    myNumberArray:number[]=[1,2,3];
    myStringArray:string[]=['Teddy','Bear'];
    myAnyArray:any[]=['Teddy',24];
    myTuple:[string,number]=['Teddy',24];
    unusable:void=undefined;
    u:undefined=undefined;
    n:null=null; can use undefined also*/

    //Object Creation

    // customer:Customer;
    // customers:Customer[];

    // constructor(){
    //     // console.log('Constructor ran...!')
    //     // this.age=26
    //     // this.hasBirthday();

    //     //Object Declaration
    //     this.customer ={
    //         id:1,
    //         name:'Hemanth Kalyan',
    //         email:'kalyana@tekvity.com'
    //     }
    //     this.customers= [
    //         {
    //             id:1,
    //             name:'Hemanth Kalyan',
    //             email:'kalyana@tekvity.com'
    //         },
    //         {
    //             id:2,
    //             name:'Ramya S',
    //             email:'ramyas@tekvity.com'
    //         },
    //         {
    //             id:3,
    //             name:'Shwethashree N',
    //             email:'shwethan@tekvity.com'
    //         },
    //         {
    //             id:4,
    //             name:'Rashmi S',
    //             email:'rashmis@tekvity.com'
    //         },
    //     ];
    // }
    

    //Functions
/*     hasBirthday(){
         this.age +=1;
     }

     showAge(){
         return this.age;
     }*/
 }

//Interface
/*interface Customer{
    id:number,
    name:string,
    email:string
}*/ //we have exported the interface to separate file