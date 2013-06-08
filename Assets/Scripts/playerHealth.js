#pragma strict
var maxHealth: int = 100;
var currentHealth: int = 100;
var healthbarLenth:float;
function Start () {
healthbarLenth = Screen.width/2;
}

function Update () {
	AddjustCurrentHealth(0);
}

function OnGUI(){
GUI.Box(new Rect(10,10,healthbarLenth,20), "Health: " + currentHealth + " / " + maxHealth);

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
	healthbarLenth = ((Screen.width/2) * (currentHealth/maxHealth));
}