import React from "react";
import { readFile, writeFile } from "../../helpers/file-helpers";

const DATABASE_PATH = "src/database.json";
export default function HitCounter() {
  const data = JSON.parse(readFile(DATABASE_PATH));
  let { hits } = data;
  hits++;
  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return hits;
}
