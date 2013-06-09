#pragma strict
var target:GameObject;
var attackTimer:float;
var coolDown:float;
var cool:boolean = false;
var showTimer: int;
var theCamera: Camera;
function Start () {
attackTimer = 0;
coolDown = 3;

}

function Update () {
	
	if(attackTimer >0){
	 attackTimer -= Time.deltaTime;
	}
	if (attackTimer < 0){
	attackTimer = 0;
	}
	
		if(attackTimer == 0  && theCamera.enabled == true){
		Attack();
		if(cool){
	 		attackTimer =  coolDown;
	 		
			}
	}
	showTimer = parseInt(attackTimer);
}



function Attack(){
var distance:float = Vector3.Distance(target.transform.position,transform.position);

var dir : Vector3 = (target.transform.position - transform.position).normalized;
var direction: float = Vector3.Dot(dir, transform.forward);
if(direction < 2.5f && distance > 0 && distance < 3){
 	if(direction >0){ 
 	cool = true;
 	print(distance);
 	print("Enemy1Attack");
 		}
 	}
}