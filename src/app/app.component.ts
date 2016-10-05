import {Component, OnInit} from '@angular/core';
import {SalsahService} from './salsah.service';

import 'rxjs';

import {Monument} from "./resources/monument";
import {JsonConvert} from "./json-convert";
import {UserData} from "./user-data";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SalsahService]
})
export class AppComponent implements OnInit {

    title = 'app works well !';

    monument:Monument;
    error:string;


    constructor(private salsahService: SalsahService) {

    }

    ngOnInit() {
/*
        //let data = "UserData";
        //console.log(new window[data]());

        let str = "String";
        if (typeof(window[str]) !== "undefined") {
            //console.log((new window[str]()).constructor.name);
        }

        console.log(MyNamespace["UserData"]);

return;

        let str = Boolean;
        console.log((new str()).constructor.name);

        let str = Number;
        console.log((new str()).constructor.name);

        let str = Array;
        console.log((new str()).constructor.name);

        let str = UserDat2a;
        console.log((new str()).constructor.name);

        let str = UserData;
        console.log((new str()).constructor.name);*/


        //return;
        let jsonData = '{ "a": "a_val", "b": ["b_val1", "b_val2"], "c": {"prop": "c_val1"}, "d": [{"prop": "d_val1"}, {"prop": "d_val2"}, {"prop": "d_val3"}] }';

        //try {
            JsonConvert.debug = true;
            let userData: UserData = JsonConvert.deserializeObject(JSON.parse(jsonData), UserData);
            console.log(userData.d_array3[0].greeting());
            //console.log(userData.d_array1[0].greeting());
        //} catch (e) {
            //console.log((<Error>e));//conversion to Error type
        //}
        /*new UserData();


        //console.log(json.userdata);

        console.log("Starting Logging");
        let data = new UserData();
        Object.keys(data).forEach((key) => {

            console.log(key);
        });

        console.log(Object.prototype);*/



        /*
        this.salsahService.getResourceById(2126046).subscribe(
            (monument: Monument) => { this.monument = monument; },
            (error: any) => { console.log('error'); this.error = <any>error },
            () => { }
        );*/
    }
}
