import * as csvParser from 'csv-parse';

export default {
    parse: ({input, options}: { input: string, options: csvParser.Options }) => {
        csvParser.parse(input, options)
    }
}