var speed = 3.0;
var jumpSpeed = 50.0;
var grounded = true;
var rotateSpeed : float = 3.0;
function Update () 
{
	var controller : CharacterController = GetComponent(CharacterController);
    transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);
    var forward : Vector3 = transform.TransformDirection(Vector3.forward);
    var curSpeed : float = speed * Input.GetAxis ("Vertical");
    controller.SimpleMove(forward * curSpeed);
   
	
	if(Input.GetButtonDown("Jump"))
	{
		var jump :Vector3 = transform.TransformDirection(Vector3.up * jumpSpeed * Time.deltaTime);
	}
}

function Jump ()
{
	if(grounded == true)
	{
	rigidbody.AddForce(Vector3.up * jumpSpeed);
	grounded = false;
	}
}

function OnCollisionEnter(hit : Collision)
{
	grounded = true;
	
}