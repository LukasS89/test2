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

// Register the Login component
PLASMIC.registerComponent(Login, {
  name: 'Login',
  props: {
    email: {
      type: 'string', // Email value passed from parent component
    },
    password: {
      type: 'string', // Password value passed from parent component
    }
  },
  refActions: {
    triggerLogin: {
      description: 'Trigger the login action with the provided email and password',
      argTypes: [] // No arguments needed for this action
    }
  }
});

// Register the Logout component
PLASMIC.registerComponent(Logout, {
  name: 'Logout',
  props: {},
  refActions: {
    triggerLogout: {
      description: 'Trigger the logout action',
      argTypes: [],
    },
  },
});




// Register your global context
PLASMIC.registerGlobalContext(AuthGlobalContext, {
  name: "AuthGlobalContext",
  props: { authUrl: "string" },
  providesData: true,
  // No global actions are needed since we are only fetching data
});
