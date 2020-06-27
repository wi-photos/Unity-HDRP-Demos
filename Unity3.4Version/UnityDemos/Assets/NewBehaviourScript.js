/* Example level loader */


// JavaScript
function OnGUI () {
    // Make a background box
    GUI.Box (Rect (10,10,100,160), "Loader Menu");
    
    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (20,40,80,20), "ImageDemo")) {
        Application.LoadLevel (1);
    }
    
    // Make the second button.
    if (GUI.Button (Rect (20,70,80,20), "Embers")) {
        Application.LoadLevel (2);
    }
    if (GUI.Button (Rect (20,100,80,20), "Japanese")) {
        Application.LoadLevel (3);
    }
    if (GUI.Button (Rect (20,130,80,20), "SpaceShip")) {
        Application.LoadLevel (4);
    }
}



