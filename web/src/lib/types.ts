export type ResultValue = string | number;

export type ADResults = Map<string, ResultValue>;

export interface ModelData {
    dim: number;
    results: ADResults;
}

export type CategoryData = Map<string, ModelData>;

export interface SortState {
    column: string | null;
    direction: "asc" | "desc" | null;
}
