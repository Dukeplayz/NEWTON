class Sling{
    constructor(bodyA,pointB,offsetX,offsetY){

        this.offsetX=offsetX
        this.offsetY=offsetY

        var options = {

            bodyA:bodyA,
            pointB:pointB,
            pointB:{x:this.offsetX, y:this.offsetY},

            stiffness:0.0001,
            length:5
                
        }
        this.pointB = pointB;
      this.sling = Constraint.create(options)
    World.add(world,this.sling)


    }



    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        
     line (pointA.x,pointA.y,pointB.x,pointB.y)
     
    }
}
}