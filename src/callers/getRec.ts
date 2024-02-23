import { fetcher } from "@/api/utils";
import { rec } from "@prisma/client";

export const getRec = async (
  lat: number,
  lng: number,
  date: Date
): Promise<rec | null> => {
  console.log(
    "environment variables",
    process.env.NEXT_PUBLIC_API_URL,
    process.env.VERCEL_URL
  );
  try {
    const response = await fetcher("/api/getRec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat,
        lng,
        date,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result: rec = await response.json();
    return result;
  } catch (error) {
    console.log("Failed to get rec", error);
    return null;
  }
};
