#pragma strict
var target:GameObject;
var rod: GameObject;
var attackTimer:float;
var coolDown:float;



function Start () {
attackTimer = 0;
coolDown = 5.0;

}

function Update () {
	
	if(attackTimer >0){
	 attackTimer -= Time.deltaTime;
	}
	if (attackTimer < 0){
	attackTimer = 0;
	}
	
	if(Input.GetAxis("Fire2")){
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
if(direction < 2.5f && distance > 5 && distance < 10){
 	if(direction > 0){
 	var flame: flameAmmoCount = GameObject.Find("Rod").GetComponent(flameAmmoCount)as flameAmmoCount;
 	flame.AddjustCurrentHealth(-1);
 	print("fireAttack");
 		}
 	}
}