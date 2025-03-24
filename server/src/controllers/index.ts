import { Request, Response } from "express";
import URL from "../models/url";
import { nanoid } from "nanoid";
import validator from "validator";

// Shorten URL with unique shortId
export const shortenUrl = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { longUrl } = req.body;

  if (!validator.isURL(longUrl)) {
    res.status(400).json({ message: "Invalid URL format" });
    return;
  }

  let shortId = nanoid(7);

  try {
    let existingUrl = await URL.findOne({ shortId });
    while (existingUrl) {
      shortId = nanoid(7);
      existingUrl = await URL.findOne({ shortId });
    }

    const newUrl = new URL({ shortId, longUrl });
    await newUrl.save();

    res.status(201).json({
      shortUrl: `${process.env.SERVER_API!}/${shortId}`,
      message: "URL shortened successfully",
    });
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    res.status(500).json({ message: "Server error" });
  }
};

// Redirect URL
export const redirectUrl = async (req: Request, res: Response) => {
  const { shortId } = req.params;

  try {
    const url = await URL.findOneAndUpdate(
      { shortId },
      { $inc: { clicks: 1 } },
      { new: true }
    );

    if (!url) {
      res.status(404).json({ message: "URL not found" });
      return;
    }

    res.redirect(url.longUrl);
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    res.status(500).json({ message: "Server error" });
  }
};
