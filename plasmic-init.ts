// plasmic-init.ts
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

const PLASMIC_PROJECT_ID = "7YxWRrh3dN23tQ7PqjX2hp"; // Replace with your actual project ID
const PLASMIC_ACCESS_TOKEN = "uswPpqBag2fpCpPNKGR786w50XrQmaZBbPiI4bJPtcGj2u3vEYTGsX7Vo8dGE4dpRprLp6CUcNaBLuyvamlPQ"; // Replace with your actual access token

export const plasmic = initPlasmicLoader({
  projects: [
    {
      id: PLASMIC_PROJECT_ID,
      token: PLASMIC_ACCESS_TOKEN,
    },
  ],
});
