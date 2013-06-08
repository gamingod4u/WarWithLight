#pragma strict
var theLight: GameObject;
var randomOff:int;
var randomOn:int;
var canGetLights:boolean;
var intialStart:boolean;

function Start () {
theLight.light.enabled = true;
canGetLights = false;
intialStart = true;
}

function Update () {
if (intialStart){
intialStart = false;
StartCoroutine("InitialStart");
}
if(theLight.light.enabled && canGetLights){
	GetLights(Random.Range(10,25));
	canGetLights = false;
	}	
}

function GetLights(delay:float){


		var timer = Time.time + delay;
		theLight.light.enabled = false;
		
		while (timer > Time.time){
		yield;
		}
		StartCoroutine("GetLightsOn");	

}

function GetLightsOn(){
theLight.light.enabled = true;
randomOn = Random.Range(10,25);
yield WaitForSeconds(randomOn);
canGetLights = true;

}

function InitialStart(){
var tempTime = Time.time + Random.Range(10,25);
yield WaitForSeconds(tempTime);
canGetLights = true;
}