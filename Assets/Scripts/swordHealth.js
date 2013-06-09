#pragma strict
var maxSwordHealth: int = 20;
var currentSwordHealth: int = 20;
var healthbarLenth:float;
function Start () {

}

function Update () {
	AddjustCurrentHealth(0);
}

function OnGUI(){
GUI.Label(new Rect(10,30,100,20), "Power: " + currentSwordHealth.ToString() + " / " + maxSwordHealth.ToString());

}

function AddjustCurrentHealth(adj:int){
currentSwordHealth += adj;

if(currentSwordHealth <0){
currentSwordHealth = 0;
}
if(currentSwordHealth > maxSwordHealth){
currentSwordHealth = maxSwordHealth;
}
if(maxSwordHealth < 1){
maxSwordHealth = 1;
	}
	
}