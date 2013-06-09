#pragma strict
var target:GameObject;
var attackTimer:float;
var coolDown:float;
var cool:boolean = false;
var showTimer: int;
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
	
		if(Input.GetAxis("Fire1")&&attackTimer==0){
		Attack();
		if(cool){
	 		attackTimer =  coolDown;
	 		
			}
	}
	showTimer = parseInt(attackTimer);
}

function OnGUI(){
GUI.Label(new Rect(100,30,100,20), "Cool Down: " + showTimer.ToString());
}

function Attack(){
var distance:float = Vector3.Distance(target.transform.position,transform.position);

var dir : Vector3 = (target.transform.position - transform.position).normalized;
var direction: float = Vector3.Dot(dir, transform.forward);
if(direction < 2.5f && distance > 0 && distance < 2){
 	if(direction >0){
 	var health : swordHealth = GameObject.Find("Sword").GetComponent(swordHealth) as swordHealth;
 	cool = true;
 	health.AddjustCurrentHealth(-1);
 	print("Attack");
 		}
 	}
}