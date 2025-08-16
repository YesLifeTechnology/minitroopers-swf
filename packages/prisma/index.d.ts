
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ipAddressUser
 * 
 */
export type ipAddressUser = $Result.DefaultSelection<Prisma.$ipAddressUserPayload>
/**
 * Model HistoryUser
 * 
 */
export type HistoryUser = $Result.DefaultSelection<Prisma.$HistoryUserPayload>
/**
 * Model Trooper
 * 
 */
export type Trooper = $Result.DefaultSelection<Prisma.$TrooperPayload>
/**
 * Model TrooperDay
 * 
 */
export type TrooperDay = $Result.DefaultSelection<Prisma.$TrooperDayPayload>
/**
 * Model Fight
 * 
 */
export type Fight = $Result.DefaultSelection<Prisma.$FightPayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Lang: {
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es',
  ru: 'ru',
  pt: 'pt'
};

export type Lang = (typeof Lang)[keyof typeof Lang]


export const HistoryType: {
  creation: 'creation',
  war: 'war',
  trooperAdd: 'trooperAdd',
  trooperUpdate: 'trooperUpdate',
  trooperAvailable: 'trooperAvailable',
  recruit: 'recruit'
};

export type HistoryType = (typeof HistoryType)[keyof typeof HistoryType]


export const FightResult: {
  win: 'win',
  lose: 'lose'
};

export type FightResult = (typeof FightResult)[keyof typeof FightResult]


export const MissionType: {
  exterminate: 'exterminate',
  infiltrate: 'infiltrate',
  epic: 'epic'
};

export type MissionType = (typeof MissionType)[keyof typeof MissionType]

}

export type Lang = $Enums.Lang

export const Lang: typeof $Enums.Lang

export type HistoryType = $Enums.HistoryType

export const HistoryType: typeof $Enums.HistoryType

export type FightResult = $Enums.FightResult

export const FightResult: typeof $Enums.FightResult

export type MissionType = $Enums.MissionType

export const MissionType: typeof $Enums.MissionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ipAddressUser`: Exposes CRUD operations for the **ipAddressUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IpAddressUsers
    * const ipAddressUsers = await prisma.ipAddressUser.findMany()
    * ```
    */
  get ipAddressUser(): Prisma.ipAddressUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historyUser`: Exposes CRUD operations for the **HistoryUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoryUsers
    * const historyUsers = await prisma.historyUser.findMany()
    * ```
    */
  get historyUser(): Prisma.HistoryUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trooper`: Exposes CRUD operations for the **Trooper** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Troopers
    * const troopers = await prisma.trooper.findMany()
    * ```
    */
  get trooper(): Prisma.TrooperDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trooperDay`: Exposes CRUD operations for the **TrooperDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrooperDays
    * const trooperDays = await prisma.trooperDay.findMany()
    * ```
    */
  get trooperDay(): Prisma.TrooperDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fight`: Exposes CRUD operations for the **Fight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fights
    * const fights = await prisma.fight.findMany()
    * ```
    */
  get fight(): Prisma.FightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ipAddressUser: 'ipAddressUser',
    HistoryUser: 'HistoryUser',
    Trooper: 'Trooper',
    TrooperDay: 'TrooperDay',
    Fight: 'Fight',
    Mission: 'Mission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "ipAddressUser" | "historyUser" | "trooper" | "trooperDay" | "fight" | "mission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ipAddressUser: {
        payload: Prisma.$ipAddressUserPayload<ExtArgs>
        fields: Prisma.ipAddressUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ipAddressUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ipAddressUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload>
          }
          findFirst: {
            args: Prisma.ipAddressUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ipAddressUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload>
          }
          findMany: {
            args: Prisma.ipAddressUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload>[]
          }
          create: {
            args: Prisma.ipAddressUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload>
          }
          createMany: {
            args: Prisma.ipAddressUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ipAddressUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload>[]
          }
          delete: {
            args: Prisma.ipAddressUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload>
          }
          update: {
            args: Prisma.ipAddressUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload>
          }
          deleteMany: {
            args: Prisma.ipAddressUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ipAddressUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ipAddressUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload>[]
          }
          upsert: {
            args: Prisma.ipAddressUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ipAddressUserPayload>
          }
          aggregate: {
            args: Prisma.IpAddressUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIpAddressUser>
          }
          groupBy: {
            args: Prisma.ipAddressUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<IpAddressUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ipAddressUserCountArgs<ExtArgs>
            result: $Utils.Optional<IpAddressUserCountAggregateOutputType> | number
          }
        }
      }
      HistoryUser: {
        payload: Prisma.$HistoryUserPayload<ExtArgs>
        fields: Prisma.HistoryUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload>
          }
          findFirst: {
            args: Prisma.HistoryUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload>
          }
          findMany: {
            args: Prisma.HistoryUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload>[]
          }
          create: {
            args: Prisma.HistoryUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload>
          }
          createMany: {
            args: Prisma.HistoryUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload>[]
          }
          delete: {
            args: Prisma.HistoryUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload>
          }
          update: {
            args: Prisma.HistoryUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload>
          }
          deleteMany: {
            args: Prisma.HistoryUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload>[]
          }
          upsert: {
            args: Prisma.HistoryUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryUserPayload>
          }
          aggregate: {
            args: Prisma.HistoryUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoryUser>
          }
          groupBy: {
            args: Prisma.HistoryUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryUserCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryUserCountAggregateOutputType> | number
          }
        }
      }
      Trooper: {
        payload: Prisma.$TrooperPayload<ExtArgs>
        fields: Prisma.TrooperFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrooperFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrooperFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload>
          }
          findFirst: {
            args: Prisma.TrooperFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrooperFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload>
          }
          findMany: {
            args: Prisma.TrooperFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload>[]
          }
          create: {
            args: Prisma.TrooperCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload>
          }
          createMany: {
            args: Prisma.TrooperCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrooperCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload>[]
          }
          delete: {
            args: Prisma.TrooperDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload>
          }
          update: {
            args: Prisma.TrooperUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload>
          }
          deleteMany: {
            args: Prisma.TrooperDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrooperUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrooperUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload>[]
          }
          upsert: {
            args: Prisma.TrooperUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperPayload>
          }
          aggregate: {
            args: Prisma.TrooperAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrooper>
          }
          groupBy: {
            args: Prisma.TrooperGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrooperGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrooperCountArgs<ExtArgs>
            result: $Utils.Optional<TrooperCountAggregateOutputType> | number
          }
        }
      }
      TrooperDay: {
        payload: Prisma.$TrooperDayPayload<ExtArgs>
        fields: Prisma.TrooperDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrooperDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrooperDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload>
          }
          findFirst: {
            args: Prisma.TrooperDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrooperDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload>
          }
          findMany: {
            args: Prisma.TrooperDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload>[]
          }
          create: {
            args: Prisma.TrooperDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload>
          }
          createMany: {
            args: Prisma.TrooperDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrooperDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload>[]
          }
          delete: {
            args: Prisma.TrooperDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload>
          }
          update: {
            args: Prisma.TrooperDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload>
          }
          deleteMany: {
            args: Prisma.TrooperDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrooperDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrooperDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload>[]
          }
          upsert: {
            args: Prisma.TrooperDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrooperDayPayload>
          }
          aggregate: {
            args: Prisma.TrooperDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrooperDay>
          }
          groupBy: {
            args: Prisma.TrooperDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrooperDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrooperDayCountArgs<ExtArgs>
            result: $Utils.Optional<TrooperDayCountAggregateOutputType> | number
          }
        }
      }
      Fight: {
        payload: Prisma.$FightPayload<ExtArgs>
        fields: Prisma.FightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          findFirst: {
            args: Prisma.FightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          findMany: {
            args: Prisma.FightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>[]
          }
          create: {
            args: Prisma.FightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          createMany: {
            args: Prisma.FightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>[]
          }
          delete: {
            args: Prisma.FightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          update: {
            args: Prisma.FightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          deleteMany: {
            args: Prisma.FightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>[]
          }
          upsert: {
            args: Prisma.FightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FightPayload>
          }
          aggregate: {
            args: Prisma.FightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFight>
          }
          groupBy: {
            args: Prisma.FightGroupByArgs<ExtArgs>
            result: $Utils.Optional<FightGroupByOutputType>[]
          }
          count: {
            args: Prisma.FightCountArgs<ExtArgs>
            result: $Utils.Optional<FightCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    ipAddressUser?: ipAddressUserOmit
    historyUser?: HistoryUserOmit
    trooper?: TrooperOmit
    trooperDay?: TrooperDayOmit
    fight?: FightOmit
    mission?: MissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sponsoredUsers: number
    troopers: number
    history: number
    ipAddressUser: number
    fights: number
    missions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sponsoredUsers?: boolean | UserCountOutputTypeCountSponsoredUsersArgs
    troopers?: boolean | UserCountOutputTypeCountTroopersArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
    ipAddressUser?: boolean | UserCountOutputTypeCountIpAddressUserArgs
    fights?: boolean | UserCountOutputTypeCountFightsArgs
    missions?: boolean | UserCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSponsoredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTroopersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrooperWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIpAddressUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ipAddressUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    gold: number | null
    power: number | null
    prefix: number | null
    color: number | null
    referralGold: number | null
    ratsCount: number | null
  }

  export type UserSumAggregateOutputType = {
    gold: number | null
    power: number | null
    prefix: number | null
    color: number | null
    referralGold: number | null
    ratsCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    lang: $Enums.Lang | null
    name: string | null
    createdAt: Date | null
    lastConnexion: Date | null
    admin: boolean | null
    connexionToken: string | null
    gold: number | null
    power: number | null
    armyName: string | null
    armyUrl: string | null
    prefix: number | null
    color: number | null
    sponsoredById: string | null
    referralGold: number | null
    ratsCount: number | null
    infiltrationOpponentArmy: string | null
    infiltrationOpponentDate: Date | null
    infiltrationUnlockAt: Date | null
    exterminationUnlockAt: Date | null
    epicUnlockAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    lang: $Enums.Lang | null
    name: string | null
    createdAt: Date | null
    lastConnexion: Date | null
    admin: boolean | null
    connexionToken: string | null
    gold: number | null
    power: number | null
    armyName: string | null
    armyUrl: string | null
    prefix: number | null
    color: number | null
    sponsoredById: string | null
    referralGold: number | null
    ratsCount: number | null
    infiltrationOpponentArmy: string | null
    infiltrationOpponentDate: Date | null
    infiltrationUnlockAt: Date | null
    exterminationUnlockAt: Date | null
    epicUnlockAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    lang: number
    name: number
    createdAt: number
    lastConnexion: number
    admin: number
    connexionToken: number
    gold: number
    power: number
    armyName: number
    armyUrl: number
    prefix: number
    color: number
    sponsoredById: number
    referralGold: number
    ratsCount: number
    infiltrationOpponentArmy: number
    infiltrationOpponentDate: number
    infiltrationUnlockAt: number
    exterminationUnlockAt: number
    epicUnlockAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    gold?: true
    power?: true
    prefix?: true
    color?: true
    referralGold?: true
    ratsCount?: true
  }

  export type UserSumAggregateInputType = {
    gold?: true
    power?: true
    prefix?: true
    color?: true
    referralGold?: true
    ratsCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    lang?: true
    name?: true
    createdAt?: true
    lastConnexion?: true
    admin?: true
    connexionToken?: true
    gold?: true
    power?: true
    armyName?: true
    armyUrl?: true
    prefix?: true
    color?: true
    sponsoredById?: true
    referralGold?: true
    ratsCount?: true
    infiltrationOpponentArmy?: true
    infiltrationOpponentDate?: true
    infiltrationUnlockAt?: true
    exterminationUnlockAt?: true
    epicUnlockAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    lang?: true
    name?: true
    createdAt?: true
    lastConnexion?: true
    admin?: true
    connexionToken?: true
    gold?: true
    power?: true
    armyName?: true
    armyUrl?: true
    prefix?: true
    color?: true
    sponsoredById?: true
    referralGold?: true
    ratsCount?: true
    infiltrationOpponentArmy?: true
    infiltrationOpponentDate?: true
    infiltrationUnlockAt?: true
    exterminationUnlockAt?: true
    epicUnlockAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    lang?: true
    name?: true
    createdAt?: true
    lastConnexion?: true
    admin?: true
    connexionToken?: true
    gold?: true
    power?: true
    armyName?: true
    armyUrl?: true
    prefix?: true
    color?: true
    sponsoredById?: true
    referralGold?: true
    ratsCount?: true
    infiltrationOpponentArmy?: true
    infiltrationOpponentDate?: true
    infiltrationUnlockAt?: true
    exterminationUnlockAt?: true
    epicUnlockAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    lang: $Enums.Lang
    name: string
    createdAt: Date
    lastConnexion: Date
    admin: boolean
    connexionToken: string
    gold: number
    power: number
    armyName: string
    armyUrl: string
    prefix: number
    color: number
    sponsoredById: string | null
    referralGold: number
    ratsCount: number
    infiltrationOpponentArmy: string | null
    infiltrationOpponentDate: Date | null
    infiltrationUnlockAt: Date | null
    exterminationUnlockAt: Date | null
    epicUnlockAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    name?: boolean
    createdAt?: boolean
    lastConnexion?: boolean
    admin?: boolean
    connexionToken?: boolean
    gold?: boolean
    power?: boolean
    armyName?: boolean
    armyUrl?: boolean
    prefix?: boolean
    color?: boolean
    sponsoredById?: boolean
    referralGold?: boolean
    ratsCount?: boolean
    infiltrationOpponentArmy?: boolean
    infiltrationOpponentDate?: boolean
    infiltrationUnlockAt?: boolean
    exterminationUnlockAt?: boolean
    epicUnlockAt?: boolean
    sponsoredBy?: boolean | User$sponsoredByArgs<ExtArgs>
    sponsoredUsers?: boolean | User$sponsoredUsersArgs<ExtArgs>
    troopers?: boolean | User$troopersArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    ipAddressUser?: boolean | User$ipAddressUserArgs<ExtArgs>
    fights?: boolean | User$fightsArgs<ExtArgs>
    missions?: boolean | User$missionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    name?: boolean
    createdAt?: boolean
    lastConnexion?: boolean
    admin?: boolean
    connexionToken?: boolean
    gold?: boolean
    power?: boolean
    armyName?: boolean
    armyUrl?: boolean
    prefix?: boolean
    color?: boolean
    sponsoredById?: boolean
    referralGold?: boolean
    ratsCount?: boolean
    infiltrationOpponentArmy?: boolean
    infiltrationOpponentDate?: boolean
    infiltrationUnlockAt?: boolean
    exterminationUnlockAt?: boolean
    epicUnlockAt?: boolean
    sponsoredBy?: boolean | User$sponsoredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lang?: boolean
    name?: boolean
    createdAt?: boolean
    lastConnexion?: boolean
    admin?: boolean
    connexionToken?: boolean
    gold?: boolean
    power?: boolean
    armyName?: boolean
    armyUrl?: boolean
    prefix?: boolean
    color?: boolean
    sponsoredById?: boolean
    referralGold?: boolean
    ratsCount?: boolean
    infiltrationOpponentArmy?: boolean
    infiltrationOpponentDate?: boolean
    infiltrationUnlockAt?: boolean
    exterminationUnlockAt?: boolean
    epicUnlockAt?: boolean
    sponsoredBy?: boolean | User$sponsoredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    lang?: boolean
    name?: boolean
    createdAt?: boolean
    lastConnexion?: boolean
    admin?: boolean
    connexionToken?: boolean
    gold?: boolean
    power?: boolean
    armyName?: boolean
    armyUrl?: boolean
    prefix?: boolean
    color?: boolean
    sponsoredById?: boolean
    referralGold?: boolean
    ratsCount?: boolean
    infiltrationOpponentArmy?: boolean
    infiltrationOpponentDate?: boolean
    infiltrationUnlockAt?: boolean
    exterminationUnlockAt?: boolean
    epicUnlockAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lang" | "name" | "createdAt" | "lastConnexion" | "admin" | "connexionToken" | "gold" | "power" | "armyName" | "armyUrl" | "prefix" | "color" | "sponsoredById" | "referralGold" | "ratsCount" | "infiltrationOpponentArmy" | "infiltrationOpponentDate" | "infiltrationUnlockAt" | "exterminationUnlockAt" | "epicUnlockAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sponsoredBy?: boolean | User$sponsoredByArgs<ExtArgs>
    sponsoredUsers?: boolean | User$sponsoredUsersArgs<ExtArgs>
    troopers?: boolean | User$troopersArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    ipAddressUser?: boolean | User$ipAddressUserArgs<ExtArgs>
    fights?: boolean | User$fightsArgs<ExtArgs>
    missions?: boolean | User$missionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sponsoredBy?: boolean | User$sponsoredByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sponsoredBy?: boolean | User$sponsoredByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sponsoredBy: Prisma.$UserPayload<ExtArgs> | null
      sponsoredUsers: Prisma.$UserPayload<ExtArgs>[]
      troopers: Prisma.$TrooperPayload<ExtArgs>[]
      history: Prisma.$HistoryUserPayload<ExtArgs>[]
      ipAddressUser: Prisma.$ipAddressUserPayload<ExtArgs>[]
      fights: Prisma.$FightPayload<ExtArgs>[]
      missions: Prisma.$MissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lang: $Enums.Lang
      name: string
      createdAt: Date
      lastConnexion: Date
      admin: boolean
      connexionToken: string
      gold: number
      power: number
      armyName: string
      armyUrl: string
      prefix: number
      color: number
      sponsoredById: string | null
      referralGold: number
      ratsCount: number
      infiltrationOpponentArmy: string | null
      infiltrationOpponentDate: Date | null
      infiltrationUnlockAt: Date | null
      exterminationUnlockAt: Date | null
      epicUnlockAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sponsoredBy<T extends User$sponsoredByArgs<ExtArgs> = {}>(args?: Subset<T, User$sponsoredByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sponsoredUsers<T extends User$sponsoredUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$sponsoredUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    troopers<T extends User$troopersArgs<ExtArgs> = {}>(args?: Subset<T, User$troopersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ipAddressUser<T extends User$ipAddressUserArgs<ExtArgs> = {}>(args?: Subset<T, User$ipAddressUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fights<T extends User$fightsArgs<ExtArgs> = {}>(args?: Subset<T, User$fightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    missions<T extends User$missionsArgs<ExtArgs> = {}>(args?: Subset<T, User$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly lang: FieldRef<"User", 'Lang'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastConnexion: FieldRef<"User", 'DateTime'>
    readonly admin: FieldRef<"User", 'Boolean'>
    readonly connexionToken: FieldRef<"User", 'String'>
    readonly gold: FieldRef<"User", 'Int'>
    readonly power: FieldRef<"User", 'Int'>
    readonly armyName: FieldRef<"User", 'String'>
    readonly armyUrl: FieldRef<"User", 'String'>
    readonly prefix: FieldRef<"User", 'Int'>
    readonly color: FieldRef<"User", 'Int'>
    readonly sponsoredById: FieldRef<"User", 'String'>
    readonly referralGold: FieldRef<"User", 'Int'>
    readonly ratsCount: FieldRef<"User", 'Int'>
    readonly infiltrationOpponentArmy: FieldRef<"User", 'String'>
    readonly infiltrationOpponentDate: FieldRef<"User", 'DateTime'>
    readonly infiltrationUnlockAt: FieldRef<"User", 'DateTime'>
    readonly exterminationUnlockAt: FieldRef<"User", 'DateTime'>
    readonly epicUnlockAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sponsoredBy
   */
  export type User$sponsoredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.sponsoredUsers
   */
  export type User$sponsoredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.troopers
   */
  export type User$troopersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
    where?: TrooperWhereInput
    orderBy?: TrooperOrderByWithRelationInput | TrooperOrderByWithRelationInput[]
    cursor?: TrooperWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrooperScalarFieldEnum | TrooperScalarFieldEnum[]
  }

  /**
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
    where?: HistoryUserWhereInput
    orderBy?: HistoryUserOrderByWithRelationInput | HistoryUserOrderByWithRelationInput[]
    cursor?: HistoryUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryUserScalarFieldEnum | HistoryUserScalarFieldEnum[]
  }

  /**
   * User.ipAddressUser
   */
  export type User$ipAddressUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
    where?: ipAddressUserWhereInput
    orderBy?: ipAddressUserOrderByWithRelationInput | ipAddressUserOrderByWithRelationInput[]
    cursor?: ipAddressUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IpAddressUserScalarFieldEnum | IpAddressUserScalarFieldEnum[]
  }

  /**
   * User.fights
   */
  export type User$fightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    where?: FightWhereInput
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    cursor?: FightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FightScalarFieldEnum | FightScalarFieldEnum[]
  }

  /**
   * User.missions
   */
  export type User$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ipAddressUser
   */

  export type AggregateIpAddressUser = {
    _count: IpAddressUserCountAggregateOutputType | null
    _min: IpAddressUserMinAggregateOutputType | null
    _max: IpAddressUserMaxAggregateOutputType | null
  }

  export type IpAddressUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ip: string | null
  }

  export type IpAddressUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ip: string | null
  }

  export type IpAddressUserCountAggregateOutputType = {
    id: number
    userId: number
    ip: number
    _all: number
  }


  export type IpAddressUserMinAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
  }

  export type IpAddressUserMaxAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
  }

  export type IpAddressUserCountAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    _all?: true
  }

  export type IpAddressUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ipAddressUser to aggregate.
     */
    where?: ipAddressUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ipAddressUsers to fetch.
     */
    orderBy?: ipAddressUserOrderByWithRelationInput | ipAddressUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ipAddressUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ipAddressUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ipAddressUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ipAddressUsers
    **/
    _count?: true | IpAddressUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IpAddressUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IpAddressUserMaxAggregateInputType
  }

  export type GetIpAddressUserAggregateType<T extends IpAddressUserAggregateArgs> = {
        [P in keyof T & keyof AggregateIpAddressUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIpAddressUser[P]>
      : GetScalarType<T[P], AggregateIpAddressUser[P]>
  }




  export type ipAddressUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ipAddressUserWhereInput
    orderBy?: ipAddressUserOrderByWithAggregationInput | ipAddressUserOrderByWithAggregationInput[]
    by: IpAddressUserScalarFieldEnum[] | IpAddressUserScalarFieldEnum
    having?: ipAddressUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IpAddressUserCountAggregateInputType | true
    _min?: IpAddressUserMinAggregateInputType
    _max?: IpAddressUserMaxAggregateInputType
  }

  export type IpAddressUserGroupByOutputType = {
    id: string
    userId: string
    ip: string
    _count: IpAddressUserCountAggregateOutputType | null
    _min: IpAddressUserMinAggregateOutputType | null
    _max: IpAddressUserMaxAggregateOutputType | null
  }

  type GetIpAddressUserGroupByPayload<T extends ipAddressUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IpAddressUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IpAddressUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IpAddressUserGroupByOutputType[P]>
            : GetScalarType<T[P], IpAddressUserGroupByOutputType[P]>
        }
      >
    >


  export type ipAddressUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ipAddressUser"]>

  export type ipAddressUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ipAddressUser"]>

  export type ipAddressUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ipAddressUser"]>

  export type ipAddressUserSelectScalar = {
    id?: boolean
    userId?: boolean
    ip?: boolean
  }

  export type ipAddressUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ip", ExtArgs["result"]["ipAddressUser"]>
  export type ipAddressUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ipAddressUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ipAddressUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ipAddressUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ipAddressUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ip: string
    }, ExtArgs["result"]["ipAddressUser"]>
    composites: {}
  }

  type ipAddressUserGetPayload<S extends boolean | null | undefined | ipAddressUserDefaultArgs> = $Result.GetResult<Prisma.$ipAddressUserPayload, S>

  type ipAddressUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ipAddressUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: IpAddressUserCountAggregateInputType | true
    }

  export interface ipAddressUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ipAddressUser'], meta: { name: 'ipAddressUser' } }
    /**
     * Find zero or one IpAddressUser that matches the filter.
     * @param {ipAddressUserFindUniqueArgs} args - Arguments to find a IpAddressUser
     * @example
     * // Get one IpAddressUser
     * const ipAddressUser = await prisma.ipAddressUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ipAddressUserFindUniqueArgs>(args: SelectSubset<T, ipAddressUserFindUniqueArgs<ExtArgs>>): Prisma__ipAddressUserClient<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IpAddressUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ipAddressUserFindUniqueOrThrowArgs} args - Arguments to find a IpAddressUser
     * @example
     * // Get one IpAddressUser
     * const ipAddressUser = await prisma.ipAddressUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ipAddressUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ipAddressUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ipAddressUserClient<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IpAddressUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ipAddressUserFindFirstArgs} args - Arguments to find a IpAddressUser
     * @example
     * // Get one IpAddressUser
     * const ipAddressUser = await prisma.ipAddressUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ipAddressUserFindFirstArgs>(args?: SelectSubset<T, ipAddressUserFindFirstArgs<ExtArgs>>): Prisma__ipAddressUserClient<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IpAddressUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ipAddressUserFindFirstOrThrowArgs} args - Arguments to find a IpAddressUser
     * @example
     * // Get one IpAddressUser
     * const ipAddressUser = await prisma.ipAddressUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ipAddressUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ipAddressUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ipAddressUserClient<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IpAddressUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ipAddressUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IpAddressUsers
     * const ipAddressUsers = await prisma.ipAddressUser.findMany()
     * 
     * // Get first 10 IpAddressUsers
     * const ipAddressUsers = await prisma.ipAddressUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ipAddressUserWithIdOnly = await prisma.ipAddressUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ipAddressUserFindManyArgs>(args?: SelectSubset<T, ipAddressUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IpAddressUser.
     * @param {ipAddressUserCreateArgs} args - Arguments to create a IpAddressUser.
     * @example
     * // Create one IpAddressUser
     * const IpAddressUser = await prisma.ipAddressUser.create({
     *   data: {
     *     // ... data to create a IpAddressUser
     *   }
     * })
     * 
     */
    create<T extends ipAddressUserCreateArgs>(args: SelectSubset<T, ipAddressUserCreateArgs<ExtArgs>>): Prisma__ipAddressUserClient<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IpAddressUsers.
     * @param {ipAddressUserCreateManyArgs} args - Arguments to create many IpAddressUsers.
     * @example
     * // Create many IpAddressUsers
     * const ipAddressUser = await prisma.ipAddressUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ipAddressUserCreateManyArgs>(args?: SelectSubset<T, ipAddressUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IpAddressUsers and returns the data saved in the database.
     * @param {ipAddressUserCreateManyAndReturnArgs} args - Arguments to create many IpAddressUsers.
     * @example
     * // Create many IpAddressUsers
     * const ipAddressUser = await prisma.ipAddressUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IpAddressUsers and only return the `id`
     * const ipAddressUserWithIdOnly = await prisma.ipAddressUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ipAddressUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ipAddressUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IpAddressUser.
     * @param {ipAddressUserDeleteArgs} args - Arguments to delete one IpAddressUser.
     * @example
     * // Delete one IpAddressUser
     * const IpAddressUser = await prisma.ipAddressUser.delete({
     *   where: {
     *     // ... filter to delete one IpAddressUser
     *   }
     * })
     * 
     */
    delete<T extends ipAddressUserDeleteArgs>(args: SelectSubset<T, ipAddressUserDeleteArgs<ExtArgs>>): Prisma__ipAddressUserClient<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IpAddressUser.
     * @param {ipAddressUserUpdateArgs} args - Arguments to update one IpAddressUser.
     * @example
     * // Update one IpAddressUser
     * const ipAddressUser = await prisma.ipAddressUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ipAddressUserUpdateArgs>(args: SelectSubset<T, ipAddressUserUpdateArgs<ExtArgs>>): Prisma__ipAddressUserClient<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IpAddressUsers.
     * @param {ipAddressUserDeleteManyArgs} args - Arguments to filter IpAddressUsers to delete.
     * @example
     * // Delete a few IpAddressUsers
     * const { count } = await prisma.ipAddressUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ipAddressUserDeleteManyArgs>(args?: SelectSubset<T, ipAddressUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IpAddressUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ipAddressUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IpAddressUsers
     * const ipAddressUser = await prisma.ipAddressUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ipAddressUserUpdateManyArgs>(args: SelectSubset<T, ipAddressUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IpAddressUsers and returns the data updated in the database.
     * @param {ipAddressUserUpdateManyAndReturnArgs} args - Arguments to update many IpAddressUsers.
     * @example
     * // Update many IpAddressUsers
     * const ipAddressUser = await prisma.ipAddressUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IpAddressUsers and only return the `id`
     * const ipAddressUserWithIdOnly = await prisma.ipAddressUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ipAddressUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ipAddressUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IpAddressUser.
     * @param {ipAddressUserUpsertArgs} args - Arguments to update or create a IpAddressUser.
     * @example
     * // Update or create a IpAddressUser
     * const ipAddressUser = await prisma.ipAddressUser.upsert({
     *   create: {
     *     // ... data to create a IpAddressUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IpAddressUser we want to update
     *   }
     * })
     */
    upsert<T extends ipAddressUserUpsertArgs>(args: SelectSubset<T, ipAddressUserUpsertArgs<ExtArgs>>): Prisma__ipAddressUserClient<$Result.GetResult<Prisma.$ipAddressUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IpAddressUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ipAddressUserCountArgs} args - Arguments to filter IpAddressUsers to count.
     * @example
     * // Count the number of IpAddressUsers
     * const count = await prisma.ipAddressUser.count({
     *   where: {
     *     // ... the filter for the IpAddressUsers we want to count
     *   }
     * })
    **/
    count<T extends ipAddressUserCountArgs>(
      args?: Subset<T, ipAddressUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IpAddressUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IpAddressUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpAddressUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IpAddressUserAggregateArgs>(args: Subset<T, IpAddressUserAggregateArgs>): Prisma.PrismaPromise<GetIpAddressUserAggregateType<T>>

    /**
     * Group by IpAddressUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ipAddressUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ipAddressUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ipAddressUserGroupByArgs['orderBy'] }
        : { orderBy?: ipAddressUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ipAddressUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIpAddressUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ipAddressUser model
   */
  readonly fields: ipAddressUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ipAddressUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ipAddressUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ipAddressUser model
   */
  interface ipAddressUserFieldRefs {
    readonly id: FieldRef<"ipAddressUser", 'String'>
    readonly userId: FieldRef<"ipAddressUser", 'String'>
    readonly ip: FieldRef<"ipAddressUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ipAddressUser findUnique
   */
  export type ipAddressUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
    /**
     * Filter, which ipAddressUser to fetch.
     */
    where: ipAddressUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ipAddressUser findUniqueOrThrow
   */
  export type ipAddressUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
    /**
     * Filter, which ipAddressUser to fetch.
     */
    where: ipAddressUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ipAddressUser findFirst
   */
  export type ipAddressUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
    /**
     * Filter, which ipAddressUser to fetch.
     */
    where?: ipAddressUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ipAddressUsers to fetch.
     */
    orderBy?: ipAddressUserOrderByWithRelationInput | ipAddressUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ipAddressUsers.
     */
    cursor?: ipAddressUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ipAddressUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ipAddressUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ipAddressUsers.
     */
    distinct?: IpAddressUserScalarFieldEnum | IpAddressUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ipAddressUser findFirstOrThrow
   */
  export type ipAddressUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
    /**
     * Filter, which ipAddressUser to fetch.
     */
    where?: ipAddressUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ipAddressUsers to fetch.
     */
    orderBy?: ipAddressUserOrderByWithRelationInput | ipAddressUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ipAddressUsers.
     */
    cursor?: ipAddressUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ipAddressUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ipAddressUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ipAddressUsers.
     */
    distinct?: IpAddressUserScalarFieldEnum | IpAddressUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ipAddressUser findMany
   */
  export type ipAddressUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
    /**
     * Filter, which ipAddressUsers to fetch.
     */
    where?: ipAddressUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ipAddressUsers to fetch.
     */
    orderBy?: ipAddressUserOrderByWithRelationInput | ipAddressUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ipAddressUsers.
     */
    cursor?: ipAddressUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ipAddressUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ipAddressUsers.
     */
    skip?: number
    distinct?: IpAddressUserScalarFieldEnum | IpAddressUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ipAddressUser create
   */
  export type ipAddressUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ipAddressUser.
     */
    data: XOR<ipAddressUserCreateInput, ipAddressUserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ipAddressUser createMany
   */
  export type ipAddressUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ipAddressUsers.
     */
    data: ipAddressUserCreateManyInput | ipAddressUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ipAddressUser createManyAndReturn
   */
  export type ipAddressUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * The data used to create many ipAddressUsers.
     */
    data: ipAddressUserCreateManyInput | ipAddressUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ipAddressUser update
   */
  export type ipAddressUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ipAddressUser.
     */
    data: XOR<ipAddressUserUpdateInput, ipAddressUserUncheckedUpdateInput>
    /**
     * Choose, which ipAddressUser to update.
     */
    where: ipAddressUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ipAddressUser updateMany
   */
  export type ipAddressUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ipAddressUsers.
     */
    data: XOR<ipAddressUserUpdateManyMutationInput, ipAddressUserUncheckedUpdateManyInput>
    /**
     * Filter which ipAddressUsers to update
     */
    where?: ipAddressUserWhereInput
    /**
     * Limit how many ipAddressUsers to update.
     */
    limit?: number
  }

  /**
   * ipAddressUser updateManyAndReturn
   */
  export type ipAddressUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * The data used to update ipAddressUsers.
     */
    data: XOR<ipAddressUserUpdateManyMutationInput, ipAddressUserUncheckedUpdateManyInput>
    /**
     * Filter which ipAddressUsers to update
     */
    where?: ipAddressUserWhereInput
    /**
     * Limit how many ipAddressUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ipAddressUser upsert
   */
  export type ipAddressUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ipAddressUser to update in case it exists.
     */
    where: ipAddressUserWhereUniqueInput
    /**
     * In case the ipAddressUser found by the `where` argument doesn't exist, create a new ipAddressUser with this data.
     */
    create: XOR<ipAddressUserCreateInput, ipAddressUserUncheckedCreateInput>
    /**
     * In case the ipAddressUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ipAddressUserUpdateInput, ipAddressUserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ipAddressUser delete
   */
  export type ipAddressUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
    /**
     * Filter which ipAddressUser to delete.
     */
    where: ipAddressUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * ipAddressUser deleteMany
   */
  export type ipAddressUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ipAddressUsers to delete
     */
    where?: ipAddressUserWhereInput
    /**
     * Limit how many ipAddressUsers to delete.
     */
    limit?: number
  }

  /**
   * ipAddressUser without action
   */
  export type ipAddressUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ipAddressUser
     */
    select?: ipAddressUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ipAddressUser
     */
    omit?: ipAddressUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ipAddressUserInclude<ExtArgs> | null
  }


  /**
   * Model HistoryUser
   */

  export type AggregateHistoryUser = {
    _count: HistoryUserCountAggregateOutputType | null
    _min: HistoryUserMinAggregateOutputType | null
    _max: HistoryUserMaxAggregateOutputType | null
  }

  export type HistoryUserMinAggregateOutputType = {
    id: string | null
    ts: Date | null
    type: $Enums.HistoryType | null
    userId: string | null
  }

  export type HistoryUserMaxAggregateOutputType = {
    id: string | null
    ts: Date | null
    type: $Enums.HistoryType | null
    userId: string | null
  }

  export type HistoryUserCountAggregateOutputType = {
    id: number
    ts: number
    type: number
    options: number
    userId: number
    _all: number
  }


  export type HistoryUserMinAggregateInputType = {
    id?: true
    ts?: true
    type?: true
    userId?: true
  }

  export type HistoryUserMaxAggregateInputType = {
    id?: true
    ts?: true
    type?: true
    userId?: true
  }

  export type HistoryUserCountAggregateInputType = {
    id?: true
    ts?: true
    type?: true
    options?: true
    userId?: true
    _all?: true
  }

  export type HistoryUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryUser to aggregate.
     */
    where?: HistoryUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryUsers to fetch.
     */
    orderBy?: HistoryUserOrderByWithRelationInput | HistoryUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoryUsers
    **/
    _count?: true | HistoryUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryUserMaxAggregateInputType
  }

  export type GetHistoryUserAggregateType<T extends HistoryUserAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoryUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoryUser[P]>
      : GetScalarType<T[P], AggregateHistoryUser[P]>
  }




  export type HistoryUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryUserWhereInput
    orderBy?: HistoryUserOrderByWithAggregationInput | HistoryUserOrderByWithAggregationInput[]
    by: HistoryUserScalarFieldEnum[] | HistoryUserScalarFieldEnum
    having?: HistoryUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryUserCountAggregateInputType | true
    _min?: HistoryUserMinAggregateInputType
    _max?: HistoryUserMaxAggregateInputType
  }

  export type HistoryUserGroupByOutputType = {
    id: string
    ts: Date
    type: $Enums.HistoryType
    options: JsonValue | null
    userId: string
    _count: HistoryUserCountAggregateOutputType | null
    _min: HistoryUserMinAggregateOutputType | null
    _max: HistoryUserMaxAggregateOutputType | null
  }

  type GetHistoryUserGroupByPayload<T extends HistoryUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryUserGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryUserGroupByOutputType[P]>
        }
      >
    >


  export type HistoryUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    type?: boolean
    options?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyUser"]>

  export type HistoryUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    type?: boolean
    options?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyUser"]>

  export type HistoryUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    type?: boolean
    options?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyUser"]>

  export type HistoryUserSelectScalar = {
    id?: boolean
    ts?: boolean
    type?: boolean
    options?: boolean
    userId?: boolean
  }

  export type HistoryUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ts" | "type" | "options" | "userId", ExtArgs["result"]["historyUser"]>
  export type HistoryUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HistoryUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HistoryUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HistoryUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoryUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ts: Date
      type: $Enums.HistoryType
      options: Prisma.JsonValue | null
      userId: string
    }, ExtArgs["result"]["historyUser"]>
    composites: {}
  }

  type HistoryUserGetPayload<S extends boolean | null | undefined | HistoryUserDefaultArgs> = $Result.GetResult<Prisma.$HistoryUserPayload, S>

  type HistoryUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: HistoryUserCountAggregateInputType | true
    }

  export interface HistoryUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoryUser'], meta: { name: 'HistoryUser' } }
    /**
     * Find zero or one HistoryUser that matches the filter.
     * @param {HistoryUserFindUniqueArgs} args - Arguments to find a HistoryUser
     * @example
     * // Get one HistoryUser
     * const historyUser = await prisma.historyUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryUserFindUniqueArgs>(args: SelectSubset<T, HistoryUserFindUniqueArgs<ExtArgs>>): Prisma__HistoryUserClient<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoryUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryUserFindUniqueOrThrowArgs} args - Arguments to find a HistoryUser
     * @example
     * // Get one HistoryUser
     * const historyUser = await prisma.historyUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryUserFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryUserClient<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUserFindFirstArgs} args - Arguments to find a HistoryUser
     * @example
     * // Get one HistoryUser
     * const historyUser = await prisma.historyUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryUserFindFirstArgs>(args?: SelectSubset<T, HistoryUserFindFirstArgs<ExtArgs>>): Prisma__HistoryUserClient<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUserFindFirstOrThrowArgs} args - Arguments to find a HistoryUser
     * @example
     * // Get one HistoryUser
     * const historyUser = await prisma.historyUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryUserFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryUserClient<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoryUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoryUsers
     * const historyUsers = await prisma.historyUser.findMany()
     * 
     * // Get first 10 HistoryUsers
     * const historyUsers = await prisma.historyUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyUserWithIdOnly = await prisma.historyUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryUserFindManyArgs>(args?: SelectSubset<T, HistoryUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoryUser.
     * @param {HistoryUserCreateArgs} args - Arguments to create a HistoryUser.
     * @example
     * // Create one HistoryUser
     * const HistoryUser = await prisma.historyUser.create({
     *   data: {
     *     // ... data to create a HistoryUser
     *   }
     * })
     * 
     */
    create<T extends HistoryUserCreateArgs>(args: SelectSubset<T, HistoryUserCreateArgs<ExtArgs>>): Prisma__HistoryUserClient<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoryUsers.
     * @param {HistoryUserCreateManyArgs} args - Arguments to create many HistoryUsers.
     * @example
     * // Create many HistoryUsers
     * const historyUser = await prisma.historyUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryUserCreateManyArgs>(args?: SelectSubset<T, HistoryUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoryUsers and returns the data saved in the database.
     * @param {HistoryUserCreateManyAndReturnArgs} args - Arguments to create many HistoryUsers.
     * @example
     * // Create many HistoryUsers
     * const historyUser = await prisma.historyUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoryUsers and only return the `id`
     * const historyUserWithIdOnly = await prisma.historyUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryUserCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoryUser.
     * @param {HistoryUserDeleteArgs} args - Arguments to delete one HistoryUser.
     * @example
     * // Delete one HistoryUser
     * const HistoryUser = await prisma.historyUser.delete({
     *   where: {
     *     // ... filter to delete one HistoryUser
     *   }
     * })
     * 
     */
    delete<T extends HistoryUserDeleteArgs>(args: SelectSubset<T, HistoryUserDeleteArgs<ExtArgs>>): Prisma__HistoryUserClient<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoryUser.
     * @param {HistoryUserUpdateArgs} args - Arguments to update one HistoryUser.
     * @example
     * // Update one HistoryUser
     * const historyUser = await prisma.historyUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUserUpdateArgs>(args: SelectSubset<T, HistoryUserUpdateArgs<ExtArgs>>): Prisma__HistoryUserClient<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoryUsers.
     * @param {HistoryUserDeleteManyArgs} args - Arguments to filter HistoryUsers to delete.
     * @example
     * // Delete a few HistoryUsers
     * const { count } = await prisma.historyUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryUserDeleteManyArgs>(args?: SelectSubset<T, HistoryUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoryUsers
     * const historyUser = await prisma.historyUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUserUpdateManyArgs>(args: SelectSubset<T, HistoryUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryUsers and returns the data updated in the database.
     * @param {HistoryUserUpdateManyAndReturnArgs} args - Arguments to update many HistoryUsers.
     * @example
     * // Update many HistoryUsers
     * const historyUser = await prisma.historyUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoryUsers and only return the `id`
     * const historyUserWithIdOnly = await prisma.historyUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoryUserUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoryUser.
     * @param {HistoryUserUpsertArgs} args - Arguments to update or create a HistoryUser.
     * @example
     * // Update or create a HistoryUser
     * const historyUser = await prisma.historyUser.upsert({
     *   create: {
     *     // ... data to create a HistoryUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoryUser we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUserUpsertArgs>(args: SelectSubset<T, HistoryUserUpsertArgs<ExtArgs>>): Prisma__HistoryUserClient<$Result.GetResult<Prisma.$HistoryUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoryUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUserCountArgs} args - Arguments to filter HistoryUsers to count.
     * @example
     * // Count the number of HistoryUsers
     * const count = await prisma.historyUser.count({
     *   where: {
     *     // ... the filter for the HistoryUsers we want to count
     *   }
     * })
    **/
    count<T extends HistoryUserCountArgs>(
      args?: Subset<T, HistoryUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoryUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryUserAggregateArgs>(args: Subset<T, HistoryUserAggregateArgs>): Prisma.PrismaPromise<GetHistoryUserAggregateType<T>>

    /**
     * Group by HistoryUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryUserGroupByArgs['orderBy'] }
        : { orderBy?: HistoryUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoryUser model
   */
  readonly fields: HistoryUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoryUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoryUser model
   */
  interface HistoryUserFieldRefs {
    readonly id: FieldRef<"HistoryUser", 'String'>
    readonly ts: FieldRef<"HistoryUser", 'DateTime'>
    readonly type: FieldRef<"HistoryUser", 'HistoryType'>
    readonly options: FieldRef<"HistoryUser", 'Json'>
    readonly userId: FieldRef<"HistoryUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoryUser findUnique
   */
  export type HistoryUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
    /**
     * Filter, which HistoryUser to fetch.
     */
    where: HistoryUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * HistoryUser findUniqueOrThrow
   */
  export type HistoryUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
    /**
     * Filter, which HistoryUser to fetch.
     */
    where: HistoryUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * HistoryUser findFirst
   */
  export type HistoryUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
    /**
     * Filter, which HistoryUser to fetch.
     */
    where?: HistoryUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryUsers to fetch.
     */
    orderBy?: HistoryUserOrderByWithRelationInput | HistoryUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryUsers.
     */
    cursor?: HistoryUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryUsers.
     */
    distinct?: HistoryUserScalarFieldEnum | HistoryUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * HistoryUser findFirstOrThrow
   */
  export type HistoryUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
    /**
     * Filter, which HistoryUser to fetch.
     */
    where?: HistoryUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryUsers to fetch.
     */
    orderBy?: HistoryUserOrderByWithRelationInput | HistoryUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryUsers.
     */
    cursor?: HistoryUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryUsers.
     */
    distinct?: HistoryUserScalarFieldEnum | HistoryUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * HistoryUser findMany
   */
  export type HistoryUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
    /**
     * Filter, which HistoryUsers to fetch.
     */
    where?: HistoryUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryUsers to fetch.
     */
    orderBy?: HistoryUserOrderByWithRelationInput | HistoryUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoryUsers.
     */
    cursor?: HistoryUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryUsers.
     */
    skip?: number
    distinct?: HistoryUserScalarFieldEnum | HistoryUserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * HistoryUser create
   */
  export type HistoryUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoryUser.
     */
    data: XOR<HistoryUserCreateInput, HistoryUserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * HistoryUser createMany
   */
  export type HistoryUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoryUsers.
     */
    data: HistoryUserCreateManyInput | HistoryUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoryUser createManyAndReturn
   */
  export type HistoryUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * The data used to create many HistoryUsers.
     */
    data: HistoryUserCreateManyInput | HistoryUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryUser update
   */
  export type HistoryUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoryUser.
     */
    data: XOR<HistoryUserUpdateInput, HistoryUserUncheckedUpdateInput>
    /**
     * Choose, which HistoryUser to update.
     */
    where: HistoryUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * HistoryUser updateMany
   */
  export type HistoryUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoryUsers.
     */
    data: XOR<HistoryUserUpdateManyMutationInput, HistoryUserUncheckedUpdateManyInput>
    /**
     * Filter which HistoryUsers to update
     */
    where?: HistoryUserWhereInput
    /**
     * Limit how many HistoryUsers to update.
     */
    limit?: number
  }

  /**
   * HistoryUser updateManyAndReturn
   */
  export type HistoryUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * The data used to update HistoryUsers.
     */
    data: XOR<HistoryUserUpdateManyMutationInput, HistoryUserUncheckedUpdateManyInput>
    /**
     * Filter which HistoryUsers to update
     */
    where?: HistoryUserWhereInput
    /**
     * Limit how many HistoryUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryUser upsert
   */
  export type HistoryUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoryUser to update in case it exists.
     */
    where: HistoryUserWhereUniqueInput
    /**
     * In case the HistoryUser found by the `where` argument doesn't exist, create a new HistoryUser with this data.
     */
    create: XOR<HistoryUserCreateInput, HistoryUserUncheckedCreateInput>
    /**
     * In case the HistoryUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUserUpdateInput, HistoryUserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * HistoryUser delete
   */
  export type HistoryUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
    /**
     * Filter which HistoryUser to delete.
     */
    where: HistoryUserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * HistoryUser deleteMany
   */
  export type HistoryUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryUsers to delete
     */
    where?: HistoryUserWhereInput
    /**
     * Limit how many HistoryUsers to delete.
     */
    limit?: number
  }

  /**
   * HistoryUser without action
   */
  export type HistoryUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryUser
     */
    select?: HistoryUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryUser
     */
    omit?: HistoryUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryUserInclude<ExtArgs> | null
  }


  /**
   * Model Trooper
   */

  export type AggregateTrooper = {
    _count: TrooperCountAggregateOutputType | null
    _avg: TrooperAvgAggregateOutputType | null
    _sum: TrooperSumAggregateOutputType | null
    _min: TrooperMinAggregateOutputType | null
    _max: TrooperMaxAggregateOutputType | null
  }

  export type TrooperAvgAggregateOutputType = {
    choices: number | null
    group: number | null
    seed: number | null
    targetSystem: number | null
    targetType: number | null
    reloadSystem: number | null
    moveSystem: number | null
    CBody: number | null
    CWeapon: number | null
  }

  export type TrooperSumAggregateOutputType = {
    choices: number[]
    group: number | null
    seed: number | null
    targetSystem: number | null
    targetType: number | null
    reloadSystem: number | null
    moveSystem: number | null
    CBody: number | null
    CWeapon: number | null
  }

  export type TrooperMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    name: string | null
    group: number | null
    seed: number | null
    targetSystem: number | null
    targetType: number | null
    reloadSystem: number | null
    moveSystem: number | null
    CBody: number | null
    CWeapon: number | null
  }

  export type TrooperMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    name: string | null
    group: number | null
    seed: number | null
    targetSystem: number | null
    targetType: number | null
    reloadSystem: number | null
    moveSystem: number | null
    CBody: number | null
    CWeapon: number | null
  }

  export type TrooperCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    name: number
    choices: number
    group: number
    seed: number
    targetSystem: number
    targetType: number
    reloadSystem: number
    moveSystem: number
    CBody: number
    CWeapon: number
    _all: number
  }


  export type TrooperAvgAggregateInputType = {
    choices?: true
    group?: true
    seed?: true
    targetSystem?: true
    targetType?: true
    reloadSystem?: true
    moveSystem?: true
    CBody?: true
    CWeapon?: true
  }

  export type TrooperSumAggregateInputType = {
    choices?: true
    group?: true
    seed?: true
    targetSystem?: true
    targetType?: true
    reloadSystem?: true
    moveSystem?: true
    CBody?: true
    CWeapon?: true
  }

  export type TrooperMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    name?: true
    group?: true
    seed?: true
    targetSystem?: true
    targetType?: true
    reloadSystem?: true
    moveSystem?: true
    CBody?: true
    CWeapon?: true
  }

  export type TrooperMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    name?: true
    group?: true
    seed?: true
    targetSystem?: true
    targetType?: true
    reloadSystem?: true
    moveSystem?: true
    CBody?: true
    CWeapon?: true
  }

  export type TrooperCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    name?: true
    choices?: true
    group?: true
    seed?: true
    targetSystem?: true
    targetType?: true
    reloadSystem?: true
    moveSystem?: true
    CBody?: true
    CWeapon?: true
    _all?: true
  }

  export type TrooperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trooper to aggregate.
     */
    where?: TrooperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Troopers to fetch.
     */
    orderBy?: TrooperOrderByWithRelationInput | TrooperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrooperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Troopers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Troopers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Troopers
    **/
    _count?: true | TrooperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrooperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrooperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrooperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrooperMaxAggregateInputType
  }

  export type GetTrooperAggregateType<T extends TrooperAggregateArgs> = {
        [P in keyof T & keyof AggregateTrooper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrooper[P]>
      : GetScalarType<T[P], AggregateTrooper[P]>
  }




  export type TrooperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrooperWhereInput
    orderBy?: TrooperOrderByWithAggregationInput | TrooperOrderByWithAggregationInput[]
    by: TrooperScalarFieldEnum[] | TrooperScalarFieldEnum
    having?: TrooperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrooperCountAggregateInputType | true
    _avg?: TrooperAvgAggregateInputType
    _sum?: TrooperSumAggregateInputType
    _min?: TrooperMinAggregateInputType
    _max?: TrooperMaxAggregateInputType
  }

  export type TrooperGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    name: string
    choices: number[]
    group: number
    seed: number
    targetSystem: number
    targetType: number
    reloadSystem: number
    moveSystem: number
    CBody: number | null
    CWeapon: number | null
    _count: TrooperCountAggregateOutputType | null
    _avg: TrooperAvgAggregateOutputType | null
    _sum: TrooperSumAggregateOutputType | null
    _min: TrooperMinAggregateOutputType | null
    _max: TrooperMaxAggregateOutputType | null
  }

  type GetTrooperGroupByPayload<T extends TrooperGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrooperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrooperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrooperGroupByOutputType[P]>
            : GetScalarType<T[P], TrooperGroupByOutputType[P]>
        }
      >
    >


  export type TrooperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    name?: boolean
    choices?: boolean
    group?: boolean
    seed?: boolean
    targetSystem?: boolean
    targetType?: boolean
    reloadSystem?: boolean
    moveSystem?: boolean
    CBody?: boolean
    CWeapon?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trooper"]>

  export type TrooperSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    name?: boolean
    choices?: boolean
    group?: boolean
    seed?: boolean
    targetSystem?: boolean
    targetType?: boolean
    reloadSystem?: boolean
    moveSystem?: boolean
    CBody?: boolean
    CWeapon?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trooper"]>

  export type TrooperSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    name?: boolean
    choices?: boolean
    group?: boolean
    seed?: boolean
    targetSystem?: boolean
    targetType?: boolean
    reloadSystem?: boolean
    moveSystem?: boolean
    CBody?: boolean
    CWeapon?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trooper"]>

  export type TrooperSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    name?: boolean
    choices?: boolean
    group?: boolean
    seed?: boolean
    targetSystem?: boolean
    targetType?: boolean
    reloadSystem?: boolean
    moveSystem?: boolean
    CBody?: boolean
    CWeapon?: boolean
  }

  export type TrooperOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "name" | "choices" | "group" | "seed" | "targetSystem" | "targetType" | "reloadSystem" | "moveSystem" | "CBody" | "CWeapon", ExtArgs["result"]["trooper"]>
  export type TrooperInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrooperIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrooperIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TrooperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trooper"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      name: string
      choices: number[]
      group: number
      seed: number
      targetSystem: number
      targetType: number
      reloadSystem: number
      moveSystem: number
      CBody: number | null
      CWeapon: number | null
    }, ExtArgs["result"]["trooper"]>
    composites: {}
  }

  type TrooperGetPayload<S extends boolean | null | undefined | TrooperDefaultArgs> = $Result.GetResult<Prisma.$TrooperPayload, S>

  type TrooperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrooperFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TrooperCountAggregateInputType | true
    }

  export interface TrooperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trooper'], meta: { name: 'Trooper' } }
    /**
     * Find zero or one Trooper that matches the filter.
     * @param {TrooperFindUniqueArgs} args - Arguments to find a Trooper
     * @example
     * // Get one Trooper
     * const trooper = await prisma.trooper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrooperFindUniqueArgs>(args: SelectSubset<T, TrooperFindUniqueArgs<ExtArgs>>): Prisma__TrooperClient<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trooper that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrooperFindUniqueOrThrowArgs} args - Arguments to find a Trooper
     * @example
     * // Get one Trooper
     * const trooper = await prisma.trooper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrooperFindUniqueOrThrowArgs>(args: SelectSubset<T, TrooperFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrooperClient<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trooper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperFindFirstArgs} args - Arguments to find a Trooper
     * @example
     * // Get one Trooper
     * const trooper = await prisma.trooper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrooperFindFirstArgs>(args?: SelectSubset<T, TrooperFindFirstArgs<ExtArgs>>): Prisma__TrooperClient<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trooper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperFindFirstOrThrowArgs} args - Arguments to find a Trooper
     * @example
     * // Get one Trooper
     * const trooper = await prisma.trooper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrooperFindFirstOrThrowArgs>(args?: SelectSubset<T, TrooperFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrooperClient<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Troopers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Troopers
     * const troopers = await prisma.trooper.findMany()
     * 
     * // Get first 10 Troopers
     * const troopers = await prisma.trooper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trooperWithIdOnly = await prisma.trooper.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrooperFindManyArgs>(args?: SelectSubset<T, TrooperFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trooper.
     * @param {TrooperCreateArgs} args - Arguments to create a Trooper.
     * @example
     * // Create one Trooper
     * const Trooper = await prisma.trooper.create({
     *   data: {
     *     // ... data to create a Trooper
     *   }
     * })
     * 
     */
    create<T extends TrooperCreateArgs>(args: SelectSubset<T, TrooperCreateArgs<ExtArgs>>): Prisma__TrooperClient<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Troopers.
     * @param {TrooperCreateManyArgs} args - Arguments to create many Troopers.
     * @example
     * // Create many Troopers
     * const trooper = await prisma.trooper.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrooperCreateManyArgs>(args?: SelectSubset<T, TrooperCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Troopers and returns the data saved in the database.
     * @param {TrooperCreateManyAndReturnArgs} args - Arguments to create many Troopers.
     * @example
     * // Create many Troopers
     * const trooper = await prisma.trooper.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Troopers and only return the `id`
     * const trooperWithIdOnly = await prisma.trooper.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrooperCreateManyAndReturnArgs>(args?: SelectSubset<T, TrooperCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trooper.
     * @param {TrooperDeleteArgs} args - Arguments to delete one Trooper.
     * @example
     * // Delete one Trooper
     * const Trooper = await prisma.trooper.delete({
     *   where: {
     *     // ... filter to delete one Trooper
     *   }
     * })
     * 
     */
    delete<T extends TrooperDeleteArgs>(args: SelectSubset<T, TrooperDeleteArgs<ExtArgs>>): Prisma__TrooperClient<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trooper.
     * @param {TrooperUpdateArgs} args - Arguments to update one Trooper.
     * @example
     * // Update one Trooper
     * const trooper = await prisma.trooper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrooperUpdateArgs>(args: SelectSubset<T, TrooperUpdateArgs<ExtArgs>>): Prisma__TrooperClient<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Troopers.
     * @param {TrooperDeleteManyArgs} args - Arguments to filter Troopers to delete.
     * @example
     * // Delete a few Troopers
     * const { count } = await prisma.trooper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrooperDeleteManyArgs>(args?: SelectSubset<T, TrooperDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Troopers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Troopers
     * const trooper = await prisma.trooper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrooperUpdateManyArgs>(args: SelectSubset<T, TrooperUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Troopers and returns the data updated in the database.
     * @param {TrooperUpdateManyAndReturnArgs} args - Arguments to update many Troopers.
     * @example
     * // Update many Troopers
     * const trooper = await prisma.trooper.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Troopers and only return the `id`
     * const trooperWithIdOnly = await prisma.trooper.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrooperUpdateManyAndReturnArgs>(args: SelectSubset<T, TrooperUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trooper.
     * @param {TrooperUpsertArgs} args - Arguments to update or create a Trooper.
     * @example
     * // Update or create a Trooper
     * const trooper = await prisma.trooper.upsert({
     *   create: {
     *     // ... data to create a Trooper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trooper we want to update
     *   }
     * })
     */
    upsert<T extends TrooperUpsertArgs>(args: SelectSubset<T, TrooperUpsertArgs<ExtArgs>>): Prisma__TrooperClient<$Result.GetResult<Prisma.$TrooperPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Troopers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperCountArgs} args - Arguments to filter Troopers to count.
     * @example
     * // Count the number of Troopers
     * const count = await prisma.trooper.count({
     *   where: {
     *     // ... the filter for the Troopers we want to count
     *   }
     * })
    **/
    count<T extends TrooperCountArgs>(
      args?: Subset<T, TrooperCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrooperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trooper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrooperAggregateArgs>(args: Subset<T, TrooperAggregateArgs>): Prisma.PrismaPromise<GetTrooperAggregateType<T>>

    /**
     * Group by Trooper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrooperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrooperGroupByArgs['orderBy'] }
        : { orderBy?: TrooperGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrooperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrooperGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trooper model
   */
  readonly fields: TrooperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trooper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrooperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trooper model
   */
  interface TrooperFieldRefs {
    readonly id: FieldRef<"Trooper", 'String'>
    readonly createdAt: FieldRef<"Trooper", 'DateTime'>
    readonly userId: FieldRef<"Trooper", 'String'>
    readonly name: FieldRef<"Trooper", 'String'>
    readonly choices: FieldRef<"Trooper", 'Int[]'>
    readonly group: FieldRef<"Trooper", 'Int'>
    readonly seed: FieldRef<"Trooper", 'Int'>
    readonly targetSystem: FieldRef<"Trooper", 'Int'>
    readonly targetType: FieldRef<"Trooper", 'Int'>
    readonly reloadSystem: FieldRef<"Trooper", 'Int'>
    readonly moveSystem: FieldRef<"Trooper", 'Int'>
    readonly CBody: FieldRef<"Trooper", 'Int'>
    readonly CWeapon: FieldRef<"Trooper", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Trooper findUnique
   */
  export type TrooperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
    /**
     * Filter, which Trooper to fetch.
     */
    where: TrooperWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trooper findUniqueOrThrow
   */
  export type TrooperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
    /**
     * Filter, which Trooper to fetch.
     */
    where: TrooperWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trooper findFirst
   */
  export type TrooperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
    /**
     * Filter, which Trooper to fetch.
     */
    where?: TrooperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Troopers to fetch.
     */
    orderBy?: TrooperOrderByWithRelationInput | TrooperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Troopers.
     */
    cursor?: TrooperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Troopers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Troopers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Troopers.
     */
    distinct?: TrooperScalarFieldEnum | TrooperScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trooper findFirstOrThrow
   */
  export type TrooperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
    /**
     * Filter, which Trooper to fetch.
     */
    where?: TrooperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Troopers to fetch.
     */
    orderBy?: TrooperOrderByWithRelationInput | TrooperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Troopers.
     */
    cursor?: TrooperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Troopers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Troopers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Troopers.
     */
    distinct?: TrooperScalarFieldEnum | TrooperScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trooper findMany
   */
  export type TrooperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
    /**
     * Filter, which Troopers to fetch.
     */
    where?: TrooperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Troopers to fetch.
     */
    orderBy?: TrooperOrderByWithRelationInput | TrooperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Troopers.
     */
    cursor?: TrooperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Troopers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Troopers.
     */
    skip?: number
    distinct?: TrooperScalarFieldEnum | TrooperScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trooper create
   */
  export type TrooperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
    /**
     * The data needed to create a Trooper.
     */
    data: XOR<TrooperCreateInput, TrooperUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trooper createMany
   */
  export type TrooperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Troopers.
     */
    data: TrooperCreateManyInput | TrooperCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trooper createManyAndReturn
   */
  export type TrooperCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * The data used to create many Troopers.
     */
    data: TrooperCreateManyInput | TrooperCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trooper update
   */
  export type TrooperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
    /**
     * The data needed to update a Trooper.
     */
    data: XOR<TrooperUpdateInput, TrooperUncheckedUpdateInput>
    /**
     * Choose, which Trooper to update.
     */
    where: TrooperWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trooper updateMany
   */
  export type TrooperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Troopers.
     */
    data: XOR<TrooperUpdateManyMutationInput, TrooperUncheckedUpdateManyInput>
    /**
     * Filter which Troopers to update
     */
    where?: TrooperWhereInput
    /**
     * Limit how many Troopers to update.
     */
    limit?: number
  }

  /**
   * Trooper updateManyAndReturn
   */
  export type TrooperUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * The data used to update Troopers.
     */
    data: XOR<TrooperUpdateManyMutationInput, TrooperUncheckedUpdateManyInput>
    /**
     * Filter which Troopers to update
     */
    where?: TrooperWhereInput
    /**
     * Limit how many Troopers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trooper upsert
   */
  export type TrooperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
    /**
     * The filter to search for the Trooper to update in case it exists.
     */
    where: TrooperWhereUniqueInput
    /**
     * In case the Trooper found by the `where` argument doesn't exist, create a new Trooper with this data.
     */
    create: XOR<TrooperCreateInput, TrooperUncheckedCreateInput>
    /**
     * In case the Trooper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrooperUpdateInput, TrooperUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trooper delete
   */
  export type TrooperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
    /**
     * Filter which Trooper to delete.
     */
    where: TrooperWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trooper deleteMany
   */
  export type TrooperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Troopers to delete
     */
    where?: TrooperWhereInput
    /**
     * Limit how many Troopers to delete.
     */
    limit?: number
  }

  /**
   * Trooper without action
   */
  export type TrooperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trooper
     */
    select?: TrooperSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trooper
     */
    omit?: TrooperOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrooperInclude<ExtArgs> | null
  }


  /**
   * Model TrooperDay
   */

  export type AggregateTrooperDay = {
    _count: TrooperDayCountAggregateOutputType | null
    _avg: TrooperDayAvgAggregateOutputType | null
    _sum: TrooperDaySumAggregateOutputType | null
    _min: TrooperDayMinAggregateOutputType | null
    _max: TrooperDayMaxAggregateOutputType | null
  }

  export type TrooperDayAvgAggregateOutputType = {
    seed: number | null
    choices: number | null
  }

  export type TrooperDaySumAggregateOutputType = {
    seed: number | null
    choices: number[]
  }

  export type TrooperDayMinAggregateOutputType = {
    id: string | null
    name: string | null
    seed: number | null
  }

  export type TrooperDayMaxAggregateOutputType = {
    id: string | null
    name: string | null
    seed: number | null
  }

  export type TrooperDayCountAggregateOutputType = {
    id: number
    name: number
    seed: number
    choices: number
    _all: number
  }


  export type TrooperDayAvgAggregateInputType = {
    seed?: true
    choices?: true
  }

  export type TrooperDaySumAggregateInputType = {
    seed?: true
    choices?: true
  }

  export type TrooperDayMinAggregateInputType = {
    id?: true
    name?: true
    seed?: true
  }

  export type TrooperDayMaxAggregateInputType = {
    id?: true
    name?: true
    seed?: true
  }

  export type TrooperDayCountAggregateInputType = {
    id?: true
    name?: true
    seed?: true
    choices?: true
    _all?: true
  }

  export type TrooperDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrooperDay to aggregate.
     */
    where?: TrooperDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrooperDays to fetch.
     */
    orderBy?: TrooperDayOrderByWithRelationInput | TrooperDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrooperDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrooperDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrooperDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrooperDays
    **/
    _count?: true | TrooperDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrooperDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrooperDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrooperDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrooperDayMaxAggregateInputType
  }

  export type GetTrooperDayAggregateType<T extends TrooperDayAggregateArgs> = {
        [P in keyof T & keyof AggregateTrooperDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrooperDay[P]>
      : GetScalarType<T[P], AggregateTrooperDay[P]>
  }




  export type TrooperDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrooperDayWhereInput
    orderBy?: TrooperDayOrderByWithAggregationInput | TrooperDayOrderByWithAggregationInput[]
    by: TrooperDayScalarFieldEnum[] | TrooperDayScalarFieldEnum
    having?: TrooperDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrooperDayCountAggregateInputType | true
    _avg?: TrooperDayAvgAggregateInputType
    _sum?: TrooperDaySumAggregateInputType
    _min?: TrooperDayMinAggregateInputType
    _max?: TrooperDayMaxAggregateInputType
  }

  export type TrooperDayGroupByOutputType = {
    id: string
    name: string
    seed: number
    choices: number[]
    _count: TrooperDayCountAggregateOutputType | null
    _avg: TrooperDayAvgAggregateOutputType | null
    _sum: TrooperDaySumAggregateOutputType | null
    _min: TrooperDayMinAggregateOutputType | null
    _max: TrooperDayMaxAggregateOutputType | null
  }

  type GetTrooperDayGroupByPayload<T extends TrooperDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrooperDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrooperDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrooperDayGroupByOutputType[P]>
            : GetScalarType<T[P], TrooperDayGroupByOutputType[P]>
        }
      >
    >


  export type TrooperDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seed?: boolean
    choices?: boolean
  }, ExtArgs["result"]["trooperDay"]>

  export type TrooperDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seed?: boolean
    choices?: boolean
  }, ExtArgs["result"]["trooperDay"]>

  export type TrooperDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seed?: boolean
    choices?: boolean
  }, ExtArgs["result"]["trooperDay"]>

  export type TrooperDaySelectScalar = {
    id?: boolean
    name?: boolean
    seed?: boolean
    choices?: boolean
  }

  export type TrooperDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "seed" | "choices", ExtArgs["result"]["trooperDay"]>

  export type $TrooperDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrooperDay"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      seed: number
      choices: number[]
    }, ExtArgs["result"]["trooperDay"]>
    composites: {}
  }

  type TrooperDayGetPayload<S extends boolean | null | undefined | TrooperDayDefaultArgs> = $Result.GetResult<Prisma.$TrooperDayPayload, S>

  type TrooperDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrooperDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TrooperDayCountAggregateInputType | true
    }

  export interface TrooperDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrooperDay'], meta: { name: 'TrooperDay' } }
    /**
     * Find zero or one TrooperDay that matches the filter.
     * @param {TrooperDayFindUniqueArgs} args - Arguments to find a TrooperDay
     * @example
     * // Get one TrooperDay
     * const trooperDay = await prisma.trooperDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrooperDayFindUniqueArgs>(args: SelectSubset<T, TrooperDayFindUniqueArgs<ExtArgs>>): Prisma__TrooperDayClient<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrooperDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrooperDayFindUniqueOrThrowArgs} args - Arguments to find a TrooperDay
     * @example
     * // Get one TrooperDay
     * const trooperDay = await prisma.trooperDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrooperDayFindUniqueOrThrowArgs>(args: SelectSubset<T, TrooperDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrooperDayClient<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrooperDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperDayFindFirstArgs} args - Arguments to find a TrooperDay
     * @example
     * // Get one TrooperDay
     * const trooperDay = await prisma.trooperDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrooperDayFindFirstArgs>(args?: SelectSubset<T, TrooperDayFindFirstArgs<ExtArgs>>): Prisma__TrooperDayClient<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrooperDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperDayFindFirstOrThrowArgs} args - Arguments to find a TrooperDay
     * @example
     * // Get one TrooperDay
     * const trooperDay = await prisma.trooperDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrooperDayFindFirstOrThrowArgs>(args?: SelectSubset<T, TrooperDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrooperDayClient<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrooperDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrooperDays
     * const trooperDays = await prisma.trooperDay.findMany()
     * 
     * // Get first 10 TrooperDays
     * const trooperDays = await prisma.trooperDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trooperDayWithIdOnly = await prisma.trooperDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrooperDayFindManyArgs>(args?: SelectSubset<T, TrooperDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrooperDay.
     * @param {TrooperDayCreateArgs} args - Arguments to create a TrooperDay.
     * @example
     * // Create one TrooperDay
     * const TrooperDay = await prisma.trooperDay.create({
     *   data: {
     *     // ... data to create a TrooperDay
     *   }
     * })
     * 
     */
    create<T extends TrooperDayCreateArgs>(args: SelectSubset<T, TrooperDayCreateArgs<ExtArgs>>): Prisma__TrooperDayClient<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrooperDays.
     * @param {TrooperDayCreateManyArgs} args - Arguments to create many TrooperDays.
     * @example
     * // Create many TrooperDays
     * const trooperDay = await prisma.trooperDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrooperDayCreateManyArgs>(args?: SelectSubset<T, TrooperDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrooperDays and returns the data saved in the database.
     * @param {TrooperDayCreateManyAndReturnArgs} args - Arguments to create many TrooperDays.
     * @example
     * // Create many TrooperDays
     * const trooperDay = await prisma.trooperDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrooperDays and only return the `id`
     * const trooperDayWithIdOnly = await prisma.trooperDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrooperDayCreateManyAndReturnArgs>(args?: SelectSubset<T, TrooperDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrooperDay.
     * @param {TrooperDayDeleteArgs} args - Arguments to delete one TrooperDay.
     * @example
     * // Delete one TrooperDay
     * const TrooperDay = await prisma.trooperDay.delete({
     *   where: {
     *     // ... filter to delete one TrooperDay
     *   }
     * })
     * 
     */
    delete<T extends TrooperDayDeleteArgs>(args: SelectSubset<T, TrooperDayDeleteArgs<ExtArgs>>): Prisma__TrooperDayClient<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrooperDay.
     * @param {TrooperDayUpdateArgs} args - Arguments to update one TrooperDay.
     * @example
     * // Update one TrooperDay
     * const trooperDay = await prisma.trooperDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrooperDayUpdateArgs>(args: SelectSubset<T, TrooperDayUpdateArgs<ExtArgs>>): Prisma__TrooperDayClient<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrooperDays.
     * @param {TrooperDayDeleteManyArgs} args - Arguments to filter TrooperDays to delete.
     * @example
     * // Delete a few TrooperDays
     * const { count } = await prisma.trooperDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrooperDayDeleteManyArgs>(args?: SelectSubset<T, TrooperDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrooperDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrooperDays
     * const trooperDay = await prisma.trooperDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrooperDayUpdateManyArgs>(args: SelectSubset<T, TrooperDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrooperDays and returns the data updated in the database.
     * @param {TrooperDayUpdateManyAndReturnArgs} args - Arguments to update many TrooperDays.
     * @example
     * // Update many TrooperDays
     * const trooperDay = await prisma.trooperDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrooperDays and only return the `id`
     * const trooperDayWithIdOnly = await prisma.trooperDay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrooperDayUpdateManyAndReturnArgs>(args: SelectSubset<T, TrooperDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrooperDay.
     * @param {TrooperDayUpsertArgs} args - Arguments to update or create a TrooperDay.
     * @example
     * // Update or create a TrooperDay
     * const trooperDay = await prisma.trooperDay.upsert({
     *   create: {
     *     // ... data to create a TrooperDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrooperDay we want to update
     *   }
     * })
     */
    upsert<T extends TrooperDayUpsertArgs>(args: SelectSubset<T, TrooperDayUpsertArgs<ExtArgs>>): Prisma__TrooperDayClient<$Result.GetResult<Prisma.$TrooperDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrooperDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperDayCountArgs} args - Arguments to filter TrooperDays to count.
     * @example
     * // Count the number of TrooperDays
     * const count = await prisma.trooperDay.count({
     *   where: {
     *     // ... the filter for the TrooperDays we want to count
     *   }
     * })
    **/
    count<T extends TrooperDayCountArgs>(
      args?: Subset<T, TrooperDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrooperDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrooperDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrooperDayAggregateArgs>(args: Subset<T, TrooperDayAggregateArgs>): Prisma.PrismaPromise<GetTrooperDayAggregateType<T>>

    /**
     * Group by TrooperDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrooperDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrooperDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrooperDayGroupByArgs['orderBy'] }
        : { orderBy?: TrooperDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrooperDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrooperDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrooperDay model
   */
  readonly fields: TrooperDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrooperDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrooperDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrooperDay model
   */
  interface TrooperDayFieldRefs {
    readonly id: FieldRef<"TrooperDay", 'String'>
    readonly name: FieldRef<"TrooperDay", 'String'>
    readonly seed: FieldRef<"TrooperDay", 'Int'>
    readonly choices: FieldRef<"TrooperDay", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * TrooperDay findUnique
   */
  export type TrooperDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * Filter, which TrooperDay to fetch.
     */
    where: TrooperDayWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TrooperDay findUniqueOrThrow
   */
  export type TrooperDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * Filter, which TrooperDay to fetch.
     */
    where: TrooperDayWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TrooperDay findFirst
   */
  export type TrooperDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * Filter, which TrooperDay to fetch.
     */
    where?: TrooperDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrooperDays to fetch.
     */
    orderBy?: TrooperDayOrderByWithRelationInput | TrooperDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrooperDays.
     */
    cursor?: TrooperDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrooperDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrooperDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrooperDays.
     */
    distinct?: TrooperDayScalarFieldEnum | TrooperDayScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TrooperDay findFirstOrThrow
   */
  export type TrooperDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * Filter, which TrooperDay to fetch.
     */
    where?: TrooperDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrooperDays to fetch.
     */
    orderBy?: TrooperDayOrderByWithRelationInput | TrooperDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrooperDays.
     */
    cursor?: TrooperDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrooperDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrooperDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrooperDays.
     */
    distinct?: TrooperDayScalarFieldEnum | TrooperDayScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TrooperDay findMany
   */
  export type TrooperDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * Filter, which TrooperDays to fetch.
     */
    where?: TrooperDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrooperDays to fetch.
     */
    orderBy?: TrooperDayOrderByWithRelationInput | TrooperDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrooperDays.
     */
    cursor?: TrooperDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrooperDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrooperDays.
     */
    skip?: number
    distinct?: TrooperDayScalarFieldEnum | TrooperDayScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TrooperDay create
   */
  export type TrooperDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * The data needed to create a TrooperDay.
     */
    data: XOR<TrooperDayCreateInput, TrooperDayUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TrooperDay createMany
   */
  export type TrooperDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrooperDays.
     */
    data: TrooperDayCreateManyInput | TrooperDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrooperDay createManyAndReturn
   */
  export type TrooperDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * The data used to create many TrooperDays.
     */
    data: TrooperDayCreateManyInput | TrooperDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrooperDay update
   */
  export type TrooperDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * The data needed to update a TrooperDay.
     */
    data: XOR<TrooperDayUpdateInput, TrooperDayUncheckedUpdateInput>
    /**
     * Choose, which TrooperDay to update.
     */
    where: TrooperDayWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TrooperDay updateMany
   */
  export type TrooperDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrooperDays.
     */
    data: XOR<TrooperDayUpdateManyMutationInput, TrooperDayUncheckedUpdateManyInput>
    /**
     * Filter which TrooperDays to update
     */
    where?: TrooperDayWhereInput
    /**
     * Limit how many TrooperDays to update.
     */
    limit?: number
  }

  /**
   * TrooperDay updateManyAndReturn
   */
  export type TrooperDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * The data used to update TrooperDays.
     */
    data: XOR<TrooperDayUpdateManyMutationInput, TrooperDayUncheckedUpdateManyInput>
    /**
     * Filter which TrooperDays to update
     */
    where?: TrooperDayWhereInput
    /**
     * Limit how many TrooperDays to update.
     */
    limit?: number
  }

  /**
   * TrooperDay upsert
   */
  export type TrooperDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * The filter to search for the TrooperDay to update in case it exists.
     */
    where: TrooperDayWhereUniqueInput
    /**
     * In case the TrooperDay found by the `where` argument doesn't exist, create a new TrooperDay with this data.
     */
    create: XOR<TrooperDayCreateInput, TrooperDayUncheckedCreateInput>
    /**
     * In case the TrooperDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrooperDayUpdateInput, TrooperDayUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TrooperDay delete
   */
  export type TrooperDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
    /**
     * Filter which TrooperDay to delete.
     */
    where: TrooperDayWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * TrooperDay deleteMany
   */
  export type TrooperDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrooperDays to delete
     */
    where?: TrooperDayWhereInput
    /**
     * Limit how many TrooperDays to delete.
     */
    limit?: number
  }

  /**
   * TrooperDay without action
   */
  export type TrooperDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrooperDay
     */
    select?: TrooperDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrooperDay
     */
    omit?: TrooperDayOmit<ExtArgs> | null
  }


  /**
   * Model Fight
   */

  export type AggregateFight = {
    _count: FightCountAggregateOutputType | null
    _avg: FightAvgAggregateOutputType | null
    _sum: FightSumAggregateOutputType | null
    _min: FightMinAggregateOutputType | null
    _max: FightMaxAggregateOutputType | null
  }

  export type FightAvgAggregateOutputType = {
    userPrefix: number | null
    opponentPrefix: number | null
  }

  export type FightSumAggregateOutputType = {
    userPrefix: number | null
    opponentPrefix: number | null
  }

  export type FightMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ts: Date | null
    userName: string | null
    userPrefix: number | null
    opponentName: string | null
    opponentPrefix: number | null
    fightInputSWFData: string | null
    result: $Enums.FightResult | null
  }

  export type FightMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ts: Date | null
    userName: string | null
    userPrefix: number | null
    opponentName: string | null
    opponentPrefix: number | null
    fightInputSWFData: string | null
    result: $Enums.FightResult | null
  }

  export type FightCountAggregateOutputType = {
    id: number
    userId: number
    ts: number
    userName: number
    userPrefix: number
    opponentName: number
    opponentPrefix: number
    fightInputSWFData: number
    result: number
    _all: number
  }


  export type FightAvgAggregateInputType = {
    userPrefix?: true
    opponentPrefix?: true
  }

  export type FightSumAggregateInputType = {
    userPrefix?: true
    opponentPrefix?: true
  }

  export type FightMinAggregateInputType = {
    id?: true
    userId?: true
    ts?: true
    userName?: true
    userPrefix?: true
    opponentName?: true
    opponentPrefix?: true
    fightInputSWFData?: true
    result?: true
  }

  export type FightMaxAggregateInputType = {
    id?: true
    userId?: true
    ts?: true
    userName?: true
    userPrefix?: true
    opponentName?: true
    opponentPrefix?: true
    fightInputSWFData?: true
    result?: true
  }

  export type FightCountAggregateInputType = {
    id?: true
    userId?: true
    ts?: true
    userName?: true
    userPrefix?: true
    opponentName?: true
    opponentPrefix?: true
    fightInputSWFData?: true
    result?: true
    _all?: true
  }

  export type FightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fight to aggregate.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fights
    **/
    _count?: true | FightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FightMaxAggregateInputType
  }

  export type GetFightAggregateType<T extends FightAggregateArgs> = {
        [P in keyof T & keyof AggregateFight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFight[P]>
      : GetScalarType<T[P], AggregateFight[P]>
  }




  export type FightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FightWhereInput
    orderBy?: FightOrderByWithAggregationInput | FightOrderByWithAggregationInput[]
    by: FightScalarFieldEnum[] | FightScalarFieldEnum
    having?: FightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FightCountAggregateInputType | true
    _avg?: FightAvgAggregateInputType
    _sum?: FightSumAggregateInputType
    _min?: FightMinAggregateInputType
    _max?: FightMaxAggregateInputType
  }

  export type FightGroupByOutputType = {
    id: string
    userId: string
    ts: Date
    userName: string
    userPrefix: number
    opponentName: string
    opponentPrefix: number
    fightInputSWFData: string
    result: $Enums.FightResult
    _count: FightCountAggregateOutputType | null
    _avg: FightAvgAggregateOutputType | null
    _sum: FightSumAggregateOutputType | null
    _min: FightMinAggregateOutputType | null
    _max: FightMaxAggregateOutputType | null
  }

  type GetFightGroupByPayload<T extends FightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FightGroupByOutputType[P]>
            : GetScalarType<T[P], FightGroupByOutputType[P]>
        }
      >
    >


  export type FightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ts?: boolean
    userName?: boolean
    userPrefix?: boolean
    opponentName?: boolean
    opponentPrefix?: boolean
    fightInputSWFData?: boolean
    result?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fight"]>

  export type FightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ts?: boolean
    userName?: boolean
    userPrefix?: boolean
    opponentName?: boolean
    opponentPrefix?: boolean
    fightInputSWFData?: boolean
    result?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fight"]>

  export type FightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ts?: boolean
    userName?: boolean
    userPrefix?: boolean
    opponentName?: boolean
    opponentPrefix?: boolean
    fightInputSWFData?: boolean
    result?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fight"]>

  export type FightSelectScalar = {
    id?: boolean
    userId?: boolean
    ts?: boolean
    userName?: boolean
    userPrefix?: boolean
    opponentName?: boolean
    opponentPrefix?: boolean
    fightInputSWFData?: boolean
    result?: boolean
  }

  export type FightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ts" | "userName" | "userPrefix" | "opponentName" | "opponentPrefix" | "fightInputSWFData" | "result", ExtArgs["result"]["fight"]>
  export type FightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fight"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ts: Date
      userName: string
      userPrefix: number
      opponentName: string
      opponentPrefix: number
      fightInputSWFData: string
      result: $Enums.FightResult
    }, ExtArgs["result"]["fight"]>
    composites: {}
  }

  type FightGetPayload<S extends boolean | null | undefined | FightDefaultArgs> = $Result.GetResult<Prisma.$FightPayload, S>

  type FightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: FightCountAggregateInputType | true
    }

  export interface FightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fight'], meta: { name: 'Fight' } }
    /**
     * Find zero or one Fight that matches the filter.
     * @param {FightFindUniqueArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FightFindUniqueArgs>(args: SelectSubset<T, FightFindUniqueArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FightFindUniqueOrThrowArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FightFindUniqueOrThrowArgs>(args: SelectSubset<T, FightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindFirstArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FightFindFirstArgs>(args?: SelectSubset<T, FightFindFirstArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindFirstOrThrowArgs} args - Arguments to find a Fight
     * @example
     * // Get one Fight
     * const fight = await prisma.fight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FightFindFirstOrThrowArgs>(args?: SelectSubset<T, FightFindFirstOrThrowArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fights
     * const fights = await prisma.fight.findMany()
     * 
     * // Get first 10 Fights
     * const fights = await prisma.fight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fightWithIdOnly = await prisma.fight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FightFindManyArgs>(args?: SelectSubset<T, FightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fight.
     * @param {FightCreateArgs} args - Arguments to create a Fight.
     * @example
     * // Create one Fight
     * const Fight = await prisma.fight.create({
     *   data: {
     *     // ... data to create a Fight
     *   }
     * })
     * 
     */
    create<T extends FightCreateArgs>(args: SelectSubset<T, FightCreateArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fights.
     * @param {FightCreateManyArgs} args - Arguments to create many Fights.
     * @example
     * // Create many Fights
     * const fight = await prisma.fight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FightCreateManyArgs>(args?: SelectSubset<T, FightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fights and returns the data saved in the database.
     * @param {FightCreateManyAndReturnArgs} args - Arguments to create many Fights.
     * @example
     * // Create many Fights
     * const fight = await prisma.fight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fights and only return the `id`
     * const fightWithIdOnly = await prisma.fight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FightCreateManyAndReturnArgs>(args?: SelectSubset<T, FightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fight.
     * @param {FightDeleteArgs} args - Arguments to delete one Fight.
     * @example
     * // Delete one Fight
     * const Fight = await prisma.fight.delete({
     *   where: {
     *     // ... filter to delete one Fight
     *   }
     * })
     * 
     */
    delete<T extends FightDeleteArgs>(args: SelectSubset<T, FightDeleteArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fight.
     * @param {FightUpdateArgs} args - Arguments to update one Fight.
     * @example
     * // Update one Fight
     * const fight = await prisma.fight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FightUpdateArgs>(args: SelectSubset<T, FightUpdateArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fights.
     * @param {FightDeleteManyArgs} args - Arguments to filter Fights to delete.
     * @example
     * // Delete a few Fights
     * const { count } = await prisma.fight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FightDeleteManyArgs>(args?: SelectSubset<T, FightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fights
     * const fight = await prisma.fight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FightUpdateManyArgs>(args: SelectSubset<T, FightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fights and returns the data updated in the database.
     * @param {FightUpdateManyAndReturnArgs} args - Arguments to update many Fights.
     * @example
     * // Update many Fights
     * const fight = await prisma.fight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fights and only return the `id`
     * const fightWithIdOnly = await prisma.fight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FightUpdateManyAndReturnArgs>(args: SelectSubset<T, FightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fight.
     * @param {FightUpsertArgs} args - Arguments to update or create a Fight.
     * @example
     * // Update or create a Fight
     * const fight = await prisma.fight.upsert({
     *   create: {
     *     // ... data to create a Fight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fight we want to update
     *   }
     * })
     */
    upsert<T extends FightUpsertArgs>(args: SelectSubset<T, FightUpsertArgs<ExtArgs>>): Prisma__FightClient<$Result.GetResult<Prisma.$FightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightCountArgs} args - Arguments to filter Fights to count.
     * @example
     * // Count the number of Fights
     * const count = await prisma.fight.count({
     *   where: {
     *     // ... the filter for the Fights we want to count
     *   }
     * })
    **/
    count<T extends FightCountArgs>(
      args?: Subset<T, FightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FightAggregateArgs>(args: Subset<T, FightAggregateArgs>): Prisma.PrismaPromise<GetFightAggregateType<T>>

    /**
     * Group by Fight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FightGroupByArgs['orderBy'] }
        : { orderBy?: FightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fight model
   */
  readonly fields: FightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fight model
   */
  interface FightFieldRefs {
    readonly id: FieldRef<"Fight", 'String'>
    readonly userId: FieldRef<"Fight", 'String'>
    readonly ts: FieldRef<"Fight", 'DateTime'>
    readonly userName: FieldRef<"Fight", 'String'>
    readonly userPrefix: FieldRef<"Fight", 'Int'>
    readonly opponentName: FieldRef<"Fight", 'String'>
    readonly opponentPrefix: FieldRef<"Fight", 'Int'>
    readonly fightInputSWFData: FieldRef<"Fight", 'String'>
    readonly result: FieldRef<"Fight", 'FightResult'>
  }
    

  // Custom InputTypes
  /**
   * Fight findUnique
   */
  export type FightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter, which Fight to fetch.
     */
    where: FightWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Fight findUniqueOrThrow
   */
  export type FightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter, which Fight to fetch.
     */
    where: FightWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Fight findFirst
   */
  export type FightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter, which Fight to fetch.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fights.
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fights.
     */
    distinct?: FightScalarFieldEnum | FightScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Fight findFirstOrThrow
   */
  export type FightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter, which Fight to fetch.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fights.
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fights.
     */
    distinct?: FightScalarFieldEnum | FightScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Fight findMany
   */
  export type FightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter, which Fights to fetch.
     */
    where?: FightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fights to fetch.
     */
    orderBy?: FightOrderByWithRelationInput | FightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fights.
     */
    cursor?: FightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fights.
     */
    skip?: number
    distinct?: FightScalarFieldEnum | FightScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Fight create
   */
  export type FightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * The data needed to create a Fight.
     */
    data: XOR<FightCreateInput, FightUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Fight createMany
   */
  export type FightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fights.
     */
    data: FightCreateManyInput | FightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fight createManyAndReturn
   */
  export type FightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * The data used to create many Fights.
     */
    data: FightCreateManyInput | FightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fight update
   */
  export type FightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * The data needed to update a Fight.
     */
    data: XOR<FightUpdateInput, FightUncheckedUpdateInput>
    /**
     * Choose, which Fight to update.
     */
    where: FightWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Fight updateMany
   */
  export type FightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fights.
     */
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyInput>
    /**
     * Filter which Fights to update
     */
    where?: FightWhereInput
    /**
     * Limit how many Fights to update.
     */
    limit?: number
  }

  /**
   * Fight updateManyAndReturn
   */
  export type FightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * The data used to update Fights.
     */
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyInput>
    /**
     * Filter which Fights to update
     */
    where?: FightWhereInput
    /**
     * Limit how many Fights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fight upsert
   */
  export type FightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * The filter to search for the Fight to update in case it exists.
     */
    where: FightWhereUniqueInput
    /**
     * In case the Fight found by the `where` argument doesn't exist, create a new Fight with this data.
     */
    create: XOR<FightCreateInput, FightUncheckedCreateInput>
    /**
     * In case the Fight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FightUpdateInput, FightUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Fight delete
   */
  export type FightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
    /**
     * Filter which Fight to delete.
     */
    where: FightWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Fight deleteMany
   */
  export type FightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fights to delete
     */
    where?: FightWhereInput
    /**
     * Limit how many Fights to delete.
     */
    limit?: number
  }

  /**
   * Fight without action
   */
  export type FightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fight
     */
    select?: FightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fight
     */
    omit?: FightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FightInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ts: Date | null
    type: $Enums.MissionType | null
    missionInputSWFData: string | null
    result: $Enums.FightResult | null
  }

  export type MissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ts: Date | null
    type: $Enums.MissionType | null
    missionInputSWFData: string | null
    result: $Enums.FightResult | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    userId: number
    ts: number
    type: number
    missionInputSWFData: number
    result: number
    _all: number
  }


  export type MissionMinAggregateInputType = {
    id?: true
    userId?: true
    ts?: true
    type?: true
    missionInputSWFData?: true
    result?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    userId?: true
    ts?: true
    type?: true
    missionInputSWFData?: true
    result?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    userId?: true
    ts?: true
    type?: true
    missionInputSWFData?: true
    result?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: string
    userId: string
    ts: Date
    type: $Enums.MissionType
    missionInputSWFData: string
    result: $Enums.FightResult
    _count: MissionCountAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ts?: boolean
    type?: boolean
    missionInputSWFData?: boolean
    result?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ts?: boolean
    type?: boolean
    missionInputSWFData?: boolean
    result?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ts?: boolean
    type?: boolean
    missionInputSWFData?: boolean
    result?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>

  export type MissionSelectScalar = {
    id?: boolean
    userId?: boolean
    ts?: boolean
    type?: boolean
    missionInputSWFData?: boolean
    result?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ts" | "type" | "missionInputSWFData" | "result", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ts: Date
      type: $Enums.MissionType
      missionInputSWFData: string
      result: $Enums.FightResult
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missions and returns the data saved in the database.
     * @param {MissionCreateManyAndReturnArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Missions and only return the `id`
     * const missionWithIdOnly = await prisma.mission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MissionCreateManyAndReturnArgs>(args?: SelectSubset<T, MissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions and returns the data updated in the database.
     * @param {MissionUpdateManyAndReturnArgs} args - Arguments to update many Missions.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Missions and only return the `id`
     * const missionWithIdOnly = await prisma.mission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MissionUpdateManyAndReturnArgs>(args: SelectSubset<T, MissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'String'>
    readonly userId: FieldRef<"Mission", 'String'>
    readonly ts: FieldRef<"Mission", 'DateTime'>
    readonly type: FieldRef<"Mission", 'MissionType'>
    readonly missionInputSWFData: FieldRef<"Mission", 'String'>
    readonly result: FieldRef<"Mission", 'FightResult'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission createManyAndReturn
   */
  export type MissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission updateManyAndReturn
   */
  export type MissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    lang: 'lang',
    name: 'name',
    createdAt: 'createdAt',
    lastConnexion: 'lastConnexion',
    admin: 'admin',
    connexionToken: 'connexionToken',
    gold: 'gold',
    power: 'power',
    armyName: 'armyName',
    armyUrl: 'armyUrl',
    prefix: 'prefix',
    color: 'color',
    sponsoredById: 'sponsoredById',
    referralGold: 'referralGold',
    ratsCount: 'ratsCount',
    infiltrationOpponentArmy: 'infiltrationOpponentArmy',
    infiltrationOpponentDate: 'infiltrationOpponentDate',
    infiltrationUnlockAt: 'infiltrationUnlockAt',
    exterminationUnlockAt: 'exterminationUnlockAt',
    epicUnlockAt: 'epicUnlockAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const IpAddressUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ip: 'ip'
  };

  export type IpAddressUserScalarFieldEnum = (typeof IpAddressUserScalarFieldEnum)[keyof typeof IpAddressUserScalarFieldEnum]


  export const HistoryUserScalarFieldEnum: {
    id: 'id',
    ts: 'ts',
    type: 'type',
    options: 'options',
    userId: 'userId'
  };

  export type HistoryUserScalarFieldEnum = (typeof HistoryUserScalarFieldEnum)[keyof typeof HistoryUserScalarFieldEnum]


  export const TrooperScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    name: 'name',
    choices: 'choices',
    group: 'group',
    seed: 'seed',
    targetSystem: 'targetSystem',
    targetType: 'targetType',
    reloadSystem: 'reloadSystem',
    moveSystem: 'moveSystem',
    CBody: 'CBody',
    CWeapon: 'CWeapon'
  };

  export type TrooperScalarFieldEnum = (typeof TrooperScalarFieldEnum)[keyof typeof TrooperScalarFieldEnum]


  export const TrooperDayScalarFieldEnum: {
    id: 'id',
    name: 'name',
    seed: 'seed',
    choices: 'choices'
  };

  export type TrooperDayScalarFieldEnum = (typeof TrooperDayScalarFieldEnum)[keyof typeof TrooperDayScalarFieldEnum]


  export const FightScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ts: 'ts',
    userName: 'userName',
    userPrefix: 'userPrefix',
    opponentName: 'opponentName',
    opponentPrefix: 'opponentPrefix',
    fightInputSWFData: 'fightInputSWFData',
    result: 'result'
  };

  export type FightScalarFieldEnum = (typeof FightScalarFieldEnum)[keyof typeof FightScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ts: 'ts',
    type: 'type',
    missionInputSWFData: 'missionInputSWFData',
    result: 'result'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Lang'
   */
  export type EnumLangFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Lang'>
    


  /**
   * Reference to a field of type 'Lang[]'
   */
  export type ListEnumLangFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Lang[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'HistoryType'
   */
  export type EnumHistoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HistoryType'>
    


  /**
   * Reference to a field of type 'HistoryType[]'
   */
  export type ListEnumHistoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HistoryType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'FightResult'
   */
  export type EnumFightResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FightResult'>
    


  /**
   * Reference to a field of type 'FightResult[]'
   */
  export type ListEnumFightResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FightResult[]'>
    


  /**
   * Reference to a field of type 'MissionType'
   */
  export type EnumMissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionType'>
    


  /**
   * Reference to a field of type 'MissionType[]'
   */
  export type ListEnumMissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    lang?: EnumLangFilter<"User"> | $Enums.Lang
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastConnexion?: DateTimeFilter<"User"> | Date | string
    admin?: BoolFilter<"User"> | boolean
    connexionToken?: UuidFilter<"User"> | string
    gold?: IntFilter<"User"> | number
    power?: IntFilter<"User"> | number
    armyName?: StringFilter<"User"> | string
    armyUrl?: StringFilter<"User"> | string
    prefix?: IntFilter<"User"> | number
    color?: IntFilter<"User"> | number
    sponsoredById?: UuidNullableFilter<"User"> | string | null
    referralGold?: IntFilter<"User"> | number
    ratsCount?: IntFilter<"User"> | number
    infiltrationOpponentArmy?: UuidNullableFilter<"User"> | string | null
    infiltrationOpponentDate?: DateTimeNullableFilter<"User"> | Date | string | null
    infiltrationUnlockAt?: DateTimeNullableFilter<"User"> | Date | string | null
    exterminationUnlockAt?: DateTimeNullableFilter<"User"> | Date | string | null
    epicUnlockAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sponsoredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sponsoredUsers?: UserListRelationFilter
    troopers?: TrooperListRelationFilter
    history?: HistoryUserListRelationFilter
    ipAddressUser?: IpAddressUserListRelationFilter
    fights?: FightListRelationFilter
    missions?: MissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    lang?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastConnexion?: SortOrder
    admin?: SortOrder
    connexionToken?: SortOrder
    gold?: SortOrder
    power?: SortOrder
    armyName?: SortOrder
    armyUrl?: SortOrder
    prefix?: SortOrder
    color?: SortOrder
    sponsoredById?: SortOrderInput | SortOrder
    referralGold?: SortOrder
    ratsCount?: SortOrder
    infiltrationOpponentArmy?: SortOrderInput | SortOrder
    infiltrationOpponentDate?: SortOrderInput | SortOrder
    infiltrationUnlockAt?: SortOrderInput | SortOrder
    exterminationUnlockAt?: SortOrderInput | SortOrder
    epicUnlockAt?: SortOrderInput | SortOrder
    sponsoredBy?: UserOrderByWithRelationInput
    sponsoredUsers?: UserOrderByRelationAggregateInput
    troopers?: TrooperOrderByRelationAggregateInput
    history?: HistoryUserOrderByRelationAggregateInput
    ipAddressUser?: ipAddressUserOrderByRelationAggregateInput
    fights?: FightOrderByRelationAggregateInput
    missions?: MissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    lang?: EnumLangFilter<"User"> | $Enums.Lang
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastConnexion?: DateTimeFilter<"User"> | Date | string
    admin?: BoolFilter<"User"> | boolean
    connexionToken?: UuidFilter<"User"> | string
    gold?: IntFilter<"User"> | number
    power?: IntFilter<"User"> | number
    armyName?: StringFilter<"User"> | string
    armyUrl?: StringFilter<"User"> | string
    prefix?: IntFilter<"User"> | number
    color?: IntFilter<"User"> | number
    sponsoredById?: UuidNullableFilter<"User"> | string | null
    referralGold?: IntFilter<"User"> | number
    ratsCount?: IntFilter<"User"> | number
    infiltrationOpponentArmy?: UuidNullableFilter<"User"> | string | null
    infiltrationOpponentDate?: DateTimeNullableFilter<"User"> | Date | string | null
    infiltrationUnlockAt?: DateTimeNullableFilter<"User"> | Date | string | null
    exterminationUnlockAt?: DateTimeNullableFilter<"User"> | Date | string | null
    epicUnlockAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sponsoredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sponsoredUsers?: UserListRelationFilter
    troopers?: TrooperListRelationFilter
    history?: HistoryUserListRelationFilter
    ipAddressUser?: IpAddressUserListRelationFilter
    fights?: FightListRelationFilter
    missions?: MissionListRelationFilter
  }, "id" | "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    lang?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastConnexion?: SortOrder
    admin?: SortOrder
    connexionToken?: SortOrder
    gold?: SortOrder
    power?: SortOrder
    armyName?: SortOrder
    armyUrl?: SortOrder
    prefix?: SortOrder
    color?: SortOrder
    sponsoredById?: SortOrderInput | SortOrder
    referralGold?: SortOrder
    ratsCount?: SortOrder
    infiltrationOpponentArmy?: SortOrderInput | SortOrder
    infiltrationOpponentDate?: SortOrderInput | SortOrder
    infiltrationUnlockAt?: SortOrderInput | SortOrder
    exterminationUnlockAt?: SortOrderInput | SortOrder
    epicUnlockAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    lang?: EnumLangWithAggregatesFilter<"User"> | $Enums.Lang
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastConnexion?: DateTimeWithAggregatesFilter<"User"> | Date | string
    admin?: BoolWithAggregatesFilter<"User"> | boolean
    connexionToken?: UuidWithAggregatesFilter<"User"> | string
    gold?: IntWithAggregatesFilter<"User"> | number
    power?: IntWithAggregatesFilter<"User"> | number
    armyName?: StringWithAggregatesFilter<"User"> | string
    armyUrl?: StringWithAggregatesFilter<"User"> | string
    prefix?: IntWithAggregatesFilter<"User"> | number
    color?: IntWithAggregatesFilter<"User"> | number
    sponsoredById?: UuidNullableWithAggregatesFilter<"User"> | string | null
    referralGold?: IntWithAggregatesFilter<"User"> | number
    ratsCount?: IntWithAggregatesFilter<"User"> | number
    infiltrationOpponentArmy?: UuidNullableWithAggregatesFilter<"User"> | string | null
    infiltrationOpponentDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    infiltrationUnlockAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    exterminationUnlockAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    epicUnlockAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ipAddressUserWhereInput = {
    AND?: ipAddressUserWhereInput | ipAddressUserWhereInput[]
    OR?: ipAddressUserWhereInput[]
    NOT?: ipAddressUserWhereInput | ipAddressUserWhereInput[]
    id?: UuidFilter<"ipAddressUser"> | string
    userId?: UuidFilter<"ipAddressUser"> | string
    ip?: StringFilter<"ipAddressUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ipAddressUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ipAddressUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ipAddressUserWhereInput | ipAddressUserWhereInput[]
    OR?: ipAddressUserWhereInput[]
    NOT?: ipAddressUserWhereInput | ipAddressUserWhereInput[]
    userId?: UuidFilter<"ipAddressUser"> | string
    ip?: StringFilter<"ipAddressUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type ipAddressUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    _count?: ipAddressUserCountOrderByAggregateInput
    _max?: ipAddressUserMaxOrderByAggregateInput
    _min?: ipAddressUserMinOrderByAggregateInput
  }

  export type ipAddressUserScalarWhereWithAggregatesInput = {
    AND?: ipAddressUserScalarWhereWithAggregatesInput | ipAddressUserScalarWhereWithAggregatesInput[]
    OR?: ipAddressUserScalarWhereWithAggregatesInput[]
    NOT?: ipAddressUserScalarWhereWithAggregatesInput | ipAddressUserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ipAddressUser"> | string
    userId?: UuidWithAggregatesFilter<"ipAddressUser"> | string
    ip?: StringWithAggregatesFilter<"ipAddressUser"> | string
  }

  export type HistoryUserWhereInput = {
    AND?: HistoryUserWhereInput | HistoryUserWhereInput[]
    OR?: HistoryUserWhereInput[]
    NOT?: HistoryUserWhereInput | HistoryUserWhereInput[]
    id?: UuidFilter<"HistoryUser"> | string
    ts?: DateTimeFilter<"HistoryUser"> | Date | string
    type?: EnumHistoryTypeFilter<"HistoryUser"> | $Enums.HistoryType
    options?: JsonNullableFilter<"HistoryUser">
    userId?: UuidFilter<"HistoryUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HistoryUserOrderByWithRelationInput = {
    id?: SortOrder
    ts?: SortOrder
    type?: SortOrder
    options?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HistoryUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryUserWhereInput | HistoryUserWhereInput[]
    OR?: HistoryUserWhereInput[]
    NOT?: HistoryUserWhereInput | HistoryUserWhereInput[]
    ts?: DateTimeFilter<"HistoryUser"> | Date | string
    type?: EnumHistoryTypeFilter<"HistoryUser"> | $Enums.HistoryType
    options?: JsonNullableFilter<"HistoryUser">
    userId?: UuidFilter<"HistoryUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type HistoryUserOrderByWithAggregationInput = {
    id?: SortOrder
    ts?: SortOrder
    type?: SortOrder
    options?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: HistoryUserCountOrderByAggregateInput
    _max?: HistoryUserMaxOrderByAggregateInput
    _min?: HistoryUserMinOrderByAggregateInput
  }

  export type HistoryUserScalarWhereWithAggregatesInput = {
    AND?: HistoryUserScalarWhereWithAggregatesInput | HistoryUserScalarWhereWithAggregatesInput[]
    OR?: HistoryUserScalarWhereWithAggregatesInput[]
    NOT?: HistoryUserScalarWhereWithAggregatesInput | HistoryUserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HistoryUser"> | string
    ts?: DateTimeWithAggregatesFilter<"HistoryUser"> | Date | string
    type?: EnumHistoryTypeWithAggregatesFilter<"HistoryUser"> | $Enums.HistoryType
    options?: JsonNullableWithAggregatesFilter<"HistoryUser">
    userId?: UuidWithAggregatesFilter<"HistoryUser"> | string
  }

  export type TrooperWhereInput = {
    AND?: TrooperWhereInput | TrooperWhereInput[]
    OR?: TrooperWhereInput[]
    NOT?: TrooperWhereInput | TrooperWhereInput[]
    id?: UuidFilter<"Trooper"> | string
    createdAt?: DateTimeFilter<"Trooper"> | Date | string
    userId?: UuidFilter<"Trooper"> | string
    name?: StringFilter<"Trooper"> | string
    choices?: IntNullableListFilter<"Trooper">
    group?: IntFilter<"Trooper"> | number
    seed?: IntFilter<"Trooper"> | number
    targetSystem?: IntFilter<"Trooper"> | number
    targetType?: IntFilter<"Trooper"> | number
    reloadSystem?: IntFilter<"Trooper"> | number
    moveSystem?: IntFilter<"Trooper"> | number
    CBody?: IntNullableFilter<"Trooper"> | number | null
    CWeapon?: IntNullableFilter<"Trooper"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TrooperOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    choices?: SortOrder
    group?: SortOrder
    seed?: SortOrder
    targetSystem?: SortOrder
    targetType?: SortOrder
    reloadSystem?: SortOrder
    moveSystem?: SortOrder
    CBody?: SortOrderInput | SortOrder
    CWeapon?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TrooperWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrooperWhereInput | TrooperWhereInput[]
    OR?: TrooperWhereInput[]
    NOT?: TrooperWhereInput | TrooperWhereInput[]
    createdAt?: DateTimeFilter<"Trooper"> | Date | string
    userId?: UuidFilter<"Trooper"> | string
    name?: StringFilter<"Trooper"> | string
    choices?: IntNullableListFilter<"Trooper">
    group?: IntFilter<"Trooper"> | number
    seed?: IntFilter<"Trooper"> | number
    targetSystem?: IntFilter<"Trooper"> | number
    targetType?: IntFilter<"Trooper"> | number
    reloadSystem?: IntFilter<"Trooper"> | number
    moveSystem?: IntFilter<"Trooper"> | number
    CBody?: IntNullableFilter<"Trooper"> | number | null
    CWeapon?: IntNullableFilter<"Trooper"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type TrooperOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    choices?: SortOrder
    group?: SortOrder
    seed?: SortOrder
    targetSystem?: SortOrder
    targetType?: SortOrder
    reloadSystem?: SortOrder
    moveSystem?: SortOrder
    CBody?: SortOrderInput | SortOrder
    CWeapon?: SortOrderInput | SortOrder
    _count?: TrooperCountOrderByAggregateInput
    _avg?: TrooperAvgOrderByAggregateInput
    _max?: TrooperMaxOrderByAggregateInput
    _min?: TrooperMinOrderByAggregateInput
    _sum?: TrooperSumOrderByAggregateInput
  }

  export type TrooperScalarWhereWithAggregatesInput = {
    AND?: TrooperScalarWhereWithAggregatesInput | TrooperScalarWhereWithAggregatesInput[]
    OR?: TrooperScalarWhereWithAggregatesInput[]
    NOT?: TrooperScalarWhereWithAggregatesInput | TrooperScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Trooper"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Trooper"> | Date | string
    userId?: UuidWithAggregatesFilter<"Trooper"> | string
    name?: StringWithAggregatesFilter<"Trooper"> | string
    choices?: IntNullableListFilter<"Trooper">
    group?: IntWithAggregatesFilter<"Trooper"> | number
    seed?: IntWithAggregatesFilter<"Trooper"> | number
    targetSystem?: IntWithAggregatesFilter<"Trooper"> | number
    targetType?: IntWithAggregatesFilter<"Trooper"> | number
    reloadSystem?: IntWithAggregatesFilter<"Trooper"> | number
    moveSystem?: IntWithAggregatesFilter<"Trooper"> | number
    CBody?: IntNullableWithAggregatesFilter<"Trooper"> | number | null
    CWeapon?: IntNullableWithAggregatesFilter<"Trooper"> | number | null
  }

  export type TrooperDayWhereInput = {
    AND?: TrooperDayWhereInput | TrooperDayWhereInput[]
    OR?: TrooperDayWhereInput[]
    NOT?: TrooperDayWhereInput | TrooperDayWhereInput[]
    id?: UuidFilter<"TrooperDay"> | string
    name?: StringFilter<"TrooperDay"> | string
    seed?: IntFilter<"TrooperDay"> | number
    choices?: IntNullableListFilter<"TrooperDay">
  }

  export type TrooperDayOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seed?: SortOrder
    choices?: SortOrder
  }

  export type TrooperDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrooperDayWhereInput | TrooperDayWhereInput[]
    OR?: TrooperDayWhereInput[]
    NOT?: TrooperDayWhereInput | TrooperDayWhereInput[]
    name?: StringFilter<"TrooperDay"> | string
    seed?: IntFilter<"TrooperDay"> | number
    choices?: IntNullableListFilter<"TrooperDay">
  }, "id" | "id">

  export type TrooperDayOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    seed?: SortOrder
    choices?: SortOrder
    _count?: TrooperDayCountOrderByAggregateInput
    _avg?: TrooperDayAvgOrderByAggregateInput
    _max?: TrooperDayMaxOrderByAggregateInput
    _min?: TrooperDayMinOrderByAggregateInput
    _sum?: TrooperDaySumOrderByAggregateInput
  }

  export type TrooperDayScalarWhereWithAggregatesInput = {
    AND?: TrooperDayScalarWhereWithAggregatesInput | TrooperDayScalarWhereWithAggregatesInput[]
    OR?: TrooperDayScalarWhereWithAggregatesInput[]
    NOT?: TrooperDayScalarWhereWithAggregatesInput | TrooperDayScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TrooperDay"> | string
    name?: StringWithAggregatesFilter<"TrooperDay"> | string
    seed?: IntWithAggregatesFilter<"TrooperDay"> | number
    choices?: IntNullableListFilter<"TrooperDay">
  }

  export type FightWhereInput = {
    AND?: FightWhereInput | FightWhereInput[]
    OR?: FightWhereInput[]
    NOT?: FightWhereInput | FightWhereInput[]
    id?: UuidFilter<"Fight"> | string
    userId?: UuidFilter<"Fight"> | string
    ts?: DateTimeFilter<"Fight"> | Date | string
    userName?: StringFilter<"Fight"> | string
    userPrefix?: IntFilter<"Fight"> | number
    opponentName?: StringFilter<"Fight"> | string
    opponentPrefix?: IntFilter<"Fight"> | number
    fightInputSWFData?: StringFilter<"Fight"> | string
    result?: EnumFightResultFilter<"Fight"> | $Enums.FightResult
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FightOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ts?: SortOrder
    userName?: SortOrder
    userPrefix?: SortOrder
    opponentName?: SortOrder
    opponentPrefix?: SortOrder
    fightInputSWFData?: SortOrder
    result?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FightWhereInput | FightWhereInput[]
    OR?: FightWhereInput[]
    NOT?: FightWhereInput | FightWhereInput[]
    userId?: UuidFilter<"Fight"> | string
    ts?: DateTimeFilter<"Fight"> | Date | string
    userName?: StringFilter<"Fight"> | string
    userPrefix?: IntFilter<"Fight"> | number
    opponentName?: StringFilter<"Fight"> | string
    opponentPrefix?: IntFilter<"Fight"> | number
    fightInputSWFData?: StringFilter<"Fight"> | string
    result?: EnumFightResultFilter<"Fight"> | $Enums.FightResult
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type FightOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ts?: SortOrder
    userName?: SortOrder
    userPrefix?: SortOrder
    opponentName?: SortOrder
    opponentPrefix?: SortOrder
    fightInputSWFData?: SortOrder
    result?: SortOrder
    _count?: FightCountOrderByAggregateInput
    _avg?: FightAvgOrderByAggregateInput
    _max?: FightMaxOrderByAggregateInput
    _min?: FightMinOrderByAggregateInput
    _sum?: FightSumOrderByAggregateInput
  }

  export type FightScalarWhereWithAggregatesInput = {
    AND?: FightScalarWhereWithAggregatesInput | FightScalarWhereWithAggregatesInput[]
    OR?: FightScalarWhereWithAggregatesInput[]
    NOT?: FightScalarWhereWithAggregatesInput | FightScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Fight"> | string
    userId?: UuidWithAggregatesFilter<"Fight"> | string
    ts?: DateTimeWithAggregatesFilter<"Fight"> | Date | string
    userName?: StringWithAggregatesFilter<"Fight"> | string
    userPrefix?: IntWithAggregatesFilter<"Fight"> | number
    opponentName?: StringWithAggregatesFilter<"Fight"> | string
    opponentPrefix?: IntWithAggregatesFilter<"Fight"> | number
    fightInputSWFData?: StringWithAggregatesFilter<"Fight"> | string
    result?: EnumFightResultWithAggregatesFilter<"Fight"> | $Enums.FightResult
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: UuidFilter<"Mission"> | string
    userId?: UuidFilter<"Mission"> | string
    ts?: DateTimeFilter<"Mission"> | Date | string
    type?: EnumMissionTypeFilter<"Mission"> | $Enums.MissionType
    missionInputSWFData?: StringFilter<"Mission"> | string
    result?: EnumFightResultFilter<"Mission"> | $Enums.FightResult
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ts?: SortOrder
    type?: SortOrder
    missionInputSWFData?: SortOrder
    result?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    userId?: UuidFilter<"Mission"> | string
    ts?: DateTimeFilter<"Mission"> | Date | string
    type?: EnumMissionTypeFilter<"Mission"> | $Enums.MissionType
    missionInputSWFData?: StringFilter<"Mission"> | string
    result?: EnumFightResultFilter<"Mission"> | $Enums.FightResult
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ts?: SortOrder
    type?: SortOrder
    missionInputSWFData?: SortOrder
    result?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Mission"> | string
    userId?: UuidWithAggregatesFilter<"Mission"> | string
    ts?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    type?: EnumMissionTypeWithAggregatesFilter<"Mission"> | $Enums.MissionType
    missionInputSWFData?: StringWithAggregatesFilter<"Mission"> | string
    result?: EnumFightResultWithAggregatesFilter<"Mission"> | $Enums.FightResult
  }

  export type UserCreateInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredBy?: UserCreateNestedOneWithoutSponsoredUsersInput
    sponsoredUsers?: UserCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperCreateNestedManyWithoutUserInput
    history?: HistoryUserCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserCreateNestedManyWithoutUserInput
    fights?: FightCreateNestedManyWithoutUserInput
    missions?: MissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    sponsoredById?: string | null
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredUsers?: UserUncheckedCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUserUncheckedCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserUncheckedCreateNestedManyWithoutUserInput
    fights?: FightUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredBy?: UserUpdateOneWithoutSponsoredUsersNestedInput
    sponsoredUsers?: UserUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUpdateManyWithoutUserNestedInput
    history?: HistoryUserUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUpdateManyWithoutUserNestedInput
    fights?: FightUpdateManyWithoutUserNestedInput
    missions?: MissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    sponsoredById?: NullableStringFieldUpdateOperationsInput | string | null
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredUsers?: UserUncheckedUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUserUncheckedUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUncheckedUpdateManyWithoutUserNestedInput
    fights?: FightUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    sponsoredById?: string | null
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    sponsoredById?: NullableStringFieldUpdateOperationsInput | string | null
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ipAddressUserCreateInput = {
    id?: string
    ip: string
    user: UserCreateNestedOneWithoutIpAddressUserInput
  }

  export type ipAddressUserUncheckedCreateInput = {
    id?: string
    userId: string
    ip: string
  }

  export type ipAddressUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutIpAddressUserNestedInput
  }

  export type ipAddressUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type ipAddressUserCreateManyInput = {
    id?: string
    userId: string
    ip: string
  }

  export type ipAddressUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type ipAddressUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryUserCreateInput = {
    id?: string
    ts?: Date | string
    type: $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUserUncheckedCreateInput = {
    id?: string
    ts?: Date | string
    type: $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
    userId: string
  }

  export type HistoryUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryUserCreateManyInput = {
    id?: string
    ts?: Date | string
    type: $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
    userId: string
  }

  export type HistoryUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HistoryUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TrooperCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    choices?: TrooperCreatechoicesInput | number[]
    group: number
    seed: number
    targetSystem?: number
    targetType?: number
    reloadSystem?: number
    moveSystem?: number
    CBody?: number | null
    CWeapon?: number | null
    user: UserCreateNestedOneWithoutTroopersInput
  }

  export type TrooperUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    name: string
    choices?: TrooperCreatechoicesInput | number[]
    group: number
    seed: number
    targetSystem?: number
    targetType?: number
    reloadSystem?: number
    moveSystem?: number
    CBody?: number | null
    CWeapon?: number | null
  }

  export type TrooperUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    choices?: TrooperUpdatechoicesInput | number[]
    group?: IntFieldUpdateOperationsInput | number
    seed?: IntFieldUpdateOperationsInput | number
    targetSystem?: IntFieldUpdateOperationsInput | number
    targetType?: IntFieldUpdateOperationsInput | number
    reloadSystem?: IntFieldUpdateOperationsInput | number
    moveSystem?: IntFieldUpdateOperationsInput | number
    CBody?: NullableIntFieldUpdateOperationsInput | number | null
    CWeapon?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutTroopersNestedInput
  }

  export type TrooperUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    choices?: TrooperUpdatechoicesInput | number[]
    group?: IntFieldUpdateOperationsInput | number
    seed?: IntFieldUpdateOperationsInput | number
    targetSystem?: IntFieldUpdateOperationsInput | number
    targetType?: IntFieldUpdateOperationsInput | number
    reloadSystem?: IntFieldUpdateOperationsInput | number
    moveSystem?: IntFieldUpdateOperationsInput | number
    CBody?: NullableIntFieldUpdateOperationsInput | number | null
    CWeapon?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrooperCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    name: string
    choices?: TrooperCreatechoicesInput | number[]
    group: number
    seed: number
    targetSystem?: number
    targetType?: number
    reloadSystem?: number
    moveSystem?: number
    CBody?: number | null
    CWeapon?: number | null
  }

  export type TrooperUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    choices?: TrooperUpdatechoicesInput | number[]
    group?: IntFieldUpdateOperationsInput | number
    seed?: IntFieldUpdateOperationsInput | number
    targetSystem?: IntFieldUpdateOperationsInput | number
    targetType?: IntFieldUpdateOperationsInput | number
    reloadSystem?: IntFieldUpdateOperationsInput | number
    moveSystem?: IntFieldUpdateOperationsInput | number
    CBody?: NullableIntFieldUpdateOperationsInput | number | null
    CWeapon?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrooperUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    choices?: TrooperUpdatechoicesInput | number[]
    group?: IntFieldUpdateOperationsInput | number
    seed?: IntFieldUpdateOperationsInput | number
    targetSystem?: IntFieldUpdateOperationsInput | number
    targetType?: IntFieldUpdateOperationsInput | number
    reloadSystem?: IntFieldUpdateOperationsInput | number
    moveSystem?: IntFieldUpdateOperationsInput | number
    CBody?: NullableIntFieldUpdateOperationsInput | number | null
    CWeapon?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrooperDayCreateInput = {
    id?: string
    name: string
    seed: number
    choices?: TrooperDayCreatechoicesInput | number[]
  }

  export type TrooperDayUncheckedCreateInput = {
    id?: string
    name: string
    seed: number
    choices?: TrooperDayCreatechoicesInput | number[]
  }

  export type TrooperDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seed?: IntFieldUpdateOperationsInput | number
    choices?: TrooperDayUpdatechoicesInput | number[]
  }

  export type TrooperDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seed?: IntFieldUpdateOperationsInput | number
    choices?: TrooperDayUpdatechoicesInput | number[]
  }

  export type TrooperDayCreateManyInput = {
    id?: string
    name: string
    seed: number
    choices?: TrooperDayCreatechoicesInput | number[]
  }

  export type TrooperDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seed?: IntFieldUpdateOperationsInput | number
    choices?: TrooperDayUpdatechoicesInput | number[]
  }

  export type TrooperDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seed?: IntFieldUpdateOperationsInput | number
    choices?: TrooperDayUpdatechoicesInput | number[]
  }

  export type FightCreateInput = {
    id?: string
    ts?: Date | string
    userName: string
    userPrefix: number
    opponentName: string
    opponentPrefix: number
    fightInputSWFData: string
    result: $Enums.FightResult
    user: UserCreateNestedOneWithoutFightsInput
  }

  export type FightUncheckedCreateInput = {
    id?: string
    userId: string
    ts?: Date | string
    userName: string
    userPrefix: number
    opponentName: string
    opponentPrefix: number
    fightInputSWFData: string
    result: $Enums.FightResult
  }

  export type FightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    userPrefix?: IntFieldUpdateOperationsInput | number
    opponentName?: StringFieldUpdateOperationsInput | string
    opponentPrefix?: IntFieldUpdateOperationsInput | number
    fightInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
    user?: UserUpdateOneRequiredWithoutFightsNestedInput
  }

  export type FightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    userPrefix?: IntFieldUpdateOperationsInput | number
    opponentName?: StringFieldUpdateOperationsInput | string
    opponentPrefix?: IntFieldUpdateOperationsInput | number
    fightInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type FightCreateManyInput = {
    id?: string
    userId: string
    ts?: Date | string
    userName: string
    userPrefix: number
    opponentName: string
    opponentPrefix: number
    fightInputSWFData: string
    result: $Enums.FightResult
  }

  export type FightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    userPrefix?: IntFieldUpdateOperationsInput | number
    opponentName?: StringFieldUpdateOperationsInput | string
    opponentPrefix?: IntFieldUpdateOperationsInput | number
    fightInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type FightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    userPrefix?: IntFieldUpdateOperationsInput | number
    opponentName?: StringFieldUpdateOperationsInput | string
    opponentPrefix?: IntFieldUpdateOperationsInput | number
    fightInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type MissionCreateInput = {
    id?: string
    ts?: Date | string
    type: $Enums.MissionType
    missionInputSWFData: string
    result: $Enums.FightResult
    user: UserCreateNestedOneWithoutMissionsInput
  }

  export type MissionUncheckedCreateInput = {
    id?: string
    userId: string
    ts?: Date | string
    type: $Enums.MissionType
    missionInputSWFData: string
    result: $Enums.FightResult
  }

  export type MissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    missionInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
    user?: UserUpdateOneRequiredWithoutMissionsNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    missionInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type MissionCreateManyInput = {
    id?: string
    userId: string
    ts?: Date | string
    type: $Enums.MissionType
    missionInputSWFData: string
    result: $Enums.FightResult
  }

  export type MissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    missionInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    missionInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumLangFilter<$PrismaModel = never> = {
    equals?: $Enums.Lang | EnumLangFieldRefInput<$PrismaModel>
    in?: $Enums.Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    not?: NestedEnumLangFilter<$PrismaModel> | $Enums.Lang
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TrooperListRelationFilter = {
    every?: TrooperWhereInput
    some?: TrooperWhereInput
    none?: TrooperWhereInput
  }

  export type HistoryUserListRelationFilter = {
    every?: HistoryUserWhereInput
    some?: HistoryUserWhereInput
    none?: HistoryUserWhereInput
  }

  export type IpAddressUserListRelationFilter = {
    every?: ipAddressUserWhereInput
    some?: ipAddressUserWhereInput
    none?: ipAddressUserWhereInput
  }

  export type FightListRelationFilter = {
    every?: FightWhereInput
    some?: FightWhereInput
    none?: FightWhereInput
  }

  export type MissionListRelationFilter = {
    every?: MissionWhereInput
    some?: MissionWhereInput
    none?: MissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrooperOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ipAddressUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastConnexion?: SortOrder
    admin?: SortOrder
    connexionToken?: SortOrder
    gold?: SortOrder
    power?: SortOrder
    armyName?: SortOrder
    armyUrl?: SortOrder
    prefix?: SortOrder
    color?: SortOrder
    sponsoredById?: SortOrder
    referralGold?: SortOrder
    ratsCount?: SortOrder
    infiltrationOpponentArmy?: SortOrder
    infiltrationOpponentDate?: SortOrder
    infiltrationUnlockAt?: SortOrder
    exterminationUnlockAt?: SortOrder
    epicUnlockAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    gold?: SortOrder
    power?: SortOrder
    prefix?: SortOrder
    color?: SortOrder
    referralGold?: SortOrder
    ratsCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastConnexion?: SortOrder
    admin?: SortOrder
    connexionToken?: SortOrder
    gold?: SortOrder
    power?: SortOrder
    armyName?: SortOrder
    armyUrl?: SortOrder
    prefix?: SortOrder
    color?: SortOrder
    sponsoredById?: SortOrder
    referralGold?: SortOrder
    ratsCount?: SortOrder
    infiltrationOpponentArmy?: SortOrder
    infiltrationOpponentDate?: SortOrder
    infiltrationUnlockAt?: SortOrder
    exterminationUnlockAt?: SortOrder
    epicUnlockAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    lang?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastConnexion?: SortOrder
    admin?: SortOrder
    connexionToken?: SortOrder
    gold?: SortOrder
    power?: SortOrder
    armyName?: SortOrder
    armyUrl?: SortOrder
    prefix?: SortOrder
    color?: SortOrder
    sponsoredById?: SortOrder
    referralGold?: SortOrder
    ratsCount?: SortOrder
    infiltrationOpponentArmy?: SortOrder
    infiltrationOpponentDate?: SortOrder
    infiltrationUnlockAt?: SortOrder
    exterminationUnlockAt?: SortOrder
    epicUnlockAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    gold?: SortOrder
    power?: SortOrder
    prefix?: SortOrder
    color?: SortOrder
    referralGold?: SortOrder
    ratsCount?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumLangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Lang | EnumLangFieldRefInput<$PrismaModel>
    in?: $Enums.Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    not?: NestedEnumLangWithAggregatesFilter<$PrismaModel> | $Enums.Lang
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLangFilter<$PrismaModel>
    _max?: NestedEnumLangFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ipAddressUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
  }

  export type ipAddressUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
  }

  export type ipAddressUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
  }

  export type EnumHistoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryType | EnumHistoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryTypeFilter<$PrismaModel> | $Enums.HistoryType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type HistoryUserCountOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    type?: SortOrder
    options?: SortOrder
    userId?: SortOrder
  }

  export type HistoryUserMaxOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type HistoryUserMinOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type EnumHistoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryType | EnumHistoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.HistoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHistoryTypeFilter<$PrismaModel>
    _max?: NestedEnumHistoryTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TrooperCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    choices?: SortOrder
    group?: SortOrder
    seed?: SortOrder
    targetSystem?: SortOrder
    targetType?: SortOrder
    reloadSystem?: SortOrder
    moveSystem?: SortOrder
    CBody?: SortOrder
    CWeapon?: SortOrder
  }

  export type TrooperAvgOrderByAggregateInput = {
    choices?: SortOrder
    group?: SortOrder
    seed?: SortOrder
    targetSystem?: SortOrder
    targetType?: SortOrder
    reloadSystem?: SortOrder
    moveSystem?: SortOrder
    CBody?: SortOrder
    CWeapon?: SortOrder
  }

  export type TrooperMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    group?: SortOrder
    seed?: SortOrder
    targetSystem?: SortOrder
    targetType?: SortOrder
    reloadSystem?: SortOrder
    moveSystem?: SortOrder
    CBody?: SortOrder
    CWeapon?: SortOrder
  }

  export type TrooperMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    group?: SortOrder
    seed?: SortOrder
    targetSystem?: SortOrder
    targetType?: SortOrder
    reloadSystem?: SortOrder
    moveSystem?: SortOrder
    CBody?: SortOrder
    CWeapon?: SortOrder
  }

  export type TrooperSumOrderByAggregateInput = {
    choices?: SortOrder
    group?: SortOrder
    seed?: SortOrder
    targetSystem?: SortOrder
    targetType?: SortOrder
    reloadSystem?: SortOrder
    moveSystem?: SortOrder
    CBody?: SortOrder
    CWeapon?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TrooperDayCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seed?: SortOrder
    choices?: SortOrder
  }

  export type TrooperDayAvgOrderByAggregateInput = {
    seed?: SortOrder
    choices?: SortOrder
  }

  export type TrooperDayMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seed?: SortOrder
  }

  export type TrooperDayMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seed?: SortOrder
  }

  export type TrooperDaySumOrderByAggregateInput = {
    seed?: SortOrder
    choices?: SortOrder
  }

  export type EnumFightResultFilter<$PrismaModel = never> = {
    equals?: $Enums.FightResult | EnumFightResultFieldRefInput<$PrismaModel>
    in?: $Enums.FightResult[] | ListEnumFightResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.FightResult[] | ListEnumFightResultFieldRefInput<$PrismaModel>
    not?: NestedEnumFightResultFilter<$PrismaModel> | $Enums.FightResult
  }

  export type FightCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ts?: SortOrder
    userName?: SortOrder
    userPrefix?: SortOrder
    opponentName?: SortOrder
    opponentPrefix?: SortOrder
    fightInputSWFData?: SortOrder
    result?: SortOrder
  }

  export type FightAvgOrderByAggregateInput = {
    userPrefix?: SortOrder
    opponentPrefix?: SortOrder
  }

  export type FightMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ts?: SortOrder
    userName?: SortOrder
    userPrefix?: SortOrder
    opponentName?: SortOrder
    opponentPrefix?: SortOrder
    fightInputSWFData?: SortOrder
    result?: SortOrder
  }

  export type FightMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ts?: SortOrder
    userName?: SortOrder
    userPrefix?: SortOrder
    opponentName?: SortOrder
    opponentPrefix?: SortOrder
    fightInputSWFData?: SortOrder
    result?: SortOrder
  }

  export type FightSumOrderByAggregateInput = {
    userPrefix?: SortOrder
    opponentPrefix?: SortOrder
  }

  export type EnumFightResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FightResult | EnumFightResultFieldRefInput<$PrismaModel>
    in?: $Enums.FightResult[] | ListEnumFightResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.FightResult[] | ListEnumFightResultFieldRefInput<$PrismaModel>
    not?: NestedEnumFightResultWithAggregatesFilter<$PrismaModel> | $Enums.FightResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFightResultFilter<$PrismaModel>
    _max?: NestedEnumFightResultFilter<$PrismaModel>
  }

  export type EnumMissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeFilter<$PrismaModel> | $Enums.MissionType
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ts?: SortOrder
    type?: SortOrder
    missionInputSWFData?: SortOrder
    result?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ts?: SortOrder
    type?: SortOrder
    missionInputSWFData?: SortOrder
    result?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ts?: SortOrder
    type?: SortOrder
    missionInputSWFData?: SortOrder
    result?: SortOrder
  }

  export type EnumMissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionTypeFilter<$PrismaModel>
    _max?: NestedEnumMissionTypeFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutSponsoredUsersInput = {
    create?: XOR<UserCreateWithoutSponsoredUsersInput, UserUncheckedCreateWithoutSponsoredUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSponsoredUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutSponsoredByInput = {
    create?: XOR<UserCreateWithoutSponsoredByInput, UserUncheckedCreateWithoutSponsoredByInput> | UserCreateWithoutSponsoredByInput[] | UserUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSponsoredByInput | UserCreateOrConnectWithoutSponsoredByInput[]
    createMany?: UserCreateManySponsoredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TrooperCreateNestedManyWithoutUserInput = {
    create?: XOR<TrooperCreateWithoutUserInput, TrooperUncheckedCreateWithoutUserInput> | TrooperCreateWithoutUserInput[] | TrooperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrooperCreateOrConnectWithoutUserInput | TrooperCreateOrConnectWithoutUserInput[]
    createMany?: TrooperCreateManyUserInputEnvelope
    connect?: TrooperWhereUniqueInput | TrooperWhereUniqueInput[]
  }

  export type HistoryUserCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryUserCreateWithoutUserInput, HistoryUserUncheckedCreateWithoutUserInput> | HistoryUserCreateWithoutUserInput[] | HistoryUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryUserCreateOrConnectWithoutUserInput | HistoryUserCreateOrConnectWithoutUserInput[]
    createMany?: HistoryUserCreateManyUserInputEnvelope
    connect?: HistoryUserWhereUniqueInput | HistoryUserWhereUniqueInput[]
  }

  export type ipAddressUserCreateNestedManyWithoutUserInput = {
    create?: XOR<ipAddressUserCreateWithoutUserInput, ipAddressUserUncheckedCreateWithoutUserInput> | ipAddressUserCreateWithoutUserInput[] | ipAddressUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ipAddressUserCreateOrConnectWithoutUserInput | ipAddressUserCreateOrConnectWithoutUserInput[]
    createMany?: ipAddressUserCreateManyUserInputEnvelope
    connect?: ipAddressUserWhereUniqueInput | ipAddressUserWhereUniqueInput[]
  }

  export type FightCreateNestedManyWithoutUserInput = {
    create?: XOR<FightCreateWithoutUserInput, FightUncheckedCreateWithoutUserInput> | FightCreateWithoutUserInput[] | FightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FightCreateOrConnectWithoutUserInput | FightCreateOrConnectWithoutUserInput[]
    createMany?: FightCreateManyUserInputEnvelope
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
  }

  export type MissionCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput> | MissionCreateWithoutUserInput[] | MissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutUserInput | MissionCreateOrConnectWithoutUserInput[]
    createMany?: MissionCreateManyUserInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSponsoredByInput = {
    create?: XOR<UserCreateWithoutSponsoredByInput, UserUncheckedCreateWithoutSponsoredByInput> | UserCreateWithoutSponsoredByInput[] | UserUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSponsoredByInput | UserCreateOrConnectWithoutSponsoredByInput[]
    createMany?: UserCreateManySponsoredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TrooperUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrooperCreateWithoutUserInput, TrooperUncheckedCreateWithoutUserInput> | TrooperCreateWithoutUserInput[] | TrooperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrooperCreateOrConnectWithoutUserInput | TrooperCreateOrConnectWithoutUserInput[]
    createMany?: TrooperCreateManyUserInputEnvelope
    connect?: TrooperWhereUniqueInput | TrooperWhereUniqueInput[]
  }

  export type HistoryUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryUserCreateWithoutUserInput, HistoryUserUncheckedCreateWithoutUserInput> | HistoryUserCreateWithoutUserInput[] | HistoryUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryUserCreateOrConnectWithoutUserInput | HistoryUserCreateOrConnectWithoutUserInput[]
    createMany?: HistoryUserCreateManyUserInputEnvelope
    connect?: HistoryUserWhereUniqueInput | HistoryUserWhereUniqueInput[]
  }

  export type ipAddressUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ipAddressUserCreateWithoutUserInput, ipAddressUserUncheckedCreateWithoutUserInput> | ipAddressUserCreateWithoutUserInput[] | ipAddressUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ipAddressUserCreateOrConnectWithoutUserInput | ipAddressUserCreateOrConnectWithoutUserInput[]
    createMany?: ipAddressUserCreateManyUserInputEnvelope
    connect?: ipAddressUserWhereUniqueInput | ipAddressUserWhereUniqueInput[]
  }

  export type FightUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FightCreateWithoutUserInput, FightUncheckedCreateWithoutUserInput> | FightCreateWithoutUserInput[] | FightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FightCreateOrConnectWithoutUserInput | FightCreateOrConnectWithoutUserInput[]
    createMany?: FightCreateManyUserInputEnvelope
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput> | MissionCreateWithoutUserInput[] | MissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutUserInput | MissionCreateOrConnectWithoutUserInput[]
    createMany?: MissionCreateManyUserInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumLangFieldUpdateOperationsInput = {
    set?: $Enums.Lang
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutSponsoredUsersNestedInput = {
    create?: XOR<UserCreateWithoutSponsoredUsersInput, UserUncheckedCreateWithoutSponsoredUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSponsoredUsersInput
    upsert?: UserUpsertWithoutSponsoredUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSponsoredUsersInput, UserUpdateWithoutSponsoredUsersInput>, UserUncheckedUpdateWithoutSponsoredUsersInput>
  }

  export type UserUpdateManyWithoutSponsoredByNestedInput = {
    create?: XOR<UserCreateWithoutSponsoredByInput, UserUncheckedCreateWithoutSponsoredByInput> | UserCreateWithoutSponsoredByInput[] | UserUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSponsoredByInput | UserCreateOrConnectWithoutSponsoredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSponsoredByInput | UserUpsertWithWhereUniqueWithoutSponsoredByInput[]
    createMany?: UserCreateManySponsoredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSponsoredByInput | UserUpdateWithWhereUniqueWithoutSponsoredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSponsoredByInput | UserUpdateManyWithWhereWithoutSponsoredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TrooperUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrooperCreateWithoutUserInput, TrooperUncheckedCreateWithoutUserInput> | TrooperCreateWithoutUserInput[] | TrooperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrooperCreateOrConnectWithoutUserInput | TrooperCreateOrConnectWithoutUserInput[]
    upsert?: TrooperUpsertWithWhereUniqueWithoutUserInput | TrooperUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrooperCreateManyUserInputEnvelope
    set?: TrooperWhereUniqueInput | TrooperWhereUniqueInput[]
    disconnect?: TrooperWhereUniqueInput | TrooperWhereUniqueInput[]
    delete?: TrooperWhereUniqueInput | TrooperWhereUniqueInput[]
    connect?: TrooperWhereUniqueInput | TrooperWhereUniqueInput[]
    update?: TrooperUpdateWithWhereUniqueWithoutUserInput | TrooperUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrooperUpdateManyWithWhereWithoutUserInput | TrooperUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrooperScalarWhereInput | TrooperScalarWhereInput[]
  }

  export type HistoryUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryUserCreateWithoutUserInput, HistoryUserUncheckedCreateWithoutUserInput> | HistoryUserCreateWithoutUserInput[] | HistoryUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryUserCreateOrConnectWithoutUserInput | HistoryUserCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUserUpsertWithWhereUniqueWithoutUserInput | HistoryUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryUserCreateManyUserInputEnvelope
    set?: HistoryUserWhereUniqueInput | HistoryUserWhereUniqueInput[]
    disconnect?: HistoryUserWhereUniqueInput | HistoryUserWhereUniqueInput[]
    delete?: HistoryUserWhereUniqueInput | HistoryUserWhereUniqueInput[]
    connect?: HistoryUserWhereUniqueInput | HistoryUserWhereUniqueInput[]
    update?: HistoryUserUpdateWithWhereUniqueWithoutUserInput | HistoryUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUserUpdateManyWithWhereWithoutUserInput | HistoryUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryUserScalarWhereInput | HistoryUserScalarWhereInput[]
  }

  export type ipAddressUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<ipAddressUserCreateWithoutUserInput, ipAddressUserUncheckedCreateWithoutUserInput> | ipAddressUserCreateWithoutUserInput[] | ipAddressUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ipAddressUserCreateOrConnectWithoutUserInput | ipAddressUserCreateOrConnectWithoutUserInput[]
    upsert?: ipAddressUserUpsertWithWhereUniqueWithoutUserInput | ipAddressUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ipAddressUserCreateManyUserInputEnvelope
    set?: ipAddressUserWhereUniqueInput | ipAddressUserWhereUniqueInput[]
    disconnect?: ipAddressUserWhereUniqueInput | ipAddressUserWhereUniqueInput[]
    delete?: ipAddressUserWhereUniqueInput | ipAddressUserWhereUniqueInput[]
    connect?: ipAddressUserWhereUniqueInput | ipAddressUserWhereUniqueInput[]
    update?: ipAddressUserUpdateWithWhereUniqueWithoutUserInput | ipAddressUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ipAddressUserUpdateManyWithWhereWithoutUserInput | ipAddressUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ipAddressUserScalarWhereInput | ipAddressUserScalarWhereInput[]
  }

  export type FightUpdateManyWithoutUserNestedInput = {
    create?: XOR<FightCreateWithoutUserInput, FightUncheckedCreateWithoutUserInput> | FightCreateWithoutUserInput[] | FightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FightCreateOrConnectWithoutUserInput | FightCreateOrConnectWithoutUserInput[]
    upsert?: FightUpsertWithWhereUniqueWithoutUserInput | FightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FightCreateManyUserInputEnvelope
    set?: FightWhereUniqueInput | FightWhereUniqueInput[]
    disconnect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    delete?: FightWhereUniqueInput | FightWhereUniqueInput[]
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    update?: FightUpdateWithWhereUniqueWithoutUserInput | FightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FightUpdateManyWithWhereWithoutUserInput | FightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FightScalarWhereInput | FightScalarWhereInput[]
  }

  export type MissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput> | MissionCreateWithoutUserInput[] | MissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutUserInput | MissionCreateOrConnectWithoutUserInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutUserInput | MissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionCreateManyUserInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutUserInput | MissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutUserInput | MissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSponsoredByNestedInput = {
    create?: XOR<UserCreateWithoutSponsoredByInput, UserUncheckedCreateWithoutSponsoredByInput> | UserCreateWithoutSponsoredByInput[] | UserUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSponsoredByInput | UserCreateOrConnectWithoutSponsoredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSponsoredByInput | UserUpsertWithWhereUniqueWithoutSponsoredByInput[]
    createMany?: UserCreateManySponsoredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSponsoredByInput | UserUpdateWithWhereUniqueWithoutSponsoredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSponsoredByInput | UserUpdateManyWithWhereWithoutSponsoredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TrooperUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrooperCreateWithoutUserInput, TrooperUncheckedCreateWithoutUserInput> | TrooperCreateWithoutUserInput[] | TrooperUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrooperCreateOrConnectWithoutUserInput | TrooperCreateOrConnectWithoutUserInput[]
    upsert?: TrooperUpsertWithWhereUniqueWithoutUserInput | TrooperUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrooperCreateManyUserInputEnvelope
    set?: TrooperWhereUniqueInput | TrooperWhereUniqueInput[]
    disconnect?: TrooperWhereUniqueInput | TrooperWhereUniqueInput[]
    delete?: TrooperWhereUniqueInput | TrooperWhereUniqueInput[]
    connect?: TrooperWhereUniqueInput | TrooperWhereUniqueInput[]
    update?: TrooperUpdateWithWhereUniqueWithoutUserInput | TrooperUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrooperUpdateManyWithWhereWithoutUserInput | TrooperUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrooperScalarWhereInput | TrooperScalarWhereInput[]
  }

  export type HistoryUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryUserCreateWithoutUserInput, HistoryUserUncheckedCreateWithoutUserInput> | HistoryUserCreateWithoutUserInput[] | HistoryUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryUserCreateOrConnectWithoutUserInput | HistoryUserCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUserUpsertWithWhereUniqueWithoutUserInput | HistoryUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryUserCreateManyUserInputEnvelope
    set?: HistoryUserWhereUniqueInput | HistoryUserWhereUniqueInput[]
    disconnect?: HistoryUserWhereUniqueInput | HistoryUserWhereUniqueInput[]
    delete?: HistoryUserWhereUniqueInput | HistoryUserWhereUniqueInput[]
    connect?: HistoryUserWhereUniqueInput | HistoryUserWhereUniqueInput[]
    update?: HistoryUserUpdateWithWhereUniqueWithoutUserInput | HistoryUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUserUpdateManyWithWhereWithoutUserInput | HistoryUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryUserScalarWhereInput | HistoryUserScalarWhereInput[]
  }

  export type ipAddressUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ipAddressUserCreateWithoutUserInput, ipAddressUserUncheckedCreateWithoutUserInput> | ipAddressUserCreateWithoutUserInput[] | ipAddressUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ipAddressUserCreateOrConnectWithoutUserInput | ipAddressUserCreateOrConnectWithoutUserInput[]
    upsert?: ipAddressUserUpsertWithWhereUniqueWithoutUserInput | ipAddressUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ipAddressUserCreateManyUserInputEnvelope
    set?: ipAddressUserWhereUniqueInput | ipAddressUserWhereUniqueInput[]
    disconnect?: ipAddressUserWhereUniqueInput | ipAddressUserWhereUniqueInput[]
    delete?: ipAddressUserWhereUniqueInput | ipAddressUserWhereUniqueInput[]
    connect?: ipAddressUserWhereUniqueInput | ipAddressUserWhereUniqueInput[]
    update?: ipAddressUserUpdateWithWhereUniqueWithoutUserInput | ipAddressUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ipAddressUserUpdateManyWithWhereWithoutUserInput | ipAddressUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ipAddressUserScalarWhereInput | ipAddressUserScalarWhereInput[]
  }

  export type FightUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FightCreateWithoutUserInput, FightUncheckedCreateWithoutUserInput> | FightCreateWithoutUserInput[] | FightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FightCreateOrConnectWithoutUserInput | FightCreateOrConnectWithoutUserInput[]
    upsert?: FightUpsertWithWhereUniqueWithoutUserInput | FightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FightCreateManyUserInputEnvelope
    set?: FightWhereUniqueInput | FightWhereUniqueInput[]
    disconnect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    delete?: FightWhereUniqueInput | FightWhereUniqueInput[]
    connect?: FightWhereUniqueInput | FightWhereUniqueInput[]
    update?: FightUpdateWithWhereUniqueWithoutUserInput | FightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FightUpdateManyWithWhereWithoutUserInput | FightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FightScalarWhereInput | FightScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput> | MissionCreateWithoutUserInput[] | MissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutUserInput | MissionCreateOrConnectWithoutUserInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutUserInput | MissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionCreateManyUserInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutUserInput | MissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutUserInput | MissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIpAddressUserInput = {
    create?: XOR<UserCreateWithoutIpAddressUserInput, UserUncheckedCreateWithoutIpAddressUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutIpAddressUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutIpAddressUserNestedInput = {
    create?: XOR<UserCreateWithoutIpAddressUserInput, UserUncheckedCreateWithoutIpAddressUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutIpAddressUserInput
    upsert?: UserUpsertWithoutIpAddressUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIpAddressUserInput, UserUpdateWithoutIpAddressUserInput>, UserUncheckedUpdateWithoutIpAddressUserInput>
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EnumHistoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.HistoryType
  }

  export type UserUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type TrooperCreatechoicesInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutTroopersInput = {
    create?: XOR<UserCreateWithoutTroopersInput, UserUncheckedCreateWithoutTroopersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTroopersInput
    connect?: UserWhereUniqueInput
  }

  export type TrooperUpdatechoicesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTroopersNestedInput = {
    create?: XOR<UserCreateWithoutTroopersInput, UserUncheckedCreateWithoutTroopersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTroopersInput
    upsert?: UserUpsertWithoutTroopersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTroopersInput, UserUpdateWithoutTroopersInput>, UserUncheckedUpdateWithoutTroopersInput>
  }

  export type TrooperDayCreatechoicesInput = {
    set: number[]
  }

  export type TrooperDayUpdatechoicesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserCreateNestedOneWithoutFightsInput = {
    create?: XOR<UserCreateWithoutFightsInput, UserUncheckedCreateWithoutFightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFightsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFightResultFieldUpdateOperationsInput = {
    set?: $Enums.FightResult
  }

  export type UserUpdateOneRequiredWithoutFightsNestedInput = {
    create?: XOR<UserCreateWithoutFightsInput, UserUncheckedCreateWithoutFightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFightsInput
    upsert?: UserUpsertWithoutFightsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFightsInput, UserUpdateWithoutFightsInput>, UserUncheckedUpdateWithoutFightsInput>
  }

  export type UserCreateNestedOneWithoutMissionsInput = {
    create?: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMissionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.MissionType
  }

  export type UserUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMissionsInput
    upsert?: UserUpsertWithoutMissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMissionsInput, UserUpdateWithoutMissionsInput>, UserUncheckedUpdateWithoutMissionsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumLangFilter<$PrismaModel = never> = {
    equals?: $Enums.Lang | EnumLangFieldRefInput<$PrismaModel>
    in?: $Enums.Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    not?: NestedEnumLangFilter<$PrismaModel> | $Enums.Lang
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumLangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Lang | EnumLangFieldRefInput<$PrismaModel>
    in?: $Enums.Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lang[] | ListEnumLangFieldRefInput<$PrismaModel>
    not?: NestedEnumLangWithAggregatesFilter<$PrismaModel> | $Enums.Lang
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLangFilter<$PrismaModel>
    _max?: NestedEnumLangFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumHistoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryType | EnumHistoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryTypeFilter<$PrismaModel> | $Enums.HistoryType
  }

  export type NestedEnumHistoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryType | EnumHistoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryType[] | ListEnumHistoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.HistoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHistoryTypeFilter<$PrismaModel>
    _max?: NestedEnumHistoryTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFightResultFilter<$PrismaModel = never> = {
    equals?: $Enums.FightResult | EnumFightResultFieldRefInput<$PrismaModel>
    in?: $Enums.FightResult[] | ListEnumFightResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.FightResult[] | ListEnumFightResultFieldRefInput<$PrismaModel>
    not?: NestedEnumFightResultFilter<$PrismaModel> | $Enums.FightResult
  }

  export type NestedEnumFightResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FightResult | EnumFightResultFieldRefInput<$PrismaModel>
    in?: $Enums.FightResult[] | ListEnumFightResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.FightResult[] | ListEnumFightResultFieldRefInput<$PrismaModel>
    not?: NestedEnumFightResultWithAggregatesFilter<$PrismaModel> | $Enums.FightResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFightResultFilter<$PrismaModel>
    _max?: NestedEnumFightResultFilter<$PrismaModel>
  }

  export type NestedEnumMissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeFilter<$PrismaModel> | $Enums.MissionType
  }

  export type NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionTypeFilter<$PrismaModel>
    _max?: NestedEnumMissionTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutSponsoredUsersInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredBy?: UserCreateNestedOneWithoutSponsoredUsersInput
    troopers?: TrooperCreateNestedManyWithoutUserInput
    history?: HistoryUserCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserCreateNestedManyWithoutUserInput
    fights?: FightCreateNestedManyWithoutUserInput
    missions?: MissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSponsoredUsersInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    sponsoredById?: string | null
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    troopers?: TrooperUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUserUncheckedCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserUncheckedCreateNestedManyWithoutUserInput
    fights?: FightUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSponsoredUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSponsoredUsersInput, UserUncheckedCreateWithoutSponsoredUsersInput>
  }

  export type UserCreateWithoutSponsoredByInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredUsers?: UserCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperCreateNestedManyWithoutUserInput
    history?: HistoryUserCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserCreateNestedManyWithoutUserInput
    fights?: FightCreateNestedManyWithoutUserInput
    missions?: MissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSponsoredByInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredUsers?: UserUncheckedCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUserUncheckedCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserUncheckedCreateNestedManyWithoutUserInput
    fights?: FightUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSponsoredByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSponsoredByInput, UserUncheckedCreateWithoutSponsoredByInput>
  }

  export type UserCreateManySponsoredByInputEnvelope = {
    data: UserCreateManySponsoredByInput | UserCreateManySponsoredByInput[]
    skipDuplicates?: boolean
  }

  export type TrooperCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    name: string
    choices?: TrooperCreatechoicesInput | number[]
    group: number
    seed: number
    targetSystem?: number
    targetType?: number
    reloadSystem?: number
    moveSystem?: number
    CBody?: number | null
    CWeapon?: number | null
  }

  export type TrooperUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    name: string
    choices?: TrooperCreatechoicesInput | number[]
    group: number
    seed: number
    targetSystem?: number
    targetType?: number
    reloadSystem?: number
    moveSystem?: number
    CBody?: number | null
    CWeapon?: number | null
  }

  export type TrooperCreateOrConnectWithoutUserInput = {
    where: TrooperWhereUniqueInput
    create: XOR<TrooperCreateWithoutUserInput, TrooperUncheckedCreateWithoutUserInput>
  }

  export type TrooperCreateManyUserInputEnvelope = {
    data: TrooperCreateManyUserInput | TrooperCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoryUserCreateWithoutUserInput = {
    id?: string
    ts?: Date | string
    type: $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HistoryUserUncheckedCreateWithoutUserInput = {
    id?: string
    ts?: Date | string
    type: $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HistoryUserCreateOrConnectWithoutUserInput = {
    where: HistoryUserWhereUniqueInput
    create: XOR<HistoryUserCreateWithoutUserInput, HistoryUserUncheckedCreateWithoutUserInput>
  }

  export type HistoryUserCreateManyUserInputEnvelope = {
    data: HistoryUserCreateManyUserInput | HistoryUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ipAddressUserCreateWithoutUserInput = {
    id?: string
    ip: string
  }

  export type ipAddressUserUncheckedCreateWithoutUserInput = {
    id?: string
    ip: string
  }

  export type ipAddressUserCreateOrConnectWithoutUserInput = {
    where: ipAddressUserWhereUniqueInput
    create: XOR<ipAddressUserCreateWithoutUserInput, ipAddressUserUncheckedCreateWithoutUserInput>
  }

  export type ipAddressUserCreateManyUserInputEnvelope = {
    data: ipAddressUserCreateManyUserInput | ipAddressUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FightCreateWithoutUserInput = {
    id?: string
    ts?: Date | string
    userName: string
    userPrefix: number
    opponentName: string
    opponentPrefix: number
    fightInputSWFData: string
    result: $Enums.FightResult
  }

  export type FightUncheckedCreateWithoutUserInput = {
    id?: string
    ts?: Date | string
    userName: string
    userPrefix: number
    opponentName: string
    opponentPrefix: number
    fightInputSWFData: string
    result: $Enums.FightResult
  }

  export type FightCreateOrConnectWithoutUserInput = {
    where: FightWhereUniqueInput
    create: XOR<FightCreateWithoutUserInput, FightUncheckedCreateWithoutUserInput>
  }

  export type FightCreateManyUserInputEnvelope = {
    data: FightCreateManyUserInput | FightCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MissionCreateWithoutUserInput = {
    id?: string
    ts?: Date | string
    type: $Enums.MissionType
    missionInputSWFData: string
    result: $Enums.FightResult
  }

  export type MissionUncheckedCreateWithoutUserInput = {
    id?: string
    ts?: Date | string
    type: $Enums.MissionType
    missionInputSWFData: string
    result: $Enums.FightResult
  }

  export type MissionCreateOrConnectWithoutUserInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput>
  }

  export type MissionCreateManyUserInputEnvelope = {
    data: MissionCreateManyUserInput | MissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSponsoredUsersInput = {
    update: XOR<UserUpdateWithoutSponsoredUsersInput, UserUncheckedUpdateWithoutSponsoredUsersInput>
    create: XOR<UserCreateWithoutSponsoredUsersInput, UserUncheckedCreateWithoutSponsoredUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSponsoredUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSponsoredUsersInput, UserUncheckedUpdateWithoutSponsoredUsersInput>
  }

  export type UserUpdateWithoutSponsoredUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredBy?: UserUpdateOneWithoutSponsoredUsersNestedInput
    troopers?: TrooperUpdateManyWithoutUserNestedInput
    history?: HistoryUserUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUpdateManyWithoutUserNestedInput
    fights?: FightUpdateManyWithoutUserNestedInput
    missions?: MissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSponsoredUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    sponsoredById?: NullableStringFieldUpdateOperationsInput | string | null
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    troopers?: TrooperUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUserUncheckedUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUncheckedUpdateManyWithoutUserNestedInput
    fights?: FightUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutSponsoredByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSponsoredByInput, UserUncheckedUpdateWithoutSponsoredByInput>
    create: XOR<UserCreateWithoutSponsoredByInput, UserUncheckedCreateWithoutSponsoredByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSponsoredByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSponsoredByInput, UserUncheckedUpdateWithoutSponsoredByInput>
  }

  export type UserUpdateManyWithWhereWithoutSponsoredByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSponsoredByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<"User"> | string
    lang?: EnumLangFilter<"User"> | $Enums.Lang
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastConnexion?: DateTimeFilter<"User"> | Date | string
    admin?: BoolFilter<"User"> | boolean
    connexionToken?: UuidFilter<"User"> | string
    gold?: IntFilter<"User"> | number
    power?: IntFilter<"User"> | number
    armyName?: StringFilter<"User"> | string
    armyUrl?: StringFilter<"User"> | string
    prefix?: IntFilter<"User"> | number
    color?: IntFilter<"User"> | number
    sponsoredById?: UuidNullableFilter<"User"> | string | null
    referralGold?: IntFilter<"User"> | number
    ratsCount?: IntFilter<"User"> | number
    infiltrationOpponentArmy?: UuidNullableFilter<"User"> | string | null
    infiltrationOpponentDate?: DateTimeNullableFilter<"User"> | Date | string | null
    infiltrationUnlockAt?: DateTimeNullableFilter<"User"> | Date | string | null
    exterminationUnlockAt?: DateTimeNullableFilter<"User"> | Date | string | null
    epicUnlockAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type TrooperUpsertWithWhereUniqueWithoutUserInput = {
    where: TrooperWhereUniqueInput
    update: XOR<TrooperUpdateWithoutUserInput, TrooperUncheckedUpdateWithoutUserInput>
    create: XOR<TrooperCreateWithoutUserInput, TrooperUncheckedCreateWithoutUserInput>
  }

  export type TrooperUpdateWithWhereUniqueWithoutUserInput = {
    where: TrooperWhereUniqueInput
    data: XOR<TrooperUpdateWithoutUserInput, TrooperUncheckedUpdateWithoutUserInput>
  }

  export type TrooperUpdateManyWithWhereWithoutUserInput = {
    where: TrooperScalarWhereInput
    data: XOR<TrooperUpdateManyMutationInput, TrooperUncheckedUpdateManyWithoutUserInput>
  }

  export type TrooperScalarWhereInput = {
    AND?: TrooperScalarWhereInput | TrooperScalarWhereInput[]
    OR?: TrooperScalarWhereInput[]
    NOT?: TrooperScalarWhereInput | TrooperScalarWhereInput[]
    id?: UuidFilter<"Trooper"> | string
    createdAt?: DateTimeFilter<"Trooper"> | Date | string
    userId?: UuidFilter<"Trooper"> | string
    name?: StringFilter<"Trooper"> | string
    choices?: IntNullableListFilter<"Trooper">
    group?: IntFilter<"Trooper"> | number
    seed?: IntFilter<"Trooper"> | number
    targetSystem?: IntFilter<"Trooper"> | number
    targetType?: IntFilter<"Trooper"> | number
    reloadSystem?: IntFilter<"Trooper"> | number
    moveSystem?: IntFilter<"Trooper"> | number
    CBody?: IntNullableFilter<"Trooper"> | number | null
    CWeapon?: IntNullableFilter<"Trooper"> | number | null
  }

  export type HistoryUserUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoryUserWhereUniqueInput
    update: XOR<HistoryUserUpdateWithoutUserInput, HistoryUserUncheckedUpdateWithoutUserInput>
    create: XOR<HistoryUserCreateWithoutUserInput, HistoryUserUncheckedCreateWithoutUserInput>
  }

  export type HistoryUserUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoryUserWhereUniqueInput
    data: XOR<HistoryUserUpdateWithoutUserInput, HistoryUserUncheckedUpdateWithoutUserInput>
  }

  export type HistoryUserUpdateManyWithWhereWithoutUserInput = {
    where: HistoryUserScalarWhereInput
    data: XOR<HistoryUserUpdateManyMutationInput, HistoryUserUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoryUserScalarWhereInput = {
    AND?: HistoryUserScalarWhereInput | HistoryUserScalarWhereInput[]
    OR?: HistoryUserScalarWhereInput[]
    NOT?: HistoryUserScalarWhereInput | HistoryUserScalarWhereInput[]
    id?: UuidFilter<"HistoryUser"> | string
    ts?: DateTimeFilter<"HistoryUser"> | Date | string
    type?: EnumHistoryTypeFilter<"HistoryUser"> | $Enums.HistoryType
    options?: JsonNullableFilter<"HistoryUser">
    userId?: UuidFilter<"HistoryUser"> | string
  }

  export type ipAddressUserUpsertWithWhereUniqueWithoutUserInput = {
    where: ipAddressUserWhereUniqueInput
    update: XOR<ipAddressUserUpdateWithoutUserInput, ipAddressUserUncheckedUpdateWithoutUserInput>
    create: XOR<ipAddressUserCreateWithoutUserInput, ipAddressUserUncheckedCreateWithoutUserInput>
  }

  export type ipAddressUserUpdateWithWhereUniqueWithoutUserInput = {
    where: ipAddressUserWhereUniqueInput
    data: XOR<ipAddressUserUpdateWithoutUserInput, ipAddressUserUncheckedUpdateWithoutUserInput>
  }

  export type ipAddressUserUpdateManyWithWhereWithoutUserInput = {
    where: ipAddressUserScalarWhereInput
    data: XOR<ipAddressUserUpdateManyMutationInput, ipAddressUserUncheckedUpdateManyWithoutUserInput>
  }

  export type ipAddressUserScalarWhereInput = {
    AND?: ipAddressUserScalarWhereInput | ipAddressUserScalarWhereInput[]
    OR?: ipAddressUserScalarWhereInput[]
    NOT?: ipAddressUserScalarWhereInput | ipAddressUserScalarWhereInput[]
    id?: UuidFilter<"ipAddressUser"> | string
    userId?: UuidFilter<"ipAddressUser"> | string
    ip?: StringFilter<"ipAddressUser"> | string
  }

  export type FightUpsertWithWhereUniqueWithoutUserInput = {
    where: FightWhereUniqueInput
    update: XOR<FightUpdateWithoutUserInput, FightUncheckedUpdateWithoutUserInput>
    create: XOR<FightCreateWithoutUserInput, FightUncheckedCreateWithoutUserInput>
  }

  export type FightUpdateWithWhereUniqueWithoutUserInput = {
    where: FightWhereUniqueInput
    data: XOR<FightUpdateWithoutUserInput, FightUncheckedUpdateWithoutUserInput>
  }

  export type FightUpdateManyWithWhereWithoutUserInput = {
    where: FightScalarWhereInput
    data: XOR<FightUpdateManyMutationInput, FightUncheckedUpdateManyWithoutUserInput>
  }

  export type FightScalarWhereInput = {
    AND?: FightScalarWhereInput | FightScalarWhereInput[]
    OR?: FightScalarWhereInput[]
    NOT?: FightScalarWhereInput | FightScalarWhereInput[]
    id?: UuidFilter<"Fight"> | string
    userId?: UuidFilter<"Fight"> | string
    ts?: DateTimeFilter<"Fight"> | Date | string
    userName?: StringFilter<"Fight"> | string
    userPrefix?: IntFilter<"Fight"> | number
    opponentName?: StringFilter<"Fight"> | string
    opponentPrefix?: IntFilter<"Fight"> | number
    fightInputSWFData?: StringFilter<"Fight"> | string
    result?: EnumFightResultFilter<"Fight"> | $Enums.FightResult
  }

  export type MissionUpsertWithWhereUniqueWithoutUserInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutUserInput, MissionUncheckedUpdateWithoutUserInput>
    create: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutUserInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutUserInput, MissionUncheckedUpdateWithoutUserInput>
  }

  export type MissionUpdateManyWithWhereWithoutUserInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutUserInput>
  }

  export type MissionScalarWhereInput = {
    AND?: MissionScalarWhereInput | MissionScalarWhereInput[]
    OR?: MissionScalarWhereInput[]
    NOT?: MissionScalarWhereInput | MissionScalarWhereInput[]
    id?: UuidFilter<"Mission"> | string
    userId?: UuidFilter<"Mission"> | string
    ts?: DateTimeFilter<"Mission"> | Date | string
    type?: EnumMissionTypeFilter<"Mission"> | $Enums.MissionType
    missionInputSWFData?: StringFilter<"Mission"> | string
    result?: EnumFightResultFilter<"Mission"> | $Enums.FightResult
  }

  export type UserCreateWithoutIpAddressUserInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredBy?: UserCreateNestedOneWithoutSponsoredUsersInput
    sponsoredUsers?: UserCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperCreateNestedManyWithoutUserInput
    history?: HistoryUserCreateNestedManyWithoutUserInput
    fights?: FightCreateNestedManyWithoutUserInput
    missions?: MissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIpAddressUserInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    sponsoredById?: string | null
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredUsers?: UserUncheckedCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUserUncheckedCreateNestedManyWithoutUserInput
    fights?: FightUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIpAddressUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIpAddressUserInput, UserUncheckedCreateWithoutIpAddressUserInput>
  }

  export type UserUpsertWithoutIpAddressUserInput = {
    update: XOR<UserUpdateWithoutIpAddressUserInput, UserUncheckedUpdateWithoutIpAddressUserInput>
    create: XOR<UserCreateWithoutIpAddressUserInput, UserUncheckedCreateWithoutIpAddressUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIpAddressUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIpAddressUserInput, UserUncheckedUpdateWithoutIpAddressUserInput>
  }

  export type UserUpdateWithoutIpAddressUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredBy?: UserUpdateOneWithoutSponsoredUsersNestedInput
    sponsoredUsers?: UserUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUpdateManyWithoutUserNestedInput
    history?: HistoryUserUpdateManyWithoutUserNestedInput
    fights?: FightUpdateManyWithoutUserNestedInput
    missions?: MissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIpAddressUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    sponsoredById?: NullableStringFieldUpdateOperationsInput | string | null
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredUsers?: UserUncheckedUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUserUncheckedUpdateManyWithoutUserNestedInput
    fights?: FightUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHistoryInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredBy?: UserCreateNestedOneWithoutSponsoredUsersInput
    sponsoredUsers?: UserCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserCreateNestedManyWithoutUserInput
    fights?: FightCreateNestedManyWithoutUserInput
    missions?: MissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    sponsoredById?: string | null
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredUsers?: UserUncheckedCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperUncheckedCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserUncheckedCreateNestedManyWithoutUserInput
    fights?: FightUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredBy?: UserUpdateOneWithoutSponsoredUsersNestedInput
    sponsoredUsers?: UserUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUpdateManyWithoutUserNestedInput
    fights?: FightUpdateManyWithoutUserNestedInput
    missions?: MissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    sponsoredById?: NullableStringFieldUpdateOperationsInput | string | null
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredUsers?: UserUncheckedUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUncheckedUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUncheckedUpdateManyWithoutUserNestedInput
    fights?: FightUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTroopersInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredBy?: UserCreateNestedOneWithoutSponsoredUsersInput
    sponsoredUsers?: UserCreateNestedManyWithoutSponsoredByInput
    history?: HistoryUserCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserCreateNestedManyWithoutUserInput
    fights?: FightCreateNestedManyWithoutUserInput
    missions?: MissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTroopersInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    sponsoredById?: string | null
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredUsers?: UserUncheckedCreateNestedManyWithoutSponsoredByInput
    history?: HistoryUserUncheckedCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserUncheckedCreateNestedManyWithoutUserInput
    fights?: FightUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTroopersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTroopersInput, UserUncheckedCreateWithoutTroopersInput>
  }

  export type UserUpsertWithoutTroopersInput = {
    update: XOR<UserUpdateWithoutTroopersInput, UserUncheckedUpdateWithoutTroopersInput>
    create: XOR<UserCreateWithoutTroopersInput, UserUncheckedCreateWithoutTroopersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTroopersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTroopersInput, UserUncheckedUpdateWithoutTroopersInput>
  }

  export type UserUpdateWithoutTroopersInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredBy?: UserUpdateOneWithoutSponsoredUsersNestedInput
    sponsoredUsers?: UserUpdateManyWithoutSponsoredByNestedInput
    history?: HistoryUserUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUpdateManyWithoutUserNestedInput
    fights?: FightUpdateManyWithoutUserNestedInput
    missions?: MissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTroopersInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    sponsoredById?: NullableStringFieldUpdateOperationsInput | string | null
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredUsers?: UserUncheckedUpdateManyWithoutSponsoredByNestedInput
    history?: HistoryUserUncheckedUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUncheckedUpdateManyWithoutUserNestedInput
    fights?: FightUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFightsInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredBy?: UserCreateNestedOneWithoutSponsoredUsersInput
    sponsoredUsers?: UserCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperCreateNestedManyWithoutUserInput
    history?: HistoryUserCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserCreateNestedManyWithoutUserInput
    missions?: MissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFightsInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    sponsoredById?: string | null
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredUsers?: UserUncheckedCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUserUncheckedCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserUncheckedCreateNestedManyWithoutUserInput
    missions?: MissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFightsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFightsInput, UserUncheckedCreateWithoutFightsInput>
  }

  export type UserUpsertWithoutFightsInput = {
    update: XOR<UserUpdateWithoutFightsInput, UserUncheckedUpdateWithoutFightsInput>
    create: XOR<UserCreateWithoutFightsInput, UserUncheckedCreateWithoutFightsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFightsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFightsInput, UserUncheckedUpdateWithoutFightsInput>
  }

  export type UserUpdateWithoutFightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredBy?: UserUpdateOneWithoutSponsoredUsersNestedInput
    sponsoredUsers?: UserUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUpdateManyWithoutUserNestedInput
    history?: HistoryUserUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUpdateManyWithoutUserNestedInput
    missions?: MissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    sponsoredById?: NullableStringFieldUpdateOperationsInput | string | null
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredUsers?: UserUncheckedUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUserUncheckedUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMissionsInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredBy?: UserCreateNestedOneWithoutSponsoredUsersInput
    sponsoredUsers?: UserCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperCreateNestedManyWithoutUserInput
    history?: HistoryUserCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserCreateNestedManyWithoutUserInput
    fights?: FightCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMissionsInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    sponsoredById?: string | null
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
    sponsoredUsers?: UserUncheckedCreateNestedManyWithoutSponsoredByInput
    troopers?: TrooperUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUserUncheckedCreateNestedManyWithoutUserInput
    ipAddressUser?: ipAddressUserUncheckedCreateNestedManyWithoutUserInput
    fights?: FightUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
  }

  export type UserUpsertWithoutMissionsInput = {
    update: XOR<UserUpdateWithoutMissionsInput, UserUncheckedUpdateWithoutMissionsInput>
    create: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMissionsInput, UserUncheckedUpdateWithoutMissionsInput>
  }

  export type UserUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredBy?: UserUpdateOneWithoutSponsoredUsersNestedInput
    sponsoredUsers?: UserUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUpdateManyWithoutUserNestedInput
    history?: HistoryUserUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUpdateManyWithoutUserNestedInput
    fights?: FightUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    sponsoredById?: NullableStringFieldUpdateOperationsInput | string | null
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredUsers?: UserUncheckedUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUserUncheckedUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUncheckedUpdateManyWithoutUserNestedInput
    fights?: FightUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManySponsoredByInput = {
    id: string
    lang?: $Enums.Lang
    name: string
    createdAt?: Date | string
    lastConnexion?: Date | string
    admin?: boolean
    connexionToken: string
    gold?: number
    power?: number
    armyName: string
    armyUrl: string
    prefix?: number
    color?: number
    referralGold?: number
    ratsCount?: number
    infiltrationOpponentArmy?: string | null
    infiltrationOpponentDate?: Date | string | null
    infiltrationUnlockAt?: Date | string | null
    exterminationUnlockAt?: Date | string | null
    epicUnlockAt?: Date | string | null
  }

  export type TrooperCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    name: string
    choices?: TrooperCreatechoicesInput | number[]
    group: number
    seed: number
    targetSystem?: number
    targetType?: number
    reloadSystem?: number
    moveSystem?: number
    CBody?: number | null
    CWeapon?: number | null
  }

  export type HistoryUserCreateManyUserInput = {
    id?: string
    ts?: Date | string
    type: $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ipAddressUserCreateManyUserInput = {
    id?: string
    ip: string
  }

  export type FightCreateManyUserInput = {
    id?: string
    ts?: Date | string
    userName: string
    userPrefix: number
    opponentName: string
    opponentPrefix: number
    fightInputSWFData: string
    result: $Enums.FightResult
  }

  export type MissionCreateManyUserInput = {
    id?: string
    ts?: Date | string
    type: $Enums.MissionType
    missionInputSWFData: string
    result: $Enums.FightResult
  }

  export type UserUpdateWithoutSponsoredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredUsers?: UserUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUpdateManyWithoutUserNestedInput
    history?: HistoryUserUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUpdateManyWithoutUserNestedInput
    fights?: FightUpdateManyWithoutUserNestedInput
    missions?: MissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSponsoredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sponsoredUsers?: UserUncheckedUpdateManyWithoutSponsoredByNestedInput
    troopers?: TrooperUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUserUncheckedUpdateManyWithoutUserNestedInput
    ipAddressUser?: ipAddressUserUncheckedUpdateManyWithoutUserNestedInput
    fights?: FightUncheckedUpdateManyWithoutUserNestedInput
    missions?: MissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSponsoredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: EnumLangFieldUpdateOperationsInput | $Enums.Lang
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastConnexion?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    connexionToken?: StringFieldUpdateOperationsInput | string
    gold?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    armyName?: StringFieldUpdateOperationsInput | string
    armyUrl?: StringFieldUpdateOperationsInput | string
    prefix?: IntFieldUpdateOperationsInput | number
    color?: IntFieldUpdateOperationsInput | number
    referralGold?: IntFieldUpdateOperationsInput | number
    ratsCount?: IntFieldUpdateOperationsInput | number
    infiltrationOpponentArmy?: NullableStringFieldUpdateOperationsInput | string | null
    infiltrationOpponentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    infiltrationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exterminationUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    epicUnlockAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrooperUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    choices?: TrooperUpdatechoicesInput | number[]
    group?: IntFieldUpdateOperationsInput | number
    seed?: IntFieldUpdateOperationsInput | number
    targetSystem?: IntFieldUpdateOperationsInput | number
    targetType?: IntFieldUpdateOperationsInput | number
    reloadSystem?: IntFieldUpdateOperationsInput | number
    moveSystem?: IntFieldUpdateOperationsInput | number
    CBody?: NullableIntFieldUpdateOperationsInput | number | null
    CWeapon?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrooperUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    choices?: TrooperUpdatechoicesInput | number[]
    group?: IntFieldUpdateOperationsInput | number
    seed?: IntFieldUpdateOperationsInput | number
    targetSystem?: IntFieldUpdateOperationsInput | number
    targetType?: IntFieldUpdateOperationsInput | number
    reloadSystem?: IntFieldUpdateOperationsInput | number
    moveSystem?: IntFieldUpdateOperationsInput | number
    CBody?: NullableIntFieldUpdateOperationsInput | number | null
    CWeapon?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrooperUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    choices?: TrooperUpdatechoicesInput | number[]
    group?: IntFieldUpdateOperationsInput | number
    seed?: IntFieldUpdateOperationsInput | number
    targetSystem?: IntFieldUpdateOperationsInput | number
    targetType?: IntFieldUpdateOperationsInput | number
    reloadSystem?: IntFieldUpdateOperationsInput | number
    moveSystem?: IntFieldUpdateOperationsInput | number
    CBody?: NullableIntFieldUpdateOperationsInput | number | null
    CWeapon?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HistoryUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HistoryUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHistoryTypeFieldUpdateOperationsInput | $Enums.HistoryType
    options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ipAddressUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type ipAddressUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type ipAddressUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type FightUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    userPrefix?: IntFieldUpdateOperationsInput | number
    opponentName?: StringFieldUpdateOperationsInput | string
    opponentPrefix?: IntFieldUpdateOperationsInput | number
    fightInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type FightUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    userPrefix?: IntFieldUpdateOperationsInput | number
    opponentName?: StringFieldUpdateOperationsInput | string
    opponentPrefix?: IntFieldUpdateOperationsInput | number
    fightInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type FightUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    userPrefix?: IntFieldUpdateOperationsInput | number
    opponentName?: StringFieldUpdateOperationsInput | string
    opponentPrefix?: IntFieldUpdateOperationsInput | number
    fightInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type MissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    missionInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type MissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    missionInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }

  export type MissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    missionInputSWFData?: StringFieldUpdateOperationsInput | string
    result?: EnumFightResultFieldUpdateOperationsInput | $Enums.FightResult
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}