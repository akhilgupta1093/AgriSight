import { NextApiRequest, NextApiResponse } from "next";
import prisma from "db/prismaClient";
import { rec } from "@prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<rec>
) {
  const {
    lat,
    lng,
    date: dateTemp,
  }: { lat: number; lng: number; date: Date } = req.body;
  const date = new Date(dateTemp);
  console.log("inputs", lat, lng, date);
  // get record with the same rec, lat, lng, and same day of the created_at
  /*
  const recommendation = await prisma.rec.findFirst({
    where: {
      lat,
      lng,
      created_at: {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lt: new Date(new Date(date).setDate(date.getDate() + 1)),
      },
    },
  });
  */
  //console.log("recommendation", recommendation);
  const recommendation = {
    id: 1,
    rec: `{"date1":{"irrigation":"Irrigate with 0.5 inches of water early in the day to allow for complete evaporation before temperatures cool.","irrigationShort":"0.5 inches early","disease":"Inspect for signs of powdery mildew and treat early infestations immediately.","diseaseShort":"Watch for powdery mildew","work":{"numTasks":3,"numHours":5,"tasks":["Pruning excess leaves","Cleaning equipment","Perform soil test"]}},"date2":{"irrigation":"Irrigate with 0.6 inches of water early in the day to allow for complete evaporation before temperatures cool.","irrigationShort":"0.6 inches early","disease":"Monitor for Grape Leafhoppers and control if necessary.","diseaseShort":"Monitor for Leafhoppers","work":{"numTasks":2,"numHours":3,"tasks":["Weeding around the vines","Control Leafhoppers"]}},"date3":{"irrigation":"Irrigate with 0.8 inches of water. Evening showers may provide additional hydration.","irrigationShort":"0.8 inches","disease":"Apply fungicide to control Powdery Mildew as it thrives in these conditions.","diseaseShort":"Apply fungicide for Mildew","work":{"numTasks":3,"numHours":6,"tasks":["Apply fungicide","Weather proofing equipment","Repair trellis system"]}},"date4":{"irrigation":"No additional irrigation is necessary today. Rain is expected, monitor soil moisture levels.","irrigationShort":"No irrigation, rain expected","disease":"After rain, look for signs of Downy Mildew and Black Rot and treat immediately.","diseaseShort":"Watch for Downy Mildew and Black Rot","work":{"numTasks":3,"numHours":4,"tasks":["Monitor for diseases","Remove infected leaves and grapes","Clean and store tools"]}},"date5":{"irrigation":"No irrigation required due to rainy weather. Soil should have sufficient moisture.","irrigationShort":"No irrigation needed, rainy day","disease":"Post-rain, watch for Botrytis Bunch Rot and practice good sanitation.","diseaseShort":"Watch for Botrytis Bunch Rot","work":{"numTasks":2,"numHours":4,"tasks":["Monitor for Botrytis Bunch Rot","Remove and dispose infected plant parts"]}}}`,
    lat: 0,
    lng: 0,
    created_at: new Date(),
  };
  res.json(recommendation);
}
