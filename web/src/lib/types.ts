export type ResultValue = string | number;

export type ModelResults = Map<string, ResultValue>;

export type CategoryData = Map<string, ModelResults>;

export interface SortState {
    column: string | null;
    direction: "asc" | "desc" | null;
}
