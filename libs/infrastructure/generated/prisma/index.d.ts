
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
 * Model DeveloperProfile
 * 
 */
export type DeveloperProfile = $Result.DefaultSelection<Prisma.$DeveloperProfilePayload>
/**
 * Model EmployerProfile
 * 
 */
export type EmployerProfile = $Result.DefaultSelection<Prisma.$EmployerProfilePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskOffer
 * 
 */
export type TaskOffer = $Result.DefaultSelection<Prisma.$TaskOfferPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentStatus: {
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  IN_WORK: 'IN_WORK',
  REALIZED: 'REALIZED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const TaskStatus: {
  NEW: 'NEW',
  IN_PROGRESS: 'IN_PROGRESS',
  SUBMITTED: 'SUBMITTED',
  COMPLETED: 'COMPLETED',
  CLOSED: 'CLOSED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const OfferStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type OfferStatus = (typeof OfferStatus)[keyof typeof OfferStatus]


export const UserRole: {
  DEVELOPER: 'DEVELOPER',
  EMPLOYER: 'EMPLOYER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type OfferStatus = $Enums.OfferStatus

export const OfferStatus: typeof $Enums.OfferStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.developerProfile`: Exposes CRUD operations for the **DeveloperProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeveloperProfiles
    * const developerProfiles = await prisma.developerProfile.findMany()
    * ```
    */
  get developerProfile(): Prisma.DeveloperProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employerProfile`: Exposes CRUD operations for the **EmployerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployerProfiles
    * const employerProfiles = await prisma.employerProfile.findMany()
    * ```
    */
  get employerProfile(): Prisma.EmployerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskOffer`: Exposes CRUD operations for the **TaskOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskOffers
    * const taskOffers = await prisma.taskOffer.findMany()
    * ```
    */
  get taskOffer(): Prisma.TaskOfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    DeveloperProfile: 'DeveloperProfile',
    EmployerProfile: 'EmployerProfile',
    Task: 'Task',
    TaskOffer: 'TaskOffer',
    Payment: 'Payment',
    Feedback: 'Feedback'
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
      modelProps: "user" | "developerProfile" | "employerProfile" | "task" | "taskOffer" | "payment" | "feedback"
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
      DeveloperProfile: {
        payload: Prisma.$DeveloperProfilePayload<ExtArgs>
        fields: Prisma.DeveloperProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeveloperProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeveloperProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload>
          }
          findFirst: {
            args: Prisma.DeveloperProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeveloperProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload>
          }
          findMany: {
            args: Prisma.DeveloperProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload>[]
          }
          create: {
            args: Prisma.DeveloperProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload>
          }
          createMany: {
            args: Prisma.DeveloperProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeveloperProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload>[]
          }
          delete: {
            args: Prisma.DeveloperProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload>
          }
          update: {
            args: Prisma.DeveloperProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload>
          }
          deleteMany: {
            args: Prisma.DeveloperProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeveloperProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeveloperProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload>[]
          }
          upsert: {
            args: Prisma.DeveloperProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeveloperProfilePayload>
          }
          aggregate: {
            args: Prisma.DeveloperProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeveloperProfile>
          }
          groupBy: {
            args: Prisma.DeveloperProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeveloperProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeveloperProfileCountArgs<ExtArgs>
            result: $Utils.Optional<DeveloperProfileCountAggregateOutputType> | number
          }
        }
      }
      EmployerProfile: {
        payload: Prisma.$EmployerProfilePayload<ExtArgs>
        fields: Prisma.EmployerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>
          }
          findFirst: {
            args: Prisma.EmployerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>
          }
          findMany: {
            args: Prisma.EmployerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>[]
          }
          create: {
            args: Prisma.EmployerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>
          }
          createMany: {
            args: Prisma.EmployerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>[]
          }
          delete: {
            args: Prisma.EmployerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>
          }
          update: {
            args: Prisma.EmployerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>
          }
          deleteMany: {
            args: Prisma.EmployerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>[]
          }
          upsert: {
            args: Prisma.EmployerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>
          }
          aggregate: {
            args: Prisma.EmployerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployerProfile>
          }
          groupBy: {
            args: Prisma.EmployerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<EmployerProfileCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskOffer: {
        payload: Prisma.$TaskOfferPayload<ExtArgs>
        fields: Prisma.TaskOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload>
          }
          findFirst: {
            args: Prisma.TaskOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload>
          }
          findMany: {
            args: Prisma.TaskOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload>[]
          }
          create: {
            args: Prisma.TaskOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload>
          }
          createMany: {
            args: Prisma.TaskOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskOfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload>[]
          }
          delete: {
            args: Prisma.TaskOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload>
          }
          update: {
            args: Prisma.TaskOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload>
          }
          deleteMany: {
            args: Prisma.TaskOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskOfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload>[]
          }
          upsert: {
            args: Prisma.TaskOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskOfferPayload>
          }
          aggregate: {
            args: Prisma.TaskOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskOffer>
          }
          groupBy: {
            args: Prisma.TaskOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskOfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskOfferCountArgs<ExtArgs>
            result: $Utils.Optional<TaskOfferCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    developerProfile?: DeveloperProfileOmit
    employerProfile?: EmployerProfileOmit
    task?: TaskOmit
    taskOffer?: TaskOfferOmit
    payment?: PaymentOmit
    feedback?: FeedbackOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    tasksAuthored: number
    offers: number
    feedbacksLeft: number
    feedbacksGot: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasksAuthored?: boolean | UserCountOutputTypeCountTasksAuthoredArgs
    offers?: boolean | UserCountOutputTypeCountOffersArgs
    feedbacksLeft?: boolean | UserCountOutputTypeCountFeedbacksLeftArgs
    feedbacksGot?: boolean | UserCountOutputTypeCountFeedbacksGotArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
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
  export type UserCountOutputTypeCountTasksAuthoredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskOfferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbacksLeftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbacksGotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type DeveloperProfileCountOutputType
   */

  export type DeveloperProfileCountOutputType = {
    tasks: number
  }

  export type DeveloperProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | DeveloperProfileCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * DeveloperProfileCountOutputType without action
   */
  export type DeveloperProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfileCountOutputType
     */
    select?: DeveloperProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeveloperProfileCountOutputType without action
   */
  export type DeveloperProfileCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    offers: number
    feedbacks: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | TaskCountOutputTypeCountOffersArgs
    feedbacks?: boolean | TaskCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskOfferWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
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
    id: number | null
    telegramId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    telegramId: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    telegramId: bigint | null
    tgUsername: string | null
    displayName: string | null
    email: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    telegramId: bigint | null
    tgUsername: string | null
    displayName: string | null
    email: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    telegramId: number
    tgUsername: number
    displayName: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    telegramId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    telegramId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    telegramId?: true
    tgUsername?: true
    displayName?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    telegramId?: true
    tgUsername?: true
    displayName?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    telegramId?: true
    tgUsername?: true
    displayName?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    id: number
    telegramId: bigint
    tgUsername: string | null
    displayName: string
    email: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
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
    telegramId?: boolean
    tgUsername?: boolean
    displayName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    developerProfile?: boolean | User$developerProfileArgs<ExtArgs>
    employerProfile?: boolean | User$employerProfileArgs<ExtArgs>
    tasksAuthored?: boolean | User$tasksAuthoredArgs<ExtArgs>
    offers?: boolean | User$offersArgs<ExtArgs>
    feedbacksLeft?: boolean | User$feedbacksLeftArgs<ExtArgs>
    feedbacksGot?: boolean | User$feedbacksGotArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    tgUsername?: boolean
    displayName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    tgUsername?: boolean
    displayName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    telegramId?: boolean
    tgUsername?: boolean
    displayName?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telegramId" | "tgUsername" | "displayName" | "email" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    developerProfile?: boolean | User$developerProfileArgs<ExtArgs>
    employerProfile?: boolean | User$employerProfileArgs<ExtArgs>
    tasksAuthored?: boolean | User$tasksAuthoredArgs<ExtArgs>
    offers?: boolean | User$offersArgs<ExtArgs>
    feedbacksLeft?: boolean | User$feedbacksLeftArgs<ExtArgs>
    feedbacksGot?: boolean | User$feedbacksGotArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      developerProfile: Prisma.$DeveloperProfilePayload<ExtArgs> | null
      employerProfile: Prisma.$EmployerProfilePayload<ExtArgs> | null
      tasksAuthored: Prisma.$TaskPayload<ExtArgs>[]
      offers: Prisma.$TaskOfferPayload<ExtArgs>[]
      feedbacksLeft: Prisma.$FeedbackPayload<ExtArgs>[]
      feedbacksGot: Prisma.$FeedbackPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      telegramId: bigint
      tgUsername: string | null
      displayName: string
      email: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
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
    developerProfile<T extends User$developerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$developerProfileArgs<ExtArgs>>): Prisma__DeveloperProfileClient<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employerProfile<T extends User$employerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$employerProfileArgs<ExtArgs>>): Prisma__EmployerProfileClient<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasksAuthored<T extends User$tasksAuthoredArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksAuthoredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offers<T extends User$offersArgs<ExtArgs> = {}>(args?: Subset<T, User$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacksLeft<T extends User$feedbacksLeftArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbacksLeftArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacksGot<T extends User$feedbacksGotArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbacksGotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly telegramId: FieldRef<"User", 'BigInt'>
    readonly tgUsername: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.developerProfile
   */
  export type User$developerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    where?: DeveloperProfileWhereInput
  }

  /**
   * User.employerProfile
   */
  export type User$employerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
    where?: EmployerProfileWhereInput
  }

  /**
   * User.tasksAuthored
   */
  export type User$tasksAuthoredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.offers
   */
  export type User$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    where?: TaskOfferWhereInput
    orderBy?: TaskOfferOrderByWithRelationInput | TaskOfferOrderByWithRelationInput[]
    cursor?: TaskOfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskOfferScalarFieldEnum | TaskOfferScalarFieldEnum[]
  }

  /**
   * User.feedbacksLeft
   */
  export type User$feedbacksLeftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User.feedbacksGot
   */
  export type User$feedbacksGotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
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
   * Model DeveloperProfile
   */

  export type AggregateDeveloperProfile = {
    _count: DeveloperProfileCountAggregateOutputType | null
    _avg: DeveloperProfileAvgAggregateOutputType | null
    _sum: DeveloperProfileSumAggregateOutputType | null
    _min: DeveloperProfileMinAggregateOutputType | null
    _max: DeveloperProfileMaxAggregateOutputType | null
  }

  export type DeveloperProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    hourlyRate: Decimal | null
    rating: number | null
  }

  export type DeveloperProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    hourlyRate: Decimal | null
    rating: number | null
  }

  export type DeveloperProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    hourlyRate: Decimal | null
    walletAddress: string | null
    bio: string | null
    rating: number | null
  }

  export type DeveloperProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    hourlyRate: Decimal | null
    walletAddress: string | null
    bio: string | null
    rating: number | null
  }

  export type DeveloperProfileCountAggregateOutputType = {
    id: number
    userId: number
    hourlyRate: number
    skills: number
    walletAddress: number
    bio: number
    rating: number
    _all: number
  }


  export type DeveloperProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    hourlyRate?: true
    rating?: true
  }

  export type DeveloperProfileSumAggregateInputType = {
    id?: true
    userId?: true
    hourlyRate?: true
    rating?: true
  }

  export type DeveloperProfileMinAggregateInputType = {
    id?: true
    userId?: true
    hourlyRate?: true
    walletAddress?: true
    bio?: true
    rating?: true
  }

  export type DeveloperProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    hourlyRate?: true
    walletAddress?: true
    bio?: true
    rating?: true
  }

  export type DeveloperProfileCountAggregateInputType = {
    id?: true
    userId?: true
    hourlyRate?: true
    skills?: true
    walletAddress?: true
    bio?: true
    rating?: true
    _all?: true
  }

  export type DeveloperProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeveloperProfile to aggregate.
     */
    where?: DeveloperProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeveloperProfiles to fetch.
     */
    orderBy?: DeveloperProfileOrderByWithRelationInput | DeveloperProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeveloperProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeveloperProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeveloperProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeveloperProfiles
    **/
    _count?: true | DeveloperProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeveloperProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeveloperProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeveloperProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeveloperProfileMaxAggregateInputType
  }

  export type GetDeveloperProfileAggregateType<T extends DeveloperProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateDeveloperProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeveloperProfile[P]>
      : GetScalarType<T[P], AggregateDeveloperProfile[P]>
  }




  export type DeveloperProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeveloperProfileWhereInput
    orderBy?: DeveloperProfileOrderByWithAggregationInput | DeveloperProfileOrderByWithAggregationInput[]
    by: DeveloperProfileScalarFieldEnum[] | DeveloperProfileScalarFieldEnum
    having?: DeveloperProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeveloperProfileCountAggregateInputType | true
    _avg?: DeveloperProfileAvgAggregateInputType
    _sum?: DeveloperProfileSumAggregateInputType
    _min?: DeveloperProfileMinAggregateInputType
    _max?: DeveloperProfileMaxAggregateInputType
  }

  export type DeveloperProfileGroupByOutputType = {
    id: number
    userId: number
    hourlyRate: Decimal | null
    skills: JsonValue | null
    walletAddress: string | null
    bio: string | null
    rating: number | null
    _count: DeveloperProfileCountAggregateOutputType | null
    _avg: DeveloperProfileAvgAggregateOutputType | null
    _sum: DeveloperProfileSumAggregateOutputType | null
    _min: DeveloperProfileMinAggregateOutputType | null
    _max: DeveloperProfileMaxAggregateOutputType | null
  }

  type GetDeveloperProfileGroupByPayload<T extends DeveloperProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeveloperProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeveloperProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeveloperProfileGroupByOutputType[P]>
            : GetScalarType<T[P], DeveloperProfileGroupByOutputType[P]>
        }
      >
    >


  export type DeveloperProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hourlyRate?: boolean
    skills?: boolean
    walletAddress?: boolean
    bio?: boolean
    rating?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | DeveloperProfile$tasksArgs<ExtArgs>
    _count?: boolean | DeveloperProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developerProfile"]>

  export type DeveloperProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hourlyRate?: boolean
    skills?: boolean
    walletAddress?: boolean
    bio?: boolean
    rating?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developerProfile"]>

  export type DeveloperProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hourlyRate?: boolean
    skills?: boolean
    walletAddress?: boolean
    bio?: boolean
    rating?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developerProfile"]>

  export type DeveloperProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    hourlyRate?: boolean
    skills?: boolean
    walletAddress?: boolean
    bio?: boolean
    rating?: boolean
  }

  export type DeveloperProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "hourlyRate" | "skills" | "walletAddress" | "bio" | "rating", ExtArgs["result"]["developerProfile"]>
  export type DeveloperProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | DeveloperProfile$tasksArgs<ExtArgs>
    _count?: boolean | DeveloperProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeveloperProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeveloperProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeveloperProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeveloperProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      hourlyRate: Prisma.Decimal | null
      skills: Prisma.JsonValue | null
      walletAddress: string | null
      bio: string | null
      rating: number | null
    }, ExtArgs["result"]["developerProfile"]>
    composites: {}
  }

  type DeveloperProfileGetPayload<S extends boolean | null | undefined | DeveloperProfileDefaultArgs> = $Result.GetResult<Prisma.$DeveloperProfilePayload, S>

  type DeveloperProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeveloperProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeveloperProfileCountAggregateInputType | true
    }

  export interface DeveloperProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeveloperProfile'], meta: { name: 'DeveloperProfile' } }
    /**
     * Find zero or one DeveloperProfile that matches the filter.
     * @param {DeveloperProfileFindUniqueArgs} args - Arguments to find a DeveloperProfile
     * @example
     * // Get one DeveloperProfile
     * const developerProfile = await prisma.developerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeveloperProfileFindUniqueArgs>(args: SelectSubset<T, DeveloperProfileFindUniqueArgs<ExtArgs>>): Prisma__DeveloperProfileClient<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeveloperProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeveloperProfileFindUniqueOrThrowArgs} args - Arguments to find a DeveloperProfile
     * @example
     * // Get one DeveloperProfile
     * const developerProfile = await prisma.developerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeveloperProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, DeveloperProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeveloperProfileClient<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeveloperProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperProfileFindFirstArgs} args - Arguments to find a DeveloperProfile
     * @example
     * // Get one DeveloperProfile
     * const developerProfile = await prisma.developerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeveloperProfileFindFirstArgs>(args?: SelectSubset<T, DeveloperProfileFindFirstArgs<ExtArgs>>): Prisma__DeveloperProfileClient<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeveloperProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperProfileFindFirstOrThrowArgs} args - Arguments to find a DeveloperProfile
     * @example
     * // Get one DeveloperProfile
     * const developerProfile = await prisma.developerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeveloperProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, DeveloperProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeveloperProfileClient<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeveloperProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeveloperProfiles
     * const developerProfiles = await prisma.developerProfile.findMany()
     * 
     * // Get first 10 DeveloperProfiles
     * const developerProfiles = await prisma.developerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const developerProfileWithIdOnly = await prisma.developerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeveloperProfileFindManyArgs>(args?: SelectSubset<T, DeveloperProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeveloperProfile.
     * @param {DeveloperProfileCreateArgs} args - Arguments to create a DeveloperProfile.
     * @example
     * // Create one DeveloperProfile
     * const DeveloperProfile = await prisma.developerProfile.create({
     *   data: {
     *     // ... data to create a DeveloperProfile
     *   }
     * })
     * 
     */
    create<T extends DeveloperProfileCreateArgs>(args: SelectSubset<T, DeveloperProfileCreateArgs<ExtArgs>>): Prisma__DeveloperProfileClient<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeveloperProfiles.
     * @param {DeveloperProfileCreateManyArgs} args - Arguments to create many DeveloperProfiles.
     * @example
     * // Create many DeveloperProfiles
     * const developerProfile = await prisma.developerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeveloperProfileCreateManyArgs>(args?: SelectSubset<T, DeveloperProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeveloperProfiles and returns the data saved in the database.
     * @param {DeveloperProfileCreateManyAndReturnArgs} args - Arguments to create many DeveloperProfiles.
     * @example
     * // Create many DeveloperProfiles
     * const developerProfile = await prisma.developerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeveloperProfiles and only return the `id`
     * const developerProfileWithIdOnly = await prisma.developerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeveloperProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, DeveloperProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeveloperProfile.
     * @param {DeveloperProfileDeleteArgs} args - Arguments to delete one DeveloperProfile.
     * @example
     * // Delete one DeveloperProfile
     * const DeveloperProfile = await prisma.developerProfile.delete({
     *   where: {
     *     // ... filter to delete one DeveloperProfile
     *   }
     * })
     * 
     */
    delete<T extends DeveloperProfileDeleteArgs>(args: SelectSubset<T, DeveloperProfileDeleteArgs<ExtArgs>>): Prisma__DeveloperProfileClient<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeveloperProfile.
     * @param {DeveloperProfileUpdateArgs} args - Arguments to update one DeveloperProfile.
     * @example
     * // Update one DeveloperProfile
     * const developerProfile = await prisma.developerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeveloperProfileUpdateArgs>(args: SelectSubset<T, DeveloperProfileUpdateArgs<ExtArgs>>): Prisma__DeveloperProfileClient<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeveloperProfiles.
     * @param {DeveloperProfileDeleteManyArgs} args - Arguments to filter DeveloperProfiles to delete.
     * @example
     * // Delete a few DeveloperProfiles
     * const { count } = await prisma.developerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeveloperProfileDeleteManyArgs>(args?: SelectSubset<T, DeveloperProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeveloperProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeveloperProfiles
     * const developerProfile = await prisma.developerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeveloperProfileUpdateManyArgs>(args: SelectSubset<T, DeveloperProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeveloperProfiles and returns the data updated in the database.
     * @param {DeveloperProfileUpdateManyAndReturnArgs} args - Arguments to update many DeveloperProfiles.
     * @example
     * // Update many DeveloperProfiles
     * const developerProfile = await prisma.developerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeveloperProfiles and only return the `id`
     * const developerProfileWithIdOnly = await prisma.developerProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeveloperProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, DeveloperProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeveloperProfile.
     * @param {DeveloperProfileUpsertArgs} args - Arguments to update or create a DeveloperProfile.
     * @example
     * // Update or create a DeveloperProfile
     * const developerProfile = await prisma.developerProfile.upsert({
     *   create: {
     *     // ... data to create a DeveloperProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeveloperProfile we want to update
     *   }
     * })
     */
    upsert<T extends DeveloperProfileUpsertArgs>(args: SelectSubset<T, DeveloperProfileUpsertArgs<ExtArgs>>): Prisma__DeveloperProfileClient<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeveloperProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperProfileCountArgs} args - Arguments to filter DeveloperProfiles to count.
     * @example
     * // Count the number of DeveloperProfiles
     * const count = await prisma.developerProfile.count({
     *   where: {
     *     // ... the filter for the DeveloperProfiles we want to count
     *   }
     * })
    **/
    count<T extends DeveloperProfileCountArgs>(
      args?: Subset<T, DeveloperProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeveloperProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeveloperProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeveloperProfileAggregateArgs>(args: Subset<T, DeveloperProfileAggregateArgs>): Prisma.PrismaPromise<GetDeveloperProfileAggregateType<T>>

    /**
     * Group by DeveloperProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeveloperProfileGroupByArgs} args - Group by arguments.
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
      T extends DeveloperProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeveloperProfileGroupByArgs['orderBy'] }
        : { orderBy?: DeveloperProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeveloperProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeveloperProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeveloperProfile model
   */
  readonly fields: DeveloperProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeveloperProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeveloperProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends DeveloperProfile$tasksArgs<ExtArgs> = {}>(args?: Subset<T, DeveloperProfile$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DeveloperProfile model
   */
  interface DeveloperProfileFieldRefs {
    readonly id: FieldRef<"DeveloperProfile", 'Int'>
    readonly userId: FieldRef<"DeveloperProfile", 'Int'>
    readonly hourlyRate: FieldRef<"DeveloperProfile", 'Decimal'>
    readonly skills: FieldRef<"DeveloperProfile", 'Json'>
    readonly walletAddress: FieldRef<"DeveloperProfile", 'String'>
    readonly bio: FieldRef<"DeveloperProfile", 'String'>
    readonly rating: FieldRef<"DeveloperProfile", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * DeveloperProfile findUnique
   */
  export type DeveloperProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    /**
     * Filter, which DeveloperProfile to fetch.
     */
    where: DeveloperProfileWhereUniqueInput
  }

  /**
   * DeveloperProfile findUniqueOrThrow
   */
  export type DeveloperProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    /**
     * Filter, which DeveloperProfile to fetch.
     */
    where: DeveloperProfileWhereUniqueInput
  }

  /**
   * DeveloperProfile findFirst
   */
  export type DeveloperProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    /**
     * Filter, which DeveloperProfile to fetch.
     */
    where?: DeveloperProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeveloperProfiles to fetch.
     */
    orderBy?: DeveloperProfileOrderByWithRelationInput | DeveloperProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeveloperProfiles.
     */
    cursor?: DeveloperProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeveloperProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeveloperProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeveloperProfiles.
     */
    distinct?: DeveloperProfileScalarFieldEnum | DeveloperProfileScalarFieldEnum[]
  }

  /**
   * DeveloperProfile findFirstOrThrow
   */
  export type DeveloperProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    /**
     * Filter, which DeveloperProfile to fetch.
     */
    where?: DeveloperProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeveloperProfiles to fetch.
     */
    orderBy?: DeveloperProfileOrderByWithRelationInput | DeveloperProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeveloperProfiles.
     */
    cursor?: DeveloperProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeveloperProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeveloperProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeveloperProfiles.
     */
    distinct?: DeveloperProfileScalarFieldEnum | DeveloperProfileScalarFieldEnum[]
  }

  /**
   * DeveloperProfile findMany
   */
  export type DeveloperProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    /**
     * Filter, which DeveloperProfiles to fetch.
     */
    where?: DeveloperProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeveloperProfiles to fetch.
     */
    orderBy?: DeveloperProfileOrderByWithRelationInput | DeveloperProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeveloperProfiles.
     */
    cursor?: DeveloperProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeveloperProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeveloperProfiles.
     */
    skip?: number
    distinct?: DeveloperProfileScalarFieldEnum | DeveloperProfileScalarFieldEnum[]
  }

  /**
   * DeveloperProfile create
   */
  export type DeveloperProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a DeveloperProfile.
     */
    data: XOR<DeveloperProfileCreateInput, DeveloperProfileUncheckedCreateInput>
  }

  /**
   * DeveloperProfile createMany
   */
  export type DeveloperProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeveloperProfiles.
     */
    data: DeveloperProfileCreateManyInput | DeveloperProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeveloperProfile createManyAndReturn
   */
  export type DeveloperProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * The data used to create many DeveloperProfiles.
     */
    data: DeveloperProfileCreateManyInput | DeveloperProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeveloperProfile update
   */
  export type DeveloperProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a DeveloperProfile.
     */
    data: XOR<DeveloperProfileUpdateInput, DeveloperProfileUncheckedUpdateInput>
    /**
     * Choose, which DeveloperProfile to update.
     */
    where: DeveloperProfileWhereUniqueInput
  }

  /**
   * DeveloperProfile updateMany
   */
  export type DeveloperProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeveloperProfiles.
     */
    data: XOR<DeveloperProfileUpdateManyMutationInput, DeveloperProfileUncheckedUpdateManyInput>
    /**
     * Filter which DeveloperProfiles to update
     */
    where?: DeveloperProfileWhereInput
    /**
     * Limit how many DeveloperProfiles to update.
     */
    limit?: number
  }

  /**
   * DeveloperProfile updateManyAndReturn
   */
  export type DeveloperProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * The data used to update DeveloperProfiles.
     */
    data: XOR<DeveloperProfileUpdateManyMutationInput, DeveloperProfileUncheckedUpdateManyInput>
    /**
     * Filter which DeveloperProfiles to update
     */
    where?: DeveloperProfileWhereInput
    /**
     * Limit how many DeveloperProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeveloperProfile upsert
   */
  export type DeveloperProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the DeveloperProfile to update in case it exists.
     */
    where: DeveloperProfileWhereUniqueInput
    /**
     * In case the DeveloperProfile found by the `where` argument doesn't exist, create a new DeveloperProfile with this data.
     */
    create: XOR<DeveloperProfileCreateInput, DeveloperProfileUncheckedCreateInput>
    /**
     * In case the DeveloperProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeveloperProfileUpdateInput, DeveloperProfileUncheckedUpdateInput>
  }

  /**
   * DeveloperProfile delete
   */
  export type DeveloperProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    /**
     * Filter which DeveloperProfile to delete.
     */
    where: DeveloperProfileWhereUniqueInput
  }

  /**
   * DeveloperProfile deleteMany
   */
  export type DeveloperProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeveloperProfiles to delete
     */
    where?: DeveloperProfileWhereInput
    /**
     * Limit how many DeveloperProfiles to delete.
     */
    limit?: number
  }

  /**
   * DeveloperProfile.tasks
   */
  export type DeveloperProfile$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * DeveloperProfile without action
   */
  export type DeveloperProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
  }


  /**
   * Model EmployerProfile
   */

  export type AggregateEmployerProfile = {
    _count: EmployerProfileCountAggregateOutputType | null
    _avg: EmployerProfileAvgAggregateOutputType | null
    _sum: EmployerProfileSumAggregateOutputType | null
    _min: EmployerProfileMinAggregateOutputType | null
    _max: EmployerProfileMaxAggregateOutputType | null
  }

  export type EmployerProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmployerProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmployerProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    description: string | null
    website: string | null
    contactEmail: string | null
    verified: boolean | null
  }

  export type EmployerProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    description: string | null
    website: string | null
    contactEmail: string | null
    verified: boolean | null
  }

  export type EmployerProfileCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    description: number
    website: number
    contactEmail: number
    verified: number
    _all: number
  }


  export type EmployerProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmployerProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmployerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    description?: true
    website?: true
    contactEmail?: true
    verified?: true
  }

  export type EmployerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    description?: true
    website?: true
    contactEmail?: true
    verified?: true
  }

  export type EmployerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    description?: true
    website?: true
    contactEmail?: true
    verified?: true
    _all?: true
  }

  export type EmployerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployerProfile to aggregate.
     */
    where?: EmployerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployerProfiles to fetch.
     */
    orderBy?: EmployerProfileOrderByWithRelationInput | EmployerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployerProfiles
    **/
    _count?: true | EmployerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployerProfileMaxAggregateInputType
  }

  export type GetEmployerProfileAggregateType<T extends EmployerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployerProfile[P]>
      : GetScalarType<T[P], AggregateEmployerProfile[P]>
  }




  export type EmployerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployerProfileWhereInput
    orderBy?: EmployerProfileOrderByWithAggregationInput | EmployerProfileOrderByWithAggregationInput[]
    by: EmployerProfileScalarFieldEnum[] | EmployerProfileScalarFieldEnum
    having?: EmployerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployerProfileCountAggregateInputType | true
    _avg?: EmployerProfileAvgAggregateInputType
    _sum?: EmployerProfileSumAggregateInputType
    _min?: EmployerProfileMinAggregateInputType
    _max?: EmployerProfileMaxAggregateInputType
  }

  export type EmployerProfileGroupByOutputType = {
    id: number
    userId: number
    companyName: string | null
    description: string | null
    website: string | null
    contactEmail: string | null
    verified: boolean
    _count: EmployerProfileCountAggregateOutputType | null
    _avg: EmployerProfileAvgAggregateOutputType | null
    _sum: EmployerProfileSumAggregateOutputType | null
    _min: EmployerProfileMinAggregateOutputType | null
    _max: EmployerProfileMaxAggregateOutputType | null
  }

  type GetEmployerProfileGroupByPayload<T extends EmployerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], EmployerProfileGroupByOutputType[P]>
        }
      >
    >


  export type EmployerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    website?: boolean
    contactEmail?: boolean
    verified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employerProfile"]>

  export type EmployerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    website?: boolean
    contactEmail?: boolean
    verified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employerProfile"]>

  export type EmployerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    website?: boolean
    contactEmail?: boolean
    verified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employerProfile"]>

  export type EmployerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    website?: boolean
    contactEmail?: boolean
    verified?: boolean
  }

  export type EmployerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "description" | "website" | "contactEmail" | "verified", ExtArgs["result"]["employerProfile"]>
  export type EmployerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmployerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmployerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmployerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      companyName: string | null
      description: string | null
      website: string | null
      contactEmail: string | null
      verified: boolean
    }, ExtArgs["result"]["employerProfile"]>
    composites: {}
  }

  type EmployerProfileGetPayload<S extends boolean | null | undefined | EmployerProfileDefaultArgs> = $Result.GetResult<Prisma.$EmployerProfilePayload, S>

  type EmployerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployerProfileCountAggregateInputType | true
    }

  export interface EmployerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployerProfile'], meta: { name: 'EmployerProfile' } }
    /**
     * Find zero or one EmployerProfile that matches the filter.
     * @param {EmployerProfileFindUniqueArgs} args - Arguments to find a EmployerProfile
     * @example
     * // Get one EmployerProfile
     * const employerProfile = await prisma.employerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployerProfileFindUniqueArgs>(args: SelectSubset<T, EmployerProfileFindUniqueArgs<ExtArgs>>): Prisma__EmployerProfileClient<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployerProfileFindUniqueOrThrowArgs} args - Arguments to find a EmployerProfile
     * @example
     * // Get one EmployerProfile
     * const employerProfile = await prisma.employerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployerProfileClient<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileFindFirstArgs} args - Arguments to find a EmployerProfile
     * @example
     * // Get one EmployerProfile
     * const employerProfile = await prisma.employerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployerProfileFindFirstArgs>(args?: SelectSubset<T, EmployerProfileFindFirstArgs<ExtArgs>>): Prisma__EmployerProfileClient<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileFindFirstOrThrowArgs} args - Arguments to find a EmployerProfile
     * @example
     * // Get one EmployerProfile
     * const employerProfile = await prisma.employerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployerProfileClient<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployerProfiles
     * const employerProfiles = await prisma.employerProfile.findMany()
     * 
     * // Get first 10 EmployerProfiles
     * const employerProfiles = await prisma.employerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employerProfileWithIdOnly = await prisma.employerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployerProfileFindManyArgs>(args?: SelectSubset<T, EmployerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployerProfile.
     * @param {EmployerProfileCreateArgs} args - Arguments to create a EmployerProfile.
     * @example
     * // Create one EmployerProfile
     * const EmployerProfile = await prisma.employerProfile.create({
     *   data: {
     *     // ... data to create a EmployerProfile
     *   }
     * })
     * 
     */
    create<T extends EmployerProfileCreateArgs>(args: SelectSubset<T, EmployerProfileCreateArgs<ExtArgs>>): Prisma__EmployerProfileClient<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployerProfiles.
     * @param {EmployerProfileCreateManyArgs} args - Arguments to create many EmployerProfiles.
     * @example
     * // Create many EmployerProfiles
     * const employerProfile = await prisma.employerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployerProfileCreateManyArgs>(args?: SelectSubset<T, EmployerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployerProfiles and returns the data saved in the database.
     * @param {EmployerProfileCreateManyAndReturnArgs} args - Arguments to create many EmployerProfiles.
     * @example
     * // Create many EmployerProfiles
     * const employerProfile = await prisma.employerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployerProfiles and only return the `id`
     * const employerProfileWithIdOnly = await prisma.employerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployerProfile.
     * @param {EmployerProfileDeleteArgs} args - Arguments to delete one EmployerProfile.
     * @example
     * // Delete one EmployerProfile
     * const EmployerProfile = await prisma.employerProfile.delete({
     *   where: {
     *     // ... filter to delete one EmployerProfile
     *   }
     * })
     * 
     */
    delete<T extends EmployerProfileDeleteArgs>(args: SelectSubset<T, EmployerProfileDeleteArgs<ExtArgs>>): Prisma__EmployerProfileClient<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployerProfile.
     * @param {EmployerProfileUpdateArgs} args - Arguments to update one EmployerProfile.
     * @example
     * // Update one EmployerProfile
     * const employerProfile = await prisma.employerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployerProfileUpdateArgs>(args: SelectSubset<T, EmployerProfileUpdateArgs<ExtArgs>>): Prisma__EmployerProfileClient<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployerProfiles.
     * @param {EmployerProfileDeleteManyArgs} args - Arguments to filter EmployerProfiles to delete.
     * @example
     * // Delete a few EmployerProfiles
     * const { count } = await prisma.employerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployerProfileDeleteManyArgs>(args?: SelectSubset<T, EmployerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployerProfiles
     * const employerProfile = await prisma.employerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployerProfileUpdateManyArgs>(args: SelectSubset<T, EmployerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployerProfiles and returns the data updated in the database.
     * @param {EmployerProfileUpdateManyAndReturnArgs} args - Arguments to update many EmployerProfiles.
     * @example
     * // Update many EmployerProfiles
     * const employerProfile = await prisma.employerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployerProfiles and only return the `id`
     * const employerProfileWithIdOnly = await prisma.employerProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployerProfile.
     * @param {EmployerProfileUpsertArgs} args - Arguments to update or create a EmployerProfile.
     * @example
     * // Update or create a EmployerProfile
     * const employerProfile = await prisma.employerProfile.upsert({
     *   create: {
     *     // ... data to create a EmployerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployerProfile we want to update
     *   }
     * })
     */
    upsert<T extends EmployerProfileUpsertArgs>(args: SelectSubset<T, EmployerProfileUpsertArgs<ExtArgs>>): Prisma__EmployerProfileClient<$Result.GetResult<Prisma.$EmployerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileCountArgs} args - Arguments to filter EmployerProfiles to count.
     * @example
     * // Count the number of EmployerProfiles
     * const count = await prisma.employerProfile.count({
     *   where: {
     *     // ... the filter for the EmployerProfiles we want to count
     *   }
     * })
    **/
    count<T extends EmployerProfileCountArgs>(
      args?: Subset<T, EmployerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployerProfileAggregateArgs>(args: Subset<T, EmployerProfileAggregateArgs>): Prisma.PrismaPromise<GetEmployerProfileAggregateType<T>>

    /**
     * Group by EmployerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileGroupByArgs} args - Group by arguments.
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
      T extends EmployerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployerProfileGroupByArgs['orderBy'] }
        : { orderBy?: EmployerProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployerProfile model
   */
  readonly fields: EmployerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmployerProfile model
   */
  interface EmployerProfileFieldRefs {
    readonly id: FieldRef<"EmployerProfile", 'Int'>
    readonly userId: FieldRef<"EmployerProfile", 'Int'>
    readonly companyName: FieldRef<"EmployerProfile", 'String'>
    readonly description: FieldRef<"EmployerProfile", 'String'>
    readonly website: FieldRef<"EmployerProfile", 'String'>
    readonly contactEmail: FieldRef<"EmployerProfile", 'String'>
    readonly verified: FieldRef<"EmployerProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EmployerProfile findUnique
   */
  export type EmployerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
    /**
     * Filter, which EmployerProfile to fetch.
     */
    where: EmployerProfileWhereUniqueInput
  }

  /**
   * EmployerProfile findUniqueOrThrow
   */
  export type EmployerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
    /**
     * Filter, which EmployerProfile to fetch.
     */
    where: EmployerProfileWhereUniqueInput
  }

  /**
   * EmployerProfile findFirst
   */
  export type EmployerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
    /**
     * Filter, which EmployerProfile to fetch.
     */
    where?: EmployerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployerProfiles to fetch.
     */
    orderBy?: EmployerProfileOrderByWithRelationInput | EmployerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployerProfiles.
     */
    cursor?: EmployerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployerProfiles.
     */
    distinct?: EmployerProfileScalarFieldEnum | EmployerProfileScalarFieldEnum[]
  }

  /**
   * EmployerProfile findFirstOrThrow
   */
  export type EmployerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
    /**
     * Filter, which EmployerProfile to fetch.
     */
    where?: EmployerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployerProfiles to fetch.
     */
    orderBy?: EmployerProfileOrderByWithRelationInput | EmployerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployerProfiles.
     */
    cursor?: EmployerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployerProfiles.
     */
    distinct?: EmployerProfileScalarFieldEnum | EmployerProfileScalarFieldEnum[]
  }

  /**
   * EmployerProfile findMany
   */
  export type EmployerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
    /**
     * Filter, which EmployerProfiles to fetch.
     */
    where?: EmployerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployerProfiles to fetch.
     */
    orderBy?: EmployerProfileOrderByWithRelationInput | EmployerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployerProfiles.
     */
    cursor?: EmployerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployerProfiles.
     */
    skip?: number
    distinct?: EmployerProfileScalarFieldEnum | EmployerProfileScalarFieldEnum[]
  }

  /**
   * EmployerProfile create
   */
  export type EmployerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployerProfile.
     */
    data: XOR<EmployerProfileCreateInput, EmployerProfileUncheckedCreateInput>
  }

  /**
   * EmployerProfile createMany
   */
  export type EmployerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployerProfiles.
     */
    data: EmployerProfileCreateManyInput | EmployerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployerProfile createManyAndReturn
   */
  export type EmployerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many EmployerProfiles.
     */
    data: EmployerProfileCreateManyInput | EmployerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployerProfile update
   */
  export type EmployerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployerProfile.
     */
    data: XOR<EmployerProfileUpdateInput, EmployerProfileUncheckedUpdateInput>
    /**
     * Choose, which EmployerProfile to update.
     */
    where: EmployerProfileWhereUniqueInput
  }

  /**
   * EmployerProfile updateMany
   */
  export type EmployerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployerProfiles.
     */
    data: XOR<EmployerProfileUpdateManyMutationInput, EmployerProfileUncheckedUpdateManyInput>
    /**
     * Filter which EmployerProfiles to update
     */
    where?: EmployerProfileWhereInput
    /**
     * Limit how many EmployerProfiles to update.
     */
    limit?: number
  }

  /**
   * EmployerProfile updateManyAndReturn
   */
  export type EmployerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * The data used to update EmployerProfiles.
     */
    data: XOR<EmployerProfileUpdateManyMutationInput, EmployerProfileUncheckedUpdateManyInput>
    /**
     * Filter which EmployerProfiles to update
     */
    where?: EmployerProfileWhereInput
    /**
     * Limit how many EmployerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployerProfile upsert
   */
  export type EmployerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployerProfile to update in case it exists.
     */
    where: EmployerProfileWhereUniqueInput
    /**
     * In case the EmployerProfile found by the `where` argument doesn't exist, create a new EmployerProfile with this data.
     */
    create: XOR<EmployerProfileCreateInput, EmployerProfileUncheckedCreateInput>
    /**
     * In case the EmployerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployerProfileUpdateInput, EmployerProfileUncheckedUpdateInput>
  }

  /**
   * EmployerProfile delete
   */
  export type EmployerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
    /**
     * Filter which EmployerProfile to delete.
     */
    where: EmployerProfileWhereUniqueInput
  }

  /**
   * EmployerProfile deleteMany
   */
  export type EmployerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployerProfiles to delete
     */
    where?: EmployerProfileWhereInput
    /**
     * Limit how many EmployerProfiles to delete.
     */
    limit?: number
  }

  /**
   * EmployerProfile without action
   */
  export type EmployerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    developerId: number | null
    minBudget: Decimal | null
    maxBudget: Decimal | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    developerId: number | null
    minBudget: Decimal | null
    maxBudget: Decimal | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    authorId: number | null
    developerId: number | null
    title: string | null
    description: string | null
    minBudget: Decimal | null
    maxBudget: Decimal | null
    timeEstimate: string | null
    status: $Enums.TaskStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    authorId: number | null
    developerId: number | null
    title: string | null
    description: string | null
    minBudget: Decimal | null
    maxBudget: Decimal | null
    timeEstimate: string | null
    status: $Enums.TaskStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    authorId: number
    developerId: number
    title: number
    description: number
    minBudget: number
    maxBudget: number
    timeEstimate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    authorId?: true
    developerId?: true
    minBudget?: true
    maxBudget?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    authorId?: true
    developerId?: true
    minBudget?: true
    maxBudget?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    authorId?: true
    developerId?: true
    title?: true
    description?: true
    minBudget?: true
    maxBudget?: true
    timeEstimate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    authorId?: true
    developerId?: true
    title?: true
    description?: true
    minBudget?: true
    maxBudget?: true
    timeEstimate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    authorId?: true
    developerId?: true
    title?: true
    description?: true
    minBudget?: true
    maxBudget?: true
    timeEstimate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    authorId: number
    developerId: number | null
    title: string
    description: string
    minBudget: Decimal | null
    maxBudget: Decimal | null
    timeEstimate: string | null
    status: $Enums.TaskStatus
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    developerId?: boolean
    title?: boolean
    description?: boolean
    minBudget?: boolean
    maxBudget?: boolean
    timeEstimate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    developer?: boolean | Task$developerArgs<ExtArgs>
    offers?: boolean | Task$offersArgs<ExtArgs>
    feedbacks?: boolean | Task$feedbacksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    developerId?: boolean
    title?: boolean
    description?: boolean
    minBudget?: boolean
    maxBudget?: boolean
    timeEstimate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    developer?: boolean | Task$developerArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    developerId?: boolean
    title?: boolean
    description?: boolean
    minBudget?: boolean
    maxBudget?: boolean
    timeEstimate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    developer?: boolean | Task$developerArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    authorId?: boolean
    developerId?: boolean
    title?: boolean
    description?: boolean
    minBudget?: boolean
    maxBudget?: boolean
    timeEstimate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "developerId" | "title" | "description" | "minBudget" | "maxBudget" | "timeEstimate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    developer?: boolean | Task$developerArgs<ExtArgs>
    offers?: boolean | Task$offersArgs<ExtArgs>
    feedbacks?: boolean | Task$feedbacksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    developer?: boolean | Task$developerArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    developer?: boolean | Task$developerArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      developer: Prisma.$DeveloperProfilePayload<ExtArgs> | null
      offers: Prisma.$TaskOfferPayload<ExtArgs>[]
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      authorId: number
      developerId: number | null
      title: string
      description: string
      minBudget: Prisma.Decimal | null
      maxBudget: Prisma.Decimal | null
      timeEstimate: string | null
      status: $Enums.TaskStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    developer<T extends Task$developerArgs<ExtArgs> = {}>(args?: Subset<T, Task$developerArgs<ExtArgs>>): Prisma__DeveloperProfileClient<$Result.GetResult<Prisma.$DeveloperProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    offers<T extends Task$offersArgs<ExtArgs> = {}>(args?: Subset<T, Task$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends Task$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, Task$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly authorId: FieldRef<"Task", 'Int'>
    readonly developerId: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly minBudget: FieldRef<"Task", 'Decimal'>
    readonly maxBudget: FieldRef<"Task", 'Decimal'>
    readonly timeEstimate: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.developer
   */
  export type Task$developerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeveloperProfile
     */
    select?: DeveloperProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeveloperProfile
     */
    omit?: DeveloperProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeveloperProfileInclude<ExtArgs> | null
    where?: DeveloperProfileWhereInput
  }

  /**
   * Task.offers
   */
  export type Task$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    where?: TaskOfferWhereInput
    orderBy?: TaskOfferOrderByWithRelationInput | TaskOfferOrderByWithRelationInput[]
    cursor?: TaskOfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskOfferScalarFieldEnum | TaskOfferScalarFieldEnum[]
  }

  /**
   * Task.feedbacks
   */
  export type Task$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskOffer
   */

  export type AggregateTaskOffer = {
    _count: TaskOfferCountAggregateOutputType | null
    _avg: TaskOfferAvgAggregateOutputType | null
    _sum: TaskOfferSumAggregateOutputType | null
    _min: TaskOfferMinAggregateOutputType | null
    _max: TaskOfferMaxAggregateOutputType | null
  }

  export type TaskOfferAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
    proposedCost: Decimal | null
  }

  export type TaskOfferSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
    proposedCost: Decimal | null
  }

  export type TaskOfferMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
    plan: string | null
    proposedCost: Decimal | null
    proposedTime: string | null
    status: $Enums.OfferStatus | null
    createdAt: Date | null
  }

  export type TaskOfferMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    userId: number | null
    plan: string | null
    proposedCost: Decimal | null
    proposedTime: string | null
    status: $Enums.OfferStatus | null
    createdAt: Date | null
  }

  export type TaskOfferCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    plan: number
    proposedCost: number
    proposedTime: number
    status: number
    createdAt: number
    _all: number
  }


  export type TaskOfferAvgAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    proposedCost?: true
  }

  export type TaskOfferSumAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    proposedCost?: true
  }

  export type TaskOfferMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    plan?: true
    proposedCost?: true
    proposedTime?: true
    status?: true
    createdAt?: true
  }

  export type TaskOfferMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    plan?: true
    proposedCost?: true
    proposedTime?: true
    status?: true
    createdAt?: true
  }

  export type TaskOfferCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    plan?: true
    proposedCost?: true
    proposedTime?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TaskOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskOffer to aggregate.
     */
    where?: TaskOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskOffers to fetch.
     */
    orderBy?: TaskOfferOrderByWithRelationInput | TaskOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskOffers
    **/
    _count?: true | TaskOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskOfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskOfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskOfferMaxAggregateInputType
  }

  export type GetTaskOfferAggregateType<T extends TaskOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskOffer[P]>
      : GetScalarType<T[P], AggregateTaskOffer[P]>
  }




  export type TaskOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskOfferWhereInput
    orderBy?: TaskOfferOrderByWithAggregationInput | TaskOfferOrderByWithAggregationInput[]
    by: TaskOfferScalarFieldEnum[] | TaskOfferScalarFieldEnum
    having?: TaskOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskOfferCountAggregateInputType | true
    _avg?: TaskOfferAvgAggregateInputType
    _sum?: TaskOfferSumAggregateInputType
    _min?: TaskOfferMinAggregateInputType
    _max?: TaskOfferMaxAggregateInputType
  }

  export type TaskOfferGroupByOutputType = {
    id: number
    taskId: number
    userId: number
    plan: string | null
    proposedCost: Decimal | null
    proposedTime: string | null
    status: $Enums.OfferStatus
    createdAt: Date
    _count: TaskOfferCountAggregateOutputType | null
    _avg: TaskOfferAvgAggregateOutputType | null
    _sum: TaskOfferSumAggregateOutputType | null
    _min: TaskOfferMinAggregateOutputType | null
    _max: TaskOfferMaxAggregateOutputType | null
  }

  type GetTaskOfferGroupByPayload<T extends TaskOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskOfferGroupByOutputType[P]>
            : GetScalarType<T[P], TaskOfferGroupByOutputType[P]>
        }
      >
    >


  export type TaskOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    plan?: boolean
    proposedCost?: boolean
    proposedTime?: boolean
    status?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskOffer"]>

  export type TaskOfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    plan?: boolean
    proposedCost?: boolean
    proposedTime?: boolean
    status?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskOffer"]>

  export type TaskOfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    plan?: boolean
    proposedCost?: boolean
    proposedTime?: boolean
    status?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskOffer"]>

  export type TaskOfferSelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    plan?: boolean
    proposedCost?: boolean
    proposedTime?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TaskOfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "userId" | "plan" | "proposedCost" | "proposedTime" | "status" | "createdAt", ExtArgs["result"]["taskOffer"]>
  export type TaskOfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskOfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskOfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskOffer"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      userId: number
      plan: string | null
      proposedCost: Prisma.Decimal | null
      proposedTime: string | null
      status: $Enums.OfferStatus
      createdAt: Date
    }, ExtArgs["result"]["taskOffer"]>
    composites: {}
  }

  type TaskOfferGetPayload<S extends boolean | null | undefined | TaskOfferDefaultArgs> = $Result.GetResult<Prisma.$TaskOfferPayload, S>

  type TaskOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskOfferCountAggregateInputType | true
    }

  export interface TaskOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskOffer'], meta: { name: 'TaskOffer' } }
    /**
     * Find zero or one TaskOffer that matches the filter.
     * @param {TaskOfferFindUniqueArgs} args - Arguments to find a TaskOffer
     * @example
     * // Get one TaskOffer
     * const taskOffer = await prisma.taskOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskOfferFindUniqueArgs>(args: SelectSubset<T, TaskOfferFindUniqueArgs<ExtArgs>>): Prisma__TaskOfferClient<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskOffer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskOfferFindUniqueOrThrowArgs} args - Arguments to find a TaskOffer
     * @example
     * // Get one TaskOffer
     * const taskOffer = await prisma.taskOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskOfferClient<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOfferFindFirstArgs} args - Arguments to find a TaskOffer
     * @example
     * // Get one TaskOffer
     * const taskOffer = await prisma.taskOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskOfferFindFirstArgs>(args?: SelectSubset<T, TaskOfferFindFirstArgs<ExtArgs>>): Prisma__TaskOfferClient<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOfferFindFirstOrThrowArgs} args - Arguments to find a TaskOffer
     * @example
     * // Get one TaskOffer
     * const taskOffer = await prisma.taskOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskOfferClient<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskOffers
     * const taskOffers = await prisma.taskOffer.findMany()
     * 
     * // Get first 10 TaskOffers
     * const taskOffers = await prisma.taskOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskOfferWithIdOnly = await prisma.taskOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskOfferFindManyArgs>(args?: SelectSubset<T, TaskOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskOffer.
     * @param {TaskOfferCreateArgs} args - Arguments to create a TaskOffer.
     * @example
     * // Create one TaskOffer
     * const TaskOffer = await prisma.taskOffer.create({
     *   data: {
     *     // ... data to create a TaskOffer
     *   }
     * })
     * 
     */
    create<T extends TaskOfferCreateArgs>(args: SelectSubset<T, TaskOfferCreateArgs<ExtArgs>>): Prisma__TaskOfferClient<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskOffers.
     * @param {TaskOfferCreateManyArgs} args - Arguments to create many TaskOffers.
     * @example
     * // Create many TaskOffers
     * const taskOffer = await prisma.taskOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskOfferCreateManyArgs>(args?: SelectSubset<T, TaskOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskOffers and returns the data saved in the database.
     * @param {TaskOfferCreateManyAndReturnArgs} args - Arguments to create many TaskOffers.
     * @example
     * // Create many TaskOffers
     * const taskOffer = await prisma.taskOffer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskOffers and only return the `id`
     * const taskOfferWithIdOnly = await prisma.taskOffer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskOfferCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskOffer.
     * @param {TaskOfferDeleteArgs} args - Arguments to delete one TaskOffer.
     * @example
     * // Delete one TaskOffer
     * const TaskOffer = await prisma.taskOffer.delete({
     *   where: {
     *     // ... filter to delete one TaskOffer
     *   }
     * })
     * 
     */
    delete<T extends TaskOfferDeleteArgs>(args: SelectSubset<T, TaskOfferDeleteArgs<ExtArgs>>): Prisma__TaskOfferClient<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskOffer.
     * @param {TaskOfferUpdateArgs} args - Arguments to update one TaskOffer.
     * @example
     * // Update one TaskOffer
     * const taskOffer = await prisma.taskOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskOfferUpdateArgs>(args: SelectSubset<T, TaskOfferUpdateArgs<ExtArgs>>): Prisma__TaskOfferClient<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskOffers.
     * @param {TaskOfferDeleteManyArgs} args - Arguments to filter TaskOffers to delete.
     * @example
     * // Delete a few TaskOffers
     * const { count } = await prisma.taskOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskOfferDeleteManyArgs>(args?: SelectSubset<T, TaskOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskOffers
     * const taskOffer = await prisma.taskOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskOfferUpdateManyArgs>(args: SelectSubset<T, TaskOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskOffers and returns the data updated in the database.
     * @param {TaskOfferUpdateManyAndReturnArgs} args - Arguments to update many TaskOffers.
     * @example
     * // Update many TaskOffers
     * const taskOffer = await prisma.taskOffer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskOffers and only return the `id`
     * const taskOfferWithIdOnly = await prisma.taskOffer.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskOfferUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskOfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskOffer.
     * @param {TaskOfferUpsertArgs} args - Arguments to update or create a TaskOffer.
     * @example
     * // Update or create a TaskOffer
     * const taskOffer = await prisma.taskOffer.upsert({
     *   create: {
     *     // ... data to create a TaskOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskOffer we want to update
     *   }
     * })
     */
    upsert<T extends TaskOfferUpsertArgs>(args: SelectSubset<T, TaskOfferUpsertArgs<ExtArgs>>): Prisma__TaskOfferClient<$Result.GetResult<Prisma.$TaskOfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOfferCountArgs} args - Arguments to filter TaskOffers to count.
     * @example
     * // Count the number of TaskOffers
     * const count = await prisma.taskOffer.count({
     *   where: {
     *     // ... the filter for the TaskOffers we want to count
     *   }
     * })
    **/
    count<T extends TaskOfferCountArgs>(
      args?: Subset<T, TaskOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskOfferAggregateArgs>(args: Subset<T, TaskOfferAggregateArgs>): Prisma.PrismaPromise<GetTaskOfferAggregateType<T>>

    /**
     * Group by TaskOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskOfferGroupByArgs} args - Group by arguments.
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
      T extends TaskOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskOfferGroupByArgs['orderBy'] }
        : { orderBy?: TaskOfferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskOffer model
   */
  readonly fields: TaskOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskOffer model
   */
  interface TaskOfferFieldRefs {
    readonly id: FieldRef<"TaskOffer", 'Int'>
    readonly taskId: FieldRef<"TaskOffer", 'Int'>
    readonly userId: FieldRef<"TaskOffer", 'Int'>
    readonly plan: FieldRef<"TaskOffer", 'String'>
    readonly proposedCost: FieldRef<"TaskOffer", 'Decimal'>
    readonly proposedTime: FieldRef<"TaskOffer", 'String'>
    readonly status: FieldRef<"TaskOffer", 'OfferStatus'>
    readonly createdAt: FieldRef<"TaskOffer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskOffer findUnique
   */
  export type TaskOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    /**
     * Filter, which TaskOffer to fetch.
     */
    where: TaskOfferWhereUniqueInput
  }

  /**
   * TaskOffer findUniqueOrThrow
   */
  export type TaskOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    /**
     * Filter, which TaskOffer to fetch.
     */
    where: TaskOfferWhereUniqueInput
  }

  /**
   * TaskOffer findFirst
   */
  export type TaskOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    /**
     * Filter, which TaskOffer to fetch.
     */
    where?: TaskOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskOffers to fetch.
     */
    orderBy?: TaskOfferOrderByWithRelationInput | TaskOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskOffers.
     */
    cursor?: TaskOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskOffers.
     */
    distinct?: TaskOfferScalarFieldEnum | TaskOfferScalarFieldEnum[]
  }

  /**
   * TaskOffer findFirstOrThrow
   */
  export type TaskOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    /**
     * Filter, which TaskOffer to fetch.
     */
    where?: TaskOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskOffers to fetch.
     */
    orderBy?: TaskOfferOrderByWithRelationInput | TaskOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskOffers.
     */
    cursor?: TaskOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskOffers.
     */
    distinct?: TaskOfferScalarFieldEnum | TaskOfferScalarFieldEnum[]
  }

  /**
   * TaskOffer findMany
   */
  export type TaskOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    /**
     * Filter, which TaskOffers to fetch.
     */
    where?: TaskOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskOffers to fetch.
     */
    orderBy?: TaskOfferOrderByWithRelationInput | TaskOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskOffers.
     */
    cursor?: TaskOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskOffers.
     */
    skip?: number
    distinct?: TaskOfferScalarFieldEnum | TaskOfferScalarFieldEnum[]
  }

  /**
   * TaskOffer create
   */
  export type TaskOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskOffer.
     */
    data: XOR<TaskOfferCreateInput, TaskOfferUncheckedCreateInput>
  }

  /**
   * TaskOffer createMany
   */
  export type TaskOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskOffers.
     */
    data: TaskOfferCreateManyInput | TaskOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskOffer createManyAndReturn
   */
  export type TaskOfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * The data used to create many TaskOffers.
     */
    data: TaskOfferCreateManyInput | TaskOfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskOffer update
   */
  export type TaskOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskOffer.
     */
    data: XOR<TaskOfferUpdateInput, TaskOfferUncheckedUpdateInput>
    /**
     * Choose, which TaskOffer to update.
     */
    where: TaskOfferWhereUniqueInput
  }

  /**
   * TaskOffer updateMany
   */
  export type TaskOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskOffers.
     */
    data: XOR<TaskOfferUpdateManyMutationInput, TaskOfferUncheckedUpdateManyInput>
    /**
     * Filter which TaskOffers to update
     */
    where?: TaskOfferWhereInput
    /**
     * Limit how many TaskOffers to update.
     */
    limit?: number
  }

  /**
   * TaskOffer updateManyAndReturn
   */
  export type TaskOfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * The data used to update TaskOffers.
     */
    data: XOR<TaskOfferUpdateManyMutationInput, TaskOfferUncheckedUpdateManyInput>
    /**
     * Filter which TaskOffers to update
     */
    where?: TaskOfferWhereInput
    /**
     * Limit how many TaskOffers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskOffer upsert
   */
  export type TaskOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskOffer to update in case it exists.
     */
    where: TaskOfferWhereUniqueInput
    /**
     * In case the TaskOffer found by the `where` argument doesn't exist, create a new TaskOffer with this data.
     */
    create: XOR<TaskOfferCreateInput, TaskOfferUncheckedCreateInput>
    /**
     * In case the TaskOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskOfferUpdateInput, TaskOfferUncheckedUpdateInput>
  }

  /**
   * TaskOffer delete
   */
  export type TaskOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
    /**
     * Filter which TaskOffer to delete.
     */
    where: TaskOfferWhereUniqueInput
  }

  /**
   * TaskOffer deleteMany
   */
  export type TaskOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskOffers to delete
     */
    where?: TaskOfferWhereInput
    /**
     * Limit how many TaskOffers to delete.
     */
    limit?: number
  }

  /**
   * TaskOffer without action
   */
  export type TaskOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskOffer
     */
    select?: TaskOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskOffer
     */
    omit?: TaskOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskOfferInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: Decimal | null
    txHash: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: Decimal | null
    txHash: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    txHash: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    txHash?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    txHash?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    txHash?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    userId: number
    amount: Decimal
    txHash: string | null
    status: $Enums.PaymentStatus
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    txHash?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    txHash?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    txHash?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    txHash?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "txHash" | "status" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: Prisma.Decimal
      txHash: string | null
      status: $Enums.PaymentStatus
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly userId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly txHash: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    authorId: number | null
    targetId: number | null
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    authorId: number | null
    targetId: number | null
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    authorId: number | null
    targetId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    authorId: number | null
    targetId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    taskId: number
    authorId: number
    targetId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    taskId?: true
    authorId?: true
    targetId?: true
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    taskId?: true
    authorId?: true
    targetId?: true
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    taskId?: true
    authorId?: true
    targetId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    taskId?: true
    authorId?: true
    targetId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    taskId?: true
    authorId?: true
    targetId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    taskId: number
    authorId: number
    targetId: number
    rating: number
    comment: string | null
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    authorId?: boolean
    targetId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    authorId?: boolean
    targetId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    authorId?: boolean
    targetId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    taskId?: boolean
    authorId?: boolean
    targetId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "authorId" | "targetId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    target?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      target: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      authorId: number
      targetId: number
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    target<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly taskId: FieldRef<"Feedback", 'Int'>
    readonly authorId: FieldRef<"Feedback", 'Int'>
    readonly targetId: FieldRef<"Feedback", 'Int'>
    readonly rating: FieldRef<"Feedback", 'Int'>
    readonly comment: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
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
    telegramId: 'telegramId',
    tgUsername: 'tgUsername',
    displayName: 'displayName',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeveloperProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    hourlyRate: 'hourlyRate',
    skills: 'skills',
    walletAddress: 'walletAddress',
    bio: 'bio',
    rating: 'rating'
  };

  export type DeveloperProfileScalarFieldEnum = (typeof DeveloperProfileScalarFieldEnum)[keyof typeof DeveloperProfileScalarFieldEnum]


  export const EmployerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    description: 'description',
    website: 'website',
    contactEmail: 'contactEmail',
    verified: 'verified'
  };

  export type EmployerProfileScalarFieldEnum = (typeof EmployerProfileScalarFieldEnum)[keyof typeof EmployerProfileScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    developerId: 'developerId',
    title: 'title',
    description: 'description',
    minBudget: 'minBudget',
    maxBudget: 'maxBudget',
    timeEstimate: 'timeEstimate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskOfferScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    plan: 'plan',
    proposedCost: 'proposedCost',
    proposedTime: 'proposedTime',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TaskOfferScalarFieldEnum = (typeof TaskOfferScalarFieldEnum)[keyof typeof TaskOfferScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    txHash: 'txHash',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    authorId: 'authorId',
    targetId: 'targetId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'OfferStatus'
   */
  export type EnumOfferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferStatus'>
    


  /**
   * Reference to a field of type 'OfferStatus[]'
   */
  export type ListEnumOfferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    telegramId?: BigIntFilter<"User"> | bigint | number
    tgUsername?: StringNullableFilter<"User"> | string | null
    displayName?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    developerProfile?: XOR<DeveloperProfileNullableScalarRelationFilter, DeveloperProfileWhereInput> | null
    employerProfile?: XOR<EmployerProfileNullableScalarRelationFilter, EmployerProfileWhereInput> | null
    tasksAuthored?: TaskListRelationFilter
    offers?: TaskOfferListRelationFilter
    feedbacksLeft?: FeedbackListRelationFilter
    feedbacksGot?: FeedbackListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    tgUsername?: SortOrderInput | SortOrder
    displayName?: SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    developerProfile?: DeveloperProfileOrderByWithRelationInput
    employerProfile?: EmployerProfileOrderByWithRelationInput
    tasksAuthored?: TaskOrderByRelationAggregateInput
    offers?: TaskOfferOrderByRelationAggregateInput
    feedbacksLeft?: FeedbackOrderByRelationAggregateInput
    feedbacksGot?: FeedbackOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telegramId?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    tgUsername?: StringNullableFilter<"User"> | string | null
    displayName?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    developerProfile?: XOR<DeveloperProfileNullableScalarRelationFilter, DeveloperProfileWhereInput> | null
    employerProfile?: XOR<EmployerProfileNullableScalarRelationFilter, EmployerProfileWhereInput> | null
    tasksAuthored?: TaskListRelationFilter
    offers?: TaskOfferListRelationFilter
    feedbacksLeft?: FeedbackListRelationFilter
    feedbacksGot?: FeedbackListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "telegramId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    tgUsername?: SortOrderInput | SortOrder
    displayName?: SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    telegramId?: BigIntWithAggregatesFilter<"User"> | bigint | number
    tgUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DeveloperProfileWhereInput = {
    AND?: DeveloperProfileWhereInput | DeveloperProfileWhereInput[]
    OR?: DeveloperProfileWhereInput[]
    NOT?: DeveloperProfileWhereInput | DeveloperProfileWhereInput[]
    id?: IntFilter<"DeveloperProfile"> | number
    userId?: IntFilter<"DeveloperProfile"> | number
    hourlyRate?: DecimalNullableFilter<"DeveloperProfile"> | Decimal | DecimalJsLike | number | string | null
    skills?: JsonNullableFilter<"DeveloperProfile">
    walletAddress?: StringNullableFilter<"DeveloperProfile"> | string | null
    bio?: StringNullableFilter<"DeveloperProfile"> | string | null
    rating?: FloatNullableFilter<"DeveloperProfile"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type DeveloperProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    walletAddress?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type DeveloperProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: DeveloperProfileWhereInput | DeveloperProfileWhereInput[]
    OR?: DeveloperProfileWhereInput[]
    NOT?: DeveloperProfileWhereInput | DeveloperProfileWhereInput[]
    hourlyRate?: DecimalNullableFilter<"DeveloperProfile"> | Decimal | DecimalJsLike | number | string | null
    skills?: JsonNullableFilter<"DeveloperProfile">
    walletAddress?: StringNullableFilter<"DeveloperProfile"> | string | null
    bio?: StringNullableFilter<"DeveloperProfile"> | string | null
    rating?: FloatNullableFilter<"DeveloperProfile"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }, "id" | "userId">

  export type DeveloperProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    walletAddress?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    _count?: DeveloperProfileCountOrderByAggregateInput
    _avg?: DeveloperProfileAvgOrderByAggregateInput
    _max?: DeveloperProfileMaxOrderByAggregateInput
    _min?: DeveloperProfileMinOrderByAggregateInput
    _sum?: DeveloperProfileSumOrderByAggregateInput
  }

  export type DeveloperProfileScalarWhereWithAggregatesInput = {
    AND?: DeveloperProfileScalarWhereWithAggregatesInput | DeveloperProfileScalarWhereWithAggregatesInput[]
    OR?: DeveloperProfileScalarWhereWithAggregatesInput[]
    NOT?: DeveloperProfileScalarWhereWithAggregatesInput | DeveloperProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeveloperProfile"> | number
    userId?: IntWithAggregatesFilter<"DeveloperProfile"> | number
    hourlyRate?: DecimalNullableWithAggregatesFilter<"DeveloperProfile"> | Decimal | DecimalJsLike | number | string | null
    skills?: JsonNullableWithAggregatesFilter<"DeveloperProfile">
    walletAddress?: StringNullableWithAggregatesFilter<"DeveloperProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"DeveloperProfile"> | string | null
    rating?: FloatNullableWithAggregatesFilter<"DeveloperProfile"> | number | null
  }

  export type EmployerProfileWhereInput = {
    AND?: EmployerProfileWhereInput | EmployerProfileWhereInput[]
    OR?: EmployerProfileWhereInput[]
    NOT?: EmployerProfileWhereInput | EmployerProfileWhereInput[]
    id?: IntFilter<"EmployerProfile"> | number
    userId?: IntFilter<"EmployerProfile"> | number
    companyName?: StringNullableFilter<"EmployerProfile"> | string | null
    description?: StringNullableFilter<"EmployerProfile"> | string | null
    website?: StringNullableFilter<"EmployerProfile"> | string | null
    contactEmail?: StringNullableFilter<"EmployerProfile"> | string | null
    verified?: BoolFilter<"EmployerProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmployerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    verified?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmployerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: EmployerProfileWhereInput | EmployerProfileWhereInput[]
    OR?: EmployerProfileWhereInput[]
    NOT?: EmployerProfileWhereInput | EmployerProfileWhereInput[]
    companyName?: StringNullableFilter<"EmployerProfile"> | string | null
    description?: StringNullableFilter<"EmployerProfile"> | string | null
    website?: StringNullableFilter<"EmployerProfile"> | string | null
    contactEmail?: StringNullableFilter<"EmployerProfile"> | string | null
    verified?: BoolFilter<"EmployerProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type EmployerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    verified?: SortOrder
    _count?: EmployerProfileCountOrderByAggregateInput
    _avg?: EmployerProfileAvgOrderByAggregateInput
    _max?: EmployerProfileMaxOrderByAggregateInput
    _min?: EmployerProfileMinOrderByAggregateInput
    _sum?: EmployerProfileSumOrderByAggregateInput
  }

  export type EmployerProfileScalarWhereWithAggregatesInput = {
    AND?: EmployerProfileScalarWhereWithAggregatesInput | EmployerProfileScalarWhereWithAggregatesInput[]
    OR?: EmployerProfileScalarWhereWithAggregatesInput[]
    NOT?: EmployerProfileScalarWhereWithAggregatesInput | EmployerProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmployerProfile"> | number
    userId?: IntWithAggregatesFilter<"EmployerProfile"> | number
    companyName?: StringNullableWithAggregatesFilter<"EmployerProfile"> | string | null
    description?: StringNullableWithAggregatesFilter<"EmployerProfile"> | string | null
    website?: StringNullableWithAggregatesFilter<"EmployerProfile"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"EmployerProfile"> | string | null
    verified?: BoolWithAggregatesFilter<"EmployerProfile"> | boolean
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    authorId?: IntFilter<"Task"> | number
    developerId?: IntNullableFilter<"Task"> | number | null
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    minBudget?: DecimalNullableFilter<"Task"> | Decimal | DecimalJsLike | number | string | null
    maxBudget?: DecimalNullableFilter<"Task"> | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    developer?: XOR<DeveloperProfileNullableScalarRelationFilter, DeveloperProfileWhereInput> | null
    offers?: TaskOfferListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    developerId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    minBudget?: SortOrderInput | SortOrder
    maxBudget?: SortOrderInput | SortOrder
    timeEstimate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    developer?: DeveloperProfileOrderByWithRelationInput
    offers?: TaskOfferOrderByRelationAggregateInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    authorId?: IntFilter<"Task"> | number
    developerId?: IntNullableFilter<"Task"> | number | null
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    minBudget?: DecimalNullableFilter<"Task"> | Decimal | DecimalJsLike | number | string | null
    maxBudget?: DecimalNullableFilter<"Task"> | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    developer?: XOR<DeveloperProfileNullableScalarRelationFilter, DeveloperProfileWhereInput> | null
    offers?: TaskOfferListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    developerId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    minBudget?: SortOrderInput | SortOrder
    maxBudget?: SortOrderInput | SortOrder
    timeEstimate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    authorId?: IntWithAggregatesFilter<"Task"> | number
    developerId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    minBudget?: DecimalNullableWithAggregatesFilter<"Task"> | Decimal | DecimalJsLike | number | string | null
    maxBudget?: DecimalNullableWithAggregatesFilter<"Task"> | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type TaskOfferWhereInput = {
    AND?: TaskOfferWhereInput | TaskOfferWhereInput[]
    OR?: TaskOfferWhereInput[]
    NOT?: TaskOfferWhereInput | TaskOfferWhereInput[]
    id?: IntFilter<"TaskOffer"> | number
    taskId?: IntFilter<"TaskOffer"> | number
    userId?: IntFilter<"TaskOffer"> | number
    plan?: StringNullableFilter<"TaskOffer"> | string | null
    proposedCost?: DecimalNullableFilter<"TaskOffer"> | Decimal | DecimalJsLike | number | string | null
    proposedTime?: StringNullableFilter<"TaskOffer"> | string | null
    status?: EnumOfferStatusFilter<"TaskOffer"> | $Enums.OfferStatus
    createdAt?: DateTimeFilter<"TaskOffer"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskOfferOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    plan?: SortOrderInput | SortOrder
    proposedCost?: SortOrderInput | SortOrder
    proposedTime?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TaskOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskOfferWhereInput | TaskOfferWhereInput[]
    OR?: TaskOfferWhereInput[]
    NOT?: TaskOfferWhereInput | TaskOfferWhereInput[]
    taskId?: IntFilter<"TaskOffer"> | number
    userId?: IntFilter<"TaskOffer"> | number
    plan?: StringNullableFilter<"TaskOffer"> | string | null
    proposedCost?: DecimalNullableFilter<"TaskOffer"> | Decimal | DecimalJsLike | number | string | null
    proposedTime?: StringNullableFilter<"TaskOffer"> | string | null
    status?: EnumOfferStatusFilter<"TaskOffer"> | $Enums.OfferStatus
    createdAt?: DateTimeFilter<"TaskOffer"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TaskOfferOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    plan?: SortOrderInput | SortOrder
    proposedCost?: SortOrderInput | SortOrder
    proposedTime?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TaskOfferCountOrderByAggregateInput
    _avg?: TaskOfferAvgOrderByAggregateInput
    _max?: TaskOfferMaxOrderByAggregateInput
    _min?: TaskOfferMinOrderByAggregateInput
    _sum?: TaskOfferSumOrderByAggregateInput
  }

  export type TaskOfferScalarWhereWithAggregatesInput = {
    AND?: TaskOfferScalarWhereWithAggregatesInput | TaskOfferScalarWhereWithAggregatesInput[]
    OR?: TaskOfferScalarWhereWithAggregatesInput[]
    NOT?: TaskOfferScalarWhereWithAggregatesInput | TaskOfferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskOffer"> | number
    taskId?: IntWithAggregatesFilter<"TaskOffer"> | number
    userId?: IntWithAggregatesFilter<"TaskOffer"> | number
    plan?: StringNullableWithAggregatesFilter<"TaskOffer"> | string | null
    proposedCost?: DecimalNullableWithAggregatesFilter<"TaskOffer"> | Decimal | DecimalJsLike | number | string | null
    proposedTime?: StringNullableWithAggregatesFilter<"TaskOffer"> | string | null
    status?: EnumOfferStatusWithAggregatesFilter<"TaskOffer"> | $Enums.OfferStatus
    createdAt?: DateTimeWithAggregatesFilter<"TaskOffer"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    userId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    txHash?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    txHash?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    txHash?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    txHash?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    userId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    txHash?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    taskId?: IntFilter<"Feedback"> | number
    authorId?: IntFilter<"Feedback"> | number
    targetId?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comment?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    target?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    target?: UserOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    taskId?: IntFilter<"Feedback"> | number
    authorId?: IntFilter<"Feedback"> | number
    targetId?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comment?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    target?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    taskId?: IntWithAggregatesFilter<"Feedback"> | number
    authorId?: IntWithAggregatesFilter<"Feedback"> | number
    targetId?: IntWithAggregatesFilter<"Feedback"> | number
    rating?: IntWithAggregatesFilter<"Feedback"> | number
    comment?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type UserCreateInput = {
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackCreateNestedManyWithoutTargetInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileUncheckedCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileUncheckedCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskUncheckedCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferUncheckedCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackUncheckedCreateNestedManyWithoutTargetInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUpdateManyWithoutTargetNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUncheckedUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUncheckedUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUncheckedUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUncheckedUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUncheckedUpdateManyWithoutTargetNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeveloperProfileCreateInput = {
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: string | null
    bio?: string | null
    rating?: number | null
    user: UserCreateNestedOneWithoutDeveloperProfileInput
    tasks?: TaskCreateNestedManyWithoutDeveloperInput
  }

  export type DeveloperProfileUncheckedCreateInput = {
    id?: number
    userId: number
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: string | null
    bio?: string | null
    rating?: number | null
    tasks?: TaskUncheckedCreateNestedManyWithoutDeveloperInput
  }

  export type DeveloperProfileUpdateInput = {
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutDeveloperProfileNestedInput
    tasks?: TaskUpdateManyWithoutDeveloperNestedInput
  }

  export type DeveloperProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    tasks?: TaskUncheckedUpdateManyWithoutDeveloperNestedInput
  }

  export type DeveloperProfileCreateManyInput = {
    id?: number
    userId: number
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: string | null
    bio?: string | null
    rating?: number | null
  }

  export type DeveloperProfileUpdateManyMutationInput = {
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DeveloperProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EmployerProfileCreateInput = {
    companyName?: string | null
    description?: string | null
    website?: string | null
    contactEmail?: string | null
    verified?: boolean
    user: UserCreateNestedOneWithoutEmployerProfileInput
  }

  export type EmployerProfileUncheckedCreateInput = {
    id?: number
    userId: number
    companyName?: string | null
    description?: string | null
    website?: string | null
    contactEmail?: string | null
    verified?: boolean
  }

  export type EmployerProfileUpdateInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutEmployerProfileNestedInput
  }

  export type EmployerProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmployerProfileCreateManyInput = {
    id?: number
    userId: number
    companyName?: string | null
    description?: string | null
    website?: string | null
    contactEmail?: string | null
    verified?: boolean
  }

  export type EmployerProfileUpdateManyMutationInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmployerProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCreateInput = {
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTasksAuthoredInput
    developer?: DeveloperProfileCreateNestedOneWithoutTasksInput
    offers?: TaskOfferCreateNestedManyWithoutTaskInput
    feedbacks?: FeedbackCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    authorId: number
    developerId?: number | null
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: TaskOfferUncheckedCreateNestedManyWithoutTaskInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTasksAuthoredNestedInput
    developer?: DeveloperProfileUpdateOneWithoutTasksNestedInput
    offers?: TaskOfferUpdateManyWithoutTaskNestedInput
    feedbacks?: FeedbackUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: TaskOfferUncheckedUpdateManyWithoutTaskNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    authorId: number
    developerId?: number | null
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOfferCreateInput = {
    plan?: string | null
    proposedCost?: Decimal | DecimalJsLike | number | string | null
    proposedTime?: string | null
    status?: $Enums.OfferStatus
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutOffersInput
    user: UserCreateNestedOneWithoutOffersInput
  }

  export type TaskOfferUncheckedCreateInput = {
    id?: number
    taskId: number
    userId: number
    plan?: string | null
    proposedCost?: Decimal | DecimalJsLike | number | string | null
    proposedTime?: string | null
    status?: $Enums.OfferStatus
    createdAt?: Date | string
  }

  export type TaskOfferUpdateInput = {
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    proposedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proposedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutOffersNestedInput
    user?: UserUpdateOneRequiredWithoutOffersNestedInput
  }

  export type TaskOfferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    proposedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proposedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOfferCreateManyInput = {
    id?: number
    taskId: number
    userId: number
    plan?: string | null
    proposedCost?: Decimal | DecimalJsLike | number | string | null
    proposedTime?: string | null
    status?: $Enums.OfferStatus
    createdAt?: Date | string
  }

  export type TaskOfferUpdateManyMutationInput = {
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    proposedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proposedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOfferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    proposedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proposedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    txHash?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    txHash?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    txHash?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutFeedbacksInput
    author: UserCreateNestedOneWithoutFeedbacksLeftInput
    target: UserCreateNestedOneWithoutFeedbacksGotInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    taskId: number
    authorId: number
    targetId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutFeedbacksNestedInput
    author?: UserUpdateOneRequiredWithoutFeedbacksLeftNestedInput
    target?: UserUpdateOneRequiredWithoutFeedbacksGotNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: number
    taskId: number
    authorId: number
    targetId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
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
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type DeveloperProfileNullableScalarRelationFilter = {
    is?: DeveloperProfileWhereInput | null
    isNot?: DeveloperProfileWhereInput | null
  }

  export type EmployerProfileNullableScalarRelationFilter = {
    is?: EmployerProfileWhereInput | null
    isNot?: EmployerProfileWhereInput | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOfferListRelationFilter = {
    every?: TaskOfferWhereInput
    some?: TaskOfferWhereInput
    none?: TaskOfferWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    tgUsername?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    tgUsername?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    tgUsername?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeveloperProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hourlyRate?: SortOrder
    skills?: SortOrder
    walletAddress?: SortOrder
    bio?: SortOrder
    rating?: SortOrder
  }

  export type DeveloperProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hourlyRate?: SortOrder
    rating?: SortOrder
  }

  export type DeveloperProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hourlyRate?: SortOrder
    walletAddress?: SortOrder
    bio?: SortOrder
    rating?: SortOrder
  }

  export type DeveloperProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hourlyRate?: SortOrder
    walletAddress?: SortOrder
    bio?: SortOrder
    rating?: SortOrder
  }

  export type DeveloperProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hourlyRate?: SortOrder
    rating?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmployerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrder
    website?: SortOrder
    contactEmail?: SortOrder
    verified?: SortOrder
  }

  export type EmployerProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmployerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrder
    website?: SortOrder
    contactEmail?: SortOrder
    verified?: SortOrder
  }

  export type EmployerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrder
    website?: SortOrder
    contactEmail?: SortOrder
    verified?: SortOrder
  }

  export type EmployerProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    developerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
    timeEstimate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    developerId?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    developerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
    timeEstimate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    developerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
    timeEstimate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    developerId?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
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

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumOfferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusFilter<$PrismaModel> | $Enums.OfferStatus
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskOfferCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    proposedCost?: SortOrder
    proposedTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskOfferAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    proposedCost?: SortOrder
  }

  export type TaskOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    proposedCost?: SortOrder
    proposedTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskOfferMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    proposedCost?: SortOrder
    proposedTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskOfferSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    proposedCost?: SortOrder
  }

  export type EnumOfferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel> | $Enums.OfferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferStatusFilter<$PrismaModel>
    _max?: NestedEnumOfferStatusFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    rating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    authorId?: SortOrder
    targetId?: SortOrder
    rating?: SortOrder
  }

  export type DeveloperProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<DeveloperProfileCreateWithoutUserInput, DeveloperProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DeveloperProfileCreateOrConnectWithoutUserInput
    connect?: DeveloperProfileWhereUniqueInput
  }

  export type EmployerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployerProfileCreateWithoutUserInput, EmployerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutUserInput
    connect?: EmployerProfileWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TaskCreateWithoutAuthorInput, TaskUncheckedCreateWithoutAuthorInput> | TaskCreateWithoutAuthorInput[] | TaskUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAuthorInput | TaskCreateOrConnectWithoutAuthorInput[]
    createMany?: TaskCreateManyAuthorInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskOfferCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskOfferCreateWithoutUserInput, TaskOfferUncheckedCreateWithoutUserInput> | TaskOfferCreateWithoutUserInput[] | TaskOfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskOfferCreateOrConnectWithoutUserInput | TaskOfferCreateOrConnectWithoutUserInput[]
    createMany?: TaskOfferCreateManyUserInputEnvelope
    connect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutAuthorInput = {
    create?: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput> | FeedbackCreateWithoutAuthorInput[] | FeedbackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutAuthorInput | FeedbackCreateOrConnectWithoutAuthorInput[]
    createMany?: FeedbackCreateManyAuthorInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutTargetInput = {
    create?: XOR<FeedbackCreateWithoutTargetInput, FeedbackUncheckedCreateWithoutTargetInput> | FeedbackCreateWithoutTargetInput[] | FeedbackUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutTargetInput | FeedbackCreateOrConnectWithoutTargetInput[]
    createMany?: FeedbackCreateManyTargetInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DeveloperProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DeveloperProfileCreateWithoutUserInput, DeveloperProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DeveloperProfileCreateOrConnectWithoutUserInput
    connect?: DeveloperProfileWhereUniqueInput
  }

  export type EmployerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployerProfileCreateWithoutUserInput, EmployerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutUserInput
    connect?: EmployerProfileWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TaskCreateWithoutAuthorInput, TaskUncheckedCreateWithoutAuthorInput> | TaskCreateWithoutAuthorInput[] | TaskUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAuthorInput | TaskCreateOrConnectWithoutAuthorInput[]
    createMany?: TaskCreateManyAuthorInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskOfferUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskOfferCreateWithoutUserInput, TaskOfferUncheckedCreateWithoutUserInput> | TaskOfferCreateWithoutUserInput[] | TaskOfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskOfferCreateOrConnectWithoutUserInput | TaskOfferCreateOrConnectWithoutUserInput[]
    createMany?: TaskOfferCreateManyUserInputEnvelope
    connect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput> | FeedbackCreateWithoutAuthorInput[] | FeedbackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutAuthorInput | FeedbackCreateOrConnectWithoutAuthorInput[]
    createMany?: FeedbackCreateManyAuthorInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutTargetInput = {
    create?: XOR<FeedbackCreateWithoutTargetInput, FeedbackUncheckedCreateWithoutTargetInput> | FeedbackCreateWithoutTargetInput[] | FeedbackUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutTargetInput | FeedbackCreateOrConnectWithoutTargetInput[]
    createMany?: FeedbackCreateManyTargetInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeveloperProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<DeveloperProfileCreateWithoutUserInput, DeveloperProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DeveloperProfileCreateOrConnectWithoutUserInput
    upsert?: DeveloperProfileUpsertWithoutUserInput
    disconnect?: DeveloperProfileWhereInput | boolean
    delete?: DeveloperProfileWhereInput | boolean
    connect?: DeveloperProfileWhereUniqueInput
    update?: XOR<XOR<DeveloperProfileUpdateToOneWithWhereWithoutUserInput, DeveloperProfileUpdateWithoutUserInput>, DeveloperProfileUncheckedUpdateWithoutUserInput>
  }

  export type EmployerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployerProfileCreateWithoutUserInput, EmployerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutUserInput
    upsert?: EmployerProfileUpsertWithoutUserInput
    disconnect?: EmployerProfileWhereInput | boolean
    delete?: EmployerProfileWhereInput | boolean
    connect?: EmployerProfileWhereUniqueInput
    update?: XOR<XOR<EmployerProfileUpdateToOneWithWhereWithoutUserInput, EmployerProfileUpdateWithoutUserInput>, EmployerProfileUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TaskCreateWithoutAuthorInput, TaskUncheckedCreateWithoutAuthorInput> | TaskCreateWithoutAuthorInput[] | TaskUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAuthorInput | TaskCreateOrConnectWithoutAuthorInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAuthorInput | TaskUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TaskCreateManyAuthorInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAuthorInput | TaskUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAuthorInput | TaskUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskOfferUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskOfferCreateWithoutUserInput, TaskOfferUncheckedCreateWithoutUserInput> | TaskOfferCreateWithoutUserInput[] | TaskOfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskOfferCreateOrConnectWithoutUserInput | TaskOfferCreateOrConnectWithoutUserInput[]
    upsert?: TaskOfferUpsertWithWhereUniqueWithoutUserInput | TaskOfferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskOfferCreateManyUserInputEnvelope
    set?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    disconnect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    delete?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    connect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    update?: TaskOfferUpdateWithWhereUniqueWithoutUserInput | TaskOfferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskOfferUpdateManyWithWhereWithoutUserInput | TaskOfferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskOfferScalarWhereInput | TaskOfferScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput> | FeedbackCreateWithoutAuthorInput[] | FeedbackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutAuthorInput | FeedbackCreateOrConnectWithoutAuthorInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutAuthorInput | FeedbackUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: FeedbackCreateManyAuthorInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutAuthorInput | FeedbackUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutAuthorInput | FeedbackUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutTargetNestedInput = {
    create?: XOR<FeedbackCreateWithoutTargetInput, FeedbackUncheckedCreateWithoutTargetInput> | FeedbackCreateWithoutTargetInput[] | FeedbackUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutTargetInput | FeedbackCreateOrConnectWithoutTargetInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutTargetInput | FeedbackUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: FeedbackCreateManyTargetInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutTargetInput | FeedbackUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutTargetInput | FeedbackUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeveloperProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DeveloperProfileCreateWithoutUserInput, DeveloperProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DeveloperProfileCreateOrConnectWithoutUserInput
    upsert?: DeveloperProfileUpsertWithoutUserInput
    disconnect?: DeveloperProfileWhereInput | boolean
    delete?: DeveloperProfileWhereInput | boolean
    connect?: DeveloperProfileWhereUniqueInput
    update?: XOR<XOR<DeveloperProfileUpdateToOneWithWhereWithoutUserInput, DeveloperProfileUpdateWithoutUserInput>, DeveloperProfileUncheckedUpdateWithoutUserInput>
  }

  export type EmployerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployerProfileCreateWithoutUserInput, EmployerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutUserInput
    upsert?: EmployerProfileUpsertWithoutUserInput
    disconnect?: EmployerProfileWhereInput | boolean
    delete?: EmployerProfileWhereInput | boolean
    connect?: EmployerProfileWhereUniqueInput
    update?: XOR<XOR<EmployerProfileUpdateToOneWithWhereWithoutUserInput, EmployerProfileUpdateWithoutUserInput>, EmployerProfileUncheckedUpdateWithoutUserInput>
  }

  export type TaskUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TaskCreateWithoutAuthorInput, TaskUncheckedCreateWithoutAuthorInput> | TaskCreateWithoutAuthorInput[] | TaskUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAuthorInput | TaskCreateOrConnectWithoutAuthorInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAuthorInput | TaskUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TaskCreateManyAuthorInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAuthorInput | TaskUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAuthorInput | TaskUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskOfferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskOfferCreateWithoutUserInput, TaskOfferUncheckedCreateWithoutUserInput> | TaskOfferCreateWithoutUserInput[] | TaskOfferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskOfferCreateOrConnectWithoutUserInput | TaskOfferCreateOrConnectWithoutUserInput[]
    upsert?: TaskOfferUpsertWithWhereUniqueWithoutUserInput | TaskOfferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskOfferCreateManyUserInputEnvelope
    set?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    disconnect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    delete?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    connect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    update?: TaskOfferUpdateWithWhereUniqueWithoutUserInput | TaskOfferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskOfferUpdateManyWithWhereWithoutUserInput | TaskOfferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskOfferScalarWhereInput | TaskOfferScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput> | FeedbackCreateWithoutAuthorInput[] | FeedbackUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutAuthorInput | FeedbackCreateOrConnectWithoutAuthorInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutAuthorInput | FeedbackUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: FeedbackCreateManyAuthorInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutAuthorInput | FeedbackUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutAuthorInput | FeedbackUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutTargetNestedInput = {
    create?: XOR<FeedbackCreateWithoutTargetInput, FeedbackUncheckedCreateWithoutTargetInput> | FeedbackCreateWithoutTargetInput[] | FeedbackUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutTargetInput | FeedbackCreateOrConnectWithoutTargetInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutTargetInput | FeedbackUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: FeedbackCreateManyTargetInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutTargetInput | FeedbackUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutTargetInput | FeedbackUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDeveloperProfileInput = {
    create?: XOR<UserCreateWithoutDeveloperProfileInput, UserUncheckedCreateWithoutDeveloperProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeveloperProfileInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput> | TaskCreateWithoutDeveloperInput[] | TaskUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeveloperInput | TaskCreateOrConnectWithoutDeveloperInput[]
    createMany?: TaskCreateManyDeveloperInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput> | TaskCreateWithoutDeveloperInput[] | TaskUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeveloperInput | TaskCreateOrConnectWithoutDeveloperInput[]
    createMany?: TaskCreateManyDeveloperInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDeveloperProfileNestedInput = {
    create?: XOR<UserCreateWithoutDeveloperProfileInput, UserUncheckedCreateWithoutDeveloperProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeveloperProfileInput
    upsert?: UserUpsertWithoutDeveloperProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeveloperProfileInput, UserUpdateWithoutDeveloperProfileInput>, UserUncheckedUpdateWithoutDeveloperProfileInput>
  }

  export type TaskUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput> | TaskCreateWithoutDeveloperInput[] | TaskUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeveloperInput | TaskCreateOrConnectWithoutDeveloperInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutDeveloperInput | TaskUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: TaskCreateManyDeveloperInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutDeveloperInput | TaskUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutDeveloperInput | TaskUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput> | TaskCreateWithoutDeveloperInput[] | TaskUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeveloperInput | TaskCreateOrConnectWithoutDeveloperInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutDeveloperInput | TaskUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: TaskCreateManyDeveloperInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutDeveloperInput | TaskUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutDeveloperInput | TaskUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmployerProfileInput = {
    create?: XOR<UserCreateWithoutEmployerProfileInput, UserUncheckedCreateWithoutEmployerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutEmployerProfileNestedInput = {
    create?: XOR<UserCreateWithoutEmployerProfileInput, UserUncheckedCreateWithoutEmployerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployerProfileInput
    upsert?: UserUpsertWithoutEmployerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployerProfileInput, UserUpdateWithoutEmployerProfileInput>, UserUncheckedUpdateWithoutEmployerProfileInput>
  }

  export type UserCreateNestedOneWithoutTasksAuthoredInput = {
    create?: XOR<UserCreateWithoutTasksAuthoredInput, UserUncheckedCreateWithoutTasksAuthoredInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksAuthoredInput
    connect?: UserWhereUniqueInput
  }

  export type DeveloperProfileCreateNestedOneWithoutTasksInput = {
    create?: XOR<DeveloperProfileCreateWithoutTasksInput, DeveloperProfileUncheckedCreateWithoutTasksInput>
    connectOrCreate?: DeveloperProfileCreateOrConnectWithoutTasksInput
    connect?: DeveloperProfileWhereUniqueInput
  }

  export type TaskOfferCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskOfferCreateWithoutTaskInput, TaskOfferUncheckedCreateWithoutTaskInput> | TaskOfferCreateWithoutTaskInput[] | TaskOfferUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskOfferCreateOrConnectWithoutTaskInput | TaskOfferCreateOrConnectWithoutTaskInput[]
    createMany?: TaskOfferCreateManyTaskInputEnvelope
    connect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutTaskInput = {
    create?: XOR<FeedbackCreateWithoutTaskInput, FeedbackUncheckedCreateWithoutTaskInput> | FeedbackCreateWithoutTaskInput[] | FeedbackUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutTaskInput | FeedbackCreateOrConnectWithoutTaskInput[]
    createMany?: FeedbackCreateManyTaskInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type TaskOfferUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskOfferCreateWithoutTaskInput, TaskOfferUncheckedCreateWithoutTaskInput> | TaskOfferCreateWithoutTaskInput[] | TaskOfferUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskOfferCreateOrConnectWithoutTaskInput | TaskOfferCreateOrConnectWithoutTaskInput[]
    createMany?: TaskOfferCreateManyTaskInputEnvelope
    connect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<FeedbackCreateWithoutTaskInput, FeedbackUncheckedCreateWithoutTaskInput> | FeedbackCreateWithoutTaskInput[] | FeedbackUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutTaskInput | FeedbackCreateOrConnectWithoutTaskInput[]
    createMany?: FeedbackCreateManyTaskInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type UserUpdateOneRequiredWithoutTasksAuthoredNestedInput = {
    create?: XOR<UserCreateWithoutTasksAuthoredInput, UserUncheckedCreateWithoutTasksAuthoredInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksAuthoredInput
    upsert?: UserUpsertWithoutTasksAuthoredInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksAuthoredInput, UserUpdateWithoutTasksAuthoredInput>, UserUncheckedUpdateWithoutTasksAuthoredInput>
  }

  export type DeveloperProfileUpdateOneWithoutTasksNestedInput = {
    create?: XOR<DeveloperProfileCreateWithoutTasksInput, DeveloperProfileUncheckedCreateWithoutTasksInput>
    connectOrCreate?: DeveloperProfileCreateOrConnectWithoutTasksInput
    upsert?: DeveloperProfileUpsertWithoutTasksInput
    disconnect?: DeveloperProfileWhereInput | boolean
    delete?: DeveloperProfileWhereInput | boolean
    connect?: DeveloperProfileWhereUniqueInput
    update?: XOR<XOR<DeveloperProfileUpdateToOneWithWhereWithoutTasksInput, DeveloperProfileUpdateWithoutTasksInput>, DeveloperProfileUncheckedUpdateWithoutTasksInput>
  }

  export type TaskOfferUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskOfferCreateWithoutTaskInput, TaskOfferUncheckedCreateWithoutTaskInput> | TaskOfferCreateWithoutTaskInput[] | TaskOfferUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskOfferCreateOrConnectWithoutTaskInput | TaskOfferCreateOrConnectWithoutTaskInput[]
    upsert?: TaskOfferUpsertWithWhereUniqueWithoutTaskInput | TaskOfferUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskOfferCreateManyTaskInputEnvelope
    set?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    disconnect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    delete?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    connect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    update?: TaskOfferUpdateWithWhereUniqueWithoutTaskInput | TaskOfferUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskOfferUpdateManyWithWhereWithoutTaskInput | TaskOfferUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskOfferScalarWhereInput | TaskOfferScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutTaskNestedInput = {
    create?: XOR<FeedbackCreateWithoutTaskInput, FeedbackUncheckedCreateWithoutTaskInput> | FeedbackCreateWithoutTaskInput[] | FeedbackUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutTaskInput | FeedbackCreateOrConnectWithoutTaskInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutTaskInput | FeedbackUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: FeedbackCreateManyTaskInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutTaskInput | FeedbackUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutTaskInput | FeedbackUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskOfferUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskOfferCreateWithoutTaskInput, TaskOfferUncheckedCreateWithoutTaskInput> | TaskOfferCreateWithoutTaskInput[] | TaskOfferUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskOfferCreateOrConnectWithoutTaskInput | TaskOfferCreateOrConnectWithoutTaskInput[]
    upsert?: TaskOfferUpsertWithWhereUniqueWithoutTaskInput | TaskOfferUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskOfferCreateManyTaskInputEnvelope
    set?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    disconnect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    delete?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    connect?: TaskOfferWhereUniqueInput | TaskOfferWhereUniqueInput[]
    update?: TaskOfferUpdateWithWhereUniqueWithoutTaskInput | TaskOfferUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskOfferUpdateManyWithWhereWithoutTaskInput | TaskOfferUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskOfferScalarWhereInput | TaskOfferScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<FeedbackCreateWithoutTaskInput, FeedbackUncheckedCreateWithoutTaskInput> | FeedbackCreateWithoutTaskInput[] | FeedbackUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutTaskInput | FeedbackCreateOrConnectWithoutTaskInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutTaskInput | FeedbackUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: FeedbackCreateManyTaskInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutTaskInput | FeedbackUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutTaskInput | FeedbackUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutOffersInput = {
    create?: XOR<TaskCreateWithoutOffersInput, TaskUncheckedCreateWithoutOffersInput>
    connectOrCreate?: TaskCreateOrConnectWithoutOffersInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOffersInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOfferStatusFieldUpdateOperationsInput = {
    set?: $Enums.OfferStatus
  }

  export type TaskUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<TaskCreateWithoutOffersInput, TaskUncheckedCreateWithoutOffersInput>
    connectOrCreate?: TaskCreateOrConnectWithoutOffersInput
    upsert?: TaskUpsertWithoutOffersInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutOffersInput, TaskUpdateWithoutOffersInput>, TaskUncheckedUpdateWithoutOffersInput>
  }

  export type UserUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    upsert?: UserUpsertWithoutOffersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOffersInput, UserUpdateWithoutOffersInput>, UserUncheckedUpdateWithoutOffersInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type TaskCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<TaskCreateWithoutFeedbacksInput, TaskUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutFeedbacksInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbacksLeftInput = {
    create?: XOR<UserCreateWithoutFeedbacksLeftInput, UserUncheckedCreateWithoutFeedbacksLeftInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksLeftInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbacksGotInput = {
    create?: XOR<UserCreateWithoutFeedbacksGotInput, UserUncheckedCreateWithoutFeedbacksGotInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksGotInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<TaskCreateWithoutFeedbacksInput, TaskUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutFeedbacksInput
    upsert?: TaskUpsertWithoutFeedbacksInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutFeedbacksInput, TaskUpdateWithoutFeedbacksInput>, TaskUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbacksLeftNestedInput = {
    create?: XOR<UserCreateWithoutFeedbacksLeftInput, UserUncheckedCreateWithoutFeedbacksLeftInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksLeftInput
    upsert?: UserUpsertWithoutFeedbacksLeftInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbacksLeftInput, UserUpdateWithoutFeedbacksLeftInput>, UserUncheckedUpdateWithoutFeedbacksLeftInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbacksGotNestedInput = {
    create?: XOR<UserCreateWithoutFeedbacksGotInput, UserUncheckedCreateWithoutFeedbacksGotInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksGotInput
    upsert?: UserUpsertWithoutFeedbacksGotInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbacksGotInput, UserUpdateWithoutFeedbacksGotInput>, UserUncheckedUpdateWithoutFeedbacksGotInput>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
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

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumOfferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusFilter<$PrismaModel> | $Enums.OfferStatus
  }

  export type NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | EnumOfferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferStatus[] | ListEnumOfferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel> | $Enums.OfferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferStatusFilter<$PrismaModel>
    _max?: NestedEnumOfferStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DeveloperProfileCreateWithoutUserInput = {
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: string | null
    bio?: string | null
    rating?: number | null
    tasks?: TaskCreateNestedManyWithoutDeveloperInput
  }

  export type DeveloperProfileUncheckedCreateWithoutUserInput = {
    id?: number
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: string | null
    bio?: string | null
    rating?: number | null
    tasks?: TaskUncheckedCreateNestedManyWithoutDeveloperInput
  }

  export type DeveloperProfileCreateOrConnectWithoutUserInput = {
    where: DeveloperProfileWhereUniqueInput
    create: XOR<DeveloperProfileCreateWithoutUserInput, DeveloperProfileUncheckedCreateWithoutUserInput>
  }

  export type EmployerProfileCreateWithoutUserInput = {
    companyName?: string | null
    description?: string | null
    website?: string | null
    contactEmail?: string | null
    verified?: boolean
  }

  export type EmployerProfileUncheckedCreateWithoutUserInput = {
    id?: number
    companyName?: string | null
    description?: string | null
    website?: string | null
    contactEmail?: string | null
    verified?: boolean
  }

  export type EmployerProfileCreateOrConnectWithoutUserInput = {
    where: EmployerProfileWhereUniqueInput
    create: XOR<EmployerProfileCreateWithoutUserInput, EmployerProfileUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateWithoutAuthorInput = {
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    developer?: DeveloperProfileCreateNestedOneWithoutTasksInput
    offers?: TaskOfferCreateNestedManyWithoutTaskInput
    feedbacks?: FeedbackCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAuthorInput = {
    id?: number
    developerId?: number | null
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: TaskOfferUncheckedCreateNestedManyWithoutTaskInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAuthorInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAuthorInput, TaskUncheckedCreateWithoutAuthorInput>
  }

  export type TaskCreateManyAuthorInputEnvelope = {
    data: TaskCreateManyAuthorInput | TaskCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TaskOfferCreateWithoutUserInput = {
    plan?: string | null
    proposedCost?: Decimal | DecimalJsLike | number | string | null
    proposedTime?: string | null
    status?: $Enums.OfferStatus
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutOffersInput
  }

  export type TaskOfferUncheckedCreateWithoutUserInput = {
    id?: number
    taskId: number
    plan?: string | null
    proposedCost?: Decimal | DecimalJsLike | number | string | null
    proposedTime?: string | null
    status?: $Enums.OfferStatus
    createdAt?: Date | string
  }

  export type TaskOfferCreateOrConnectWithoutUserInput = {
    where: TaskOfferWhereUniqueInput
    create: XOR<TaskOfferCreateWithoutUserInput, TaskOfferUncheckedCreateWithoutUserInput>
  }

  export type TaskOfferCreateManyUserInputEnvelope = {
    data: TaskOfferCreateManyUserInput | TaskOfferCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutAuthorInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutFeedbacksInput
    target: UserCreateNestedOneWithoutFeedbacksGotInput
  }

  export type FeedbackUncheckedCreateWithoutAuthorInput = {
    id?: number
    taskId: number
    targetId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutAuthorInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput>
  }

  export type FeedbackCreateManyAuthorInputEnvelope = {
    data: FeedbackCreateManyAuthorInput | FeedbackCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutTargetInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutFeedbacksInput
    author: UserCreateNestedOneWithoutFeedbacksLeftInput
  }

  export type FeedbackUncheckedCreateWithoutTargetInput = {
    id?: number
    taskId: number
    authorId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutTargetInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutTargetInput, FeedbackUncheckedCreateWithoutTargetInput>
  }

  export type FeedbackCreateManyTargetInputEnvelope = {
    data: FeedbackCreateManyTargetInput | FeedbackCreateManyTargetInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    txHash?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    txHash?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeveloperProfileUpsertWithoutUserInput = {
    update: XOR<DeveloperProfileUpdateWithoutUserInput, DeveloperProfileUncheckedUpdateWithoutUserInput>
    create: XOR<DeveloperProfileCreateWithoutUserInput, DeveloperProfileUncheckedCreateWithoutUserInput>
    where?: DeveloperProfileWhereInput
  }

  export type DeveloperProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: DeveloperProfileWhereInput
    data: XOR<DeveloperProfileUpdateWithoutUserInput, DeveloperProfileUncheckedUpdateWithoutUserInput>
  }

  export type DeveloperProfileUpdateWithoutUserInput = {
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    tasks?: TaskUpdateManyWithoutDeveloperNestedInput
  }

  export type DeveloperProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    tasks?: TaskUncheckedUpdateManyWithoutDeveloperNestedInput
  }

  export type EmployerProfileUpsertWithoutUserInput = {
    update: XOR<EmployerProfileUpdateWithoutUserInput, EmployerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<EmployerProfileCreateWithoutUserInput, EmployerProfileUncheckedCreateWithoutUserInput>
    where?: EmployerProfileWhereInput
  }

  export type EmployerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployerProfileWhereInput
    data: XOR<EmployerProfileUpdateWithoutUserInput, EmployerProfileUncheckedUpdateWithoutUserInput>
  }

  export type EmployerProfileUpdateWithoutUserInput = {
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmployerProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAuthorInput, TaskUncheckedUpdateWithoutAuthorInput>
    create: XOR<TaskCreateWithoutAuthorInput, TaskUncheckedCreateWithoutAuthorInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAuthorInput, TaskUncheckedUpdateWithoutAuthorInput>
  }

  export type TaskUpdateManyWithWhereWithoutAuthorInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    authorId?: IntFilter<"Task"> | number
    developerId?: IntNullableFilter<"Task"> | number | null
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    minBudget?: DecimalNullableFilter<"Task"> | Decimal | DecimalJsLike | number | string | null
    maxBudget?: DecimalNullableFilter<"Task"> | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type TaskOfferUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskOfferWhereUniqueInput
    update: XOR<TaskOfferUpdateWithoutUserInput, TaskOfferUncheckedUpdateWithoutUserInput>
    create: XOR<TaskOfferCreateWithoutUserInput, TaskOfferUncheckedCreateWithoutUserInput>
  }

  export type TaskOfferUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskOfferWhereUniqueInput
    data: XOR<TaskOfferUpdateWithoutUserInput, TaskOfferUncheckedUpdateWithoutUserInput>
  }

  export type TaskOfferUpdateManyWithWhereWithoutUserInput = {
    where: TaskOfferScalarWhereInput
    data: XOR<TaskOfferUpdateManyMutationInput, TaskOfferUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskOfferScalarWhereInput = {
    AND?: TaskOfferScalarWhereInput | TaskOfferScalarWhereInput[]
    OR?: TaskOfferScalarWhereInput[]
    NOT?: TaskOfferScalarWhereInput | TaskOfferScalarWhereInput[]
    id?: IntFilter<"TaskOffer"> | number
    taskId?: IntFilter<"TaskOffer"> | number
    userId?: IntFilter<"TaskOffer"> | number
    plan?: StringNullableFilter<"TaskOffer"> | string | null
    proposedCost?: DecimalNullableFilter<"TaskOffer"> | Decimal | DecimalJsLike | number | string | null
    proposedTime?: StringNullableFilter<"TaskOffer"> | string | null
    status?: EnumOfferStatusFilter<"TaskOffer"> | $Enums.OfferStatus
    createdAt?: DateTimeFilter<"TaskOffer"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutAuthorInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutAuthorInput, FeedbackUncheckedUpdateWithoutAuthorInput>
    create: XOR<FeedbackCreateWithoutAuthorInput, FeedbackUncheckedCreateWithoutAuthorInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutAuthorInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutAuthorInput, FeedbackUncheckedUpdateWithoutAuthorInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutAuthorInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutAuthorInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: IntFilter<"Feedback"> | number
    taskId?: IntFilter<"Feedback"> | number
    authorId?: IntFilter<"Feedback"> | number
    targetId?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comment?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutTargetInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutTargetInput, FeedbackUncheckedUpdateWithoutTargetInput>
    create: XOR<FeedbackCreateWithoutTargetInput, FeedbackUncheckedCreateWithoutTargetInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutTargetInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutTargetInput, FeedbackUncheckedUpdateWithoutTargetInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutTargetInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutTargetInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    userId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    txHash?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UserCreateWithoutDeveloperProfileInput = {
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    employerProfile?: EmployerProfileCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackCreateNestedManyWithoutTargetInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeveloperProfileInput = {
    id?: number
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    employerProfile?: EmployerProfileUncheckedCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskUncheckedCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferUncheckedCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackUncheckedCreateNestedManyWithoutTargetInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeveloperProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeveloperProfileInput, UserUncheckedCreateWithoutDeveloperProfileInput>
  }

  export type TaskCreateWithoutDeveloperInput = {
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTasksAuthoredInput
    offers?: TaskOfferCreateNestedManyWithoutTaskInput
    feedbacks?: FeedbackCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutDeveloperInput = {
    id?: number
    authorId: number
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: TaskOfferUncheckedCreateNestedManyWithoutTaskInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutDeveloperInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput>
  }

  export type TaskCreateManyDeveloperInputEnvelope = {
    data: TaskCreateManyDeveloperInput | TaskCreateManyDeveloperInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDeveloperProfileInput = {
    update: XOR<UserUpdateWithoutDeveloperProfileInput, UserUncheckedUpdateWithoutDeveloperProfileInput>
    create: XOR<UserCreateWithoutDeveloperProfileInput, UserUncheckedCreateWithoutDeveloperProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeveloperProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeveloperProfileInput, UserUncheckedUpdateWithoutDeveloperProfileInput>
  }

  export type UserUpdateWithoutDeveloperProfileInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employerProfile?: EmployerProfileUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUpdateManyWithoutTargetNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeveloperProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employerProfile?: EmployerProfileUncheckedUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUncheckedUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUncheckedUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUncheckedUpdateManyWithoutTargetNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutDeveloperInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutDeveloperInput, TaskUncheckedUpdateWithoutDeveloperInput>
    create: XOR<TaskCreateWithoutDeveloperInput, TaskUncheckedCreateWithoutDeveloperInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutDeveloperInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutDeveloperInput, TaskUncheckedUpdateWithoutDeveloperInput>
  }

  export type TaskUpdateManyWithWhereWithoutDeveloperInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutDeveloperInput>
  }

  export type UserCreateWithoutEmployerProfileInput = {
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackCreateNestedManyWithoutTargetInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployerProfileInput = {
    id?: number
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileUncheckedCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskUncheckedCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferUncheckedCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackUncheckedCreateNestedManyWithoutTargetInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployerProfileInput, UserUncheckedCreateWithoutEmployerProfileInput>
  }

  export type UserUpsertWithoutEmployerProfileInput = {
    update: XOR<UserUpdateWithoutEmployerProfileInput, UserUncheckedUpdateWithoutEmployerProfileInput>
    create: XOR<UserCreateWithoutEmployerProfileInput, UserUncheckedCreateWithoutEmployerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployerProfileInput, UserUncheckedUpdateWithoutEmployerProfileInput>
  }

  export type UserUpdateWithoutEmployerProfileInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUpdateManyWithoutTargetNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUncheckedUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUncheckedUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUncheckedUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUncheckedUpdateManyWithoutTargetNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTasksAuthoredInput = {
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileCreateNestedOneWithoutUserInput
    offers?: TaskOfferCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackCreateNestedManyWithoutTargetInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksAuthoredInput = {
    id?: number
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileUncheckedCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileUncheckedCreateNestedOneWithoutUserInput
    offers?: TaskOfferUncheckedCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackUncheckedCreateNestedManyWithoutTargetInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksAuthoredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksAuthoredInput, UserUncheckedCreateWithoutTasksAuthoredInput>
  }

  export type DeveloperProfileCreateWithoutTasksInput = {
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: string | null
    bio?: string | null
    rating?: number | null
    user: UserCreateNestedOneWithoutDeveloperProfileInput
  }

  export type DeveloperProfileUncheckedCreateWithoutTasksInput = {
    id?: number
    userId: number
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: string | null
    bio?: string | null
    rating?: number | null
  }

  export type DeveloperProfileCreateOrConnectWithoutTasksInput = {
    where: DeveloperProfileWhereUniqueInput
    create: XOR<DeveloperProfileCreateWithoutTasksInput, DeveloperProfileUncheckedCreateWithoutTasksInput>
  }

  export type TaskOfferCreateWithoutTaskInput = {
    plan?: string | null
    proposedCost?: Decimal | DecimalJsLike | number | string | null
    proposedTime?: string | null
    status?: $Enums.OfferStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOffersInput
  }

  export type TaskOfferUncheckedCreateWithoutTaskInput = {
    id?: number
    userId: number
    plan?: string | null
    proposedCost?: Decimal | DecimalJsLike | number | string | null
    proposedTime?: string | null
    status?: $Enums.OfferStatus
    createdAt?: Date | string
  }

  export type TaskOfferCreateOrConnectWithoutTaskInput = {
    where: TaskOfferWhereUniqueInput
    create: XOR<TaskOfferCreateWithoutTaskInput, TaskOfferUncheckedCreateWithoutTaskInput>
  }

  export type TaskOfferCreateManyTaskInputEnvelope = {
    data: TaskOfferCreateManyTaskInput | TaskOfferCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutTaskInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutFeedbacksLeftInput
    target: UserCreateNestedOneWithoutFeedbacksGotInput
  }

  export type FeedbackUncheckedCreateWithoutTaskInput = {
    id?: number
    authorId: number
    targetId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutTaskInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutTaskInput, FeedbackUncheckedCreateWithoutTaskInput>
  }

  export type FeedbackCreateManyTaskInputEnvelope = {
    data: FeedbackCreateManyTaskInput | FeedbackCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTasksAuthoredInput = {
    update: XOR<UserUpdateWithoutTasksAuthoredInput, UserUncheckedUpdateWithoutTasksAuthoredInput>
    create: XOR<UserCreateWithoutTasksAuthoredInput, UserUncheckedCreateWithoutTasksAuthoredInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksAuthoredInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksAuthoredInput, UserUncheckedUpdateWithoutTasksAuthoredInput>
  }

  export type UserUpdateWithoutTasksAuthoredInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUpdateOneWithoutUserNestedInput
    offers?: TaskOfferUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUpdateManyWithoutTargetNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksAuthoredInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUncheckedUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUncheckedUpdateOneWithoutUserNestedInput
    offers?: TaskOfferUncheckedUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUncheckedUpdateManyWithoutTargetNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeveloperProfileUpsertWithoutTasksInput = {
    update: XOR<DeveloperProfileUpdateWithoutTasksInput, DeveloperProfileUncheckedUpdateWithoutTasksInput>
    create: XOR<DeveloperProfileCreateWithoutTasksInput, DeveloperProfileUncheckedCreateWithoutTasksInput>
    where?: DeveloperProfileWhereInput
  }

  export type DeveloperProfileUpdateToOneWithWhereWithoutTasksInput = {
    where?: DeveloperProfileWhereInput
    data: XOR<DeveloperProfileUpdateWithoutTasksInput, DeveloperProfileUncheckedUpdateWithoutTasksInput>
  }

  export type DeveloperProfileUpdateWithoutTasksInput = {
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutDeveloperProfileNestedInput
  }

  export type DeveloperProfileUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TaskOfferUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskOfferWhereUniqueInput
    update: XOR<TaskOfferUpdateWithoutTaskInput, TaskOfferUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskOfferCreateWithoutTaskInput, TaskOfferUncheckedCreateWithoutTaskInput>
  }

  export type TaskOfferUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskOfferWhereUniqueInput
    data: XOR<TaskOfferUpdateWithoutTaskInput, TaskOfferUncheckedUpdateWithoutTaskInput>
  }

  export type TaskOfferUpdateManyWithWhereWithoutTaskInput = {
    where: TaskOfferScalarWhereInput
    data: XOR<TaskOfferUpdateManyMutationInput, TaskOfferUncheckedUpdateManyWithoutTaskInput>
  }

  export type FeedbackUpsertWithWhereUniqueWithoutTaskInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutTaskInput, FeedbackUncheckedUpdateWithoutTaskInput>
    create: XOR<FeedbackCreateWithoutTaskInput, FeedbackUncheckedCreateWithoutTaskInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutTaskInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutTaskInput, FeedbackUncheckedUpdateWithoutTaskInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutTaskInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutOffersInput = {
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTasksAuthoredInput
    developer?: DeveloperProfileCreateNestedOneWithoutTasksInput
    feedbacks?: FeedbackCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutOffersInput = {
    id?: number
    authorId: number
    developerId?: number | null
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutOffersInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutOffersInput, TaskUncheckedCreateWithoutOffersInput>
  }

  export type UserCreateWithoutOffersInput = {
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskCreateNestedManyWithoutAuthorInput
    feedbacksLeft?: FeedbackCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackCreateNestedManyWithoutTargetInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOffersInput = {
    id?: number
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileUncheckedCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileUncheckedCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskUncheckedCreateNestedManyWithoutAuthorInput
    feedbacksLeft?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackUncheckedCreateNestedManyWithoutTargetInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOffersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
  }

  export type TaskUpsertWithoutOffersInput = {
    update: XOR<TaskUpdateWithoutOffersInput, TaskUncheckedUpdateWithoutOffersInput>
    create: XOR<TaskCreateWithoutOffersInput, TaskUncheckedCreateWithoutOffersInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutOffersInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutOffersInput, TaskUncheckedUpdateWithoutOffersInput>
  }

  export type TaskUpdateWithoutOffersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTasksAuthoredNestedInput
    developer?: DeveloperProfileUpdateOneWithoutTasksNestedInput
    feedbacks?: FeedbackUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbacks?: FeedbackUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutOffersInput = {
    update: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOffersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
  }

  export type UserUpdateWithoutOffersInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUpdateManyWithoutAuthorNestedInput
    feedbacksLeft?: FeedbackUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUpdateManyWithoutTargetNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUncheckedUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUncheckedUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUncheckedUpdateManyWithoutAuthorNestedInput
    feedbacksLeft?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUncheckedUpdateManyWithoutTargetNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentsInput = {
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackCreateNestedManyWithoutTargetInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: number
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileUncheckedCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileUncheckedCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskUncheckedCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferUncheckedCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
    feedbacksGot?: FeedbackUncheckedCreateNestedManyWithoutTargetInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUpdateManyWithoutTargetNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUncheckedUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUncheckedUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUncheckedUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUncheckedUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
    feedbacksGot?: FeedbackUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type TaskCreateWithoutFeedbacksInput = {
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTasksAuthoredInput
    developer?: DeveloperProfileCreateNestedOneWithoutTasksInput
    offers?: TaskOfferCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    authorId: number
    developerId?: number | null
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    offers?: TaskOfferUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutFeedbacksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutFeedbacksInput, TaskUncheckedCreateWithoutFeedbacksInput>
  }

  export type UserCreateWithoutFeedbacksLeftInput = {
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferCreateNestedManyWithoutUserInput
    feedbacksGot?: FeedbackCreateNestedManyWithoutTargetInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbacksLeftInput = {
    id?: number
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileUncheckedCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileUncheckedCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskUncheckedCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferUncheckedCreateNestedManyWithoutUserInput
    feedbacksGot?: FeedbackUncheckedCreateNestedManyWithoutTargetInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbacksLeftInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbacksLeftInput, UserUncheckedCreateWithoutFeedbacksLeftInput>
  }

  export type UserCreateWithoutFeedbacksGotInput = {
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackCreateNestedManyWithoutAuthorInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbacksGotInput = {
    id?: number
    telegramId: bigint | number
    tgUsername?: string | null
    displayName: string
    email?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    developerProfile?: DeveloperProfileUncheckedCreateNestedOneWithoutUserInput
    employerProfile?: EmployerProfileUncheckedCreateNestedOneWithoutUserInput
    tasksAuthored?: TaskUncheckedCreateNestedManyWithoutAuthorInput
    offers?: TaskOfferUncheckedCreateNestedManyWithoutUserInput
    feedbacksLeft?: FeedbackUncheckedCreateNestedManyWithoutAuthorInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbacksGotInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbacksGotInput, UserUncheckedCreateWithoutFeedbacksGotInput>
  }

  export type TaskUpsertWithoutFeedbacksInput = {
    update: XOR<TaskUpdateWithoutFeedbacksInput, TaskUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<TaskCreateWithoutFeedbacksInput, TaskUncheckedCreateWithoutFeedbacksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutFeedbacksInput, TaskUncheckedUpdateWithoutFeedbacksInput>
  }

  export type TaskUpdateWithoutFeedbacksInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTasksAuthoredNestedInput
    developer?: DeveloperProfileUpdateOneWithoutTasksNestedInput
    offers?: TaskOfferUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: TaskOfferUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutFeedbacksLeftInput = {
    update: XOR<UserUpdateWithoutFeedbacksLeftInput, UserUncheckedUpdateWithoutFeedbacksLeftInput>
    create: XOR<UserCreateWithoutFeedbacksLeftInput, UserUncheckedCreateWithoutFeedbacksLeftInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbacksLeftInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbacksLeftInput, UserUncheckedUpdateWithoutFeedbacksLeftInput>
  }

  export type UserUpdateWithoutFeedbacksLeftInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUpdateManyWithoutUserNestedInput
    feedbacksGot?: FeedbackUpdateManyWithoutTargetNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbacksLeftInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUncheckedUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUncheckedUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUncheckedUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUncheckedUpdateManyWithoutUserNestedInput
    feedbacksGot?: FeedbackUncheckedUpdateManyWithoutTargetNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFeedbacksGotInput = {
    update: XOR<UserUpdateWithoutFeedbacksGotInput, UserUncheckedUpdateWithoutFeedbacksGotInput>
    create: XOR<UserCreateWithoutFeedbacksGotInput, UserUncheckedCreateWithoutFeedbacksGotInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbacksGotInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbacksGotInput, UserUncheckedUpdateWithoutFeedbacksGotInput>
  }

  export type UserUpdateWithoutFeedbacksGotInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUpdateManyWithoutAuthorNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbacksGotInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developerProfile?: DeveloperProfileUncheckedUpdateOneWithoutUserNestedInput
    employerProfile?: EmployerProfileUncheckedUpdateOneWithoutUserNestedInput
    tasksAuthored?: TaskUncheckedUpdateManyWithoutAuthorNestedInput
    offers?: TaskOfferUncheckedUpdateManyWithoutUserNestedInput
    feedbacksLeft?: FeedbackUncheckedUpdateManyWithoutAuthorNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateManyAuthorInput = {
    id?: number
    developerId?: number | null
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskOfferCreateManyUserInput = {
    id?: number
    taskId: number
    plan?: string | null
    proposedCost?: Decimal | DecimalJsLike | number | string | null
    proposedTime?: string | null
    status?: $Enums.OfferStatus
    createdAt?: Date | string
  }

  export type FeedbackCreateManyAuthorInput = {
    id?: number
    taskId: number
    targetId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateManyTargetInput = {
    id?: number
    taskId: number
    authorId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    txHash?: string | null
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    developer?: DeveloperProfileUpdateOneWithoutTasksNestedInput
    offers?: TaskOfferUpdateManyWithoutTaskNestedInput
    feedbacks?: FeedbackUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: TaskOfferUncheckedUpdateManyWithoutTaskNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOfferUpdateWithoutUserInput = {
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    proposedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proposedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutOffersNestedInput
  }

  export type TaskOfferUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    proposedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proposedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOfferUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    proposedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proposedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutAuthorInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutFeedbacksNestedInput
    target?: UserUpdateOneRequiredWithoutFeedbacksGotNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutTargetInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutFeedbacksNestedInput
    author?: UserUpdateOneRequiredWithoutFeedbacksLeftNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutTargetInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutTargetInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyDeveloperInput = {
    id?: number
    authorId: number
    title: string
    description: string
    minBudget?: Decimal | DecimalJsLike | number | string | null
    maxBudget?: Decimal | DecimalJsLike | number | string | null
    timeEstimate?: string | null
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutDeveloperInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTasksAuthoredNestedInput
    offers?: TaskOfferUpdateManyWithoutTaskNestedInput
    feedbacks?: FeedbackUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: TaskOfferUncheckedUpdateManyWithoutTaskNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBudget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timeEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOfferCreateManyTaskInput = {
    id?: number
    userId: number
    plan?: string | null
    proposedCost?: Decimal | DecimalJsLike | number | string | null
    proposedTime?: string | null
    status?: $Enums.OfferStatus
    createdAt?: Date | string
  }

  export type FeedbackCreateManyTaskInput = {
    id?: number
    authorId: number
    targetId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type TaskOfferUpdateWithoutTaskInput = {
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    proposedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proposedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOffersNestedInput
  }

  export type TaskOfferUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    proposedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proposedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskOfferUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    proposedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proposedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutTaskInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutFeedbacksLeftNestedInput
    target?: UserUpdateOneRequiredWithoutFeedbacksGotNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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