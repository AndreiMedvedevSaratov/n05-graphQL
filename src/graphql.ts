
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateArtistInput {
    firstName: string;
    secondName: string;
    country: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class UpdateArtistInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class MemberInput {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}

export class UpdateBandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export class CreateBandInput {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export class Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<string>;
}

export abstract class IQuery {
    abstract artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;

    abstract artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;

    abstract band(id: string): Nullable<Band> | Promise<Nullable<Band>>;

    abstract jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;

    abstract updateArtist(id: string, updateArtistInput?: Nullable<UpdateArtistInput>): Artist | Promise<Artist>;

    abstract deleteArtist(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;

    abstract createBand(createBandInput: CreateBandInput): Band | Promise<Band>;

    abstract updateBand(id?: Nullable<string>, updateBandInput?: Nullable<UpdateBandInput>): Band | Promise<Band>;

    abstract deleteBand(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;

    abstract register(firstName: string, lastName: string, password: string, email: string): User | Promise<User>;
}

export class Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<string>;
}

export class Member {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}

export class User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password: string;
    email: string;
}

export class JWT {
    jwt?: Nullable<string>;
}

export class Delete {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

type Nullable<T> = T | null;
