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
  preview: false,
});

// Register the Login component
PLASMIC.registerComponent(Login, {
  name: 'Login',
  importPath: './components/Login', // Path to the component
  props: {
    email: { type: 'string' }, // Define expected props
    password: { type: 'string' },
  },
  refActions: {
    triggerLogin: {
      description: 'Triggers the login action with provided credentials.',
      argTypes: [] // No arguments needed for this action
    }
  },
});

// Register the Logout component
PLASMIC.registerComponent(Logout, {
  name: 'Logout',
  importPath: './components/Logout', // Path to the component
  props: {},
  refActions: {
    triggerLogout: {
      description: 'Triggers the logout action.',
      argTypes: [],
    },
  },
});

// Register global context
PLASMIC.registerGlobalContext(AuthGlobalContext, {
  name: "AuthGlobalContext",
  props: { authUrl: "string" },
  providesData: true,
});
