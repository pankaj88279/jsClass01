class MyB{
        //1.properties
            a=10;


          //2.constructor().


          //3.methods

            student1(){
                console.log("pankaj rathore")
            
            }

}
let obja=new MyB();
obja.student1();
//console.log(student1)

 class MyC{

            //1.properties.
            x=10;
            y=20;
            z;
            //2.constructor.
        constructor(y){
            this.z=y
        }
            //3.methods.
            print(){

                console.log(this.x+this.y+this.z)
            }

    }
    let objb=new MyC(5);
    //objject.methods
    objb.print();


   class MyD{

            //1.properties

            //2.constructor

            //3.methods

           pankaj(){

                console.log("hello world")
            } 
    }

    class MyE extends MyD{
            //1.properties

            //2.constructor

            //3.methods

            rathore(){

                console.log("hello good morning")

            }

         }

    let obje=new MyE();
    obje.rathore();
    obje.pankaj();

    class MyF{

            //1.properties.

            //2.constructor.

            //3.methods.

            greet(){

                console.log('hello everyone')
            }
    }


        let objf=new MyF();
        objf.greet();

    class MyG{

        //1.properties.
        x=2;
        y=3;
        z=5;
        q;
        


        //2.constructor.
        constructor(y){

            this.q=y
        }
        //3.methods.

        reet(){

            console.log(this.x+this.y+this.z+this.q);
        }

    }
     let objg=new MyG(5);
     objg.reet();

    class MyH{

        //1.properties.
        x=2;
        t;
        //2.constructor.
        constructor(x){
            this.t=x

        }
        //3.methods.

        speed(){

            console.log(this.x+this.t)
        }


    }

    let objh=new MyH(20);
    objh.speed();
    