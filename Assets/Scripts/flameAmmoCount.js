#pragma strict
var maxFlameHealth: int = 20;
static var currentFlameHealth: int = 20;
var healthbarLenth3:float;
function Start () {

}

function Update () {
	AddjustCurrentHealth(0);
}

function OnGUI(){
GUI.Label(new Rect(10,50,100,20), "Ammo: " + currentFlameHealth.ToString() + " / " + maxFlameHealth.ToString());

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
} 	