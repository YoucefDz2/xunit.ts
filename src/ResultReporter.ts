import TestSuite from './TestSuite';
import { AssertionError } from 'assert';
import TestSuiteResults from './TestSuiteResults';

export default interface ResultReporter {
    runStarted(): void;
    suiteStarted(suite: TestSuite): void;
    testStarted(suite: TestSuite, test_name: string): void;
    testPassed(suite: TestSuite, test_name: string, duration: number): void;
    testFailed(suite: TestSuite, test_name: string, error: AssertionError, duration: number): void;
    testIncomplete(suite: TestSuite, test_name: string, duration: number): void;
    suiteCompleted(suite: TestSuite, results: TestSuiteResults, duration: number): void;
    runCompleted(results: TestSuiteResults[], duration: number): void;
}