//1 - Criar um loop que conte de 1 até 10 usando FOR

for(i = 1; i <= 10; i++ ){
    console.log(i)
}



//2 - Criar um loop que conte de 10 até 1 usando WHILE
let cont = 1
while(10 >= cont){
    console.log(cont)
   cont++
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100

for(i = 1; i <= 100; i+=2){
   console.log(i)
}

//Com While 

while(100 > cont){
   if(cont % 2 == 1){
     console.log(cont)
     
   }
   cont ++
   // ou

   // console.log(cont)
   // cont +=2

}

//4- Criar um loop que conte todos os números pares de 0 a 100

for(i = 2; i <= 100; i+=2){
   console.log(i)
}

//com while

let n = 2

while(100 >= n){
   if(n % 2 == 0){
       console.log(n)
     
   }
   
   n ++
    
 }