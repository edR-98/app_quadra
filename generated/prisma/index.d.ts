
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Quadra
 * 
 */
export type Quadra = $Result.DefaultSelection<Prisma.$QuadraPayload>
/**
 * Model Locacao
 * 
 */
export type Locacao = $Result.DefaultSelection<Prisma.$LocacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quadra`: Exposes CRUD operations for the **Quadra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quadras
    * const quadras = await prisma.quadra.findMany()
    * ```
    */
  get quadra(): Prisma.QuadraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locacao`: Exposes CRUD operations for the **Locacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locacaos
    * const locacaos = await prisma.locacao.findMany()
    * ```
    */
  get locacao(): Prisma.LocacaoDelegate<ExtArgs, ClientOptions>;
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
    Usuario: 'Usuario',
    Quadra: 'Quadra',
    Locacao: 'Locacao'
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
      modelProps: "usuario" | "quadra" | "locacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Quadra: {
        payload: Prisma.$QuadraPayload<ExtArgs>
        fields: Prisma.QuadraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuadraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuadraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuadraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuadraPayload>
          }
          findFirst: {
            args: Prisma.QuadraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuadraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuadraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuadraPayload>
          }
          findMany: {
            args: Prisma.QuadraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuadraPayload>[]
          }
          create: {
            args: Prisma.QuadraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuadraPayload>
          }
          createMany: {
            args: Prisma.QuadraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuadraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuadraPayload>
          }
          update: {
            args: Prisma.QuadraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuadraPayload>
          }
          deleteMany: {
            args: Prisma.QuadraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuadraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuadraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuadraPayload>
          }
          aggregate: {
            args: Prisma.QuadraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuadra>
          }
          groupBy: {
            args: Prisma.QuadraGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuadraGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuadraCountArgs<ExtArgs>
            result: $Utils.Optional<QuadraCountAggregateOutputType> | number
          }
        }
      }
      Locacao: {
        payload: Prisma.$LocacaoPayload<ExtArgs>
        fields: Prisma.LocacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          findFirst: {
            args: Prisma.LocacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          findMany: {
            args: Prisma.LocacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>[]
          }
          create: {
            args: Prisma.LocacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          createMany: {
            args: Prisma.LocacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          update: {
            args: Prisma.LocacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          deleteMany: {
            args: Prisma.LocacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocacaoPayload>
          }
          aggregate: {
            args: Prisma.LocacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocacao>
          }
          groupBy: {
            args: Prisma.LocacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocacaoCountArgs<ExtArgs>
            result: $Utils.Optional<LocacaoCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    quadra?: QuadraOmit
    locacao?: LocacaoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    locacao: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacao?: boolean | UsuarioCountOutputTypeCountLocacaoArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLocacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocacaoWhereInput
  }


  /**
   * Count Type QuadraCountOutputType
   */

  export type QuadraCountOutputType = {
    locacao: number
  }

  export type QuadraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacao?: boolean | QuadraCountOutputTypeCountLocacaoArgs
  }

  // Custom InputTypes
  /**
   * QuadraCountOutputType without action
   */
  export type QuadraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuadraCountOutputType
     */
    select?: QuadraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuadraCountOutputType without action
   */
  export type QuadraCountOutputTypeCountLocacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nascimento: Date | null
    email: string | null
    cpf: string | null
    senha: string | null
    criado_em: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nascimento: Date | null
    email: string | null
    cpf: string | null
    senha: string | null
    criado_em: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    nascimento: number
    email: number
    cpf: number
    senha: number
    criado_em: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    email?: true
    cpf?: true
    senha?: true
    criado_em?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    email?: true
    cpf?: true
    senha?: true
    criado_em?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    email?: true
    cpf?: true
    senha?: true
    criado_em?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    nascimento: Date
    email: string
    cpf: string
    senha: string
    criado_em: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    criado_em?: boolean
    locacao?: boolean | Usuario$locacaoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    criado_em?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nascimento" | "email" | "cpf" | "senha" | "criado_em", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacao?: boolean | Usuario$locacaoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      locacao: Prisma.$LocacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nascimento: Date
      email: string
      cpf: string
      senha: string
      criado_em: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locacao<T extends Usuario$locacaoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$locacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly nascimento: FieldRef<"Usuario", 'DateTime'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly criado_em: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.locacao
   */
  export type Usuario$locacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    where?: LocacaoWhereInput
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    cursor?: LocacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocacaoScalarFieldEnum | LocacaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Quadra
   */

  export type AggregateQuadra = {
    _count: QuadraCountAggregateOutputType | null
    _avg: QuadraAvgAggregateOutputType | null
    _sum: QuadraSumAggregateOutputType | null
    _min: QuadraMinAggregateOutputType | null
    _max: QuadraMaxAggregateOutputType | null
  }

  export type QuadraAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type QuadraSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type QuadraMinAggregateOutputType = {
    id: number | null
    nomeLocal: string | null
    tipoQuadra: string | null
    localizacao: string | null
    imagemPrincipal: string | null
    imagemPri: string | null
    imagemSeg: string | null
    imagemTer: string | null
    telefone: string | null
    disponibilidade: string | null
    preco: number | null
    dimensoes: string | null
    iluminacao: boolean | null
    vestiarios: boolean | null
    bebedouro: boolean | null
    estacionamento: boolean | null
    arquibancada: boolean | null
    coberta: boolean | null
    acessibilidade: boolean | null
    wifi: boolean | null
    criado_em: Date | null
  }

  export type QuadraMaxAggregateOutputType = {
    id: number | null
    nomeLocal: string | null
    tipoQuadra: string | null
    localizacao: string | null
    imagemPrincipal: string | null
    imagemPri: string | null
    imagemSeg: string | null
    imagemTer: string | null
    telefone: string | null
    disponibilidade: string | null
    preco: number | null
    dimensoes: string | null
    iluminacao: boolean | null
    vestiarios: boolean | null
    bebedouro: boolean | null
    estacionamento: boolean | null
    arquibancada: boolean | null
    coberta: boolean | null
    acessibilidade: boolean | null
    wifi: boolean | null
    criado_em: Date | null
  }

  export type QuadraCountAggregateOutputType = {
    id: number
    nomeLocal: number
    tipoQuadra: number
    localizacao: number
    imagemPrincipal: number
    imagemPri: number
    imagemSeg: number
    imagemTer: number
    telefone: number
    disponibilidade: number
    preco: number
    dimensoes: number
    iluminacao: number
    vestiarios: number
    bebedouro: number
    estacionamento: number
    arquibancada: number
    coberta: number
    acessibilidade: number
    wifi: number
    criado_em: number
    _all: number
  }


  export type QuadraAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type QuadraSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type QuadraMinAggregateInputType = {
    id?: true
    nomeLocal?: true
    tipoQuadra?: true
    localizacao?: true
    imagemPrincipal?: true
    imagemPri?: true
    imagemSeg?: true
    imagemTer?: true
    telefone?: true
    disponibilidade?: true
    preco?: true
    dimensoes?: true
    iluminacao?: true
    vestiarios?: true
    bebedouro?: true
    estacionamento?: true
    arquibancada?: true
    coberta?: true
    acessibilidade?: true
    wifi?: true
    criado_em?: true
  }

  export type QuadraMaxAggregateInputType = {
    id?: true
    nomeLocal?: true
    tipoQuadra?: true
    localizacao?: true
    imagemPrincipal?: true
    imagemPri?: true
    imagemSeg?: true
    imagemTer?: true
    telefone?: true
    disponibilidade?: true
    preco?: true
    dimensoes?: true
    iluminacao?: true
    vestiarios?: true
    bebedouro?: true
    estacionamento?: true
    arquibancada?: true
    coberta?: true
    acessibilidade?: true
    wifi?: true
    criado_em?: true
  }

  export type QuadraCountAggregateInputType = {
    id?: true
    nomeLocal?: true
    tipoQuadra?: true
    localizacao?: true
    imagemPrincipal?: true
    imagemPri?: true
    imagemSeg?: true
    imagemTer?: true
    telefone?: true
    disponibilidade?: true
    preco?: true
    dimensoes?: true
    iluminacao?: true
    vestiarios?: true
    bebedouro?: true
    estacionamento?: true
    arquibancada?: true
    coberta?: true
    acessibilidade?: true
    wifi?: true
    criado_em?: true
    _all?: true
  }

  export type QuadraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quadra to aggregate.
     */
    where?: QuadraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quadras to fetch.
     */
    orderBy?: QuadraOrderByWithRelationInput | QuadraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuadraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quadras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quadras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quadras
    **/
    _count?: true | QuadraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuadraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuadraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuadraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuadraMaxAggregateInputType
  }

  export type GetQuadraAggregateType<T extends QuadraAggregateArgs> = {
        [P in keyof T & keyof AggregateQuadra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuadra[P]>
      : GetScalarType<T[P], AggregateQuadra[P]>
  }




  export type QuadraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuadraWhereInput
    orderBy?: QuadraOrderByWithAggregationInput | QuadraOrderByWithAggregationInput[]
    by: QuadraScalarFieldEnum[] | QuadraScalarFieldEnum
    having?: QuadraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuadraCountAggregateInputType | true
    _avg?: QuadraAvgAggregateInputType
    _sum?: QuadraSumAggregateInputType
    _min?: QuadraMinAggregateInputType
    _max?: QuadraMaxAggregateInputType
  }

  export type QuadraGroupByOutputType = {
    id: number
    nomeLocal: string
    tipoQuadra: string
    localizacao: string
    imagemPrincipal: string
    imagemPri: string
    imagemSeg: string
    imagemTer: string
    telefone: string
    disponibilidade: string
    preco: number
    dimensoes: string
    iluminacao: boolean
    vestiarios: boolean
    bebedouro: boolean
    estacionamento: boolean
    arquibancada: boolean
    coberta: boolean
    acessibilidade: boolean
    wifi: boolean
    criado_em: Date
    _count: QuadraCountAggregateOutputType | null
    _avg: QuadraAvgAggregateOutputType | null
    _sum: QuadraSumAggregateOutputType | null
    _min: QuadraMinAggregateOutputType | null
    _max: QuadraMaxAggregateOutputType | null
  }

  type GetQuadraGroupByPayload<T extends QuadraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuadraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuadraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuadraGroupByOutputType[P]>
            : GetScalarType<T[P], QuadraGroupByOutputType[P]>
        }
      >
    >


  export type QuadraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeLocal?: boolean
    tipoQuadra?: boolean
    localizacao?: boolean
    imagemPrincipal?: boolean
    imagemPri?: boolean
    imagemSeg?: boolean
    imagemTer?: boolean
    telefone?: boolean
    disponibilidade?: boolean
    preco?: boolean
    dimensoes?: boolean
    iluminacao?: boolean
    vestiarios?: boolean
    bebedouro?: boolean
    estacionamento?: boolean
    arquibancada?: boolean
    coberta?: boolean
    acessibilidade?: boolean
    wifi?: boolean
    criado_em?: boolean
    locacao?: boolean | Quadra$locacaoArgs<ExtArgs>
    _count?: boolean | QuadraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quadra"]>



  export type QuadraSelectScalar = {
    id?: boolean
    nomeLocal?: boolean
    tipoQuadra?: boolean
    localizacao?: boolean
    imagemPrincipal?: boolean
    imagemPri?: boolean
    imagemSeg?: boolean
    imagemTer?: boolean
    telefone?: boolean
    disponibilidade?: boolean
    preco?: boolean
    dimensoes?: boolean
    iluminacao?: boolean
    vestiarios?: boolean
    bebedouro?: boolean
    estacionamento?: boolean
    arquibancada?: boolean
    coberta?: boolean
    acessibilidade?: boolean
    wifi?: boolean
    criado_em?: boolean
  }

  export type QuadraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeLocal" | "tipoQuadra" | "localizacao" | "imagemPrincipal" | "imagemPri" | "imagemSeg" | "imagemTer" | "telefone" | "disponibilidade" | "preco" | "dimensoes" | "iluminacao" | "vestiarios" | "bebedouro" | "estacionamento" | "arquibancada" | "coberta" | "acessibilidade" | "wifi" | "criado_em", ExtArgs["result"]["quadra"]>
  export type QuadraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locacao?: boolean | Quadra$locacaoArgs<ExtArgs>
    _count?: boolean | QuadraCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuadraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quadra"
    objects: {
      locacao: Prisma.$LocacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeLocal: string
      tipoQuadra: string
      localizacao: string
      imagemPrincipal: string
      imagemPri: string
      imagemSeg: string
      imagemTer: string
      telefone: string
      disponibilidade: string
      preco: number
      dimensoes: string
      iluminacao: boolean
      vestiarios: boolean
      bebedouro: boolean
      estacionamento: boolean
      arquibancada: boolean
      coberta: boolean
      acessibilidade: boolean
      wifi: boolean
      criado_em: Date
    }, ExtArgs["result"]["quadra"]>
    composites: {}
  }

  type QuadraGetPayload<S extends boolean | null | undefined | QuadraDefaultArgs> = $Result.GetResult<Prisma.$QuadraPayload, S>

  type QuadraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuadraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuadraCountAggregateInputType | true
    }

  export interface QuadraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quadra'], meta: { name: 'Quadra' } }
    /**
     * Find zero or one Quadra that matches the filter.
     * @param {QuadraFindUniqueArgs} args - Arguments to find a Quadra
     * @example
     * // Get one Quadra
     * const quadra = await prisma.quadra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuadraFindUniqueArgs>(args: SelectSubset<T, QuadraFindUniqueArgs<ExtArgs>>): Prisma__QuadraClient<$Result.GetResult<Prisma.$QuadraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quadra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuadraFindUniqueOrThrowArgs} args - Arguments to find a Quadra
     * @example
     * // Get one Quadra
     * const quadra = await prisma.quadra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuadraFindUniqueOrThrowArgs>(args: SelectSubset<T, QuadraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuadraClient<$Result.GetResult<Prisma.$QuadraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quadra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuadraFindFirstArgs} args - Arguments to find a Quadra
     * @example
     * // Get one Quadra
     * const quadra = await prisma.quadra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuadraFindFirstArgs>(args?: SelectSubset<T, QuadraFindFirstArgs<ExtArgs>>): Prisma__QuadraClient<$Result.GetResult<Prisma.$QuadraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quadra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuadraFindFirstOrThrowArgs} args - Arguments to find a Quadra
     * @example
     * // Get one Quadra
     * const quadra = await prisma.quadra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuadraFindFirstOrThrowArgs>(args?: SelectSubset<T, QuadraFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuadraClient<$Result.GetResult<Prisma.$QuadraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quadras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuadraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quadras
     * const quadras = await prisma.quadra.findMany()
     * 
     * // Get first 10 Quadras
     * const quadras = await prisma.quadra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quadraWithIdOnly = await prisma.quadra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuadraFindManyArgs>(args?: SelectSubset<T, QuadraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuadraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quadra.
     * @param {QuadraCreateArgs} args - Arguments to create a Quadra.
     * @example
     * // Create one Quadra
     * const Quadra = await prisma.quadra.create({
     *   data: {
     *     // ... data to create a Quadra
     *   }
     * })
     * 
     */
    create<T extends QuadraCreateArgs>(args: SelectSubset<T, QuadraCreateArgs<ExtArgs>>): Prisma__QuadraClient<$Result.GetResult<Prisma.$QuadraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quadras.
     * @param {QuadraCreateManyArgs} args - Arguments to create many Quadras.
     * @example
     * // Create many Quadras
     * const quadra = await prisma.quadra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuadraCreateManyArgs>(args?: SelectSubset<T, QuadraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quadra.
     * @param {QuadraDeleteArgs} args - Arguments to delete one Quadra.
     * @example
     * // Delete one Quadra
     * const Quadra = await prisma.quadra.delete({
     *   where: {
     *     // ... filter to delete one Quadra
     *   }
     * })
     * 
     */
    delete<T extends QuadraDeleteArgs>(args: SelectSubset<T, QuadraDeleteArgs<ExtArgs>>): Prisma__QuadraClient<$Result.GetResult<Prisma.$QuadraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quadra.
     * @param {QuadraUpdateArgs} args - Arguments to update one Quadra.
     * @example
     * // Update one Quadra
     * const quadra = await prisma.quadra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuadraUpdateArgs>(args: SelectSubset<T, QuadraUpdateArgs<ExtArgs>>): Prisma__QuadraClient<$Result.GetResult<Prisma.$QuadraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quadras.
     * @param {QuadraDeleteManyArgs} args - Arguments to filter Quadras to delete.
     * @example
     * // Delete a few Quadras
     * const { count } = await prisma.quadra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuadraDeleteManyArgs>(args?: SelectSubset<T, QuadraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quadras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuadraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quadras
     * const quadra = await prisma.quadra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuadraUpdateManyArgs>(args: SelectSubset<T, QuadraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quadra.
     * @param {QuadraUpsertArgs} args - Arguments to update or create a Quadra.
     * @example
     * // Update or create a Quadra
     * const quadra = await prisma.quadra.upsert({
     *   create: {
     *     // ... data to create a Quadra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quadra we want to update
     *   }
     * })
     */
    upsert<T extends QuadraUpsertArgs>(args: SelectSubset<T, QuadraUpsertArgs<ExtArgs>>): Prisma__QuadraClient<$Result.GetResult<Prisma.$QuadraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quadras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuadraCountArgs} args - Arguments to filter Quadras to count.
     * @example
     * // Count the number of Quadras
     * const count = await prisma.quadra.count({
     *   where: {
     *     // ... the filter for the Quadras we want to count
     *   }
     * })
    **/
    count<T extends QuadraCountArgs>(
      args?: Subset<T, QuadraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuadraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quadra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuadraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuadraAggregateArgs>(args: Subset<T, QuadraAggregateArgs>): Prisma.PrismaPromise<GetQuadraAggregateType<T>>

    /**
     * Group by Quadra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuadraGroupByArgs} args - Group by arguments.
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
      T extends QuadraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuadraGroupByArgs['orderBy'] }
        : { orderBy?: QuadraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuadraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuadraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quadra model
   */
  readonly fields: QuadraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quadra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuadraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locacao<T extends Quadra$locacaoArgs<ExtArgs> = {}>(args?: Subset<T, Quadra$locacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quadra model
   */
  interface QuadraFieldRefs {
    readonly id: FieldRef<"Quadra", 'Int'>
    readonly nomeLocal: FieldRef<"Quadra", 'String'>
    readonly tipoQuadra: FieldRef<"Quadra", 'String'>
    readonly localizacao: FieldRef<"Quadra", 'String'>
    readonly imagemPrincipal: FieldRef<"Quadra", 'String'>
    readonly imagemPri: FieldRef<"Quadra", 'String'>
    readonly imagemSeg: FieldRef<"Quadra", 'String'>
    readonly imagemTer: FieldRef<"Quadra", 'String'>
    readonly telefone: FieldRef<"Quadra", 'String'>
    readonly disponibilidade: FieldRef<"Quadra", 'String'>
    readonly preco: FieldRef<"Quadra", 'Float'>
    readonly dimensoes: FieldRef<"Quadra", 'String'>
    readonly iluminacao: FieldRef<"Quadra", 'Boolean'>
    readonly vestiarios: FieldRef<"Quadra", 'Boolean'>
    readonly bebedouro: FieldRef<"Quadra", 'Boolean'>
    readonly estacionamento: FieldRef<"Quadra", 'Boolean'>
    readonly arquibancada: FieldRef<"Quadra", 'Boolean'>
    readonly coberta: FieldRef<"Quadra", 'Boolean'>
    readonly acessibilidade: FieldRef<"Quadra", 'Boolean'>
    readonly wifi: FieldRef<"Quadra", 'Boolean'>
    readonly criado_em: FieldRef<"Quadra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quadra findUnique
   */
  export type QuadraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quadra
     */
    select?: QuadraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quadra
     */
    omit?: QuadraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuadraInclude<ExtArgs> | null
    /**
     * Filter, which Quadra to fetch.
     */
    where: QuadraWhereUniqueInput
  }

  /**
   * Quadra findUniqueOrThrow
   */
  export type QuadraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quadra
     */
    select?: QuadraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quadra
     */
    omit?: QuadraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuadraInclude<ExtArgs> | null
    /**
     * Filter, which Quadra to fetch.
     */
    where: QuadraWhereUniqueInput
  }

  /**
   * Quadra findFirst
   */
  export type QuadraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quadra
     */
    select?: QuadraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quadra
     */
    omit?: QuadraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuadraInclude<ExtArgs> | null
    /**
     * Filter, which Quadra to fetch.
     */
    where?: QuadraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quadras to fetch.
     */
    orderBy?: QuadraOrderByWithRelationInput | QuadraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quadras.
     */
    cursor?: QuadraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quadras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quadras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quadras.
     */
    distinct?: QuadraScalarFieldEnum | QuadraScalarFieldEnum[]
  }

  /**
   * Quadra findFirstOrThrow
   */
  export type QuadraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quadra
     */
    select?: QuadraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quadra
     */
    omit?: QuadraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuadraInclude<ExtArgs> | null
    /**
     * Filter, which Quadra to fetch.
     */
    where?: QuadraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quadras to fetch.
     */
    orderBy?: QuadraOrderByWithRelationInput | QuadraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quadras.
     */
    cursor?: QuadraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quadras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quadras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quadras.
     */
    distinct?: QuadraScalarFieldEnum | QuadraScalarFieldEnum[]
  }

  /**
   * Quadra findMany
   */
  export type QuadraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quadra
     */
    select?: QuadraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quadra
     */
    omit?: QuadraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuadraInclude<ExtArgs> | null
    /**
     * Filter, which Quadras to fetch.
     */
    where?: QuadraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quadras to fetch.
     */
    orderBy?: QuadraOrderByWithRelationInput | QuadraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quadras.
     */
    cursor?: QuadraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quadras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quadras.
     */
    skip?: number
    distinct?: QuadraScalarFieldEnum | QuadraScalarFieldEnum[]
  }

  /**
   * Quadra create
   */
  export type QuadraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quadra
     */
    select?: QuadraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quadra
     */
    omit?: QuadraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuadraInclude<ExtArgs> | null
    /**
     * The data needed to create a Quadra.
     */
    data: XOR<QuadraCreateInput, QuadraUncheckedCreateInput>
  }

  /**
   * Quadra createMany
   */
  export type QuadraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quadras.
     */
    data: QuadraCreateManyInput | QuadraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quadra update
   */
  export type QuadraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quadra
     */
    select?: QuadraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quadra
     */
    omit?: QuadraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuadraInclude<ExtArgs> | null
    /**
     * The data needed to update a Quadra.
     */
    data: XOR<QuadraUpdateInput, QuadraUncheckedUpdateInput>
    /**
     * Choose, which Quadra to update.
     */
    where: QuadraWhereUniqueInput
  }

  /**
   * Quadra updateMany
   */
  export type QuadraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quadras.
     */
    data: XOR<QuadraUpdateManyMutationInput, QuadraUncheckedUpdateManyInput>
    /**
     * Filter which Quadras to update
     */
    where?: QuadraWhereInput
    /**
     * Limit how many Quadras to update.
     */
    limit?: number
  }

  /**
   * Quadra upsert
   */
  export type QuadraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quadra
     */
    select?: QuadraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quadra
     */
    omit?: QuadraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuadraInclude<ExtArgs> | null
    /**
     * The filter to search for the Quadra to update in case it exists.
     */
    where: QuadraWhereUniqueInput
    /**
     * In case the Quadra found by the `where` argument doesn't exist, create a new Quadra with this data.
     */
    create: XOR<QuadraCreateInput, QuadraUncheckedCreateInput>
    /**
     * In case the Quadra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuadraUpdateInput, QuadraUncheckedUpdateInput>
  }

  /**
   * Quadra delete
   */
  export type QuadraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quadra
     */
    select?: QuadraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quadra
     */
    omit?: QuadraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuadraInclude<ExtArgs> | null
    /**
     * Filter which Quadra to delete.
     */
    where: QuadraWhereUniqueInput
  }

  /**
   * Quadra deleteMany
   */
  export type QuadraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quadras to delete
     */
    where?: QuadraWhereInput
    /**
     * Limit how many Quadras to delete.
     */
    limit?: number
  }

  /**
   * Quadra.locacao
   */
  export type Quadra$locacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    where?: LocacaoWhereInput
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    cursor?: LocacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocacaoScalarFieldEnum | LocacaoScalarFieldEnum[]
  }

  /**
   * Quadra without action
   */
  export type QuadraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quadra
     */
    select?: QuadraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quadra
     */
    omit?: QuadraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuadraInclude<ExtArgs> | null
  }


  /**
   * Model Locacao
   */

  export type AggregateLocacao = {
    _count: LocacaoCountAggregateOutputType | null
    _avg: LocacaoAvgAggregateOutputType | null
    _sum: LocacaoSumAggregateOutputType | null
    _min: LocacaoMinAggregateOutputType | null
    _max: LocacaoMaxAggregateOutputType | null
  }

  export type LocacaoAvgAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    id_quadra: number | null
    data: number | null
    hora: number | null
  }

  export type LocacaoSumAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    id_quadra: number | null
    data: number | null
    hora: number | null
  }

  export type LocacaoMinAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    id_quadra: number | null
    data: number | null
    hora: number | null
  }

  export type LocacaoMaxAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    id_quadra: number | null
    data: number | null
    hora: number | null
  }

  export type LocacaoCountAggregateOutputType = {
    id: number
    id_usuario: number
    id_quadra: number
    data: number
    hora: number
    _all: number
  }


  export type LocacaoAvgAggregateInputType = {
    id?: true
    id_usuario?: true
    id_quadra?: true
    data?: true
    hora?: true
  }

  export type LocacaoSumAggregateInputType = {
    id?: true
    id_usuario?: true
    id_quadra?: true
    data?: true
    hora?: true
  }

  export type LocacaoMinAggregateInputType = {
    id?: true
    id_usuario?: true
    id_quadra?: true
    data?: true
    hora?: true
  }

  export type LocacaoMaxAggregateInputType = {
    id?: true
    id_usuario?: true
    id_quadra?: true
    data?: true
    hora?: true
  }

  export type LocacaoCountAggregateInputType = {
    id?: true
    id_usuario?: true
    id_quadra?: true
    data?: true
    hora?: true
    _all?: true
  }

  export type LocacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locacao to aggregate.
     */
    where?: LocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locacaos to fetch.
     */
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locacaos
    **/
    _count?: true | LocacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocacaoMaxAggregateInputType
  }

  export type GetLocacaoAggregateType<T extends LocacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateLocacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocacao[P]>
      : GetScalarType<T[P], AggregateLocacao[P]>
  }




  export type LocacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocacaoWhereInput
    orderBy?: LocacaoOrderByWithAggregationInput | LocacaoOrderByWithAggregationInput[]
    by: LocacaoScalarFieldEnum[] | LocacaoScalarFieldEnum
    having?: LocacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocacaoCountAggregateInputType | true
    _avg?: LocacaoAvgAggregateInputType
    _sum?: LocacaoSumAggregateInputType
    _min?: LocacaoMinAggregateInputType
    _max?: LocacaoMaxAggregateInputType
  }

  export type LocacaoGroupByOutputType = {
    id: number
    id_usuario: number
    id_quadra: number
    data: number
    hora: number
    _count: LocacaoCountAggregateOutputType | null
    _avg: LocacaoAvgAggregateOutputType | null
    _sum: LocacaoSumAggregateOutputType | null
    _min: LocacaoMinAggregateOutputType | null
    _max: LocacaoMaxAggregateOutputType | null
  }

  type GetLocacaoGroupByPayload<T extends LocacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocacaoGroupByOutputType[P]>
            : GetScalarType<T[P], LocacaoGroupByOutputType[P]>
        }
      >
    >


  export type LocacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuario?: boolean
    id_quadra?: boolean
    data?: boolean
    hora?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    quadra?: boolean | QuadraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locacao"]>



  export type LocacaoSelectScalar = {
    id?: boolean
    id_usuario?: boolean
    id_quadra?: boolean
    data?: boolean
    hora?: boolean
  }

  export type LocacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_usuario" | "id_quadra" | "data" | "hora", ExtArgs["result"]["locacao"]>
  export type LocacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    quadra?: boolean | QuadraDefaultArgs<ExtArgs>
  }

  export type $LocacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      quadra: Prisma.$QuadraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_usuario: number
      id_quadra: number
      data: number
      hora: number
    }, ExtArgs["result"]["locacao"]>
    composites: {}
  }

  type LocacaoGetPayload<S extends boolean | null | undefined | LocacaoDefaultArgs> = $Result.GetResult<Prisma.$LocacaoPayload, S>

  type LocacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocacaoCountAggregateInputType | true
    }

  export interface LocacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locacao'], meta: { name: 'Locacao' } }
    /**
     * Find zero or one Locacao that matches the filter.
     * @param {LocacaoFindUniqueArgs} args - Arguments to find a Locacao
     * @example
     * // Get one Locacao
     * const locacao = await prisma.locacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocacaoFindUniqueArgs>(args: SelectSubset<T, LocacaoFindUniqueArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocacaoFindUniqueOrThrowArgs} args - Arguments to find a Locacao
     * @example
     * // Get one Locacao
     * const locacao = await prisma.locacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, LocacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoFindFirstArgs} args - Arguments to find a Locacao
     * @example
     * // Get one Locacao
     * const locacao = await prisma.locacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocacaoFindFirstArgs>(args?: SelectSubset<T, LocacaoFindFirstArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoFindFirstOrThrowArgs} args - Arguments to find a Locacao
     * @example
     * // Get one Locacao
     * const locacao = await prisma.locacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, LocacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locacaos
     * const locacaos = await prisma.locacao.findMany()
     * 
     * // Get first 10 Locacaos
     * const locacaos = await prisma.locacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locacaoWithIdOnly = await prisma.locacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocacaoFindManyArgs>(args?: SelectSubset<T, LocacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locacao.
     * @param {LocacaoCreateArgs} args - Arguments to create a Locacao.
     * @example
     * // Create one Locacao
     * const Locacao = await prisma.locacao.create({
     *   data: {
     *     // ... data to create a Locacao
     *   }
     * })
     * 
     */
    create<T extends LocacaoCreateArgs>(args: SelectSubset<T, LocacaoCreateArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locacaos.
     * @param {LocacaoCreateManyArgs} args - Arguments to create many Locacaos.
     * @example
     * // Create many Locacaos
     * const locacao = await prisma.locacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocacaoCreateManyArgs>(args?: SelectSubset<T, LocacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Locacao.
     * @param {LocacaoDeleteArgs} args - Arguments to delete one Locacao.
     * @example
     * // Delete one Locacao
     * const Locacao = await prisma.locacao.delete({
     *   where: {
     *     // ... filter to delete one Locacao
     *   }
     * })
     * 
     */
    delete<T extends LocacaoDeleteArgs>(args: SelectSubset<T, LocacaoDeleteArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locacao.
     * @param {LocacaoUpdateArgs} args - Arguments to update one Locacao.
     * @example
     * // Update one Locacao
     * const locacao = await prisma.locacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocacaoUpdateArgs>(args: SelectSubset<T, LocacaoUpdateArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locacaos.
     * @param {LocacaoDeleteManyArgs} args - Arguments to filter Locacaos to delete.
     * @example
     * // Delete a few Locacaos
     * const { count } = await prisma.locacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocacaoDeleteManyArgs>(args?: SelectSubset<T, LocacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locacaos
     * const locacao = await prisma.locacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocacaoUpdateManyArgs>(args: SelectSubset<T, LocacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Locacao.
     * @param {LocacaoUpsertArgs} args - Arguments to update or create a Locacao.
     * @example
     * // Update or create a Locacao
     * const locacao = await prisma.locacao.upsert({
     *   create: {
     *     // ... data to create a Locacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locacao we want to update
     *   }
     * })
     */
    upsert<T extends LocacaoUpsertArgs>(args: SelectSubset<T, LocacaoUpsertArgs<ExtArgs>>): Prisma__LocacaoClient<$Result.GetResult<Prisma.$LocacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoCountArgs} args - Arguments to filter Locacaos to count.
     * @example
     * // Count the number of Locacaos
     * const count = await prisma.locacao.count({
     *   where: {
     *     // ... the filter for the Locacaos we want to count
     *   }
     * })
    **/
    count<T extends LocacaoCountArgs>(
      args?: Subset<T, LocacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocacaoAggregateArgs>(args: Subset<T, LocacaoAggregateArgs>): Prisma.PrismaPromise<GetLocacaoAggregateType<T>>

    /**
     * Group by Locacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocacaoGroupByArgs} args - Group by arguments.
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
      T extends LocacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocacaoGroupByArgs['orderBy'] }
        : { orderBy?: LocacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locacao model
   */
  readonly fields: LocacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quadra<T extends QuadraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuadraDefaultArgs<ExtArgs>>): Prisma__QuadraClient<$Result.GetResult<Prisma.$QuadraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Locacao model
   */
  interface LocacaoFieldRefs {
    readonly id: FieldRef<"Locacao", 'Int'>
    readonly id_usuario: FieldRef<"Locacao", 'Int'>
    readonly id_quadra: FieldRef<"Locacao", 'Int'>
    readonly data: FieldRef<"Locacao", 'Int'>
    readonly hora: FieldRef<"Locacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Locacao findUnique
   */
  export type LocacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Locacao to fetch.
     */
    where: LocacaoWhereUniqueInput
  }

  /**
   * Locacao findUniqueOrThrow
   */
  export type LocacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Locacao to fetch.
     */
    where: LocacaoWhereUniqueInput
  }

  /**
   * Locacao findFirst
   */
  export type LocacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Locacao to fetch.
     */
    where?: LocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locacaos to fetch.
     */
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locacaos.
     */
    cursor?: LocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locacaos.
     */
    distinct?: LocacaoScalarFieldEnum | LocacaoScalarFieldEnum[]
  }

  /**
   * Locacao findFirstOrThrow
   */
  export type LocacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Locacao to fetch.
     */
    where?: LocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locacaos to fetch.
     */
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locacaos.
     */
    cursor?: LocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locacaos.
     */
    distinct?: LocacaoScalarFieldEnum | LocacaoScalarFieldEnum[]
  }

  /**
   * Locacao findMany
   */
  export type LocacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Locacaos to fetch.
     */
    where?: LocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locacaos to fetch.
     */
    orderBy?: LocacaoOrderByWithRelationInput | LocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locacaos.
     */
    cursor?: LocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locacaos.
     */
    skip?: number
    distinct?: LocacaoScalarFieldEnum | LocacaoScalarFieldEnum[]
  }

  /**
   * Locacao create
   */
  export type LocacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Locacao.
     */
    data: XOR<LocacaoCreateInput, LocacaoUncheckedCreateInput>
  }

  /**
   * Locacao createMany
   */
  export type LocacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locacaos.
     */
    data: LocacaoCreateManyInput | LocacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Locacao update
   */
  export type LocacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Locacao.
     */
    data: XOR<LocacaoUpdateInput, LocacaoUncheckedUpdateInput>
    /**
     * Choose, which Locacao to update.
     */
    where: LocacaoWhereUniqueInput
  }

  /**
   * Locacao updateMany
   */
  export type LocacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locacaos.
     */
    data: XOR<LocacaoUpdateManyMutationInput, LocacaoUncheckedUpdateManyInput>
    /**
     * Filter which Locacaos to update
     */
    where?: LocacaoWhereInput
    /**
     * Limit how many Locacaos to update.
     */
    limit?: number
  }

  /**
   * Locacao upsert
   */
  export type LocacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Locacao to update in case it exists.
     */
    where: LocacaoWhereUniqueInput
    /**
     * In case the Locacao found by the `where` argument doesn't exist, create a new Locacao with this data.
     */
    create: XOR<LocacaoCreateInput, LocacaoUncheckedCreateInput>
    /**
     * In case the Locacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocacaoUpdateInput, LocacaoUncheckedUpdateInput>
  }

  /**
   * Locacao delete
   */
  export type LocacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
    /**
     * Filter which Locacao to delete.
     */
    where: LocacaoWhereUniqueInput
  }

  /**
   * Locacao deleteMany
   */
  export type LocacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locacaos to delete
     */
    where?: LocacaoWhereInput
    /**
     * Limit how many Locacaos to delete.
     */
    limit?: number
  }

  /**
   * Locacao without action
   */
  export type LocacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locacao
     */
    select?: LocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locacao
     */
    omit?: LocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocacaoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nascimento: 'nascimento',
    email: 'email',
    cpf: 'cpf',
    senha: 'senha',
    criado_em: 'criado_em'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const QuadraScalarFieldEnum: {
    id: 'id',
    nomeLocal: 'nomeLocal',
    tipoQuadra: 'tipoQuadra',
    localizacao: 'localizacao',
    imagemPrincipal: 'imagemPrincipal',
    imagemPri: 'imagemPri',
    imagemSeg: 'imagemSeg',
    imagemTer: 'imagemTer',
    telefone: 'telefone',
    disponibilidade: 'disponibilidade',
    preco: 'preco',
    dimensoes: 'dimensoes',
    iluminacao: 'iluminacao',
    vestiarios: 'vestiarios',
    bebedouro: 'bebedouro',
    estacionamento: 'estacionamento',
    arquibancada: 'arquibancada',
    coberta: 'coberta',
    acessibilidade: 'acessibilidade',
    wifi: 'wifi',
    criado_em: 'criado_em'
  };

  export type QuadraScalarFieldEnum = (typeof QuadraScalarFieldEnum)[keyof typeof QuadraScalarFieldEnum]


  export const LocacaoScalarFieldEnum: {
    id: 'id',
    id_usuario: 'id_usuario',
    id_quadra: 'id_quadra',
    data: 'data',
    hora: 'hora'
  };

  export type LocacaoScalarFieldEnum = (typeof LocacaoScalarFieldEnum)[keyof typeof LocacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    senha: 'senha'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const QuadraOrderByRelevanceFieldEnum: {
    nomeLocal: 'nomeLocal',
    tipoQuadra: 'tipoQuadra',
    localizacao: 'localizacao',
    imagemPrincipal: 'imagemPrincipal',
    imagemPri: 'imagemPri',
    imagemSeg: 'imagemSeg',
    imagemTer: 'imagemTer',
    telefone: 'telefone',
    disponibilidade: 'disponibilidade',
    dimensoes: 'dimensoes'
  };

  export type QuadraOrderByRelevanceFieldEnum = (typeof QuadraOrderByRelevanceFieldEnum)[keyof typeof QuadraOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    nascimento?: DateTimeFilter<"Usuario"> | Date | string
    email?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criado_em?: DateTimeFilter<"Usuario"> | Date | string
    locacao?: LocacaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    criado_em?: SortOrder
    locacao?: LocacaoOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    nascimento?: DateTimeFilter<"Usuario"> | Date | string
    senha?: StringFilter<"Usuario"> | string
    criado_em?: DateTimeFilter<"Usuario"> | Date | string
    locacao?: LocacaoListRelationFilter
  }, "id" | "email" | "cpf">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    criado_em?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    nascimento?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    cpf?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    criado_em?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type QuadraWhereInput = {
    AND?: QuadraWhereInput | QuadraWhereInput[]
    OR?: QuadraWhereInput[]
    NOT?: QuadraWhereInput | QuadraWhereInput[]
    id?: IntFilter<"Quadra"> | number
    nomeLocal?: StringFilter<"Quadra"> | string
    tipoQuadra?: StringFilter<"Quadra"> | string
    localizacao?: StringFilter<"Quadra"> | string
    imagemPrincipal?: StringFilter<"Quadra"> | string
    imagemPri?: StringFilter<"Quadra"> | string
    imagemSeg?: StringFilter<"Quadra"> | string
    imagemTer?: StringFilter<"Quadra"> | string
    telefone?: StringFilter<"Quadra"> | string
    disponibilidade?: StringFilter<"Quadra"> | string
    preco?: FloatFilter<"Quadra"> | number
    dimensoes?: StringFilter<"Quadra"> | string
    iluminacao?: BoolFilter<"Quadra"> | boolean
    vestiarios?: BoolFilter<"Quadra"> | boolean
    bebedouro?: BoolFilter<"Quadra"> | boolean
    estacionamento?: BoolFilter<"Quadra"> | boolean
    arquibancada?: BoolFilter<"Quadra"> | boolean
    coberta?: BoolFilter<"Quadra"> | boolean
    acessibilidade?: BoolFilter<"Quadra"> | boolean
    wifi?: BoolFilter<"Quadra"> | boolean
    criado_em?: DateTimeFilter<"Quadra"> | Date | string
    locacao?: LocacaoListRelationFilter
  }

  export type QuadraOrderByWithRelationInput = {
    id?: SortOrder
    nomeLocal?: SortOrder
    tipoQuadra?: SortOrder
    localizacao?: SortOrder
    imagemPrincipal?: SortOrder
    imagemPri?: SortOrder
    imagemSeg?: SortOrder
    imagemTer?: SortOrder
    telefone?: SortOrder
    disponibilidade?: SortOrder
    preco?: SortOrder
    dimensoes?: SortOrder
    iluminacao?: SortOrder
    vestiarios?: SortOrder
    bebedouro?: SortOrder
    estacionamento?: SortOrder
    arquibancada?: SortOrder
    coberta?: SortOrder
    acessibilidade?: SortOrder
    wifi?: SortOrder
    criado_em?: SortOrder
    locacao?: LocacaoOrderByRelationAggregateInput
    _relevance?: QuadraOrderByRelevanceInput
  }

  export type QuadraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuadraWhereInput | QuadraWhereInput[]
    OR?: QuadraWhereInput[]
    NOT?: QuadraWhereInput | QuadraWhereInput[]
    nomeLocal?: StringFilter<"Quadra"> | string
    tipoQuadra?: StringFilter<"Quadra"> | string
    localizacao?: StringFilter<"Quadra"> | string
    imagemPrincipal?: StringFilter<"Quadra"> | string
    imagemPri?: StringFilter<"Quadra"> | string
    imagemSeg?: StringFilter<"Quadra"> | string
    imagemTer?: StringFilter<"Quadra"> | string
    telefone?: StringFilter<"Quadra"> | string
    disponibilidade?: StringFilter<"Quadra"> | string
    preco?: FloatFilter<"Quadra"> | number
    dimensoes?: StringFilter<"Quadra"> | string
    iluminacao?: BoolFilter<"Quadra"> | boolean
    vestiarios?: BoolFilter<"Quadra"> | boolean
    bebedouro?: BoolFilter<"Quadra"> | boolean
    estacionamento?: BoolFilter<"Quadra"> | boolean
    arquibancada?: BoolFilter<"Quadra"> | boolean
    coberta?: BoolFilter<"Quadra"> | boolean
    acessibilidade?: BoolFilter<"Quadra"> | boolean
    wifi?: BoolFilter<"Quadra"> | boolean
    criado_em?: DateTimeFilter<"Quadra"> | Date | string
    locacao?: LocacaoListRelationFilter
  }, "id">

  export type QuadraOrderByWithAggregationInput = {
    id?: SortOrder
    nomeLocal?: SortOrder
    tipoQuadra?: SortOrder
    localizacao?: SortOrder
    imagemPrincipal?: SortOrder
    imagemPri?: SortOrder
    imagemSeg?: SortOrder
    imagemTer?: SortOrder
    telefone?: SortOrder
    disponibilidade?: SortOrder
    preco?: SortOrder
    dimensoes?: SortOrder
    iluminacao?: SortOrder
    vestiarios?: SortOrder
    bebedouro?: SortOrder
    estacionamento?: SortOrder
    arquibancada?: SortOrder
    coberta?: SortOrder
    acessibilidade?: SortOrder
    wifi?: SortOrder
    criado_em?: SortOrder
    _count?: QuadraCountOrderByAggregateInput
    _avg?: QuadraAvgOrderByAggregateInput
    _max?: QuadraMaxOrderByAggregateInput
    _min?: QuadraMinOrderByAggregateInput
    _sum?: QuadraSumOrderByAggregateInput
  }

  export type QuadraScalarWhereWithAggregatesInput = {
    AND?: QuadraScalarWhereWithAggregatesInput | QuadraScalarWhereWithAggregatesInput[]
    OR?: QuadraScalarWhereWithAggregatesInput[]
    NOT?: QuadraScalarWhereWithAggregatesInput | QuadraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quadra"> | number
    nomeLocal?: StringWithAggregatesFilter<"Quadra"> | string
    tipoQuadra?: StringWithAggregatesFilter<"Quadra"> | string
    localizacao?: StringWithAggregatesFilter<"Quadra"> | string
    imagemPrincipal?: StringWithAggregatesFilter<"Quadra"> | string
    imagemPri?: StringWithAggregatesFilter<"Quadra"> | string
    imagemSeg?: StringWithAggregatesFilter<"Quadra"> | string
    imagemTer?: StringWithAggregatesFilter<"Quadra"> | string
    telefone?: StringWithAggregatesFilter<"Quadra"> | string
    disponibilidade?: StringWithAggregatesFilter<"Quadra"> | string
    preco?: FloatWithAggregatesFilter<"Quadra"> | number
    dimensoes?: StringWithAggregatesFilter<"Quadra"> | string
    iluminacao?: BoolWithAggregatesFilter<"Quadra"> | boolean
    vestiarios?: BoolWithAggregatesFilter<"Quadra"> | boolean
    bebedouro?: BoolWithAggregatesFilter<"Quadra"> | boolean
    estacionamento?: BoolWithAggregatesFilter<"Quadra"> | boolean
    arquibancada?: BoolWithAggregatesFilter<"Quadra"> | boolean
    coberta?: BoolWithAggregatesFilter<"Quadra"> | boolean
    acessibilidade?: BoolWithAggregatesFilter<"Quadra"> | boolean
    wifi?: BoolWithAggregatesFilter<"Quadra"> | boolean
    criado_em?: DateTimeWithAggregatesFilter<"Quadra"> | Date | string
  }

  export type LocacaoWhereInput = {
    AND?: LocacaoWhereInput | LocacaoWhereInput[]
    OR?: LocacaoWhereInput[]
    NOT?: LocacaoWhereInput | LocacaoWhereInput[]
    id?: IntFilter<"Locacao"> | number
    id_usuario?: IntFilter<"Locacao"> | number
    id_quadra?: IntFilter<"Locacao"> | number
    data?: IntFilter<"Locacao"> | number
    hora?: IntFilter<"Locacao"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    quadra?: XOR<QuadraScalarRelationFilter, QuadraWhereInput>
  }

  export type LocacaoOrderByWithRelationInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_quadra?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    quadra?: QuadraOrderByWithRelationInput
  }

  export type LocacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocacaoWhereInput | LocacaoWhereInput[]
    OR?: LocacaoWhereInput[]
    NOT?: LocacaoWhereInput | LocacaoWhereInput[]
    id_usuario?: IntFilter<"Locacao"> | number
    id_quadra?: IntFilter<"Locacao"> | number
    data?: IntFilter<"Locacao"> | number
    hora?: IntFilter<"Locacao"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    quadra?: XOR<QuadraScalarRelationFilter, QuadraWhereInput>
  }, "id">

  export type LocacaoOrderByWithAggregationInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_quadra?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    _count?: LocacaoCountOrderByAggregateInput
    _avg?: LocacaoAvgOrderByAggregateInput
    _max?: LocacaoMaxOrderByAggregateInput
    _min?: LocacaoMinOrderByAggregateInput
    _sum?: LocacaoSumOrderByAggregateInput
  }

  export type LocacaoScalarWhereWithAggregatesInput = {
    AND?: LocacaoScalarWhereWithAggregatesInput | LocacaoScalarWhereWithAggregatesInput[]
    OR?: LocacaoScalarWhereWithAggregatesInput[]
    NOT?: LocacaoScalarWhereWithAggregatesInput | LocacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Locacao"> | number
    id_usuario?: IntWithAggregatesFilter<"Locacao"> | number
    id_quadra?: IntWithAggregatesFilter<"Locacao"> | number
    data?: IntWithAggregatesFilter<"Locacao"> | number
    hora?: IntWithAggregatesFilter<"Locacao"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    nascimento: Date | string
    email: string
    cpf: string
    senha: string
    criado_em?: Date | string
    locacao?: LocacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    nascimento: Date | string
    email: string
    cpf: string
    senha: string
    criado_em?: Date | string
    locacao?: LocacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    locacao?: LocacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    locacao?: LocacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    nascimento: Date | string
    email: string
    cpf: string
    senha: string
    criado_em?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuadraCreateInput = {
    nomeLocal: string
    tipoQuadra: string
    localizacao: string
    imagemPrincipal: string
    imagemPri: string
    imagemSeg: string
    imagemTer: string
    telefone: string
    disponibilidade: string
    preco: number
    dimensoes: string
    iluminacao: boolean
    vestiarios: boolean
    bebedouro: boolean
    estacionamento: boolean
    arquibancada: boolean
    coberta: boolean
    acessibilidade: boolean
    wifi: boolean
    criado_em?: Date | string
    locacao?: LocacaoCreateNestedManyWithoutQuadraInput
  }

  export type QuadraUncheckedCreateInput = {
    id?: number
    nomeLocal: string
    tipoQuadra: string
    localizacao: string
    imagemPrincipal: string
    imagemPri: string
    imagemSeg: string
    imagemTer: string
    telefone: string
    disponibilidade: string
    preco: number
    dimensoes: string
    iluminacao: boolean
    vestiarios: boolean
    bebedouro: boolean
    estacionamento: boolean
    arquibancada: boolean
    coberta: boolean
    acessibilidade: boolean
    wifi: boolean
    criado_em?: Date | string
    locacao?: LocacaoUncheckedCreateNestedManyWithoutQuadraInput
  }

  export type QuadraUpdateInput = {
    nomeLocal?: StringFieldUpdateOperationsInput | string
    tipoQuadra?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    imagemPrincipal?: StringFieldUpdateOperationsInput | string
    imagemPri?: StringFieldUpdateOperationsInput | string
    imagemSeg?: StringFieldUpdateOperationsInput | string
    imagemTer?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    dimensoes?: StringFieldUpdateOperationsInput | string
    iluminacao?: BoolFieldUpdateOperationsInput | boolean
    vestiarios?: BoolFieldUpdateOperationsInput | boolean
    bebedouro?: BoolFieldUpdateOperationsInput | boolean
    estacionamento?: BoolFieldUpdateOperationsInput | boolean
    arquibancada?: BoolFieldUpdateOperationsInput | boolean
    coberta?: BoolFieldUpdateOperationsInput | boolean
    acessibilidade?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    locacao?: LocacaoUpdateManyWithoutQuadraNestedInput
  }

  export type QuadraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeLocal?: StringFieldUpdateOperationsInput | string
    tipoQuadra?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    imagemPrincipal?: StringFieldUpdateOperationsInput | string
    imagemPri?: StringFieldUpdateOperationsInput | string
    imagemSeg?: StringFieldUpdateOperationsInput | string
    imagemTer?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    dimensoes?: StringFieldUpdateOperationsInput | string
    iluminacao?: BoolFieldUpdateOperationsInput | boolean
    vestiarios?: BoolFieldUpdateOperationsInput | boolean
    bebedouro?: BoolFieldUpdateOperationsInput | boolean
    estacionamento?: BoolFieldUpdateOperationsInput | boolean
    arquibancada?: BoolFieldUpdateOperationsInput | boolean
    coberta?: BoolFieldUpdateOperationsInput | boolean
    acessibilidade?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    locacao?: LocacaoUncheckedUpdateManyWithoutQuadraNestedInput
  }

  export type QuadraCreateManyInput = {
    id?: number
    nomeLocal: string
    tipoQuadra: string
    localizacao: string
    imagemPrincipal: string
    imagemPri: string
    imagemSeg: string
    imagemTer: string
    telefone: string
    disponibilidade: string
    preco: number
    dimensoes: string
    iluminacao: boolean
    vestiarios: boolean
    bebedouro: boolean
    estacionamento: boolean
    arquibancada: boolean
    coberta: boolean
    acessibilidade: boolean
    wifi: boolean
    criado_em?: Date | string
  }

  export type QuadraUpdateManyMutationInput = {
    nomeLocal?: StringFieldUpdateOperationsInput | string
    tipoQuadra?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    imagemPrincipal?: StringFieldUpdateOperationsInput | string
    imagemPri?: StringFieldUpdateOperationsInput | string
    imagemSeg?: StringFieldUpdateOperationsInput | string
    imagemTer?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    dimensoes?: StringFieldUpdateOperationsInput | string
    iluminacao?: BoolFieldUpdateOperationsInput | boolean
    vestiarios?: BoolFieldUpdateOperationsInput | boolean
    bebedouro?: BoolFieldUpdateOperationsInput | boolean
    estacionamento?: BoolFieldUpdateOperationsInput | boolean
    arquibancada?: BoolFieldUpdateOperationsInput | boolean
    coberta?: BoolFieldUpdateOperationsInput | boolean
    acessibilidade?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuadraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeLocal?: StringFieldUpdateOperationsInput | string
    tipoQuadra?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    imagemPrincipal?: StringFieldUpdateOperationsInput | string
    imagemPri?: StringFieldUpdateOperationsInput | string
    imagemSeg?: StringFieldUpdateOperationsInput | string
    imagemTer?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    dimensoes?: StringFieldUpdateOperationsInput | string
    iluminacao?: BoolFieldUpdateOperationsInput | boolean
    vestiarios?: BoolFieldUpdateOperationsInput | boolean
    bebedouro?: BoolFieldUpdateOperationsInput | boolean
    estacionamento?: BoolFieldUpdateOperationsInput | boolean
    arquibancada?: BoolFieldUpdateOperationsInput | boolean
    coberta?: BoolFieldUpdateOperationsInput | boolean
    acessibilidade?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocacaoCreateInput = {
    data: number
    hora: number
    usuario: UsuarioCreateNestedOneWithoutLocacaoInput
    quadra: QuadraCreateNestedOneWithoutLocacaoInput
  }

  export type LocacaoUncheckedCreateInput = {
    id?: number
    id_usuario: number
    id_quadra: number
    data: number
    hora: number
  }

  export type LocacaoUpdateInput = {
    data?: IntFieldUpdateOperationsInput | number
    hora?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutLocacaoNestedInput
    quadra?: QuadraUpdateOneRequiredWithoutLocacaoNestedInput
  }

  export type LocacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_quadra?: IntFieldUpdateOperationsInput | number
    data?: IntFieldUpdateOperationsInput | number
    hora?: IntFieldUpdateOperationsInput | number
  }

  export type LocacaoCreateManyInput = {
    id?: number
    id_usuario: number
    id_quadra: number
    data: number
    hora: number
  }

  export type LocacaoUpdateManyMutationInput = {
    data?: IntFieldUpdateOperationsInput | number
    hora?: IntFieldUpdateOperationsInput | number
  }

  export type LocacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_quadra?: IntFieldUpdateOperationsInput | number
    data?: IntFieldUpdateOperationsInput | number
    hora?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LocacaoListRelationFilter = {
    every?: LocacaoWhereInput
    some?: LocacaoWhereInput
    none?: LocacaoWhereInput
  }

  export type LocacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    criado_em?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    criado_em?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    criado_em?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuadraOrderByRelevanceInput = {
    fields: QuadraOrderByRelevanceFieldEnum | QuadraOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuadraCountOrderByAggregateInput = {
    id?: SortOrder
    nomeLocal?: SortOrder
    tipoQuadra?: SortOrder
    localizacao?: SortOrder
    imagemPrincipal?: SortOrder
    imagemPri?: SortOrder
    imagemSeg?: SortOrder
    imagemTer?: SortOrder
    telefone?: SortOrder
    disponibilidade?: SortOrder
    preco?: SortOrder
    dimensoes?: SortOrder
    iluminacao?: SortOrder
    vestiarios?: SortOrder
    bebedouro?: SortOrder
    estacionamento?: SortOrder
    arquibancada?: SortOrder
    coberta?: SortOrder
    acessibilidade?: SortOrder
    wifi?: SortOrder
    criado_em?: SortOrder
  }

  export type QuadraAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type QuadraMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeLocal?: SortOrder
    tipoQuadra?: SortOrder
    localizacao?: SortOrder
    imagemPrincipal?: SortOrder
    imagemPri?: SortOrder
    imagemSeg?: SortOrder
    imagemTer?: SortOrder
    telefone?: SortOrder
    disponibilidade?: SortOrder
    preco?: SortOrder
    dimensoes?: SortOrder
    iluminacao?: SortOrder
    vestiarios?: SortOrder
    bebedouro?: SortOrder
    estacionamento?: SortOrder
    arquibancada?: SortOrder
    coberta?: SortOrder
    acessibilidade?: SortOrder
    wifi?: SortOrder
    criado_em?: SortOrder
  }

  export type QuadraMinOrderByAggregateInput = {
    id?: SortOrder
    nomeLocal?: SortOrder
    tipoQuadra?: SortOrder
    localizacao?: SortOrder
    imagemPrincipal?: SortOrder
    imagemPri?: SortOrder
    imagemSeg?: SortOrder
    imagemTer?: SortOrder
    telefone?: SortOrder
    disponibilidade?: SortOrder
    preco?: SortOrder
    dimensoes?: SortOrder
    iluminacao?: SortOrder
    vestiarios?: SortOrder
    bebedouro?: SortOrder
    estacionamento?: SortOrder
    arquibancada?: SortOrder
    coberta?: SortOrder
    acessibilidade?: SortOrder
    wifi?: SortOrder
    criado_em?: SortOrder
  }

  export type QuadraSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type QuadraScalarRelationFilter = {
    is?: QuadraWhereInput
    isNot?: QuadraWhereInput
  }

  export type LocacaoCountOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_quadra?: SortOrder
    data?: SortOrder
    hora?: SortOrder
  }

  export type LocacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_quadra?: SortOrder
    data?: SortOrder
    hora?: SortOrder
  }

  export type LocacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_quadra?: SortOrder
    data?: SortOrder
    hora?: SortOrder
  }

  export type LocacaoMinOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_quadra?: SortOrder
    data?: SortOrder
    hora?: SortOrder
  }

  export type LocacaoSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_quadra?: SortOrder
    data?: SortOrder
    hora?: SortOrder
  }

  export type LocacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LocacaoCreateWithoutUsuarioInput, LocacaoUncheckedCreateWithoutUsuarioInput> | LocacaoCreateWithoutUsuarioInput[] | LocacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutUsuarioInput | LocacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: LocacaoCreateManyUsuarioInputEnvelope
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
  }

  export type LocacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LocacaoCreateWithoutUsuarioInput, LocacaoUncheckedCreateWithoutUsuarioInput> | LocacaoCreateWithoutUsuarioInput[] | LocacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutUsuarioInput | LocacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: LocacaoCreateManyUsuarioInputEnvelope
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LocacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LocacaoCreateWithoutUsuarioInput, LocacaoUncheckedCreateWithoutUsuarioInput> | LocacaoCreateWithoutUsuarioInput[] | LocacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutUsuarioInput | LocacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: LocacaoUpsertWithWhereUniqueWithoutUsuarioInput | LocacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LocacaoCreateManyUsuarioInputEnvelope
    set?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    disconnect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    delete?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    update?: LocacaoUpdateWithWhereUniqueWithoutUsuarioInput | LocacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LocacaoUpdateManyWithWhereWithoutUsuarioInput | LocacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LocacaoScalarWhereInput | LocacaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LocacaoCreateWithoutUsuarioInput, LocacaoUncheckedCreateWithoutUsuarioInput> | LocacaoCreateWithoutUsuarioInput[] | LocacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutUsuarioInput | LocacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: LocacaoUpsertWithWhereUniqueWithoutUsuarioInput | LocacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LocacaoCreateManyUsuarioInputEnvelope
    set?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    disconnect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    delete?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    update?: LocacaoUpdateWithWhereUniqueWithoutUsuarioInput | LocacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LocacaoUpdateManyWithWhereWithoutUsuarioInput | LocacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LocacaoScalarWhereInput | LocacaoScalarWhereInput[]
  }

  export type LocacaoCreateNestedManyWithoutQuadraInput = {
    create?: XOR<LocacaoCreateWithoutQuadraInput, LocacaoUncheckedCreateWithoutQuadraInput> | LocacaoCreateWithoutQuadraInput[] | LocacaoUncheckedCreateWithoutQuadraInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutQuadraInput | LocacaoCreateOrConnectWithoutQuadraInput[]
    createMany?: LocacaoCreateManyQuadraInputEnvelope
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
  }

  export type LocacaoUncheckedCreateNestedManyWithoutQuadraInput = {
    create?: XOR<LocacaoCreateWithoutQuadraInput, LocacaoUncheckedCreateWithoutQuadraInput> | LocacaoCreateWithoutQuadraInput[] | LocacaoUncheckedCreateWithoutQuadraInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutQuadraInput | LocacaoCreateOrConnectWithoutQuadraInput[]
    createMany?: LocacaoCreateManyQuadraInputEnvelope
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LocacaoUpdateManyWithoutQuadraNestedInput = {
    create?: XOR<LocacaoCreateWithoutQuadraInput, LocacaoUncheckedCreateWithoutQuadraInput> | LocacaoCreateWithoutQuadraInput[] | LocacaoUncheckedCreateWithoutQuadraInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutQuadraInput | LocacaoCreateOrConnectWithoutQuadraInput[]
    upsert?: LocacaoUpsertWithWhereUniqueWithoutQuadraInput | LocacaoUpsertWithWhereUniqueWithoutQuadraInput[]
    createMany?: LocacaoCreateManyQuadraInputEnvelope
    set?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    disconnect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    delete?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    update?: LocacaoUpdateWithWhereUniqueWithoutQuadraInput | LocacaoUpdateWithWhereUniqueWithoutQuadraInput[]
    updateMany?: LocacaoUpdateManyWithWhereWithoutQuadraInput | LocacaoUpdateManyWithWhereWithoutQuadraInput[]
    deleteMany?: LocacaoScalarWhereInput | LocacaoScalarWhereInput[]
  }

  export type LocacaoUncheckedUpdateManyWithoutQuadraNestedInput = {
    create?: XOR<LocacaoCreateWithoutQuadraInput, LocacaoUncheckedCreateWithoutQuadraInput> | LocacaoCreateWithoutQuadraInput[] | LocacaoUncheckedCreateWithoutQuadraInput[]
    connectOrCreate?: LocacaoCreateOrConnectWithoutQuadraInput | LocacaoCreateOrConnectWithoutQuadraInput[]
    upsert?: LocacaoUpsertWithWhereUniqueWithoutQuadraInput | LocacaoUpsertWithWhereUniqueWithoutQuadraInput[]
    createMany?: LocacaoCreateManyQuadraInputEnvelope
    set?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    disconnect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    delete?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    connect?: LocacaoWhereUniqueInput | LocacaoWhereUniqueInput[]
    update?: LocacaoUpdateWithWhereUniqueWithoutQuadraInput | LocacaoUpdateWithWhereUniqueWithoutQuadraInput[]
    updateMany?: LocacaoUpdateManyWithWhereWithoutQuadraInput | LocacaoUpdateManyWithWhereWithoutQuadraInput[]
    deleteMany?: LocacaoScalarWhereInput | LocacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutLocacaoInput = {
    create?: XOR<UsuarioCreateWithoutLocacaoInput, UsuarioUncheckedCreateWithoutLocacaoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLocacaoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type QuadraCreateNestedOneWithoutLocacaoInput = {
    create?: XOR<QuadraCreateWithoutLocacaoInput, QuadraUncheckedCreateWithoutLocacaoInput>
    connectOrCreate?: QuadraCreateOrConnectWithoutLocacaoInput
    connect?: QuadraWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutLocacaoNestedInput = {
    create?: XOR<UsuarioCreateWithoutLocacaoInput, UsuarioUncheckedCreateWithoutLocacaoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLocacaoInput
    upsert?: UsuarioUpsertWithoutLocacaoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLocacaoInput, UsuarioUpdateWithoutLocacaoInput>, UsuarioUncheckedUpdateWithoutLocacaoInput>
  }

  export type QuadraUpdateOneRequiredWithoutLocacaoNestedInput = {
    create?: XOR<QuadraCreateWithoutLocacaoInput, QuadraUncheckedCreateWithoutLocacaoInput>
    connectOrCreate?: QuadraCreateOrConnectWithoutLocacaoInput
    upsert?: QuadraUpsertWithoutLocacaoInput
    connect?: QuadraWhereUniqueInput
    update?: XOR<XOR<QuadraUpdateToOneWithWhereWithoutLocacaoInput, QuadraUpdateWithoutLocacaoInput>, QuadraUncheckedUpdateWithoutLocacaoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LocacaoCreateWithoutUsuarioInput = {
    data: number
    hora: number
    quadra: QuadraCreateNestedOneWithoutLocacaoInput
  }

  export type LocacaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    id_quadra: number
    data: number
    hora: number
  }

  export type LocacaoCreateOrConnectWithoutUsuarioInput = {
    where: LocacaoWhereUniqueInput
    create: XOR<LocacaoCreateWithoutUsuarioInput, LocacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type LocacaoCreateManyUsuarioInputEnvelope = {
    data: LocacaoCreateManyUsuarioInput | LocacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type LocacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LocacaoWhereUniqueInput
    update: XOR<LocacaoUpdateWithoutUsuarioInput, LocacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LocacaoCreateWithoutUsuarioInput, LocacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type LocacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LocacaoWhereUniqueInput
    data: XOR<LocacaoUpdateWithoutUsuarioInput, LocacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type LocacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: LocacaoScalarWhereInput
    data: XOR<LocacaoUpdateManyMutationInput, LocacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type LocacaoScalarWhereInput = {
    AND?: LocacaoScalarWhereInput | LocacaoScalarWhereInput[]
    OR?: LocacaoScalarWhereInput[]
    NOT?: LocacaoScalarWhereInput | LocacaoScalarWhereInput[]
    id?: IntFilter<"Locacao"> | number
    id_usuario?: IntFilter<"Locacao"> | number
    id_quadra?: IntFilter<"Locacao"> | number
    data?: IntFilter<"Locacao"> | number
    hora?: IntFilter<"Locacao"> | number
  }

  export type LocacaoCreateWithoutQuadraInput = {
    data: number
    hora: number
    usuario: UsuarioCreateNestedOneWithoutLocacaoInput
  }

  export type LocacaoUncheckedCreateWithoutQuadraInput = {
    id?: number
    id_usuario: number
    data: number
    hora: number
  }

  export type LocacaoCreateOrConnectWithoutQuadraInput = {
    where: LocacaoWhereUniqueInput
    create: XOR<LocacaoCreateWithoutQuadraInput, LocacaoUncheckedCreateWithoutQuadraInput>
  }

  export type LocacaoCreateManyQuadraInputEnvelope = {
    data: LocacaoCreateManyQuadraInput | LocacaoCreateManyQuadraInput[]
    skipDuplicates?: boolean
  }

  export type LocacaoUpsertWithWhereUniqueWithoutQuadraInput = {
    where: LocacaoWhereUniqueInput
    update: XOR<LocacaoUpdateWithoutQuadraInput, LocacaoUncheckedUpdateWithoutQuadraInput>
    create: XOR<LocacaoCreateWithoutQuadraInput, LocacaoUncheckedCreateWithoutQuadraInput>
  }

  export type LocacaoUpdateWithWhereUniqueWithoutQuadraInput = {
    where: LocacaoWhereUniqueInput
    data: XOR<LocacaoUpdateWithoutQuadraInput, LocacaoUncheckedUpdateWithoutQuadraInput>
  }

  export type LocacaoUpdateManyWithWhereWithoutQuadraInput = {
    where: LocacaoScalarWhereInput
    data: XOR<LocacaoUpdateManyMutationInput, LocacaoUncheckedUpdateManyWithoutQuadraInput>
  }

  export type UsuarioCreateWithoutLocacaoInput = {
    nome: string
    nascimento: Date | string
    email: string
    cpf: string
    senha: string
    criado_em?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutLocacaoInput = {
    id?: number
    nome: string
    nascimento: Date | string
    email: string
    cpf: string
    senha: string
    criado_em?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutLocacaoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLocacaoInput, UsuarioUncheckedCreateWithoutLocacaoInput>
  }

  export type QuadraCreateWithoutLocacaoInput = {
    nomeLocal: string
    tipoQuadra: string
    localizacao: string
    imagemPrincipal: string
    imagemPri: string
    imagemSeg: string
    imagemTer: string
    telefone: string
    disponibilidade: string
    preco: number
    dimensoes: string
    iluminacao: boolean
    vestiarios: boolean
    bebedouro: boolean
    estacionamento: boolean
    arquibancada: boolean
    coberta: boolean
    acessibilidade: boolean
    wifi: boolean
    criado_em?: Date | string
  }

  export type QuadraUncheckedCreateWithoutLocacaoInput = {
    id?: number
    nomeLocal: string
    tipoQuadra: string
    localizacao: string
    imagemPrincipal: string
    imagemPri: string
    imagemSeg: string
    imagemTer: string
    telefone: string
    disponibilidade: string
    preco: number
    dimensoes: string
    iluminacao: boolean
    vestiarios: boolean
    bebedouro: boolean
    estacionamento: boolean
    arquibancada: boolean
    coberta: boolean
    acessibilidade: boolean
    wifi: boolean
    criado_em?: Date | string
  }

  export type QuadraCreateOrConnectWithoutLocacaoInput = {
    where: QuadraWhereUniqueInput
    create: XOR<QuadraCreateWithoutLocacaoInput, QuadraUncheckedCreateWithoutLocacaoInput>
  }

  export type UsuarioUpsertWithoutLocacaoInput = {
    update: XOR<UsuarioUpdateWithoutLocacaoInput, UsuarioUncheckedUpdateWithoutLocacaoInput>
    create: XOR<UsuarioCreateWithoutLocacaoInput, UsuarioUncheckedCreateWithoutLocacaoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLocacaoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLocacaoInput, UsuarioUncheckedUpdateWithoutLocacaoInput>
  }

  export type UsuarioUpdateWithoutLocacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutLocacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuadraUpsertWithoutLocacaoInput = {
    update: XOR<QuadraUpdateWithoutLocacaoInput, QuadraUncheckedUpdateWithoutLocacaoInput>
    create: XOR<QuadraCreateWithoutLocacaoInput, QuadraUncheckedCreateWithoutLocacaoInput>
    where?: QuadraWhereInput
  }

  export type QuadraUpdateToOneWithWhereWithoutLocacaoInput = {
    where?: QuadraWhereInput
    data: XOR<QuadraUpdateWithoutLocacaoInput, QuadraUncheckedUpdateWithoutLocacaoInput>
  }

  export type QuadraUpdateWithoutLocacaoInput = {
    nomeLocal?: StringFieldUpdateOperationsInput | string
    tipoQuadra?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    imagemPrincipal?: StringFieldUpdateOperationsInput | string
    imagemPri?: StringFieldUpdateOperationsInput | string
    imagemSeg?: StringFieldUpdateOperationsInput | string
    imagemTer?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    dimensoes?: StringFieldUpdateOperationsInput | string
    iluminacao?: BoolFieldUpdateOperationsInput | boolean
    vestiarios?: BoolFieldUpdateOperationsInput | boolean
    bebedouro?: BoolFieldUpdateOperationsInput | boolean
    estacionamento?: BoolFieldUpdateOperationsInput | boolean
    arquibancada?: BoolFieldUpdateOperationsInput | boolean
    coberta?: BoolFieldUpdateOperationsInput | boolean
    acessibilidade?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuadraUncheckedUpdateWithoutLocacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeLocal?: StringFieldUpdateOperationsInput | string
    tipoQuadra?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    imagemPrincipal?: StringFieldUpdateOperationsInput | string
    imagemPri?: StringFieldUpdateOperationsInput | string
    imagemSeg?: StringFieldUpdateOperationsInput | string
    imagemTer?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    dimensoes?: StringFieldUpdateOperationsInput | string
    iluminacao?: BoolFieldUpdateOperationsInput | boolean
    vestiarios?: BoolFieldUpdateOperationsInput | boolean
    bebedouro?: BoolFieldUpdateOperationsInput | boolean
    estacionamento?: BoolFieldUpdateOperationsInput | boolean
    arquibancada?: BoolFieldUpdateOperationsInput | boolean
    coberta?: BoolFieldUpdateOperationsInput | boolean
    acessibilidade?: BoolFieldUpdateOperationsInput | boolean
    wifi?: BoolFieldUpdateOperationsInput | boolean
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocacaoCreateManyUsuarioInput = {
    id?: number
    id_quadra: number
    data: number
    hora: number
  }

  export type LocacaoUpdateWithoutUsuarioInput = {
    data?: IntFieldUpdateOperationsInput | number
    hora?: IntFieldUpdateOperationsInput | number
    quadra?: QuadraUpdateOneRequiredWithoutLocacaoNestedInput
  }

  export type LocacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_quadra?: IntFieldUpdateOperationsInput | number
    data?: IntFieldUpdateOperationsInput | number
    hora?: IntFieldUpdateOperationsInput | number
  }

  export type LocacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_quadra?: IntFieldUpdateOperationsInput | number
    data?: IntFieldUpdateOperationsInput | number
    hora?: IntFieldUpdateOperationsInput | number
  }

  export type LocacaoCreateManyQuadraInput = {
    id?: number
    id_usuario: number
    data: number
    hora: number
  }

  export type LocacaoUpdateWithoutQuadraInput = {
    data?: IntFieldUpdateOperationsInput | number
    hora?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutLocacaoNestedInput
  }

  export type LocacaoUncheckedUpdateWithoutQuadraInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data?: IntFieldUpdateOperationsInput | number
    hora?: IntFieldUpdateOperationsInput | number
  }

  export type LocacaoUncheckedUpdateManyWithoutQuadraInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data?: IntFieldUpdateOperationsInput | number
    hora?: IntFieldUpdateOperationsInput | number
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