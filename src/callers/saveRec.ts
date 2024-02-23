import { fetcher } from "@/api/utils";

export const saveRec = async (
  rec: string,
  lat: number,
  lng: number
): Promise<void> => {
  try {
    const response = await fetcher("/api/saveRec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rec,
        lat,
        lng,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log("recommendation saved", result);
  } catch (error) {
    console.error("Failed to save rec", error);
  }
};
