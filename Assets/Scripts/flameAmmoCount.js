#pragma strict
var maxFlameHealth: int = 20;
static var currentFlameHealth: int = 20;
var healthbarLenth3:float;
function Start () {
healthbarLenth3 = Screen.width/2;
}

function Update () {
	AddjustCurrentHealth(0);
}

function OnGUI(){
GUI.Box(new Rect(10,60,healthbarLenth3,20), "Ammo: " + currentFlameHealth + " / " + maxFlameHealth);

}

function AddjustCurrentHealth(adj:int){
currentFlameHealth += adj;

if(currentFlameHealth <0){
currentFlameHealth = 0;
}
if(currentFlameHealth > maxFlameHealth){
currentFlameHealth = maxFlameHealth;
}
if(maxFlameHealth < 1){
maxFlameHealth = 1;
	}
 	healthbarLenth3 = ((Screen.width/2) * (currentFlameHealth/maxFlameHealth));
}