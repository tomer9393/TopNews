import { Routes } from '@angular/router';

import { CreateArticleComponent } from './articles-list/create-article/create-article.component';
import { EditArticleComponent } from './articles-list/edit-article/edit-article.component';
import { DetailsArticleComponent } from './articles-list/details-article/details-article.component';


export const TableListRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
     { path: 'CreateArticle',      component: CreateArticleComponent },
     { path: 'EditArticle',      component: EditArticleComponent },
     { path: 'DetailsArticle',      component: DetailsArticleComponent },

    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'icons',          component: IconsComponent },
];
