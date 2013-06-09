#pragma strict
var theplayer:GameObject;
var moveSpeed: int = 4;
var rotSpeed: int  = 3;
var maxDistance:int;
var attackDistance:int;
var theCamera: Camera;
static var thisTransform:Transform;

function Awake () {
	thisTransform = transform;
}

function Start () {

  maxDistance = 5;
  attackDistance = 3;
}

function Update(){
if(thisTransform.position.y < 1){thisTransform.position.y = 1;}
Debug.DrawLine(theplayer.transform.position, thisTransform.position, Color.red);
	thisTransform.rotation = Quaternion.Slerp(thisTransform.rotation, Quaternion.LookRotation(theplayer.transform.position - thisTransform.position), rotSpeed * Time.deltaTime);
		if(theCamera.enabled == true){
			if(Vector3.Distance( theplayer.transform.position, thisTransform.position)> attackDistance){
	
		thisTransform.position += thisTransform.forward * moveSpeed * Time.deltaTime;
		}
	}
		else if(theCamera.enabled == false){
		if(Vector3.Distance( theplayer.transform.position, thisTransform.position)> maxDistance){
	
		thisTransform.position += thisTransform.forward * moveSpeed * Time.deltaTime;
		}

	}

}