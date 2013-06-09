#pragma strict
var maxHealth: int = 100;
var currentHealth: int = 100;
var healthbarLenth:float;
function Start () {

}

function Update () {
	AddjustCurrentHealth(0);
}

function OnGUI(){
GUI.Label(new Rect(10,10,100,20), "Health: " + currentHealth.ToString() + " / " + maxHealth.ToString());

}

function AddjustCurrentHealth(adj:int){
currentHealth += adj;

if(currentHealth <0){
currentHealth = 0;
}
if(currentHealth > maxHealth){
currentHealth = maxHealth;
}
if(maxHealth < 1){
maxHealth = 1;
	}

}