
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
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Fnb
 * 
 */
export type Fnb = $Result.DefaultSelection<Prisma.$FnbPayload>
/**
 * Model FnbTrackStock
 * 
 */
export type FnbTrackStock = $Result.DefaultSelection<Prisma.$FnbTrackStockPayload>
/**
 * Model FnbOrder
 * 
 */
export type FnbOrder = $Result.DefaultSelection<Prisma.$FnbOrderPayload>
/**
 * Model FnbItem
 * 
 */
export type FnbItem = $Result.DefaultSelection<Prisma.$FnbItemPayload>
/**
 * Model Companion
 * 
 */
export type Companion = $Result.DefaultSelection<Prisma.$CompanionPayload>
/**
 * Model CompanionOrder
 * 
 */
export type CompanionOrder = $Result.DefaultSelection<Prisma.$CompanionOrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const RoomStatus: {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE',
  OFFLINE: 'OFFLINE',
  DISABLED: 'DISABLED'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const TransactionStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCEL: 'CANCEL',
  CLOSE: 'CLOSE'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const FnbCategory: {
  FOOD: 'FOOD',
  DRINK: 'DRINK',
  SNACK: 'SNACK',
  OTHER: 'OTHER'
};

export type FnbCategory = (typeof FnbCategory)[keyof typeof FnbCategory]


export const PaymentMethod: {
  CASH: 'CASH',
  TRANSFER: 'TRANSFER',
  QRIS: 'QRIS'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const OrderStatus: {
  DRAFT: 'DRAFT',
  SEND: 'SEND',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const TypeTrackStock: {
  IN: 'IN',
  OUT: 'OUT'
};

export type TypeTrackStock = (typeof TypeTrackStock)[keyof typeof TypeTrackStock]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type FnbCategory = $Enums.FnbCategory

export const FnbCategory: typeof $Enums.FnbCategory

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type TypeTrackStock = $Enums.TypeTrackStock

export const TypeTrackStock: typeof $Enums.TypeTrackStock

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
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.fnb`: Exposes CRUD operations for the **Fnb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fnbs
    * const fnbs = await prisma.fnb.findMany()
    * ```
    */
  get fnb(): Prisma.FnbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fnbTrackStock`: Exposes CRUD operations for the **FnbTrackStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FnbTrackStocks
    * const fnbTrackStocks = await prisma.fnbTrackStock.findMany()
    * ```
    */
  get fnbTrackStock(): Prisma.FnbTrackStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fnbOrder`: Exposes CRUD operations for the **FnbOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FnbOrders
    * const fnbOrders = await prisma.fnbOrder.findMany()
    * ```
    */
  get fnbOrder(): Prisma.FnbOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fnbItem`: Exposes CRUD operations for the **FnbItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FnbItems
    * const fnbItems = await prisma.fnbItem.findMany()
    * ```
    */
  get fnbItem(): Prisma.FnbItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companion`: Exposes CRUD operations for the **Companion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companions
    * const companions = await prisma.companion.findMany()
    * ```
    */
  get companion(): Prisma.CompanionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companionOrder`: Exposes CRUD operations for the **CompanionOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanionOrders
    * const companionOrders = await prisma.companionOrder.findMany()
    * ```
    */
  get companionOrder(): Prisma.CompanionOrderDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    Setting: 'Setting',
    Room: 'Room',
    Customer: 'Customer',
    Session: 'Session',
    Transaction: 'Transaction',
    Payment: 'Payment',
    Fnb: 'Fnb',
    FnbTrackStock: 'FnbTrackStock',
    FnbOrder: 'FnbOrder',
    FnbItem: 'FnbItem',
    Companion: 'Companion',
    CompanionOrder: 'CompanionOrder'
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
      modelProps: "user" | "setting" | "room" | "customer" | "session" | "transaction" | "payment" | "fnb" | "fnbTrackStock" | "fnbOrder" | "fnbItem" | "companion" | "companionOrder"
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
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
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
      Fnb: {
        payload: Prisma.$FnbPayload<ExtArgs>
        fields: Prisma.FnbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FnbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FnbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbPayload>
          }
          findFirst: {
            args: Prisma.FnbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FnbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbPayload>
          }
          findMany: {
            args: Prisma.FnbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbPayload>[]
          }
          create: {
            args: Prisma.FnbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbPayload>
          }
          createMany: {
            args: Prisma.FnbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FnbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbPayload>
          }
          update: {
            args: Prisma.FnbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbPayload>
          }
          deleteMany: {
            args: Prisma.FnbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FnbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FnbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbPayload>
          }
          aggregate: {
            args: Prisma.FnbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFnb>
          }
          groupBy: {
            args: Prisma.FnbGroupByArgs<ExtArgs>
            result: $Utils.Optional<FnbGroupByOutputType>[]
          }
          count: {
            args: Prisma.FnbCountArgs<ExtArgs>
            result: $Utils.Optional<FnbCountAggregateOutputType> | number
          }
        }
      }
      FnbTrackStock: {
        payload: Prisma.$FnbTrackStockPayload<ExtArgs>
        fields: Prisma.FnbTrackStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FnbTrackStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbTrackStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FnbTrackStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbTrackStockPayload>
          }
          findFirst: {
            args: Prisma.FnbTrackStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbTrackStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FnbTrackStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbTrackStockPayload>
          }
          findMany: {
            args: Prisma.FnbTrackStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbTrackStockPayload>[]
          }
          create: {
            args: Prisma.FnbTrackStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbTrackStockPayload>
          }
          createMany: {
            args: Prisma.FnbTrackStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FnbTrackStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbTrackStockPayload>
          }
          update: {
            args: Prisma.FnbTrackStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbTrackStockPayload>
          }
          deleteMany: {
            args: Prisma.FnbTrackStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FnbTrackStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FnbTrackStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbTrackStockPayload>
          }
          aggregate: {
            args: Prisma.FnbTrackStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFnbTrackStock>
          }
          groupBy: {
            args: Prisma.FnbTrackStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<FnbTrackStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.FnbTrackStockCountArgs<ExtArgs>
            result: $Utils.Optional<FnbTrackStockCountAggregateOutputType> | number
          }
        }
      }
      FnbOrder: {
        payload: Prisma.$FnbOrderPayload<ExtArgs>
        fields: Prisma.FnbOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FnbOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FnbOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbOrderPayload>
          }
          findFirst: {
            args: Prisma.FnbOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FnbOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbOrderPayload>
          }
          findMany: {
            args: Prisma.FnbOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbOrderPayload>[]
          }
          create: {
            args: Prisma.FnbOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbOrderPayload>
          }
          createMany: {
            args: Prisma.FnbOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FnbOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbOrderPayload>
          }
          update: {
            args: Prisma.FnbOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbOrderPayload>
          }
          deleteMany: {
            args: Prisma.FnbOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FnbOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FnbOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbOrderPayload>
          }
          aggregate: {
            args: Prisma.FnbOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFnbOrder>
          }
          groupBy: {
            args: Prisma.FnbOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FnbOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FnbOrderCountArgs<ExtArgs>
            result: $Utils.Optional<FnbOrderCountAggregateOutputType> | number
          }
        }
      }
      FnbItem: {
        payload: Prisma.$FnbItemPayload<ExtArgs>
        fields: Prisma.FnbItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FnbItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FnbItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbItemPayload>
          }
          findFirst: {
            args: Prisma.FnbItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FnbItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbItemPayload>
          }
          findMany: {
            args: Prisma.FnbItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbItemPayload>[]
          }
          create: {
            args: Prisma.FnbItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbItemPayload>
          }
          createMany: {
            args: Prisma.FnbItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FnbItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbItemPayload>
          }
          update: {
            args: Prisma.FnbItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbItemPayload>
          }
          deleteMany: {
            args: Prisma.FnbItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FnbItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FnbItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FnbItemPayload>
          }
          aggregate: {
            args: Prisma.FnbItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFnbItem>
          }
          groupBy: {
            args: Prisma.FnbItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FnbItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FnbItemCountArgs<ExtArgs>
            result: $Utils.Optional<FnbItemCountAggregateOutputType> | number
          }
        }
      }
      Companion: {
        payload: Prisma.$CompanionPayload<ExtArgs>
        fields: Prisma.CompanionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          findFirst: {
            args: Prisma.CompanionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          findMany: {
            args: Prisma.CompanionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>[]
          }
          create: {
            args: Prisma.CompanionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          createMany: {
            args: Prisma.CompanionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          update: {
            args: Prisma.CompanionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          deleteMany: {
            args: Prisma.CompanionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          aggregate: {
            args: Prisma.CompanionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanion>
          }
          groupBy: {
            args: Prisma.CompanionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanionCountArgs<ExtArgs>
            result: $Utils.Optional<CompanionCountAggregateOutputType> | number
          }
        }
      }
      CompanionOrder: {
        payload: Prisma.$CompanionOrderPayload<ExtArgs>
        fields: Prisma.CompanionOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanionOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanionOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionOrderPayload>
          }
          findFirst: {
            args: Prisma.CompanionOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanionOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionOrderPayload>
          }
          findMany: {
            args: Prisma.CompanionOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionOrderPayload>[]
          }
          create: {
            args: Prisma.CompanionOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionOrderPayload>
          }
          createMany: {
            args: Prisma.CompanionOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanionOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionOrderPayload>
          }
          update: {
            args: Prisma.CompanionOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionOrderPayload>
          }
          deleteMany: {
            args: Prisma.CompanionOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanionOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanionOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionOrderPayload>
          }
          aggregate: {
            args: Prisma.CompanionOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanionOrder>
          }
          groupBy: {
            args: Prisma.CompanionOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanionOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanionOrderCountArgs<ExtArgs>
            result: $Utils.Optional<CompanionOrderCountAggregateOutputType> | number
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
    setting?: SettingOmit
    room?: RoomOmit
    customer?: CustomerOmit
    session?: SessionOmit
    transaction?: TransactionOmit
    payment?: PaymentOmit
    fnb?: FnbOmit
    fnbTrackStock?: FnbTrackStockOmit
    fnbOrder?: FnbOrderOmit
    fnbItem?: FnbItemOmit
    companion?: CompanionOmit
    companionOrder?: CompanionOrderOmit
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
    payment: number
    fnbTrackStock: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | UserCountOutputTypeCountPaymentArgs
    fnbTrackStock?: boolean | UserCountOutputTypeCountFnbTrackStockArgs
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
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFnbTrackStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FnbTrackStockWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    session: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | RoomCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    session: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CustomerCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    transaction: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | SessionCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    fnbOrder: number
    payment: number
    companionOrder: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fnbOrder?: boolean | TransactionCountOutputTypeCountFnbOrderArgs
    payment?: boolean | TransactionCountOutputTypeCountPaymentArgs
    companionOrder?: boolean | TransactionCountOutputTypeCountCompanionOrderArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountFnbOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FnbOrderWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountCompanionOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionOrderWhereInput
  }


  /**
   * Count Type FnbCountOutputType
   */

  export type FnbCountOutputType = {
    fnbTrackStock: number
    fnbItem: number
  }

  export type FnbCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fnbTrackStock?: boolean | FnbCountOutputTypeCountFnbTrackStockArgs
    fnbItem?: boolean | FnbCountOutputTypeCountFnbItemArgs
  }

  // Custom InputTypes
  /**
   * FnbCountOutputType without action
   */
  export type FnbCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbCountOutputType
     */
    select?: FnbCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FnbCountOutputType without action
   */
  export type FnbCountOutputTypeCountFnbTrackStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FnbTrackStockWhereInput
  }

  /**
   * FnbCountOutputType without action
   */
  export type FnbCountOutputTypeCountFnbItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FnbItemWhereInput
  }


  /**
   * Count Type FnbItemCountOutputType
   */

  export type FnbItemCountOutputType = {
    fnbOrder: number
  }

  export type FnbItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fnbOrder?: boolean | FnbItemCountOutputTypeCountFnbOrderArgs
  }

  // Custom InputTypes
  /**
   * FnbItemCountOutputType without action
   */
  export type FnbItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItemCountOutputType
     */
    select?: FnbItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FnbItemCountOutputType without action
   */
  export type FnbItemCountOutputTypeCountFnbOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FnbOrderWhereInput
  }


  /**
   * Count Type CompanionCountOutputType
   */

  export type CompanionCountOutputType = {
    companionOrder: number
  }

  export type CompanionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companionOrder?: boolean | CompanionCountOutputTypeCountCompanionOrderArgs
  }

  // Custom InputTypes
  /**
   * CompanionCountOutputType without action
   */
  export type CompanionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionCountOutputType
     */
    select?: CompanionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanionCountOutputType without action
   */
  export type CompanionCountOutputTypeCountCompanionOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionOrderWhereInput
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.UserRole | null
    deleted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.UserRole | null
    deleted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    deleted: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    deleted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    deleted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    deleted?: true
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
    username: string
    password: string
    role: $Enums.UserRole
    deleted: boolean
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
    username?: boolean
    password?: boolean
    role?: boolean
    deleted?: boolean
    payment?: boolean | User$paymentArgs<ExtArgs>
    fnbTrackStock?: boolean | User$fnbTrackStockArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    deleted?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "deleted", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | User$paymentArgs<ExtArgs>
    fnbTrackStock?: boolean | User$fnbTrackStockArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>[]
      fnbTrackStock: Prisma.$FnbTrackStockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: $Enums.UserRole
      deleted: boolean
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
    payment<T extends User$paymentArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fnbTrackStock<T extends User$fnbTrackStockArgs<ExtArgs> = {}>(args?: Subset<T, User$fnbTrackStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly deleted: FieldRef<"User", 'Boolean'>
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
   * User.payment
   */
  export type User$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.fnbTrackStock
   */
  export type User$fnbTrackStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    where?: FnbTrackStockWhereInput
    orderBy?: FnbTrackStockOrderByWithRelationInput | FnbTrackStockOrderByWithRelationInput[]
    cursor?: FnbTrackStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FnbTrackStockScalarFieldEnum | FnbTrackStockScalarFieldEnum[]
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
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingAvgAggregateOutputType = {
    id: number | null
    taxPercent: Decimal | null
    servicePercent: Decimal | null
  }

  export type SettingSumAggregateOutputType = {
    id: number | null
    taxPercent: Decimal | null
    servicePercent: Decimal | null
  }

  export type SettingMinAggregateOutputType = {
    id: number | null
    isActive: boolean | null
    taxPercent: Decimal | null
    servicePercent: Decimal | null
  }

  export type SettingMaxAggregateOutputType = {
    id: number | null
    isActive: boolean | null
    taxPercent: Decimal | null
    servicePercent: Decimal | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    isActive: number
    taxPercent: number
    servicePercent: number
    _all: number
  }


  export type SettingAvgAggregateInputType = {
    id?: true
    taxPercent?: true
    servicePercent?: true
  }

  export type SettingSumAggregateInputType = {
    id?: true
    taxPercent?: true
    servicePercent?: true
  }

  export type SettingMinAggregateInputType = {
    id?: true
    isActive?: true
    taxPercent?: true
    servicePercent?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    isActive?: true
    taxPercent?: true
    servicePercent?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    isActive?: true
    taxPercent?: true
    servicePercent?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _avg?: SettingAvgAggregateInputType
    _sum?: SettingSumAggregateInputType
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: number
    isActive: boolean
    taxPercent: Decimal
    servicePercent: Decimal
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isActive?: boolean
    taxPercent?: boolean
    servicePercent?: boolean
  }, ExtArgs["result"]["setting"]>



  export type SettingSelectScalar = {
    id?: boolean
    isActive?: boolean
    taxPercent?: boolean
    servicePercent?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isActive" | "taxPercent" | "servicePercent", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isActive: boolean
      taxPercent: Prisma.Decimal
      servicePercent: Prisma.Decimal
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'Int'>
    readonly isActive: FieldRef<"Setting", 'Boolean'>
    readonly taxPercent: FieldRef<"Setting", 'Decimal'>
    readonly servicePercent: FieldRef<"Setting", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data?: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
    hourlyRate: Decimal | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    capacity: number | null
    hourlyRate: Decimal | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    type: string | null
    hourlyRate: Decimal | null
    status: $Enums.RoomStatus | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    type: string | null
    hourlyRate: Decimal | null
    status: $Enums.RoomStatus | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    type: number
    hourlyRate: number
    status: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    capacity?: true
    hourlyRate?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    capacity?: true
    hourlyRate?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    type?: true
    hourlyRate?: true
    status?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    type?: true
    hourlyRate?: true
    status?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    type?: true
    hourlyRate?: true
    status?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    name: string
    capacity: number
    type: string
    hourlyRate: Decimal
    status: $Enums.RoomStatus
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    type?: boolean
    hourlyRate?: boolean
    status?: boolean
    session?: boolean | Room$sessionArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    type?: boolean
    hourlyRate?: boolean
    status?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity" | "type" | "hourlyRate" | "status", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | Room$sessionArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      capacity: number
      type: string
      hourlyRate: Prisma.Decimal
      status: $Enums.RoomStatus
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends Room$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Room$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly name: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly type: FieldRef<"Room", 'String'>
    readonly hourlyRate: FieldRef<"Room", 'Decimal'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.session
   */
  export type Room$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    session?: boolean | Customer$sessionArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | Customer$sessionArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends Customer$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Customer$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.session
   */
  export type Customer$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    roomId: number | null
    durationMinute: number | null
    extraMinute: number | null
    freeMinute: number | null
    userId: number | null
    userOut: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    roomId: number | null
    durationMinute: number | null
    extraMinute: number | null
    freeMinute: number | null
    userId: number | null
    userOut: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    roomId: number | null
    startTime: Date | null
    endTime: Date | null
    closed: boolean | null
    durationMinute: number | null
    extraMinute: number | null
    freeMinute: number | null
    deleted: boolean | null
    userId: number | null
    userOut: number | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    roomId: number | null
    startTime: Date | null
    endTime: Date | null
    closed: boolean | null
    durationMinute: number | null
    extraMinute: number | null
    freeMinute: number | null
    deleted: boolean | null
    userId: number | null
    userOut: number | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    customerId: number
    roomId: number
    startTime: number
    endTime: number
    closed: number
    durationMinute: number
    extraMinute: number
    freeMinute: number
    deleted: number
    userId: number
    userOut: number
    createdAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    customerId?: true
    roomId?: true
    durationMinute?: true
    extraMinute?: true
    freeMinute?: true
    userId?: true
    userOut?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    customerId?: true
    roomId?: true
    durationMinute?: true
    extraMinute?: true
    freeMinute?: true
    userId?: true
    userOut?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    customerId?: true
    roomId?: true
    startTime?: true
    endTime?: true
    closed?: true
    durationMinute?: true
    extraMinute?: true
    freeMinute?: true
    deleted?: true
    userId?: true
    userOut?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    customerId?: true
    roomId?: true
    startTime?: true
    endTime?: true
    closed?: true
    durationMinute?: true
    extraMinute?: true
    freeMinute?: true
    deleted?: true
    userId?: true
    userOut?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    customerId?: true
    roomId?: true
    startTime?: true
    endTime?: true
    closed?: true
    durationMinute?: true
    extraMinute?: true
    freeMinute?: true
    deleted?: true
    userId?: true
    userOut?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    customerId: number
    roomId: number
    startTime: Date
    endTime: Date
    closed: boolean
    durationMinute: number
    extraMinute: number
    freeMinute: number
    deleted: boolean
    userId: number
    userOut: number | null
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    roomId?: boolean
    startTime?: boolean
    endTime?: boolean
    closed?: boolean
    durationMinute?: boolean
    extraMinute?: boolean
    freeMinute?: boolean
    deleted?: boolean
    userId?: boolean
    userOut?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    transaction?: boolean | Session$transactionArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    customerId?: boolean
    roomId?: boolean
    startTime?: boolean
    endTime?: boolean
    closed?: boolean
    durationMinute?: boolean
    extraMinute?: boolean
    freeMinute?: boolean
    deleted?: boolean
    userId?: boolean
    userOut?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "roomId" | "startTime" | "endTime" | "closed" | "durationMinute" | "extraMinute" | "freeMinute" | "deleted" | "userId" | "userOut" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    transaction?: boolean | Session$transactionArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      roomId: number
      startTime: Date
      endTime: Date
      closed: boolean
      durationMinute: number
      extraMinute: number
      freeMinute: number
      deleted: boolean
      userId: number
      userOut: number | null
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends Session$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Session$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly customerId: FieldRef<"Session", 'Int'>
    readonly roomId: FieldRef<"Session", 'Int'>
    readonly startTime: FieldRef<"Session", 'DateTime'>
    readonly endTime: FieldRef<"Session", 'DateTime'>
    readonly closed: FieldRef<"Session", 'Boolean'>
    readonly durationMinute: FieldRef<"Session", 'Int'>
    readonly extraMinute: FieldRef<"Session", 'Int'>
    readonly freeMinute: FieldRef<"Session", 'Int'>
    readonly deleted: FieldRef<"Session", 'Boolean'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly userOut: FieldRef<"Session", 'Int'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.transaction
   */
  export type Session$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    sessionId: number | null
    roomTotal: Decimal | null
    roomDiscount: Decimal | null
    fnbTotal: Decimal | null
    companionTotal: Decimal | null
    subTotal: Decimal | null
    tax: Decimal | null
    service: Decimal | null
    grandTotal: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    sessionId: number | null
    roomTotal: Decimal | null
    roomDiscount: Decimal | null
    fnbTotal: Decimal | null
    companionTotal: Decimal | null
    subTotal: Decimal | null
    tax: Decimal | null
    service: Decimal | null
    grandTotal: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    sessionId: number | null
    roomTotal: Decimal | null
    roomDiscount: Decimal | null
    fnbTotal: Decimal | null
    companionTotal: Decimal | null
    subTotal: Decimal | null
    tax: Decimal | null
    service: Decimal | null
    grandTotal: Decimal | null
    note: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    sessionId: number | null
    roomTotal: Decimal | null
    roomDiscount: Decimal | null
    fnbTotal: Decimal | null
    companionTotal: Decimal | null
    subTotal: Decimal | null
    tax: Decimal | null
    service: Decimal | null
    grandTotal: Decimal | null
    note: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    sessionId: number
    roomTotal: number
    roomDiscount: number
    fnbTotal: number
    companionTotal: number
    subTotal: number
    tax: number
    service: number
    grandTotal: number
    note: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    sessionId?: true
    roomTotal?: true
    roomDiscount?: true
    fnbTotal?: true
    companionTotal?: true
    subTotal?: true
    tax?: true
    service?: true
    grandTotal?: true
  }

  export type TransactionSumAggregateInputType = {
    sessionId?: true
    roomTotal?: true
    roomDiscount?: true
    fnbTotal?: true
    companionTotal?: true
    subTotal?: true
    tax?: true
    service?: true
    grandTotal?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    sessionId?: true
    roomTotal?: true
    roomDiscount?: true
    fnbTotal?: true
    companionTotal?: true
    subTotal?: true
    tax?: true
    service?: true
    grandTotal?: true
    note?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    sessionId?: true
    roomTotal?: true
    roomDiscount?: true
    fnbTotal?: true
    companionTotal?: true
    subTotal?: true
    tax?: true
    service?: true
    grandTotal?: true
    note?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    sessionId?: true
    roomTotal?: true
    roomDiscount?: true
    fnbTotal?: true
    companionTotal?: true
    subTotal?: true
    tax?: true
    service?: true
    grandTotal?: true
    note?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    sessionId: number
    roomTotal: Decimal
    roomDiscount: Decimal
    fnbTotal: Decimal
    companionTotal: Decimal
    subTotal: Decimal
    tax: Decimal
    service: Decimal
    grandTotal: Decimal
    note: string | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    roomTotal?: boolean
    roomDiscount?: boolean
    fnbTotal?: boolean
    companionTotal?: boolean
    subTotal?: boolean
    tax?: boolean
    service?: boolean
    grandTotal?: boolean
    note?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    fnbOrder?: boolean | Transaction$fnbOrderArgs<ExtArgs>
    payment?: boolean | Transaction$paymentArgs<ExtArgs>
    companionOrder?: boolean | Transaction$companionOrderArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type TransactionSelectScalar = {
    id?: boolean
    sessionId?: boolean
    roomTotal?: boolean
    roomDiscount?: boolean
    fnbTotal?: boolean
    companionTotal?: boolean
    subTotal?: boolean
    tax?: boolean
    service?: boolean
    grandTotal?: boolean
    note?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "roomTotal" | "roomDiscount" | "fnbTotal" | "companionTotal" | "subTotal" | "tax" | "service" | "grandTotal" | "note", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    fnbOrder?: boolean | Transaction$fnbOrderArgs<ExtArgs>
    payment?: boolean | Transaction$paymentArgs<ExtArgs>
    companionOrder?: boolean | Transaction$companionOrderArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      fnbOrder: Prisma.$FnbOrderPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs>[]
      companionOrder: Prisma.$CompanionOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: number
      roomTotal: Prisma.Decimal
      roomDiscount: Prisma.Decimal
      fnbTotal: Prisma.Decimal
      companionTotal: Prisma.Decimal
      subTotal: Prisma.Decimal
      tax: Prisma.Decimal
      service: Prisma.Decimal
      grandTotal: Prisma.Decimal
      note: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fnbOrder<T extends Transaction$fnbOrderArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$fnbOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Transaction$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companionOrder<T extends Transaction$companionOrderArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$companionOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly sessionId: FieldRef<"Transaction", 'Int'>
    readonly roomTotal: FieldRef<"Transaction", 'Decimal'>
    readonly roomDiscount: FieldRef<"Transaction", 'Decimal'>
    readonly fnbTotal: FieldRef<"Transaction", 'Decimal'>
    readonly companionTotal: FieldRef<"Transaction", 'Decimal'>
    readonly subTotal: FieldRef<"Transaction", 'Decimal'>
    readonly tax: FieldRef<"Transaction", 'Decimal'>
    readonly service: FieldRef<"Transaction", 'Decimal'>
    readonly grandTotal: FieldRef<"Transaction", 'Decimal'>
    readonly note: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.fnbOrder
   */
  export type Transaction$fnbOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    where?: FnbOrderWhereInput
    orderBy?: FnbOrderOrderByWithRelationInput | FnbOrderOrderByWithRelationInput[]
    cursor?: FnbOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FnbOrderScalarFieldEnum | FnbOrderScalarFieldEnum[]
  }

  /**
   * Transaction.payment
   */
  export type Transaction$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Transaction.companionOrder
   */
  export type Transaction$companionOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    where?: CompanionOrderWhereInput
    orderBy?: CompanionOrderOrderByWithRelationInput | CompanionOrderOrderByWithRelationInput[]
    cursor?: CompanionOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanionOrderScalarFieldEnum | CompanionOrderScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
    amount: Decimal | null
    change: Decimal | null
    userId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    change: Decimal | null
    userId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    amount: Decimal | null
    change: Decimal | null
    paidAt: Date | null
    userId: number | null
    note: string | null
    transactionId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    amount: Decimal | null
    change: Decimal | null
    paidAt: Date | null
    userId: number | null
    note: string | null
    transactionId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    method: number
    status: number
    amount: number
    change: number
    paidAt: number
    userId: number
    note: number
    transactionId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amount?: true
    change?: true
    userId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amount?: true
    change?: true
    userId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    method?: true
    status?: true
    amount?: true
    change?: true
    paidAt?: true
    userId?: true
    note?: true
    transactionId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    method?: true
    status?: true
    amount?: true
    change?: true
    paidAt?: true
    userId?: true
    note?: true
    transactionId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    method?: true
    status?: true
    amount?: true
    change?: true
    paidAt?: true
    userId?: true
    note?: true
    transactionId?: true
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
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    amount: Decimal
    change: Decimal
    paidAt: Date | null
    userId: number
    note: string | null
    transactionId: string
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
    method?: boolean
    status?: boolean
    amount?: boolean
    change?: boolean
    paidAt?: boolean
    userId?: boolean
    note?: boolean
    transactionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    method?: boolean
    status?: boolean
    amount?: boolean
    change?: boolean
    paidAt?: boolean
    userId?: boolean
    note?: boolean
    transactionId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "method" | "status" | "amount" | "change" | "paidAt" | "userId" | "note" | "transactionId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      method: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      amount: Prisma.Decimal
      change: Prisma.Decimal
      paidAt: Date | null
      userId: number
      note: string | null
      transactionId: string
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
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly change: FieldRef<"Payment", 'Decimal'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly userId: FieldRef<"Payment", 'Int'>
    readonly note: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
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
   * Model Fnb
   */

  export type AggregateFnb = {
    _count: FnbCountAggregateOutputType | null
    _avg: FnbAvgAggregateOutputType | null
    _sum: FnbSumAggregateOutputType | null
    _min: FnbMinAggregateOutputType | null
    _max: FnbMaxAggregateOutputType | null
  }

  export type FnbAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    price: Decimal | null
  }

  export type FnbSumAggregateOutputType = {
    id: number | null
    stock: number | null
    price: Decimal | null
  }

  export type FnbMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: $Enums.FnbCategory | null
    trackStock: boolean | null
    stock: number | null
    price: Decimal | null
    deleted: boolean | null
  }

  export type FnbMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: $Enums.FnbCategory | null
    trackStock: boolean | null
    stock: number | null
    price: Decimal | null
    deleted: boolean | null
  }

  export type FnbCountAggregateOutputType = {
    id: number
    name: number
    category: number
    trackStock: number
    stock: number
    price: number
    deleted: number
    _all: number
  }


  export type FnbAvgAggregateInputType = {
    id?: true
    stock?: true
    price?: true
  }

  export type FnbSumAggregateInputType = {
    id?: true
    stock?: true
    price?: true
  }

  export type FnbMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    trackStock?: true
    stock?: true
    price?: true
    deleted?: true
  }

  export type FnbMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    trackStock?: true
    stock?: true
    price?: true
    deleted?: true
  }

  export type FnbCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    trackStock?: true
    stock?: true
    price?: true
    deleted?: true
    _all?: true
  }

  export type FnbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fnb to aggregate.
     */
    where?: FnbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fnbs to fetch.
     */
    orderBy?: FnbOrderByWithRelationInput | FnbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FnbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fnbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fnbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fnbs
    **/
    _count?: true | FnbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FnbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FnbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FnbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FnbMaxAggregateInputType
  }

  export type GetFnbAggregateType<T extends FnbAggregateArgs> = {
        [P in keyof T & keyof AggregateFnb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFnb[P]>
      : GetScalarType<T[P], AggregateFnb[P]>
  }




  export type FnbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FnbWhereInput
    orderBy?: FnbOrderByWithAggregationInput | FnbOrderByWithAggregationInput[]
    by: FnbScalarFieldEnum[] | FnbScalarFieldEnum
    having?: FnbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FnbCountAggregateInputType | true
    _avg?: FnbAvgAggregateInputType
    _sum?: FnbSumAggregateInputType
    _min?: FnbMinAggregateInputType
    _max?: FnbMaxAggregateInputType
  }

  export type FnbGroupByOutputType = {
    id: number
    name: string
    category: $Enums.FnbCategory
    trackStock: boolean
    stock: number
    price: Decimal
    deleted: boolean
    _count: FnbCountAggregateOutputType | null
    _avg: FnbAvgAggregateOutputType | null
    _sum: FnbSumAggregateOutputType | null
    _min: FnbMinAggregateOutputType | null
    _max: FnbMaxAggregateOutputType | null
  }

  type GetFnbGroupByPayload<T extends FnbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FnbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FnbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FnbGroupByOutputType[P]>
            : GetScalarType<T[P], FnbGroupByOutputType[P]>
        }
      >
    >


  export type FnbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    trackStock?: boolean
    stock?: boolean
    price?: boolean
    deleted?: boolean
    fnbTrackStock?: boolean | Fnb$fnbTrackStockArgs<ExtArgs>
    fnbItem?: boolean | Fnb$fnbItemArgs<ExtArgs>
    _count?: boolean | FnbCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fnb"]>



  export type FnbSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    trackStock?: boolean
    stock?: boolean
    price?: boolean
    deleted?: boolean
  }

  export type FnbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "trackStock" | "stock" | "price" | "deleted", ExtArgs["result"]["fnb"]>
  export type FnbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fnbTrackStock?: boolean | Fnb$fnbTrackStockArgs<ExtArgs>
    fnbItem?: boolean | Fnb$fnbItemArgs<ExtArgs>
    _count?: boolean | FnbCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FnbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fnb"
    objects: {
      fnbTrackStock: Prisma.$FnbTrackStockPayload<ExtArgs>[]
      fnbItem: Prisma.$FnbItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: $Enums.FnbCategory
      trackStock: boolean
      stock: number
      price: Prisma.Decimal
      deleted: boolean
    }, ExtArgs["result"]["fnb"]>
    composites: {}
  }

  type FnbGetPayload<S extends boolean | null | undefined | FnbDefaultArgs> = $Result.GetResult<Prisma.$FnbPayload, S>

  type FnbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FnbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FnbCountAggregateInputType | true
    }

  export interface FnbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fnb'], meta: { name: 'Fnb' } }
    /**
     * Find zero or one Fnb that matches the filter.
     * @param {FnbFindUniqueArgs} args - Arguments to find a Fnb
     * @example
     * // Get one Fnb
     * const fnb = await prisma.fnb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FnbFindUniqueArgs>(args: SelectSubset<T, FnbFindUniqueArgs<ExtArgs>>): Prisma__FnbClient<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fnb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FnbFindUniqueOrThrowArgs} args - Arguments to find a Fnb
     * @example
     * // Get one Fnb
     * const fnb = await prisma.fnb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FnbFindUniqueOrThrowArgs>(args: SelectSubset<T, FnbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FnbClient<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fnb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbFindFirstArgs} args - Arguments to find a Fnb
     * @example
     * // Get one Fnb
     * const fnb = await prisma.fnb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FnbFindFirstArgs>(args?: SelectSubset<T, FnbFindFirstArgs<ExtArgs>>): Prisma__FnbClient<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fnb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbFindFirstOrThrowArgs} args - Arguments to find a Fnb
     * @example
     * // Get one Fnb
     * const fnb = await prisma.fnb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FnbFindFirstOrThrowArgs>(args?: SelectSubset<T, FnbFindFirstOrThrowArgs<ExtArgs>>): Prisma__FnbClient<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fnbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fnbs
     * const fnbs = await prisma.fnb.findMany()
     * 
     * // Get first 10 Fnbs
     * const fnbs = await prisma.fnb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fnbWithIdOnly = await prisma.fnb.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FnbFindManyArgs>(args?: SelectSubset<T, FnbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fnb.
     * @param {FnbCreateArgs} args - Arguments to create a Fnb.
     * @example
     * // Create one Fnb
     * const Fnb = await prisma.fnb.create({
     *   data: {
     *     // ... data to create a Fnb
     *   }
     * })
     * 
     */
    create<T extends FnbCreateArgs>(args: SelectSubset<T, FnbCreateArgs<ExtArgs>>): Prisma__FnbClient<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fnbs.
     * @param {FnbCreateManyArgs} args - Arguments to create many Fnbs.
     * @example
     * // Create many Fnbs
     * const fnb = await prisma.fnb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FnbCreateManyArgs>(args?: SelectSubset<T, FnbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fnb.
     * @param {FnbDeleteArgs} args - Arguments to delete one Fnb.
     * @example
     * // Delete one Fnb
     * const Fnb = await prisma.fnb.delete({
     *   where: {
     *     // ... filter to delete one Fnb
     *   }
     * })
     * 
     */
    delete<T extends FnbDeleteArgs>(args: SelectSubset<T, FnbDeleteArgs<ExtArgs>>): Prisma__FnbClient<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fnb.
     * @param {FnbUpdateArgs} args - Arguments to update one Fnb.
     * @example
     * // Update one Fnb
     * const fnb = await prisma.fnb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FnbUpdateArgs>(args: SelectSubset<T, FnbUpdateArgs<ExtArgs>>): Prisma__FnbClient<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fnbs.
     * @param {FnbDeleteManyArgs} args - Arguments to filter Fnbs to delete.
     * @example
     * // Delete a few Fnbs
     * const { count } = await prisma.fnb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FnbDeleteManyArgs>(args?: SelectSubset<T, FnbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fnbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fnbs
     * const fnb = await prisma.fnb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FnbUpdateManyArgs>(args: SelectSubset<T, FnbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fnb.
     * @param {FnbUpsertArgs} args - Arguments to update or create a Fnb.
     * @example
     * // Update or create a Fnb
     * const fnb = await prisma.fnb.upsert({
     *   create: {
     *     // ... data to create a Fnb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fnb we want to update
     *   }
     * })
     */
    upsert<T extends FnbUpsertArgs>(args: SelectSubset<T, FnbUpsertArgs<ExtArgs>>): Prisma__FnbClient<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fnbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbCountArgs} args - Arguments to filter Fnbs to count.
     * @example
     * // Count the number of Fnbs
     * const count = await prisma.fnb.count({
     *   where: {
     *     // ... the filter for the Fnbs we want to count
     *   }
     * })
    **/
    count<T extends FnbCountArgs>(
      args?: Subset<T, FnbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FnbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fnb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FnbAggregateArgs>(args: Subset<T, FnbAggregateArgs>): Prisma.PrismaPromise<GetFnbAggregateType<T>>

    /**
     * Group by Fnb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbGroupByArgs} args - Group by arguments.
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
      T extends FnbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FnbGroupByArgs['orderBy'] }
        : { orderBy?: FnbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FnbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFnbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fnb model
   */
  readonly fields: FnbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fnb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FnbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fnbTrackStock<T extends Fnb$fnbTrackStockArgs<ExtArgs> = {}>(args?: Subset<T, Fnb$fnbTrackStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fnbItem<T extends Fnb$fnbItemArgs<ExtArgs> = {}>(args?: Subset<T, Fnb$fnbItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fnb model
   */
  interface FnbFieldRefs {
    readonly id: FieldRef<"Fnb", 'Int'>
    readonly name: FieldRef<"Fnb", 'String'>
    readonly category: FieldRef<"Fnb", 'FnbCategory'>
    readonly trackStock: FieldRef<"Fnb", 'Boolean'>
    readonly stock: FieldRef<"Fnb", 'Int'>
    readonly price: FieldRef<"Fnb", 'Decimal'>
    readonly deleted: FieldRef<"Fnb", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Fnb findUnique
   */
  export type FnbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fnb
     */
    select?: FnbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fnb
     */
    omit?: FnbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbInclude<ExtArgs> | null
    /**
     * Filter, which Fnb to fetch.
     */
    where: FnbWhereUniqueInput
  }

  /**
   * Fnb findUniqueOrThrow
   */
  export type FnbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fnb
     */
    select?: FnbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fnb
     */
    omit?: FnbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbInclude<ExtArgs> | null
    /**
     * Filter, which Fnb to fetch.
     */
    where: FnbWhereUniqueInput
  }

  /**
   * Fnb findFirst
   */
  export type FnbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fnb
     */
    select?: FnbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fnb
     */
    omit?: FnbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbInclude<ExtArgs> | null
    /**
     * Filter, which Fnb to fetch.
     */
    where?: FnbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fnbs to fetch.
     */
    orderBy?: FnbOrderByWithRelationInput | FnbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fnbs.
     */
    cursor?: FnbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fnbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fnbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fnbs.
     */
    distinct?: FnbScalarFieldEnum | FnbScalarFieldEnum[]
  }

  /**
   * Fnb findFirstOrThrow
   */
  export type FnbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fnb
     */
    select?: FnbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fnb
     */
    omit?: FnbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbInclude<ExtArgs> | null
    /**
     * Filter, which Fnb to fetch.
     */
    where?: FnbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fnbs to fetch.
     */
    orderBy?: FnbOrderByWithRelationInput | FnbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fnbs.
     */
    cursor?: FnbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fnbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fnbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fnbs.
     */
    distinct?: FnbScalarFieldEnum | FnbScalarFieldEnum[]
  }

  /**
   * Fnb findMany
   */
  export type FnbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fnb
     */
    select?: FnbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fnb
     */
    omit?: FnbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbInclude<ExtArgs> | null
    /**
     * Filter, which Fnbs to fetch.
     */
    where?: FnbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fnbs to fetch.
     */
    orderBy?: FnbOrderByWithRelationInput | FnbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fnbs.
     */
    cursor?: FnbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fnbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fnbs.
     */
    skip?: number
    distinct?: FnbScalarFieldEnum | FnbScalarFieldEnum[]
  }

  /**
   * Fnb create
   */
  export type FnbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fnb
     */
    select?: FnbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fnb
     */
    omit?: FnbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbInclude<ExtArgs> | null
    /**
     * The data needed to create a Fnb.
     */
    data: XOR<FnbCreateInput, FnbUncheckedCreateInput>
  }

  /**
   * Fnb createMany
   */
  export type FnbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fnbs.
     */
    data: FnbCreateManyInput | FnbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fnb update
   */
  export type FnbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fnb
     */
    select?: FnbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fnb
     */
    omit?: FnbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbInclude<ExtArgs> | null
    /**
     * The data needed to update a Fnb.
     */
    data: XOR<FnbUpdateInput, FnbUncheckedUpdateInput>
    /**
     * Choose, which Fnb to update.
     */
    where: FnbWhereUniqueInput
  }

  /**
   * Fnb updateMany
   */
  export type FnbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fnbs.
     */
    data: XOR<FnbUpdateManyMutationInput, FnbUncheckedUpdateManyInput>
    /**
     * Filter which Fnbs to update
     */
    where?: FnbWhereInput
    /**
     * Limit how many Fnbs to update.
     */
    limit?: number
  }

  /**
   * Fnb upsert
   */
  export type FnbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fnb
     */
    select?: FnbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fnb
     */
    omit?: FnbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbInclude<ExtArgs> | null
    /**
     * The filter to search for the Fnb to update in case it exists.
     */
    where: FnbWhereUniqueInput
    /**
     * In case the Fnb found by the `where` argument doesn't exist, create a new Fnb with this data.
     */
    create: XOR<FnbCreateInput, FnbUncheckedCreateInput>
    /**
     * In case the Fnb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FnbUpdateInput, FnbUncheckedUpdateInput>
  }

  /**
   * Fnb delete
   */
  export type FnbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fnb
     */
    select?: FnbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fnb
     */
    omit?: FnbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbInclude<ExtArgs> | null
    /**
     * Filter which Fnb to delete.
     */
    where: FnbWhereUniqueInput
  }

  /**
   * Fnb deleteMany
   */
  export type FnbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fnbs to delete
     */
    where?: FnbWhereInput
    /**
     * Limit how many Fnbs to delete.
     */
    limit?: number
  }

  /**
   * Fnb.fnbTrackStock
   */
  export type Fnb$fnbTrackStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    where?: FnbTrackStockWhereInput
    orderBy?: FnbTrackStockOrderByWithRelationInput | FnbTrackStockOrderByWithRelationInput[]
    cursor?: FnbTrackStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FnbTrackStockScalarFieldEnum | FnbTrackStockScalarFieldEnum[]
  }

  /**
   * Fnb.fnbItem
   */
  export type Fnb$fnbItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
    where?: FnbItemWhereInput
    orderBy?: FnbItemOrderByWithRelationInput | FnbItemOrderByWithRelationInput[]
    cursor?: FnbItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FnbItemScalarFieldEnum | FnbItemScalarFieldEnum[]
  }

  /**
   * Fnb without action
   */
  export type FnbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fnb
     */
    select?: FnbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fnb
     */
    omit?: FnbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbInclude<ExtArgs> | null
  }


  /**
   * Model FnbTrackStock
   */

  export type AggregateFnbTrackStock = {
    _count: FnbTrackStockCountAggregateOutputType | null
    _avg: FnbTrackStockAvgAggregateOutputType | null
    _sum: FnbTrackStockSumAggregateOutputType | null
    _min: FnbTrackStockMinAggregateOutputType | null
    _max: FnbTrackStockMaxAggregateOutputType | null
  }

  export type FnbTrackStockAvgAggregateOutputType = {
    fnbId: number | null
    userId: number | null
    qty: number | null
  }

  export type FnbTrackStockSumAggregateOutputType = {
    fnbId: number | null
    userId: number | null
    qty: number | null
  }

  export type FnbTrackStockMinAggregateOutputType = {
    id: string | null
    suplayer: string | null
    fnbId: number | null
    userId: number | null
    type: $Enums.TypeTrackStock | null
    qty: number | null
    createdAt: Date | null
  }

  export type FnbTrackStockMaxAggregateOutputType = {
    id: string | null
    suplayer: string | null
    fnbId: number | null
    userId: number | null
    type: $Enums.TypeTrackStock | null
    qty: number | null
    createdAt: Date | null
  }

  export type FnbTrackStockCountAggregateOutputType = {
    id: number
    suplayer: number
    fnbId: number
    userId: number
    type: number
    qty: number
    createdAt: number
    _all: number
  }


  export type FnbTrackStockAvgAggregateInputType = {
    fnbId?: true
    userId?: true
    qty?: true
  }

  export type FnbTrackStockSumAggregateInputType = {
    fnbId?: true
    userId?: true
    qty?: true
  }

  export type FnbTrackStockMinAggregateInputType = {
    id?: true
    suplayer?: true
    fnbId?: true
    userId?: true
    type?: true
    qty?: true
    createdAt?: true
  }

  export type FnbTrackStockMaxAggregateInputType = {
    id?: true
    suplayer?: true
    fnbId?: true
    userId?: true
    type?: true
    qty?: true
    createdAt?: true
  }

  export type FnbTrackStockCountAggregateInputType = {
    id?: true
    suplayer?: true
    fnbId?: true
    userId?: true
    type?: true
    qty?: true
    createdAt?: true
    _all?: true
  }

  export type FnbTrackStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FnbTrackStock to aggregate.
     */
    where?: FnbTrackStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbTrackStocks to fetch.
     */
    orderBy?: FnbTrackStockOrderByWithRelationInput | FnbTrackStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FnbTrackStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbTrackStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbTrackStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FnbTrackStocks
    **/
    _count?: true | FnbTrackStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FnbTrackStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FnbTrackStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FnbTrackStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FnbTrackStockMaxAggregateInputType
  }

  export type GetFnbTrackStockAggregateType<T extends FnbTrackStockAggregateArgs> = {
        [P in keyof T & keyof AggregateFnbTrackStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFnbTrackStock[P]>
      : GetScalarType<T[P], AggregateFnbTrackStock[P]>
  }




  export type FnbTrackStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FnbTrackStockWhereInput
    orderBy?: FnbTrackStockOrderByWithAggregationInput | FnbTrackStockOrderByWithAggregationInput[]
    by: FnbTrackStockScalarFieldEnum[] | FnbTrackStockScalarFieldEnum
    having?: FnbTrackStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FnbTrackStockCountAggregateInputType | true
    _avg?: FnbTrackStockAvgAggregateInputType
    _sum?: FnbTrackStockSumAggregateInputType
    _min?: FnbTrackStockMinAggregateInputType
    _max?: FnbTrackStockMaxAggregateInputType
  }

  export type FnbTrackStockGroupByOutputType = {
    id: string
    suplayer: string
    fnbId: number
    userId: number
    type: $Enums.TypeTrackStock
    qty: number
    createdAt: Date
    _count: FnbTrackStockCountAggregateOutputType | null
    _avg: FnbTrackStockAvgAggregateOutputType | null
    _sum: FnbTrackStockSumAggregateOutputType | null
    _min: FnbTrackStockMinAggregateOutputType | null
    _max: FnbTrackStockMaxAggregateOutputType | null
  }

  type GetFnbTrackStockGroupByPayload<T extends FnbTrackStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FnbTrackStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FnbTrackStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FnbTrackStockGroupByOutputType[P]>
            : GetScalarType<T[P], FnbTrackStockGroupByOutputType[P]>
        }
      >
    >


  export type FnbTrackStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suplayer?: boolean
    fnbId?: boolean
    userId?: boolean
    type?: boolean
    qty?: boolean
    createdAt?: boolean
    fnb?: boolean | FnbDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fnbTrackStock"]>



  export type FnbTrackStockSelectScalar = {
    id?: boolean
    suplayer?: boolean
    fnbId?: boolean
    userId?: boolean
    type?: boolean
    qty?: boolean
    createdAt?: boolean
  }

  export type FnbTrackStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "suplayer" | "fnbId" | "userId" | "type" | "qty" | "createdAt", ExtArgs["result"]["fnbTrackStock"]>
  export type FnbTrackStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fnb?: boolean | FnbDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FnbTrackStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FnbTrackStock"
    objects: {
      fnb: Prisma.$FnbPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      suplayer: string
      fnbId: number
      userId: number
      type: $Enums.TypeTrackStock
      qty: number
      createdAt: Date
    }, ExtArgs["result"]["fnbTrackStock"]>
    composites: {}
  }

  type FnbTrackStockGetPayload<S extends boolean | null | undefined | FnbTrackStockDefaultArgs> = $Result.GetResult<Prisma.$FnbTrackStockPayload, S>

  type FnbTrackStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FnbTrackStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FnbTrackStockCountAggregateInputType | true
    }

  export interface FnbTrackStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FnbTrackStock'], meta: { name: 'FnbTrackStock' } }
    /**
     * Find zero or one FnbTrackStock that matches the filter.
     * @param {FnbTrackStockFindUniqueArgs} args - Arguments to find a FnbTrackStock
     * @example
     * // Get one FnbTrackStock
     * const fnbTrackStock = await prisma.fnbTrackStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FnbTrackStockFindUniqueArgs>(args: SelectSubset<T, FnbTrackStockFindUniqueArgs<ExtArgs>>): Prisma__FnbTrackStockClient<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FnbTrackStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FnbTrackStockFindUniqueOrThrowArgs} args - Arguments to find a FnbTrackStock
     * @example
     * // Get one FnbTrackStock
     * const fnbTrackStock = await prisma.fnbTrackStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FnbTrackStockFindUniqueOrThrowArgs>(args: SelectSubset<T, FnbTrackStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FnbTrackStockClient<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FnbTrackStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbTrackStockFindFirstArgs} args - Arguments to find a FnbTrackStock
     * @example
     * // Get one FnbTrackStock
     * const fnbTrackStock = await prisma.fnbTrackStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FnbTrackStockFindFirstArgs>(args?: SelectSubset<T, FnbTrackStockFindFirstArgs<ExtArgs>>): Prisma__FnbTrackStockClient<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FnbTrackStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbTrackStockFindFirstOrThrowArgs} args - Arguments to find a FnbTrackStock
     * @example
     * // Get one FnbTrackStock
     * const fnbTrackStock = await prisma.fnbTrackStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FnbTrackStockFindFirstOrThrowArgs>(args?: SelectSubset<T, FnbTrackStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__FnbTrackStockClient<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FnbTrackStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbTrackStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FnbTrackStocks
     * const fnbTrackStocks = await prisma.fnbTrackStock.findMany()
     * 
     * // Get first 10 FnbTrackStocks
     * const fnbTrackStocks = await prisma.fnbTrackStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fnbTrackStockWithIdOnly = await prisma.fnbTrackStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FnbTrackStockFindManyArgs>(args?: SelectSubset<T, FnbTrackStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FnbTrackStock.
     * @param {FnbTrackStockCreateArgs} args - Arguments to create a FnbTrackStock.
     * @example
     * // Create one FnbTrackStock
     * const FnbTrackStock = await prisma.fnbTrackStock.create({
     *   data: {
     *     // ... data to create a FnbTrackStock
     *   }
     * })
     * 
     */
    create<T extends FnbTrackStockCreateArgs>(args: SelectSubset<T, FnbTrackStockCreateArgs<ExtArgs>>): Prisma__FnbTrackStockClient<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FnbTrackStocks.
     * @param {FnbTrackStockCreateManyArgs} args - Arguments to create many FnbTrackStocks.
     * @example
     * // Create many FnbTrackStocks
     * const fnbTrackStock = await prisma.fnbTrackStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FnbTrackStockCreateManyArgs>(args?: SelectSubset<T, FnbTrackStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FnbTrackStock.
     * @param {FnbTrackStockDeleteArgs} args - Arguments to delete one FnbTrackStock.
     * @example
     * // Delete one FnbTrackStock
     * const FnbTrackStock = await prisma.fnbTrackStock.delete({
     *   where: {
     *     // ... filter to delete one FnbTrackStock
     *   }
     * })
     * 
     */
    delete<T extends FnbTrackStockDeleteArgs>(args: SelectSubset<T, FnbTrackStockDeleteArgs<ExtArgs>>): Prisma__FnbTrackStockClient<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FnbTrackStock.
     * @param {FnbTrackStockUpdateArgs} args - Arguments to update one FnbTrackStock.
     * @example
     * // Update one FnbTrackStock
     * const fnbTrackStock = await prisma.fnbTrackStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FnbTrackStockUpdateArgs>(args: SelectSubset<T, FnbTrackStockUpdateArgs<ExtArgs>>): Prisma__FnbTrackStockClient<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FnbTrackStocks.
     * @param {FnbTrackStockDeleteManyArgs} args - Arguments to filter FnbTrackStocks to delete.
     * @example
     * // Delete a few FnbTrackStocks
     * const { count } = await prisma.fnbTrackStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FnbTrackStockDeleteManyArgs>(args?: SelectSubset<T, FnbTrackStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FnbTrackStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbTrackStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FnbTrackStocks
     * const fnbTrackStock = await prisma.fnbTrackStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FnbTrackStockUpdateManyArgs>(args: SelectSubset<T, FnbTrackStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FnbTrackStock.
     * @param {FnbTrackStockUpsertArgs} args - Arguments to update or create a FnbTrackStock.
     * @example
     * // Update or create a FnbTrackStock
     * const fnbTrackStock = await prisma.fnbTrackStock.upsert({
     *   create: {
     *     // ... data to create a FnbTrackStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FnbTrackStock we want to update
     *   }
     * })
     */
    upsert<T extends FnbTrackStockUpsertArgs>(args: SelectSubset<T, FnbTrackStockUpsertArgs<ExtArgs>>): Prisma__FnbTrackStockClient<$Result.GetResult<Prisma.$FnbTrackStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FnbTrackStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbTrackStockCountArgs} args - Arguments to filter FnbTrackStocks to count.
     * @example
     * // Count the number of FnbTrackStocks
     * const count = await prisma.fnbTrackStock.count({
     *   where: {
     *     // ... the filter for the FnbTrackStocks we want to count
     *   }
     * })
    **/
    count<T extends FnbTrackStockCountArgs>(
      args?: Subset<T, FnbTrackStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FnbTrackStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FnbTrackStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbTrackStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FnbTrackStockAggregateArgs>(args: Subset<T, FnbTrackStockAggregateArgs>): Prisma.PrismaPromise<GetFnbTrackStockAggregateType<T>>

    /**
     * Group by FnbTrackStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbTrackStockGroupByArgs} args - Group by arguments.
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
      T extends FnbTrackStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FnbTrackStockGroupByArgs['orderBy'] }
        : { orderBy?: FnbTrackStockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FnbTrackStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFnbTrackStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FnbTrackStock model
   */
  readonly fields: FnbTrackStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FnbTrackStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FnbTrackStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fnb<T extends FnbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FnbDefaultArgs<ExtArgs>>): Prisma__FnbClient<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FnbTrackStock model
   */
  interface FnbTrackStockFieldRefs {
    readonly id: FieldRef<"FnbTrackStock", 'String'>
    readonly suplayer: FieldRef<"FnbTrackStock", 'String'>
    readonly fnbId: FieldRef<"FnbTrackStock", 'Int'>
    readonly userId: FieldRef<"FnbTrackStock", 'Int'>
    readonly type: FieldRef<"FnbTrackStock", 'TypeTrackStock'>
    readonly qty: FieldRef<"FnbTrackStock", 'Int'>
    readonly createdAt: FieldRef<"FnbTrackStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FnbTrackStock findUnique
   */
  export type FnbTrackStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    /**
     * Filter, which FnbTrackStock to fetch.
     */
    where: FnbTrackStockWhereUniqueInput
  }

  /**
   * FnbTrackStock findUniqueOrThrow
   */
  export type FnbTrackStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    /**
     * Filter, which FnbTrackStock to fetch.
     */
    where: FnbTrackStockWhereUniqueInput
  }

  /**
   * FnbTrackStock findFirst
   */
  export type FnbTrackStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    /**
     * Filter, which FnbTrackStock to fetch.
     */
    where?: FnbTrackStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbTrackStocks to fetch.
     */
    orderBy?: FnbTrackStockOrderByWithRelationInput | FnbTrackStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FnbTrackStocks.
     */
    cursor?: FnbTrackStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbTrackStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbTrackStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FnbTrackStocks.
     */
    distinct?: FnbTrackStockScalarFieldEnum | FnbTrackStockScalarFieldEnum[]
  }

  /**
   * FnbTrackStock findFirstOrThrow
   */
  export type FnbTrackStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    /**
     * Filter, which FnbTrackStock to fetch.
     */
    where?: FnbTrackStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbTrackStocks to fetch.
     */
    orderBy?: FnbTrackStockOrderByWithRelationInput | FnbTrackStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FnbTrackStocks.
     */
    cursor?: FnbTrackStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbTrackStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbTrackStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FnbTrackStocks.
     */
    distinct?: FnbTrackStockScalarFieldEnum | FnbTrackStockScalarFieldEnum[]
  }

  /**
   * FnbTrackStock findMany
   */
  export type FnbTrackStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    /**
     * Filter, which FnbTrackStocks to fetch.
     */
    where?: FnbTrackStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbTrackStocks to fetch.
     */
    orderBy?: FnbTrackStockOrderByWithRelationInput | FnbTrackStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FnbTrackStocks.
     */
    cursor?: FnbTrackStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbTrackStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbTrackStocks.
     */
    skip?: number
    distinct?: FnbTrackStockScalarFieldEnum | FnbTrackStockScalarFieldEnum[]
  }

  /**
   * FnbTrackStock create
   */
  export type FnbTrackStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    /**
     * The data needed to create a FnbTrackStock.
     */
    data: XOR<FnbTrackStockCreateInput, FnbTrackStockUncheckedCreateInput>
  }

  /**
   * FnbTrackStock createMany
   */
  export type FnbTrackStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FnbTrackStocks.
     */
    data: FnbTrackStockCreateManyInput | FnbTrackStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FnbTrackStock update
   */
  export type FnbTrackStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    /**
     * The data needed to update a FnbTrackStock.
     */
    data: XOR<FnbTrackStockUpdateInput, FnbTrackStockUncheckedUpdateInput>
    /**
     * Choose, which FnbTrackStock to update.
     */
    where: FnbTrackStockWhereUniqueInput
  }

  /**
   * FnbTrackStock updateMany
   */
  export type FnbTrackStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FnbTrackStocks.
     */
    data: XOR<FnbTrackStockUpdateManyMutationInput, FnbTrackStockUncheckedUpdateManyInput>
    /**
     * Filter which FnbTrackStocks to update
     */
    where?: FnbTrackStockWhereInput
    /**
     * Limit how many FnbTrackStocks to update.
     */
    limit?: number
  }

  /**
   * FnbTrackStock upsert
   */
  export type FnbTrackStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    /**
     * The filter to search for the FnbTrackStock to update in case it exists.
     */
    where: FnbTrackStockWhereUniqueInput
    /**
     * In case the FnbTrackStock found by the `where` argument doesn't exist, create a new FnbTrackStock with this data.
     */
    create: XOR<FnbTrackStockCreateInput, FnbTrackStockUncheckedCreateInput>
    /**
     * In case the FnbTrackStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FnbTrackStockUpdateInput, FnbTrackStockUncheckedUpdateInput>
  }

  /**
   * FnbTrackStock delete
   */
  export type FnbTrackStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
    /**
     * Filter which FnbTrackStock to delete.
     */
    where: FnbTrackStockWhereUniqueInput
  }

  /**
   * FnbTrackStock deleteMany
   */
  export type FnbTrackStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FnbTrackStocks to delete
     */
    where?: FnbTrackStockWhereInput
    /**
     * Limit how many FnbTrackStocks to delete.
     */
    limit?: number
  }

  /**
   * FnbTrackStock without action
   */
  export type FnbTrackStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbTrackStock
     */
    select?: FnbTrackStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbTrackStock
     */
    omit?: FnbTrackStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbTrackStockInclude<ExtArgs> | null
  }


  /**
   * Model FnbOrder
   */

  export type AggregateFnbOrder = {
    _count: FnbOrderCountAggregateOutputType | null
    _avg: FnbOrderAvgAggregateOutputType | null
    _sum: FnbOrderSumAggregateOutputType | null
    _min: FnbOrderMinAggregateOutputType | null
    _max: FnbOrderMaxAggregateOutputType | null
  }

  export type FnbOrderAvgAggregateOutputType = {
    itemId: number | null
    total: Decimal | null
  }

  export type FnbOrderSumAggregateOutputType = {
    itemId: number | null
    total: Decimal | null
  }

  export type FnbOrderMinAggregateOutputType = {
    id: string | null
    status: $Enums.OrderStatus | null
    transactionId: string | null
    itemId: number | null
    total: Decimal | null
    note: string | null
    draftAt: Date | null
    sendAt: Date | null
    cancelAt: Date | null
  }

  export type FnbOrderMaxAggregateOutputType = {
    id: string | null
    status: $Enums.OrderStatus | null
    transactionId: string | null
    itemId: number | null
    total: Decimal | null
    note: string | null
    draftAt: Date | null
    sendAt: Date | null
    cancelAt: Date | null
  }

  export type FnbOrderCountAggregateOutputType = {
    id: number
    status: number
    transactionId: number
    itemId: number
    total: number
    note: number
    draftAt: number
    sendAt: number
    cancelAt: number
    _all: number
  }


  export type FnbOrderAvgAggregateInputType = {
    itemId?: true
    total?: true
  }

  export type FnbOrderSumAggregateInputType = {
    itemId?: true
    total?: true
  }

  export type FnbOrderMinAggregateInputType = {
    id?: true
    status?: true
    transactionId?: true
    itemId?: true
    total?: true
    note?: true
    draftAt?: true
    sendAt?: true
    cancelAt?: true
  }

  export type FnbOrderMaxAggregateInputType = {
    id?: true
    status?: true
    transactionId?: true
    itemId?: true
    total?: true
    note?: true
    draftAt?: true
    sendAt?: true
    cancelAt?: true
  }

  export type FnbOrderCountAggregateInputType = {
    id?: true
    status?: true
    transactionId?: true
    itemId?: true
    total?: true
    note?: true
    draftAt?: true
    sendAt?: true
    cancelAt?: true
    _all?: true
  }

  export type FnbOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FnbOrder to aggregate.
     */
    where?: FnbOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbOrders to fetch.
     */
    orderBy?: FnbOrderOrderByWithRelationInput | FnbOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FnbOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FnbOrders
    **/
    _count?: true | FnbOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FnbOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FnbOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FnbOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FnbOrderMaxAggregateInputType
  }

  export type GetFnbOrderAggregateType<T extends FnbOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateFnbOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFnbOrder[P]>
      : GetScalarType<T[P], AggregateFnbOrder[P]>
  }




  export type FnbOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FnbOrderWhereInput
    orderBy?: FnbOrderOrderByWithAggregationInput | FnbOrderOrderByWithAggregationInput[]
    by: FnbOrderScalarFieldEnum[] | FnbOrderScalarFieldEnum
    having?: FnbOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FnbOrderCountAggregateInputType | true
    _avg?: FnbOrderAvgAggregateInputType
    _sum?: FnbOrderSumAggregateInputType
    _min?: FnbOrderMinAggregateInputType
    _max?: FnbOrderMaxAggregateInputType
  }

  export type FnbOrderGroupByOutputType = {
    id: string
    status: $Enums.OrderStatus
    transactionId: string
    itemId: number
    total: Decimal
    note: string | null
    draftAt: Date
    sendAt: Date | null
    cancelAt: Date | null
    _count: FnbOrderCountAggregateOutputType | null
    _avg: FnbOrderAvgAggregateOutputType | null
    _sum: FnbOrderSumAggregateOutputType | null
    _min: FnbOrderMinAggregateOutputType | null
    _max: FnbOrderMaxAggregateOutputType | null
  }

  type GetFnbOrderGroupByPayload<T extends FnbOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FnbOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FnbOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FnbOrderGroupByOutputType[P]>
            : GetScalarType<T[P], FnbOrderGroupByOutputType[P]>
        }
      >
    >


  export type FnbOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    transactionId?: boolean
    itemId?: boolean
    total?: boolean
    note?: boolean
    draftAt?: boolean
    sendAt?: boolean
    cancelAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    item?: boolean | FnbItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fnbOrder"]>



  export type FnbOrderSelectScalar = {
    id?: boolean
    status?: boolean
    transactionId?: boolean
    itemId?: boolean
    total?: boolean
    note?: boolean
    draftAt?: boolean
    sendAt?: boolean
    cancelAt?: boolean
  }

  export type FnbOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "transactionId" | "itemId" | "total" | "note" | "draftAt" | "sendAt" | "cancelAt", ExtArgs["result"]["fnbOrder"]>
  export type FnbOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    item?: boolean | FnbItemDefaultArgs<ExtArgs>
  }

  export type $FnbOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FnbOrder"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>
      item: Prisma.$FnbItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.OrderStatus
      transactionId: string
      itemId: number
      total: Prisma.Decimal
      note: string | null
      draftAt: Date
      sendAt: Date | null
      cancelAt: Date | null
    }, ExtArgs["result"]["fnbOrder"]>
    composites: {}
  }

  type FnbOrderGetPayload<S extends boolean | null | undefined | FnbOrderDefaultArgs> = $Result.GetResult<Prisma.$FnbOrderPayload, S>

  type FnbOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FnbOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FnbOrderCountAggregateInputType | true
    }

  export interface FnbOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FnbOrder'], meta: { name: 'FnbOrder' } }
    /**
     * Find zero or one FnbOrder that matches the filter.
     * @param {FnbOrderFindUniqueArgs} args - Arguments to find a FnbOrder
     * @example
     * // Get one FnbOrder
     * const fnbOrder = await prisma.fnbOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FnbOrderFindUniqueArgs>(args: SelectSubset<T, FnbOrderFindUniqueArgs<ExtArgs>>): Prisma__FnbOrderClient<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FnbOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FnbOrderFindUniqueOrThrowArgs} args - Arguments to find a FnbOrder
     * @example
     * // Get one FnbOrder
     * const fnbOrder = await prisma.fnbOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FnbOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, FnbOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FnbOrderClient<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FnbOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbOrderFindFirstArgs} args - Arguments to find a FnbOrder
     * @example
     * // Get one FnbOrder
     * const fnbOrder = await prisma.fnbOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FnbOrderFindFirstArgs>(args?: SelectSubset<T, FnbOrderFindFirstArgs<ExtArgs>>): Prisma__FnbOrderClient<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FnbOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbOrderFindFirstOrThrowArgs} args - Arguments to find a FnbOrder
     * @example
     * // Get one FnbOrder
     * const fnbOrder = await prisma.fnbOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FnbOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, FnbOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FnbOrderClient<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FnbOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FnbOrders
     * const fnbOrders = await prisma.fnbOrder.findMany()
     * 
     * // Get first 10 FnbOrders
     * const fnbOrders = await prisma.fnbOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fnbOrderWithIdOnly = await prisma.fnbOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FnbOrderFindManyArgs>(args?: SelectSubset<T, FnbOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FnbOrder.
     * @param {FnbOrderCreateArgs} args - Arguments to create a FnbOrder.
     * @example
     * // Create one FnbOrder
     * const FnbOrder = await prisma.fnbOrder.create({
     *   data: {
     *     // ... data to create a FnbOrder
     *   }
     * })
     * 
     */
    create<T extends FnbOrderCreateArgs>(args: SelectSubset<T, FnbOrderCreateArgs<ExtArgs>>): Prisma__FnbOrderClient<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FnbOrders.
     * @param {FnbOrderCreateManyArgs} args - Arguments to create many FnbOrders.
     * @example
     * // Create many FnbOrders
     * const fnbOrder = await prisma.fnbOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FnbOrderCreateManyArgs>(args?: SelectSubset<T, FnbOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FnbOrder.
     * @param {FnbOrderDeleteArgs} args - Arguments to delete one FnbOrder.
     * @example
     * // Delete one FnbOrder
     * const FnbOrder = await prisma.fnbOrder.delete({
     *   where: {
     *     // ... filter to delete one FnbOrder
     *   }
     * })
     * 
     */
    delete<T extends FnbOrderDeleteArgs>(args: SelectSubset<T, FnbOrderDeleteArgs<ExtArgs>>): Prisma__FnbOrderClient<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FnbOrder.
     * @param {FnbOrderUpdateArgs} args - Arguments to update one FnbOrder.
     * @example
     * // Update one FnbOrder
     * const fnbOrder = await prisma.fnbOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FnbOrderUpdateArgs>(args: SelectSubset<T, FnbOrderUpdateArgs<ExtArgs>>): Prisma__FnbOrderClient<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FnbOrders.
     * @param {FnbOrderDeleteManyArgs} args - Arguments to filter FnbOrders to delete.
     * @example
     * // Delete a few FnbOrders
     * const { count } = await prisma.fnbOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FnbOrderDeleteManyArgs>(args?: SelectSubset<T, FnbOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FnbOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FnbOrders
     * const fnbOrder = await prisma.fnbOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FnbOrderUpdateManyArgs>(args: SelectSubset<T, FnbOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FnbOrder.
     * @param {FnbOrderUpsertArgs} args - Arguments to update or create a FnbOrder.
     * @example
     * // Update or create a FnbOrder
     * const fnbOrder = await prisma.fnbOrder.upsert({
     *   create: {
     *     // ... data to create a FnbOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FnbOrder we want to update
     *   }
     * })
     */
    upsert<T extends FnbOrderUpsertArgs>(args: SelectSubset<T, FnbOrderUpsertArgs<ExtArgs>>): Prisma__FnbOrderClient<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FnbOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbOrderCountArgs} args - Arguments to filter FnbOrders to count.
     * @example
     * // Count the number of FnbOrders
     * const count = await prisma.fnbOrder.count({
     *   where: {
     *     // ... the filter for the FnbOrders we want to count
     *   }
     * })
    **/
    count<T extends FnbOrderCountArgs>(
      args?: Subset<T, FnbOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FnbOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FnbOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FnbOrderAggregateArgs>(args: Subset<T, FnbOrderAggregateArgs>): Prisma.PrismaPromise<GetFnbOrderAggregateType<T>>

    /**
     * Group by FnbOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbOrderGroupByArgs} args - Group by arguments.
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
      T extends FnbOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FnbOrderGroupByArgs['orderBy'] }
        : { orderBy?: FnbOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FnbOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFnbOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FnbOrder model
   */
  readonly fields: FnbOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FnbOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FnbOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends FnbItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FnbItemDefaultArgs<ExtArgs>>): Prisma__FnbItemClient<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FnbOrder model
   */
  interface FnbOrderFieldRefs {
    readonly id: FieldRef<"FnbOrder", 'String'>
    readonly status: FieldRef<"FnbOrder", 'OrderStatus'>
    readonly transactionId: FieldRef<"FnbOrder", 'String'>
    readonly itemId: FieldRef<"FnbOrder", 'Int'>
    readonly total: FieldRef<"FnbOrder", 'Decimal'>
    readonly note: FieldRef<"FnbOrder", 'String'>
    readonly draftAt: FieldRef<"FnbOrder", 'DateTime'>
    readonly sendAt: FieldRef<"FnbOrder", 'DateTime'>
    readonly cancelAt: FieldRef<"FnbOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FnbOrder findUnique
   */
  export type FnbOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    /**
     * Filter, which FnbOrder to fetch.
     */
    where: FnbOrderWhereUniqueInput
  }

  /**
   * FnbOrder findUniqueOrThrow
   */
  export type FnbOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    /**
     * Filter, which FnbOrder to fetch.
     */
    where: FnbOrderWhereUniqueInput
  }

  /**
   * FnbOrder findFirst
   */
  export type FnbOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    /**
     * Filter, which FnbOrder to fetch.
     */
    where?: FnbOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbOrders to fetch.
     */
    orderBy?: FnbOrderOrderByWithRelationInput | FnbOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FnbOrders.
     */
    cursor?: FnbOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FnbOrders.
     */
    distinct?: FnbOrderScalarFieldEnum | FnbOrderScalarFieldEnum[]
  }

  /**
   * FnbOrder findFirstOrThrow
   */
  export type FnbOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    /**
     * Filter, which FnbOrder to fetch.
     */
    where?: FnbOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbOrders to fetch.
     */
    orderBy?: FnbOrderOrderByWithRelationInput | FnbOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FnbOrders.
     */
    cursor?: FnbOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FnbOrders.
     */
    distinct?: FnbOrderScalarFieldEnum | FnbOrderScalarFieldEnum[]
  }

  /**
   * FnbOrder findMany
   */
  export type FnbOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    /**
     * Filter, which FnbOrders to fetch.
     */
    where?: FnbOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbOrders to fetch.
     */
    orderBy?: FnbOrderOrderByWithRelationInput | FnbOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FnbOrders.
     */
    cursor?: FnbOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbOrders.
     */
    skip?: number
    distinct?: FnbOrderScalarFieldEnum | FnbOrderScalarFieldEnum[]
  }

  /**
   * FnbOrder create
   */
  export type FnbOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a FnbOrder.
     */
    data: XOR<FnbOrderCreateInput, FnbOrderUncheckedCreateInput>
  }

  /**
   * FnbOrder createMany
   */
  export type FnbOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FnbOrders.
     */
    data: FnbOrderCreateManyInput | FnbOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FnbOrder update
   */
  export type FnbOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a FnbOrder.
     */
    data: XOR<FnbOrderUpdateInput, FnbOrderUncheckedUpdateInput>
    /**
     * Choose, which FnbOrder to update.
     */
    where: FnbOrderWhereUniqueInput
  }

  /**
   * FnbOrder updateMany
   */
  export type FnbOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FnbOrders.
     */
    data: XOR<FnbOrderUpdateManyMutationInput, FnbOrderUncheckedUpdateManyInput>
    /**
     * Filter which FnbOrders to update
     */
    where?: FnbOrderWhereInput
    /**
     * Limit how many FnbOrders to update.
     */
    limit?: number
  }

  /**
   * FnbOrder upsert
   */
  export type FnbOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the FnbOrder to update in case it exists.
     */
    where: FnbOrderWhereUniqueInput
    /**
     * In case the FnbOrder found by the `where` argument doesn't exist, create a new FnbOrder with this data.
     */
    create: XOR<FnbOrderCreateInput, FnbOrderUncheckedCreateInput>
    /**
     * In case the FnbOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FnbOrderUpdateInput, FnbOrderUncheckedUpdateInput>
  }

  /**
   * FnbOrder delete
   */
  export type FnbOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    /**
     * Filter which FnbOrder to delete.
     */
    where: FnbOrderWhereUniqueInput
  }

  /**
   * FnbOrder deleteMany
   */
  export type FnbOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FnbOrders to delete
     */
    where?: FnbOrderWhereInput
    /**
     * Limit how many FnbOrders to delete.
     */
    limit?: number
  }

  /**
   * FnbOrder without action
   */
  export type FnbOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
  }


  /**
   * Model FnbItem
   */

  export type AggregateFnbItem = {
    _count: FnbItemCountAggregateOutputType | null
    _avg: FnbItemAvgAggregateOutputType | null
    _sum: FnbItemSumAggregateOutputType | null
    _min: FnbItemMinAggregateOutputType | null
    _max: FnbItemMaxAggregateOutputType | null
  }

  export type FnbItemAvgAggregateOutputType = {
    id: number | null
    fnbId: number | null
    qty: number | null
    price: Decimal | null
  }

  export type FnbItemSumAggregateOutputType = {
    id: number | null
    fnbId: number | null
    qty: number | null
    price: Decimal | null
  }

  export type FnbItemMinAggregateOutputType = {
    id: number | null
    fnbId: number | null
    qty: number | null
    name: string | null
    price: Decimal | null
    category: $Enums.FnbCategory | null
  }

  export type FnbItemMaxAggregateOutputType = {
    id: number | null
    fnbId: number | null
    qty: number | null
    name: string | null
    price: Decimal | null
    category: $Enums.FnbCategory | null
  }

  export type FnbItemCountAggregateOutputType = {
    id: number
    fnbId: number
    qty: number
    name: number
    price: number
    category: number
    _all: number
  }


  export type FnbItemAvgAggregateInputType = {
    id?: true
    fnbId?: true
    qty?: true
    price?: true
  }

  export type FnbItemSumAggregateInputType = {
    id?: true
    fnbId?: true
    qty?: true
    price?: true
  }

  export type FnbItemMinAggregateInputType = {
    id?: true
    fnbId?: true
    qty?: true
    name?: true
    price?: true
    category?: true
  }

  export type FnbItemMaxAggregateInputType = {
    id?: true
    fnbId?: true
    qty?: true
    name?: true
    price?: true
    category?: true
  }

  export type FnbItemCountAggregateInputType = {
    id?: true
    fnbId?: true
    qty?: true
    name?: true
    price?: true
    category?: true
    _all?: true
  }

  export type FnbItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FnbItem to aggregate.
     */
    where?: FnbItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbItems to fetch.
     */
    orderBy?: FnbItemOrderByWithRelationInput | FnbItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FnbItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FnbItems
    **/
    _count?: true | FnbItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FnbItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FnbItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FnbItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FnbItemMaxAggregateInputType
  }

  export type GetFnbItemAggregateType<T extends FnbItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFnbItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFnbItem[P]>
      : GetScalarType<T[P], AggregateFnbItem[P]>
  }




  export type FnbItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FnbItemWhereInput
    orderBy?: FnbItemOrderByWithAggregationInput | FnbItemOrderByWithAggregationInput[]
    by: FnbItemScalarFieldEnum[] | FnbItemScalarFieldEnum
    having?: FnbItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FnbItemCountAggregateInputType | true
    _avg?: FnbItemAvgAggregateInputType
    _sum?: FnbItemSumAggregateInputType
    _min?: FnbItemMinAggregateInputType
    _max?: FnbItemMaxAggregateInputType
  }

  export type FnbItemGroupByOutputType = {
    id: number
    fnbId: number
    qty: number
    name: string
    price: Decimal
    category: $Enums.FnbCategory
    _count: FnbItemCountAggregateOutputType | null
    _avg: FnbItemAvgAggregateOutputType | null
    _sum: FnbItemSumAggregateOutputType | null
    _min: FnbItemMinAggregateOutputType | null
    _max: FnbItemMaxAggregateOutputType | null
  }

  type GetFnbItemGroupByPayload<T extends FnbItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FnbItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FnbItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FnbItemGroupByOutputType[P]>
            : GetScalarType<T[P], FnbItemGroupByOutputType[P]>
        }
      >
    >


  export type FnbItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fnbId?: boolean
    qty?: boolean
    name?: boolean
    price?: boolean
    category?: boolean
    fnb?: boolean | FnbDefaultArgs<ExtArgs>
    fnbOrder?: boolean | FnbItem$fnbOrderArgs<ExtArgs>
    _count?: boolean | FnbItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fnbItem"]>



  export type FnbItemSelectScalar = {
    id?: boolean
    fnbId?: boolean
    qty?: boolean
    name?: boolean
    price?: boolean
    category?: boolean
  }

  export type FnbItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fnbId" | "qty" | "name" | "price" | "category", ExtArgs["result"]["fnbItem"]>
  export type FnbItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fnb?: boolean | FnbDefaultArgs<ExtArgs>
    fnbOrder?: boolean | FnbItem$fnbOrderArgs<ExtArgs>
    _count?: boolean | FnbItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FnbItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FnbItem"
    objects: {
      fnb: Prisma.$FnbPayload<ExtArgs>
      fnbOrder: Prisma.$FnbOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fnbId: number
      qty: number
      name: string
      price: Prisma.Decimal
      category: $Enums.FnbCategory
    }, ExtArgs["result"]["fnbItem"]>
    composites: {}
  }

  type FnbItemGetPayload<S extends boolean | null | undefined | FnbItemDefaultArgs> = $Result.GetResult<Prisma.$FnbItemPayload, S>

  type FnbItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FnbItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FnbItemCountAggregateInputType | true
    }

  export interface FnbItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FnbItem'], meta: { name: 'FnbItem' } }
    /**
     * Find zero or one FnbItem that matches the filter.
     * @param {FnbItemFindUniqueArgs} args - Arguments to find a FnbItem
     * @example
     * // Get one FnbItem
     * const fnbItem = await prisma.fnbItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FnbItemFindUniqueArgs>(args: SelectSubset<T, FnbItemFindUniqueArgs<ExtArgs>>): Prisma__FnbItemClient<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FnbItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FnbItemFindUniqueOrThrowArgs} args - Arguments to find a FnbItem
     * @example
     * // Get one FnbItem
     * const fnbItem = await prisma.fnbItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FnbItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FnbItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FnbItemClient<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FnbItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbItemFindFirstArgs} args - Arguments to find a FnbItem
     * @example
     * // Get one FnbItem
     * const fnbItem = await prisma.fnbItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FnbItemFindFirstArgs>(args?: SelectSubset<T, FnbItemFindFirstArgs<ExtArgs>>): Prisma__FnbItemClient<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FnbItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbItemFindFirstOrThrowArgs} args - Arguments to find a FnbItem
     * @example
     * // Get one FnbItem
     * const fnbItem = await prisma.fnbItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FnbItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FnbItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FnbItemClient<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FnbItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FnbItems
     * const fnbItems = await prisma.fnbItem.findMany()
     * 
     * // Get first 10 FnbItems
     * const fnbItems = await prisma.fnbItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fnbItemWithIdOnly = await prisma.fnbItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FnbItemFindManyArgs>(args?: SelectSubset<T, FnbItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FnbItem.
     * @param {FnbItemCreateArgs} args - Arguments to create a FnbItem.
     * @example
     * // Create one FnbItem
     * const FnbItem = await prisma.fnbItem.create({
     *   data: {
     *     // ... data to create a FnbItem
     *   }
     * })
     * 
     */
    create<T extends FnbItemCreateArgs>(args: SelectSubset<T, FnbItemCreateArgs<ExtArgs>>): Prisma__FnbItemClient<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FnbItems.
     * @param {FnbItemCreateManyArgs} args - Arguments to create many FnbItems.
     * @example
     * // Create many FnbItems
     * const fnbItem = await prisma.fnbItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FnbItemCreateManyArgs>(args?: SelectSubset<T, FnbItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FnbItem.
     * @param {FnbItemDeleteArgs} args - Arguments to delete one FnbItem.
     * @example
     * // Delete one FnbItem
     * const FnbItem = await prisma.fnbItem.delete({
     *   where: {
     *     // ... filter to delete one FnbItem
     *   }
     * })
     * 
     */
    delete<T extends FnbItemDeleteArgs>(args: SelectSubset<T, FnbItemDeleteArgs<ExtArgs>>): Prisma__FnbItemClient<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FnbItem.
     * @param {FnbItemUpdateArgs} args - Arguments to update one FnbItem.
     * @example
     * // Update one FnbItem
     * const fnbItem = await prisma.fnbItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FnbItemUpdateArgs>(args: SelectSubset<T, FnbItemUpdateArgs<ExtArgs>>): Prisma__FnbItemClient<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FnbItems.
     * @param {FnbItemDeleteManyArgs} args - Arguments to filter FnbItems to delete.
     * @example
     * // Delete a few FnbItems
     * const { count } = await prisma.fnbItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FnbItemDeleteManyArgs>(args?: SelectSubset<T, FnbItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FnbItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FnbItems
     * const fnbItem = await prisma.fnbItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FnbItemUpdateManyArgs>(args: SelectSubset<T, FnbItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FnbItem.
     * @param {FnbItemUpsertArgs} args - Arguments to update or create a FnbItem.
     * @example
     * // Update or create a FnbItem
     * const fnbItem = await prisma.fnbItem.upsert({
     *   create: {
     *     // ... data to create a FnbItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FnbItem we want to update
     *   }
     * })
     */
    upsert<T extends FnbItemUpsertArgs>(args: SelectSubset<T, FnbItemUpsertArgs<ExtArgs>>): Prisma__FnbItemClient<$Result.GetResult<Prisma.$FnbItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FnbItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbItemCountArgs} args - Arguments to filter FnbItems to count.
     * @example
     * // Count the number of FnbItems
     * const count = await prisma.fnbItem.count({
     *   where: {
     *     // ... the filter for the FnbItems we want to count
     *   }
     * })
    **/
    count<T extends FnbItemCountArgs>(
      args?: Subset<T, FnbItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FnbItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FnbItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FnbItemAggregateArgs>(args: Subset<T, FnbItemAggregateArgs>): Prisma.PrismaPromise<GetFnbItemAggregateType<T>>

    /**
     * Group by FnbItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FnbItemGroupByArgs} args - Group by arguments.
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
      T extends FnbItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FnbItemGroupByArgs['orderBy'] }
        : { orderBy?: FnbItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FnbItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFnbItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FnbItem model
   */
  readonly fields: FnbItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FnbItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FnbItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fnb<T extends FnbDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FnbDefaultArgs<ExtArgs>>): Prisma__FnbClient<$Result.GetResult<Prisma.$FnbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fnbOrder<T extends FnbItem$fnbOrderArgs<ExtArgs> = {}>(args?: Subset<T, FnbItem$fnbOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FnbOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FnbItem model
   */
  interface FnbItemFieldRefs {
    readonly id: FieldRef<"FnbItem", 'Int'>
    readonly fnbId: FieldRef<"FnbItem", 'Int'>
    readonly qty: FieldRef<"FnbItem", 'Int'>
    readonly name: FieldRef<"FnbItem", 'String'>
    readonly price: FieldRef<"FnbItem", 'Decimal'>
    readonly category: FieldRef<"FnbItem", 'FnbCategory'>
  }
    

  // Custom InputTypes
  /**
   * FnbItem findUnique
   */
  export type FnbItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
    /**
     * Filter, which FnbItem to fetch.
     */
    where: FnbItemWhereUniqueInput
  }

  /**
   * FnbItem findUniqueOrThrow
   */
  export type FnbItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
    /**
     * Filter, which FnbItem to fetch.
     */
    where: FnbItemWhereUniqueInput
  }

  /**
   * FnbItem findFirst
   */
  export type FnbItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
    /**
     * Filter, which FnbItem to fetch.
     */
    where?: FnbItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbItems to fetch.
     */
    orderBy?: FnbItemOrderByWithRelationInput | FnbItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FnbItems.
     */
    cursor?: FnbItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FnbItems.
     */
    distinct?: FnbItemScalarFieldEnum | FnbItemScalarFieldEnum[]
  }

  /**
   * FnbItem findFirstOrThrow
   */
  export type FnbItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
    /**
     * Filter, which FnbItem to fetch.
     */
    where?: FnbItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbItems to fetch.
     */
    orderBy?: FnbItemOrderByWithRelationInput | FnbItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FnbItems.
     */
    cursor?: FnbItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FnbItems.
     */
    distinct?: FnbItemScalarFieldEnum | FnbItemScalarFieldEnum[]
  }

  /**
   * FnbItem findMany
   */
  export type FnbItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
    /**
     * Filter, which FnbItems to fetch.
     */
    where?: FnbItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FnbItems to fetch.
     */
    orderBy?: FnbItemOrderByWithRelationInput | FnbItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FnbItems.
     */
    cursor?: FnbItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FnbItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FnbItems.
     */
    skip?: number
    distinct?: FnbItemScalarFieldEnum | FnbItemScalarFieldEnum[]
  }

  /**
   * FnbItem create
   */
  export type FnbItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FnbItem.
     */
    data: XOR<FnbItemCreateInput, FnbItemUncheckedCreateInput>
  }

  /**
   * FnbItem createMany
   */
  export type FnbItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FnbItems.
     */
    data: FnbItemCreateManyInput | FnbItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FnbItem update
   */
  export type FnbItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FnbItem.
     */
    data: XOR<FnbItemUpdateInput, FnbItemUncheckedUpdateInput>
    /**
     * Choose, which FnbItem to update.
     */
    where: FnbItemWhereUniqueInput
  }

  /**
   * FnbItem updateMany
   */
  export type FnbItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FnbItems.
     */
    data: XOR<FnbItemUpdateManyMutationInput, FnbItemUncheckedUpdateManyInput>
    /**
     * Filter which FnbItems to update
     */
    where?: FnbItemWhereInput
    /**
     * Limit how many FnbItems to update.
     */
    limit?: number
  }

  /**
   * FnbItem upsert
   */
  export type FnbItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FnbItem to update in case it exists.
     */
    where: FnbItemWhereUniqueInput
    /**
     * In case the FnbItem found by the `where` argument doesn't exist, create a new FnbItem with this data.
     */
    create: XOR<FnbItemCreateInput, FnbItemUncheckedCreateInput>
    /**
     * In case the FnbItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FnbItemUpdateInput, FnbItemUncheckedUpdateInput>
  }

  /**
   * FnbItem delete
   */
  export type FnbItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
    /**
     * Filter which FnbItem to delete.
     */
    where: FnbItemWhereUniqueInput
  }

  /**
   * FnbItem deleteMany
   */
  export type FnbItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FnbItems to delete
     */
    where?: FnbItemWhereInput
    /**
     * Limit how many FnbItems to delete.
     */
    limit?: number
  }

  /**
   * FnbItem.fnbOrder
   */
  export type FnbItem$fnbOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbOrder
     */
    select?: FnbOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbOrder
     */
    omit?: FnbOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbOrderInclude<ExtArgs> | null
    where?: FnbOrderWhereInput
    orderBy?: FnbOrderOrderByWithRelationInput | FnbOrderOrderByWithRelationInput[]
    cursor?: FnbOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FnbOrderScalarFieldEnum | FnbOrderScalarFieldEnum[]
  }

  /**
   * FnbItem without action
   */
  export type FnbItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FnbItem
     */
    select?: FnbItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FnbItem
     */
    omit?: FnbItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FnbItemInclude<ExtArgs> | null
  }


  /**
   * Model Companion
   */

  export type AggregateCompanion = {
    _count: CompanionCountAggregateOutputType | null
    _avg: CompanionAvgAggregateOutputType | null
    _sum: CompanionSumAggregateOutputType | null
    _min: CompanionMinAggregateOutputType | null
    _max: CompanionMaxAggregateOutputType | null
  }

  export type CompanionAvgAggregateOutputType = {
    id: number | null
    hourlyRate: Decimal | null
  }

  export type CompanionSumAggregateOutputType = {
    id: number | null
    hourlyRate: Decimal | null
  }

  export type CompanionMinAggregateOutputType = {
    id: number | null
    name: string | null
    hourlyRate: Decimal | null
    available: boolean | null
  }

  export type CompanionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    hourlyRate: Decimal | null
    available: boolean | null
  }

  export type CompanionCountAggregateOutputType = {
    id: number
    name: number
    hourlyRate: number
    available: number
    _all: number
  }


  export type CompanionAvgAggregateInputType = {
    id?: true
    hourlyRate?: true
  }

  export type CompanionSumAggregateInputType = {
    id?: true
    hourlyRate?: true
  }

  export type CompanionMinAggregateInputType = {
    id?: true
    name?: true
    hourlyRate?: true
    available?: true
  }

  export type CompanionMaxAggregateInputType = {
    id?: true
    name?: true
    hourlyRate?: true
    available?: true
  }

  export type CompanionCountAggregateInputType = {
    id?: true
    name?: true
    hourlyRate?: true
    available?: true
    _all?: true
  }

  export type CompanionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companion to aggregate.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companions
    **/
    _count?: true | CompanionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanionMaxAggregateInputType
  }

  export type GetCompanionAggregateType<T extends CompanionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanion[P]>
      : GetScalarType<T[P], AggregateCompanion[P]>
  }




  export type CompanionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionWhereInput
    orderBy?: CompanionOrderByWithAggregationInput | CompanionOrderByWithAggregationInput[]
    by: CompanionScalarFieldEnum[] | CompanionScalarFieldEnum
    having?: CompanionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanionCountAggregateInputType | true
    _avg?: CompanionAvgAggregateInputType
    _sum?: CompanionSumAggregateInputType
    _min?: CompanionMinAggregateInputType
    _max?: CompanionMaxAggregateInputType
  }

  export type CompanionGroupByOutputType = {
    id: number
    name: string
    hourlyRate: Decimal
    available: boolean
    _count: CompanionCountAggregateOutputType | null
    _avg: CompanionAvgAggregateOutputType | null
    _sum: CompanionSumAggregateOutputType | null
    _min: CompanionMinAggregateOutputType | null
    _max: CompanionMaxAggregateOutputType | null
  }

  type GetCompanionGroupByPayload<T extends CompanionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanionGroupByOutputType[P]>
            : GetScalarType<T[P], CompanionGroupByOutputType[P]>
        }
      >
    >


  export type CompanionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hourlyRate?: boolean
    available?: boolean
    companionOrder?: boolean | Companion$companionOrderArgs<ExtArgs>
    _count?: boolean | CompanionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companion"]>



  export type CompanionSelectScalar = {
    id?: boolean
    name?: boolean
    hourlyRate?: boolean
    available?: boolean
  }

  export type CompanionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "hourlyRate" | "available", ExtArgs["result"]["companion"]>
  export type CompanionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companionOrder?: boolean | Companion$companionOrderArgs<ExtArgs>
    _count?: boolean | CompanionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompanionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Companion"
    objects: {
      companionOrder: Prisma.$CompanionOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      hourlyRate: Prisma.Decimal
      available: boolean
    }, ExtArgs["result"]["companion"]>
    composites: {}
  }

  type CompanionGetPayload<S extends boolean | null | undefined | CompanionDefaultArgs> = $Result.GetResult<Prisma.$CompanionPayload, S>

  type CompanionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanionCountAggregateInputType | true
    }

  export interface CompanionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Companion'], meta: { name: 'Companion' } }
    /**
     * Find zero or one Companion that matches the filter.
     * @param {CompanionFindUniqueArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanionFindUniqueArgs>(args: SelectSubset<T, CompanionFindUniqueArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanionFindUniqueOrThrowArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionFindFirstArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanionFindFirstArgs>(args?: SelectSubset<T, CompanionFindFirstArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionFindFirstOrThrowArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companions
     * const companions = await prisma.companion.findMany()
     * 
     * // Get first 10 Companions
     * const companions = await prisma.companion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companionWithIdOnly = await prisma.companion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanionFindManyArgs>(args?: SelectSubset<T, CompanionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companion.
     * @param {CompanionCreateArgs} args - Arguments to create a Companion.
     * @example
     * // Create one Companion
     * const Companion = await prisma.companion.create({
     *   data: {
     *     // ... data to create a Companion
     *   }
     * })
     * 
     */
    create<T extends CompanionCreateArgs>(args: SelectSubset<T, CompanionCreateArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companions.
     * @param {CompanionCreateManyArgs} args - Arguments to create many Companions.
     * @example
     * // Create many Companions
     * const companion = await prisma.companion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanionCreateManyArgs>(args?: SelectSubset<T, CompanionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Companion.
     * @param {CompanionDeleteArgs} args - Arguments to delete one Companion.
     * @example
     * // Delete one Companion
     * const Companion = await prisma.companion.delete({
     *   where: {
     *     // ... filter to delete one Companion
     *   }
     * })
     * 
     */
    delete<T extends CompanionDeleteArgs>(args: SelectSubset<T, CompanionDeleteArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companion.
     * @param {CompanionUpdateArgs} args - Arguments to update one Companion.
     * @example
     * // Update one Companion
     * const companion = await prisma.companion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanionUpdateArgs>(args: SelectSubset<T, CompanionUpdateArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companions.
     * @param {CompanionDeleteManyArgs} args - Arguments to filter Companions to delete.
     * @example
     * // Delete a few Companions
     * const { count } = await prisma.companion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanionDeleteManyArgs>(args?: SelectSubset<T, CompanionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companions
     * const companion = await prisma.companion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanionUpdateManyArgs>(args: SelectSubset<T, CompanionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Companion.
     * @param {CompanionUpsertArgs} args - Arguments to update or create a Companion.
     * @example
     * // Update or create a Companion
     * const companion = await prisma.companion.upsert({
     *   create: {
     *     // ... data to create a Companion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companion we want to update
     *   }
     * })
     */
    upsert<T extends CompanionUpsertArgs>(args: SelectSubset<T, CompanionUpsertArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionCountArgs} args - Arguments to filter Companions to count.
     * @example
     * // Count the number of Companions
     * const count = await prisma.companion.count({
     *   where: {
     *     // ... the filter for the Companions we want to count
     *   }
     * })
    **/
    count<T extends CompanionCountArgs>(
      args?: Subset<T, CompanionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanionAggregateArgs>(args: Subset<T, CompanionAggregateArgs>): Prisma.PrismaPromise<GetCompanionAggregateType<T>>

    /**
     * Group by Companion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionGroupByArgs} args - Group by arguments.
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
      T extends CompanionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanionGroupByArgs['orderBy'] }
        : { orderBy?: CompanionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Companion model
   */
  readonly fields: CompanionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Companion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companionOrder<T extends Companion$companionOrderArgs<ExtArgs> = {}>(args?: Subset<T, Companion$companionOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Companion model
   */
  interface CompanionFieldRefs {
    readonly id: FieldRef<"Companion", 'Int'>
    readonly name: FieldRef<"Companion", 'String'>
    readonly hourlyRate: FieldRef<"Companion", 'Decimal'>
    readonly available: FieldRef<"Companion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Companion findUnique
   */
  export type CompanionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion findUniqueOrThrow
   */
  export type CompanionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion findFirst
   */
  export type CompanionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companions.
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companions.
     */
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Companion findFirstOrThrow
   */
  export type CompanionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companions.
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companions.
     */
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Companion findMany
   */
  export type CompanionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companions to fetch.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companions.
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Companion create
   */
  export type CompanionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * The data needed to create a Companion.
     */
    data: XOR<CompanionCreateInput, CompanionUncheckedCreateInput>
  }

  /**
   * Companion createMany
   */
  export type CompanionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companions.
     */
    data: CompanionCreateManyInput | CompanionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Companion update
   */
  export type CompanionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * The data needed to update a Companion.
     */
    data: XOR<CompanionUpdateInput, CompanionUncheckedUpdateInput>
    /**
     * Choose, which Companion to update.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion updateMany
   */
  export type CompanionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companions.
     */
    data: XOR<CompanionUpdateManyMutationInput, CompanionUncheckedUpdateManyInput>
    /**
     * Filter which Companions to update
     */
    where?: CompanionWhereInput
    /**
     * Limit how many Companions to update.
     */
    limit?: number
  }

  /**
   * Companion upsert
   */
  export type CompanionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * The filter to search for the Companion to update in case it exists.
     */
    where: CompanionWhereUniqueInput
    /**
     * In case the Companion found by the `where` argument doesn't exist, create a new Companion with this data.
     */
    create: XOR<CompanionCreateInput, CompanionUncheckedCreateInput>
    /**
     * In case the Companion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanionUpdateInput, CompanionUncheckedUpdateInput>
  }

  /**
   * Companion delete
   */
  export type CompanionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter which Companion to delete.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion deleteMany
   */
  export type CompanionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companions to delete
     */
    where?: CompanionWhereInput
    /**
     * Limit how many Companions to delete.
     */
    limit?: number
  }

  /**
   * Companion.companionOrder
   */
  export type Companion$companionOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    where?: CompanionOrderWhereInput
    orderBy?: CompanionOrderOrderByWithRelationInput | CompanionOrderOrderByWithRelationInput[]
    cursor?: CompanionOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanionOrderScalarFieldEnum | CompanionOrderScalarFieldEnum[]
  }

  /**
   * Companion without action
   */
  export type CompanionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
  }


  /**
   * Model CompanionOrder
   */

  export type AggregateCompanionOrder = {
    _count: CompanionOrderCountAggregateOutputType | null
    _avg: CompanionOrderAvgAggregateOutputType | null
    _sum: CompanionOrderSumAggregateOutputType | null
    _min: CompanionOrderMinAggregateOutputType | null
    _max: CompanionOrderMaxAggregateOutputType | null
  }

  export type CompanionOrderAvgAggregateOutputType = {
    companionId: number | null
    durationMinute: number | null
    total: Decimal | null
  }

  export type CompanionOrderSumAggregateOutputType = {
    companionId: number | null
    durationMinute: number | null
    total: Decimal | null
  }

  export type CompanionOrderMinAggregateOutputType = {
    id: string | null
    companionId: number | null
    durationMinute: number | null
    startTime: Date | null
    endTime: Date | null
    total: Decimal | null
    finisedAt: Date | null
    canceldAt: Date | null
    createdAt: Date | null
    transactionId: string | null
  }

  export type CompanionOrderMaxAggregateOutputType = {
    id: string | null
    companionId: number | null
    durationMinute: number | null
    startTime: Date | null
    endTime: Date | null
    total: Decimal | null
    finisedAt: Date | null
    canceldAt: Date | null
    createdAt: Date | null
    transactionId: string | null
  }

  export type CompanionOrderCountAggregateOutputType = {
    id: number
    companionId: number
    durationMinute: number
    startTime: number
    endTime: number
    total: number
    finisedAt: number
    canceldAt: number
    createdAt: number
    transactionId: number
    _all: number
  }


  export type CompanionOrderAvgAggregateInputType = {
    companionId?: true
    durationMinute?: true
    total?: true
  }

  export type CompanionOrderSumAggregateInputType = {
    companionId?: true
    durationMinute?: true
    total?: true
  }

  export type CompanionOrderMinAggregateInputType = {
    id?: true
    companionId?: true
    durationMinute?: true
    startTime?: true
    endTime?: true
    total?: true
    finisedAt?: true
    canceldAt?: true
    createdAt?: true
    transactionId?: true
  }

  export type CompanionOrderMaxAggregateInputType = {
    id?: true
    companionId?: true
    durationMinute?: true
    startTime?: true
    endTime?: true
    total?: true
    finisedAt?: true
    canceldAt?: true
    createdAt?: true
    transactionId?: true
  }

  export type CompanionOrderCountAggregateInputType = {
    id?: true
    companionId?: true
    durationMinute?: true
    startTime?: true
    endTime?: true
    total?: true
    finisedAt?: true
    canceldAt?: true
    createdAt?: true
    transactionId?: true
    _all?: true
  }

  export type CompanionOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanionOrder to aggregate.
     */
    where?: CompanionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionOrders to fetch.
     */
    orderBy?: CompanionOrderOrderByWithRelationInput | CompanionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanionOrders
    **/
    _count?: true | CompanionOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanionOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanionOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanionOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanionOrderMaxAggregateInputType
  }

  export type GetCompanionOrderAggregateType<T extends CompanionOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanionOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanionOrder[P]>
      : GetScalarType<T[P], AggregateCompanionOrder[P]>
  }




  export type CompanionOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionOrderWhereInput
    orderBy?: CompanionOrderOrderByWithAggregationInput | CompanionOrderOrderByWithAggregationInput[]
    by: CompanionOrderScalarFieldEnum[] | CompanionOrderScalarFieldEnum
    having?: CompanionOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanionOrderCountAggregateInputType | true
    _avg?: CompanionOrderAvgAggregateInputType
    _sum?: CompanionOrderSumAggregateInputType
    _min?: CompanionOrderMinAggregateInputType
    _max?: CompanionOrderMaxAggregateInputType
  }

  export type CompanionOrderGroupByOutputType = {
    id: string
    companionId: number
    durationMinute: number
    startTime: Date
    endTime: Date
    total: Decimal
    finisedAt: Date | null
    canceldAt: Date | null
    createdAt: Date
    transactionId: string
    _count: CompanionOrderCountAggregateOutputType | null
    _avg: CompanionOrderAvgAggregateOutputType | null
    _sum: CompanionOrderSumAggregateOutputType | null
    _min: CompanionOrderMinAggregateOutputType | null
    _max: CompanionOrderMaxAggregateOutputType | null
  }

  type GetCompanionOrderGroupByPayload<T extends CompanionOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanionOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanionOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanionOrderGroupByOutputType[P]>
            : GetScalarType<T[P], CompanionOrderGroupByOutputType[P]>
        }
      >
    >


  export type CompanionOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companionId?: boolean
    durationMinute?: boolean
    startTime?: boolean
    endTime?: boolean
    total?: boolean
    finisedAt?: boolean
    canceldAt?: boolean
    createdAt?: boolean
    transactionId?: boolean
    companion?: boolean | CompanionDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companionOrder"]>



  export type CompanionOrderSelectScalar = {
    id?: boolean
    companionId?: boolean
    durationMinute?: boolean
    startTime?: boolean
    endTime?: boolean
    total?: boolean
    finisedAt?: boolean
    canceldAt?: boolean
    createdAt?: boolean
    transactionId?: boolean
  }

  export type CompanionOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companionId" | "durationMinute" | "startTime" | "endTime" | "total" | "finisedAt" | "canceldAt" | "createdAt" | "transactionId", ExtArgs["result"]["companionOrder"]>
  export type CompanionOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companion?: boolean | CompanionDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $CompanionOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanionOrder"
    objects: {
      companion: Prisma.$CompanionPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companionId: number
      durationMinute: number
      startTime: Date
      endTime: Date
      total: Prisma.Decimal
      finisedAt: Date | null
      canceldAt: Date | null
      createdAt: Date
      transactionId: string
    }, ExtArgs["result"]["companionOrder"]>
    composites: {}
  }

  type CompanionOrderGetPayload<S extends boolean | null | undefined | CompanionOrderDefaultArgs> = $Result.GetResult<Prisma.$CompanionOrderPayload, S>

  type CompanionOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanionOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanionOrderCountAggregateInputType | true
    }

  export interface CompanionOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanionOrder'], meta: { name: 'CompanionOrder' } }
    /**
     * Find zero or one CompanionOrder that matches the filter.
     * @param {CompanionOrderFindUniqueArgs} args - Arguments to find a CompanionOrder
     * @example
     * // Get one CompanionOrder
     * const companionOrder = await prisma.companionOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanionOrderFindUniqueArgs>(args: SelectSubset<T, CompanionOrderFindUniqueArgs<ExtArgs>>): Prisma__CompanionOrderClient<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanionOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanionOrderFindUniqueOrThrowArgs} args - Arguments to find a CompanionOrder
     * @example
     * // Get one CompanionOrder
     * const companionOrder = await prisma.companionOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanionOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanionOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanionOrderClient<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanionOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionOrderFindFirstArgs} args - Arguments to find a CompanionOrder
     * @example
     * // Get one CompanionOrder
     * const companionOrder = await prisma.companionOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanionOrderFindFirstArgs>(args?: SelectSubset<T, CompanionOrderFindFirstArgs<ExtArgs>>): Prisma__CompanionOrderClient<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanionOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionOrderFindFirstOrThrowArgs} args - Arguments to find a CompanionOrder
     * @example
     * // Get one CompanionOrder
     * const companionOrder = await prisma.companionOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanionOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanionOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanionOrderClient<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanionOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanionOrders
     * const companionOrders = await prisma.companionOrder.findMany()
     * 
     * // Get first 10 CompanionOrders
     * const companionOrders = await prisma.companionOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companionOrderWithIdOnly = await prisma.companionOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanionOrderFindManyArgs>(args?: SelectSubset<T, CompanionOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanionOrder.
     * @param {CompanionOrderCreateArgs} args - Arguments to create a CompanionOrder.
     * @example
     * // Create one CompanionOrder
     * const CompanionOrder = await prisma.companionOrder.create({
     *   data: {
     *     // ... data to create a CompanionOrder
     *   }
     * })
     * 
     */
    create<T extends CompanionOrderCreateArgs>(args: SelectSubset<T, CompanionOrderCreateArgs<ExtArgs>>): Prisma__CompanionOrderClient<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanionOrders.
     * @param {CompanionOrderCreateManyArgs} args - Arguments to create many CompanionOrders.
     * @example
     * // Create many CompanionOrders
     * const companionOrder = await prisma.companionOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanionOrderCreateManyArgs>(args?: SelectSubset<T, CompanionOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompanionOrder.
     * @param {CompanionOrderDeleteArgs} args - Arguments to delete one CompanionOrder.
     * @example
     * // Delete one CompanionOrder
     * const CompanionOrder = await prisma.companionOrder.delete({
     *   where: {
     *     // ... filter to delete one CompanionOrder
     *   }
     * })
     * 
     */
    delete<T extends CompanionOrderDeleteArgs>(args: SelectSubset<T, CompanionOrderDeleteArgs<ExtArgs>>): Prisma__CompanionOrderClient<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanionOrder.
     * @param {CompanionOrderUpdateArgs} args - Arguments to update one CompanionOrder.
     * @example
     * // Update one CompanionOrder
     * const companionOrder = await prisma.companionOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanionOrderUpdateArgs>(args: SelectSubset<T, CompanionOrderUpdateArgs<ExtArgs>>): Prisma__CompanionOrderClient<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanionOrders.
     * @param {CompanionOrderDeleteManyArgs} args - Arguments to filter CompanionOrders to delete.
     * @example
     * // Delete a few CompanionOrders
     * const { count } = await prisma.companionOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanionOrderDeleteManyArgs>(args?: SelectSubset<T, CompanionOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanionOrders
     * const companionOrder = await prisma.companionOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanionOrderUpdateManyArgs>(args: SelectSubset<T, CompanionOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanionOrder.
     * @param {CompanionOrderUpsertArgs} args - Arguments to update or create a CompanionOrder.
     * @example
     * // Update or create a CompanionOrder
     * const companionOrder = await prisma.companionOrder.upsert({
     *   create: {
     *     // ... data to create a CompanionOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanionOrder we want to update
     *   }
     * })
     */
    upsert<T extends CompanionOrderUpsertArgs>(args: SelectSubset<T, CompanionOrderUpsertArgs<ExtArgs>>): Prisma__CompanionOrderClient<$Result.GetResult<Prisma.$CompanionOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionOrderCountArgs} args - Arguments to filter CompanionOrders to count.
     * @example
     * // Count the number of CompanionOrders
     * const count = await prisma.companionOrder.count({
     *   where: {
     *     // ... the filter for the CompanionOrders we want to count
     *   }
     * })
    **/
    count<T extends CompanionOrderCountArgs>(
      args?: Subset<T, CompanionOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanionOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanionOrderAggregateArgs>(args: Subset<T, CompanionOrderAggregateArgs>): Prisma.PrismaPromise<GetCompanionOrderAggregateType<T>>

    /**
     * Group by CompanionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionOrderGroupByArgs} args - Group by arguments.
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
      T extends CompanionOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanionOrderGroupByArgs['orderBy'] }
        : { orderBy?: CompanionOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanionOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanionOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanionOrder model
   */
  readonly fields: CompanionOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanionOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanionOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companion<T extends CompanionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanionDefaultArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompanionOrder model
   */
  interface CompanionOrderFieldRefs {
    readonly id: FieldRef<"CompanionOrder", 'String'>
    readonly companionId: FieldRef<"CompanionOrder", 'Int'>
    readonly durationMinute: FieldRef<"CompanionOrder", 'Int'>
    readonly startTime: FieldRef<"CompanionOrder", 'DateTime'>
    readonly endTime: FieldRef<"CompanionOrder", 'DateTime'>
    readonly total: FieldRef<"CompanionOrder", 'Decimal'>
    readonly finisedAt: FieldRef<"CompanionOrder", 'DateTime'>
    readonly canceldAt: FieldRef<"CompanionOrder", 'DateTime'>
    readonly createdAt: FieldRef<"CompanionOrder", 'DateTime'>
    readonly transactionId: FieldRef<"CompanionOrder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompanionOrder findUnique
   */
  export type CompanionOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    /**
     * Filter, which CompanionOrder to fetch.
     */
    where: CompanionOrderWhereUniqueInput
  }

  /**
   * CompanionOrder findUniqueOrThrow
   */
  export type CompanionOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    /**
     * Filter, which CompanionOrder to fetch.
     */
    where: CompanionOrderWhereUniqueInput
  }

  /**
   * CompanionOrder findFirst
   */
  export type CompanionOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    /**
     * Filter, which CompanionOrder to fetch.
     */
    where?: CompanionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionOrders to fetch.
     */
    orderBy?: CompanionOrderOrderByWithRelationInput | CompanionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanionOrders.
     */
    cursor?: CompanionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanionOrders.
     */
    distinct?: CompanionOrderScalarFieldEnum | CompanionOrderScalarFieldEnum[]
  }

  /**
   * CompanionOrder findFirstOrThrow
   */
  export type CompanionOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    /**
     * Filter, which CompanionOrder to fetch.
     */
    where?: CompanionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionOrders to fetch.
     */
    orderBy?: CompanionOrderOrderByWithRelationInput | CompanionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanionOrders.
     */
    cursor?: CompanionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanionOrders.
     */
    distinct?: CompanionOrderScalarFieldEnum | CompanionOrderScalarFieldEnum[]
  }

  /**
   * CompanionOrder findMany
   */
  export type CompanionOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    /**
     * Filter, which CompanionOrders to fetch.
     */
    where?: CompanionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionOrders to fetch.
     */
    orderBy?: CompanionOrderOrderByWithRelationInput | CompanionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanionOrders.
     */
    cursor?: CompanionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionOrders.
     */
    skip?: number
    distinct?: CompanionOrderScalarFieldEnum | CompanionOrderScalarFieldEnum[]
  }

  /**
   * CompanionOrder create
   */
  export type CompanionOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanionOrder.
     */
    data: XOR<CompanionOrderCreateInput, CompanionOrderUncheckedCreateInput>
  }

  /**
   * CompanionOrder createMany
   */
  export type CompanionOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanionOrders.
     */
    data: CompanionOrderCreateManyInput | CompanionOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanionOrder update
   */
  export type CompanionOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanionOrder.
     */
    data: XOR<CompanionOrderUpdateInput, CompanionOrderUncheckedUpdateInput>
    /**
     * Choose, which CompanionOrder to update.
     */
    where: CompanionOrderWhereUniqueInput
  }

  /**
   * CompanionOrder updateMany
   */
  export type CompanionOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanionOrders.
     */
    data: XOR<CompanionOrderUpdateManyMutationInput, CompanionOrderUncheckedUpdateManyInput>
    /**
     * Filter which CompanionOrders to update
     */
    where?: CompanionOrderWhereInput
    /**
     * Limit how many CompanionOrders to update.
     */
    limit?: number
  }

  /**
   * CompanionOrder upsert
   */
  export type CompanionOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanionOrder to update in case it exists.
     */
    where: CompanionOrderWhereUniqueInput
    /**
     * In case the CompanionOrder found by the `where` argument doesn't exist, create a new CompanionOrder with this data.
     */
    create: XOR<CompanionOrderCreateInput, CompanionOrderUncheckedCreateInput>
    /**
     * In case the CompanionOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanionOrderUpdateInput, CompanionOrderUncheckedUpdateInput>
  }

  /**
   * CompanionOrder delete
   */
  export type CompanionOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
    /**
     * Filter which CompanionOrder to delete.
     */
    where: CompanionOrderWhereUniqueInput
  }

  /**
   * CompanionOrder deleteMany
   */
  export type CompanionOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanionOrders to delete
     */
    where?: CompanionOrderWhereInput
    /**
     * Limit how many CompanionOrders to delete.
     */
    limit?: number
  }

  /**
   * CompanionOrder without action
   */
  export type CompanionOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionOrder
     */
    select?: CompanionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionOrder
     */
    omit?: CompanionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionOrderInclude<ExtArgs> | null
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
    username: 'username',
    password: 'password',
    role: 'role',
    deleted: 'deleted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    isActive: 'isActive',
    taxPercent: 'taxPercent',
    servicePercent: 'servicePercent'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    type: 'type',
    hourlyRate: 'hourlyRate',
    status: 'status'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    roomId: 'roomId',
    startTime: 'startTime',
    endTime: 'endTime',
    closed: 'closed',
    durationMinute: 'durationMinute',
    extraMinute: 'extraMinute',
    freeMinute: 'freeMinute',
    deleted: 'deleted',
    userId: 'userId',
    userOut: 'userOut',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    roomTotal: 'roomTotal',
    roomDiscount: 'roomDiscount',
    fnbTotal: 'fnbTotal',
    companionTotal: 'companionTotal',
    subTotal: 'subTotal',
    tax: 'tax',
    service: 'service',
    grandTotal: 'grandTotal',
    note: 'note'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    method: 'method',
    status: 'status',
    amount: 'amount',
    change: 'change',
    paidAt: 'paidAt',
    userId: 'userId',
    note: 'note',
    transactionId: 'transactionId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const FnbScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    trackStock: 'trackStock',
    stock: 'stock',
    price: 'price',
    deleted: 'deleted'
  };

  export type FnbScalarFieldEnum = (typeof FnbScalarFieldEnum)[keyof typeof FnbScalarFieldEnum]


  export const FnbTrackStockScalarFieldEnum: {
    id: 'id',
    suplayer: 'suplayer',
    fnbId: 'fnbId',
    userId: 'userId',
    type: 'type',
    qty: 'qty',
    createdAt: 'createdAt'
  };

  export type FnbTrackStockScalarFieldEnum = (typeof FnbTrackStockScalarFieldEnum)[keyof typeof FnbTrackStockScalarFieldEnum]


  export const FnbOrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    transactionId: 'transactionId',
    itemId: 'itemId',
    total: 'total',
    note: 'note',
    draftAt: 'draftAt',
    sendAt: 'sendAt',
    cancelAt: 'cancelAt'
  };

  export type FnbOrderScalarFieldEnum = (typeof FnbOrderScalarFieldEnum)[keyof typeof FnbOrderScalarFieldEnum]


  export const FnbItemScalarFieldEnum: {
    id: 'id',
    fnbId: 'fnbId',
    qty: 'qty',
    name: 'name',
    price: 'price',
    category: 'category'
  };

  export type FnbItemScalarFieldEnum = (typeof FnbItemScalarFieldEnum)[keyof typeof FnbItemScalarFieldEnum]


  export const CompanionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    hourlyRate: 'hourlyRate',
    available: 'available'
  };

  export type CompanionScalarFieldEnum = (typeof CompanionScalarFieldEnum)[keyof typeof CompanionScalarFieldEnum]


  export const CompanionOrderScalarFieldEnum: {
    id: 'id',
    companionId: 'companionId',
    durationMinute: 'durationMinute',
    startTime: 'startTime',
    endTime: 'endTime',
    total: 'total',
    finisedAt: 'finisedAt',
    canceldAt: 'canceldAt',
    createdAt: 'createdAt',
    transactionId: 'transactionId'
  };

  export type CompanionOrderScalarFieldEnum = (typeof CompanionOrderScalarFieldEnum)[keyof typeof CompanionOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoomOrderByRelevanceFieldEnum: {
    name: 'name',
    type: 'type'
  };

  export type RoomOrderByRelevanceFieldEnum = (typeof RoomOrderByRelevanceFieldEnum)[keyof typeof RoomOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CustomerOrderByRelevanceFieldEnum: {
    name: 'name',
    phone: 'phone'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const TransactionOrderByRelevanceFieldEnum: {
    id: 'id',
    note: 'note'
  };

  export type TransactionOrderByRelevanceFieldEnum = (typeof TransactionOrderByRelevanceFieldEnum)[keyof typeof TransactionOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    note: 'note',
    transactionId: 'transactionId'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const FnbOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type FnbOrderByRelevanceFieldEnum = (typeof FnbOrderByRelevanceFieldEnum)[keyof typeof FnbOrderByRelevanceFieldEnum]


  export const FnbTrackStockOrderByRelevanceFieldEnum: {
    id: 'id',
    suplayer: 'suplayer'
  };

  export type FnbTrackStockOrderByRelevanceFieldEnum = (typeof FnbTrackStockOrderByRelevanceFieldEnum)[keyof typeof FnbTrackStockOrderByRelevanceFieldEnum]


  export const FnbOrderOrderByRelevanceFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    note: 'note'
  };

  export type FnbOrderOrderByRelevanceFieldEnum = (typeof FnbOrderOrderByRelevanceFieldEnum)[keyof typeof FnbOrderOrderByRelevanceFieldEnum]


  export const FnbItemOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type FnbItemOrderByRelevanceFieldEnum = (typeof FnbItemOrderByRelevanceFieldEnum)[keyof typeof FnbItemOrderByRelevanceFieldEnum]


  export const CompanionOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CompanionOrderByRelevanceFieldEnum = (typeof CompanionOrderByRelevanceFieldEnum)[keyof typeof CompanionOrderByRelevanceFieldEnum]


  export const CompanionOrderOrderByRelevanceFieldEnum: {
    id: 'id',
    transactionId: 'transactionId'
  };

  export type CompanionOrderOrderByRelevanceFieldEnum = (typeof CompanionOrderOrderByRelevanceFieldEnum)[keyof typeof CompanionOrderOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'FnbCategory'
   */
  export type EnumFnbCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FnbCategory'>
    


  /**
   * Reference to a field of type 'TypeTrackStock'
   */
  export type EnumTypeTrackStockFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeTrackStock'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    deleted?: BoolFilter<"User"> | boolean
    payment?: PaymentListRelationFilter
    fnbTrackStock?: FnbTrackStockListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted?: SortOrder
    payment?: PaymentOrderByRelationAggregateInput
    fnbTrackStock?: FnbTrackStockOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    deleted?: BoolFilter<"User"> | boolean
    payment?: PaymentListRelationFilter
    fnbTrackStock?: FnbTrackStockListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted?: SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    deleted?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: IntFilter<"Setting"> | number
    isActive?: BoolFilter<"Setting"> | boolean
    taxPercent?: DecimalFilter<"Setting"> | Decimal | DecimalJsLike | number | string
    servicePercent?: DecimalFilter<"Setting"> | Decimal | DecimalJsLike | number | string
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    isActive?: SortOrder
    taxPercent?: SortOrder
    servicePercent?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    isActive?: boolean
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    taxPercent?: DecimalFilter<"Setting"> | Decimal | DecimalJsLike | number | string
    servicePercent?: DecimalFilter<"Setting"> | Decimal | DecimalJsLike | number | string
  }, "id" | "isActive">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    isActive?: SortOrder
    taxPercent?: SortOrder
    servicePercent?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _avg?: SettingAvgOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
    _sum?: SettingSumOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Setting"> | number
    isActive?: BoolWithAggregatesFilter<"Setting"> | boolean
    taxPercent?: DecimalWithAggregatesFilter<"Setting"> | Decimal | DecimalJsLike | number | string
    servicePercent?: DecimalWithAggregatesFilter<"Setting"> | Decimal | DecimalJsLike | number | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    type?: StringFilter<"Room"> | string
    hourlyRate?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    session?: SessionListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    type?: SortOrder
    hourlyRate?: SortOrder
    status?: SortOrder
    session?: SessionOrderByRelationAggregateInput
    _relevance?: RoomOrderByRelevanceInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    capacity?: IntFilter<"Room"> | number
    type?: StringFilter<"Room"> | string
    hourlyRate?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    session?: SessionListRelationFilter
  }, "id" | "name">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    type?: SortOrder
    hourlyRate?: SortOrder
    status?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    name?: StringWithAggregatesFilter<"Room"> | string
    capacity?: IntWithAggregatesFilter<"Room"> | number
    type?: StringWithAggregatesFilter<"Room"> | string
    hourlyRate?: DecimalWithAggregatesFilter<"Room"> | Decimal | DecimalJsLike | number | string
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    session?: SessionListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    session?: SessionOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    session?: SessionListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    customerId?: IntFilter<"Session"> | number
    roomId?: IntFilter<"Session"> | number
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeFilter<"Session"> | Date | string
    closed?: BoolFilter<"Session"> | boolean
    durationMinute?: IntFilter<"Session"> | number
    extraMinute?: IntFilter<"Session"> | number
    freeMinute?: IntFilter<"Session"> | number
    deleted?: BoolFilter<"Session"> | boolean
    userId?: IntFilter<"Session"> | number
    userOut?: IntNullableFilter<"Session"> | number | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    transaction?: TransactionListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    roomId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    closed?: SortOrder
    durationMinute?: SortOrder
    extraMinute?: SortOrder
    freeMinute?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
    userOut?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    transaction?: TransactionOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    customerId?: IntFilter<"Session"> | number
    roomId?: IntFilter<"Session"> | number
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeFilter<"Session"> | Date | string
    closed?: BoolFilter<"Session"> | boolean
    durationMinute?: IntFilter<"Session"> | number
    extraMinute?: IntFilter<"Session"> | number
    freeMinute?: IntFilter<"Session"> | number
    deleted?: BoolFilter<"Session"> | boolean
    userId?: IntFilter<"Session"> | number
    userOut?: IntNullableFilter<"Session"> | number | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    transaction?: TransactionListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    roomId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    closed?: SortOrder
    durationMinute?: SortOrder
    extraMinute?: SortOrder
    freeMinute?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
    userOut?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    customerId?: IntWithAggregatesFilter<"Session"> | number
    roomId?: IntWithAggregatesFilter<"Session"> | number
    startTime?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    closed?: BoolWithAggregatesFilter<"Session"> | boolean
    durationMinute?: IntWithAggregatesFilter<"Session"> | number
    extraMinute?: IntWithAggregatesFilter<"Session"> | number
    freeMinute?: IntWithAggregatesFilter<"Session"> | number
    deleted?: BoolWithAggregatesFilter<"Session"> | boolean
    userId?: IntWithAggregatesFilter<"Session"> | number
    userOut?: IntNullableWithAggregatesFilter<"Session"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    sessionId?: IntFilter<"Transaction"> | number
    roomTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    service?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"Transaction"> | string | null
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    fnbOrder?: FnbOrderListRelationFilter
    payment?: PaymentListRelationFilter
    companionOrder?: CompanionOrderListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    roomTotal?: SortOrder
    roomDiscount?: SortOrder
    fnbTotal?: SortOrder
    companionTotal?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    grandTotal?: SortOrder
    note?: SortOrderInput | SortOrder
    session?: SessionOrderByWithRelationInput
    fnbOrder?: FnbOrderOrderByRelationAggregateInput
    payment?: PaymentOrderByRelationAggregateInput
    companionOrder?: CompanionOrderOrderByRelationAggregateInput
    _relevance?: TransactionOrderByRelevanceInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    sessionId?: IntFilter<"Transaction"> | number
    roomTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    service?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"Transaction"> | string | null
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    fnbOrder?: FnbOrderListRelationFilter
    payment?: PaymentListRelationFilter
    companionOrder?: CompanionOrderListRelationFilter
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    roomTotal?: SortOrder
    roomDiscount?: SortOrder
    fnbTotal?: SortOrder
    companionTotal?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    grandTotal?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    sessionId?: IntWithAggregatesFilter<"Transaction"> | number
    roomTotal?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    service?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    change?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    userId?: IntFilter<"Payment"> | number
    note?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringFilter<"Payment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    method?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    change?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    note?: SortOrderInput | SortOrder
    transactionId?: SortOrder
    user?: UserOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    change?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    userId?: IntFilter<"Payment"> | number
    note?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringFilter<"Payment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    method?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    change?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    note?: SortOrderInput | SortOrder
    transactionId?: SortOrder
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
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    change?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Payment"> | number
    note?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    transactionId?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type FnbWhereInput = {
    AND?: FnbWhereInput | FnbWhereInput[]
    OR?: FnbWhereInput[]
    NOT?: FnbWhereInput | FnbWhereInput[]
    id?: IntFilter<"Fnb"> | number
    name?: StringFilter<"Fnb"> | string
    category?: EnumFnbCategoryFilter<"Fnb"> | $Enums.FnbCategory
    trackStock?: BoolFilter<"Fnb"> | boolean
    stock?: IntFilter<"Fnb"> | number
    price?: DecimalFilter<"Fnb"> | Decimal | DecimalJsLike | number | string
    deleted?: BoolFilter<"Fnb"> | boolean
    fnbTrackStock?: FnbTrackStockListRelationFilter
    fnbItem?: FnbItemListRelationFilter
  }

  export type FnbOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    trackStock?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    deleted?: SortOrder
    fnbTrackStock?: FnbTrackStockOrderByRelationAggregateInput
    fnbItem?: FnbItemOrderByRelationAggregateInput
    _relevance?: FnbOrderByRelevanceInput
  }

  export type FnbWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FnbWhereInput | FnbWhereInput[]
    OR?: FnbWhereInput[]
    NOT?: FnbWhereInput | FnbWhereInput[]
    category?: EnumFnbCategoryFilter<"Fnb"> | $Enums.FnbCategory
    trackStock?: BoolFilter<"Fnb"> | boolean
    stock?: IntFilter<"Fnb"> | number
    price?: DecimalFilter<"Fnb"> | Decimal | DecimalJsLike | number | string
    deleted?: BoolFilter<"Fnb"> | boolean
    fnbTrackStock?: FnbTrackStockListRelationFilter
    fnbItem?: FnbItemListRelationFilter
  }, "id" | "name">

  export type FnbOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    trackStock?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    deleted?: SortOrder
    _count?: FnbCountOrderByAggregateInput
    _avg?: FnbAvgOrderByAggregateInput
    _max?: FnbMaxOrderByAggregateInput
    _min?: FnbMinOrderByAggregateInput
    _sum?: FnbSumOrderByAggregateInput
  }

  export type FnbScalarWhereWithAggregatesInput = {
    AND?: FnbScalarWhereWithAggregatesInput | FnbScalarWhereWithAggregatesInput[]
    OR?: FnbScalarWhereWithAggregatesInput[]
    NOT?: FnbScalarWhereWithAggregatesInput | FnbScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fnb"> | number
    name?: StringWithAggregatesFilter<"Fnb"> | string
    category?: EnumFnbCategoryWithAggregatesFilter<"Fnb"> | $Enums.FnbCategory
    trackStock?: BoolWithAggregatesFilter<"Fnb"> | boolean
    stock?: IntWithAggregatesFilter<"Fnb"> | number
    price?: DecimalWithAggregatesFilter<"Fnb"> | Decimal | DecimalJsLike | number | string
    deleted?: BoolWithAggregatesFilter<"Fnb"> | boolean
  }

  export type FnbTrackStockWhereInput = {
    AND?: FnbTrackStockWhereInput | FnbTrackStockWhereInput[]
    OR?: FnbTrackStockWhereInput[]
    NOT?: FnbTrackStockWhereInput | FnbTrackStockWhereInput[]
    id?: StringFilter<"FnbTrackStock"> | string
    suplayer?: StringFilter<"FnbTrackStock"> | string
    fnbId?: IntFilter<"FnbTrackStock"> | number
    userId?: IntFilter<"FnbTrackStock"> | number
    type?: EnumTypeTrackStockFilter<"FnbTrackStock"> | $Enums.TypeTrackStock
    qty?: IntFilter<"FnbTrackStock"> | number
    createdAt?: DateTimeFilter<"FnbTrackStock"> | Date | string
    fnb?: XOR<FnbScalarRelationFilter, FnbWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FnbTrackStockOrderByWithRelationInput = {
    id?: SortOrder
    suplayer?: SortOrder
    fnbId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    fnb?: FnbOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: FnbTrackStockOrderByRelevanceInput
  }

  export type FnbTrackStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FnbTrackStockWhereInput | FnbTrackStockWhereInput[]
    OR?: FnbTrackStockWhereInput[]
    NOT?: FnbTrackStockWhereInput | FnbTrackStockWhereInput[]
    suplayer?: StringFilter<"FnbTrackStock"> | string
    fnbId?: IntFilter<"FnbTrackStock"> | number
    userId?: IntFilter<"FnbTrackStock"> | number
    type?: EnumTypeTrackStockFilter<"FnbTrackStock"> | $Enums.TypeTrackStock
    qty?: IntFilter<"FnbTrackStock"> | number
    createdAt?: DateTimeFilter<"FnbTrackStock"> | Date | string
    fnb?: XOR<FnbScalarRelationFilter, FnbWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FnbTrackStockOrderByWithAggregationInput = {
    id?: SortOrder
    suplayer?: SortOrder
    fnbId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    _count?: FnbTrackStockCountOrderByAggregateInput
    _avg?: FnbTrackStockAvgOrderByAggregateInput
    _max?: FnbTrackStockMaxOrderByAggregateInput
    _min?: FnbTrackStockMinOrderByAggregateInput
    _sum?: FnbTrackStockSumOrderByAggregateInput
  }

  export type FnbTrackStockScalarWhereWithAggregatesInput = {
    AND?: FnbTrackStockScalarWhereWithAggregatesInput | FnbTrackStockScalarWhereWithAggregatesInput[]
    OR?: FnbTrackStockScalarWhereWithAggregatesInput[]
    NOT?: FnbTrackStockScalarWhereWithAggregatesInput | FnbTrackStockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FnbTrackStock"> | string
    suplayer?: StringWithAggregatesFilter<"FnbTrackStock"> | string
    fnbId?: IntWithAggregatesFilter<"FnbTrackStock"> | number
    userId?: IntWithAggregatesFilter<"FnbTrackStock"> | number
    type?: EnumTypeTrackStockWithAggregatesFilter<"FnbTrackStock"> | $Enums.TypeTrackStock
    qty?: IntWithAggregatesFilter<"FnbTrackStock"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FnbTrackStock"> | Date | string
  }

  export type FnbOrderWhereInput = {
    AND?: FnbOrderWhereInput | FnbOrderWhereInput[]
    OR?: FnbOrderWhereInput[]
    NOT?: FnbOrderWhereInput | FnbOrderWhereInput[]
    id?: StringFilter<"FnbOrder"> | string
    status?: EnumOrderStatusFilter<"FnbOrder"> | $Enums.OrderStatus
    transactionId?: StringFilter<"FnbOrder"> | string
    itemId?: IntFilter<"FnbOrder"> | number
    total?: DecimalFilter<"FnbOrder"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"FnbOrder"> | string | null
    draftAt?: DateTimeFilter<"FnbOrder"> | Date | string
    sendAt?: DateTimeNullableFilter<"FnbOrder"> | Date | string | null
    cancelAt?: DateTimeNullableFilter<"FnbOrder"> | Date | string | null
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    item?: XOR<FnbItemScalarRelationFilter, FnbItemWhereInput>
  }

  export type FnbOrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    itemId?: SortOrder
    total?: SortOrder
    note?: SortOrderInput | SortOrder
    draftAt?: SortOrder
    sendAt?: SortOrderInput | SortOrder
    cancelAt?: SortOrderInput | SortOrder
    transaction?: TransactionOrderByWithRelationInput
    item?: FnbItemOrderByWithRelationInput
    _relevance?: FnbOrderOrderByRelevanceInput
  }

  export type FnbOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FnbOrderWhereInput | FnbOrderWhereInput[]
    OR?: FnbOrderWhereInput[]
    NOT?: FnbOrderWhereInput | FnbOrderWhereInput[]
    status?: EnumOrderStatusFilter<"FnbOrder"> | $Enums.OrderStatus
    transactionId?: StringFilter<"FnbOrder"> | string
    itemId?: IntFilter<"FnbOrder"> | number
    total?: DecimalFilter<"FnbOrder"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"FnbOrder"> | string | null
    draftAt?: DateTimeFilter<"FnbOrder"> | Date | string
    sendAt?: DateTimeNullableFilter<"FnbOrder"> | Date | string | null
    cancelAt?: DateTimeNullableFilter<"FnbOrder"> | Date | string | null
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    item?: XOR<FnbItemScalarRelationFilter, FnbItemWhereInput>
  }, "id">

  export type FnbOrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    itemId?: SortOrder
    total?: SortOrder
    note?: SortOrderInput | SortOrder
    draftAt?: SortOrder
    sendAt?: SortOrderInput | SortOrder
    cancelAt?: SortOrderInput | SortOrder
    _count?: FnbOrderCountOrderByAggregateInput
    _avg?: FnbOrderAvgOrderByAggregateInput
    _max?: FnbOrderMaxOrderByAggregateInput
    _min?: FnbOrderMinOrderByAggregateInput
    _sum?: FnbOrderSumOrderByAggregateInput
  }

  export type FnbOrderScalarWhereWithAggregatesInput = {
    AND?: FnbOrderScalarWhereWithAggregatesInput | FnbOrderScalarWhereWithAggregatesInput[]
    OR?: FnbOrderScalarWhereWithAggregatesInput[]
    NOT?: FnbOrderScalarWhereWithAggregatesInput | FnbOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FnbOrder"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"FnbOrder"> | $Enums.OrderStatus
    transactionId?: StringWithAggregatesFilter<"FnbOrder"> | string
    itemId?: IntWithAggregatesFilter<"FnbOrder"> | number
    total?: DecimalWithAggregatesFilter<"FnbOrder"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableWithAggregatesFilter<"FnbOrder"> | string | null
    draftAt?: DateTimeWithAggregatesFilter<"FnbOrder"> | Date | string
    sendAt?: DateTimeNullableWithAggregatesFilter<"FnbOrder"> | Date | string | null
    cancelAt?: DateTimeNullableWithAggregatesFilter<"FnbOrder"> | Date | string | null
  }

  export type FnbItemWhereInput = {
    AND?: FnbItemWhereInput | FnbItemWhereInput[]
    OR?: FnbItemWhereInput[]
    NOT?: FnbItemWhereInput | FnbItemWhereInput[]
    id?: IntFilter<"FnbItem"> | number
    fnbId?: IntFilter<"FnbItem"> | number
    qty?: IntFilter<"FnbItem"> | number
    name?: StringFilter<"FnbItem"> | string
    price?: DecimalFilter<"FnbItem"> | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFilter<"FnbItem"> | $Enums.FnbCategory
    fnb?: XOR<FnbScalarRelationFilter, FnbWhereInput>
    fnbOrder?: FnbOrderListRelationFilter
  }

  export type FnbItemOrderByWithRelationInput = {
    id?: SortOrder
    fnbId?: SortOrder
    qty?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    fnb?: FnbOrderByWithRelationInput
    fnbOrder?: FnbOrderOrderByRelationAggregateInput
    _relevance?: FnbItemOrderByRelevanceInput
  }

  export type FnbItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FnbItemWhereInput | FnbItemWhereInput[]
    OR?: FnbItemWhereInput[]
    NOT?: FnbItemWhereInput | FnbItemWhereInput[]
    fnbId?: IntFilter<"FnbItem"> | number
    qty?: IntFilter<"FnbItem"> | number
    name?: StringFilter<"FnbItem"> | string
    price?: DecimalFilter<"FnbItem"> | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFilter<"FnbItem"> | $Enums.FnbCategory
    fnb?: XOR<FnbScalarRelationFilter, FnbWhereInput>
    fnbOrder?: FnbOrderListRelationFilter
  }, "id">

  export type FnbItemOrderByWithAggregationInput = {
    id?: SortOrder
    fnbId?: SortOrder
    qty?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    _count?: FnbItemCountOrderByAggregateInput
    _avg?: FnbItemAvgOrderByAggregateInput
    _max?: FnbItemMaxOrderByAggregateInput
    _min?: FnbItemMinOrderByAggregateInput
    _sum?: FnbItemSumOrderByAggregateInput
  }

  export type FnbItemScalarWhereWithAggregatesInput = {
    AND?: FnbItemScalarWhereWithAggregatesInput | FnbItemScalarWhereWithAggregatesInput[]
    OR?: FnbItemScalarWhereWithAggregatesInput[]
    NOT?: FnbItemScalarWhereWithAggregatesInput | FnbItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FnbItem"> | number
    fnbId?: IntWithAggregatesFilter<"FnbItem"> | number
    qty?: IntWithAggregatesFilter<"FnbItem"> | number
    name?: StringWithAggregatesFilter<"FnbItem"> | string
    price?: DecimalWithAggregatesFilter<"FnbItem"> | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryWithAggregatesFilter<"FnbItem"> | $Enums.FnbCategory
  }

  export type CompanionWhereInput = {
    AND?: CompanionWhereInput | CompanionWhereInput[]
    OR?: CompanionWhereInput[]
    NOT?: CompanionWhereInput | CompanionWhereInput[]
    id?: IntFilter<"Companion"> | number
    name?: StringFilter<"Companion"> | string
    hourlyRate?: DecimalFilter<"Companion"> | Decimal | DecimalJsLike | number | string
    available?: BoolFilter<"Companion"> | boolean
    companionOrder?: CompanionOrderListRelationFilter
  }

  export type CompanionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    hourlyRate?: SortOrder
    available?: SortOrder
    companionOrder?: CompanionOrderOrderByRelationAggregateInput
    _relevance?: CompanionOrderByRelevanceInput
  }

  export type CompanionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanionWhereInput | CompanionWhereInput[]
    OR?: CompanionWhereInput[]
    NOT?: CompanionWhereInput | CompanionWhereInput[]
    name?: StringFilter<"Companion"> | string
    hourlyRate?: DecimalFilter<"Companion"> | Decimal | DecimalJsLike | number | string
    available?: BoolFilter<"Companion"> | boolean
    companionOrder?: CompanionOrderListRelationFilter
  }, "id">

  export type CompanionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    hourlyRate?: SortOrder
    available?: SortOrder
    _count?: CompanionCountOrderByAggregateInput
    _avg?: CompanionAvgOrderByAggregateInput
    _max?: CompanionMaxOrderByAggregateInput
    _min?: CompanionMinOrderByAggregateInput
    _sum?: CompanionSumOrderByAggregateInput
  }

  export type CompanionScalarWhereWithAggregatesInput = {
    AND?: CompanionScalarWhereWithAggregatesInput | CompanionScalarWhereWithAggregatesInput[]
    OR?: CompanionScalarWhereWithAggregatesInput[]
    NOT?: CompanionScalarWhereWithAggregatesInput | CompanionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Companion"> | number
    name?: StringWithAggregatesFilter<"Companion"> | string
    hourlyRate?: DecimalWithAggregatesFilter<"Companion"> | Decimal | DecimalJsLike | number | string
    available?: BoolWithAggregatesFilter<"Companion"> | boolean
  }

  export type CompanionOrderWhereInput = {
    AND?: CompanionOrderWhereInput | CompanionOrderWhereInput[]
    OR?: CompanionOrderWhereInput[]
    NOT?: CompanionOrderWhereInput | CompanionOrderWhereInput[]
    id?: StringFilter<"CompanionOrder"> | string
    companionId?: IntFilter<"CompanionOrder"> | number
    durationMinute?: IntFilter<"CompanionOrder"> | number
    startTime?: DateTimeFilter<"CompanionOrder"> | Date | string
    endTime?: DateTimeFilter<"CompanionOrder"> | Date | string
    total?: DecimalFilter<"CompanionOrder"> | Decimal | DecimalJsLike | number | string
    finisedAt?: DateTimeNullableFilter<"CompanionOrder"> | Date | string | null
    canceldAt?: DateTimeNullableFilter<"CompanionOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanionOrder"> | Date | string
    transactionId?: StringFilter<"CompanionOrder"> | string
    companion?: XOR<CompanionScalarRelationFilter, CompanionWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }

  export type CompanionOrderOrderByWithRelationInput = {
    id?: SortOrder
    companionId?: SortOrder
    durationMinute?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    total?: SortOrder
    finisedAt?: SortOrderInput | SortOrder
    canceldAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    transactionId?: SortOrder
    companion?: CompanionOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
    _relevance?: CompanionOrderOrderByRelevanceInput
  }

  export type CompanionOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanionOrderWhereInput | CompanionOrderWhereInput[]
    OR?: CompanionOrderWhereInput[]
    NOT?: CompanionOrderWhereInput | CompanionOrderWhereInput[]
    companionId?: IntFilter<"CompanionOrder"> | number
    durationMinute?: IntFilter<"CompanionOrder"> | number
    startTime?: DateTimeFilter<"CompanionOrder"> | Date | string
    endTime?: DateTimeFilter<"CompanionOrder"> | Date | string
    total?: DecimalFilter<"CompanionOrder"> | Decimal | DecimalJsLike | number | string
    finisedAt?: DateTimeNullableFilter<"CompanionOrder"> | Date | string | null
    canceldAt?: DateTimeNullableFilter<"CompanionOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanionOrder"> | Date | string
    transactionId?: StringFilter<"CompanionOrder"> | string
    companion?: XOR<CompanionScalarRelationFilter, CompanionWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }, "id">

  export type CompanionOrderOrderByWithAggregationInput = {
    id?: SortOrder
    companionId?: SortOrder
    durationMinute?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    total?: SortOrder
    finisedAt?: SortOrderInput | SortOrder
    canceldAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    transactionId?: SortOrder
    _count?: CompanionOrderCountOrderByAggregateInput
    _avg?: CompanionOrderAvgOrderByAggregateInput
    _max?: CompanionOrderMaxOrderByAggregateInput
    _min?: CompanionOrderMinOrderByAggregateInput
    _sum?: CompanionOrderSumOrderByAggregateInput
  }

  export type CompanionOrderScalarWhereWithAggregatesInput = {
    AND?: CompanionOrderScalarWhereWithAggregatesInput | CompanionOrderScalarWhereWithAggregatesInput[]
    OR?: CompanionOrderScalarWhereWithAggregatesInput[]
    NOT?: CompanionOrderScalarWhereWithAggregatesInput | CompanionOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanionOrder"> | string
    companionId?: IntWithAggregatesFilter<"CompanionOrder"> | number
    durationMinute?: IntWithAggregatesFilter<"CompanionOrder"> | number
    startTime?: DateTimeWithAggregatesFilter<"CompanionOrder"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"CompanionOrder"> | Date | string
    total?: DecimalWithAggregatesFilter<"CompanionOrder"> | Decimal | DecimalJsLike | number | string
    finisedAt?: DateTimeNullableWithAggregatesFilter<"CompanionOrder"> | Date | string | null
    canceldAt?: DateTimeNullableWithAggregatesFilter<"CompanionOrder"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CompanionOrder"> | Date | string
    transactionId?: StringWithAggregatesFilter<"CompanionOrder"> | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    role?: $Enums.UserRole
    deleted?: boolean
    payment?: PaymentCreateNestedManyWithoutUserInput
    fnbTrackStock?: FnbTrackStockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.UserRole
    deleted?: boolean
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    fnbTrackStock?: FnbTrackStockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    deleted?: BoolFieldUpdateOperationsInput | boolean
    payment?: PaymentUpdateManyWithoutUserNestedInput
    fnbTrackStock?: FnbTrackStockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    deleted?: BoolFieldUpdateOperationsInput | boolean
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    fnbTrackStock?: FnbTrackStockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.UserRole
    deleted?: boolean
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingCreateInput = {
    isActive?: boolean
    taxPercent?: Decimal | DecimalJsLike | number | string
    servicePercent?: Decimal | DecimalJsLike | number | string
  }

  export type SettingUncheckedCreateInput = {
    id?: number
    isActive?: boolean
    taxPercent?: Decimal | DecimalJsLike | number | string
    servicePercent?: Decimal | DecimalJsLike | number | string
  }

  export type SettingUpdateInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servicePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servicePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SettingCreateManyInput = {
    id?: number
    isActive?: boolean
    taxPercent?: Decimal | DecimalJsLike | number | string
    servicePercent?: Decimal | DecimalJsLike | number | string
  }

  export type SettingUpdateManyMutationInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servicePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    taxPercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    servicePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RoomCreateInput = {
    name: string
    capacity?: number
    type?: string
    hourlyRate?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RoomStatus
    session?: SessionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    name: string
    capacity?: number
    type?: string
    hourlyRate?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RoomStatus
    session?: SessionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    session?: SessionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    session?: SessionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    name: string
    capacity?: number
    type?: string
    hourlyRate?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RoomStatus
  }

  export type RoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type CustomerCreateInput = {
    name: string
    phone?: string | null
    session?: SessionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    session?: SessionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    session?: SessionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    session?: SessionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSessionInput
    room: RoomCreateNestedOneWithoutSessionInput
    transaction?: TransactionCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    customerId: number
    roomId: number
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSessionNestedInput
    room?: RoomUpdateOneRequiredWithoutSessionNestedInput
    transaction?: TransactionUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: number
    customerId: number
    roomId: number
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
    session: SessionCreateNestedOneWithoutTransactionInput
    fnbOrder?: FnbOrderCreateNestedManyWithoutTransactionInput
    payment?: PaymentCreateNestedManyWithoutTransactionInput
    companionOrder?: CompanionOrderCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    sessionId: number
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
    fnbOrder?: FnbOrderUncheckedCreateNestedManyWithoutTransactionInput
    payment?: PaymentUncheckedCreateNestedManyWithoutTransactionInput
    companionOrder?: CompanionOrderUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    session?: SessionUpdateOneRequiredWithoutTransactionNestedInput
    fnbOrder?: FnbOrderUpdateManyWithoutTransactionNestedInput
    payment?: PaymentUpdateManyWithoutTransactionNestedInput
    companionOrder?: CompanionOrderUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: IntFieldUpdateOperationsInput | number
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fnbOrder?: FnbOrderUncheckedUpdateManyWithoutTransactionNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutTransactionNestedInput
    companionOrder?: CompanionOrderUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    sessionId: number
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: IntFieldUpdateOperationsInput | number
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateInput = {
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    amount?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string | null
    note?: string | null
    user: UserCreateNestedOneWithoutPaymentInput
    transaction: TransactionCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    amount?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string | null
    userId: number
    note?: string | null
    transactionId: string
  }

  export type PaymentUpdateInput = {
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    amount?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string | null
    userId: number
    note?: string | null
    transactionId: string
  }

  export type PaymentUpdateManyMutationInput = {
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type FnbCreateInput = {
    name: string
    category?: $Enums.FnbCategory
    trackStock?: boolean
    stock?: number
    price?: Decimal | DecimalJsLike | number | string
    deleted?: boolean
    fnbTrackStock?: FnbTrackStockCreateNestedManyWithoutFnbInput
    fnbItem?: FnbItemCreateNestedManyWithoutFnbInput
  }

  export type FnbUncheckedCreateInput = {
    id?: number
    name: string
    category?: $Enums.FnbCategory
    trackStock?: boolean
    stock?: number
    price?: Decimal | DecimalJsLike | number | string
    deleted?: boolean
    fnbTrackStock?: FnbTrackStockUncheckedCreateNestedManyWithoutFnbInput
    fnbItem?: FnbItemUncheckedCreateNestedManyWithoutFnbInput
  }

  export type FnbUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fnbTrackStock?: FnbTrackStockUpdateManyWithoutFnbNestedInput
    fnbItem?: FnbItemUpdateManyWithoutFnbNestedInput
  }

  export type FnbUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fnbTrackStock?: FnbTrackStockUncheckedUpdateManyWithoutFnbNestedInput
    fnbItem?: FnbItemUncheckedUpdateManyWithoutFnbNestedInput
  }

  export type FnbCreateManyInput = {
    id?: number
    name: string
    category?: $Enums.FnbCategory
    trackStock?: boolean
    stock?: number
    price?: Decimal | DecimalJsLike | number | string
    deleted?: boolean
  }

  export type FnbUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FnbUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FnbTrackStockCreateInput = {
    id?: string
    suplayer: string
    type: $Enums.TypeTrackStock
    qty: number
    createdAt?: Date | string
    fnb: FnbCreateNestedOneWithoutFnbTrackStockInput
    user: UserCreateNestedOneWithoutFnbTrackStockInput
  }

  export type FnbTrackStockUncheckedCreateInput = {
    id?: string
    suplayer: string
    fnbId: number
    userId: number
    type: $Enums.TypeTrackStock
    qty: number
    createdAt?: Date | string
  }

  export type FnbTrackStockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    suplayer?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeTrackStockFieldUpdateOperationsInput | $Enums.TypeTrackStock
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fnb?: FnbUpdateOneRequiredWithoutFnbTrackStockNestedInput
    user?: UserUpdateOneRequiredWithoutFnbTrackStockNestedInput
  }

  export type FnbTrackStockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    suplayer?: StringFieldUpdateOperationsInput | string
    fnbId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeTrackStockFieldUpdateOperationsInput | $Enums.TypeTrackStock
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FnbTrackStockCreateManyInput = {
    id?: string
    suplayer: string
    fnbId: number
    userId: number
    type: $Enums.TypeTrackStock
    qty: number
    createdAt?: Date | string
  }

  export type FnbTrackStockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    suplayer?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeTrackStockFieldUpdateOperationsInput | $Enums.TypeTrackStock
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FnbTrackStockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    suplayer?: StringFieldUpdateOperationsInput | string
    fnbId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeTrackStockFieldUpdateOperationsInput | $Enums.TypeTrackStock
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FnbOrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    note?: string | null
    draftAt?: Date | string
    sendAt?: Date | string | null
    cancelAt?: Date | string | null
    transaction: TransactionCreateNestedOneWithoutFnbOrderInput
    item: FnbItemCreateNestedOneWithoutFnbOrderInput
  }

  export type FnbOrderUncheckedCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    transactionId: string
    itemId: number
    total?: Decimal | DecimalJsLike | number | string
    note?: string | null
    draftAt?: Date | string
    sendAt?: Date | string | null
    cancelAt?: Date | string | null
  }

  export type FnbOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    draftAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateOneRequiredWithoutFnbOrderNestedInput
    item?: FnbItemUpdateOneRequiredWithoutFnbOrderNestedInput
  }

  export type FnbOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    draftAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FnbOrderCreateManyInput = {
    id?: string
    status?: $Enums.OrderStatus
    transactionId: string
    itemId: number
    total?: Decimal | DecimalJsLike | number | string
    note?: string | null
    draftAt?: Date | string
    sendAt?: Date | string | null
    cancelAt?: Date | string | null
  }

  export type FnbOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    draftAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FnbOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    draftAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FnbItemCreateInput = {
    qty: number
    name: string
    price?: Decimal | DecimalJsLike | number | string
    category?: $Enums.FnbCategory
    fnb: FnbCreateNestedOneWithoutFnbItemInput
    fnbOrder?: FnbOrderCreateNestedManyWithoutItemInput
  }

  export type FnbItemUncheckedCreateInput = {
    id?: number
    fnbId: number
    qty: number
    name: string
    price?: Decimal | DecimalJsLike | number | string
    category?: $Enums.FnbCategory
    fnbOrder?: FnbOrderUncheckedCreateNestedManyWithoutItemInput
  }

  export type FnbItemUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    fnb?: FnbUpdateOneRequiredWithoutFnbItemNestedInput
    fnbOrder?: FnbOrderUpdateManyWithoutItemNestedInput
  }

  export type FnbItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fnbId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    fnbOrder?: FnbOrderUncheckedUpdateManyWithoutItemNestedInput
  }

  export type FnbItemCreateManyInput = {
    id?: number
    fnbId: number
    qty: number
    name: string
    price?: Decimal | DecimalJsLike | number | string
    category?: $Enums.FnbCategory
  }

  export type FnbItemUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
  }

  export type FnbItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fnbId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
  }

  export type CompanionCreateInput = {
    name: string
    hourlyRate?: Decimal | DecimalJsLike | number | string
    available?: boolean
    companionOrder?: CompanionOrderCreateNestedManyWithoutCompanionInput
  }

  export type CompanionUncheckedCreateInput = {
    id?: number
    name: string
    hourlyRate?: Decimal | DecimalJsLike | number | string
    available?: boolean
    companionOrder?: CompanionOrderUncheckedCreateNestedManyWithoutCompanionInput
  }

  export type CompanionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
    companionOrder?: CompanionOrderUpdateManyWithoutCompanionNestedInput
  }

  export type CompanionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
    companionOrder?: CompanionOrderUncheckedUpdateManyWithoutCompanionNestedInput
  }

  export type CompanionCreateManyInput = {
    id?: number
    name: string
    hourlyRate?: Decimal | DecimalJsLike | number | string
    available?: boolean
  }

  export type CompanionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompanionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompanionOrderCreateInput = {
    id?: string
    durationMinute: number
    startTime: Date | string
    endTime: Date | string
    total?: Decimal | DecimalJsLike | number | string
    finisedAt?: Date | string | null
    canceldAt?: Date | string | null
    createdAt?: Date | string
    companion: CompanionCreateNestedOneWithoutCompanionOrderInput
    transaction: TransactionCreateNestedOneWithoutCompanionOrderInput
  }

  export type CompanionOrderUncheckedCreateInput = {
    id?: string
    companionId: number
    durationMinute: number
    startTime: Date | string
    endTime: Date | string
    total?: Decimal | DecimalJsLike | number | string
    finisedAt?: Date | string | null
    canceldAt?: Date | string | null
    createdAt?: Date | string
    transactionId: string
  }

  export type CompanionOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMinute?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companion?: CompanionUpdateOneRequiredWithoutCompanionOrderNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutCompanionOrderNestedInput
  }

  export type CompanionOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionId?: IntFieldUpdateOperationsInput | number
    durationMinute?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanionOrderCreateManyInput = {
    id?: string
    companionId: number
    durationMinute: number
    startTime: Date | string
    endTime: Date | string
    total?: Decimal | DecimalJsLike | number | string
    finisedAt?: Date | string | null
    canceldAt?: Date | string | null
    createdAt?: Date | string
    transactionId: string
  }

  export type CompanionOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMinute?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionId?: IntFieldUpdateOperationsInput | number
    durationMinute?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: StringFieldUpdateOperationsInput | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type FnbTrackStockListRelationFilter = {
    every?: FnbTrackStockWhereInput
    some?: FnbTrackStockWhereInput
    none?: FnbTrackStockWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FnbTrackStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    taxPercent?: SortOrder
    servicePercent?: SortOrder
  }

  export type SettingAvgOrderByAggregateInput = {
    id?: SortOrder
    taxPercent?: SortOrder
    servicePercent?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    taxPercent?: SortOrder
    servicePercent?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    taxPercent?: SortOrder
    servicePercent?: SortOrder
  }

  export type SettingSumOrderByAggregateInput = {
    id?: SortOrder
    taxPercent?: SortOrder
    servicePercent?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelevanceInput = {
    fields: RoomOrderByRelevanceFieldEnum | RoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    type?: SortOrder
    hourlyRate?: SortOrder
    status?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    hourlyRate?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    type?: SortOrder
    hourlyRate?: SortOrder
    status?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    type?: SortOrder
    hourlyRate?: SortOrder
    status?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    hourlyRate?: SortOrder
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    roomId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    closed?: SortOrder
    durationMinute?: SortOrder
    extraMinute?: SortOrder
    freeMinute?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
    userOut?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    roomId?: SortOrder
    durationMinute?: SortOrder
    extraMinute?: SortOrder
    freeMinute?: SortOrder
    userId?: SortOrder
    userOut?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    roomId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    closed?: SortOrder
    durationMinute?: SortOrder
    extraMinute?: SortOrder
    freeMinute?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
    userOut?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    roomId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    closed?: SortOrder
    durationMinute?: SortOrder
    extraMinute?: SortOrder
    freeMinute?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
    userOut?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    roomId?: SortOrder
    durationMinute?: SortOrder
    extraMinute?: SortOrder
    freeMinute?: SortOrder
    userId?: SortOrder
    userOut?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type FnbOrderListRelationFilter = {
    every?: FnbOrderWhereInput
    some?: FnbOrderWhereInput
    none?: FnbOrderWhereInput
  }

  export type CompanionOrderListRelationFilter = {
    every?: CompanionOrderWhereInput
    some?: CompanionOrderWhereInput
    none?: CompanionOrderWhereInput
  }

  export type FnbOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanionOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelevanceInput = {
    fields: TransactionOrderByRelevanceFieldEnum | TransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    roomTotal?: SortOrder
    roomDiscount?: SortOrder
    fnbTotal?: SortOrder
    companionTotal?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    grandTotal?: SortOrder
    note?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    sessionId?: SortOrder
    roomTotal?: SortOrder
    roomDiscount?: SortOrder
    fnbTotal?: SortOrder
    companionTotal?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    grandTotal?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    roomTotal?: SortOrder
    roomDiscount?: SortOrder
    fnbTotal?: SortOrder
    companionTotal?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    grandTotal?: SortOrder
    note?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    roomTotal?: SortOrder
    roomDiscount?: SortOrder
    fnbTotal?: SortOrder
    companionTotal?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    grandTotal?: SortOrder
    note?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    sessionId?: SortOrder
    roomTotal?: SortOrder
    roomDiscount?: SortOrder
    fnbTotal?: SortOrder
    companionTotal?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    grandTotal?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    change?: SortOrder
    paidAt?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    transactionId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    change?: SortOrder
    userId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    change?: SortOrder
    paidAt?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    transactionId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    change?: SortOrder
    paidAt?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    transactionId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    change?: SortOrder
    userId?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumFnbCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FnbCategory | EnumFnbCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FnbCategory[]
    notIn?: $Enums.FnbCategory[]
    not?: NestedEnumFnbCategoryFilter<$PrismaModel> | $Enums.FnbCategory
  }

  export type FnbItemListRelationFilter = {
    every?: FnbItemWhereInput
    some?: FnbItemWhereInput
    none?: FnbItemWhereInput
  }

  export type FnbItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FnbOrderByRelevanceInput = {
    fields: FnbOrderByRelevanceFieldEnum | FnbOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FnbCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    trackStock?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    deleted?: SortOrder
  }

  export type FnbAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
  }

  export type FnbMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    trackStock?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    deleted?: SortOrder
  }

  export type FnbMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    trackStock?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    deleted?: SortOrder
  }

  export type FnbSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
  }

  export type EnumFnbCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FnbCategory | EnumFnbCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FnbCategory[]
    notIn?: $Enums.FnbCategory[]
    not?: NestedEnumFnbCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FnbCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFnbCategoryFilter<$PrismaModel>
    _max?: NestedEnumFnbCategoryFilter<$PrismaModel>
  }

  export type EnumTypeTrackStockFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTrackStock | EnumTypeTrackStockFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTrackStock[]
    notIn?: $Enums.TypeTrackStock[]
    not?: NestedEnumTypeTrackStockFilter<$PrismaModel> | $Enums.TypeTrackStock
  }

  export type FnbScalarRelationFilter = {
    is?: FnbWhereInput
    isNot?: FnbWhereInput
  }

  export type FnbTrackStockOrderByRelevanceInput = {
    fields: FnbTrackStockOrderByRelevanceFieldEnum | FnbTrackStockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FnbTrackStockCountOrderByAggregateInput = {
    id?: SortOrder
    suplayer?: SortOrder
    fnbId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
  }

  export type FnbTrackStockAvgOrderByAggregateInput = {
    fnbId?: SortOrder
    userId?: SortOrder
    qty?: SortOrder
  }

  export type FnbTrackStockMaxOrderByAggregateInput = {
    id?: SortOrder
    suplayer?: SortOrder
    fnbId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
  }

  export type FnbTrackStockMinOrderByAggregateInput = {
    id?: SortOrder
    suplayer?: SortOrder
    fnbId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
  }

  export type FnbTrackStockSumOrderByAggregateInput = {
    fnbId?: SortOrder
    userId?: SortOrder
    qty?: SortOrder
  }

  export type EnumTypeTrackStockWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTrackStock | EnumTypeTrackStockFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTrackStock[]
    notIn?: $Enums.TypeTrackStock[]
    not?: NestedEnumTypeTrackStockWithAggregatesFilter<$PrismaModel> | $Enums.TypeTrackStock
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeTrackStockFilter<$PrismaModel>
    _max?: NestedEnumTypeTrackStockFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type FnbItemScalarRelationFilter = {
    is?: FnbItemWhereInput
    isNot?: FnbItemWhereInput
  }

  export type FnbOrderOrderByRelevanceInput = {
    fields: FnbOrderOrderByRelevanceFieldEnum | FnbOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FnbOrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    itemId?: SortOrder
    total?: SortOrder
    note?: SortOrder
    draftAt?: SortOrder
    sendAt?: SortOrder
    cancelAt?: SortOrder
  }

  export type FnbOrderAvgOrderByAggregateInput = {
    itemId?: SortOrder
    total?: SortOrder
  }

  export type FnbOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    itemId?: SortOrder
    total?: SortOrder
    note?: SortOrder
    draftAt?: SortOrder
    sendAt?: SortOrder
    cancelAt?: SortOrder
  }

  export type FnbOrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    itemId?: SortOrder
    total?: SortOrder
    note?: SortOrder
    draftAt?: SortOrder
    sendAt?: SortOrder
    cancelAt?: SortOrder
  }

  export type FnbOrderSumOrderByAggregateInput = {
    itemId?: SortOrder
    total?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type FnbItemOrderByRelevanceInput = {
    fields: FnbItemOrderByRelevanceFieldEnum | FnbItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FnbItemCountOrderByAggregateInput = {
    id?: SortOrder
    fnbId?: SortOrder
    qty?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
  }

  export type FnbItemAvgOrderByAggregateInput = {
    id?: SortOrder
    fnbId?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type FnbItemMaxOrderByAggregateInput = {
    id?: SortOrder
    fnbId?: SortOrder
    qty?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
  }

  export type FnbItemMinOrderByAggregateInput = {
    id?: SortOrder
    fnbId?: SortOrder
    qty?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
  }

  export type FnbItemSumOrderByAggregateInput = {
    id?: SortOrder
    fnbId?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type CompanionOrderByRelevanceInput = {
    fields: CompanionOrderByRelevanceFieldEnum | CompanionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompanionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hourlyRate?: SortOrder
    available?: SortOrder
  }

  export type CompanionAvgOrderByAggregateInput = {
    id?: SortOrder
    hourlyRate?: SortOrder
  }

  export type CompanionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hourlyRate?: SortOrder
    available?: SortOrder
  }

  export type CompanionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hourlyRate?: SortOrder
    available?: SortOrder
  }

  export type CompanionSumOrderByAggregateInput = {
    id?: SortOrder
    hourlyRate?: SortOrder
  }

  export type CompanionScalarRelationFilter = {
    is?: CompanionWhereInput
    isNot?: CompanionWhereInput
  }

  export type CompanionOrderOrderByRelevanceInput = {
    fields: CompanionOrderOrderByRelevanceFieldEnum | CompanionOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompanionOrderCountOrderByAggregateInput = {
    id?: SortOrder
    companionId?: SortOrder
    durationMinute?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    total?: SortOrder
    finisedAt?: SortOrder
    canceldAt?: SortOrder
    createdAt?: SortOrder
    transactionId?: SortOrder
  }

  export type CompanionOrderAvgOrderByAggregateInput = {
    companionId?: SortOrder
    durationMinute?: SortOrder
    total?: SortOrder
  }

  export type CompanionOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    companionId?: SortOrder
    durationMinute?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    total?: SortOrder
    finisedAt?: SortOrder
    canceldAt?: SortOrder
    createdAt?: SortOrder
    transactionId?: SortOrder
  }

  export type CompanionOrderMinOrderByAggregateInput = {
    id?: SortOrder
    companionId?: SortOrder
    durationMinute?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    total?: SortOrder
    finisedAt?: SortOrder
    canceldAt?: SortOrder
    createdAt?: SortOrder
    transactionId?: SortOrder
  }

  export type CompanionOrderSumOrderByAggregateInput = {
    companionId?: SortOrder
    durationMinute?: SortOrder
    total?: SortOrder
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FnbTrackStockCreateNestedManyWithoutUserInput = {
    create?: XOR<FnbTrackStockCreateWithoutUserInput, FnbTrackStockUncheckedCreateWithoutUserInput> | FnbTrackStockCreateWithoutUserInput[] | FnbTrackStockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FnbTrackStockCreateOrConnectWithoutUserInput | FnbTrackStockCreateOrConnectWithoutUserInput[]
    createMany?: FnbTrackStockCreateManyUserInputEnvelope
    connect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FnbTrackStockUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FnbTrackStockCreateWithoutUserInput, FnbTrackStockUncheckedCreateWithoutUserInput> | FnbTrackStockCreateWithoutUserInput[] | FnbTrackStockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FnbTrackStockCreateOrConnectWithoutUserInput | FnbTrackStockCreateOrConnectWithoutUserInput[]
    createMany?: FnbTrackStockCreateManyUserInputEnvelope
    connect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type FnbTrackStockUpdateManyWithoutUserNestedInput = {
    create?: XOR<FnbTrackStockCreateWithoutUserInput, FnbTrackStockUncheckedCreateWithoutUserInput> | FnbTrackStockCreateWithoutUserInput[] | FnbTrackStockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FnbTrackStockCreateOrConnectWithoutUserInput | FnbTrackStockCreateOrConnectWithoutUserInput[]
    upsert?: FnbTrackStockUpsertWithWhereUniqueWithoutUserInput | FnbTrackStockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FnbTrackStockCreateManyUserInputEnvelope
    set?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    disconnect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    delete?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    connect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    update?: FnbTrackStockUpdateWithWhereUniqueWithoutUserInput | FnbTrackStockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FnbTrackStockUpdateManyWithWhereWithoutUserInput | FnbTrackStockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FnbTrackStockScalarWhereInput | FnbTrackStockScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type FnbTrackStockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FnbTrackStockCreateWithoutUserInput, FnbTrackStockUncheckedCreateWithoutUserInput> | FnbTrackStockCreateWithoutUserInput[] | FnbTrackStockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FnbTrackStockCreateOrConnectWithoutUserInput | FnbTrackStockCreateOrConnectWithoutUserInput[]
    upsert?: FnbTrackStockUpsertWithWhereUniqueWithoutUserInput | FnbTrackStockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FnbTrackStockCreateManyUserInputEnvelope
    set?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    disconnect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    delete?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    connect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    update?: FnbTrackStockUpdateWithWhereUniqueWithoutUserInput | FnbTrackStockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FnbTrackStockUpdateManyWithWhereWithoutUserInput | FnbTrackStockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FnbTrackStockScalarWhereInput | FnbTrackStockScalarWhereInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SessionCreateNestedManyWithoutRoomInput = {
    create?: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput> | SessionCreateWithoutRoomInput[] | SessionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutRoomInput | SessionCreateOrConnectWithoutRoomInput[]
    createMany?: SessionCreateManyRoomInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput> | SessionCreateWithoutRoomInput[] | SessionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutRoomInput | SessionCreateOrConnectWithoutRoomInput[]
    createMany?: SessionCreateManyRoomInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type SessionUpdateManyWithoutRoomNestedInput = {
    create?: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput> | SessionCreateWithoutRoomInput[] | SessionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutRoomInput | SessionCreateOrConnectWithoutRoomInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutRoomInput | SessionUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: SessionCreateManyRoomInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutRoomInput | SessionUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutRoomInput | SessionUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput> | SessionCreateWithoutRoomInput[] | SessionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutRoomInput | SessionCreateOrConnectWithoutRoomInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutRoomInput | SessionUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: SessionCreateManyRoomInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutRoomInput | SessionUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutRoomInput | SessionUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SessionCreateWithoutCustomerInput, SessionUncheckedCreateWithoutCustomerInput> | SessionCreateWithoutCustomerInput[] | SessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCustomerInput | SessionCreateOrConnectWithoutCustomerInput[]
    createMany?: SessionCreateManyCustomerInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SessionCreateWithoutCustomerInput, SessionUncheckedCreateWithoutCustomerInput> | SessionCreateWithoutCustomerInput[] | SessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCustomerInput | SessionCreateOrConnectWithoutCustomerInput[]
    createMany?: SessionCreateManyCustomerInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SessionCreateWithoutCustomerInput, SessionUncheckedCreateWithoutCustomerInput> | SessionCreateWithoutCustomerInput[] | SessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCustomerInput | SessionCreateOrConnectWithoutCustomerInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCustomerInput | SessionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SessionCreateManyCustomerInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCustomerInput | SessionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCustomerInput | SessionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SessionCreateWithoutCustomerInput, SessionUncheckedCreateWithoutCustomerInput> | SessionCreateWithoutCustomerInput[] | SessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCustomerInput | SessionCreateOrConnectWithoutCustomerInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCustomerInput | SessionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SessionCreateManyCustomerInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCustomerInput | SessionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCustomerInput | SessionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutSessionInput = {
    create?: XOR<CustomerCreateWithoutSessionInput, CustomerUncheckedCreateWithoutSessionInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSessionInput
    connect?: CustomerWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutSessionInput = {
    create?: XOR<RoomCreateWithoutSessionInput, RoomUncheckedCreateWithoutSessionInput>
    connectOrCreate?: RoomCreateOrConnectWithoutSessionInput
    connect?: RoomWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutSessionInput = {
    create?: XOR<TransactionCreateWithoutSessionInput, TransactionUncheckedCreateWithoutSessionInput> | TransactionCreateWithoutSessionInput[] | TransactionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSessionInput | TransactionCreateOrConnectWithoutSessionInput[]
    createMany?: TransactionCreateManySessionInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<TransactionCreateWithoutSessionInput, TransactionUncheckedCreateWithoutSessionInput> | TransactionCreateWithoutSessionInput[] | TransactionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSessionInput | TransactionCreateOrConnectWithoutSessionInput[]
    createMany?: TransactionCreateManySessionInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<CustomerCreateWithoutSessionInput, CustomerUncheckedCreateWithoutSessionInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSessionInput
    upsert?: CustomerUpsertWithoutSessionInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSessionInput, CustomerUpdateWithoutSessionInput>, CustomerUncheckedUpdateWithoutSessionInput>
  }

  export type RoomUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<RoomCreateWithoutSessionInput, RoomUncheckedCreateWithoutSessionInput>
    connectOrCreate?: RoomCreateOrConnectWithoutSessionInput
    upsert?: RoomUpsertWithoutSessionInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutSessionInput, RoomUpdateWithoutSessionInput>, RoomUncheckedUpdateWithoutSessionInput>
  }

  export type TransactionUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TransactionCreateWithoutSessionInput, TransactionUncheckedCreateWithoutSessionInput> | TransactionCreateWithoutSessionInput[] | TransactionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSessionInput | TransactionCreateOrConnectWithoutSessionInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSessionInput | TransactionUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TransactionCreateManySessionInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSessionInput | TransactionUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSessionInput | TransactionUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TransactionCreateWithoutSessionInput, TransactionUncheckedCreateWithoutSessionInput> | TransactionCreateWithoutSessionInput[] | TransactionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSessionInput | TransactionCreateOrConnectWithoutSessionInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSessionInput | TransactionUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TransactionCreateManySessionInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSessionInput | TransactionUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSessionInput | TransactionUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutTransactionInput = {
    create?: XOR<SessionCreateWithoutTransactionInput, SessionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTransactionInput
    connect?: SessionWhereUniqueInput
  }

  export type FnbOrderCreateNestedManyWithoutTransactionInput = {
    create?: XOR<FnbOrderCreateWithoutTransactionInput, FnbOrderUncheckedCreateWithoutTransactionInput> | FnbOrderCreateWithoutTransactionInput[] | FnbOrderUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: FnbOrderCreateOrConnectWithoutTransactionInput | FnbOrderCreateOrConnectWithoutTransactionInput[]
    createMany?: FnbOrderCreateManyTransactionInputEnvelope
    connect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutTransactionInput = {
    create?: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput> | PaymentCreateWithoutTransactionInput[] | PaymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput | PaymentCreateOrConnectWithoutTransactionInput[]
    createMany?: PaymentCreateManyTransactionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CompanionOrderCreateNestedManyWithoutTransactionInput = {
    create?: XOR<CompanionOrderCreateWithoutTransactionInput, CompanionOrderUncheckedCreateWithoutTransactionInput> | CompanionOrderCreateWithoutTransactionInput[] | CompanionOrderUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: CompanionOrderCreateOrConnectWithoutTransactionInput | CompanionOrderCreateOrConnectWithoutTransactionInput[]
    createMany?: CompanionOrderCreateManyTransactionInputEnvelope
    connect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
  }

  export type FnbOrderUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<FnbOrderCreateWithoutTransactionInput, FnbOrderUncheckedCreateWithoutTransactionInput> | FnbOrderCreateWithoutTransactionInput[] | FnbOrderUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: FnbOrderCreateOrConnectWithoutTransactionInput | FnbOrderCreateOrConnectWithoutTransactionInput[]
    createMany?: FnbOrderCreateManyTransactionInputEnvelope
    connect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput> | PaymentCreateWithoutTransactionInput[] | PaymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput | PaymentCreateOrConnectWithoutTransactionInput[]
    createMany?: PaymentCreateManyTransactionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CompanionOrderUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<CompanionOrderCreateWithoutTransactionInput, CompanionOrderUncheckedCreateWithoutTransactionInput> | CompanionOrderCreateWithoutTransactionInput[] | CompanionOrderUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: CompanionOrderCreateOrConnectWithoutTransactionInput | CompanionOrderCreateOrConnectWithoutTransactionInput[]
    createMany?: CompanionOrderCreateManyTransactionInputEnvelope
    connect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
  }

  export type SessionUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<SessionCreateWithoutTransactionInput, SessionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTransactionInput
    upsert?: SessionUpsertWithoutTransactionInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutTransactionInput, SessionUpdateWithoutTransactionInput>, SessionUncheckedUpdateWithoutTransactionInput>
  }

  export type FnbOrderUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<FnbOrderCreateWithoutTransactionInput, FnbOrderUncheckedCreateWithoutTransactionInput> | FnbOrderCreateWithoutTransactionInput[] | FnbOrderUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: FnbOrderCreateOrConnectWithoutTransactionInput | FnbOrderCreateOrConnectWithoutTransactionInput[]
    upsert?: FnbOrderUpsertWithWhereUniqueWithoutTransactionInput | FnbOrderUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: FnbOrderCreateManyTransactionInputEnvelope
    set?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    disconnect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    delete?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    connect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    update?: FnbOrderUpdateWithWhereUniqueWithoutTransactionInput | FnbOrderUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: FnbOrderUpdateManyWithWhereWithoutTransactionInput | FnbOrderUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: FnbOrderScalarWhereInput | FnbOrderScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput> | PaymentCreateWithoutTransactionInput[] | PaymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput | PaymentCreateOrConnectWithoutTransactionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTransactionInput | PaymentUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: PaymentCreateManyTransactionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTransactionInput | PaymentUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTransactionInput | PaymentUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CompanionOrderUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<CompanionOrderCreateWithoutTransactionInput, CompanionOrderUncheckedCreateWithoutTransactionInput> | CompanionOrderCreateWithoutTransactionInput[] | CompanionOrderUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: CompanionOrderCreateOrConnectWithoutTransactionInput | CompanionOrderCreateOrConnectWithoutTransactionInput[]
    upsert?: CompanionOrderUpsertWithWhereUniqueWithoutTransactionInput | CompanionOrderUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: CompanionOrderCreateManyTransactionInputEnvelope
    set?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    disconnect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    delete?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    connect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    update?: CompanionOrderUpdateWithWhereUniqueWithoutTransactionInput | CompanionOrderUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: CompanionOrderUpdateManyWithWhereWithoutTransactionInput | CompanionOrderUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: CompanionOrderScalarWhereInput | CompanionOrderScalarWhereInput[]
  }

  export type FnbOrderUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<FnbOrderCreateWithoutTransactionInput, FnbOrderUncheckedCreateWithoutTransactionInput> | FnbOrderCreateWithoutTransactionInput[] | FnbOrderUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: FnbOrderCreateOrConnectWithoutTransactionInput | FnbOrderCreateOrConnectWithoutTransactionInput[]
    upsert?: FnbOrderUpsertWithWhereUniqueWithoutTransactionInput | FnbOrderUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: FnbOrderCreateManyTransactionInputEnvelope
    set?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    disconnect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    delete?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    connect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    update?: FnbOrderUpdateWithWhereUniqueWithoutTransactionInput | FnbOrderUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: FnbOrderUpdateManyWithWhereWithoutTransactionInput | FnbOrderUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: FnbOrderScalarWhereInput | FnbOrderScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput> | PaymentCreateWithoutTransactionInput[] | PaymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput | PaymentCreateOrConnectWithoutTransactionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutTransactionInput | PaymentUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: PaymentCreateManyTransactionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutTransactionInput | PaymentUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutTransactionInput | PaymentUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CompanionOrderUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<CompanionOrderCreateWithoutTransactionInput, CompanionOrderUncheckedCreateWithoutTransactionInput> | CompanionOrderCreateWithoutTransactionInput[] | CompanionOrderUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: CompanionOrderCreateOrConnectWithoutTransactionInput | CompanionOrderCreateOrConnectWithoutTransactionInput[]
    upsert?: CompanionOrderUpsertWithWhereUniqueWithoutTransactionInput | CompanionOrderUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: CompanionOrderCreateManyTransactionInputEnvelope
    set?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    disconnect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    delete?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    connect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    update?: CompanionOrderUpdateWithWhereUniqueWithoutTransactionInput | CompanionOrderUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: CompanionOrderUpdateManyWithWhereWithoutTransactionInput | CompanionOrderUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: CompanionOrderScalarWhereInput | CompanionOrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutPaymentInput = {
    create?: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type TransactionUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentInput
    upsert?: TransactionUpsertWithoutPaymentInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutPaymentInput, TransactionUpdateWithoutPaymentInput>, TransactionUncheckedUpdateWithoutPaymentInput>
  }

  export type FnbTrackStockCreateNestedManyWithoutFnbInput = {
    create?: XOR<FnbTrackStockCreateWithoutFnbInput, FnbTrackStockUncheckedCreateWithoutFnbInput> | FnbTrackStockCreateWithoutFnbInput[] | FnbTrackStockUncheckedCreateWithoutFnbInput[]
    connectOrCreate?: FnbTrackStockCreateOrConnectWithoutFnbInput | FnbTrackStockCreateOrConnectWithoutFnbInput[]
    createMany?: FnbTrackStockCreateManyFnbInputEnvelope
    connect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
  }

  export type FnbItemCreateNestedManyWithoutFnbInput = {
    create?: XOR<FnbItemCreateWithoutFnbInput, FnbItemUncheckedCreateWithoutFnbInput> | FnbItemCreateWithoutFnbInput[] | FnbItemUncheckedCreateWithoutFnbInput[]
    connectOrCreate?: FnbItemCreateOrConnectWithoutFnbInput | FnbItemCreateOrConnectWithoutFnbInput[]
    createMany?: FnbItemCreateManyFnbInputEnvelope
    connect?: FnbItemWhereUniqueInput | FnbItemWhereUniqueInput[]
  }

  export type FnbTrackStockUncheckedCreateNestedManyWithoutFnbInput = {
    create?: XOR<FnbTrackStockCreateWithoutFnbInput, FnbTrackStockUncheckedCreateWithoutFnbInput> | FnbTrackStockCreateWithoutFnbInput[] | FnbTrackStockUncheckedCreateWithoutFnbInput[]
    connectOrCreate?: FnbTrackStockCreateOrConnectWithoutFnbInput | FnbTrackStockCreateOrConnectWithoutFnbInput[]
    createMany?: FnbTrackStockCreateManyFnbInputEnvelope
    connect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
  }

  export type FnbItemUncheckedCreateNestedManyWithoutFnbInput = {
    create?: XOR<FnbItemCreateWithoutFnbInput, FnbItemUncheckedCreateWithoutFnbInput> | FnbItemCreateWithoutFnbInput[] | FnbItemUncheckedCreateWithoutFnbInput[]
    connectOrCreate?: FnbItemCreateOrConnectWithoutFnbInput | FnbItemCreateOrConnectWithoutFnbInput[]
    createMany?: FnbItemCreateManyFnbInputEnvelope
    connect?: FnbItemWhereUniqueInput | FnbItemWhereUniqueInput[]
  }

  export type EnumFnbCategoryFieldUpdateOperationsInput = {
    set?: $Enums.FnbCategory
  }

  export type FnbTrackStockUpdateManyWithoutFnbNestedInput = {
    create?: XOR<FnbTrackStockCreateWithoutFnbInput, FnbTrackStockUncheckedCreateWithoutFnbInput> | FnbTrackStockCreateWithoutFnbInput[] | FnbTrackStockUncheckedCreateWithoutFnbInput[]
    connectOrCreate?: FnbTrackStockCreateOrConnectWithoutFnbInput | FnbTrackStockCreateOrConnectWithoutFnbInput[]
    upsert?: FnbTrackStockUpsertWithWhereUniqueWithoutFnbInput | FnbTrackStockUpsertWithWhereUniqueWithoutFnbInput[]
    createMany?: FnbTrackStockCreateManyFnbInputEnvelope
    set?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    disconnect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    delete?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    connect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    update?: FnbTrackStockUpdateWithWhereUniqueWithoutFnbInput | FnbTrackStockUpdateWithWhereUniqueWithoutFnbInput[]
    updateMany?: FnbTrackStockUpdateManyWithWhereWithoutFnbInput | FnbTrackStockUpdateManyWithWhereWithoutFnbInput[]
    deleteMany?: FnbTrackStockScalarWhereInput | FnbTrackStockScalarWhereInput[]
  }

  export type FnbItemUpdateManyWithoutFnbNestedInput = {
    create?: XOR<FnbItemCreateWithoutFnbInput, FnbItemUncheckedCreateWithoutFnbInput> | FnbItemCreateWithoutFnbInput[] | FnbItemUncheckedCreateWithoutFnbInput[]
    connectOrCreate?: FnbItemCreateOrConnectWithoutFnbInput | FnbItemCreateOrConnectWithoutFnbInput[]
    upsert?: FnbItemUpsertWithWhereUniqueWithoutFnbInput | FnbItemUpsertWithWhereUniqueWithoutFnbInput[]
    createMany?: FnbItemCreateManyFnbInputEnvelope
    set?: FnbItemWhereUniqueInput | FnbItemWhereUniqueInput[]
    disconnect?: FnbItemWhereUniqueInput | FnbItemWhereUniqueInput[]
    delete?: FnbItemWhereUniqueInput | FnbItemWhereUniqueInput[]
    connect?: FnbItemWhereUniqueInput | FnbItemWhereUniqueInput[]
    update?: FnbItemUpdateWithWhereUniqueWithoutFnbInput | FnbItemUpdateWithWhereUniqueWithoutFnbInput[]
    updateMany?: FnbItemUpdateManyWithWhereWithoutFnbInput | FnbItemUpdateManyWithWhereWithoutFnbInput[]
    deleteMany?: FnbItemScalarWhereInput | FnbItemScalarWhereInput[]
  }

  export type FnbTrackStockUncheckedUpdateManyWithoutFnbNestedInput = {
    create?: XOR<FnbTrackStockCreateWithoutFnbInput, FnbTrackStockUncheckedCreateWithoutFnbInput> | FnbTrackStockCreateWithoutFnbInput[] | FnbTrackStockUncheckedCreateWithoutFnbInput[]
    connectOrCreate?: FnbTrackStockCreateOrConnectWithoutFnbInput | FnbTrackStockCreateOrConnectWithoutFnbInput[]
    upsert?: FnbTrackStockUpsertWithWhereUniqueWithoutFnbInput | FnbTrackStockUpsertWithWhereUniqueWithoutFnbInput[]
    createMany?: FnbTrackStockCreateManyFnbInputEnvelope
    set?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    disconnect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    delete?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    connect?: FnbTrackStockWhereUniqueInput | FnbTrackStockWhereUniqueInput[]
    update?: FnbTrackStockUpdateWithWhereUniqueWithoutFnbInput | FnbTrackStockUpdateWithWhereUniqueWithoutFnbInput[]
    updateMany?: FnbTrackStockUpdateManyWithWhereWithoutFnbInput | FnbTrackStockUpdateManyWithWhereWithoutFnbInput[]
    deleteMany?: FnbTrackStockScalarWhereInput | FnbTrackStockScalarWhereInput[]
  }

  export type FnbItemUncheckedUpdateManyWithoutFnbNestedInput = {
    create?: XOR<FnbItemCreateWithoutFnbInput, FnbItemUncheckedCreateWithoutFnbInput> | FnbItemCreateWithoutFnbInput[] | FnbItemUncheckedCreateWithoutFnbInput[]
    connectOrCreate?: FnbItemCreateOrConnectWithoutFnbInput | FnbItemCreateOrConnectWithoutFnbInput[]
    upsert?: FnbItemUpsertWithWhereUniqueWithoutFnbInput | FnbItemUpsertWithWhereUniqueWithoutFnbInput[]
    createMany?: FnbItemCreateManyFnbInputEnvelope
    set?: FnbItemWhereUniqueInput | FnbItemWhereUniqueInput[]
    disconnect?: FnbItemWhereUniqueInput | FnbItemWhereUniqueInput[]
    delete?: FnbItemWhereUniqueInput | FnbItemWhereUniqueInput[]
    connect?: FnbItemWhereUniqueInput | FnbItemWhereUniqueInput[]
    update?: FnbItemUpdateWithWhereUniqueWithoutFnbInput | FnbItemUpdateWithWhereUniqueWithoutFnbInput[]
    updateMany?: FnbItemUpdateManyWithWhereWithoutFnbInput | FnbItemUpdateManyWithWhereWithoutFnbInput[]
    deleteMany?: FnbItemScalarWhereInput | FnbItemScalarWhereInput[]
  }

  export type FnbCreateNestedOneWithoutFnbTrackStockInput = {
    create?: XOR<FnbCreateWithoutFnbTrackStockInput, FnbUncheckedCreateWithoutFnbTrackStockInput>
    connectOrCreate?: FnbCreateOrConnectWithoutFnbTrackStockInput
    connect?: FnbWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFnbTrackStockInput = {
    create?: XOR<UserCreateWithoutFnbTrackStockInput, UserUncheckedCreateWithoutFnbTrackStockInput>
    connectOrCreate?: UserCreateOrConnectWithoutFnbTrackStockInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTypeTrackStockFieldUpdateOperationsInput = {
    set?: $Enums.TypeTrackStock
  }

  export type FnbUpdateOneRequiredWithoutFnbTrackStockNestedInput = {
    create?: XOR<FnbCreateWithoutFnbTrackStockInput, FnbUncheckedCreateWithoutFnbTrackStockInput>
    connectOrCreate?: FnbCreateOrConnectWithoutFnbTrackStockInput
    upsert?: FnbUpsertWithoutFnbTrackStockInput
    connect?: FnbWhereUniqueInput
    update?: XOR<XOR<FnbUpdateToOneWithWhereWithoutFnbTrackStockInput, FnbUpdateWithoutFnbTrackStockInput>, FnbUncheckedUpdateWithoutFnbTrackStockInput>
  }

  export type UserUpdateOneRequiredWithoutFnbTrackStockNestedInput = {
    create?: XOR<UserCreateWithoutFnbTrackStockInput, UserUncheckedCreateWithoutFnbTrackStockInput>
    connectOrCreate?: UserCreateOrConnectWithoutFnbTrackStockInput
    upsert?: UserUpsertWithoutFnbTrackStockInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFnbTrackStockInput, UserUpdateWithoutFnbTrackStockInput>, UserUncheckedUpdateWithoutFnbTrackStockInput>
  }

  export type TransactionCreateNestedOneWithoutFnbOrderInput = {
    create?: XOR<TransactionCreateWithoutFnbOrderInput, TransactionUncheckedCreateWithoutFnbOrderInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutFnbOrderInput
    connect?: TransactionWhereUniqueInput
  }

  export type FnbItemCreateNestedOneWithoutFnbOrderInput = {
    create?: XOR<FnbItemCreateWithoutFnbOrderInput, FnbItemUncheckedCreateWithoutFnbOrderInput>
    connectOrCreate?: FnbItemCreateOrConnectWithoutFnbOrderInput
    connect?: FnbItemWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type TransactionUpdateOneRequiredWithoutFnbOrderNestedInput = {
    create?: XOR<TransactionCreateWithoutFnbOrderInput, TransactionUncheckedCreateWithoutFnbOrderInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutFnbOrderInput
    upsert?: TransactionUpsertWithoutFnbOrderInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutFnbOrderInput, TransactionUpdateWithoutFnbOrderInput>, TransactionUncheckedUpdateWithoutFnbOrderInput>
  }

  export type FnbItemUpdateOneRequiredWithoutFnbOrderNestedInput = {
    create?: XOR<FnbItemCreateWithoutFnbOrderInput, FnbItemUncheckedCreateWithoutFnbOrderInput>
    connectOrCreate?: FnbItemCreateOrConnectWithoutFnbOrderInput
    upsert?: FnbItemUpsertWithoutFnbOrderInput
    connect?: FnbItemWhereUniqueInput
    update?: XOR<XOR<FnbItemUpdateToOneWithWhereWithoutFnbOrderInput, FnbItemUpdateWithoutFnbOrderInput>, FnbItemUncheckedUpdateWithoutFnbOrderInput>
  }

  export type FnbCreateNestedOneWithoutFnbItemInput = {
    create?: XOR<FnbCreateWithoutFnbItemInput, FnbUncheckedCreateWithoutFnbItemInput>
    connectOrCreate?: FnbCreateOrConnectWithoutFnbItemInput
    connect?: FnbWhereUniqueInput
  }

  export type FnbOrderCreateNestedManyWithoutItemInput = {
    create?: XOR<FnbOrderCreateWithoutItemInput, FnbOrderUncheckedCreateWithoutItemInput> | FnbOrderCreateWithoutItemInput[] | FnbOrderUncheckedCreateWithoutItemInput[]
    connectOrCreate?: FnbOrderCreateOrConnectWithoutItemInput | FnbOrderCreateOrConnectWithoutItemInput[]
    createMany?: FnbOrderCreateManyItemInputEnvelope
    connect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
  }

  export type FnbOrderUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<FnbOrderCreateWithoutItemInput, FnbOrderUncheckedCreateWithoutItemInput> | FnbOrderCreateWithoutItemInput[] | FnbOrderUncheckedCreateWithoutItemInput[]
    connectOrCreate?: FnbOrderCreateOrConnectWithoutItemInput | FnbOrderCreateOrConnectWithoutItemInput[]
    createMany?: FnbOrderCreateManyItemInputEnvelope
    connect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
  }

  export type FnbUpdateOneRequiredWithoutFnbItemNestedInput = {
    create?: XOR<FnbCreateWithoutFnbItemInput, FnbUncheckedCreateWithoutFnbItemInput>
    connectOrCreate?: FnbCreateOrConnectWithoutFnbItemInput
    upsert?: FnbUpsertWithoutFnbItemInput
    connect?: FnbWhereUniqueInput
    update?: XOR<XOR<FnbUpdateToOneWithWhereWithoutFnbItemInput, FnbUpdateWithoutFnbItemInput>, FnbUncheckedUpdateWithoutFnbItemInput>
  }

  export type FnbOrderUpdateManyWithoutItemNestedInput = {
    create?: XOR<FnbOrderCreateWithoutItemInput, FnbOrderUncheckedCreateWithoutItemInput> | FnbOrderCreateWithoutItemInput[] | FnbOrderUncheckedCreateWithoutItemInput[]
    connectOrCreate?: FnbOrderCreateOrConnectWithoutItemInput | FnbOrderCreateOrConnectWithoutItemInput[]
    upsert?: FnbOrderUpsertWithWhereUniqueWithoutItemInput | FnbOrderUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: FnbOrderCreateManyItemInputEnvelope
    set?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    disconnect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    delete?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    connect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    update?: FnbOrderUpdateWithWhereUniqueWithoutItemInput | FnbOrderUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: FnbOrderUpdateManyWithWhereWithoutItemInput | FnbOrderUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: FnbOrderScalarWhereInput | FnbOrderScalarWhereInput[]
  }

  export type FnbOrderUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<FnbOrderCreateWithoutItemInput, FnbOrderUncheckedCreateWithoutItemInput> | FnbOrderCreateWithoutItemInput[] | FnbOrderUncheckedCreateWithoutItemInput[]
    connectOrCreate?: FnbOrderCreateOrConnectWithoutItemInput | FnbOrderCreateOrConnectWithoutItemInput[]
    upsert?: FnbOrderUpsertWithWhereUniqueWithoutItemInput | FnbOrderUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: FnbOrderCreateManyItemInputEnvelope
    set?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    disconnect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    delete?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    connect?: FnbOrderWhereUniqueInput | FnbOrderWhereUniqueInput[]
    update?: FnbOrderUpdateWithWhereUniqueWithoutItemInput | FnbOrderUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: FnbOrderUpdateManyWithWhereWithoutItemInput | FnbOrderUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: FnbOrderScalarWhereInput | FnbOrderScalarWhereInput[]
  }

  export type CompanionOrderCreateNestedManyWithoutCompanionInput = {
    create?: XOR<CompanionOrderCreateWithoutCompanionInput, CompanionOrderUncheckedCreateWithoutCompanionInput> | CompanionOrderCreateWithoutCompanionInput[] | CompanionOrderUncheckedCreateWithoutCompanionInput[]
    connectOrCreate?: CompanionOrderCreateOrConnectWithoutCompanionInput | CompanionOrderCreateOrConnectWithoutCompanionInput[]
    createMany?: CompanionOrderCreateManyCompanionInputEnvelope
    connect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
  }

  export type CompanionOrderUncheckedCreateNestedManyWithoutCompanionInput = {
    create?: XOR<CompanionOrderCreateWithoutCompanionInput, CompanionOrderUncheckedCreateWithoutCompanionInput> | CompanionOrderCreateWithoutCompanionInput[] | CompanionOrderUncheckedCreateWithoutCompanionInput[]
    connectOrCreate?: CompanionOrderCreateOrConnectWithoutCompanionInput | CompanionOrderCreateOrConnectWithoutCompanionInput[]
    createMany?: CompanionOrderCreateManyCompanionInputEnvelope
    connect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
  }

  export type CompanionOrderUpdateManyWithoutCompanionNestedInput = {
    create?: XOR<CompanionOrderCreateWithoutCompanionInput, CompanionOrderUncheckedCreateWithoutCompanionInput> | CompanionOrderCreateWithoutCompanionInput[] | CompanionOrderUncheckedCreateWithoutCompanionInput[]
    connectOrCreate?: CompanionOrderCreateOrConnectWithoutCompanionInput | CompanionOrderCreateOrConnectWithoutCompanionInput[]
    upsert?: CompanionOrderUpsertWithWhereUniqueWithoutCompanionInput | CompanionOrderUpsertWithWhereUniqueWithoutCompanionInput[]
    createMany?: CompanionOrderCreateManyCompanionInputEnvelope
    set?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    disconnect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    delete?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    connect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    update?: CompanionOrderUpdateWithWhereUniqueWithoutCompanionInput | CompanionOrderUpdateWithWhereUniqueWithoutCompanionInput[]
    updateMany?: CompanionOrderUpdateManyWithWhereWithoutCompanionInput | CompanionOrderUpdateManyWithWhereWithoutCompanionInput[]
    deleteMany?: CompanionOrderScalarWhereInput | CompanionOrderScalarWhereInput[]
  }

  export type CompanionOrderUncheckedUpdateManyWithoutCompanionNestedInput = {
    create?: XOR<CompanionOrderCreateWithoutCompanionInput, CompanionOrderUncheckedCreateWithoutCompanionInput> | CompanionOrderCreateWithoutCompanionInput[] | CompanionOrderUncheckedCreateWithoutCompanionInput[]
    connectOrCreate?: CompanionOrderCreateOrConnectWithoutCompanionInput | CompanionOrderCreateOrConnectWithoutCompanionInput[]
    upsert?: CompanionOrderUpsertWithWhereUniqueWithoutCompanionInput | CompanionOrderUpsertWithWhereUniqueWithoutCompanionInput[]
    createMany?: CompanionOrderCreateManyCompanionInputEnvelope
    set?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    disconnect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    delete?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    connect?: CompanionOrderWhereUniqueInput | CompanionOrderWhereUniqueInput[]
    update?: CompanionOrderUpdateWithWhereUniqueWithoutCompanionInput | CompanionOrderUpdateWithWhereUniqueWithoutCompanionInput[]
    updateMany?: CompanionOrderUpdateManyWithWhereWithoutCompanionInput | CompanionOrderUpdateManyWithWhereWithoutCompanionInput[]
    deleteMany?: CompanionOrderScalarWhereInput | CompanionOrderScalarWhereInput[]
  }

  export type CompanionCreateNestedOneWithoutCompanionOrderInput = {
    create?: XOR<CompanionCreateWithoutCompanionOrderInput, CompanionUncheckedCreateWithoutCompanionOrderInput>
    connectOrCreate?: CompanionCreateOrConnectWithoutCompanionOrderInput
    connect?: CompanionWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutCompanionOrderInput = {
    create?: XOR<TransactionCreateWithoutCompanionOrderInput, TransactionUncheckedCreateWithoutCompanionOrderInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutCompanionOrderInput
    connect?: TransactionWhereUniqueInput
  }

  export type CompanionUpdateOneRequiredWithoutCompanionOrderNestedInput = {
    create?: XOR<CompanionCreateWithoutCompanionOrderInput, CompanionUncheckedCreateWithoutCompanionOrderInput>
    connectOrCreate?: CompanionCreateOrConnectWithoutCompanionOrderInput
    upsert?: CompanionUpsertWithoutCompanionOrderInput
    connect?: CompanionWhereUniqueInput
    update?: XOR<XOR<CompanionUpdateToOneWithWhereWithoutCompanionOrderInput, CompanionUpdateWithoutCompanionOrderInput>, CompanionUncheckedUpdateWithoutCompanionOrderInput>
  }

  export type TransactionUpdateOneRequiredWithoutCompanionOrderNestedInput = {
    create?: XOR<TransactionCreateWithoutCompanionOrderInput, TransactionUncheckedCreateWithoutCompanionOrderInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutCompanionOrderInput
    upsert?: TransactionUpsertWithoutCompanionOrderInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutCompanionOrderInput, TransactionUpdateWithoutCompanionOrderInput>, TransactionUncheckedUpdateWithoutCompanionOrderInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumFnbCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FnbCategory | EnumFnbCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FnbCategory[]
    notIn?: $Enums.FnbCategory[]
    not?: NestedEnumFnbCategoryFilter<$PrismaModel> | $Enums.FnbCategory
  }

  export type NestedEnumFnbCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FnbCategory | EnumFnbCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FnbCategory[]
    notIn?: $Enums.FnbCategory[]
    not?: NestedEnumFnbCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FnbCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFnbCategoryFilter<$PrismaModel>
    _max?: NestedEnumFnbCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTypeTrackStockFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTrackStock | EnumTypeTrackStockFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTrackStock[]
    notIn?: $Enums.TypeTrackStock[]
    not?: NestedEnumTypeTrackStockFilter<$PrismaModel> | $Enums.TypeTrackStock
  }

  export type NestedEnumTypeTrackStockWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeTrackStock | EnumTypeTrackStockFieldRefInput<$PrismaModel>
    in?: $Enums.TypeTrackStock[]
    notIn?: $Enums.TypeTrackStock[]
    not?: NestedEnumTypeTrackStockWithAggregatesFilter<$PrismaModel> | $Enums.TypeTrackStock
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeTrackStockFilter<$PrismaModel>
    _max?: NestedEnumTypeTrackStockFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type PaymentCreateWithoutUserInput = {
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    amount?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string | null
    note?: string | null
    transaction: TransactionCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: number
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    amount?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string | null
    note?: string | null
    transactionId: string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FnbTrackStockCreateWithoutUserInput = {
    id?: string
    suplayer: string
    type: $Enums.TypeTrackStock
    qty: number
    createdAt?: Date | string
    fnb: FnbCreateNestedOneWithoutFnbTrackStockInput
  }

  export type FnbTrackStockUncheckedCreateWithoutUserInput = {
    id?: string
    suplayer: string
    fnbId: number
    type: $Enums.TypeTrackStock
    qty: number
    createdAt?: Date | string
  }

  export type FnbTrackStockCreateOrConnectWithoutUserInput = {
    where: FnbTrackStockWhereUniqueInput
    create: XOR<FnbTrackStockCreateWithoutUserInput, FnbTrackStockUncheckedCreateWithoutUserInput>
  }

  export type FnbTrackStockCreateManyUserInputEnvelope = {
    data: FnbTrackStockCreateManyUserInput | FnbTrackStockCreateManyUserInput[]
    skipDuplicates?: boolean
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
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    change?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    userId?: IntFilter<"Payment"> | number
    note?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringFilter<"Payment"> | string
  }

  export type FnbTrackStockUpsertWithWhereUniqueWithoutUserInput = {
    where: FnbTrackStockWhereUniqueInput
    update: XOR<FnbTrackStockUpdateWithoutUserInput, FnbTrackStockUncheckedUpdateWithoutUserInput>
    create: XOR<FnbTrackStockCreateWithoutUserInput, FnbTrackStockUncheckedCreateWithoutUserInput>
  }

  export type FnbTrackStockUpdateWithWhereUniqueWithoutUserInput = {
    where: FnbTrackStockWhereUniqueInput
    data: XOR<FnbTrackStockUpdateWithoutUserInput, FnbTrackStockUncheckedUpdateWithoutUserInput>
  }

  export type FnbTrackStockUpdateManyWithWhereWithoutUserInput = {
    where: FnbTrackStockScalarWhereInput
    data: XOR<FnbTrackStockUpdateManyMutationInput, FnbTrackStockUncheckedUpdateManyWithoutUserInput>
  }

  export type FnbTrackStockScalarWhereInput = {
    AND?: FnbTrackStockScalarWhereInput | FnbTrackStockScalarWhereInput[]
    OR?: FnbTrackStockScalarWhereInput[]
    NOT?: FnbTrackStockScalarWhereInput | FnbTrackStockScalarWhereInput[]
    id?: StringFilter<"FnbTrackStock"> | string
    suplayer?: StringFilter<"FnbTrackStock"> | string
    fnbId?: IntFilter<"FnbTrackStock"> | number
    userId?: IntFilter<"FnbTrackStock"> | number
    type?: EnumTypeTrackStockFilter<"FnbTrackStock"> | $Enums.TypeTrackStock
    qty?: IntFilter<"FnbTrackStock"> | number
    createdAt?: DateTimeFilter<"FnbTrackStock"> | Date | string
  }

  export type SessionCreateWithoutRoomInput = {
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSessionInput
    transaction?: TransactionCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutRoomInput = {
    id?: number
    customerId: number
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutRoomInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput>
  }

  export type SessionCreateManyRoomInputEnvelope = {
    data: SessionCreateManyRoomInput | SessionCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutRoomInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutRoomInput, SessionUncheckedUpdateWithoutRoomInput>
    create: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutRoomInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutRoomInput, SessionUncheckedUpdateWithoutRoomInput>
  }

  export type SessionUpdateManyWithWhereWithoutRoomInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutRoomInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: IntFilter<"Session"> | number
    customerId?: IntFilter<"Session"> | number
    roomId?: IntFilter<"Session"> | number
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeFilter<"Session"> | Date | string
    closed?: BoolFilter<"Session"> | boolean
    durationMinute?: IntFilter<"Session"> | number
    extraMinute?: IntFilter<"Session"> | number
    freeMinute?: IntFilter<"Session"> | number
    deleted?: BoolFilter<"Session"> | boolean
    userId?: IntFilter<"Session"> | number
    userOut?: IntNullableFilter<"Session"> | number | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionCreateWithoutCustomerInput = {
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutSessionInput
    transaction?: TransactionCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutCustomerInput = {
    id?: number
    roomId: number
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutCustomerInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutCustomerInput, SessionUncheckedCreateWithoutCustomerInput>
  }

  export type SessionCreateManyCustomerInputEnvelope = {
    data: SessionCreateManyCustomerInput | SessionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutCustomerInput, SessionUncheckedUpdateWithoutCustomerInput>
    create: XOR<SessionCreateWithoutCustomerInput, SessionUncheckedCreateWithoutCustomerInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutCustomerInput, SessionUncheckedUpdateWithoutCustomerInput>
  }

  export type SessionUpdateManyWithWhereWithoutCustomerInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutSessionInput = {
    name: string
    phone?: string | null
  }

  export type CustomerUncheckedCreateWithoutSessionInput = {
    id?: number
    name: string
    phone?: string | null
  }

  export type CustomerCreateOrConnectWithoutSessionInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSessionInput, CustomerUncheckedCreateWithoutSessionInput>
  }

  export type RoomCreateWithoutSessionInput = {
    name: string
    capacity?: number
    type?: string
    hourlyRate?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RoomStatus
  }

  export type RoomUncheckedCreateWithoutSessionInput = {
    id?: number
    name: string
    capacity?: number
    type?: string
    hourlyRate?: Decimal | DecimalJsLike | number | string
    status?: $Enums.RoomStatus
  }

  export type RoomCreateOrConnectWithoutSessionInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutSessionInput, RoomUncheckedCreateWithoutSessionInput>
  }

  export type TransactionCreateWithoutSessionInput = {
    id?: string
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
    fnbOrder?: FnbOrderCreateNestedManyWithoutTransactionInput
    payment?: PaymentCreateNestedManyWithoutTransactionInput
    companionOrder?: CompanionOrderCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutSessionInput = {
    id?: string
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
    fnbOrder?: FnbOrderUncheckedCreateNestedManyWithoutTransactionInput
    payment?: PaymentUncheckedCreateNestedManyWithoutTransactionInput
    companionOrder?: CompanionOrderUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutSessionInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSessionInput, TransactionUncheckedCreateWithoutSessionInput>
  }

  export type TransactionCreateManySessionInputEnvelope = {
    data: TransactionCreateManySessionInput | TransactionCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutSessionInput = {
    update: XOR<CustomerUpdateWithoutSessionInput, CustomerUncheckedUpdateWithoutSessionInput>
    create: XOR<CustomerCreateWithoutSessionInput, CustomerUncheckedCreateWithoutSessionInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSessionInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSessionInput, CustomerUncheckedUpdateWithoutSessionInput>
  }

  export type CustomerUpdateWithoutSessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomUpsertWithoutSessionInput = {
    update: XOR<RoomUpdateWithoutSessionInput, RoomUncheckedUpdateWithoutSessionInput>
    create: XOR<RoomCreateWithoutSessionInput, RoomUncheckedCreateWithoutSessionInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutSessionInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutSessionInput, RoomUncheckedUpdateWithoutSessionInput>
  }

  export type RoomUpdateWithoutSessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type RoomUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type TransactionUpsertWithWhereUniqueWithoutSessionInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSessionInput, TransactionUncheckedUpdateWithoutSessionInput>
    create: XOR<TransactionCreateWithoutSessionInput, TransactionUncheckedCreateWithoutSessionInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSessionInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSessionInput, TransactionUncheckedUpdateWithoutSessionInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSessionInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSessionInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    sessionId?: IntFilter<"Transaction"> | number
    roomTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    service?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"Transaction"> | string | null
  }

  export type SessionCreateWithoutTransactionInput = {
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSessionInput
    room: RoomCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutTransactionInput = {
    id?: number
    customerId: number
    roomId: number
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutTransactionInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutTransactionInput, SessionUncheckedCreateWithoutTransactionInput>
  }

  export type FnbOrderCreateWithoutTransactionInput = {
    id?: string
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    note?: string | null
    draftAt?: Date | string
    sendAt?: Date | string | null
    cancelAt?: Date | string | null
    item: FnbItemCreateNestedOneWithoutFnbOrderInput
  }

  export type FnbOrderUncheckedCreateWithoutTransactionInput = {
    id?: string
    status?: $Enums.OrderStatus
    itemId: number
    total?: Decimal | DecimalJsLike | number | string
    note?: string | null
    draftAt?: Date | string
    sendAt?: Date | string | null
    cancelAt?: Date | string | null
  }

  export type FnbOrderCreateOrConnectWithoutTransactionInput = {
    where: FnbOrderWhereUniqueInput
    create: XOR<FnbOrderCreateWithoutTransactionInput, FnbOrderUncheckedCreateWithoutTransactionInput>
  }

  export type FnbOrderCreateManyTransactionInputEnvelope = {
    data: FnbOrderCreateManyTransactionInput | FnbOrderCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutTransactionInput = {
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    amount?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string | null
    note?: string | null
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutTransactionInput = {
    id?: number
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    amount?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string | null
    userId: number
    note?: string | null
  }

  export type PaymentCreateOrConnectWithoutTransactionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
  }

  export type PaymentCreateManyTransactionInputEnvelope = {
    data: PaymentCreateManyTransactionInput | PaymentCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type CompanionOrderCreateWithoutTransactionInput = {
    id?: string
    durationMinute: number
    startTime: Date | string
    endTime: Date | string
    total?: Decimal | DecimalJsLike | number | string
    finisedAt?: Date | string | null
    canceldAt?: Date | string | null
    createdAt?: Date | string
    companion: CompanionCreateNestedOneWithoutCompanionOrderInput
  }

  export type CompanionOrderUncheckedCreateWithoutTransactionInput = {
    id?: string
    companionId: number
    durationMinute: number
    startTime: Date | string
    endTime: Date | string
    total?: Decimal | DecimalJsLike | number | string
    finisedAt?: Date | string | null
    canceldAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CompanionOrderCreateOrConnectWithoutTransactionInput = {
    where: CompanionOrderWhereUniqueInput
    create: XOR<CompanionOrderCreateWithoutTransactionInput, CompanionOrderUncheckedCreateWithoutTransactionInput>
  }

  export type CompanionOrderCreateManyTransactionInputEnvelope = {
    data: CompanionOrderCreateManyTransactionInput | CompanionOrderCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithoutTransactionInput = {
    update: XOR<SessionUpdateWithoutTransactionInput, SessionUncheckedUpdateWithoutTransactionInput>
    create: XOR<SessionCreateWithoutTransactionInput, SessionUncheckedCreateWithoutTransactionInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutTransactionInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutTransactionInput, SessionUncheckedUpdateWithoutTransactionInput>
  }

  export type SessionUpdateWithoutTransactionInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSessionNestedInput
    room?: RoomUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FnbOrderUpsertWithWhereUniqueWithoutTransactionInput = {
    where: FnbOrderWhereUniqueInput
    update: XOR<FnbOrderUpdateWithoutTransactionInput, FnbOrderUncheckedUpdateWithoutTransactionInput>
    create: XOR<FnbOrderCreateWithoutTransactionInput, FnbOrderUncheckedCreateWithoutTransactionInput>
  }

  export type FnbOrderUpdateWithWhereUniqueWithoutTransactionInput = {
    where: FnbOrderWhereUniqueInput
    data: XOR<FnbOrderUpdateWithoutTransactionInput, FnbOrderUncheckedUpdateWithoutTransactionInput>
  }

  export type FnbOrderUpdateManyWithWhereWithoutTransactionInput = {
    where: FnbOrderScalarWhereInput
    data: XOR<FnbOrderUpdateManyMutationInput, FnbOrderUncheckedUpdateManyWithoutTransactionInput>
  }

  export type FnbOrderScalarWhereInput = {
    AND?: FnbOrderScalarWhereInput | FnbOrderScalarWhereInput[]
    OR?: FnbOrderScalarWhereInput[]
    NOT?: FnbOrderScalarWhereInput | FnbOrderScalarWhereInput[]
    id?: StringFilter<"FnbOrder"> | string
    status?: EnumOrderStatusFilter<"FnbOrder"> | $Enums.OrderStatus
    transactionId?: StringFilter<"FnbOrder"> | string
    itemId?: IntFilter<"FnbOrder"> | number
    total?: DecimalFilter<"FnbOrder"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"FnbOrder"> | string | null
    draftAt?: DateTimeFilter<"FnbOrder"> | Date | string
    sendAt?: DateTimeNullableFilter<"FnbOrder"> | Date | string | null
    cancelAt?: DateTimeNullableFilter<"FnbOrder"> | Date | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutTransactionInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutTransactionInput, PaymentUncheckedUpdateWithoutTransactionInput>
    create: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutTransactionInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutTransactionInput, PaymentUncheckedUpdateWithoutTransactionInput>
  }

  export type PaymentUpdateManyWithWhereWithoutTransactionInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutTransactionInput>
  }

  export type CompanionOrderUpsertWithWhereUniqueWithoutTransactionInput = {
    where: CompanionOrderWhereUniqueInput
    update: XOR<CompanionOrderUpdateWithoutTransactionInput, CompanionOrderUncheckedUpdateWithoutTransactionInput>
    create: XOR<CompanionOrderCreateWithoutTransactionInput, CompanionOrderUncheckedCreateWithoutTransactionInput>
  }

  export type CompanionOrderUpdateWithWhereUniqueWithoutTransactionInput = {
    where: CompanionOrderWhereUniqueInput
    data: XOR<CompanionOrderUpdateWithoutTransactionInput, CompanionOrderUncheckedUpdateWithoutTransactionInput>
  }

  export type CompanionOrderUpdateManyWithWhereWithoutTransactionInput = {
    where: CompanionOrderScalarWhereInput
    data: XOR<CompanionOrderUpdateManyMutationInput, CompanionOrderUncheckedUpdateManyWithoutTransactionInput>
  }

  export type CompanionOrderScalarWhereInput = {
    AND?: CompanionOrderScalarWhereInput | CompanionOrderScalarWhereInput[]
    OR?: CompanionOrderScalarWhereInput[]
    NOT?: CompanionOrderScalarWhereInput | CompanionOrderScalarWhereInput[]
    id?: StringFilter<"CompanionOrder"> | string
    companionId?: IntFilter<"CompanionOrder"> | number
    durationMinute?: IntFilter<"CompanionOrder"> | number
    startTime?: DateTimeFilter<"CompanionOrder"> | Date | string
    endTime?: DateTimeFilter<"CompanionOrder"> | Date | string
    total?: DecimalFilter<"CompanionOrder"> | Decimal | DecimalJsLike | number | string
    finisedAt?: DateTimeNullableFilter<"CompanionOrder"> | Date | string | null
    canceldAt?: DateTimeNullableFilter<"CompanionOrder"> | Date | string | null
    createdAt?: DateTimeFilter<"CompanionOrder"> | Date | string
    transactionId?: StringFilter<"CompanionOrder"> | string
  }

  export type UserCreateWithoutPaymentInput = {
    username: string
    password: string
    role?: $Enums.UserRole
    deleted?: boolean
    fnbTrackStock?: FnbTrackStockCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.UserRole
    deleted?: boolean
    fnbTrackStock?: FnbTrackStockUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type TransactionCreateWithoutPaymentInput = {
    id?: string
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
    session: SessionCreateNestedOneWithoutTransactionInput
    fnbOrder?: FnbOrderCreateNestedManyWithoutTransactionInput
    companionOrder?: CompanionOrderCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutPaymentInput = {
    id?: string
    sessionId: number
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
    fnbOrder?: FnbOrderUncheckedCreateNestedManyWithoutTransactionInput
    companionOrder?: CompanionOrderUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPaymentInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fnbTrackStock?: FnbTrackStockUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fnbTrackStock?: FnbTrackStockUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithoutPaymentInput = {
    update: XOR<TransactionUpdateWithoutPaymentInput, TransactionUncheckedUpdateWithoutPaymentInput>
    create: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutPaymentInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutPaymentInput, TransactionUncheckedUpdateWithoutPaymentInput>
  }

  export type TransactionUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    session?: SessionUpdateOneRequiredWithoutTransactionNestedInput
    fnbOrder?: FnbOrderUpdateManyWithoutTransactionNestedInput
    companionOrder?: CompanionOrderUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: IntFieldUpdateOperationsInput | number
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fnbOrder?: FnbOrderUncheckedUpdateManyWithoutTransactionNestedInput
    companionOrder?: CompanionOrderUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type FnbTrackStockCreateWithoutFnbInput = {
    id?: string
    suplayer: string
    type: $Enums.TypeTrackStock
    qty: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFnbTrackStockInput
  }

  export type FnbTrackStockUncheckedCreateWithoutFnbInput = {
    id?: string
    suplayer: string
    userId: number
    type: $Enums.TypeTrackStock
    qty: number
    createdAt?: Date | string
  }

  export type FnbTrackStockCreateOrConnectWithoutFnbInput = {
    where: FnbTrackStockWhereUniqueInput
    create: XOR<FnbTrackStockCreateWithoutFnbInput, FnbTrackStockUncheckedCreateWithoutFnbInput>
  }

  export type FnbTrackStockCreateManyFnbInputEnvelope = {
    data: FnbTrackStockCreateManyFnbInput | FnbTrackStockCreateManyFnbInput[]
    skipDuplicates?: boolean
  }

  export type FnbItemCreateWithoutFnbInput = {
    qty: number
    name: string
    price?: Decimal | DecimalJsLike | number | string
    category?: $Enums.FnbCategory
    fnbOrder?: FnbOrderCreateNestedManyWithoutItemInput
  }

  export type FnbItemUncheckedCreateWithoutFnbInput = {
    id?: number
    qty: number
    name: string
    price?: Decimal | DecimalJsLike | number | string
    category?: $Enums.FnbCategory
    fnbOrder?: FnbOrderUncheckedCreateNestedManyWithoutItemInput
  }

  export type FnbItemCreateOrConnectWithoutFnbInput = {
    where: FnbItemWhereUniqueInput
    create: XOR<FnbItemCreateWithoutFnbInput, FnbItemUncheckedCreateWithoutFnbInput>
  }

  export type FnbItemCreateManyFnbInputEnvelope = {
    data: FnbItemCreateManyFnbInput | FnbItemCreateManyFnbInput[]
    skipDuplicates?: boolean
  }

  export type FnbTrackStockUpsertWithWhereUniqueWithoutFnbInput = {
    where: FnbTrackStockWhereUniqueInput
    update: XOR<FnbTrackStockUpdateWithoutFnbInput, FnbTrackStockUncheckedUpdateWithoutFnbInput>
    create: XOR<FnbTrackStockCreateWithoutFnbInput, FnbTrackStockUncheckedCreateWithoutFnbInput>
  }

  export type FnbTrackStockUpdateWithWhereUniqueWithoutFnbInput = {
    where: FnbTrackStockWhereUniqueInput
    data: XOR<FnbTrackStockUpdateWithoutFnbInput, FnbTrackStockUncheckedUpdateWithoutFnbInput>
  }

  export type FnbTrackStockUpdateManyWithWhereWithoutFnbInput = {
    where: FnbTrackStockScalarWhereInput
    data: XOR<FnbTrackStockUpdateManyMutationInput, FnbTrackStockUncheckedUpdateManyWithoutFnbInput>
  }

  export type FnbItemUpsertWithWhereUniqueWithoutFnbInput = {
    where: FnbItemWhereUniqueInput
    update: XOR<FnbItemUpdateWithoutFnbInput, FnbItemUncheckedUpdateWithoutFnbInput>
    create: XOR<FnbItemCreateWithoutFnbInput, FnbItemUncheckedCreateWithoutFnbInput>
  }

  export type FnbItemUpdateWithWhereUniqueWithoutFnbInput = {
    where: FnbItemWhereUniqueInput
    data: XOR<FnbItemUpdateWithoutFnbInput, FnbItemUncheckedUpdateWithoutFnbInput>
  }

  export type FnbItemUpdateManyWithWhereWithoutFnbInput = {
    where: FnbItemScalarWhereInput
    data: XOR<FnbItemUpdateManyMutationInput, FnbItemUncheckedUpdateManyWithoutFnbInput>
  }

  export type FnbItemScalarWhereInput = {
    AND?: FnbItemScalarWhereInput | FnbItemScalarWhereInput[]
    OR?: FnbItemScalarWhereInput[]
    NOT?: FnbItemScalarWhereInput | FnbItemScalarWhereInput[]
    id?: IntFilter<"FnbItem"> | number
    fnbId?: IntFilter<"FnbItem"> | number
    qty?: IntFilter<"FnbItem"> | number
    name?: StringFilter<"FnbItem"> | string
    price?: DecimalFilter<"FnbItem"> | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFilter<"FnbItem"> | $Enums.FnbCategory
  }

  export type FnbCreateWithoutFnbTrackStockInput = {
    name: string
    category?: $Enums.FnbCategory
    trackStock?: boolean
    stock?: number
    price?: Decimal | DecimalJsLike | number | string
    deleted?: boolean
    fnbItem?: FnbItemCreateNestedManyWithoutFnbInput
  }

  export type FnbUncheckedCreateWithoutFnbTrackStockInput = {
    id?: number
    name: string
    category?: $Enums.FnbCategory
    trackStock?: boolean
    stock?: number
    price?: Decimal | DecimalJsLike | number | string
    deleted?: boolean
    fnbItem?: FnbItemUncheckedCreateNestedManyWithoutFnbInput
  }

  export type FnbCreateOrConnectWithoutFnbTrackStockInput = {
    where: FnbWhereUniqueInput
    create: XOR<FnbCreateWithoutFnbTrackStockInput, FnbUncheckedCreateWithoutFnbTrackStockInput>
  }

  export type UserCreateWithoutFnbTrackStockInput = {
    username: string
    password: string
    role?: $Enums.UserRole
    deleted?: boolean
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFnbTrackStockInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.UserRole
    deleted?: boolean
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFnbTrackStockInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFnbTrackStockInput, UserUncheckedCreateWithoutFnbTrackStockInput>
  }

  export type FnbUpsertWithoutFnbTrackStockInput = {
    update: XOR<FnbUpdateWithoutFnbTrackStockInput, FnbUncheckedUpdateWithoutFnbTrackStockInput>
    create: XOR<FnbCreateWithoutFnbTrackStockInput, FnbUncheckedCreateWithoutFnbTrackStockInput>
    where?: FnbWhereInput
  }

  export type FnbUpdateToOneWithWhereWithoutFnbTrackStockInput = {
    where?: FnbWhereInput
    data: XOR<FnbUpdateWithoutFnbTrackStockInput, FnbUncheckedUpdateWithoutFnbTrackStockInput>
  }

  export type FnbUpdateWithoutFnbTrackStockInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fnbItem?: FnbItemUpdateManyWithoutFnbNestedInput
  }

  export type FnbUncheckedUpdateWithoutFnbTrackStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fnbItem?: FnbItemUncheckedUpdateManyWithoutFnbNestedInput
  }

  export type UserUpsertWithoutFnbTrackStockInput = {
    update: XOR<UserUpdateWithoutFnbTrackStockInput, UserUncheckedUpdateWithoutFnbTrackStockInput>
    create: XOR<UserCreateWithoutFnbTrackStockInput, UserUncheckedCreateWithoutFnbTrackStockInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFnbTrackStockInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFnbTrackStockInput, UserUncheckedUpdateWithoutFnbTrackStockInput>
  }

  export type UserUpdateWithoutFnbTrackStockInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    deleted?: BoolFieldUpdateOperationsInput | boolean
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFnbTrackStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    deleted?: BoolFieldUpdateOperationsInput | boolean
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionCreateWithoutFnbOrderInput = {
    id?: string
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
    session: SessionCreateNestedOneWithoutTransactionInput
    payment?: PaymentCreateNestedManyWithoutTransactionInput
    companionOrder?: CompanionOrderCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutFnbOrderInput = {
    id?: string
    sessionId: number
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
    payment?: PaymentUncheckedCreateNestedManyWithoutTransactionInput
    companionOrder?: CompanionOrderUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutFnbOrderInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutFnbOrderInput, TransactionUncheckedCreateWithoutFnbOrderInput>
  }

  export type FnbItemCreateWithoutFnbOrderInput = {
    qty: number
    name: string
    price?: Decimal | DecimalJsLike | number | string
    category?: $Enums.FnbCategory
    fnb: FnbCreateNestedOneWithoutFnbItemInput
  }

  export type FnbItemUncheckedCreateWithoutFnbOrderInput = {
    id?: number
    fnbId: number
    qty: number
    name: string
    price?: Decimal | DecimalJsLike | number | string
    category?: $Enums.FnbCategory
  }

  export type FnbItemCreateOrConnectWithoutFnbOrderInput = {
    where: FnbItemWhereUniqueInput
    create: XOR<FnbItemCreateWithoutFnbOrderInput, FnbItemUncheckedCreateWithoutFnbOrderInput>
  }

  export type TransactionUpsertWithoutFnbOrderInput = {
    update: XOR<TransactionUpdateWithoutFnbOrderInput, TransactionUncheckedUpdateWithoutFnbOrderInput>
    create: XOR<TransactionCreateWithoutFnbOrderInput, TransactionUncheckedCreateWithoutFnbOrderInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutFnbOrderInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutFnbOrderInput, TransactionUncheckedUpdateWithoutFnbOrderInput>
  }

  export type TransactionUpdateWithoutFnbOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    session?: SessionUpdateOneRequiredWithoutTransactionNestedInput
    payment?: PaymentUpdateManyWithoutTransactionNestedInput
    companionOrder?: CompanionOrderUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutFnbOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: IntFieldUpdateOperationsInput | number
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateManyWithoutTransactionNestedInput
    companionOrder?: CompanionOrderUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type FnbItemUpsertWithoutFnbOrderInput = {
    update: XOR<FnbItemUpdateWithoutFnbOrderInput, FnbItemUncheckedUpdateWithoutFnbOrderInput>
    create: XOR<FnbItemCreateWithoutFnbOrderInput, FnbItemUncheckedCreateWithoutFnbOrderInput>
    where?: FnbItemWhereInput
  }

  export type FnbItemUpdateToOneWithWhereWithoutFnbOrderInput = {
    where?: FnbItemWhereInput
    data: XOR<FnbItemUpdateWithoutFnbOrderInput, FnbItemUncheckedUpdateWithoutFnbOrderInput>
  }

  export type FnbItemUpdateWithoutFnbOrderInput = {
    qty?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    fnb?: FnbUpdateOneRequiredWithoutFnbItemNestedInput
  }

  export type FnbItemUncheckedUpdateWithoutFnbOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    fnbId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
  }

  export type FnbCreateWithoutFnbItemInput = {
    name: string
    category?: $Enums.FnbCategory
    trackStock?: boolean
    stock?: number
    price?: Decimal | DecimalJsLike | number | string
    deleted?: boolean
    fnbTrackStock?: FnbTrackStockCreateNestedManyWithoutFnbInput
  }

  export type FnbUncheckedCreateWithoutFnbItemInput = {
    id?: number
    name: string
    category?: $Enums.FnbCategory
    trackStock?: boolean
    stock?: number
    price?: Decimal | DecimalJsLike | number | string
    deleted?: boolean
    fnbTrackStock?: FnbTrackStockUncheckedCreateNestedManyWithoutFnbInput
  }

  export type FnbCreateOrConnectWithoutFnbItemInput = {
    where: FnbWhereUniqueInput
    create: XOR<FnbCreateWithoutFnbItemInput, FnbUncheckedCreateWithoutFnbItemInput>
  }

  export type FnbOrderCreateWithoutItemInput = {
    id?: string
    status?: $Enums.OrderStatus
    total?: Decimal | DecimalJsLike | number | string
    note?: string | null
    draftAt?: Date | string
    sendAt?: Date | string | null
    cancelAt?: Date | string | null
    transaction: TransactionCreateNestedOneWithoutFnbOrderInput
  }

  export type FnbOrderUncheckedCreateWithoutItemInput = {
    id?: string
    status?: $Enums.OrderStatus
    transactionId: string
    total?: Decimal | DecimalJsLike | number | string
    note?: string | null
    draftAt?: Date | string
    sendAt?: Date | string | null
    cancelAt?: Date | string | null
  }

  export type FnbOrderCreateOrConnectWithoutItemInput = {
    where: FnbOrderWhereUniqueInput
    create: XOR<FnbOrderCreateWithoutItemInput, FnbOrderUncheckedCreateWithoutItemInput>
  }

  export type FnbOrderCreateManyItemInputEnvelope = {
    data: FnbOrderCreateManyItemInput | FnbOrderCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type FnbUpsertWithoutFnbItemInput = {
    update: XOR<FnbUpdateWithoutFnbItemInput, FnbUncheckedUpdateWithoutFnbItemInput>
    create: XOR<FnbCreateWithoutFnbItemInput, FnbUncheckedCreateWithoutFnbItemInput>
    where?: FnbWhereInput
  }

  export type FnbUpdateToOneWithWhereWithoutFnbItemInput = {
    where?: FnbWhereInput
    data: XOR<FnbUpdateWithoutFnbItemInput, FnbUncheckedUpdateWithoutFnbItemInput>
  }

  export type FnbUpdateWithoutFnbItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fnbTrackStock?: FnbTrackStockUpdateManyWithoutFnbNestedInput
  }

  export type FnbUncheckedUpdateWithoutFnbItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fnbTrackStock?: FnbTrackStockUncheckedUpdateManyWithoutFnbNestedInput
  }

  export type FnbOrderUpsertWithWhereUniqueWithoutItemInput = {
    where: FnbOrderWhereUniqueInput
    update: XOR<FnbOrderUpdateWithoutItemInput, FnbOrderUncheckedUpdateWithoutItemInput>
    create: XOR<FnbOrderCreateWithoutItemInput, FnbOrderUncheckedCreateWithoutItemInput>
  }

  export type FnbOrderUpdateWithWhereUniqueWithoutItemInput = {
    where: FnbOrderWhereUniqueInput
    data: XOR<FnbOrderUpdateWithoutItemInput, FnbOrderUncheckedUpdateWithoutItemInput>
  }

  export type FnbOrderUpdateManyWithWhereWithoutItemInput = {
    where: FnbOrderScalarWhereInput
    data: XOR<FnbOrderUpdateManyMutationInput, FnbOrderUncheckedUpdateManyWithoutItemInput>
  }

  export type CompanionOrderCreateWithoutCompanionInput = {
    id?: string
    durationMinute: number
    startTime: Date | string
    endTime: Date | string
    total?: Decimal | DecimalJsLike | number | string
    finisedAt?: Date | string | null
    canceldAt?: Date | string | null
    createdAt?: Date | string
    transaction: TransactionCreateNestedOneWithoutCompanionOrderInput
  }

  export type CompanionOrderUncheckedCreateWithoutCompanionInput = {
    id?: string
    durationMinute: number
    startTime: Date | string
    endTime: Date | string
    total?: Decimal | DecimalJsLike | number | string
    finisedAt?: Date | string | null
    canceldAt?: Date | string | null
    createdAt?: Date | string
    transactionId: string
  }

  export type CompanionOrderCreateOrConnectWithoutCompanionInput = {
    where: CompanionOrderWhereUniqueInput
    create: XOR<CompanionOrderCreateWithoutCompanionInput, CompanionOrderUncheckedCreateWithoutCompanionInput>
  }

  export type CompanionOrderCreateManyCompanionInputEnvelope = {
    data: CompanionOrderCreateManyCompanionInput | CompanionOrderCreateManyCompanionInput[]
    skipDuplicates?: boolean
  }

  export type CompanionOrderUpsertWithWhereUniqueWithoutCompanionInput = {
    where: CompanionOrderWhereUniqueInput
    update: XOR<CompanionOrderUpdateWithoutCompanionInput, CompanionOrderUncheckedUpdateWithoutCompanionInput>
    create: XOR<CompanionOrderCreateWithoutCompanionInput, CompanionOrderUncheckedCreateWithoutCompanionInput>
  }

  export type CompanionOrderUpdateWithWhereUniqueWithoutCompanionInput = {
    where: CompanionOrderWhereUniqueInput
    data: XOR<CompanionOrderUpdateWithoutCompanionInput, CompanionOrderUncheckedUpdateWithoutCompanionInput>
  }

  export type CompanionOrderUpdateManyWithWhereWithoutCompanionInput = {
    where: CompanionOrderScalarWhereInput
    data: XOR<CompanionOrderUpdateManyMutationInput, CompanionOrderUncheckedUpdateManyWithoutCompanionInput>
  }

  export type CompanionCreateWithoutCompanionOrderInput = {
    name: string
    hourlyRate?: Decimal | DecimalJsLike | number | string
    available?: boolean
  }

  export type CompanionUncheckedCreateWithoutCompanionOrderInput = {
    id?: number
    name: string
    hourlyRate?: Decimal | DecimalJsLike | number | string
    available?: boolean
  }

  export type CompanionCreateOrConnectWithoutCompanionOrderInput = {
    where: CompanionWhereUniqueInput
    create: XOR<CompanionCreateWithoutCompanionOrderInput, CompanionUncheckedCreateWithoutCompanionOrderInput>
  }

  export type TransactionCreateWithoutCompanionOrderInput = {
    id?: string
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
    session: SessionCreateNestedOneWithoutTransactionInput
    fnbOrder?: FnbOrderCreateNestedManyWithoutTransactionInput
    payment?: PaymentCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCompanionOrderInput = {
    id?: string
    sessionId: number
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
    fnbOrder?: FnbOrderUncheckedCreateNestedManyWithoutTransactionInput
    payment?: PaymentUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCompanionOrderInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCompanionOrderInput, TransactionUncheckedCreateWithoutCompanionOrderInput>
  }

  export type CompanionUpsertWithoutCompanionOrderInput = {
    update: XOR<CompanionUpdateWithoutCompanionOrderInput, CompanionUncheckedUpdateWithoutCompanionOrderInput>
    create: XOR<CompanionCreateWithoutCompanionOrderInput, CompanionUncheckedCreateWithoutCompanionOrderInput>
    where?: CompanionWhereInput
  }

  export type CompanionUpdateToOneWithWhereWithoutCompanionOrderInput = {
    where?: CompanionWhereInput
    data: XOR<CompanionUpdateWithoutCompanionOrderInput, CompanionUncheckedUpdateWithoutCompanionOrderInput>
  }

  export type CompanionUpdateWithoutCompanionOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompanionUncheckedUpdateWithoutCompanionOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpsertWithoutCompanionOrderInput = {
    update: XOR<TransactionUpdateWithoutCompanionOrderInput, TransactionUncheckedUpdateWithoutCompanionOrderInput>
    create: XOR<TransactionCreateWithoutCompanionOrderInput, TransactionUncheckedCreateWithoutCompanionOrderInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutCompanionOrderInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutCompanionOrderInput, TransactionUncheckedUpdateWithoutCompanionOrderInput>
  }

  export type TransactionUpdateWithoutCompanionOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    session?: SessionUpdateOneRequiredWithoutTransactionNestedInput
    fnbOrder?: FnbOrderUpdateManyWithoutTransactionNestedInput
    payment?: PaymentUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCompanionOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: IntFieldUpdateOperationsInput | number
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fnbOrder?: FnbOrderUncheckedUpdateManyWithoutTransactionNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type PaymentCreateManyUserInput = {
    id?: number
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    amount?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string | null
    note?: string | null
    transactionId: string
  }

  export type FnbTrackStockCreateManyUserInput = {
    id?: string
    suplayer: string
    fnbId: number
    type: $Enums.TypeTrackStock
    qty: number
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transaction?: TransactionUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type FnbTrackStockUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    suplayer?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeTrackStockFieldUpdateOperationsInput | $Enums.TypeTrackStock
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fnb?: FnbUpdateOneRequiredWithoutFnbTrackStockNestedInput
  }

  export type FnbTrackStockUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    suplayer?: StringFieldUpdateOperationsInput | string
    fnbId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeTrackStockFieldUpdateOperationsInput | $Enums.TypeTrackStock
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FnbTrackStockUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    suplayer?: StringFieldUpdateOperationsInput | string
    fnbId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeTrackStockFieldUpdateOperationsInput | $Enums.TypeTrackStock
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyRoomInput = {
    id?: number
    customerId: number
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutRoomInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSessionNestedInput
    transaction?: TransactionUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyCustomerInput = {
    id?: number
    roomId: number
    startTime: Date | string
    endTime: Date | string
    closed?: boolean
    durationMinute: number
    extraMinute?: number
    freeMinute?: number
    deleted?: boolean
    userId: number
    userOut?: number | null
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutCustomerInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutSessionNestedInput
    transaction?: TransactionUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    durationMinute?: IntFieldUpdateOperationsInput | number
    extraMinute?: IntFieldUpdateOperationsInput | number
    freeMinute?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    userOut?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManySessionInput = {
    id?: string
    roomTotal: Decimal | DecimalJsLike | number | string
    roomDiscount?: Decimal | DecimalJsLike | number | string
    fnbTotal?: Decimal | DecimalJsLike | number | string
    companionTotal?: Decimal | DecimalJsLike | number | string
    subTotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    service?: Decimal | DecimalJsLike | number | string
    grandTotal?: Decimal | DecimalJsLike | number | string
    note?: string | null
  }

  export type TransactionUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fnbOrder?: FnbOrderUpdateManyWithoutTransactionNestedInput
    payment?: PaymentUpdateManyWithoutTransactionNestedInput
    companionOrder?: CompanionOrderUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fnbOrder?: FnbOrderUncheckedUpdateManyWithoutTransactionNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutTransactionNestedInput
    companionOrder?: CompanionOrderUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roomDiscount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fnbTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    companionTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    service?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grandTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FnbOrderCreateManyTransactionInput = {
    id?: string
    status?: $Enums.OrderStatus
    itemId: number
    total?: Decimal | DecimalJsLike | number | string
    note?: string | null
    draftAt?: Date | string
    sendAt?: Date | string | null
    cancelAt?: Date | string | null
  }

  export type PaymentCreateManyTransactionInput = {
    id?: number
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    amount?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string | null
    userId: number
    note?: string | null
  }

  export type CompanionOrderCreateManyTransactionInput = {
    id?: string
    companionId: number
    durationMinute: number
    startTime: Date | string
    endTime: Date | string
    total?: Decimal | DecimalJsLike | number | string
    finisedAt?: Date | string | null
    canceldAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FnbOrderUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    draftAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item?: FnbItemUpdateOneRequiredWithoutFnbOrderNestedInput
  }

  export type FnbOrderUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    itemId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    draftAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FnbOrderUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    itemId?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    draftAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUpdateWithoutTransactionInput = {
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanionOrderUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMinute?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companion?: CompanionUpdateOneRequiredWithoutCompanionOrderNestedInput
  }

  export type CompanionOrderUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionId?: IntFieldUpdateOperationsInput | number
    durationMinute?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionOrderUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionId?: IntFieldUpdateOperationsInput | number
    durationMinute?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FnbTrackStockCreateManyFnbInput = {
    id?: string
    suplayer: string
    userId: number
    type: $Enums.TypeTrackStock
    qty: number
    createdAt?: Date | string
  }

  export type FnbItemCreateManyFnbInput = {
    id?: number
    qty: number
    name: string
    price?: Decimal | DecimalJsLike | number | string
    category?: $Enums.FnbCategory
  }

  export type FnbTrackStockUpdateWithoutFnbInput = {
    id?: StringFieldUpdateOperationsInput | string
    suplayer?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeTrackStockFieldUpdateOperationsInput | $Enums.TypeTrackStock
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFnbTrackStockNestedInput
  }

  export type FnbTrackStockUncheckedUpdateWithoutFnbInput = {
    id?: StringFieldUpdateOperationsInput | string
    suplayer?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeTrackStockFieldUpdateOperationsInput | $Enums.TypeTrackStock
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FnbTrackStockUncheckedUpdateManyWithoutFnbInput = {
    id?: StringFieldUpdateOperationsInput | string
    suplayer?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeTrackStockFieldUpdateOperationsInput | $Enums.TypeTrackStock
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FnbItemUpdateWithoutFnbInput = {
    qty?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    fnbOrder?: FnbOrderUpdateManyWithoutItemNestedInput
  }

  export type FnbItemUncheckedUpdateWithoutFnbInput = {
    id?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
    fnbOrder?: FnbOrderUncheckedUpdateManyWithoutItemNestedInput
  }

  export type FnbItemUncheckedUpdateManyWithoutFnbInput = {
    id?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumFnbCategoryFieldUpdateOperationsInput | $Enums.FnbCategory
  }

  export type FnbOrderCreateManyItemInput = {
    id?: string
    status?: $Enums.OrderStatus
    transactionId: string
    total?: Decimal | DecimalJsLike | number | string
    note?: string | null
    draftAt?: Date | string
    sendAt?: Date | string | null
    cancelAt?: Date | string | null
  }

  export type FnbOrderUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    draftAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateOneRequiredWithoutFnbOrderNestedInput
  }

  export type FnbOrderUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    draftAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FnbOrderUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    draftAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanionOrderCreateManyCompanionInput = {
    id?: string
    durationMinute: number
    startTime: Date | string
    endTime: Date | string
    total?: Decimal | DecimalJsLike | number | string
    finisedAt?: Date | string | null
    canceldAt?: Date | string | null
    createdAt?: Date | string
    transactionId: string
  }

  export type CompanionOrderUpdateWithoutCompanionInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMinute?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutCompanionOrderNestedInput
  }

  export type CompanionOrderUncheckedUpdateWithoutCompanionInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMinute?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanionOrderUncheckedUpdateManyWithoutCompanionInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMinute?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: StringFieldUpdateOperationsInput | string
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