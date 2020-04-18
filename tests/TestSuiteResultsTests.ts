import { Test, TestSuite } from "../xunit";
import TestSuiteResults from "../src/TestSuiteResults";
import { TestResult } from "../src/TestResult";

export default class TestSuiteResultsTests extends TestSuite {

    @Test()
    public CanGetPassedTests()
    {
        //arrange
        const results = new TestSuiteResults(new class X extends TestSuite{});
        results.addResult('test1', TestResult.Passed);
        results.addResult('test2', TestResult.Passed);
        results.addResult('test3', TestResult.Passed);
        results.addResult('test4', TestResult.Failed);
        results.addResult('test5', TestResult.Failed);
        results.addResult('test6', TestResult.Incomplete);

        //act
        const passed = results.count(TestResult.Passed);

        //assert
        this.assert.equal(3, passed);
    }

    @Test()
    public CanGetAllTests()
    {
        //arrange
        const results = new TestSuiteResults(new class X extends TestSuite{});
        results.addResult('test1', TestResult.Passed);
        results.addResult('test2', TestResult.Passed);
        results.addResult('test3', TestResult.Passed);
        results.addResult('test4', TestResult.Failed);
        results.addResult('test5', TestResult.Failed);
        results.addResult('test6', TestResult.Incomplete);

        //act
        const total = results.total();

        //assert
        this.assert.equal(6, total);
    }
}