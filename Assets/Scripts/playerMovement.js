var speed = 3.0;
var jumpSpeed = 50.0;
var grounded = true;
var rotateSpeed : float = 3.0;
var gravity : float = 20.0f;
private var moveDirection:Vector3 = Vector3.zero;
function Update () 
{
	var controller : CharacterController = GetComponent(CharacterController);
	if(controller.isGrounded){	
    	transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);
    	moveDirection = Vector3(0, 0,Input.GetAxis("Vertical"));
   		moveDirection = transform.TransformDirection(moveDirection);
	    moveDirection *= speed;
            
    if (Input.GetButton ("Jump")){
               moveDirection.y = jumpSpeed;
            }
        }
        // Apply gravity
        moveDirection.y -= gravity * Time.deltaTime;
        
        // Move the controller
        controller.Move(moveDirection * Time.deltaTime);
}
function OnCollisionEnter(hit : Collision)
{
	grounded = true;
	
}