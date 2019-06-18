import App from './App';
import AuthenticationController from './authentication/authentication.controller';
import BookingsController from './bookings/bookings.controller';
import PostsController from './posts/posts.controller';
import UsersController from './users/users.controller';
 
const app = new App(
  [
    new AuthenticationController(),
    new BookingsController(),
    new PostsController(),
    new UsersController(),
  ],
  3000,
  '0.0.0.0'
);
 
app.listen();