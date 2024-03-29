var text1 = document.getElementById("text2-1");

text1.addEventListener("click", function(){
  
  // X: horizontal distance from top left
  // Y: vertical distance from top left
  var ONEcoords = []; 
  var ZEROcoords = [];
  
  var X, Y;
  var rand; 
  var op = document.getElementById("oneParent").childNodes;
  var zp = document.getElementById("zeroParent").childNodes;
  
  for (var i = 2; i < 302; i++) {
    
    if (ONEcoords.length == 0) {
      ONEcoords = [84, 100, 116, 100, 148, 100, 180, 100, 212, 100, 244, 100, 276, 100, 308, 100, 340, 100, 372, 100, 404, 100, 100, 150, 132, 150, 164, 150, 196, 150, 228, 150, 260, 150, 292, 150, 324, 150, 356, 150, 388, 150, 84, 200, 116, 200, 148, 200, 180, 200, 212, 200, 244, 200, 276, 200, 308, 200, 340, 200, 372, 200, 404, 200, 100, 250, 132, 250, 164, 250, 196, 250, 228, 250, 260, 250, 292, 250, 324, 250, 356, 250, 388, 250, 84, 300, 116, 300, 148, 300, 180, 300, 212, 300, 244, 300, 276, 300, 308, 300, 340, 300, 372, 300, 404, 300, 100, 350, 132, 350, 164, 350, 196, 350, 228, 350, 260, 350, 292, 350, 324, 350, 356, 350, 388, 350];
    }
    if (ZEROcoords.length == 0) {
      ZEROcoords = [16, 0, 48, 0, 80, 0, 112, 0, 144, 0, 176, 0, 208, 0, 240, 0, 272, 0, 304, 0, 336, 0, 368, 0, 400, 0, 432, 0, 464, 0, 0, 50, 32, 50, 64, 50, 96, 50, 128, 50, 160, 50, 192, 50, 224, 50, 256, 50, 288, 50, 320, 50, 352, 50, 384, 50, 416, 50, 448, 50, 480, 50, 16, 100, 48, 100, 80, 100, 112, 100, 144, 100, 176, 100, 208, 100, 240, 100, 272, 100, 304, 100, 336, 100, 368, 100, 400, 100, 432, 100, 464, 100, 496, 100, 0, 150, 32, 150, 64, 150, 96, 150, 128, 150, 160, 150, 192, 150, 224, 150, 256, 150, 288, 150, 320, 150, 352, 150, 384, 150, 416, 150, 448, 150, 480, 150, 16, 200, 48, 200, 80, 200, 112, 200, 144, 200, 176, 200, 208, 200, 240, 200, 272, 200, 304, 200, 336, 200, 368, 200, 400, 200, 432, 200, 464, 200, 496, 200, 0, 250, 32, 250, 64, 250, 96, 250, 128, 250, 160, 250, 192, 250, 224, 250, 256, 250, 288, 250, 320, 250, 352, 250, 384, 250, 416, 250, 448, 250, 480, 250, 16, 300, 48, 300, 80, 300, 112, 300, 144, 300, 176, 300, 208, 300, 240, 300, 272, 300, 304, 300, 336, 300, 368, 300, 400, 300, 432, 300, 464, 300, 496, 300, 0, 350, 32, 350, 64, 350, 96, 350, 128, 350, 160, 350, 192, 350, 224, 350, 256, 350, 288, 350, 320, 350, 352, 350, 384, 350, 416, 350, 448, 350, 480, 350, 16, 400, 48, 400, 80, 400, 112, 400, 144, 400, 176, 400, 208, 400, 240, 400, 272, 400, 304, 400, 336, 400, 368, 400, 400, 400, 432, 400, 464, 400, 496, 400, 32, 450, 64, 450, 96, 450, 128, 450, 160, 450, 192, 450, 224, 450, 256, 450, 288, 450, 320, 450, 352, 450, 384, 450, 416, 450, 448, 450, 480, 450];
    }
    
    rand = Math.floor(Math.random() * ONEcoords.length / 2) * 2;
    X = ONEcoords[rand] + 20 - 210;
    Y = ONEcoords[rand + 1] + 35 - 230;
    ONEcoords.splice(rand, 2);
    op[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
    
    rand = Math.floor(Math.random() * ZEROcoords.length / 2) * 2;
    X = ZEROcoords[rand] - 270;
    Y = ZEROcoords[rand + 1] + 35 - 230;
    ZEROcoords.splice(rand, 2);
    zp[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
  }

});

var text2 = document.getElementById("text2-2");

text2.addEventListener("click", function(){
  
  // X: horizontal distance from top left
  // Y: vertical distance from top left
  var ONEcoords = [35, 50, 131, 50, 195, 50, 291, 50, 355, 50, 387, 50, 419, 50, 115, 100, 147, 100, 179, 100, 243, 100, 275, 100, 307, 100, 339, 100, 371, 100, 403, 100, 67, 150, 131, 150, 163, 150, 323, 150, 355, 150, 387, 150, 419, 150, 451, 150, 51, 200, 115, 200, 147, 200, 211, 200, 243, 200, 275, 200, 307, 200, 371, 200, 403, 200, 35, 250, 67, 250, 99, 250, 131, 250, 163, 250, 195, 250, 259, 250, 323, 250, 419, 250, 451, 250, 51, 300, 83, 300, 115, 300, 147, 300, 243, 300, 275, 300, 339, 300, 371, 300, 403, 300, 67, 350, 131, 350, 163, 350, 195, 350, 227, 350, 291, 350, 387, 350, 451, 350, 147, 400, 179, 400, 275, 400, 307, 400, 339, 400, 371, 400, 403, 400, 435, 409]; 
  
  var ZEROcoords = [16, 0, 48, 0, 80, 0, 112, 0, 144, 0, 240, 0, 272, 0, 304, 0, 336, 0, 368, 0, 400, 0, 464, 0, 0, 50, 32, 50, 96, 50, 160, 50, 224, 50, 320, 50, 384, 50, 448, 50, 16, 100, 48, 100, 80, 100, 112, 100, 176, 100, 240, 100, 272, 100, 336, 100, 368, 100, 400, 100, 432, 100, 496, 100, 32, 150, 64, 150, 128, 150, 320, 150, 352, 150, 416, 150, 448, 150, 480, 150, 16, 200, 48, 200, 112, 200, 144, 200, 208, 200, 272, 200, 304, 200, 368, 200, 400, 200, 496, 200, 64, 250, 128, 250, 192, 250, 224, 250, 288, 250, 320, 250, 352, 250, 384, 250, 448, 250, 480, 250, 16, 300, 80, 300, 112, 300, 144, 300, 176, 300, 208, 300, 304, 300, 336, 300, 368, 300, 400, 300, 432, 300, 464, 300, 0, 350, 32, 350, 64, 350, 96, 350, 160, 350, 224, 350, 288, 350, 320, 350, 384, 350, 416, 350, 448, 350, 16, 400, 48, 400, 80, 400, 144, 400, 208, 400, 272, 400, 304, 400, 336, 400, 368, 400, 400, 400, 432, 400, 464, 400, 32, 450, 64, 450, 160, 450, 192, 450, 256, 450, 288, 450, 320, 450, 352, 450, 416, 450, 448, 450, 480, 450, 252, 381, 268, 118, 382, 132, 206, 451, 121, 36, 419, 40, 255, 344, 238, 290, 273, 458, 389, 323, 46, 388, 179, 305, 412, 277, 331, 14, 156, 180, 444, 62, 484, 328, 339, 348, 333, 303, 113, 74, 37, 67, 399, 206, 405, 152, 249, 339, 48, 275, 153, 225, 226, 378, 29, 325, 432, 24, 398, 409, 76, 392, 150, 81, 10, 120, 353, 490, 335, 246, 377, 467, 205, 284, 100, 415, 347, 147, 88, 281, 20, 449, 234, 407, 42, 407, 186, 475, 235, 306, 151, 48, 88, 150, 139, 108, 360, 441, 265, 94, 349, 129, 151, 206];
  
  var X, Y;
  var rand; 
  var op = document.getElementById("oneParent").childNodes;
  var zp = document.getElementById("zeroParent").childNodes;
  
  for (var i = 2; i < 302; i++) {
    
    rand = Math.floor(Math.random() * ONEcoords.length / 2) * 2;
    X = ONEcoords[rand] + 20 - 210;
    Y = ONEcoords[rand + 1] + 35 - 230;
    ONEcoords.splice(rand, 2);
    op[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
    
    rand = Math.floor(Math.random() * ZEROcoords.length / 2) * 2;
    X = ZEROcoords[rand] - 270;
    Y = ZEROcoords[rand + 1] + 35 - 230;
    ZEROcoords.splice(rand, 2);
    zp[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
  }

});

var text3 = document.getElementById("text2-3");

text3.addEventListener("click", function(){
  
  // X: horizontal distance from top left
  // Y: vertical distance from top left
  var ONEcoords = []; 
  var ZEROcoords = [];
  
  var X, Y;
  var rand; 
  var op = document.getElementById("oneParent").childNodes;
  var zp = document.getElementById("zeroParent").childNodes;
  
  for (var i = 2; i < 252; i++) {
    
    if (ONEcoords.length == 0) {
      ONEcoords = [-14, 0, 82, 0, 114, 0, 146, 0, 178, 0, 210, 0, 242, 0, 274, 0, 306, 0, 338, 0, 370, 0, 434, 0, 498, 0, 98, 50, 130, 50, 162, 50, 194, 50, 226, 50, 322, 50, 354, 50, 386, 50, 418, 50, 450, 50, 482, 50, 82, 100, 146, 100, 178, 100, 210, 100, 306, 100, 370, 100, 402, 100, 226, 150, 322, 150, 354, 150, -14, 200, 18, 200, 50, 200, 82, 200, 146, 200, 178, 200, 210, 200, 274, 200, 338, 200, 370, 200, 402, 200, 434, 200, 98, 250, 130, 250, 162, 250, 226, 250, 258, 250, 290, 250, 418, 250, 482, 250, 50, 300, 82, 300, 178, 300, 242, 300, 306, 300, 338, 300, 402, 300, 434, 300, 466, 300, 2, 350, 34, 350, 66, 350, 98, 350, 130, 350, 194, 350, 354, 350, 386, 350, 482, 350, -14, 400, 18, 400, 50, 400, 114, 400, 306, 400, 338, 400, 370, 400, 498, 400, 2, 450, 34, 450, 98, 450, 194, 450, 226, 450, 290, 450]; 
    }
    if (ZEROcoords.length == 0) {
      ZEROcoords = [304, 0, 464, 0, 320, 50, 384, 50, 416, 50, 80, 100, 240, 100, 464, 100, 496, 100, 96, 150, 128, 150, 160, 150, 224, 150, 256, 150, 288, 150, 320, 150, 352, 150, 384, 150, 416, 150, 448, 150, 176, 200, 208, 200, 272, 200, 336, 200, 368, 200, 400, 200, 432, 200, 464, 200, 128, 250, 160, 250, 320, 250, 352, 250, 384, 250, 448, 250, 480, 250, 112, 300, 176, 300, 208, 300, 240, 300, 272, 300, 304, 300, 368, 300, 432, 300, 496, 300, 32, 350, 64, 350, 96, 350, 128, 350, 160, 350, 224, 350, 256, 350, 288, 350, 352, 350, 416, 350, 16, 400, 80, 400, 144, 400, 176, 400, 208, 400, 240, 400, 272, 400, 304, 400, 336, 400, 464, 400, 32, 450, 64, 450, 96, 450, 192, 450, 224, 450, 256, 450, 288, 450, 320, 450, 384, 450, 448, 450, 455, 485, 307, 33, 110, 371, 125, 152, 338, 329, 303, 138, 9, 421, 275, 180, 266, 49, 140, 200, 241, 411, 31, 273, 145, 404, 438, 113, 234, 277, 90, 68, 291, 375, 143, 483, 454, 62, 221, 470, 199, 60, 379, 429, 245, 245, 405, 326, 263, 422, 99, 276, 469, 46, 430, 339, 264, 294, 125, 169, 342, 4, 200, 460, 103, 202, 230, 250, 253, 373, 184, 231, 112, 21, 50, 414, 245, 49, 465, 253, 313, 176, 189, 94, 499, 492, 45, 475, 314, 34, 143, 354, 56, 277, 380, 165, 242, 216, 319, 124, 149, 121, 335, 234, 452, 13, 82, 119, 422, 499, 62, 325, 366, 488, 149, 220, 25, 31, 459, 139, 337, 459, 451, 398, 437, 383, 384, 480, 346, 339, 446, 334, 495, 389, 330, 403, 498, 388, 316, 322, 415, 381, 394, 334, 398, 334, 429, 328, 429, 440, 405, 497, 309, 342, 483, 451, 485, 439, 341, 358, 450, 336, 451, 315, 465, 424, 389, 380, 396, 421, 340, 454, 328, 396, 420, 455, 308, 415, 333, 473, 499, 326];
    }
    
    rand = Math.floor(Math.random() * ONEcoords.length / 2) * 2;
    X = ONEcoords[rand] + 20 - 210;
    Y = ONEcoords[rand + 1] + 35 - 230;
    ONEcoords.splice(rand, 2);
    op[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
    
    rand = Math.floor(Math.random() * ZEROcoords.length / 2) * 2;
    X = ZEROcoords[rand] - 270;
    Y = ZEROcoords[rand + 1] + 35 - 230;
    ZEROcoords.splice(rand, 2);
    zp[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
  }

});

var text4 = document.getElementById("text2-4");

text4.addEventListener("click", function(){
  
  // X: horizontal distance from top left
  // Y: vertical distance from top left
  var ONEcoords = []; 
  var ZEROcoords = [];
  
  var X, Y;
  var rand; 
  var op = document.getElementById("oneParent").childNodes;
  var zp = document.getElementById("zeroParent").childNodes;
  
  for (var i = 2; i < 302; i++) {
    
    if (ONEcoords.length == 0) {
      ONEcoords = [329, 127, 209, 74, 240, 245, 104, 5, 157, 294, 83, 86, 11, 115, 226, 168, 158, 240, 59, 36, 98, 50, 130, 50, 162, 50, 194, 50, 226, 50, 322, 50, 354, 50, 386, 50, 418, 50, 450, 50, 482, 50, 82, 100, 146, 100, 178, 100, 210, 100, 306, 100, 370, 100, 402, 100, 226, 150, 322, 150, 354, 150, -14, 200, 18, 200, 50, 200, 82, 200, 146, 200, 178, 200, 270, 194, 254, 238, 252, 118, 90, 223, 121, 296, 9, 269, 228, 287, 197, 25, 68, 254, 56, 54, 179, 108, 126, 60, 365, 200, 347, 160, 88, 51, 150, 181, 141, 170, 392, 47, 222, 79, 82, 109, 207, 114, 284, 273, 359, 226, 87, 9, 47, 118, 0, 201, 218, 84, 87, 126, 161, 8, 248, 12, 267, 170, 233, 197, 247, 11, 358, 274, 16, 24, 361, 24, 303, 231, 277, 198, 325, 60, 254, 93, 127, 143, 38, 115, 35, 163, 62, 213, 362, 223, 151, 246, 187, 247, 169, 261, 97, 292, 283, 204, 293, 298, 254, 90, 385, 260, 204, 28, 363, 118, 64, 221, 377, 16, 151, 248, 318, 63, 170, 164, 199, 44, 17, 90, 312, 300, 390, 392, 129, 268, 47, 396, 245, 338, 90, 263, 299, 89, 53, 397, 307, 130, 457, 174, 237, 195, 483, 376, 24, 119, 31, 275, 199, 343, 353, 52, 400, 160, 303, 419, 468, 78, 3, 186]; 
    }
    if (ZEROcoords.length == 0) {
      ZEROcoords = [495, 240, 334, 180, 125, 275, 430, 137, 206, 223, 452, 438, 175, 401, 494, 296, 223, 437, 259, 158, 468, 357, 185, 175, 365, 429, 108, 362, 301, 472, 113, 459, 292, 354, 241, 182, 395, 135, 361, 136, 237, 288, 351, 416, 494, 158, 272, 412, 356, 101, 487, 497, 459, 115, 133, 318, 350, 459, 420, 415, 223, 388, 445, 377, 327, 255, 293, 114, 327, 271, 200, 407, 103, 413, 465, 291, 489, 462, 485, 334, 350, 225, 460, 335, 496, 187, 126, 267, 455, 470, 236, 284, 281, 450, 472, 179, 291, 489, 118, 318, 192, 288, 289, 171, 203, 354, 495, 123, 306, 445, 377, 469, 314, 426, 185, 420, 231, 128, 491, 220, 275, 484, 213, 178, 410, 316, 455, 379, 210, 426, 205, 325, 145, 236, 190, 403, 140, 286, 348, 439, 458, 482, 178, 340, 450, 219, 175, 270, 164, 478, 195, 416, 171, 343, 262, 102, 490, 335, 391, 160, 316, 279, 481, 432, 63, 367, 377, 491, 15, 294, 231, 139, 419, 477, 66, 280, 72, 430, 274, 205, 345, 261, 198, 312, 141, 240, 456, 465, 2, 428, 16, 320, 6, 175, 497, 194, 146, 197, 478, 58];
    }
    
    rand = Math.floor(Math.random() * ONEcoords.length / 2) * 2;
    X = ONEcoords[rand] + 20 - 210;
    Y = ONEcoords[rand + 1] + 35 - 230;
    ONEcoords.splice(rand, 2);
    op[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
    
    rand = Math.floor(Math.random() * ZEROcoords.length / 2) * 2;
    X = ZEROcoords[rand] - 270;
    Y = ZEROcoords[rand + 1] + 35 - 230;
    ZEROcoords.splice(rand, 2);
    zp[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
  }

});

var text5 = document.getElementById("text2-5");

text5.addEventListener("click", function(){
  
  // X: horizontal distance from top left
  // Y: vertical distance from top left
  var ONEcoords = []; 
  var ZEROcoords = [];
  
  var X, Y;
  var rand; 
  var op = document.getElementById("oneParent").childNodes;
  var zp = document.getElementById("zeroParent").childNodes;
  
  for (var i = 2; i < 302; i++) {
    
    if (ONEcoords.length == 0) {
      ONEcoords = [385, 2, 28, 7, 349, 247, 422, 114, 413, 80, 390, 82, 274, 11, 372, 171, 253, 186, 244, 30, 56, 29, 239, 105, 413, 29, 15, 169, 279, 216, 450, 185, 296, 102, 212, 187, 279, 10, 143, 180, 406, 25, 409, 43, 110, 197, 25, 217, 48, 212, 10, 137, 57, 96, 128, 33, 365, 34, 226, 227, 35, 204, 278, 21, 326, 221, 305, 176, 461, 98, 167, 86, 181, 71, 251, 182, 214, 44, 427, 139, 136, 185, 122, 204, 18, 67, 347, 234, 361, 114, 389, 133, 67, 39, 115, 97, 182, 113, 424, 35, 440, 214, 466, 209, 77, 176, 291, 101, 248, 71, 10, 126, 376, 215, 307, 231, 196, 40, 279, 63, 253, 94, 206, 205, 102, 15, 139, 51, 349, 7, 190, 159, 97, 83, 186, 71, 43, 155, 281, 121, 87, 119, 61, 47, 111, 68, 51, 85, 197, 26, 331, 175, 117, 247, 136, 139, 250, 220, 130, 55, 123, 28, 345, 130, 416, 204, 131, 131, 357, 40, 201, 74, 13, 7, 236, 179, 167, 199, 399, 32, 447, 122, 460, 131, 159, 249, 390, 102, 117, 92, 495, 211, 28, 68, 175, 155, 100, 158, 269, 164, 156, 108, 340, 155, 194, 209, 38, 2, 125, 176, 442, 63, 393, 176, 97, 21, 324, 247, 48, 66, 97, 194, 132, 193, 366, 234, 496, 239, 297, 105]; 
    }
    if (ZEROcoords.length == 0) {
      ZEROcoords = [319, 372, 374, 366, 58, 458, 189, 249, 420, 472, 186, 408, 294, 320, 30, 328, 49, 437, 186, 472, 206, 414, 19, 451, 439, 370, 186, 246, 457, 372, 62, 476, 90, 336, 149, 457, 325, 239, 289, 272, 376, 474, 376, 239, 499, 271, 265, 406, 451, 271, 308, 295, 22, 304, 8, 271, 313, 376, 467, 456, 42, 279, 263, 388, 94, 352, 98, 405, 294, 374, 169, 342, 114, 235, 469, 389, 484, 444, 178, 487, 376, 235, 27, 424, 494, 355, 493, 244, 134, 477, 232, 425, 17, 266, 231, 396, 277, 465, 354, 374, 455, 379, 148, 439, 173, 411, 361, 471, 90, 344, 414, 483, 231, 300, 187, 455, 215, 403, 285, 328, 279, 353, 262, 441, 51, 386, 381, 266, 457, 397, 58, 431, 433, 376, 357, 371, 125, 411, 179, 354, 372, 250, 342, 435, 353, 319, 177, 413, 179, 251, 310, 381, 336, 402, 227, 457, 476, 323, 359, 374, 116, 413, 159, 242, 445, 232, 373, 367, 225, 433, 52, 285, 283, 255, 84, 289, 380, 488, 160, 450, 307, 410, 271, 473, 63, 489, 343, 330, 264, 278, 74, 273, 297, 300, 0, 297, 333, 310, 350, 306, 108, 272, 98, 420, 374, 356, 483, 358, 105, 371, 439, 434, 421, 484, 182, 297, 254, 344, 120, 429];
    }
    
    rand = Math.floor(Math.random() * ONEcoords.length / 2) * 2;
    X = ONEcoords[rand] + 20 - 210;
    Y = ONEcoords[rand + 1] + 35 - 230;
    ONEcoords.splice(rand, 2);
    op[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
    
    rand = Math.floor(Math.random() * ZEROcoords.length / 2) * 2;
    X = ZEROcoords[rand] - 270;
    Y = ZEROcoords[rand + 1] + 35 - 230;
    ZEROcoords.splice(rand, 2);
    zp[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
  }
  
  ONEcoords = []; 
  ZEROcoords = [];
  
  for (var i = 0; i < 20; i++) {
    ONEcoords[i * 2] = Math.floor(Math.random() * 500);
    ONEcoords[i * 2 + 1] = Math.floor(Math.random() * 250) + 250;
    ZEROcoords[i * 2] = Math.floor(Math.random() * 500);
    ZEROcoords[i * 2 + 1] = Math.floor(Math.random() * 250);
  }
  
  for (var i = 2; i < 20; i++) {
    
    rand = Math.floor(Math.random() * ONEcoords.length / 2) * 2;
    X = ONEcoords[rand] + 20 - 210;
    Y = ONEcoords[rand + 1] + 35 - 230;
    ONEcoords.splice(rand, 2);
    op[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
    
    rand = Math.floor(Math.random() * ZEROcoords.length / 2) * 2;
    X = ZEROcoords[rand] - 270;
    Y = ZEROcoords[rand + 1] + 35 - 230;
    ZEROcoords.splice(rand, 2);
    zp[i].style.transform = 'translate('+X+'px'+', '+Y+'px)';
  }

});