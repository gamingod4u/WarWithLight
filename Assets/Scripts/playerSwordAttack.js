#pragma strict
var target:GameObject;
var attackTimer:float;
var coolDown:float;

function Start () {
attackTimer = 0;
coolDown = 2.0;

}

function Update () {
	
	if(attackTimer >0){
	 attackTimer -= Time.deltaTime;
	}
	if (attackTimer < 0){
	attackTimer = 0;
	}
	
	if(Input.GetAxis("Fire1")){
	if(attackTimer == 0){
	 Attack();
	 attackTimer =  coolDown;
		}
	}
}
function Attack(){
var distance:float = Vector3.Distance(target.transform.position,transform.position);

var dir : Vector3 = (target.transform.position - transform.position).normalized;
var direction: float = Vector3.Dot(dir, transform.forward);
if(direction < 2.5f){
 	if(direction >0){
 	print("Attack");
 		}
 	}
}