import { Component, Input } from '@angular/core';

@Component({
  selector: 'marcohern-tasks-assigned',
  templateUrl: './tasks-assigned.component.html',
  styleUrls: ['./tasks-assigned.component.scss']
})
export class TasksAssignedComponent {
  @Input() public title:string = '*Title*';
  @Input() public tasks:any = [
    { who: 'Revolver Ocelot', what: 'Revolver Pistol'   , name:'Guard Basement', turnout:'30 mins ago' },
    { who: 'Vulcan Raven'   , what: 'M61 Vulcan'        , name:'Patrol Yard'   , turnout:'30 mins ago' },
    { who: 'Psyco Mantis'   , what: 'Psychic'           , name:'Patrol Office' , turnout:'40 mins ago' },
    { who: 'Sniper Wolf'    , what: 'Sniper Rifle'      , name:'Guard Corridor', turnout:'40 mins ago' },
    { who: 'Decoy Octopus'  , what: 'Master of Disguise', name:'Be DARPA Chief', turnout:'50 mins ago' },
  ];
}
