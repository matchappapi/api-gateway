import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';
import authMiddleware from "../helpers/middlewares/auth-middleware";
import RequestWithUser from "../helpers/interfaces/requestWithUser.inteface";
 
class PostsController {

  public base_url = 'http://localhost:3000'
  public api = apiAdapter(this.base_url);
  public path = '/posts';
  public router = Router();
  
  constructor() {
    this.intializeRoutes();
  }
 
  private intializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.getAllPosts);
    // this.router.post(`${this.path}`, this.createPost);
    // this.router.patch(`${this.path}`, this.createPost);
  }
 
  private getAllPosts = async (req: RequestWithUser, res: Response, next:NextFunction) => {
    try {
      console.log("REQ POSTS", req.cookies)
      const resp = await this.api.get(req.path)
      res.send(resp.data);
    } catch (error) {
      next(error);
    }
    
  }

}
 
export default PostsController;