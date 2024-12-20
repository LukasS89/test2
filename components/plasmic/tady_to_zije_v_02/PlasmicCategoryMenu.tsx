// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7YxWRrh3dN23tQ7PqjX2hp
// Component: nREGSf5d9U6b

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import CategoryItem from "../../CategoryItem"; // plasmic-import: Sa03e9TtRTn9/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7YxWRrh3dN23tQ7PqjX2hp/projectcss
import sty from "./PlasmicCategoryMenu.module.css"; // plasmic-import: nREGSf5d9U6b/css

createPlasmicElementProxy;

export type PlasmicCategoryMenu__VariantMembers = {};
export type PlasmicCategoryMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicCategoryMenu__VariantsArgs;
export const PlasmicCategoryMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicCategoryMenu__ArgsType = {
  onSelectedItemChange?: (val: string) => void;
  url?: string;
  selectedSubcategory?: any;
  onSelectedSubcategoryChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicCategoryMenu__ArgsType;
export const PlasmicCategoryMenu__ArgProps = new Array<ArgPropType>(
  "onSelectedItemChange",
  "url",
  "selectedSubcategory",
  "onSelectedSubcategoryChange"
);

export type PlasmicCategoryMenu__OverridesType = {
  root?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  categoryItem?: Flex__<typeof CategoryItem>;
};

export interface DefaultCategoryMenuProps {
  onSelectedItemChange?: (val: string) => void;
  url?: string;
  selectedSubcategory?: any;
  onSelectedSubcategoryChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCategoryMenu__RenderFunc(props: {
  variants: PlasmicCategoryMenu__VariantsArgs;
  args: PlasmicCategoryMenu__ArgsType;
  overrides: PlasmicCategoryMenu__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "selectedItem",
        type: "readonly",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $queries.query.data.find(
                item => item.webURL === $props.url
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
          })(),

        onChangeProp: "onSelectedItemChange"
      },
      {
        path: "selectedSubcategory",
        type: "writable",
        variableType: "object",

        valueProp: "selectedSubcategory",
        onChangeProp: "onSelectedSubcategoryChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "f8Ug9pq9YCTH5iNERcsX8T",
        opId: "d4b90783-4754-4b9a-9075-e33c1c58077c",
        userArgs: {},
        cacheKey: `plasmic.$.${(() => {
          try {
            return "category";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.d4b90783-4754-4b9a-9075-e33c1c58077c.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
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
      {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
        (() => {
          try {
            return $queries.query.data;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
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
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            key={currentIndex}
            onClick={async event => {
              const $steps = {};

              $steps["updateSelectedSubcategory"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["selectedSubcategory"]
                      },
                      operation: 1
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, undefined);
                      return undefined;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateSelectedSubcategory"] != null &&
                typeof $steps["updateSelectedSubcategory"] === "object" &&
                typeof $steps["updateSelectedSubcategory"].then === "function"
              ) {
                $steps["updateSelectedSubcategory"] = await $steps[
                  "updateSelectedSubcategory"
                ];
              }

              $steps["goToCategory"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/${(() => {
                        try {
                          return currentItem.webURL;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}`
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
                $steps["goToCategory"] != null &&
                typeof $steps["goToCategory"] === "object" &&
                typeof $steps["goToCategory"].then === "function"
              ) {
                $steps["goToCategory"] = await $steps["goToCategory"];
              }
            }}
            platform={"nextjs"}
          >
            <CategoryItem
              data-plasmic-name={"categoryItem"}
              data-plasmic-override={overrides.categoryItem}
              className={classNames("__wab_instance", sty.categoryItem)}
              color={currentItem.color}
              currentIndex={currentIndex}
              currentItem={currentItem}
              selectedItem={$state.selectedItem}
              url={currentItem.webURL}
            />
          </PlasmicLink__>
        );
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link", "categoryItem"],
  link: ["link", "categoryItem"],
  categoryItem: ["categoryItem"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  categoryItem: typeof CategoryItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCategoryMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCategoryMenu__VariantsArgs;
    args?: PlasmicCategoryMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCategoryMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCategoryMenu__ArgsType,
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
          internalArgPropNames: PlasmicCategoryMenu__ArgProps,
          internalVariantPropNames: PlasmicCategoryMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCategoryMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCategoryMenu";
  } else {
    func.displayName = `PlasmicCategoryMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicCategoryMenu = Object.assign(
  // Top-level PlasmicCategoryMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    categoryItem: makeNodeComponent("categoryItem"),

    // Metadata about props expected for PlasmicCategoryMenu
    internalVariantProps: PlasmicCategoryMenu__VariantProps,
    internalArgProps: PlasmicCategoryMenu__ArgProps
  }
);

export default PlasmicCategoryMenu;
/* prettier-ignore-end */
