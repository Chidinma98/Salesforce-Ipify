import { LightningElement, track } from 'lwc';

export default class ChecksIP extends LightningElement {
@track myIp;

getIp(){

const calloutURI = 'https://api.ipify.org?format=json'
console.log('enters fetch function')

fetch(calloutURI, {method: "GET"
}).then((response) => 
    response.json()
).then(repos => {
        console.log(repos)
        this.myIp = repos.ip;
        console.log(this.myIp);
    })

 }

}