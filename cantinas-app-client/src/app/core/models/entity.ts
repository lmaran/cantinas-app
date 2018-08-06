// export class Entity {
//     // [x: string]: any;
//     // id: number;
//     _id: string;
//     displayName: string;
//     pluralName: string;
//     uniqueName: string;
//     description?: string;

//     constructor(values: Object = {}) {
//         Object.assign(this, values);
//     }
// }

export interface Entity {
    _id: string;
    displayName: string;
    pluralName: string;
    uniqueName: string;
    description?: string;
    fields: EntityField[];
}

export interface EntityField {
    displayName: string;
    pluralName: string;
    uniqueName: string;
    description?: string;
    type: SingleLineOfText | MultipleLineOfText | WholeNumber | DecimalNumber | Currency | DateAndTime;
}

export interface SingleLineOfText {
    fieldType: FieldType;
    format: string;
    maxLength: number;
}

export interface MultipleLineOfText {
    fieldType: FieldType;
    maxLength: number;
}

export interface WholeNumber {
    fieldType: FieldType;
    format: string;
    minValue: number;
    maxValue: number;
}

export interface DecimalNumber {
    fieldType: FieldType;
    precision: number;
    minValue: number;
    maxValue: number;
}

export interface Currency {
    fieldType: FieldType;
    precision: number;
    minValue: number;
    maxValue: number;
}

export interface DateAndTime {
    fieldType: FieldType;
    behavior: 'user-local'; // string literal type
    format: DateTimeFormat;
}

// export enum FieldType {
//     SIMPLE = 'simple',
//     CALCULATED = 'calculated',
//     ROLLUP = 'rollup',
// }
type FieldType = 'simple' | 'calculated' | 'rollup'; // string literal (easier than enum)

// export enum DateTimeFormat {
//     DATE_ONLY = 'date-only',
//     DATE_AND_TIME = 'date-and-time',
// }
type DateTimeFormat = 'date-only' | 'date-and-time';
