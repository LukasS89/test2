import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Login from './components/Login';
import Logout from './components/Logout';
import { AuthGlobalContext } from './components/AuthGlobalContext';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "7YxWRrh3dN23tQ7PqjX2hp",
      token: "uswPpqBag2fpCpPNKGR786w50XrQmaZBbPiI4bJPtcGj2u3vEYTGsX7Vo8dGE4dpRprLp6CUcNaBLuyvamlPQ",
    },
  ],

  // Set preview to true for development to see unpublished changes.
  preview: false,
});


