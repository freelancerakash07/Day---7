




let Total = 0;

devs.map( (data, index ) =>{

    
    // Total Admnission fees//

    console.log(`
    index No      : ${index + 1}

    Name          : ${data.name}
    Roll          : ${data.roll}
    Age           : ${data.age}
    Class Name    : ${data.class_name}
    Gender        : ${data.gender}
    Location      : ${data.location}
    Admition Free : ${data.admition_free}

    

    `);

    Total += data.admition_free ;

   



    //- Find All Female Students//


    if(data.gender == 'Female'){
        console.log(`
        index No      : ${index + 1}
    
        Name          : ${data.name}
        Roll          : ${data.roll}
        Age           : ${data.age}
        Class Name    : ${data.class_name}
        Gender        : ${data.gender}
        Location      : ${data.location}
        Admition Free : ${data.admition_free}
    
        
    
        `);
    
        Total += data.admition_free ;
    
    };




    //- Find class wise student result//



    if(data.class_name == 'Ten'){
        console.log(`
        index No      : ${index + 1}
    
        Name          : ${data.name}
        Roll          : ${data.roll}
        Age           : ${data.age}
        Class Name    : ${data.class_name}
        Gender        : ${data.gender}
        Location      : ${data.location}
        Admition Free : ${data.admition_free}
    
        
    
        `);
    
        Total += data.admition_free ;
    
    
    }




    //- Location wise student result//



    if(data.location == 'Manikgonj'){
        console.log(`
        index No      : ${index + 1}
    
        Name          : ${data.name}
        Roll          : ${data.roll}
        Age           : ${data.age}
        Class Name    : ${data.class_name}
        Gender        : ${data.gender}
        Location      : ${data.location}
        Admition Free : ${data.admition_free}
    
        
    
        `);
    
        Total += data.admition_free ;
    
    }





    //- find student between 10 - 25 age//





    if(data.age >= 10 && data.age <= 25){
        console.log(`
        index No      : ${index + 1}
    
        Name          : ${data.name}
        Roll          : ${data.roll}
        Age           : ${data.age}
        Class Name    : ${data.class_name}
        Gender        : ${data.gender}
        Location      : ${data.location}
        Admition Free : ${data.admition_free}
    
        
    
        `);
    
        Total += data.admition_free ;
    
    }





});














console.log(`

All Developre Admition free -> ${Total}
`);




























