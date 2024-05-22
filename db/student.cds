namespace myCompany.hr.lms;

entity Students {
    key email      : String(65) @(title: 'Email');
        firstName  : String(20) @(title: 'First Name');
        lastName   : String(20) @(title: 'Last Name');
        dateSignUp : Date @(title: 'Date Joined');
}

//Annotations
// annotate Students with @(
//     UI:{
//         HeaderInfo  : {
//             // $Type : 'UI.HeaderInfoType',
//             TypeName : '',
//             TypeNamePlural : '',
//             Description:{
//                 Value: email
//             }
//         },
//         SelectionFields  : [
//             firstName,
//             dateSignUp,
//             email
//         ],
//     }
// );


