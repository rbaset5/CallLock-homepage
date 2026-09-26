import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CopperDesk",
    short_name: "CopperDesk",
    description:
      "CopperDesk answers the calls you miss, gets the caller's details, and sends them to you right away so you can lock in the job. For trade and service businesses.",
    start_url: "/",
    display: "browser",
    icons: [{ src: "/icon.svg", type: "image/svg+xml" }],
  };
}
