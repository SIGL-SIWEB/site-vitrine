import {RouterModule, Routes} from '@angular/router';
import { ModuleComponent } from './modules/modules.component';
import { AnswerComponent } from './answer/answer.component';
import {NgModule} from '@angular/core'
import { HomepageComponent } from './home/homepage.component';


export const routes : Routes = [

    {
        path: 'modules',
        component : ModuleComponent,
        data: {
            title: 'Acceuil'
        }
    },
    {
        path: 'answer',
        component: AnswerComponent,
        data: {
            title: 'Answer'
        }
    },
    {
        path: '',
        component: HomepageComponent
    },
    {
        path : '**',
        redirectTo : ''
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }