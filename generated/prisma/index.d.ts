
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
 * Model OSC
 * 
 */
export type OSC = $Result.DefaultSelection<Prisma.$OSCPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Animal
 * 
 */
export type Animal = $Result.DefaultSelection<Prisma.$AnimalPayload>
/**
 * Model Adoption
 * 
 */
export type Adoption = $Result.DefaultSelection<Prisma.$AdoptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  APPLICATION_ADMIN: 'APPLICATION_ADMIN',
  APPLICATION_MASTER: 'APPLICATION_MASTER',
  UNDEFINED: 'UNDEFINED',
  OSC_MASTER: 'OSC_MASTER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const OSCType: {
  ONG: 'ONG',
  AC: 'AC',
  GSI: 'GSI',
  EB: 'EB',
  MS: 'MS',
  CA: 'CA',
  OSCIP: 'OSCIP'
};

export type OSCType = (typeof OSCType)[keyof typeof OSCType]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BLOCKED: 'BLOCKED',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const OSCStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BLOCKED: 'BLOCKED',
  SUSPENSE: 'SUSPENSE'
};

export type OSCStatus = (typeof OSCStatus)[keyof typeof OSCStatus]


export const AnimalAdoptionStatus: {
  ADOPTED: 'ADOPTED',
  AVAILABLE: 'AVAILABLE',
  PENDING: 'PENDING',
  RESERVED: 'RESERVED'
};

export type AnimalAdoptionStatus = (typeof AnimalAdoptionStatus)[keyof typeof AnimalAdoptionStatus]


export const AnimalSize: {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE'
};

export type AnimalSize = (typeof AnimalSize)[keyof typeof AnimalSize]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type OSCType = $Enums.OSCType

export const OSCType: typeof $Enums.OSCType

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type OSCStatus = $Enums.OSCStatus

export const OSCStatus: typeof $Enums.OSCStatus

export type AnimalAdoptionStatus = $Enums.AnimalAdoptionStatus

export const AnimalAdoptionStatus: typeof $Enums.AnimalAdoptionStatus

export type AnimalSize = $Enums.AnimalSize

export const AnimalSize: typeof $Enums.AnimalSize

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

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
   * `prisma.oSC`: Exposes CRUD operations for the **OSC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OSCS
    * const oSCS = await prisma.oSC.findMany()
    * ```
    */
  get oSC(): Prisma.OSCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.AnimalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adoption`: Exposes CRUD operations for the **Adoption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adoptions
    * const adoptions = await prisma.adoption.findMany()
    * ```
    */
  get adoption(): Prisma.AdoptionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    OSC: 'OSC',
    Address: 'Address',
    Animal: 'Animal',
    Adoption: 'Adoption'
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
      modelProps: "user" | "oSC" | "address" | "animal" | "adoption"
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
      OSC: {
        payload: Prisma.$OSCPayload<ExtArgs>
        fields: Prisma.OSCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OSCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OSCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload>
          }
          findFirst: {
            args: Prisma.OSCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OSCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload>
          }
          findMany: {
            args: Prisma.OSCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload>[]
          }
          create: {
            args: Prisma.OSCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload>
          }
          createMany: {
            args: Prisma.OSCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OSCCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload>[]
          }
          delete: {
            args: Prisma.OSCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload>
          }
          update: {
            args: Prisma.OSCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload>
          }
          deleteMany: {
            args: Prisma.OSCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OSCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OSCUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload>[]
          }
          upsert: {
            args: Prisma.OSCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OSCPayload>
          }
          aggregate: {
            args: Prisma.OSCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOSC>
          }
          groupBy: {
            args: Prisma.OSCGroupByArgs<ExtArgs>
            result: $Utils.Optional<OSCGroupByOutputType>[]
          }
          count: {
            args: Prisma.OSCCountArgs<ExtArgs>
            result: $Utils.Optional<OSCCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Animal: {
        payload: Prisma.$AnimalPayload<ExtArgs>
        fields: Prisma.AnimalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findFirst: {
            args: Prisma.AnimalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findMany: {
            args: Prisma.AnimalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          create: {
            args: Prisma.AnimalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          createMany: {
            args: Prisma.AnimalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          delete: {
            args: Prisma.AnimalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          update: {
            args: Prisma.AnimalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          deleteMany: {
            args: Prisma.AnimalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          upsert: {
            args: Prisma.AnimalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          aggregate: {
            args: Prisma.AnimalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimal>
          }
          groupBy: {
            args: Prisma.AnimalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimalCountArgs<ExtArgs>
            result: $Utils.Optional<AnimalCountAggregateOutputType> | number
          }
        }
      }
      Adoption: {
        payload: Prisma.$AdoptionPayload<ExtArgs>
        fields: Prisma.AdoptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdoptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdoptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          findFirst: {
            args: Prisma.AdoptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdoptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          findMany: {
            args: Prisma.AdoptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>[]
          }
          create: {
            args: Prisma.AdoptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          createMany: {
            args: Prisma.AdoptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdoptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>[]
          }
          delete: {
            args: Prisma.AdoptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          update: {
            args: Prisma.AdoptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          deleteMany: {
            args: Prisma.AdoptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdoptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdoptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>[]
          }
          upsert: {
            args: Prisma.AdoptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          aggregate: {
            args: Prisma.AdoptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdoption>
          }
          groupBy: {
            args: Prisma.AdoptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdoptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdoptionCountArgs<ExtArgs>
            result: $Utils.Optional<AdoptionCountAggregateOutputType> | number
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
    oSC?: OSCOmit
    address?: AddressOmit
    animal?: AnimalOmit
    adoption?: AdoptionOmit
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
   * Count Type OSCCountOutputType
   */

  export type OSCCountOutputType = {
    animals: number
  }

  export type OSCCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | OSCCountOutputTypeCountAnimalsArgs
  }

  // Custom InputTypes
  /**
   * OSCCountOutputType without action
   */
  export type OSCCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSCCountOutputType
     */
    select?: OSCCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OSCCountOutputType without action
   */
  export type OSCCountOutputTypeCountAnimalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRole | null
    oscId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRole | null
    oscId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    email: number
    status: number
    role: number
    oscId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    status?: true
    role?: true
    oscId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    status?: true
    role?: true
    oscId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    status?: true
    role?: true
    oscId?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string
    email: string
    status: $Enums.UserStatus
    role: $Enums.UserRole
    oscId: string | null
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    password?: boolean
    email?: boolean
    status?: boolean
    role?: boolean
    oscId?: boolean
    osc?: boolean | User$oscArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    status?: boolean
    role?: boolean
    oscId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    status?: boolean
    role?: boolean
    oscId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    status?: boolean
    role?: boolean
    oscId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "email" | "status" | "role" | "oscId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osc?: boolean | User$oscArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      osc: Prisma.$OSCPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      email: string
      status: $Enums.UserStatus
      role: $Enums.UserRole
      oscId: string | null
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
    osc<T extends User$oscArgs<ExtArgs> = {}>(args?: Subset<T, User$oscArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly oscId: FieldRef<"User", 'String'>
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
   * User.osc
   */
  export type User$oscArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    where?: OSCWhereInput
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
   * Model OSC
   */

  export type AggregateOSC = {
    _count: OSCCountAggregateOutputType | null
    _min: OSCMinAggregateOutputType | null
    _max: OSCMaxAggregateOutputType | null
  }

  export type OSCMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    OSCType: $Enums.OSCType | null
    descriptionText: string | null
    identification: string | null
    status: $Enums.OSCStatus | null
    userId: string | null
  }

  export type OSCMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    OSCType: $Enums.OSCType | null
    descriptionText: string | null
    identification: string | null
    status: $Enums.OSCStatus | null
    userId: string | null
  }

  export type OSCCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    OSCType: number
    descriptionText: number
    identification: number
    status: number
    userId: number
    _all: number
  }


  export type OSCMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    OSCType?: true
    descriptionText?: true
    identification?: true
    status?: true
    userId?: true
  }

  export type OSCMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    OSCType?: true
    descriptionText?: true
    identification?: true
    status?: true
    userId?: true
  }

  export type OSCCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    OSCType?: true
    descriptionText?: true
    identification?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type OSCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OSC to aggregate.
     */
    where?: OSCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OSCS to fetch.
     */
    orderBy?: OSCOrderByWithRelationInput | OSCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OSCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OSCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OSCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OSCS
    **/
    _count?: true | OSCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OSCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OSCMaxAggregateInputType
  }

  export type GetOSCAggregateType<T extends OSCAggregateArgs> = {
        [P in keyof T & keyof AggregateOSC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOSC[P]>
      : GetScalarType<T[P], AggregateOSC[P]>
  }




  export type OSCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OSCWhereInput
    orderBy?: OSCOrderByWithAggregationInput | OSCOrderByWithAggregationInput[]
    by: OSCScalarFieldEnum[] | OSCScalarFieldEnum
    having?: OSCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OSCCountAggregateInputType | true
    _min?: OSCMinAggregateInputType
    _max?: OSCMaxAggregateInputType
  }

  export type OSCGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    OSCType: $Enums.OSCType
    descriptionText: string | null
    identification: string
    status: $Enums.OSCStatus
    userId: string | null
    _count: OSCCountAggregateOutputType | null
    _min: OSCMinAggregateOutputType | null
    _max: OSCMaxAggregateOutputType | null
  }

  type GetOSCGroupByPayload<T extends OSCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OSCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OSCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OSCGroupByOutputType[P]>
            : GetScalarType<T[P], OSCGroupByOutputType[P]>
        }
      >
    >


  export type OSCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    OSCType?: boolean
    descriptionText?: boolean
    identification?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | OSC$userArgs<ExtArgs>
    animals?: boolean | OSC$animalsArgs<ExtArgs>
    adress?: boolean | OSC$adressArgs<ExtArgs>
    _count?: boolean | OSCCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oSC"]>

  export type OSCSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    OSCType?: boolean
    descriptionText?: boolean
    identification?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | OSC$userArgs<ExtArgs>
  }, ExtArgs["result"]["oSC"]>

  export type OSCSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    OSCType?: boolean
    descriptionText?: boolean
    identification?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | OSC$userArgs<ExtArgs>
  }, ExtArgs["result"]["oSC"]>

  export type OSCSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    OSCType?: boolean
    descriptionText?: boolean
    identification?: boolean
    status?: boolean
    userId?: boolean
  }

  export type OSCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "OSCType" | "descriptionText" | "identification" | "status" | "userId", ExtArgs["result"]["oSC"]>
  export type OSCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OSC$userArgs<ExtArgs>
    animals?: boolean | OSC$animalsArgs<ExtArgs>
    adress?: boolean | OSC$adressArgs<ExtArgs>
    _count?: boolean | OSCCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OSCIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OSC$userArgs<ExtArgs>
  }
  export type OSCIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OSC$userArgs<ExtArgs>
  }

  export type $OSCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OSC"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      animals: Prisma.$AnimalPayload<ExtArgs>[]
      adress: Prisma.$AddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      OSCType: $Enums.OSCType
      descriptionText: string | null
      identification: string
      status: $Enums.OSCStatus
      userId: string | null
    }, ExtArgs["result"]["oSC"]>
    composites: {}
  }

  type OSCGetPayload<S extends boolean | null | undefined | OSCDefaultArgs> = $Result.GetResult<Prisma.$OSCPayload, S>

  type OSCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OSCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OSCCountAggregateInputType | true
    }

  export interface OSCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OSC'], meta: { name: 'OSC' } }
    /**
     * Find zero or one OSC that matches the filter.
     * @param {OSCFindUniqueArgs} args - Arguments to find a OSC
     * @example
     * // Get one OSC
     * const oSC = await prisma.oSC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OSCFindUniqueArgs>(args: SelectSubset<T, OSCFindUniqueArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OSC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OSCFindUniqueOrThrowArgs} args - Arguments to find a OSC
     * @example
     * // Get one OSC
     * const oSC = await prisma.oSC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OSCFindUniqueOrThrowArgs>(args: SelectSubset<T, OSCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OSC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSCFindFirstArgs} args - Arguments to find a OSC
     * @example
     * // Get one OSC
     * const oSC = await prisma.oSC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OSCFindFirstArgs>(args?: SelectSubset<T, OSCFindFirstArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OSC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSCFindFirstOrThrowArgs} args - Arguments to find a OSC
     * @example
     * // Get one OSC
     * const oSC = await prisma.oSC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OSCFindFirstOrThrowArgs>(args?: SelectSubset<T, OSCFindFirstOrThrowArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OSCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OSCS
     * const oSCS = await prisma.oSC.findMany()
     * 
     * // Get first 10 OSCS
     * const oSCS = await prisma.oSC.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oSCWithIdOnly = await prisma.oSC.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OSCFindManyArgs>(args?: SelectSubset<T, OSCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OSC.
     * @param {OSCCreateArgs} args - Arguments to create a OSC.
     * @example
     * // Create one OSC
     * const OSC = await prisma.oSC.create({
     *   data: {
     *     // ... data to create a OSC
     *   }
     * })
     * 
     */
    create<T extends OSCCreateArgs>(args: SelectSubset<T, OSCCreateArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OSCS.
     * @param {OSCCreateManyArgs} args - Arguments to create many OSCS.
     * @example
     * // Create many OSCS
     * const oSC = await prisma.oSC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OSCCreateManyArgs>(args?: SelectSubset<T, OSCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OSCS and returns the data saved in the database.
     * @param {OSCCreateManyAndReturnArgs} args - Arguments to create many OSCS.
     * @example
     * // Create many OSCS
     * const oSC = await prisma.oSC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OSCS and only return the `id`
     * const oSCWithIdOnly = await prisma.oSC.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OSCCreateManyAndReturnArgs>(args?: SelectSubset<T, OSCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OSC.
     * @param {OSCDeleteArgs} args - Arguments to delete one OSC.
     * @example
     * // Delete one OSC
     * const OSC = await prisma.oSC.delete({
     *   where: {
     *     // ... filter to delete one OSC
     *   }
     * })
     * 
     */
    delete<T extends OSCDeleteArgs>(args: SelectSubset<T, OSCDeleteArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OSC.
     * @param {OSCUpdateArgs} args - Arguments to update one OSC.
     * @example
     * // Update one OSC
     * const oSC = await prisma.oSC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OSCUpdateArgs>(args: SelectSubset<T, OSCUpdateArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OSCS.
     * @param {OSCDeleteManyArgs} args - Arguments to filter OSCS to delete.
     * @example
     * // Delete a few OSCS
     * const { count } = await prisma.oSC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OSCDeleteManyArgs>(args?: SelectSubset<T, OSCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OSCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OSCS
     * const oSC = await prisma.oSC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OSCUpdateManyArgs>(args: SelectSubset<T, OSCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OSCS and returns the data updated in the database.
     * @param {OSCUpdateManyAndReturnArgs} args - Arguments to update many OSCS.
     * @example
     * // Update many OSCS
     * const oSC = await prisma.oSC.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OSCS and only return the `id`
     * const oSCWithIdOnly = await prisma.oSC.updateManyAndReturn({
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
    updateManyAndReturn<T extends OSCUpdateManyAndReturnArgs>(args: SelectSubset<T, OSCUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OSC.
     * @param {OSCUpsertArgs} args - Arguments to update or create a OSC.
     * @example
     * // Update or create a OSC
     * const oSC = await prisma.oSC.upsert({
     *   create: {
     *     // ... data to create a OSC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OSC we want to update
     *   }
     * })
     */
    upsert<T extends OSCUpsertArgs>(args: SelectSubset<T, OSCUpsertArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OSCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSCCountArgs} args - Arguments to filter OSCS to count.
     * @example
     * // Count the number of OSCS
     * const count = await prisma.oSC.count({
     *   where: {
     *     // ... the filter for the OSCS we want to count
     *   }
     * })
    **/
    count<T extends OSCCountArgs>(
      args?: Subset<T, OSCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OSCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OSC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OSCAggregateArgs>(args: Subset<T, OSCAggregateArgs>): Prisma.PrismaPromise<GetOSCAggregateType<T>>

    /**
     * Group by OSC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OSCGroupByArgs} args - Group by arguments.
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
      T extends OSCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OSCGroupByArgs['orderBy'] }
        : { orderBy?: OSCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OSCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOSCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OSC model
   */
  readonly fields: OSCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OSC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OSCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends OSC$userArgs<ExtArgs> = {}>(args?: Subset<T, OSC$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    animals<T extends OSC$animalsArgs<ExtArgs> = {}>(args?: Subset<T, OSC$animalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adress<T extends OSC$adressArgs<ExtArgs> = {}>(args?: Subset<T, OSC$adressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OSC model
   */
  interface OSCFieldRefs {
    readonly id: FieldRef<"OSC", 'String'>
    readonly name: FieldRef<"OSC", 'String'>
    readonly email: FieldRef<"OSC", 'String'>
    readonly phone: FieldRef<"OSC", 'String'>
    readonly OSCType: FieldRef<"OSC", 'OSCType'>
    readonly descriptionText: FieldRef<"OSC", 'String'>
    readonly identification: FieldRef<"OSC", 'String'>
    readonly status: FieldRef<"OSC", 'OSCStatus'>
    readonly userId: FieldRef<"OSC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OSC findUnique
   */
  export type OSCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    /**
     * Filter, which OSC to fetch.
     */
    where: OSCWhereUniqueInput
  }

  /**
   * OSC findUniqueOrThrow
   */
  export type OSCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    /**
     * Filter, which OSC to fetch.
     */
    where: OSCWhereUniqueInput
  }

  /**
   * OSC findFirst
   */
  export type OSCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    /**
     * Filter, which OSC to fetch.
     */
    where?: OSCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OSCS to fetch.
     */
    orderBy?: OSCOrderByWithRelationInput | OSCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OSCS.
     */
    cursor?: OSCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OSCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OSCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OSCS.
     */
    distinct?: OSCScalarFieldEnum | OSCScalarFieldEnum[]
  }

  /**
   * OSC findFirstOrThrow
   */
  export type OSCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    /**
     * Filter, which OSC to fetch.
     */
    where?: OSCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OSCS to fetch.
     */
    orderBy?: OSCOrderByWithRelationInput | OSCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OSCS.
     */
    cursor?: OSCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OSCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OSCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OSCS.
     */
    distinct?: OSCScalarFieldEnum | OSCScalarFieldEnum[]
  }

  /**
   * OSC findMany
   */
  export type OSCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    /**
     * Filter, which OSCS to fetch.
     */
    where?: OSCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OSCS to fetch.
     */
    orderBy?: OSCOrderByWithRelationInput | OSCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OSCS.
     */
    cursor?: OSCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OSCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OSCS.
     */
    skip?: number
    distinct?: OSCScalarFieldEnum | OSCScalarFieldEnum[]
  }

  /**
   * OSC create
   */
  export type OSCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    /**
     * The data needed to create a OSC.
     */
    data: XOR<OSCCreateInput, OSCUncheckedCreateInput>
  }

  /**
   * OSC createMany
   */
  export type OSCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OSCS.
     */
    data: OSCCreateManyInput | OSCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OSC createManyAndReturn
   */
  export type OSCCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * The data used to create many OSCS.
     */
    data: OSCCreateManyInput | OSCCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OSC update
   */
  export type OSCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    /**
     * The data needed to update a OSC.
     */
    data: XOR<OSCUpdateInput, OSCUncheckedUpdateInput>
    /**
     * Choose, which OSC to update.
     */
    where: OSCWhereUniqueInput
  }

  /**
   * OSC updateMany
   */
  export type OSCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OSCS.
     */
    data: XOR<OSCUpdateManyMutationInput, OSCUncheckedUpdateManyInput>
    /**
     * Filter which OSCS to update
     */
    where?: OSCWhereInput
    /**
     * Limit how many OSCS to update.
     */
    limit?: number
  }

  /**
   * OSC updateManyAndReturn
   */
  export type OSCUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * The data used to update OSCS.
     */
    data: XOR<OSCUpdateManyMutationInput, OSCUncheckedUpdateManyInput>
    /**
     * Filter which OSCS to update
     */
    where?: OSCWhereInput
    /**
     * Limit how many OSCS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OSC upsert
   */
  export type OSCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    /**
     * The filter to search for the OSC to update in case it exists.
     */
    where: OSCWhereUniqueInput
    /**
     * In case the OSC found by the `where` argument doesn't exist, create a new OSC with this data.
     */
    create: XOR<OSCCreateInput, OSCUncheckedCreateInput>
    /**
     * In case the OSC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OSCUpdateInput, OSCUncheckedUpdateInput>
  }

  /**
   * OSC delete
   */
  export type OSCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    /**
     * Filter which OSC to delete.
     */
    where: OSCWhereUniqueInput
  }

  /**
   * OSC deleteMany
   */
  export type OSCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OSCS to delete
     */
    where?: OSCWhereInput
    /**
     * Limit how many OSCS to delete.
     */
    limit?: number
  }

  /**
   * OSC.user
   */
  export type OSC$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * OSC.animals
   */
  export type OSC$animalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * OSC.adress
   */
  export type OSC$adressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * OSC without action
   */
  export type OSCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    road: string | null
    number: string | null
    district: string | null
    city: string | null
    uf: string | null
    CEP: string | null
    OSCId: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    road: string | null
    number: string | null
    district: string | null
    city: string | null
    uf: string | null
    CEP: string | null
    OSCId: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    road: number
    number: number
    district: number
    city: number
    uf: number
    CEP: number
    OSCId: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    road?: true
    number?: true
    district?: true
    city?: true
    uf?: true
    CEP?: true
    OSCId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    road?: true
    number?: true
    district?: true
    city?: true
    uf?: true
    CEP?: true
    OSCId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    road?: true
    number?: true
    district?: true
    city?: true
    uf?: true
    CEP?: true
    OSCId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    road: string
    number: string
    district: string
    city: string
    uf: string
    CEP: string
    OSCId: string | null
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    road?: boolean
    number?: boolean
    district?: boolean
    city?: boolean
    uf?: boolean
    CEP?: boolean
    OSCId?: boolean
    osc?: boolean | Address$oscArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    road?: boolean
    number?: boolean
    district?: boolean
    city?: boolean
    uf?: boolean
    CEP?: boolean
    OSCId?: boolean
    osc?: boolean | Address$oscArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    road?: boolean
    number?: boolean
    district?: boolean
    city?: boolean
    uf?: boolean
    CEP?: boolean
    OSCId?: boolean
    osc?: boolean | Address$oscArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    road?: boolean
    number?: boolean
    district?: boolean
    city?: boolean
    uf?: boolean
    CEP?: boolean
    OSCId?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "road" | "number" | "district" | "city" | "uf" | "CEP" | "OSCId", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osc?: boolean | Address$oscArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osc?: boolean | Address$oscArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osc?: boolean | Address$oscArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      osc: Prisma.$OSCPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      road: string
      number: string
      district: string
      city: string
      uf: string
      CEP: string
      OSCId: string | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    osc<T extends Address$oscArgs<ExtArgs> = {}>(args?: Subset<T, Address$oscArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly road: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
    readonly district: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly uf: FieldRef<"Address", 'String'>
    readonly CEP: FieldRef<"Address", 'String'>
    readonly OSCId: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.osc
   */
  export type Address$oscArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OSC
     */
    select?: OSCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OSC
     */
    omit?: OSCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OSCInclude<ExtArgs> | null
    where?: OSCWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Animal
   */

  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalAvgAggregateOutputType = {
    weight: number | null
  }

  export type AnimalSumAggregateOutputType = {
    weight: number | null
  }

  export type AnimalMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    birthDate: Date | null
    weight: number | null
    specie: string | null
    breed: string | null
    characteristics: string | null
    imageUrl: string | null
    adoptionStatus: $Enums.AnimalAdoptionStatus | null
    size: $Enums.AnimalSize | null
    gender: $Enums.Gender | null
    oscId: string | null
  }

  export type AnimalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    birthDate: Date | null
    weight: number | null
    specie: string | null
    breed: string | null
    characteristics: string | null
    imageUrl: string | null
    adoptionStatus: $Enums.AnimalAdoptionStatus | null
    size: $Enums.AnimalSize | null
    gender: $Enums.Gender | null
    oscId: string | null
  }

  export type AnimalCountAggregateOutputType = {
    id: number
    name: number
    description: number
    birthDate: number
    weight: number
    specie: number
    breed: number
    characteristics: number
    imageUrl: number
    adoptionStatus: number
    size: number
    gender: number
    oscId: number
    _all: number
  }


  export type AnimalAvgAggregateInputType = {
    weight?: true
  }

  export type AnimalSumAggregateInputType = {
    weight?: true
  }

  export type AnimalMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    birthDate?: true
    weight?: true
    specie?: true
    breed?: true
    characteristics?: true
    imageUrl?: true
    adoptionStatus?: true
    size?: true
    gender?: true
    oscId?: true
  }

  export type AnimalMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    birthDate?: true
    weight?: true
    specie?: true
    breed?: true
    characteristics?: true
    imageUrl?: true
    adoptionStatus?: true
    size?: true
    gender?: true
    oscId?: true
  }

  export type AnimalCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    birthDate?: true
    weight?: true
    specie?: true
    breed?: true
    characteristics?: true
    imageUrl?: true
    adoptionStatus?: true
    size?: true
    gender?: true
    oscId?: true
    _all?: true
  }

  export type AnimalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animal to aggregate.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }




  export type AnimalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithAggregationInput | AnimalOrderByWithAggregationInput[]
    by: AnimalScalarFieldEnum[] | AnimalScalarFieldEnum
    having?: AnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _avg?: AnimalAvgAggregateInputType
    _sum?: AnimalSumAggregateInputType
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }

  export type AnimalGroupByOutputType = {
    id: string
    name: string
    description: string
    birthDate: Date
    weight: number
    specie: string
    breed: string
    characteristics: string
    imageUrl: string | null
    adoptionStatus: $Enums.AnimalAdoptionStatus
    size: $Enums.AnimalSize
    gender: $Enums.Gender
    oscId: string
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      >
    >


  export type AnimalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    birthDate?: boolean
    weight?: boolean
    specie?: boolean
    breed?: boolean
    characteristics?: boolean
    imageUrl?: boolean
    adoptionStatus?: boolean
    size?: boolean
    gender?: boolean
    oscId?: boolean
    osc?: boolean | OSCDefaultArgs<ExtArgs>
    adoption?: boolean | Animal$adoptionArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    birthDate?: boolean
    weight?: boolean
    specie?: boolean
    breed?: boolean
    characteristics?: boolean
    imageUrl?: boolean
    adoptionStatus?: boolean
    size?: boolean
    gender?: boolean
    oscId?: boolean
    osc?: boolean | OSCDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    birthDate?: boolean
    weight?: boolean
    specie?: boolean
    breed?: boolean
    characteristics?: boolean
    imageUrl?: boolean
    adoptionStatus?: boolean
    size?: boolean
    gender?: boolean
    oscId?: boolean
    osc?: boolean | OSCDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    birthDate?: boolean
    weight?: boolean
    specie?: boolean
    breed?: boolean
    characteristics?: boolean
    imageUrl?: boolean
    adoptionStatus?: boolean
    size?: boolean
    gender?: boolean
    oscId?: boolean
  }

  export type AnimalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "birthDate" | "weight" | "specie" | "breed" | "characteristics" | "imageUrl" | "adoptionStatus" | "size" | "gender" | "oscId", ExtArgs["result"]["animal"]>
  export type AnimalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osc?: boolean | OSCDefaultArgs<ExtArgs>
    adoption?: boolean | Animal$adoptionArgs<ExtArgs>
  }
  export type AnimalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osc?: boolean | OSCDefaultArgs<ExtArgs>
  }
  export type AnimalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    osc?: boolean | OSCDefaultArgs<ExtArgs>
  }

  export type $AnimalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animal"
    objects: {
      osc: Prisma.$OSCPayload<ExtArgs>
      adoption: Prisma.$AdoptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      birthDate: Date
      weight: number
      specie: string
      breed: string
      characteristics: string
      imageUrl: string | null
      adoptionStatus: $Enums.AnimalAdoptionStatus
      size: $Enums.AnimalSize
      gender: $Enums.Gender
      oscId: string
    }, ExtArgs["result"]["animal"]>
    composites: {}
  }

  type AnimalGetPayload<S extends boolean | null | undefined | AnimalDefaultArgs> = $Result.GetResult<Prisma.$AnimalPayload, S>

  type AnimalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimalCountAggregateInputType | true
    }

  export interface AnimalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animal'], meta: { name: 'Animal' } }
    /**
     * Find zero or one Animal that matches the filter.
     * @param {AnimalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimalFindUniqueArgs>(args: SelectSubset<T, AnimalFindUniqueArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimalFindUniqueOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimalFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimalFindFirstArgs>(args?: SelectSubset<T, AnimalFindFirstArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimalFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animalWithIdOnly = await prisma.animal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimalFindManyArgs>(args?: SelectSubset<T, AnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animal.
     * @param {AnimalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
     */
    create<T extends AnimalCreateArgs>(args: SelectSubset<T, AnimalCreateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animals.
     * @param {AnimalCreateManyArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimalCreateManyArgs>(args?: SelectSubset<T, AnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Animals and returns the data saved in the database.
     * @param {AnimalCreateManyAndReturnArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimalCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Animal.
     * @param {AnimalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
     */
    delete<T extends AnimalDeleteArgs>(args: SelectSubset<T, AnimalDeleteArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animal.
     * @param {AnimalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimalUpdateArgs>(args: SelectSubset<T, AnimalUpdateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animals.
     * @param {AnimalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimalDeleteManyArgs>(args?: SelectSubset<T, AnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimalUpdateManyArgs>(args: SelectSubset<T, AnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals and returns the data updated in the database.
     * @param {AnimalUpdateManyAndReturnArgs} args - Arguments to update many Animals.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnimalUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Animal.
     * @param {AnimalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
     */
    upsert<T extends AnimalUpsertArgs>(args: SelectSubset<T, AnimalUpsertArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalCountArgs>(
      args?: Subset<T, AnimalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
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
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animal model
   */
  readonly fields: AnimalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    osc<T extends OSCDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OSCDefaultArgs<ExtArgs>>): Prisma__OSCClient<$Result.GetResult<Prisma.$OSCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adoption<T extends Animal$adoptionArgs<ExtArgs> = {}>(args?: Subset<T, Animal$adoptionArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Animal model
   */
  interface AnimalFieldRefs {
    readonly id: FieldRef<"Animal", 'String'>
    readonly name: FieldRef<"Animal", 'String'>
    readonly description: FieldRef<"Animal", 'String'>
    readonly birthDate: FieldRef<"Animal", 'DateTime'>
    readonly weight: FieldRef<"Animal", 'Float'>
    readonly specie: FieldRef<"Animal", 'String'>
    readonly breed: FieldRef<"Animal", 'String'>
    readonly characteristics: FieldRef<"Animal", 'String'>
    readonly imageUrl: FieldRef<"Animal", 'String'>
    readonly adoptionStatus: FieldRef<"Animal", 'AnimalAdoptionStatus'>
    readonly size: FieldRef<"Animal", 'AnimalSize'>
    readonly gender: FieldRef<"Animal", 'Gender'>
    readonly oscId: FieldRef<"Animal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Animal findUnique
   */
  export type AnimalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findUniqueOrThrow
   */
  export type AnimalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findFirst
   */
  export type AnimalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findFirstOrThrow
   */
  export type AnimalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findMany
   */
  export type AnimalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal create
   */
  export type AnimalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to create a Animal.
     */
    data: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
  }

  /**
   * Animal createMany
   */
  export type AnimalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal createManyAndReturn
   */
  export type AnimalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal update
   */
  export type AnimalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to update a Animal.
     */
    data: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
    /**
     * Choose, which Animal to update.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal updateMany
   */
  export type AnimalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal updateManyAndReturn
   */
  export type AnimalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal upsert
   */
  export type AnimalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The filter to search for the Animal to update in case it exists.
     */
    where: AnimalWhereUniqueInput
    /**
     * In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.
     */
    create: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
    /**
     * In case the Animal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
  }

  /**
   * Animal delete
   */
  export type AnimalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter which Animal to delete.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal deleteMany
   */
  export type AnimalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to delete
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to delete.
     */
    limit?: number
  }

  /**
   * Animal.adoption
   */
  export type Animal$adoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    where?: AdoptionWhereInput
  }

  /**
   * Animal without action
   */
  export type AnimalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
  }


  /**
   * Model Adoption
   */

  export type AggregateAdoption = {
    _count: AdoptionCountAggregateOutputType | null
    _min: AdoptionMinAggregateOutputType | null
    _max: AdoptionMaxAggregateOutputType | null
  }

  export type AdoptionMinAggregateOutputType = {
    id: string | null
    adoptionDate: Date | null
    adopterName: string | null
    adopterEmail: string | null
    adopterPhone: string | null
    adopterCPF: string | null
    animalId: string | null
  }

  export type AdoptionMaxAggregateOutputType = {
    id: string | null
    adoptionDate: Date | null
    adopterName: string | null
    adopterEmail: string | null
    adopterPhone: string | null
    adopterCPF: string | null
    animalId: string | null
  }

  export type AdoptionCountAggregateOutputType = {
    id: number
    adoptionDate: number
    adopterName: number
    adopterEmail: number
    adopterPhone: number
    adopterCPF: number
    animalId: number
    _all: number
  }


  export type AdoptionMinAggregateInputType = {
    id?: true
    adoptionDate?: true
    adopterName?: true
    adopterEmail?: true
    adopterPhone?: true
    adopterCPF?: true
    animalId?: true
  }

  export type AdoptionMaxAggregateInputType = {
    id?: true
    adoptionDate?: true
    adopterName?: true
    adopterEmail?: true
    adopterPhone?: true
    adopterCPF?: true
    animalId?: true
  }

  export type AdoptionCountAggregateInputType = {
    id?: true
    adoptionDate?: true
    adopterName?: true
    adopterEmail?: true
    adopterPhone?: true
    adopterCPF?: true
    animalId?: true
    _all?: true
  }

  export type AdoptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adoption to aggregate.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adoptions
    **/
    _count?: true | AdoptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdoptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdoptionMaxAggregateInputType
  }

  export type GetAdoptionAggregateType<T extends AdoptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdoption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdoption[P]>
      : GetScalarType<T[P], AggregateAdoption[P]>
  }




  export type AdoptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdoptionWhereInput
    orderBy?: AdoptionOrderByWithAggregationInput | AdoptionOrderByWithAggregationInput[]
    by: AdoptionScalarFieldEnum[] | AdoptionScalarFieldEnum
    having?: AdoptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdoptionCountAggregateInputType | true
    _min?: AdoptionMinAggregateInputType
    _max?: AdoptionMaxAggregateInputType
  }

  export type AdoptionGroupByOutputType = {
    id: string
    adoptionDate: Date
    adopterName: string
    adopterEmail: string | null
    adopterPhone: string
    adopterCPF: string
    animalId: string
    _count: AdoptionCountAggregateOutputType | null
    _min: AdoptionMinAggregateOutputType | null
    _max: AdoptionMaxAggregateOutputType | null
  }

  type GetAdoptionGroupByPayload<T extends AdoptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdoptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdoptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdoptionGroupByOutputType[P]>
            : GetScalarType<T[P], AdoptionGroupByOutputType[P]>
        }
      >
    >


  export type AdoptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adoptionDate?: boolean
    adopterName?: boolean
    adopterEmail?: boolean
    adopterPhone?: boolean
    adopterCPF?: boolean
    animalId?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type AdoptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adoptionDate?: boolean
    adopterName?: boolean
    adopterEmail?: boolean
    adopterPhone?: boolean
    adopterCPF?: boolean
    animalId?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type AdoptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adoptionDate?: boolean
    adopterName?: boolean
    adopterEmail?: boolean
    adopterPhone?: boolean
    adopterCPF?: boolean
    animalId?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type AdoptionSelectScalar = {
    id?: boolean
    adoptionDate?: boolean
    adopterName?: boolean
    adopterEmail?: boolean
    adopterPhone?: boolean
    adopterCPF?: boolean
    animalId?: boolean
  }

  export type AdoptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adoptionDate" | "adopterName" | "adopterEmail" | "adopterPhone" | "adopterCPF" | "animalId", ExtArgs["result"]["adoption"]>
  export type AdoptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type AdoptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type AdoptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $AdoptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adoption"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adoptionDate: Date
      adopterName: string
      adopterEmail: string | null
      adopterPhone: string
      adopterCPF: string
      animalId: string
    }, ExtArgs["result"]["adoption"]>
    composites: {}
  }

  type AdoptionGetPayload<S extends boolean | null | undefined | AdoptionDefaultArgs> = $Result.GetResult<Prisma.$AdoptionPayload, S>

  type AdoptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdoptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdoptionCountAggregateInputType | true
    }

  export interface AdoptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adoption'], meta: { name: 'Adoption' } }
    /**
     * Find zero or one Adoption that matches the filter.
     * @param {AdoptionFindUniqueArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdoptionFindUniqueArgs>(args: SelectSubset<T, AdoptionFindUniqueArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adoption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdoptionFindUniqueOrThrowArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdoptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdoptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionFindFirstArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdoptionFindFirstArgs>(args?: SelectSubset<T, AdoptionFindFirstArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionFindFirstOrThrowArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdoptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdoptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adoptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adoptions
     * const adoptions = await prisma.adoption.findMany()
     * 
     * // Get first 10 Adoptions
     * const adoptions = await prisma.adoption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adoptionWithIdOnly = await prisma.adoption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdoptionFindManyArgs>(args?: SelectSubset<T, AdoptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adoption.
     * @param {AdoptionCreateArgs} args - Arguments to create a Adoption.
     * @example
     * // Create one Adoption
     * const Adoption = await prisma.adoption.create({
     *   data: {
     *     // ... data to create a Adoption
     *   }
     * })
     * 
     */
    create<T extends AdoptionCreateArgs>(args: SelectSubset<T, AdoptionCreateArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adoptions.
     * @param {AdoptionCreateManyArgs} args - Arguments to create many Adoptions.
     * @example
     * // Create many Adoptions
     * const adoption = await prisma.adoption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdoptionCreateManyArgs>(args?: SelectSubset<T, AdoptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adoptions and returns the data saved in the database.
     * @param {AdoptionCreateManyAndReturnArgs} args - Arguments to create many Adoptions.
     * @example
     * // Create many Adoptions
     * const adoption = await prisma.adoption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adoptions and only return the `id`
     * const adoptionWithIdOnly = await prisma.adoption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdoptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AdoptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adoption.
     * @param {AdoptionDeleteArgs} args - Arguments to delete one Adoption.
     * @example
     * // Delete one Adoption
     * const Adoption = await prisma.adoption.delete({
     *   where: {
     *     // ... filter to delete one Adoption
     *   }
     * })
     * 
     */
    delete<T extends AdoptionDeleteArgs>(args: SelectSubset<T, AdoptionDeleteArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adoption.
     * @param {AdoptionUpdateArgs} args - Arguments to update one Adoption.
     * @example
     * // Update one Adoption
     * const adoption = await prisma.adoption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdoptionUpdateArgs>(args: SelectSubset<T, AdoptionUpdateArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adoptions.
     * @param {AdoptionDeleteManyArgs} args - Arguments to filter Adoptions to delete.
     * @example
     * // Delete a few Adoptions
     * const { count } = await prisma.adoption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdoptionDeleteManyArgs>(args?: SelectSubset<T, AdoptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adoptions
     * const adoption = await prisma.adoption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdoptionUpdateManyArgs>(args: SelectSubset<T, AdoptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptions and returns the data updated in the database.
     * @param {AdoptionUpdateManyAndReturnArgs} args - Arguments to update many Adoptions.
     * @example
     * // Update many Adoptions
     * const adoption = await prisma.adoption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adoptions and only return the `id`
     * const adoptionWithIdOnly = await prisma.adoption.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdoptionUpdateManyAndReturnArgs>(args: SelectSubset<T, AdoptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adoption.
     * @param {AdoptionUpsertArgs} args - Arguments to update or create a Adoption.
     * @example
     * // Update or create a Adoption
     * const adoption = await prisma.adoption.upsert({
     *   create: {
     *     // ... data to create a Adoption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adoption we want to update
     *   }
     * })
     */
    upsert<T extends AdoptionUpsertArgs>(args: SelectSubset<T, AdoptionUpsertArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionCountArgs} args - Arguments to filter Adoptions to count.
     * @example
     * // Count the number of Adoptions
     * const count = await prisma.adoption.count({
     *   where: {
     *     // ... the filter for the Adoptions we want to count
     *   }
     * })
    **/
    count<T extends AdoptionCountArgs>(
      args?: Subset<T, AdoptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdoptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdoptionAggregateArgs>(args: Subset<T, AdoptionAggregateArgs>): Prisma.PrismaPromise<GetAdoptionAggregateType<T>>

    /**
     * Group by Adoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionGroupByArgs} args - Group by arguments.
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
      T extends AdoptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdoptionGroupByArgs['orderBy'] }
        : { orderBy?: AdoptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdoptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdoptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adoption model
   */
  readonly fields: AdoptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adoption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdoptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Adoption model
   */
  interface AdoptionFieldRefs {
    readonly id: FieldRef<"Adoption", 'String'>
    readonly adoptionDate: FieldRef<"Adoption", 'DateTime'>
    readonly adopterName: FieldRef<"Adoption", 'String'>
    readonly adopterEmail: FieldRef<"Adoption", 'String'>
    readonly adopterPhone: FieldRef<"Adoption", 'String'>
    readonly adopterCPF: FieldRef<"Adoption", 'String'>
    readonly animalId: FieldRef<"Adoption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Adoption findUnique
   */
  export type AdoptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption findUniqueOrThrow
   */
  export type AdoptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption findFirst
   */
  export type AdoptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adoptions.
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adoptions.
     */
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Adoption findFirstOrThrow
   */
  export type AdoptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adoptions.
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adoptions.
     */
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Adoption findMany
   */
  export type AdoptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoptions to fetch.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adoptions.
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Adoption create
   */
  export type AdoptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Adoption.
     */
    data: XOR<AdoptionCreateInput, AdoptionUncheckedCreateInput>
  }

  /**
   * Adoption createMany
   */
  export type AdoptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adoptions.
     */
    data: AdoptionCreateManyInput | AdoptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adoption createManyAndReturn
   */
  export type AdoptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * The data used to create many Adoptions.
     */
    data: AdoptionCreateManyInput | AdoptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adoption update
   */
  export type AdoptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Adoption.
     */
    data: XOR<AdoptionUpdateInput, AdoptionUncheckedUpdateInput>
    /**
     * Choose, which Adoption to update.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption updateMany
   */
  export type AdoptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adoptions.
     */
    data: XOR<AdoptionUpdateManyMutationInput, AdoptionUncheckedUpdateManyInput>
    /**
     * Filter which Adoptions to update
     */
    where?: AdoptionWhereInput
    /**
     * Limit how many Adoptions to update.
     */
    limit?: number
  }

  /**
   * Adoption updateManyAndReturn
   */
  export type AdoptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * The data used to update Adoptions.
     */
    data: XOR<AdoptionUpdateManyMutationInput, AdoptionUncheckedUpdateManyInput>
    /**
     * Filter which Adoptions to update
     */
    where?: AdoptionWhereInput
    /**
     * Limit how many Adoptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adoption upsert
   */
  export type AdoptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Adoption to update in case it exists.
     */
    where: AdoptionWhereUniqueInput
    /**
     * In case the Adoption found by the `where` argument doesn't exist, create a new Adoption with this data.
     */
    create: XOR<AdoptionCreateInput, AdoptionUncheckedCreateInput>
    /**
     * In case the Adoption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdoptionUpdateInput, AdoptionUncheckedUpdateInput>
  }

  /**
   * Adoption delete
   */
  export type AdoptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter which Adoption to delete.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption deleteMany
   */
  export type AdoptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adoptions to delete
     */
    where?: AdoptionWhereInput
    /**
     * Limit how many Adoptions to delete.
     */
    limit?: number
  }

  /**
   * Adoption without action
   */
  export type AdoptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adoption
     */
    omit?: AdoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
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
    name: 'name',
    password: 'password',
    email: 'email',
    status: 'status',
    role: 'role',
    oscId: 'oscId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OSCScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    OSCType: 'OSCType',
    descriptionText: 'descriptionText',
    identification: 'identification',
    status: 'status',
    userId: 'userId'
  };

  export type OSCScalarFieldEnum = (typeof OSCScalarFieldEnum)[keyof typeof OSCScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    road: 'road',
    number: 'number',
    district: 'district',
    city: 'city',
    uf: 'uf',
    CEP: 'CEP',
    OSCId: 'OSCId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    birthDate: 'birthDate',
    weight: 'weight',
    specie: 'specie',
    breed: 'breed',
    characteristics: 'characteristics',
    imageUrl: 'imageUrl',
    adoptionStatus: 'adoptionStatus',
    size: 'size',
    gender: 'gender',
    oscId: 'oscId'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const AdoptionScalarFieldEnum: {
    id: 'id',
    adoptionDate: 'adoptionDate',
    adopterName: 'adopterName',
    adopterEmail: 'adopterEmail',
    adopterPhone: 'adopterPhone',
    adopterCPF: 'adopterCPF',
    animalId: 'animalId'
  };

  export type AdoptionScalarFieldEnum = (typeof AdoptionScalarFieldEnum)[keyof typeof AdoptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'OSCType'
   */
  export type EnumOSCTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OSCType'>
    


  /**
   * Reference to a field of type 'OSCType[]'
   */
  export type ListEnumOSCTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OSCType[]'>
    


  /**
   * Reference to a field of type 'OSCStatus'
   */
  export type EnumOSCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OSCStatus'>
    


  /**
   * Reference to a field of type 'OSCStatus[]'
   */
  export type ListEnumOSCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OSCStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AnimalAdoptionStatus'
   */
  export type EnumAnimalAdoptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalAdoptionStatus'>
    


  /**
   * Reference to a field of type 'AnimalAdoptionStatus[]'
   */
  export type ListEnumAnimalAdoptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalAdoptionStatus[]'>
    


  /**
   * Reference to a field of type 'AnimalSize'
   */
  export type EnumAnimalSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalSize'>
    


  /**
   * Reference to a field of type 'AnimalSize[]'
   */
  export type ListEnumAnimalSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalSize[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    oscId?: StringNullableFilter<"User"> | string | null
    osc?: XOR<OSCNullableScalarRelationFilter, OSCWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    status?: SortOrder
    role?: SortOrder
    oscId?: SortOrderInput | SortOrder
    osc?: OSCOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    oscId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    osc?: XOR<OSCNullableScalarRelationFilter, OSCWhereInput> | null
  }, "id" | "email" | "oscId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    status?: SortOrder
    role?: SortOrder
    oscId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    oscId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type OSCWhereInput = {
    AND?: OSCWhereInput | OSCWhereInput[]
    OR?: OSCWhereInput[]
    NOT?: OSCWhereInput | OSCWhereInput[]
    id?: StringFilter<"OSC"> | string
    name?: StringFilter<"OSC"> | string
    email?: StringFilter<"OSC"> | string
    phone?: StringFilter<"OSC"> | string
    OSCType?: EnumOSCTypeFilter<"OSC"> | $Enums.OSCType
    descriptionText?: StringNullableFilter<"OSC"> | string | null
    identification?: StringFilter<"OSC"> | string
    status?: EnumOSCStatusFilter<"OSC"> | $Enums.OSCStatus
    userId?: StringNullableFilter<"OSC"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    animals?: AnimalListRelationFilter
    adress?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }

  export type OSCOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    OSCType?: SortOrder
    descriptionText?: SortOrderInput | SortOrder
    identification?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    animals?: AnimalOrderByRelationAggregateInput
    adress?: AddressOrderByWithRelationInput
  }

  export type OSCWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    identification?: string
    userId?: string
    AND?: OSCWhereInput | OSCWhereInput[]
    OR?: OSCWhereInput[]
    NOT?: OSCWhereInput | OSCWhereInput[]
    name?: StringFilter<"OSC"> | string
    phone?: StringFilter<"OSC"> | string
    OSCType?: EnumOSCTypeFilter<"OSC"> | $Enums.OSCType
    descriptionText?: StringNullableFilter<"OSC"> | string | null
    status?: EnumOSCStatusFilter<"OSC"> | $Enums.OSCStatus
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    animals?: AnimalListRelationFilter
    adress?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }, "id" | "email" | "identification" | "userId">

  export type OSCOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    OSCType?: SortOrder
    descriptionText?: SortOrderInput | SortOrder
    identification?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: OSCCountOrderByAggregateInput
    _max?: OSCMaxOrderByAggregateInput
    _min?: OSCMinOrderByAggregateInput
  }

  export type OSCScalarWhereWithAggregatesInput = {
    AND?: OSCScalarWhereWithAggregatesInput | OSCScalarWhereWithAggregatesInput[]
    OR?: OSCScalarWhereWithAggregatesInput[]
    NOT?: OSCScalarWhereWithAggregatesInput | OSCScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OSC"> | string
    name?: StringWithAggregatesFilter<"OSC"> | string
    email?: StringWithAggregatesFilter<"OSC"> | string
    phone?: StringWithAggregatesFilter<"OSC"> | string
    OSCType?: EnumOSCTypeWithAggregatesFilter<"OSC"> | $Enums.OSCType
    descriptionText?: StringNullableWithAggregatesFilter<"OSC"> | string | null
    identification?: StringWithAggregatesFilter<"OSC"> | string
    status?: EnumOSCStatusWithAggregatesFilter<"OSC"> | $Enums.OSCStatus
    userId?: StringNullableWithAggregatesFilter<"OSC"> | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    road?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    uf?: StringFilter<"Address"> | string
    CEP?: StringFilter<"Address"> | string
    OSCId?: StringNullableFilter<"Address"> | string | null
    osc?: XOR<OSCNullableScalarRelationFilter, OSCWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    road?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    uf?: SortOrder
    CEP?: SortOrder
    OSCId?: SortOrderInput | SortOrder
    osc?: OSCOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    OSCId?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    road?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    uf?: StringFilter<"Address"> | string
    CEP?: StringFilter<"Address"> | string
    osc?: XOR<OSCNullableScalarRelationFilter, OSCWhereInput> | null
  }, "id" | "OSCId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    road?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    uf?: SortOrder
    CEP?: SortOrder
    OSCId?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    road?: StringWithAggregatesFilter<"Address"> | string
    number?: StringWithAggregatesFilter<"Address"> | string
    district?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    uf?: StringWithAggregatesFilter<"Address"> | string
    CEP?: StringWithAggregatesFilter<"Address"> | string
    OSCId?: StringNullableWithAggregatesFilter<"Address"> | string | null
  }

  export type AnimalWhereInput = {
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    id?: StringFilter<"Animal"> | string
    name?: StringFilter<"Animal"> | string
    description?: StringFilter<"Animal"> | string
    birthDate?: DateTimeFilter<"Animal"> | Date | string
    weight?: FloatFilter<"Animal"> | number
    specie?: StringFilter<"Animal"> | string
    breed?: StringFilter<"Animal"> | string
    characteristics?: StringFilter<"Animal"> | string
    imageUrl?: StringNullableFilter<"Animal"> | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFilter<"Animal"> | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFilter<"Animal"> | $Enums.AnimalSize
    gender?: EnumGenderFilter<"Animal"> | $Enums.Gender
    oscId?: StringFilter<"Animal"> | string
    osc?: XOR<OSCScalarRelationFilter, OSCWhereInput>
    adoption?: XOR<AdoptionNullableScalarRelationFilter, AdoptionWhereInput> | null
  }

  export type AnimalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    birthDate?: SortOrder
    weight?: SortOrder
    specie?: SortOrder
    breed?: SortOrder
    characteristics?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    adoptionStatus?: SortOrder
    size?: SortOrder
    gender?: SortOrder
    oscId?: SortOrder
    osc?: OSCOrderByWithRelationInput
    adoption?: AdoptionOrderByWithRelationInput
  }

  export type AnimalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    name?: StringFilter<"Animal"> | string
    description?: StringFilter<"Animal"> | string
    birthDate?: DateTimeFilter<"Animal"> | Date | string
    weight?: FloatFilter<"Animal"> | number
    specie?: StringFilter<"Animal"> | string
    breed?: StringFilter<"Animal"> | string
    characteristics?: StringFilter<"Animal"> | string
    imageUrl?: StringNullableFilter<"Animal"> | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFilter<"Animal"> | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFilter<"Animal"> | $Enums.AnimalSize
    gender?: EnumGenderFilter<"Animal"> | $Enums.Gender
    oscId?: StringFilter<"Animal"> | string
    osc?: XOR<OSCScalarRelationFilter, OSCWhereInput>
    adoption?: XOR<AdoptionNullableScalarRelationFilter, AdoptionWhereInput> | null
  }, "id">

  export type AnimalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    birthDate?: SortOrder
    weight?: SortOrder
    specie?: SortOrder
    breed?: SortOrder
    characteristics?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    adoptionStatus?: SortOrder
    size?: SortOrder
    gender?: SortOrder
    oscId?: SortOrder
    _count?: AnimalCountOrderByAggregateInput
    _avg?: AnimalAvgOrderByAggregateInput
    _max?: AnimalMaxOrderByAggregateInput
    _min?: AnimalMinOrderByAggregateInput
    _sum?: AnimalSumOrderByAggregateInput
  }

  export type AnimalScalarWhereWithAggregatesInput = {
    AND?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    OR?: AnimalScalarWhereWithAggregatesInput[]
    NOT?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Animal"> | string
    name?: StringWithAggregatesFilter<"Animal"> | string
    description?: StringWithAggregatesFilter<"Animal"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
    weight?: FloatWithAggregatesFilter<"Animal"> | number
    specie?: StringWithAggregatesFilter<"Animal"> | string
    breed?: StringWithAggregatesFilter<"Animal"> | string
    characteristics?: StringWithAggregatesFilter<"Animal"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusWithAggregatesFilter<"Animal"> | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeWithAggregatesFilter<"Animal"> | $Enums.AnimalSize
    gender?: EnumGenderWithAggregatesFilter<"Animal"> | $Enums.Gender
    oscId?: StringWithAggregatesFilter<"Animal"> | string
  }

  export type AdoptionWhereInput = {
    AND?: AdoptionWhereInput | AdoptionWhereInput[]
    OR?: AdoptionWhereInput[]
    NOT?: AdoptionWhereInput | AdoptionWhereInput[]
    id?: StringFilter<"Adoption"> | string
    adoptionDate?: DateTimeFilter<"Adoption"> | Date | string
    adopterName?: StringFilter<"Adoption"> | string
    adopterEmail?: StringNullableFilter<"Adoption"> | string | null
    adopterPhone?: StringFilter<"Adoption"> | string
    adopterCPF?: StringFilter<"Adoption"> | string
    animalId?: StringFilter<"Adoption"> | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }

  export type AdoptionOrderByWithRelationInput = {
    id?: SortOrder
    adoptionDate?: SortOrder
    adopterName?: SortOrder
    adopterEmail?: SortOrderInput | SortOrder
    adopterPhone?: SortOrder
    adopterCPF?: SortOrder
    animalId?: SortOrder
    animal?: AnimalOrderByWithRelationInput
  }

  export type AdoptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    animalId?: string
    AND?: AdoptionWhereInput | AdoptionWhereInput[]
    OR?: AdoptionWhereInput[]
    NOT?: AdoptionWhereInput | AdoptionWhereInput[]
    adoptionDate?: DateTimeFilter<"Adoption"> | Date | string
    adopterName?: StringFilter<"Adoption"> | string
    adopterEmail?: StringNullableFilter<"Adoption"> | string | null
    adopterPhone?: StringFilter<"Adoption"> | string
    adopterCPF?: StringFilter<"Adoption"> | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
  }, "id" | "animalId">

  export type AdoptionOrderByWithAggregationInput = {
    id?: SortOrder
    adoptionDate?: SortOrder
    adopterName?: SortOrder
    adopterEmail?: SortOrderInput | SortOrder
    adopterPhone?: SortOrder
    adopterCPF?: SortOrder
    animalId?: SortOrder
    _count?: AdoptionCountOrderByAggregateInput
    _max?: AdoptionMaxOrderByAggregateInput
    _min?: AdoptionMinOrderByAggregateInput
  }

  export type AdoptionScalarWhereWithAggregatesInput = {
    AND?: AdoptionScalarWhereWithAggregatesInput | AdoptionScalarWhereWithAggregatesInput[]
    OR?: AdoptionScalarWhereWithAggregatesInput[]
    NOT?: AdoptionScalarWhereWithAggregatesInput | AdoptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Adoption"> | string
    adoptionDate?: DateTimeWithAggregatesFilter<"Adoption"> | Date | string
    adopterName?: StringWithAggregatesFilter<"Adoption"> | string
    adopterEmail?: StringNullableWithAggregatesFilter<"Adoption"> | string | null
    adopterPhone?: StringWithAggregatesFilter<"Adoption"> | string
    adopterCPF?: StringWithAggregatesFilter<"Adoption"> | string
    animalId?: StringWithAggregatesFilter<"Adoption"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    email: string
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    oscId?: string | null
    osc?: OSCCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    email: string
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    oscId?: string | null
    osc?: OSCUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    oscId?: NullableStringFieldUpdateOperationsInput | string | null
    osc?: OSCUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    oscId?: NullableStringFieldUpdateOperationsInput | string | null
    osc?: OSCUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password: string
    email: string
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    oscId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    oscId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    oscId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OSCCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    OSCType: $Enums.OSCType
    descriptionText?: string | null
    identification: string
    status?: $Enums.OSCStatus
    user?: UserCreateNestedOneWithoutOscInput
    animals?: AnimalCreateNestedManyWithoutOscInput
    adress?: AddressCreateNestedOneWithoutOscInput
  }

  export type OSCUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    OSCType: $Enums.OSCType
    descriptionText?: string | null
    identification: string
    status?: $Enums.OSCStatus
    userId?: string | null
    animals?: AnimalUncheckedCreateNestedManyWithoutOscInput
    adress?: AddressUncheckedCreateNestedOneWithoutOscInput
  }

  export type OSCUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OSCType?: EnumOSCTypeFieldUpdateOperationsInput | $Enums.OSCType
    descriptionText?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    status?: EnumOSCStatusFieldUpdateOperationsInput | $Enums.OSCStatus
    user?: UserUpdateOneWithoutOscNestedInput
    animals?: AnimalUpdateManyWithoutOscNestedInput
    adress?: AddressUpdateOneWithoutOscNestedInput
  }

  export type OSCUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OSCType?: EnumOSCTypeFieldUpdateOperationsInput | $Enums.OSCType
    descriptionText?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    status?: EnumOSCStatusFieldUpdateOperationsInput | $Enums.OSCStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    animals?: AnimalUncheckedUpdateManyWithoutOscNestedInput
    adress?: AddressUncheckedUpdateOneWithoutOscNestedInput
  }

  export type OSCCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    OSCType: $Enums.OSCType
    descriptionText?: string | null
    identification: string
    status?: $Enums.OSCStatus
    userId?: string | null
  }

  export type OSCUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OSCType?: EnumOSCTypeFieldUpdateOperationsInput | $Enums.OSCType
    descriptionText?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    status?: EnumOSCStatusFieldUpdateOperationsInput | $Enums.OSCStatus
  }

  export type OSCUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OSCType?: EnumOSCTypeFieldUpdateOperationsInput | $Enums.OSCType
    descriptionText?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    status?: EnumOSCStatusFieldUpdateOperationsInput | $Enums.OSCStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateInput = {
    id?: string
    road: string
    number: string
    district: string
    city: string
    uf: string
    CEP: string
    osc?: OSCCreateNestedOneWithoutAdressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    road: string
    number: string
    district: string
    city: string
    uf: string
    CEP: string
    OSCId?: string | null
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    road?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    osc?: OSCUpdateOneWithoutAdressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    road?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    OSCId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateManyInput = {
    id?: string
    road: string
    number: string
    district: string
    city: string
    uf: string
    CEP: string
    OSCId?: string | null
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    road?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    road?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    OSCId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnimalCreateInput = {
    id?: string
    name: string
    description: string
    birthDate: Date | string
    weight: number
    specie: string
    breed: string
    characteristics: string
    imageUrl?: string | null
    adoptionStatus?: $Enums.AnimalAdoptionStatus
    size: $Enums.AnimalSize
    gender?: $Enums.Gender
    osc: OSCCreateNestedOneWithoutAnimalsInput
    adoption?: AdoptionCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    birthDate: Date | string
    weight: number
    specie: string
    breed: string
    characteristics: string
    imageUrl?: string | null
    adoptionStatus?: $Enums.AnimalAdoptionStatus
    size: $Enums.AnimalSize
    gender?: $Enums.Gender
    oscId: string
    adoption?: AdoptionUncheckedCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    specie?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    characteristics?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFieldUpdateOperationsInput | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFieldUpdateOperationsInput | $Enums.AnimalSize
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    osc?: OSCUpdateOneRequiredWithoutAnimalsNestedInput
    adoption?: AdoptionUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    specie?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    characteristics?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFieldUpdateOperationsInput | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFieldUpdateOperationsInput | $Enums.AnimalSize
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    oscId?: StringFieldUpdateOperationsInput | string
    adoption?: AdoptionUncheckedUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalCreateManyInput = {
    id?: string
    name: string
    description: string
    birthDate: Date | string
    weight: number
    specie: string
    breed: string
    characteristics: string
    imageUrl?: string | null
    adoptionStatus?: $Enums.AnimalAdoptionStatus
    size: $Enums.AnimalSize
    gender?: $Enums.Gender
    oscId: string
  }

  export type AnimalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    specie?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    characteristics?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFieldUpdateOperationsInput | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFieldUpdateOperationsInput | $Enums.AnimalSize
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
  }

  export type AnimalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    specie?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    characteristics?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFieldUpdateOperationsInput | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFieldUpdateOperationsInput | $Enums.AnimalSize
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    oscId?: StringFieldUpdateOperationsInput | string
  }

  export type AdoptionCreateInput = {
    id?: string
    adoptionDate?: Date | string
    adopterName: string
    adopterEmail?: string | null
    adopterPhone: string
    adopterCPF: string
    animal: AnimalCreateNestedOneWithoutAdoptionInput
  }

  export type AdoptionUncheckedCreateInput = {
    id?: string
    adoptionDate?: Date | string
    adopterName: string
    adopterEmail?: string | null
    adopterPhone: string
    adopterCPF: string
    animalId: string
  }

  export type AdoptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adoptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    adopterName?: StringFieldUpdateOperationsInput | string
    adopterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    adopterPhone?: StringFieldUpdateOperationsInput | string
    adopterCPF?: StringFieldUpdateOperationsInput | string
    animal?: AnimalUpdateOneRequiredWithoutAdoptionNestedInput
  }

  export type AdoptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adoptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    adopterName?: StringFieldUpdateOperationsInput | string
    adopterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    adopterPhone?: StringFieldUpdateOperationsInput | string
    adopterCPF?: StringFieldUpdateOperationsInput | string
    animalId?: StringFieldUpdateOperationsInput | string
  }

  export type AdoptionCreateManyInput = {
    id?: string
    adoptionDate?: Date | string
    adopterName: string
    adopterEmail?: string | null
    adopterPhone: string
    adopterCPF: string
    animalId: string
  }

  export type AdoptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adoptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    adopterName?: StringFieldUpdateOperationsInput | string
    adopterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    adopterPhone?: StringFieldUpdateOperationsInput | string
    adopterCPF?: StringFieldUpdateOperationsInput | string
  }

  export type AdoptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adoptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    adopterName?: StringFieldUpdateOperationsInput | string
    adopterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    adopterPhone?: StringFieldUpdateOperationsInput | string
    adopterCPF?: StringFieldUpdateOperationsInput | string
    animalId?: StringFieldUpdateOperationsInput | string
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

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type OSCNullableScalarRelationFilter = {
    is?: OSCWhereInput | null
    isNot?: OSCWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    status?: SortOrder
    role?: SortOrder
    oscId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    status?: SortOrder
    role?: SortOrder
    oscId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    status?: SortOrder
    role?: SortOrder
    oscId?: SortOrder
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

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type EnumOSCTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OSCType | EnumOSCTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OSCType[] | ListEnumOSCTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OSCType[] | ListEnumOSCTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOSCTypeFilter<$PrismaModel> | $Enums.OSCType
  }

  export type EnumOSCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OSCStatus | EnumOSCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OSCStatus[] | ListEnumOSCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OSCStatus[] | ListEnumOSCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOSCStatusFilter<$PrismaModel> | $Enums.OSCStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AnimalListRelationFilter = {
    every?: AnimalWhereInput
    some?: AnimalWhereInput
    none?: AnimalWhereInput
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type AnimalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OSCCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    OSCType?: SortOrder
    descriptionText?: SortOrder
    identification?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type OSCMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    OSCType?: SortOrder
    descriptionText?: SortOrder
    identification?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type OSCMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    OSCType?: SortOrder
    descriptionText?: SortOrder
    identification?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type EnumOSCTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OSCType | EnumOSCTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OSCType[] | ListEnumOSCTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OSCType[] | ListEnumOSCTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOSCTypeWithAggregatesFilter<$PrismaModel> | $Enums.OSCType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOSCTypeFilter<$PrismaModel>
    _max?: NestedEnumOSCTypeFilter<$PrismaModel>
  }

  export type EnumOSCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OSCStatus | EnumOSCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OSCStatus[] | ListEnumOSCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OSCStatus[] | ListEnumOSCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOSCStatusWithAggregatesFilter<$PrismaModel> | $Enums.OSCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOSCStatusFilter<$PrismaModel>
    _max?: NestedEnumOSCStatusFilter<$PrismaModel>
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    road?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    uf?: SortOrder
    CEP?: SortOrder
    OSCId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    road?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    uf?: SortOrder
    CEP?: SortOrder
    OSCId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    road?: SortOrder
    number?: SortOrder
    district?: SortOrder
    city?: SortOrder
    uf?: SortOrder
    CEP?: SortOrder
    OSCId?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumAnimalAdoptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalAdoptionStatus | EnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalAdoptionStatus[] | ListEnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalAdoptionStatus[] | ListEnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalAdoptionStatusFilter<$PrismaModel> | $Enums.AnimalAdoptionStatus
  }

  export type EnumAnimalSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSize | EnumAnimalSizeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSize[] | ListEnumAnimalSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalSize[] | ListEnumAnimalSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalSizeFilter<$PrismaModel> | $Enums.AnimalSize
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type OSCScalarRelationFilter = {
    is?: OSCWhereInput
    isNot?: OSCWhereInput
  }

  export type AdoptionNullableScalarRelationFilter = {
    is?: AdoptionWhereInput | null
    isNot?: AdoptionWhereInput | null
  }

  export type AnimalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    birthDate?: SortOrder
    weight?: SortOrder
    specie?: SortOrder
    breed?: SortOrder
    characteristics?: SortOrder
    imageUrl?: SortOrder
    adoptionStatus?: SortOrder
    size?: SortOrder
    gender?: SortOrder
    oscId?: SortOrder
  }

  export type AnimalAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type AnimalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    birthDate?: SortOrder
    weight?: SortOrder
    specie?: SortOrder
    breed?: SortOrder
    characteristics?: SortOrder
    imageUrl?: SortOrder
    adoptionStatus?: SortOrder
    size?: SortOrder
    gender?: SortOrder
    oscId?: SortOrder
  }

  export type AnimalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    birthDate?: SortOrder
    weight?: SortOrder
    specie?: SortOrder
    breed?: SortOrder
    characteristics?: SortOrder
    imageUrl?: SortOrder
    adoptionStatus?: SortOrder
    size?: SortOrder
    gender?: SortOrder
    oscId?: SortOrder
  }

  export type AnimalSumOrderByAggregateInput = {
    weight?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumAnimalAdoptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalAdoptionStatus | EnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalAdoptionStatus[] | ListEnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalAdoptionStatus[] | ListEnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalAdoptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnimalAdoptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalAdoptionStatusFilter<$PrismaModel>
    _max?: NestedEnumAnimalAdoptionStatusFilter<$PrismaModel>
  }

  export type EnumAnimalSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSize | EnumAnimalSizeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSize[] | ListEnumAnimalSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalSize[] | ListEnumAnimalSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalSizeWithAggregatesFilter<$PrismaModel> | $Enums.AnimalSize
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalSizeFilter<$PrismaModel>
    _max?: NestedEnumAnimalSizeFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type AnimalScalarRelationFilter = {
    is?: AnimalWhereInput
    isNot?: AnimalWhereInput
  }

  export type AdoptionCountOrderByAggregateInput = {
    id?: SortOrder
    adoptionDate?: SortOrder
    adopterName?: SortOrder
    adopterEmail?: SortOrder
    adopterPhone?: SortOrder
    adopterCPF?: SortOrder
    animalId?: SortOrder
  }

  export type AdoptionMaxOrderByAggregateInput = {
    id?: SortOrder
    adoptionDate?: SortOrder
    adopterName?: SortOrder
    adopterEmail?: SortOrder
    adopterPhone?: SortOrder
    adopterCPF?: SortOrder
    animalId?: SortOrder
  }

  export type AdoptionMinOrderByAggregateInput = {
    id?: SortOrder
    adoptionDate?: SortOrder
    adopterName?: SortOrder
    adopterEmail?: SortOrder
    adopterPhone?: SortOrder
    adopterCPF?: SortOrder
    animalId?: SortOrder
  }

  export type OSCCreateNestedOneWithoutUserInput = {
    create?: XOR<OSCCreateWithoutUserInput, OSCUncheckedCreateWithoutUserInput>
    connectOrCreate?: OSCCreateOrConnectWithoutUserInput
    connect?: OSCWhereUniqueInput
  }

  export type OSCUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OSCCreateWithoutUserInput, OSCUncheckedCreateWithoutUserInput>
    connectOrCreate?: OSCCreateOrConnectWithoutUserInput
    connect?: OSCWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OSCUpdateOneWithoutUserNestedInput = {
    create?: XOR<OSCCreateWithoutUserInput, OSCUncheckedCreateWithoutUserInput>
    connectOrCreate?: OSCCreateOrConnectWithoutUserInput
    upsert?: OSCUpsertWithoutUserInput
    disconnect?: OSCWhereInput | boolean
    delete?: OSCWhereInput | boolean
    connect?: OSCWhereUniqueInput
    update?: XOR<XOR<OSCUpdateToOneWithWhereWithoutUserInput, OSCUpdateWithoutUserInput>, OSCUncheckedUpdateWithoutUserInput>
  }

  export type OSCUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OSCCreateWithoutUserInput, OSCUncheckedCreateWithoutUserInput>
    connectOrCreate?: OSCCreateOrConnectWithoutUserInput
    upsert?: OSCUpsertWithoutUserInput
    disconnect?: OSCWhereInput | boolean
    delete?: OSCWhereInput | boolean
    connect?: OSCWhereUniqueInput
    update?: XOR<XOR<OSCUpdateToOneWithWhereWithoutUserInput, OSCUpdateWithoutUserInput>, OSCUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutOscInput = {
    create?: XOR<UserCreateWithoutOscInput, UserUncheckedCreateWithoutOscInput>
    connectOrCreate?: UserCreateOrConnectWithoutOscInput
    connect?: UserWhereUniqueInput
  }

  export type AnimalCreateNestedManyWithoutOscInput = {
    create?: XOR<AnimalCreateWithoutOscInput, AnimalUncheckedCreateWithoutOscInput> | AnimalCreateWithoutOscInput[] | AnimalUncheckedCreateWithoutOscInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOscInput | AnimalCreateOrConnectWithoutOscInput[]
    createMany?: AnimalCreateManyOscInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type AddressCreateNestedOneWithoutOscInput = {
    create?: XOR<AddressCreateWithoutOscInput, AddressUncheckedCreateWithoutOscInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOscInput
    connect?: AddressWhereUniqueInput
  }

  export type AnimalUncheckedCreateNestedManyWithoutOscInput = {
    create?: XOR<AnimalCreateWithoutOscInput, AnimalUncheckedCreateWithoutOscInput> | AnimalCreateWithoutOscInput[] | AnimalUncheckedCreateWithoutOscInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOscInput | AnimalCreateOrConnectWithoutOscInput[]
    createMany?: AnimalCreateManyOscInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutOscInput = {
    create?: XOR<AddressCreateWithoutOscInput, AddressUncheckedCreateWithoutOscInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOscInput
    connect?: AddressWhereUniqueInput
  }

  export type EnumOSCTypeFieldUpdateOperationsInput = {
    set?: $Enums.OSCType
  }

  export type EnumOSCStatusFieldUpdateOperationsInput = {
    set?: $Enums.OSCStatus
  }

  export type UserUpdateOneWithoutOscNestedInput = {
    create?: XOR<UserCreateWithoutOscInput, UserUncheckedCreateWithoutOscInput>
    connectOrCreate?: UserCreateOrConnectWithoutOscInput
    upsert?: UserUpsertWithoutOscInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOscInput, UserUpdateWithoutOscInput>, UserUncheckedUpdateWithoutOscInput>
  }

  export type AnimalUpdateManyWithoutOscNestedInput = {
    create?: XOR<AnimalCreateWithoutOscInput, AnimalUncheckedCreateWithoutOscInput> | AnimalCreateWithoutOscInput[] | AnimalUncheckedCreateWithoutOscInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOscInput | AnimalCreateOrConnectWithoutOscInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutOscInput | AnimalUpsertWithWhereUniqueWithoutOscInput[]
    createMany?: AnimalCreateManyOscInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutOscInput | AnimalUpdateWithWhereUniqueWithoutOscInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutOscInput | AnimalUpdateManyWithWhereWithoutOscInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type AddressUpdateOneWithoutOscNestedInput = {
    create?: XOR<AddressCreateWithoutOscInput, AddressUncheckedCreateWithoutOscInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOscInput
    upsert?: AddressUpsertWithoutOscInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOscInput, AddressUpdateWithoutOscInput>, AddressUncheckedUpdateWithoutOscInput>
  }

  export type AnimalUncheckedUpdateManyWithoutOscNestedInput = {
    create?: XOR<AnimalCreateWithoutOscInput, AnimalUncheckedCreateWithoutOscInput> | AnimalCreateWithoutOscInput[] | AnimalUncheckedCreateWithoutOscInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOscInput | AnimalCreateOrConnectWithoutOscInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutOscInput | AnimalUpsertWithWhereUniqueWithoutOscInput[]
    createMany?: AnimalCreateManyOscInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutOscInput | AnimalUpdateWithWhereUniqueWithoutOscInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutOscInput | AnimalUpdateManyWithWhereWithoutOscInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutOscNestedInput = {
    create?: XOR<AddressCreateWithoutOscInput, AddressUncheckedCreateWithoutOscInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOscInput
    upsert?: AddressUpsertWithoutOscInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOscInput, AddressUpdateWithoutOscInput>, AddressUncheckedUpdateWithoutOscInput>
  }

  export type OSCCreateNestedOneWithoutAdressInput = {
    create?: XOR<OSCCreateWithoutAdressInput, OSCUncheckedCreateWithoutAdressInput>
    connectOrCreate?: OSCCreateOrConnectWithoutAdressInput
    connect?: OSCWhereUniqueInput
  }

  export type OSCUpdateOneWithoutAdressNestedInput = {
    create?: XOR<OSCCreateWithoutAdressInput, OSCUncheckedCreateWithoutAdressInput>
    connectOrCreate?: OSCCreateOrConnectWithoutAdressInput
    upsert?: OSCUpsertWithoutAdressInput
    disconnect?: OSCWhereInput | boolean
    delete?: OSCWhereInput | boolean
    connect?: OSCWhereUniqueInput
    update?: XOR<XOR<OSCUpdateToOneWithWhereWithoutAdressInput, OSCUpdateWithoutAdressInput>, OSCUncheckedUpdateWithoutAdressInput>
  }

  export type OSCCreateNestedOneWithoutAnimalsInput = {
    create?: XOR<OSCCreateWithoutAnimalsInput, OSCUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: OSCCreateOrConnectWithoutAnimalsInput
    connect?: OSCWhereUniqueInput
  }

  export type AdoptionCreateNestedOneWithoutAnimalInput = {
    create?: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: AdoptionCreateOrConnectWithoutAnimalInput
    connect?: AdoptionWhereUniqueInput
  }

  export type AdoptionUncheckedCreateNestedOneWithoutAnimalInput = {
    create?: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: AdoptionCreateOrConnectWithoutAnimalInput
    connect?: AdoptionWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAnimalAdoptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnimalAdoptionStatus
  }

  export type EnumAnimalSizeFieldUpdateOperationsInput = {
    set?: $Enums.AnimalSize
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type OSCUpdateOneRequiredWithoutAnimalsNestedInput = {
    create?: XOR<OSCCreateWithoutAnimalsInput, OSCUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: OSCCreateOrConnectWithoutAnimalsInput
    upsert?: OSCUpsertWithoutAnimalsInput
    connect?: OSCWhereUniqueInput
    update?: XOR<XOR<OSCUpdateToOneWithWhereWithoutAnimalsInput, OSCUpdateWithoutAnimalsInput>, OSCUncheckedUpdateWithoutAnimalsInput>
  }

  export type AdoptionUpdateOneWithoutAnimalNestedInput = {
    create?: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: AdoptionCreateOrConnectWithoutAnimalInput
    upsert?: AdoptionUpsertWithoutAnimalInput
    disconnect?: AdoptionWhereInput | boolean
    delete?: AdoptionWhereInput | boolean
    connect?: AdoptionWhereUniqueInput
    update?: XOR<XOR<AdoptionUpdateToOneWithWhereWithoutAnimalInput, AdoptionUpdateWithoutAnimalInput>, AdoptionUncheckedUpdateWithoutAnimalInput>
  }

  export type AdoptionUncheckedUpdateOneWithoutAnimalNestedInput = {
    create?: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: AdoptionCreateOrConnectWithoutAnimalInput
    upsert?: AdoptionUpsertWithoutAnimalInput
    disconnect?: AdoptionWhereInput | boolean
    delete?: AdoptionWhereInput | boolean
    connect?: AdoptionWhereUniqueInput
    update?: XOR<XOR<AdoptionUpdateToOneWithWhereWithoutAnimalInput, AdoptionUpdateWithoutAnimalInput>, AdoptionUncheckedUpdateWithoutAnimalInput>
  }

  export type AnimalCreateNestedOneWithoutAdoptionInput = {
    create?: XOR<AnimalCreateWithoutAdoptionInput, AnimalUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutAdoptionInput
    connect?: AnimalWhereUniqueInput
  }

  export type AnimalUpdateOneRequiredWithoutAdoptionNestedInput = {
    create?: XOR<AnimalCreateWithoutAdoptionInput, AnimalUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutAdoptionInput
    upsert?: AnimalUpsertWithoutAdoptionInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutAdoptionInput, AnimalUpdateWithoutAdoptionInput>, AnimalUncheckedUpdateWithoutAdoptionInput>
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

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type NestedEnumOSCTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OSCType | EnumOSCTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OSCType[] | ListEnumOSCTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OSCType[] | ListEnumOSCTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOSCTypeFilter<$PrismaModel> | $Enums.OSCType
  }

  export type NestedEnumOSCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OSCStatus | EnumOSCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OSCStatus[] | ListEnumOSCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OSCStatus[] | ListEnumOSCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOSCStatusFilter<$PrismaModel> | $Enums.OSCStatus
  }

  export type NestedEnumOSCTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OSCType | EnumOSCTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OSCType[] | ListEnumOSCTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OSCType[] | ListEnumOSCTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOSCTypeWithAggregatesFilter<$PrismaModel> | $Enums.OSCType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOSCTypeFilter<$PrismaModel>
    _max?: NestedEnumOSCTypeFilter<$PrismaModel>
  }

  export type NestedEnumOSCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OSCStatus | EnumOSCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OSCStatus[] | ListEnumOSCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OSCStatus[] | ListEnumOSCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOSCStatusWithAggregatesFilter<$PrismaModel> | $Enums.OSCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOSCStatusFilter<$PrismaModel>
    _max?: NestedEnumOSCStatusFilter<$PrismaModel>
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

  export type NestedEnumAnimalAdoptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalAdoptionStatus | EnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalAdoptionStatus[] | ListEnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalAdoptionStatus[] | ListEnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalAdoptionStatusFilter<$PrismaModel> | $Enums.AnimalAdoptionStatus
  }

  export type NestedEnumAnimalSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSize | EnumAnimalSizeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSize[] | ListEnumAnimalSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalSize[] | ListEnumAnimalSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalSizeFilter<$PrismaModel> | $Enums.AnimalSize
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumAnimalAdoptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalAdoptionStatus | EnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalAdoptionStatus[] | ListEnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalAdoptionStatus[] | ListEnumAnimalAdoptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalAdoptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnimalAdoptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalAdoptionStatusFilter<$PrismaModel>
    _max?: NestedEnumAnimalAdoptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumAnimalSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimalSize | EnumAnimalSizeFieldRefInput<$PrismaModel>
    in?: $Enums.AnimalSize[] | ListEnumAnimalSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimalSize[] | ListEnumAnimalSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimalSizeWithAggregatesFilter<$PrismaModel> | $Enums.AnimalSize
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimalSizeFilter<$PrismaModel>
    _max?: NestedEnumAnimalSizeFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type OSCCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    phone: string
    OSCType: $Enums.OSCType
    descriptionText?: string | null
    identification: string
    status?: $Enums.OSCStatus
    animals?: AnimalCreateNestedManyWithoutOscInput
    adress?: AddressCreateNestedOneWithoutOscInput
  }

  export type OSCUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    phone: string
    OSCType: $Enums.OSCType
    descriptionText?: string | null
    identification: string
    status?: $Enums.OSCStatus
    animals?: AnimalUncheckedCreateNestedManyWithoutOscInput
    adress?: AddressUncheckedCreateNestedOneWithoutOscInput
  }

  export type OSCCreateOrConnectWithoutUserInput = {
    where: OSCWhereUniqueInput
    create: XOR<OSCCreateWithoutUserInput, OSCUncheckedCreateWithoutUserInput>
  }

  export type OSCUpsertWithoutUserInput = {
    update: XOR<OSCUpdateWithoutUserInput, OSCUncheckedUpdateWithoutUserInput>
    create: XOR<OSCCreateWithoutUserInput, OSCUncheckedCreateWithoutUserInput>
    where?: OSCWhereInput
  }

  export type OSCUpdateToOneWithWhereWithoutUserInput = {
    where?: OSCWhereInput
    data: XOR<OSCUpdateWithoutUserInput, OSCUncheckedUpdateWithoutUserInput>
  }

  export type OSCUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OSCType?: EnumOSCTypeFieldUpdateOperationsInput | $Enums.OSCType
    descriptionText?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    status?: EnumOSCStatusFieldUpdateOperationsInput | $Enums.OSCStatus
    animals?: AnimalUpdateManyWithoutOscNestedInput
    adress?: AddressUpdateOneWithoutOscNestedInput
  }

  export type OSCUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OSCType?: EnumOSCTypeFieldUpdateOperationsInput | $Enums.OSCType
    descriptionText?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    status?: EnumOSCStatusFieldUpdateOperationsInput | $Enums.OSCStatus
    animals?: AnimalUncheckedUpdateManyWithoutOscNestedInput
    adress?: AddressUncheckedUpdateOneWithoutOscNestedInput
  }

  export type UserCreateWithoutOscInput = {
    id?: string
    name: string
    password: string
    email: string
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    oscId?: string | null
  }

  export type UserUncheckedCreateWithoutOscInput = {
    id?: string
    name: string
    password: string
    email: string
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    oscId?: string | null
  }

  export type UserCreateOrConnectWithoutOscInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOscInput, UserUncheckedCreateWithoutOscInput>
  }

  export type AnimalCreateWithoutOscInput = {
    id?: string
    name: string
    description: string
    birthDate: Date | string
    weight: number
    specie: string
    breed: string
    characteristics: string
    imageUrl?: string | null
    adoptionStatus?: $Enums.AnimalAdoptionStatus
    size: $Enums.AnimalSize
    gender?: $Enums.Gender
    adoption?: AdoptionCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutOscInput = {
    id?: string
    name: string
    description: string
    birthDate: Date | string
    weight: number
    specie: string
    breed: string
    characteristics: string
    imageUrl?: string | null
    adoptionStatus?: $Enums.AnimalAdoptionStatus
    size: $Enums.AnimalSize
    gender?: $Enums.Gender
    adoption?: AdoptionUncheckedCreateNestedOneWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutOscInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutOscInput, AnimalUncheckedCreateWithoutOscInput>
  }

  export type AnimalCreateManyOscInputEnvelope = {
    data: AnimalCreateManyOscInput | AnimalCreateManyOscInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutOscInput = {
    id?: string
    road: string
    number: string
    district: string
    city: string
    uf: string
    CEP: string
  }

  export type AddressUncheckedCreateWithoutOscInput = {
    id?: string
    road: string
    number: string
    district: string
    city: string
    uf: string
    CEP: string
  }

  export type AddressCreateOrConnectWithoutOscInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutOscInput, AddressUncheckedCreateWithoutOscInput>
  }

  export type UserUpsertWithoutOscInput = {
    update: XOR<UserUpdateWithoutOscInput, UserUncheckedUpdateWithoutOscInput>
    create: XOR<UserCreateWithoutOscInput, UserUncheckedCreateWithoutOscInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOscInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOscInput, UserUncheckedUpdateWithoutOscInput>
  }

  export type UserUpdateWithoutOscInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    oscId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutOscInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    oscId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnimalUpsertWithWhereUniqueWithoutOscInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutOscInput, AnimalUncheckedUpdateWithoutOscInput>
    create: XOR<AnimalCreateWithoutOscInput, AnimalUncheckedCreateWithoutOscInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutOscInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutOscInput, AnimalUncheckedUpdateWithoutOscInput>
  }

  export type AnimalUpdateManyWithWhereWithoutOscInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutOscInput>
  }

  export type AnimalScalarWhereInput = {
    AND?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    OR?: AnimalScalarWhereInput[]
    NOT?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    id?: StringFilter<"Animal"> | string
    name?: StringFilter<"Animal"> | string
    description?: StringFilter<"Animal"> | string
    birthDate?: DateTimeFilter<"Animal"> | Date | string
    weight?: FloatFilter<"Animal"> | number
    specie?: StringFilter<"Animal"> | string
    breed?: StringFilter<"Animal"> | string
    characteristics?: StringFilter<"Animal"> | string
    imageUrl?: StringNullableFilter<"Animal"> | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFilter<"Animal"> | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFilter<"Animal"> | $Enums.AnimalSize
    gender?: EnumGenderFilter<"Animal"> | $Enums.Gender
    oscId?: StringFilter<"Animal"> | string
  }

  export type AddressUpsertWithoutOscInput = {
    update: XOR<AddressUpdateWithoutOscInput, AddressUncheckedUpdateWithoutOscInput>
    create: XOR<AddressCreateWithoutOscInput, AddressUncheckedCreateWithoutOscInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutOscInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutOscInput, AddressUncheckedUpdateWithoutOscInput>
  }

  export type AddressUpdateWithoutOscInput = {
    id?: StringFieldUpdateOperationsInput | string
    road?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutOscInput = {
    id?: StringFieldUpdateOperationsInput | string
    road?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
  }

  export type OSCCreateWithoutAdressInput = {
    id?: string
    name: string
    email: string
    phone: string
    OSCType: $Enums.OSCType
    descriptionText?: string | null
    identification: string
    status?: $Enums.OSCStatus
    user?: UserCreateNestedOneWithoutOscInput
    animals?: AnimalCreateNestedManyWithoutOscInput
  }

  export type OSCUncheckedCreateWithoutAdressInput = {
    id?: string
    name: string
    email: string
    phone: string
    OSCType: $Enums.OSCType
    descriptionText?: string | null
    identification: string
    status?: $Enums.OSCStatus
    userId?: string | null
    animals?: AnimalUncheckedCreateNestedManyWithoutOscInput
  }

  export type OSCCreateOrConnectWithoutAdressInput = {
    where: OSCWhereUniqueInput
    create: XOR<OSCCreateWithoutAdressInput, OSCUncheckedCreateWithoutAdressInput>
  }

  export type OSCUpsertWithoutAdressInput = {
    update: XOR<OSCUpdateWithoutAdressInput, OSCUncheckedUpdateWithoutAdressInput>
    create: XOR<OSCCreateWithoutAdressInput, OSCUncheckedCreateWithoutAdressInput>
    where?: OSCWhereInput
  }

  export type OSCUpdateToOneWithWhereWithoutAdressInput = {
    where?: OSCWhereInput
    data: XOR<OSCUpdateWithoutAdressInput, OSCUncheckedUpdateWithoutAdressInput>
  }

  export type OSCUpdateWithoutAdressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OSCType?: EnumOSCTypeFieldUpdateOperationsInput | $Enums.OSCType
    descriptionText?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    status?: EnumOSCStatusFieldUpdateOperationsInput | $Enums.OSCStatus
    user?: UserUpdateOneWithoutOscNestedInput
    animals?: AnimalUpdateManyWithoutOscNestedInput
  }

  export type OSCUncheckedUpdateWithoutAdressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OSCType?: EnumOSCTypeFieldUpdateOperationsInput | $Enums.OSCType
    descriptionText?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    status?: EnumOSCStatusFieldUpdateOperationsInput | $Enums.OSCStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    animals?: AnimalUncheckedUpdateManyWithoutOscNestedInput
  }

  export type OSCCreateWithoutAnimalsInput = {
    id?: string
    name: string
    email: string
    phone: string
    OSCType: $Enums.OSCType
    descriptionText?: string | null
    identification: string
    status?: $Enums.OSCStatus
    user?: UserCreateNestedOneWithoutOscInput
    adress?: AddressCreateNestedOneWithoutOscInput
  }

  export type OSCUncheckedCreateWithoutAnimalsInput = {
    id?: string
    name: string
    email: string
    phone: string
    OSCType: $Enums.OSCType
    descriptionText?: string | null
    identification: string
    status?: $Enums.OSCStatus
    userId?: string | null
    adress?: AddressUncheckedCreateNestedOneWithoutOscInput
  }

  export type OSCCreateOrConnectWithoutAnimalsInput = {
    where: OSCWhereUniqueInput
    create: XOR<OSCCreateWithoutAnimalsInput, OSCUncheckedCreateWithoutAnimalsInput>
  }

  export type AdoptionCreateWithoutAnimalInput = {
    id?: string
    adoptionDate?: Date | string
    adopterName: string
    adopterEmail?: string | null
    adopterPhone: string
    adopterCPF: string
  }

  export type AdoptionUncheckedCreateWithoutAnimalInput = {
    id?: string
    adoptionDate?: Date | string
    adopterName: string
    adopterEmail?: string | null
    adopterPhone: string
    adopterCPF: string
  }

  export type AdoptionCreateOrConnectWithoutAnimalInput = {
    where: AdoptionWhereUniqueInput
    create: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput>
  }

  export type OSCUpsertWithoutAnimalsInput = {
    update: XOR<OSCUpdateWithoutAnimalsInput, OSCUncheckedUpdateWithoutAnimalsInput>
    create: XOR<OSCCreateWithoutAnimalsInput, OSCUncheckedCreateWithoutAnimalsInput>
    where?: OSCWhereInput
  }

  export type OSCUpdateToOneWithWhereWithoutAnimalsInput = {
    where?: OSCWhereInput
    data: XOR<OSCUpdateWithoutAnimalsInput, OSCUncheckedUpdateWithoutAnimalsInput>
  }

  export type OSCUpdateWithoutAnimalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OSCType?: EnumOSCTypeFieldUpdateOperationsInput | $Enums.OSCType
    descriptionText?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    status?: EnumOSCStatusFieldUpdateOperationsInput | $Enums.OSCStatus
    user?: UserUpdateOneWithoutOscNestedInput
    adress?: AddressUpdateOneWithoutOscNestedInput
  }

  export type OSCUncheckedUpdateWithoutAnimalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    OSCType?: EnumOSCTypeFieldUpdateOperationsInput | $Enums.OSCType
    descriptionText?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    status?: EnumOSCStatusFieldUpdateOperationsInput | $Enums.OSCStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    adress?: AddressUncheckedUpdateOneWithoutOscNestedInput
  }

  export type AdoptionUpsertWithoutAnimalInput = {
    update: XOR<AdoptionUpdateWithoutAnimalInput, AdoptionUncheckedUpdateWithoutAnimalInput>
    create: XOR<AdoptionCreateWithoutAnimalInput, AdoptionUncheckedCreateWithoutAnimalInput>
    where?: AdoptionWhereInput
  }

  export type AdoptionUpdateToOneWithWhereWithoutAnimalInput = {
    where?: AdoptionWhereInput
    data: XOR<AdoptionUpdateWithoutAnimalInput, AdoptionUncheckedUpdateWithoutAnimalInput>
  }

  export type AdoptionUpdateWithoutAnimalInput = {
    id?: StringFieldUpdateOperationsInput | string
    adoptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    adopterName?: StringFieldUpdateOperationsInput | string
    adopterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    adopterPhone?: StringFieldUpdateOperationsInput | string
    adopterCPF?: StringFieldUpdateOperationsInput | string
  }

  export type AdoptionUncheckedUpdateWithoutAnimalInput = {
    id?: StringFieldUpdateOperationsInput | string
    adoptionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    adopterName?: StringFieldUpdateOperationsInput | string
    adopterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    adopterPhone?: StringFieldUpdateOperationsInput | string
    adopterCPF?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalCreateWithoutAdoptionInput = {
    id?: string
    name: string
    description: string
    birthDate: Date | string
    weight: number
    specie: string
    breed: string
    characteristics: string
    imageUrl?: string | null
    adoptionStatus?: $Enums.AnimalAdoptionStatus
    size: $Enums.AnimalSize
    gender?: $Enums.Gender
    osc: OSCCreateNestedOneWithoutAnimalsInput
  }

  export type AnimalUncheckedCreateWithoutAdoptionInput = {
    id?: string
    name: string
    description: string
    birthDate: Date | string
    weight: number
    specie: string
    breed: string
    characteristics: string
    imageUrl?: string | null
    adoptionStatus?: $Enums.AnimalAdoptionStatus
    size: $Enums.AnimalSize
    gender?: $Enums.Gender
    oscId: string
  }

  export type AnimalCreateOrConnectWithoutAdoptionInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutAdoptionInput, AnimalUncheckedCreateWithoutAdoptionInput>
  }

  export type AnimalUpsertWithoutAdoptionInput = {
    update: XOR<AnimalUpdateWithoutAdoptionInput, AnimalUncheckedUpdateWithoutAdoptionInput>
    create: XOR<AnimalCreateWithoutAdoptionInput, AnimalUncheckedCreateWithoutAdoptionInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutAdoptionInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutAdoptionInput, AnimalUncheckedUpdateWithoutAdoptionInput>
  }

  export type AnimalUpdateWithoutAdoptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    specie?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    characteristics?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFieldUpdateOperationsInput | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFieldUpdateOperationsInput | $Enums.AnimalSize
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    osc?: OSCUpdateOneRequiredWithoutAnimalsNestedInput
  }

  export type AnimalUncheckedUpdateWithoutAdoptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    specie?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    characteristics?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFieldUpdateOperationsInput | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFieldUpdateOperationsInput | $Enums.AnimalSize
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    oscId?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalCreateManyOscInput = {
    id?: string
    name: string
    description: string
    birthDate: Date | string
    weight: number
    specie: string
    breed: string
    characteristics: string
    imageUrl?: string | null
    adoptionStatus?: $Enums.AnimalAdoptionStatus
    size: $Enums.AnimalSize
    gender?: $Enums.Gender
  }

  export type AnimalUpdateWithoutOscInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    specie?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    characteristics?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFieldUpdateOperationsInput | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFieldUpdateOperationsInput | $Enums.AnimalSize
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    adoption?: AdoptionUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutOscInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    specie?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    characteristics?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFieldUpdateOperationsInput | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFieldUpdateOperationsInput | $Enums.AnimalSize
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    adoption?: AdoptionUncheckedUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateManyWithoutOscInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    specie?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    characteristics?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    adoptionStatus?: EnumAnimalAdoptionStatusFieldUpdateOperationsInput | $Enums.AnimalAdoptionStatus
    size?: EnumAnimalSizeFieldUpdateOperationsInput | $Enums.AnimalSize
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
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