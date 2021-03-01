import { Routes } from '@angular/router';

import { CreateArticleComponent } from './articles-list/create-article/create-article.component';
import { CreateScrapeComponent } from './scrapes-list/create-scrape/create-scrape.component';
import { EditArticleComponent } from './articles-list/edit-article/edit-article.component';
import { DetailsArticleComponent } from './articles-list/details-article/details-article.component';


import { CreateCommentComponent } from './comments-list/create-comment/create-comment.component';
import { EditCommentComponent } from './comments-list/edit-comment/edit-comment.component';
import { DetailsCommentComponent } from './comments-list/details-comment/details-comment.component';

import { CreateCategoryComponent } from './categories-list/create-category/create-category.component';
import { EditCategoryComponent } from './categories-list/edit-category/edit-category.component';
import { DetailsCategoryComponent } from './categories-list/details-category/details-category.component';

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

     { path: 'CreateScrape',      component: CreateScrapeComponent },

     { path: 'EditArticle',      component: EditArticleComponent },
     { path: 'DetailsArticle',      component: DetailsArticleComponent },
     { path: 'CreateComment',      component: CreateCommentComponent },
     { path: 'EditComment',      component: EditCommentComponent },
     { path: 'DetailsComment',      component: DetailsCommentComponent },
     { path: 'CreateCategory',      component: CreateCategoryComponent },
     { path: 'EditCategory',      component: EditCategoryComponent },
     { path: 'DetailsCategory',      component: DetailsCategoryComponent },


    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'icons',          component: IconsComponent },
];
