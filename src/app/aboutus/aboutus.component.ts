import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { History, Challenge, Mission } from '../../_data/aboutus';

@Component({
    selector: 'app-aboutus',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

    history = false;
    challenge = false;
    mission = false;

    historyInfo = History;
    challengeInfo = Challenge;
    missionInfo = Mission;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.changeTab(params.page);
        });
    }

    changeTab(tab) {
        switch (tab) {
            case 'history':
                this.history = true;
                this.challenge = false;
                this.mission = false;
                break;
            case 'challenge':
                this.history = false;
                this.challenge = true;
                this.mission = false;
                break;
            case 'mission':
                this.history = false;
                this.challenge = false;
                this.mission = true;
                break;
        }
    }

}
