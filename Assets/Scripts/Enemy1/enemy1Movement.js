#pragma strict
var player:Transform;
var moveSpeed: int = 4;
var rotSpeed: int  = 3;
var maxDistance:int;
var attackDistance:int;
var theCamera: Camera;
static var myTransform:Transform;

function Awake () {
	myTransform = transform;
}

function Start () {
var go : GameObject = GameObject.FindGameObjectWithTag("Player");
	player = go.transform;
  maxDistance = 5;
  attackDistance = 3;
}

function Update(){
if(myTransform.position.y < 1){myTransform.position.y = 1;}
Debug.DrawLine(player.transform.position, myTransform.position, Color.red);
	myTransform.rotation = Quaternion.Slerp(myTransform.rotation, Quaternion.LookRotation(player.transform.position - myTransform.position), rotSpeed * Time.deltaTime);
		if(theCamera.enabled == true){
			if(Vector3.Distance( player.transform.position, myTransform.position)> attackDistance){
				myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
		}
	}
		else if(theCamera.enabled == false){
		if(Vector3.Distance( player.transform.position, myTransform.position)> maxDistance){
	
		myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
		}

	}

}