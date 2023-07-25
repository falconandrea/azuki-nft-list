// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace AnalyticsTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Azuki = {
  id: Scalars['ID'];
  creator: Scalars['Bytes'];
  newOwner: Scalars['Bytes'];
  tokenURI: Scalars['String'];
  blockNumber: Scalars['BigInt'];
};

export type Azuki_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  creator?: InputMaybe<Scalars['Bytes']>;
  creator_not?: InputMaybe<Scalars['Bytes']>;
  creator_gt?: InputMaybe<Scalars['Bytes']>;
  creator_lt?: InputMaybe<Scalars['Bytes']>;
  creator_gte?: InputMaybe<Scalars['Bytes']>;
  creator_lte?: InputMaybe<Scalars['Bytes']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creator_contains?: InputMaybe<Scalars['Bytes']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner?: InputMaybe<Scalars['Bytes']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Azuki_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Azuki_filter>>>;
};

export type Azuki_orderBy =
  | 'id'
  | 'creator'
  | 'newOwner'
  | 'tokenURI'
  | 'blockNumber';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Property = {
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  hair?: Maybe<Scalars['String']>;
  headgear?: Maybe<Scalars['String']>;
  face?: Maybe<Scalars['String']>;
  neck?: Maybe<Scalars['String']>;
  clothing?: Maybe<Scalars['String']>;
  eyes?: Maybe<Scalars['String']>;
  mouth?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  ear?: Maybe<Scalars['String']>;
  offhand?: Maybe<Scalars['String']>;
  special?: Maybe<Scalars['String']>;
};

export type Property_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  image?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hair?: InputMaybe<Scalars['String']>;
  hair_not?: InputMaybe<Scalars['String']>;
  hair_gt?: InputMaybe<Scalars['String']>;
  hair_lt?: InputMaybe<Scalars['String']>;
  hair_gte?: InputMaybe<Scalars['String']>;
  hair_lte?: InputMaybe<Scalars['String']>;
  hair_in?: InputMaybe<Array<Scalars['String']>>;
  hair_not_in?: InputMaybe<Array<Scalars['String']>>;
  hair_contains?: InputMaybe<Scalars['String']>;
  hair_contains_nocase?: InputMaybe<Scalars['String']>;
  hair_not_contains?: InputMaybe<Scalars['String']>;
  hair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hair_starts_with?: InputMaybe<Scalars['String']>;
  hair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hair_not_starts_with?: InputMaybe<Scalars['String']>;
  hair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hair_ends_with?: InputMaybe<Scalars['String']>;
  hair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hair_not_ends_with?: InputMaybe<Scalars['String']>;
  hair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  headgear?: InputMaybe<Scalars['String']>;
  headgear_not?: InputMaybe<Scalars['String']>;
  headgear_gt?: InputMaybe<Scalars['String']>;
  headgear_lt?: InputMaybe<Scalars['String']>;
  headgear_gte?: InputMaybe<Scalars['String']>;
  headgear_lte?: InputMaybe<Scalars['String']>;
  headgear_in?: InputMaybe<Array<Scalars['String']>>;
  headgear_not_in?: InputMaybe<Array<Scalars['String']>>;
  headgear_contains?: InputMaybe<Scalars['String']>;
  headgear_contains_nocase?: InputMaybe<Scalars['String']>;
  headgear_not_contains?: InputMaybe<Scalars['String']>;
  headgear_not_contains_nocase?: InputMaybe<Scalars['String']>;
  headgear_starts_with?: InputMaybe<Scalars['String']>;
  headgear_starts_with_nocase?: InputMaybe<Scalars['String']>;
  headgear_not_starts_with?: InputMaybe<Scalars['String']>;
  headgear_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  headgear_ends_with?: InputMaybe<Scalars['String']>;
  headgear_ends_with_nocase?: InputMaybe<Scalars['String']>;
  headgear_not_ends_with?: InputMaybe<Scalars['String']>;
  headgear_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  face?: InputMaybe<Scalars['String']>;
  face_not?: InputMaybe<Scalars['String']>;
  face_gt?: InputMaybe<Scalars['String']>;
  face_lt?: InputMaybe<Scalars['String']>;
  face_gte?: InputMaybe<Scalars['String']>;
  face_lte?: InputMaybe<Scalars['String']>;
  face_in?: InputMaybe<Array<Scalars['String']>>;
  face_not_in?: InputMaybe<Array<Scalars['String']>>;
  face_contains?: InputMaybe<Scalars['String']>;
  face_contains_nocase?: InputMaybe<Scalars['String']>;
  face_not_contains?: InputMaybe<Scalars['String']>;
  face_not_contains_nocase?: InputMaybe<Scalars['String']>;
  face_starts_with?: InputMaybe<Scalars['String']>;
  face_starts_with_nocase?: InputMaybe<Scalars['String']>;
  face_not_starts_with?: InputMaybe<Scalars['String']>;
  face_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  face_ends_with?: InputMaybe<Scalars['String']>;
  face_ends_with_nocase?: InputMaybe<Scalars['String']>;
  face_not_ends_with?: InputMaybe<Scalars['String']>;
  face_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  neck?: InputMaybe<Scalars['String']>;
  neck_not?: InputMaybe<Scalars['String']>;
  neck_gt?: InputMaybe<Scalars['String']>;
  neck_lt?: InputMaybe<Scalars['String']>;
  neck_gte?: InputMaybe<Scalars['String']>;
  neck_lte?: InputMaybe<Scalars['String']>;
  neck_in?: InputMaybe<Array<Scalars['String']>>;
  neck_not_in?: InputMaybe<Array<Scalars['String']>>;
  neck_contains?: InputMaybe<Scalars['String']>;
  neck_contains_nocase?: InputMaybe<Scalars['String']>;
  neck_not_contains?: InputMaybe<Scalars['String']>;
  neck_not_contains_nocase?: InputMaybe<Scalars['String']>;
  neck_starts_with?: InputMaybe<Scalars['String']>;
  neck_starts_with_nocase?: InputMaybe<Scalars['String']>;
  neck_not_starts_with?: InputMaybe<Scalars['String']>;
  neck_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  neck_ends_with?: InputMaybe<Scalars['String']>;
  neck_ends_with_nocase?: InputMaybe<Scalars['String']>;
  neck_not_ends_with?: InputMaybe<Scalars['String']>;
  neck_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  clothing?: InputMaybe<Scalars['String']>;
  clothing_not?: InputMaybe<Scalars['String']>;
  clothing_gt?: InputMaybe<Scalars['String']>;
  clothing_lt?: InputMaybe<Scalars['String']>;
  clothing_gte?: InputMaybe<Scalars['String']>;
  clothing_lte?: InputMaybe<Scalars['String']>;
  clothing_in?: InputMaybe<Array<Scalars['String']>>;
  clothing_not_in?: InputMaybe<Array<Scalars['String']>>;
  clothing_contains?: InputMaybe<Scalars['String']>;
  clothing_contains_nocase?: InputMaybe<Scalars['String']>;
  clothing_not_contains?: InputMaybe<Scalars['String']>;
  clothing_not_contains_nocase?: InputMaybe<Scalars['String']>;
  clothing_starts_with?: InputMaybe<Scalars['String']>;
  clothing_starts_with_nocase?: InputMaybe<Scalars['String']>;
  clothing_not_starts_with?: InputMaybe<Scalars['String']>;
  clothing_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  clothing_ends_with?: InputMaybe<Scalars['String']>;
  clothing_ends_with_nocase?: InputMaybe<Scalars['String']>;
  clothing_not_ends_with?: InputMaybe<Scalars['String']>;
  clothing_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  eyes?: InputMaybe<Scalars['String']>;
  eyes_not?: InputMaybe<Scalars['String']>;
  eyes_gt?: InputMaybe<Scalars['String']>;
  eyes_lt?: InputMaybe<Scalars['String']>;
  eyes_gte?: InputMaybe<Scalars['String']>;
  eyes_lte?: InputMaybe<Scalars['String']>;
  eyes_in?: InputMaybe<Array<Scalars['String']>>;
  eyes_not_in?: InputMaybe<Array<Scalars['String']>>;
  eyes_contains?: InputMaybe<Scalars['String']>;
  eyes_contains_nocase?: InputMaybe<Scalars['String']>;
  eyes_not_contains?: InputMaybe<Scalars['String']>;
  eyes_not_contains_nocase?: InputMaybe<Scalars['String']>;
  eyes_starts_with?: InputMaybe<Scalars['String']>;
  eyes_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eyes_not_starts_with?: InputMaybe<Scalars['String']>;
  eyes_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eyes_ends_with?: InputMaybe<Scalars['String']>;
  eyes_ends_with_nocase?: InputMaybe<Scalars['String']>;
  eyes_not_ends_with?: InputMaybe<Scalars['String']>;
  eyes_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mouth?: InputMaybe<Scalars['String']>;
  mouth_not?: InputMaybe<Scalars['String']>;
  mouth_gt?: InputMaybe<Scalars['String']>;
  mouth_lt?: InputMaybe<Scalars['String']>;
  mouth_gte?: InputMaybe<Scalars['String']>;
  mouth_lte?: InputMaybe<Scalars['String']>;
  mouth_in?: InputMaybe<Array<Scalars['String']>>;
  mouth_not_in?: InputMaybe<Array<Scalars['String']>>;
  mouth_contains?: InputMaybe<Scalars['String']>;
  mouth_contains_nocase?: InputMaybe<Scalars['String']>;
  mouth_not_contains?: InputMaybe<Scalars['String']>;
  mouth_not_contains_nocase?: InputMaybe<Scalars['String']>;
  mouth_starts_with?: InputMaybe<Scalars['String']>;
  mouth_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mouth_not_starts_with?: InputMaybe<Scalars['String']>;
  mouth_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mouth_ends_with?: InputMaybe<Scalars['String']>;
  mouth_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mouth_not_ends_with?: InputMaybe<Scalars['String']>;
  mouth_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  background_not?: InputMaybe<Scalars['String']>;
  background_gt?: InputMaybe<Scalars['String']>;
  background_lt?: InputMaybe<Scalars['String']>;
  background_gte?: InputMaybe<Scalars['String']>;
  background_lte?: InputMaybe<Scalars['String']>;
  background_in?: InputMaybe<Array<Scalars['String']>>;
  background_not_in?: InputMaybe<Array<Scalars['String']>>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_contains_nocase?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_contains_nocase?: InputMaybe<Scalars['String']>;
  background_starts_with?: InputMaybe<Scalars['String']>;
  background_starts_with_nocase?: InputMaybe<Scalars['String']>;
  background_not_starts_with?: InputMaybe<Scalars['String']>;
  background_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  background_ends_with?: InputMaybe<Scalars['String']>;
  background_ends_with_nocase?: InputMaybe<Scalars['String']>;
  background_not_ends_with?: InputMaybe<Scalars['String']>;
  background_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ear?: InputMaybe<Scalars['String']>;
  ear_not?: InputMaybe<Scalars['String']>;
  ear_gt?: InputMaybe<Scalars['String']>;
  ear_lt?: InputMaybe<Scalars['String']>;
  ear_gte?: InputMaybe<Scalars['String']>;
  ear_lte?: InputMaybe<Scalars['String']>;
  ear_in?: InputMaybe<Array<Scalars['String']>>;
  ear_not_in?: InputMaybe<Array<Scalars['String']>>;
  ear_contains?: InputMaybe<Scalars['String']>;
  ear_contains_nocase?: InputMaybe<Scalars['String']>;
  ear_not_contains?: InputMaybe<Scalars['String']>;
  ear_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ear_starts_with?: InputMaybe<Scalars['String']>;
  ear_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ear_not_starts_with?: InputMaybe<Scalars['String']>;
  ear_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ear_ends_with?: InputMaybe<Scalars['String']>;
  ear_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ear_not_ends_with?: InputMaybe<Scalars['String']>;
  ear_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  offhand?: InputMaybe<Scalars['String']>;
  offhand_not?: InputMaybe<Scalars['String']>;
  offhand_gt?: InputMaybe<Scalars['String']>;
  offhand_lt?: InputMaybe<Scalars['String']>;
  offhand_gte?: InputMaybe<Scalars['String']>;
  offhand_lte?: InputMaybe<Scalars['String']>;
  offhand_in?: InputMaybe<Array<Scalars['String']>>;
  offhand_not_in?: InputMaybe<Array<Scalars['String']>>;
  offhand_contains?: InputMaybe<Scalars['String']>;
  offhand_contains_nocase?: InputMaybe<Scalars['String']>;
  offhand_not_contains?: InputMaybe<Scalars['String']>;
  offhand_not_contains_nocase?: InputMaybe<Scalars['String']>;
  offhand_starts_with?: InputMaybe<Scalars['String']>;
  offhand_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offhand_not_starts_with?: InputMaybe<Scalars['String']>;
  offhand_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offhand_ends_with?: InputMaybe<Scalars['String']>;
  offhand_ends_with_nocase?: InputMaybe<Scalars['String']>;
  offhand_not_ends_with?: InputMaybe<Scalars['String']>;
  offhand_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  special?: InputMaybe<Scalars['String']>;
  special_not?: InputMaybe<Scalars['String']>;
  special_gt?: InputMaybe<Scalars['String']>;
  special_lt?: InputMaybe<Scalars['String']>;
  special_gte?: InputMaybe<Scalars['String']>;
  special_lte?: InputMaybe<Scalars['String']>;
  special_in?: InputMaybe<Array<Scalars['String']>>;
  special_not_in?: InputMaybe<Array<Scalars['String']>>;
  special_contains?: InputMaybe<Scalars['String']>;
  special_contains_nocase?: InputMaybe<Scalars['String']>;
  special_not_contains?: InputMaybe<Scalars['String']>;
  special_not_contains_nocase?: InputMaybe<Scalars['String']>;
  special_starts_with?: InputMaybe<Scalars['String']>;
  special_starts_with_nocase?: InputMaybe<Scalars['String']>;
  special_not_starts_with?: InputMaybe<Scalars['String']>;
  special_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  special_ends_with?: InputMaybe<Scalars['String']>;
  special_ends_with_nocase?: InputMaybe<Scalars['String']>;
  special_not_ends_with?: InputMaybe<Scalars['String']>;
  special_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Property_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Property_filter>>>;
};

export type Property_orderBy =
  | 'id'
  | 'image'
  | 'type'
  | 'hair'
  | 'headgear'
  | 'face'
  | 'neck'
  | 'clothing'
  | 'eyes'
  | 'mouth'
  | 'background'
  | 'ear'
  | 'offhand'
  | 'special';

export type Query = {
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  azuki?: Maybe<Azuki>;
  azukis: Array<Azuki>;
  property?: Maybe<Property>;
  properties: Array<Property>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryazukiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryazukisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Azuki_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Azuki_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypropertyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypropertiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Property_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Property_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  azuki?: Maybe<Azuki>;
  azukis: Array<Azuki>;
  property?: Maybe<Property>;
  properties: Array<Property>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionazukiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionazukisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Azuki_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Azuki_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpropertyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpropertiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Property_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Property_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Transfer = {
  id: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
};

export type Transfer_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'tokenId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  transfer: InContextSdkMethod<Query['transfer'], QuerytransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Query['transfers'], QuerytransfersArgs, MeshContext>,
  /** null **/
  azuki: InContextSdkMethod<Query['azuki'], QueryazukiArgs, MeshContext>,
  /** null **/
  azukis: InContextSdkMethod<Query['azukis'], QueryazukisArgs, MeshContext>,
  /** null **/
  property: InContextSdkMethod<Query['property'], QuerypropertyArgs, MeshContext>,
  /** null **/
  properties: InContextSdkMethod<Query['properties'], QuerypropertiesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  transfer: InContextSdkMethod<Subscription['transfer'], SubscriptiontransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Subscription['transfers'], SubscriptiontransfersArgs, MeshContext>,
  /** null **/
  azuki: InContextSdkMethod<Subscription['azuki'], SubscriptionazukiArgs, MeshContext>,
  /** null **/
  azukis: InContextSdkMethod<Subscription['azukis'], SubscriptionazukisArgs, MeshContext>,
  /** null **/
  property: InContextSdkMethod<Subscription['property'], SubscriptionpropertyArgs, MeshContext>,
  /** null **/
  properties: InContextSdkMethod<Subscription['properties'], SubscriptionpropertiesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["analytics"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
