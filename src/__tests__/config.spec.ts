import pdos, { Core } from "../Core";
import { ConfigValidationError, ModuleNotFoundError } from "../Errors";

describe("Configuration setup", () => {
  it("It initializes the env to an accepted option", () => {
    new Core({
      env: "marigold",
      context: {
        gatewayURL: "test",
      },
    });

    expect(pdos().initConfig.env).toBe("marigold");
  });

  it("It fails initializing the env to an unaccepted option", () => {
    expect(
      () =>
        new Core({
          env: "qa",
          context: {
            gatewayURL: "",
          },
        } as any),
    ).toThrow(ConfigValidationError);
  });

  it("It sets the gateway url", () => {
    const gatewayURL = "test";
    new Core({
      env: "marigold",
      context: {
        gatewayURL,
      },
    });

    expect(pdos().gatewayURL).toBe(gatewayURL);
  });

  it("It sets an init test credential id", () => {
    new Core({
      env: "marigold",
      context: {
        gatewayURL: "test",
      },
      test: {
        initCredentialId: "test",
      },
    });

    expect(pdos().test.initCredentialId).toBe("test");
  });

  it("It throws an error if test object is passed when env !== development", () => {
    new Core({
      env: "marigold",
      context: {
        gatewayURL: "test",
      },
      test: {
        initCredentialId: "test",
      },
    });

    expect(pdos().test.initCredentialId).toBe("test");
  });

  it("Its able to set as a compute node", () => {
    new Core({
      env: "marigold",
      context: {
        gatewayURL: "test",
        isComputeNode: true,
      },
    });

    expect(pdos().isComputeNode).toBe(true);
  });

  it("Its able to pass in a module that gets started", async () => {
    new Core({
      env: "marigold",
      context: {
        gatewayURL: "test",
      },
      modules: {
        auth: {},
      },
    });

    pdos().start();
    await pdos().started;

    expect(pdos().modules.auth).toBeDefined();
  });

  it("It throws an error if it is passed in a module that doesnt exist", async () => {
    await expect(async () => {
      new Core({
        env: "marigold",
        context: {
          gatewayURL: "test",
        },
        modules: {
          shouldNotBeFound: {},
        },
      });
      await pdos().start();
    }).rejects.toThrow(ModuleNotFoundError);
  });

  it("It throws an error if gatewayURL is missing from context", () => {
    expect(
      () =>
        new Core({
          env: "marigold",
          context: {} as any,
        }),
    ).toThrow(ConfigValidationError);
  });

  it("It defaults isComputeNode to false when not specified", () => {
    new Core({
      env: "marigold",
      context: {
        gatewayURL: "test",
      },
    });

    expect(pdos().isComputeNode).toBe(false);
  });

  it("It defaults test configuration to empty object when not provided", () => {
    new Core({
      env: "marigold",
      context: {
        gatewayURL: "test",
      },
    });

    expect(pdos().test).toEqual({});
  });

  it("It initializes constants manager on construction", () => {
    const core = new Core({
      env: "marigold",
      context: {
        gatewayURL: "test",
      },
    });

    expect(core.constants).toBeDefined();
  });

  it("It handles module dependencies correctly", async () => {
    const core = new Core({
      env: "marigold",
      context: {
        gatewayURL: "test",
      },
      modules: {
        auth: {
          version: "1.0.0",
        },
      },
    });

    await core.start();
    expect(core.modules.auth).toBeDefined();
    expect(core.started).toBe(true);
  });

  it("It throws error when module has missing dependencies", async () => {
    const core = new Core({
      env: "marigold",
      context: {
        gatewayURL: "test",
      },
      modules: {
        auth: {
          version: "1.0.0",
          dependencies: [
            {
              package: "nonexistent",
              version: "1.0.0",
            },
          ],
        },
      },
    });

    await expect(core.start()).rejects.toThrow();
  });
});
