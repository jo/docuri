
declare module "docuri" {
    interface Route<T, S> {
        // parse DocURI string to object
        (str: S): T | false;

        // generate DocURI string from object
        (obj: T): S;

        // change DocURI string parts with values provided by object returning a string
        (str: S, obj: T): S;
    }

    export function route<T, S>(route: string): Route<T, S>;
    export function route<T>(route: string): Route<T, string>;
}
