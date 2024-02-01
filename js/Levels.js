var level = [];

// 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
// 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

// level[0] = [
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//     1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
//     1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
//     1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 
//     1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1,
//     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//     1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1,
//     1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1,
//     1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
//     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
//     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
// ];

level[0] = [
   20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 
   20, 21,  0,  0,  0,  0,  9,  0,  0,  3, 22, 20,  0, 20, 20, 20, 20, 21, 21,  0,  0,  0,  0,  0, 20, 
   20,  0,  0,  0,  0,  0,  0,  9,  0,  0, 22, 20,  0, 22, 20, 21, 20, 21,  0,  0,  0,  0,  0,  0, 20, 
   20,  0,  0, 22,  0,  0, 21, 20, 22, 20, 21, 20,  5, 20, 21, 21, 21, 20, 21,  0,  0,  0,  0,  0, 20, 
   20,  0,  0,  0,  0,  0, 20, 22,  0,  0,  0,  0,  0,  0,  0,  0,  0, 22, 22, 20, 20,  0, 21, 21, 20, 
   20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23, 23, 23,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 
   20,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23, 23, 23, 23, 23,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 
   20, 22,  0,  0, 21, 21, 20, 21,  0,  0,  0, 23, 23, 23,  0,  0,  0, 21, 20,  0,  0,  0,  0, 21, 20, 
   20, 21,  0,  0, 21, 22, 20, 20,  0,  0,  0,  0,  4,  7,  8,  9,  0, 20, 20, 22,  0,  0, 21, 21, 20, 
   20,  0,  0,  0,  0,  0,  0, 20, 21,  0,  0,  0,  0,  0,  0,  0, 22, 22,  0,  0,  0,  0,  0,  0, 20, 
   20,  0,  0,  0,  9,  0,  0, 22, 22, 20, 21,  0,  0,  0, 22, 20, 22, 22, 20,  0,  9,  0,  9,  0, 20, 
   20,  0,  0, 22,  0,  0,  0,  0,  0,  0, 20,  0,  0,  0, 20, 21,  3,  0, 20,  0,  0,  0,  0,  0, 20, 
   20,  0,  0,  0,  0,  0,  9,  0,  0,  0, 20,  0,  0,  0, 20,  0,  0,  0, 22, 21,  0,  9,  0, 21, 20, 
   20, 21,  0,  9,  0,  0,  0,  0,  0, 21, 20, 22,  0, 22, 20,  0,  0,  0,  0,  0,  0,  0, 21, 21, 20, 
   20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,  2, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 
   ];

level[2] = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];


