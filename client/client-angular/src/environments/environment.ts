// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  articlesUrl : 'http://localhost:8081/articles',
  categoriesUrl : 'http://localhost:8081/categories',
  commentsUrl : 'http://localhost:8081/comments',
  contactsUrl : 'http://localhost:8081/contacts',
  scrapesUrl : 'http://localhost:8081/scrapes',
  filtersUrl : 'http://localhost:8081/filters',
  usersUrl : 'http://localhost:8081/users',

};
