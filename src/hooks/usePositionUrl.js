/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";

export function usePositionUrl() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get["lat"];
  const lng = searchParams.get["lng"];

  return [lat, lng];
}