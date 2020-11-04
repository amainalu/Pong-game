class Player {
   constructor (x,y){
       this.x= x;
       this.y= y;
       this.height = 100;
       this.width = 20;
   } 
   moveUp(steps){
       if (this.y <= 0){
           return;
       }
       this.y -= steps;
   }

   moveDown(steps){
       if (this.y >= WIDTH- this.height ){
           return;
       }
       this.y += steps;
   }
    moveFoward(steps){
        if(this.x >= WIDTH*2- this.width){
            return;
        }
        this.x += steps;
    }

    moveBackwards(steps){
        if(this.x <= 0){
            return;      
        }
        this.x -= steps;
    }

   draw(){
    rect(this.x, this.y, this.width, this.height)   
   }
}