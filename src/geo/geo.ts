import * as turf from "@turf/turf";

const distanceToPolygon = (
  point: [number, number],
  polygon: number[][][]
): number => {
  const turfPoint = turf.point(point);
  const turfPolygon = turf.polygon(polygon);
  let polygonLine = turf.polygonToLine(turfPolygon);
  if (polygonLine.type === "FeatureCollection") {
    polygonLine = polygonLine.features[0];
  }
  const nearestPoint = turf.nearestPointOnLine(polygonLine, turfPoint);
  const distance = turf.distance(turfPoint, nearestPoint, {
    units: "miles",
  });
  return distance;
};

export const closeAndNear = (
  point: [number, number],
  polygon: number[][][]
): [boolean, boolean] => {
  const distance = distanceToPolygon(point, polygon);
  console.log("distance", distance);
  return [distance < 1, distance < 10];
};
