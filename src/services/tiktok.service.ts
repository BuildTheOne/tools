"use client";

import { TiktokTimestampFormData } from "@/types/tiktok/tiktok-timestamp.type";
import { format } from "date-fns";

const TiktokTimestampService = ({ url }: TiktokTimestampFormData) => {
  const regex = /(?<=\/video\/)(.*?)(?=$|[^0-9])/;
  // const tiktokId = url.split("/")[5];
  const tiktokId = regex.exec(url)![0];

  const tiktokIdBinary = parseInt(tiktokId).toString(2);
  const tiktokIdBinaryFirst32 = tiktokIdBinary.slice(0, 31);
  const tiktokIdTimestamp = parseInt(tiktokIdBinaryFirst32, 2);

  const timestamp = new Date(tiktokIdTimestamp * 1000);

  return format(timestamp, "dd MMMM yyyy HH:mm:ss XXX");
};

export const TiktokService = {
  timestamp: TiktokTimestampService,
};
