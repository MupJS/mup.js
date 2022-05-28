// Mup, a simple JS library for quick and easy templates
import { Components } from "/mup.conf.js"
function mup(){
    for (let i in Components){
        let fileName = Components[i].lastIndexOf('/')
        fileName = Components[i].substring(fileName + 1)
        var tagName = fileName.replace(".mup", "")
        fetch(Components[i])
            .then(response => response.text())
            .then(text => document.getElementById(tagName).innerHTML += text)
    }
}
window.onload = mup()