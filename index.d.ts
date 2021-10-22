declare module 'skip-if' {
    import { AutoCurry } from 'auto-curry'
    type Condition<T extends boolean = boolean> = T | (() => T)
    export function evaluateCondition<T extends boolean>(condition: Condition<T>): T
    const skipIf: AutoCurry<
        (condition: Condition, name: string, test: jest.ProvidesCallback) => void
        >
    export default skipIf
}
