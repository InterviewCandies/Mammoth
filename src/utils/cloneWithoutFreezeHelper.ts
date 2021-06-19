export function cloneWithoutFreeze<T>(items: T[]): T[] {
    return items.map(item => ({...item}));
}