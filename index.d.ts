export type Namespace = {
  [key: string]: any;
};

/**
 * Function that transforms an i18n key to the corresponding i18next v4 format.
 * If there is no difference, the same key is returned.
 */
export function transformKey (code: string, key: string): string

/**
 * Function that transforms an i18n namespace to the corresponding i18next v4 format.
 */
export function transformNamespace (code: string, ns: Namespace): Namespace
