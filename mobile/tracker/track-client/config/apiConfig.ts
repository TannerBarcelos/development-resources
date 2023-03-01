export const apiConfig = {
  baseUrl:
    "https://ccd1-2601-646-8a80-89f0-515a-44b6-2169-90e2.ngrok.io/api/v1", // change for every ngrok startup / expiration (tedious but this is for a learning project) to negate this, deploy server with SSL
  methods: {
    get: {
      uris: {
        tracks: {},
      },
    },
    post: {
      uris: {
        auth: {
          signin: "/auth/signin",
          signup: "/auth/signup",
          signout: "/auth/signout",
        },
      },
    },
    put: {
      uris: {},
    },
    patch: {
      uris: {},
    },
    delete: {
      uris: {},
    },
  },
};
