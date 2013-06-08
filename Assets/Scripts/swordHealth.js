#pragma strict
var maxSwordHealth: int = 20;
var currentSwordHealth: int = 20;
var healthbarLenth:float;
function Start () {
healthbarLenth = Screen.width/2;
}

function Update () {
	AddjustCurrentHealth(0);
}

function OnGUI(){
GUI.Box(new Rect(10,35,healthbarLenth,20), "Power: " + currentSwordHealth + " / " + maxSwordHealth);

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
	healthbarLenth = ((Screen.width/2) * (currentSwordHealth/maxSwordHealth));
}