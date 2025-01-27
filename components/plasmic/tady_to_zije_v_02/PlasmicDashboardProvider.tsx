// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7YxWRrh3dN23tQ7PqjX2hp
// Component: pFlTHvbZzSQb

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Header from "../../Header"; // plasmic-import: uZX7p1wyVbCa/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { DataFetcher } from "@plasmicpkgs/plasmic-query";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7YxWRrh3dN23tQ7PqjX2hp/projectcss
import sty from "./PlasmicDashboardProvider.module.css"; // plasmic-import: pFlTHvbZzSQb/css

createPlasmicElementProxy;

export type PlasmicDashboardProvider__VariantMembers = {};
export type PlasmicDashboardProvider__VariantsArgs = {};
type VariantPropType = keyof PlasmicDashboardProvider__VariantsArgs;
export const PlasmicDashboardProvider__VariantProps =
  new Array<VariantPropType>();

export type PlasmicDashboardProvider__ArgsType = {};
type ArgPropType = keyof PlasmicDashboardProvider__ArgsType;
export const PlasmicDashboardProvider__ArgProps = new Array<ArgPropType>();

export type PlasmicDashboardProvider__OverridesType = {
  root?: Flex__<"div">;
  section?: Flex__<"section">;
  header?: Flex__<typeof Header>;
  main?: Flex__<"main">;
  dashboard?: Flex__<"section">;
  body?: Flex__<"section">;
  aktivity?: Flex__<"div">;
  divider?: Flex__<"section">;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
  httpRestApiFetcher?: Flex__<typeof DataFetcher>;
  activeList2?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultDashboardProviderProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDashboardProvider__RenderFunc(props: {
  variants: PlasmicDashboardProvider__VariantsArgs;
  args: PlasmicDashboardProvider__ArgsType;
  overrides: PlasmicDashboardProvider__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicDashboardProvider.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicDashboardProvider.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicDashboardProvider.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <main
              data-plasmic-name={"main"}
              data-plasmic-override={overrides.main}
              className={classNames(projectcss.all, sty.main)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__y62Rn)}>
                <section
                  data-plasmic-name={"dashboard"}
                  data-plasmic-override={overrides.dashboard}
                  className={classNames(projectcss.all, sty.dashboard)}
                >
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__l9T1H
                    )}
                    component={Link}
                    onClick={async event => {
                      const $steps = {};

                      $steps["goToDashboardProvider"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: `/provozovatel/${"activity"}`
                            };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToDashboardProvider"] != null &&
                        typeof $steps["goToDashboardProvider"] === "object" &&
                        typeof $steps["goToDashboardProvider"].then ===
                          "function"
                      ) {
                        $steps["goToDashboardProvider"] = await $steps[
                          "goToDashboardProvider"
                        ];
                      }
                    }}
                    platform={"nextjs"}
                  >
                    <h4
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        projectcss.__wab_text,
                        sty.h4__absFj
                      )}
                    >
                      {"Spr\u00e1va aktivit"}
                    </h4>
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__l8ZN
                    )}
                    component={Link}
                    onClick={async event => {
                      const $steps = {};

                      $steps["goToDashboardProvider"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: `/provozovatel/${"profile"}`
                            };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToDashboardProvider"] != null &&
                        typeof $steps["goToDashboardProvider"] === "object" &&
                        typeof $steps["goToDashboardProvider"].then ===
                          "function"
                      ) {
                        $steps["goToDashboardProvider"] = await $steps[
                          "goToDashboardProvider"
                        ];
                      }
                    }}
                    platform={"nextjs"}
                  >
                    <h4
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        projectcss.__wab_text,
                        sty.h4__jml4K
                      )}
                    >
                      {"Nastaven\u00ed profilu"}
                    </h4>
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__oidSx
                    )}
                    component={Link}
                    onClick={async event => {
                      const $steps = {};

                      $steps["goToDashboardProvider"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: `/provozovatel/${"stats"}`
                            };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToDashboardProvider"] != null &&
                        typeof $steps["goToDashboardProvider"] === "object" &&
                        typeof $steps["goToDashboardProvider"].then ===
                          "function"
                      ) {
                        $steps["goToDashboardProvider"] = await $steps[
                          "goToDashboardProvider"
                        ];
                      }
                    }}
                    platform={"nextjs"}
                  >
                    <h4
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        projectcss.__wab_text,
                        sty.h4__m9Vu3
                      )}
                    >
                      {"Statistiky"}
                    </h4>
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__ybDov
                    )}
                    component={Link}
                    onClick={async event => {
                      const $steps = {};

                      $steps["goToDashboardProvider"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: `/provozovatel/${"payment"}`
                            };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToDashboardProvider"] != null &&
                        typeof $steps["goToDashboardProvider"] === "object" &&
                        typeof $steps["goToDashboardProvider"].then ===
                          "function"
                      ) {
                        $steps["goToDashboardProvider"] = await $steps[
                          "goToDashboardProvider"
                        ];
                      }
                    }}
                    platform={"nextjs"}
                  >
                    <h4
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        projectcss.__wab_text,
                        sty.h4___6Owib
                      )}
                    >
                      {"P\u0159edplatn\u00e9 a platby"}
                    </h4>
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link___36MqH
                    )}
                    component={Link}
                    onClick={async event => {
                      const $steps = {};

                      $steps["goToDashboardProvider"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: `/provozovatel/${"account"}`
                            };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToDashboardProvider"] != null &&
                        typeof $steps["goToDashboardProvider"] === "object" &&
                        typeof $steps["goToDashboardProvider"].then ===
                          "function"
                      ) {
                        $steps["goToDashboardProvider"] = await $steps[
                          "goToDashboardProvider"
                        ];
                      }
                    }}
                    platform={"nextjs"}
                  >
                    <h4
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        projectcss.__wab_text,
                        sty.h4__oT2R6
                      )}
                    >
                      {"Nastaven\u00ed \u00fa\u010dtu"}
                    </h4>
                  </PlasmicLink__>
                </section>
                <section
                  data-plasmic-name={"body"}
                  data-plasmic-override={overrides.body}
                  className={classNames(projectcss.all, sty.body)}
                >
                  {(() => {
                    try {
                      return $ctx.params.page === "activity";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })() ? (
                    <div
                      data-plasmic-name={"aktivity"}
                      data-plasmic-override={overrides.aktivity}
                      className={classNames(projectcss.all, sty.aktivity)}
                    >
                      <h4
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4__ix0Ca
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $ctx.eventsData.name;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Spr\u00e1va a nastaven\u00ed va\u0161ich aktivit";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </h4>
                      <section
                        data-plasmic-name={"divider"}
                        data-plasmic-override={overrides.divider}
                        className={classNames(projectcss.all, sty.divider)}
                      />

                      <AntdButton
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                        onClick={async () => {
                          const $steps = {};

                          $steps["goToDashboardProviderNewEvent"] = true
                            ? (() => {
                                const actionArgs = {
                                  destination: `/provozovatel/nova-aktivita`
                                };
                                return (({ destination }) => {
                                  if (
                                    typeof destination === "string" &&
                                    destination.startsWith("#")
                                  ) {
                                    document
                                      .getElementById(destination.substr(1))
                                      .scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    __nextRouter?.push(destination);
                                  }
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["goToDashboardProviderNewEvent"] != null &&
                            typeof $steps["goToDashboardProviderNewEvent"] ===
                              "object" &&
                            typeof $steps["goToDashboardProviderNewEvent"]
                              .then === "function"
                          ) {
                            $steps["goToDashboardProviderNewEvent"] =
                              await $steps["goToDashboardProviderNewEvent"];
                          }
                        }}
                      >
                        <div
                          data-plasmic-name={"text"}
                          data-plasmic-override={overrides.text}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text
                          )}
                        >
                          {"P\u0159idat novou aktivitu"}
                        </div>
                      </AntdButton>
                      <DataFetcher
                        data-plasmic-name={"httpRestApiFetcher"}
                        data-plasmic-override={overrides.httpRestApiFetcher}
                        className={classNames(
                          "__wab_instance",
                          sty.httpRestApiFetcher
                        )}
                        dataName={"myActivities"}
                        errorDisplay={null}
                        errorName={"fetchError"}
                        headers={{
                          "Content-Type": "application/json",
                          apikey:
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucmZkeHRzZHZteGhqc29xb2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MjQyNTcsImV4cCI6MjAzNzQwMDI1N30.N-1_fY2KLrl9sxmeM8z3bRc-b0ksQ0C4IWQpugCs65I"
                        }}
                        loadingDisplay={null}
                        method={"GET"}
                        noLayout={false}
                        previewSpinner={false}
                        url={(() => {
                          try {
                            return (
                              "https://rnrfdxtsdvmxhjsoqoid.supabase.co/rest/v1/events?providerID=eq." +
                              $ctx.userData.eventsLink
                            );
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                      >
                        <DataCtxReader__>
                          {$ctx => (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__xkD3
                              )}
                            >
                              <h5
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h5,
                                  projectcss.__wab_text,
                                  sty.h5__tPpfj
                                )}
                              >
                                {"Prob\u00edhaj\u00edc\u00ed aktivity"}
                              </h5>
                              <div
                                data-plasmic-name={"activeList2"}
                                data-plasmic-override={overrides.activeList2}
                                className={classNames(
                                  projectcss.all,
                                  sty.activeList2
                                )}
                                style={(() => {
                                  try {
                                    return {
                                      gap: "2vw"
                                    };
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}
                              >
                                {(_par =>
                                  !_par
                                    ? []
                                    : Array.isArray(_par)
                                    ? _par
                                    : [_par])(
                                  (() => {
                                    try {
                                      return $ctx.myActivities.filter(
                                        item => item.isActive === true
                                      );
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return [];
                                      }
                                      throw e;
                                    }
                                  })()
                                ).map((__plasmic_item_0, __plasmic_idx_0) => {
                                  const currentItem = __plasmic_item_0;
                                  const currentIndex = __plasmic_idx_0;
                                  return (
                                    <PlasmicLink__
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.a,
                                        sty.link__qVjvz
                                      )}
                                      component={Link}
                                      key={currentIndex}
                                      platform={"nextjs"}
                                    >
                                      <PlasmicImg__
                                        data-plasmic-name={"img"}
                                        data-plasmic-override={overrides.img}
                                        alt={""}
                                        className={classNames(sty.img)}
                                        displayHeight={"12vh"}
                                        displayMaxHeight={"none"}
                                        displayMaxWidth={"100%"}
                                        displayMinHeight={"0"}
                                        displayMinWidth={"0"}
                                        displayWidth={"auto"}
                                        loading={"lazy"}
                                        src={(() => {
                                          try {
                                            return currentItem.gallery[0];
                                          } catch (e) {
                                            if (
                                              e instanceof TypeError ||
                                              e?.plasmicType ===
                                                "PlasmicUndefinedDataError"
                                            ) {
                                              return undefined;
                                            }
                                            throw e;
                                          }
                                        })()}
                                      />

                                      <h5
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.h5,
                                          projectcss.__wab_text,
                                          sty.h5___0VBlf
                                        )}
                                      >
                                        <React.Fragment>
                                          {(() => {
                                            try {
                                              return currentItem.name;
                                            } catch (e) {
                                              if (
                                                e instanceof TypeError ||
                                                e?.plasmicType ===
                                                  "PlasmicUndefinedDataError"
                                              ) {
                                                return "You won't believe what happens next.";
                                              }
                                              throw e;
                                            }
                                          })()}
                                        </React.Fragment>
                                      </h5>
                                    </PlasmicLink__>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </DataCtxReader__>
                      </DataFetcher>
                    </div>
                  ) : null}
                </section>
              </div>
            </main>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "header",
    "main",
    "dashboard",
    "body",
    "aktivity",
    "divider",
    "button",
    "text",
    "httpRestApiFetcher",
    "activeList2",
    "img"
  ],
  section: [
    "section",
    "header",
    "main",
    "dashboard",
    "body",
    "aktivity",
    "divider",
    "button",
    "text",
    "httpRestApiFetcher",
    "activeList2",
    "img"
  ],
  header: ["header"],
  main: [
    "main",
    "dashboard",
    "body",
    "aktivity",
    "divider",
    "button",
    "text",
    "httpRestApiFetcher",
    "activeList2",
    "img"
  ],
  dashboard: ["dashboard"],
  body: [
    "body",
    "aktivity",
    "divider",
    "button",
    "text",
    "httpRestApiFetcher",
    "activeList2",
    "img"
  ],
  aktivity: [
    "aktivity",
    "divider",
    "button",
    "text",
    "httpRestApiFetcher",
    "activeList2",
    "img"
  ],
  divider: ["divider"],
  button: ["button", "text"],
  text: ["text"],
  httpRestApiFetcher: ["httpRestApiFetcher", "activeList2", "img"],
  activeList2: ["activeList2", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  header: typeof Header;
  main: "main";
  dashboard: "section";
  body: "section";
  aktivity: "div";
  divider: "section";
  button: typeof AntdButton;
  text: "div";
  httpRestApiFetcher: typeof DataFetcher;
  activeList2: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDashboardProvider__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDashboardProvider__VariantsArgs;
    args?: PlasmicDashboardProvider__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDashboardProvider__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDashboardProvider__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDashboardProvider__ArgProps,
          internalVariantPropNames: PlasmicDashboardProvider__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDashboardProvider__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDashboardProvider";
  } else {
    func.displayName = `PlasmicDashboardProvider.${nodeName}`;
  }
  return func;
}

export const PlasmicDashboardProvider = Object.assign(
  // Top-level PlasmicDashboardProvider renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    header: makeNodeComponent("header"),
    main: makeNodeComponent("main"),
    dashboard: makeNodeComponent("dashboard"),
    body: makeNodeComponent("body"),
    aktivity: makeNodeComponent("aktivity"),
    divider: makeNodeComponent("divider"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    activeList2: makeNodeComponent("activeList2"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicDashboardProvider
    internalVariantProps: PlasmicDashboardProvider__VariantProps,
    internalArgProps: PlasmicDashboardProvider__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Správa profilu poskytovatele",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDashboardProvider;
/* prettier-ignore-end */
