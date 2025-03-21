import express from "express";
import { redirectUrl, shortenUrl } from "../controllers";

const router = express.Router();

router.post("/short", shortenUrl);
router.get("/:shortId", redirectUrl);

export default router;
