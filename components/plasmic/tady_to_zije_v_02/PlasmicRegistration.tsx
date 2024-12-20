// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7YxWRrh3dN23tQ7PqjX2hp
// Component: LngTPJbjIcFc

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
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7YxWRrh3dN23tQ7PqjX2hp/projectcss
import sty from "./PlasmicRegistration.module.css"; // plasmic-import: LngTPJbjIcFc/css

createPlasmicElementProxy;

export type PlasmicRegistration__VariantMembers = {};
export type PlasmicRegistration__VariantsArgs = {};
type VariantPropType = keyof PlasmicRegistration__VariantsArgs;
export const PlasmicRegistration__VariantProps = new Array<VariantPropType>();

export type PlasmicRegistration__ArgsType = {};
type ArgPropType = keyof PlasmicRegistration__ArgsType;
export const PlasmicRegistration__ArgProps = new Array<ArgPropType>();

export type PlasmicRegistration__OverridesType = {
  root?: Flex__<"div">;
  section?: Flex__<"section">;
  header?: Flex__<typeof Header>;
  main?: Flex__<"main">;
  left?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  right?: Flex__<"div">;
  textArea?: Flex__<typeof AntdTextArea>;
  textArea2?: Flex__<typeof AntdTextArea>;
};

export interface DefaultRegistrationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRegistration__RenderFunc(props: {
  variants: PlasmicRegistration__VariantsArgs;
  args: PlasmicRegistration__ArgsType;
  overrides: PlasmicRegistration__OverridesType;
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
        path: "textArea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "email",

        onMutate: generateOnMutateForSpec("value", AntdTextArea_Helpers)
      },
      {
        path: "textArea2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "pass",

        onMutate: generateOnMutateForSpec("value", AntdTextArea_Helpers)
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
              <div className={classNames(projectcss.all, sty.freeBox__qL5D9)}>
                <div
                  data-plasmic-name={"left"}
                  data-plasmic-override={overrides.left}
                  className={classNames(projectcss.all, sty.left)}
                >
                  <PlasmicImg__
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"92vh"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"eager"}
                    src={
                      "https://rnrfdxtsdvmxhjsoqoid.supabase.co/storage/v1/object/public/assets/registration.webp"
                    }
                  />
                </div>
                <div
                  data-plasmic-name={"right"}
                  data-plasmic-override={overrides.right}
                  className={classNames(projectcss.all, sty.right)}
                  style={(() => {
                    try {
                      return {
                        gap: "3vh"
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
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.textArea),
                      onChange: generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["textArea", "value"],
                        AntdTextArea_Helpers
                      ),
                      value: generateStateValueProp($state, [
                        "textArea",
                        "value"
                      ])
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "textArea.value"
                        }
                      ],
                      [],
                      AntdTextArea_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <AntdTextArea
                        data-plasmic-name={"textArea"}
                        data-plasmic-override={overrides.textArea}
                        {...child$Props}
                      />
                    );
                  })()}
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.textArea2),
                      onChange: generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["textArea2", "value"],
                        AntdTextArea_Helpers
                      ),
                      value: generateStateValueProp($state, [
                        "textArea2",
                        "value"
                      ])
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "textArea2.value"
                        }
                      ],
                      [],
                      AntdTextArea_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <AntdTextArea
                        data-plasmic-name={"textArea2"}
                        data-plasmic-override={overrides.textArea2}
                        {...child$Props}
                      />
                    );
                  })()}
                  <div
                    className={classNames(projectcss.all, sty.freeBox___4GVs1)}
                    onClick={async event => {
                      const $steps = {};

                      $steps["runActionOnLogin"] = true
                        ? (() => {
                            const actionArgs = {};
                            return (({ tplRef, action, args }) => {
                              return $refs?.[tplRef]?.[action]?.(
                                ...(args ?? [])
                              );
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["runActionOnLogin"] != null &&
                        typeof $steps["runActionOnLogin"] === "object" &&
                        typeof $steps["runActionOnLogin"].then === "function"
                      ) {
                        $steps["runActionOnLogin"] = await $steps[
                          "runActionOnLogin"
                        ];
                      }

                      $steps["goToHomepage"] = true
                        ? (() => {
                            const actionArgs = { destination: `/` };
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
                        $steps["goToHomepage"] != null &&
                        typeof $steps["goToHomepage"] === "object" &&
                        typeof $steps["goToHomepage"].then === "function"
                      ) {
                        $steps["goToHomepage"] = await $steps["goToHomepage"];
                      }
                    }}
                  />
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
    "section",
    "header",
    "main",
    "left",
    "img",
    "right",
    "textArea",
    "textArea2"
  ],
  section: [
    "section",
    "header",
    "main",
    "left",
    "img",
    "right",
    "textArea",
    "textArea2"
  ],
  header: ["header"],
  main: ["main", "left", "img", "right", "textArea", "textArea2"],
  left: ["left", "img"],
  img: ["img"],
  right: ["right", "textArea", "textArea2"],
  textArea: ["textArea"],
  textArea2: ["textArea2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  header: typeof Header;
  main: "main";
  left: "div";
  img: typeof PlasmicImg__;
  right: "div";
  textArea: typeof AntdTextArea;
  textArea2: typeof AntdTextArea;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRegistration__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRegistration__VariantsArgs;
    args?: PlasmicRegistration__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRegistration__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRegistration__ArgsType,
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
          internalArgPropNames: PlasmicRegistration__ArgProps,
          internalVariantPropNames: PlasmicRegistration__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRegistration__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRegistration";
  } else {
    func.displayName = `PlasmicRegistration.${nodeName}`;
  }
  return func;
}

export const PlasmicRegistration = Object.assign(
  // Top-level PlasmicRegistration renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    header: makeNodeComponent("header"),
    main: makeNodeComponent("main"),
    left: makeNodeComponent("left"),
    img: makeNodeComponent("img"),
    right: makeNodeComponent("right"),
    textArea: makeNodeComponent("textArea"),
    textArea2: makeNodeComponent("textArea2"),

    // Metadata about props expected for PlasmicRegistration
    internalVariantProps: PlasmicRegistration__VariantProps,
    internalArgProps: PlasmicRegistration__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicRegistration;
/* prettier-ignore-end */
