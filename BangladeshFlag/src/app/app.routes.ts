import { Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { HurryPooterComponent } from './hurry-pooter/hurry-pooter.component';
import { FlagComponent } from './flag/flag.component';

export const routes: Routes = [
    {path: 'teacher',component:TeacherComponent}
    ,{path: 'harry-potter-spells',component:HurryPooterComponent}
    ,{path: 'flag',component:FlagComponent}
];
