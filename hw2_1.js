// task1
function task1(n) {
    if (n === 1) { //1
        return;
    }
    for (let i = 1; i <= n; i++) { 
        for (let j = 1; j <= n; j++) { 
            console.log("*");
            break;
        }
    }
} 
//============================
// task2
function task2(n) {
    let a = 0; //1
    let i, j;
    for (i = 0; i < n; i++) { 
        for (j = n; j > i; j--) { 
        }
    }
} 
//============================
// task3
function task3(n) {  // n = 8
    let a = 0;
    let i, j;
    for (i = Math.floor(n / 2); i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) { 
            a = a + Math.floor(n / 2); 
        }
    }
} 
//============================
// task4
function task4(n) {
    let a = 0; 
    let i = n; 
    while (i > 0) { 
        a += i; 
        i = Math.floor(i / 2);  
        console.log("*"); 
    }
} 
task4(10);