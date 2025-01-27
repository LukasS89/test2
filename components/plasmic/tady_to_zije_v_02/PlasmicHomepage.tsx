// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7YxWRrh3dN23tQ7PqjX2hp
// Component: jg4y0aIywfx4

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

import { Timer } from "@plasmicpkgs/plasmic-basic-components";
import Header from "../../Header"; // plasmic-import: uZX7p1wyVbCa/component
import CategoryMenu from "../../CategoryMenu"; // plasmic-import: nREGSf5d9U6b/component
import FeatureSlider from "../../FeatureSlider"; // plasmic-import: ztikhjgYujI4/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7YxWRrh3dN23tQ7PqjX2hp/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: jg4y0aIywfx4/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {
  revealOff: "revealOff";
};
export type PlasmicHomepage__VariantsArgs = {
  revealOff?: SingleBooleanChoiceArg<"revealOff">;
};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>(
  "revealOff"
);

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  timer?: Flex__<typeof Timer>;
  header?: Flex__<typeof Header>;
  main?: Flex__<"main">;
  categoryMenu?: Flex__<typeof CategoryMenu>;
  featureSlider?: Flex__<typeof FeatureSlider>;
  h2?: Flex__<"h2">;
  h1?: Flex__<"h1">;
  h3?: Flex__<"h3">;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "reveal",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "categoryMenu.selectedItem",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "categoryMenu.selectedSubcategory",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "categoryMenu.selectedEvent",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return JSON.parse(localStorage.getItem("queryCache")).events.find(
                item => item.webUrl === $props.eventUrl
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {};
              }
              throw e;
            }
          })()
      },
      {
        path: "revealOff",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return !$state.reveal;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.revealOff
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

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
            sty.root,
            {
              [sty.rootrevealOff]: hasVariant($state, "revealOff", "revealOff")
            }
          )}
        >
          <Timer
            data-plasmic-name={"timer"}
            data-plasmic-override={overrides.timer}
            className={classNames("__wab_instance", sty.timer)}
            intervalSeconds={0.05}
            isRunning={!$state.reveal}
            onTick={async () => {
              const $steps = {};

              $steps["updateReveal"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["reveal"]
                      },
                      operation: 0,
                      value: true
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateReveal"] != null &&
                typeof $steps["updateReveal"] === "object" &&
                typeof $steps["updateReveal"].then === "function"
              ) {
                $steps["updateReveal"] = await $steps["updateReveal"];
              }
            }}
            runWhileEditing={false}
          />

          <section className={classNames(projectcss.all, sty.section__qZEyf)}>
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
              <CategoryMenu
                data-plasmic-name={"categoryMenu"}
                data-plasmic-override={overrides.categoryMenu}
                className={classNames("__wab_instance", sty.categoryMenu, {
                  [sty.categoryMenurevealOff]: hasVariant(
                    $state,
                    "revealOff",
                    "revealOff"
                  )
                })}
                onSelectedEventChange={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, [
                    "categoryMenu",
                    "selectedEvent"
                  ]).apply(null, eventArgs);

                  if (
                    eventArgs.length > 1 &&
                    eventArgs[1] &&
                    eventArgs[1]._plasmic_state_init_
                  ) {
                    return;
                  }
                }}
                onSelectedItemChange={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, [
                    "categoryMenu",
                    "selectedItem"
                  ]).apply(null, eventArgs);

                  if (
                    eventArgs.length > 1 &&
                    eventArgs[1] &&
                    eventArgs[1]._plasmic_state_init_
                  ) {
                    return;
                  }
                }}
                onSelectedSubcategoryChange={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, [
                    "categoryMenu",
                    "selectedSubcategory"
                  ]).apply(null, eventArgs);

                  if (
                    eventArgs.length > 1 &&
                    eventArgs[1] &&
                    eventArgs[1]._plasmic_state_init_
                  ) {
                    return;
                  }
                }}
                selectedEvent={generateStateValueProp($state, [
                  "categoryMenu",
                  "selectedEvent"
                ])}
                selectedItem={generateStateValueProp($state, [
                  "categoryMenu",
                  "selectedItem"
                ])}
                selectedSubcategory={generateStateValueProp($state, [
                  "categoryMenu",
                  "selectedSubcategory"
                ])}
              />

              <div
                className={classNames(projectcss.all, sty.freeBox__eeJxM, {
                  [sty.freeBoxrevealOff__eeJxMYqu7]: hasVariant(
                    $state,
                    "revealOff",
                    "revealOff"
                  )
                })}
              >
                <section
                  className={classNames(projectcss.all, sty.section__b98GO)}
                >
                  <FeatureSlider
                    data-plasmic-name={"featureSlider"}
                    data-plasmic-override={overrides.featureSlider}
                    className={classNames("__wab_instance", sty.featureSlider)}
                  />
                </section>
                <div
                  className={classNames(projectcss.all, sty.freeBox__gmnwz)}
                  style={(() => {
                    try {
                      return {
                        gap: "5vw"
                      };
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
                  <div
                    className={classNames(projectcss.all, sty.freeBox__xlwIh)}
                  >
                    <h2
                      data-plasmic-name={"h2"}
                      data-plasmic-override={overrides.h2}
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2
                      )}
                    >
                      {
                        "Objevte nejlep\u0161\u00ed\naktivity a z\u00e1\u017eitky"
                      }
                    </h2>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__iAt1)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"v Hav\u00ed\u0159ove a okol\u00ed"}
                    </h1>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__vHoqo)}
                  >
                    <h3
                      data-plasmic-name={"h3"}
                      data-plasmic-override={overrides.h3}
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.h3
                      )}
                    >
                      {"v\u0161e na jednom m\u00edst\u011b."}
                    </h3>
                  </div>
                </div>
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
    "timer",
    "header",
    "main",
    "categoryMenu",
    "featureSlider",
    "h2",
    "h1",
    "h3"
  ],
  timer: ["timer"],
  header: ["header"],
  main: ["main", "categoryMenu", "featureSlider", "h2", "h1", "h3"],
  categoryMenu: ["categoryMenu"],
  featureSlider: ["featureSlider"],
  h2: ["h2"],
  h1: ["h1"],
  h3: ["h3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  timer: typeof Timer;
  header: typeof Header;
  main: "main";
  categoryMenu: typeof CategoryMenu;
  featureSlider: typeof FeatureSlider;
  h2: "h2";
  h1: "h1";
  h3: "h3";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    timer: makeNodeComponent("timer"),
    header: makeNodeComponent("header"),
    main: makeNodeComponent("main"),
    categoryMenu: makeNodeComponent("categoryMenu"),
    featureSlider: makeNodeComponent("featureSlider"),
    h2: makeNodeComponent("h2"),
    h1: makeNodeComponent("h1"),
    h3: makeNodeComponent("h3"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
