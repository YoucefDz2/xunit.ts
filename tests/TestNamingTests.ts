import { Test, TestSuite } from "../tscunit";
import TestName from "../src/TestName";

export default class TestNamingTests extends TestSuite
{
    @Test()
    public CanConvertTitleCaseToWords()
    {
        //arrange
        const title_case = 'TheseAreWords';

        //act
        const sentence = TestName.toSentenceCase(title_case);

        //assert
        this.assert.equal('These Are Words', sentence);
    }
}