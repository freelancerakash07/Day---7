// - Create a Student Array & Object Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with

// - Total Admnission fees
// - Find All Female Students
// - Find class wise student result
// - Location wise student result
// - find student between 10 - 25 age



const devs = [
    {
        name          : 'akash',
        roll          : 1,
        age           : 16,
        class_name    : 'Ten',
        gender        : 'Male',
        location      : 'Manikgonj',
        admition_free : 2000
    },
    {
        name          : 'rifat',
        roll          : 2,
        age           : 15,
        class_name    : 'Eight',
        gender        : 'Male',
        location      : 'Mirpur',
        admition_free : 2200
    },
    {
        name          : 'anik',
        roll          : 3,
        age           : 22,
        class_name    : 'Nine',
        gender        : 'Male',
        location      : 'Gajipur',
        admition_free : 2100
    },{
        name          : 'shojol',
        roll          : 4,
        age           : 16,
        class_name    : 'Ten',
        gender        : 'Male',
        location      : 'Dhaka',
        admition_free : 1900
    },
    {
        name          : 'rex',
        roll          : 5,
        age           : 25,
        class_name    : 'Nine',
        gender        : 'Male',
        location      : 'Kholna',
        admition_free : 2400
    },
    {
        name          : 'achem',
        roll          : 6,
        age           : 23,
        class_name    : 'Ten',
        gender        : 'Male',
        location      : 'Mirpur',
        admition_free : 2500
    },
    {
        name          : 'abu said',
        roll          : 7,
        age           : 22,
        class_name    : 'Six',
        gender        : 'Male',
        location      : 'Bogora',
        admition_free : 2300
    },
    {
        name          : 'shanto',
        roll          : 8,
        age           : 18,
        class_name    : 'Seven',
        gender        : 'Male',
        location      : 'Dhaka',
        admition_free : 1800
    },
    {
        name          : 'rabik',
        roll          : 9,
        age           : 16,
        class_name    : 'Five',
        gender        : 'Male',
        location      : 'Manikgonj',
        admition_free : 2000
    },
    {
        name          : 'abdur rahman ',
        roll          : 10,
        age           : 12,
        class_name    : 'Five',
        gender        : 'Male',
        location      : 'Bogora',
        admition_free : 2500
    },
    {
        name          : 'milon',
        roll          : 11,
        age           : 13,
        class_name    : 'Seven',
        gender        : 'Male',
        location      : 'Shelet',
        admition_free : 2500
    },
    {
        name          : 'taher',
        roll          : 12,
        age           : 15,
        class_name    : 'Nine',
        gender        : 'Male',
        location      : 'Bogora',
        admition_free : 2100
    },
    {
        name          : 'rabby',
        roll          : 13,
        age           : 18,
        class_name    : 'Ten',
        gender        : 'Male',
        location      : 'Manikgonj',
        admition_free : 2000
    },
    {
        name          : 'midiol',
        roll          : 14,
        age           : 19,
        class_name    : 'Five',
        gender        : 'Male',
        location      : 'Manikgonj',
        admition_free : 2000
    },
    {
        name          : 'rafi',
        roll          : 15,
        age           : 16,
        class_name    : 'Ten',
        gender        : 'Male',
        location      : 'Mirpur',
        admition_free : 1800
    },
    {
        name          : 'shanta',
        roll          : 16,
        age           : 14,
        class_name    : 'Eight',
        gender        : 'Female',
        location      : 'Manikgonj',
        admition_free : 2500
    },
    {
        name          : 'rito',
        roll          : 17,
        age           : 22,
        class_name    : 'Nine',
        gender        : 'Female',
        location      : 'Manikgonj',
        admition_free : 2100
    },
    {
        name          : 'mito',
        roll          : 18,
        age           : 15,
        class_name    : 'Five',
        gender        : 'Female',
        location      : 'Dhaka',
        admition_free : 2600
    },
    {
        name          : 'mim',
        roll          : 19,
        age           : 14,
        class_name    : 'Seven',
        gender        : 'Female',
        location      : 'Dhaka',
        admition_free : 2200
    },
    {
        name          : 'poly',
        roll          : 20,
        age           : 20,
        class_name    : 'Ten',
        gender        : 'Female',
        location      : 'Gazipur',
        admition_free : 2000
    },
    {
        name          : 'Shela',
        roll          : 21,
        age           : 22,
        class_name    : 'Nine',
        gender        : 'Female',
        location      : 'Uttora',
        admition_free : 2300
    },
    {
        name          : 'riya',
        roll          : 22,
        age           : 18,
        class_name    : 'Six',
        gender        : 'Female',
        location      : 'Uttora',
        admition_free : 2000
    },
    {
        name          : 'shoni',
        roll          : 23,
        age           : 18,
        class_name    : 'Ten',
        gender        : 'Female',
        location      : 'Gazipur',
        admition_free : 3000
    },
    {
        name          : 'shomoya',
        roll          : 24,
        age           : 25,
        class_name    : 'Nine',
        gender        : 'Female',
        location      : 'Shelate',
        admition_free : 2100
    },
    {
        name          : 'moly',
        roll          : 25,
        age           : 17,
        class_name    : 'Ten',
        gender        : 'Female',
        location      : 'Manikgonj',
        admition_free : 2000
    },
    {
        name          : 'lamiya',
        roll          : 26,
        age           : 18,
        class_name    : 'Six',
        gender        : 'Female',
        location      : 'Manikgonj',
        admition_free : 2000
    },
    {
        name          : 'mariya',
        roll          : 1,
        age           : 16,
        class_name    : 'Ten',
        gender        : 'Male',
        location      : 'Manikgonj',
        admition_free : 2000
    },
    {
        name          : 'sumi',
        roll          : 1,
        age           : 16,
        class_name    : 'Ten',
        gender        : 'Male',
        location      : 'Manikgonj',
        admition_free : 2000
    },
    {
        name          : 'ayshea',
        roll          : 1,
        age           : 16,
        class_name    : 'Ten',
        gender        : 'Male',
        location      : 'Manikgonj',
        admition_free : 2000
    },
    {
        name          : 'borsha',
        roll          : 1,
        age           : 16,
        class_name    : 'Ten',
        gender        : 'Male',
        location      : 'Manikgonj',
        admition_free : 2000
    }

];




