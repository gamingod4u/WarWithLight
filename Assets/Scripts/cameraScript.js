#pragma strict
var theCamera: GameObject;
var randomOff:int;
var randomOn:int;
var canGetLights:boolean;
var intialStart:boolean;

function Start () {

canGetLights = false;
intialStart = true;
}

function Update () {
if (intialStart){
intialStart = false;
StartCoroutine("InitialStart");
}
if(theCamera.camera.enabled && canGetLights){
	GetLights(Random.Range(10,25));
	canGetLights = false;
	}	
}

function GetLights(delay:float){


		var timer = Time.time + delay;
		theCamera.camera.enabled = false;
		
		while (timer > Time.time){
		yield;
		}
		StartCoroutine("GetLightsOn");	

}

function GetLightsOn(){
theCamera.camera.enabled = true;
randomOn = Random.Range(10,25);
yield WaitForSeconds(randomOn);
canGetLights = true;

}

function InitialStart(){
var tempTime = Time.time + Random.Range(10,25);
yield WaitForSeconds(tempTime);
canGetLights = true;
}