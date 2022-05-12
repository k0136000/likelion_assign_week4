import{Router} from "express";
import posts from "./posts.js";

const router = Router();

router.use("/posts",posts);

export default router;
