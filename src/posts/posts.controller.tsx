import { Router, Request, Response, NextFunction } from 'express';
import apiAdapter from '../helpers/adapter/apiAdapter';
 
class PostsController {

  public base_url = 'http://localhost:4002'
  public api = apiAdapter(this.base_url);
  public path = '/posts';
  public router = Router();
  
  constructor() {
    this.intializeRoutes();
  }
 
  private intializeRoutes() {
    this.router.get(`${this.path}`, this.getAllPosts);
    // this.router.post(`${this.path}`, this.createPost);
    // this.router.patch(`${this.path}`, this.createPost);
  }
 
  private getAllPosts = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const resp = await this.api.get(req.path, { headers: { 'cookie': `Authorization=${JSON.stringify(req.cookies.Authorization)}` }})
      res.send(resp.data);
    } catch (error) {
      next(error.response.data);
    }
    
  }

}
 
export default PostsController;