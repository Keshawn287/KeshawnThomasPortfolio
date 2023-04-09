import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-structure',
  templateUrl: './project-structure.component.html',
  styleUrls: ['./project-structure.component.css']
})
export class ProjectStructureComponent {
  @Input() projectTitle!: string;
  @Input() projectSubtitle!: string;
  @Input() projectImage!: string;
  @Input() projectDescription!: string;
}
