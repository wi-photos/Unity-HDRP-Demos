using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using UnityEngine.SceneManagement;
public class play : MonoBehaviour {
    
    public void TaskOnClick(string level){
        SceneManager.LoadScene(level);

    }
}
