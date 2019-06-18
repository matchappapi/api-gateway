import App from './App';
import PostsController from './posts/posts.controller';
import UsersController from './users/users.controller';
import AuthenticationController from './authentication/authentication.controller';
 
const app = new App(
  [
    new PostsController(),
    new UsersController(),
    new AuthenticationController(),
  ],
  3000,
  '0.0.0.0'
);
 
app.listen();