/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;

WA.room.onEnterLayer('clockZone').subscribe(() => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }


//customUrl1
WA.room.onEnterLayer('customUrl1').subscribe(() => {
    const coWebsite = await WA.nav.openCoWebSite('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    const coWebsiteWorkAdventure = await WA.nav.openCoWebSite('https://workadventu.re/', true, "", 50, 1, true, true);
})

WA.room.onLeaveLayer('customUrl1').subscribe(closeWebsite)

function closeWebsite(){
    coWebsite.close(); 
}
 

}
