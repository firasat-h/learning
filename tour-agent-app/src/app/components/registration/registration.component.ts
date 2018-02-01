import { Component, OnInit } from '@angular/core';
import { Agency } from '../../classes/agency';
import { AgentService } from '../../services/agent.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  agencies: Agency[] = [];
  model = new Agency();

  constructor(private agentService: AgentService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('OnSubmit');
    this.agentService.registerAgency(this.model).subscribe(
      model => {this.agencies.push(model);
      }
    );
    console.log('agencies: ' + this.agencies);
  }

}
