import { Component, OnInit } from '@angular/core';
import { Agency } from '../../classes/agency';
import { AgentService } from '../../services/agent.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model = new Agency();
  editMode = true;
  displaySuccess = false;
  displayFailed = false;

  constructor(private agentService: AgentService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('OnSubmit');
    this.agentService.registerAgency(this.model).subscribe(
      model => {
        this.model = model;
        if (this.model != null) {
          this.displaySuccess = true;
          this.displayFailed = false;
          this.editMode = false;
        }
        else {
          this.displayFailed = true;
          this.displaySuccess = false;
        }
      }
    );
    console.log('agencies: ' + this.model);
  }


}
