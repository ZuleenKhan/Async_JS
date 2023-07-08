function Timebyloop(){
    console.log("Start of Loop") ; 
    for(let i = 0 ; i < 10000000000 ; ++i){
      // nothing   
    }
    console.log("End of Loop") ; 
 
 
 }
 
 
 function Timebyruntime0(){
   console.log("Start of runtime") ; 
   setTimeout(()=> {console.log("Hi I am in between 0 ") ; 
            for(let i = 0 ; i < 10000000000 ; ++i)
             {   // nothing 
             }
 
 } , 5000) ;
   
   // console.log("End of Runtime") ; 
 
 
 } // 5 sec Timer 
 function Timebyruntime1(){
   console.log("Start of runtime") ; 
   setTimeout(()=> {console.log("Hi I am in between 1 ") ; 
 
 } , 0) ;
   
   // console.log("End of Runtime") ; 
 
 
 } // 0 sec Timer 
 function Timebyruntime2(){
   console.log("Start of runtime") ; 
   setTimeout(()=> {console.log("Hi I am in between 2") ; 
 
 } , 2500) ;
   
   // console.log("End of Runtime") ; 
 
 
 } //  2.5 sec Timer 
 
 console.log("New Demo") ; 
 
 Timebyloop() ; 
 Timebyruntime0() ;
 Timebyruntime1() ;
 Timebyruntime2() ; 
 Timebyloop() ; 
 
 