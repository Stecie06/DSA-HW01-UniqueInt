const fs = require('fs');

class UniqueInteger {
    constructor() {
        this.seen = new Array(2047).fill(false); // Boolean array to track seen integers
        this.uniqueIntegers = [];
    }

    processFile(inputFilePath, outputFilePath) {
        const data = fs.readFileSync(inputFilePath, 'utf8').split('\n');
        data.forEach(line => this.readNextItemFromFile(line.trim())); 
        this.sortUniqueIntegers(); 
        this.writeOutput(outputFilePath); 
    }

    readNextItemFromFile(line) {
        if (line === '' || line.trim().length === 0) return; 

        const items = line.split(/\s+/); 

        if (items.length !== 1) return;

        try {
            const num = parseInt(items[0], 10); 
            if (isNaN(num) || num < -1023 || num > 1023) return; 
            const index = num + 1023; 
            if (!this.seen[index]) {
                this.seen[index] = true;
                this.uniqueIntegers.push(num); 
            }
        } catch (error) {
            return; 
        }
    }

    sortUniqueIntegers() {
        const n = this.uniqueIntegers.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (this.uniqueIntegers[j] > this.uniqueIntegers[j + 1]) {
                    [this.uniqueIntegers[j], this.uniqueIntegers[j + 1]] =
                    [this.uniqueIntegers[j + 1], this.uniqueIntegers[j]];
                }
            }
        }
    }

    writeOutput(outputFilePath) {
        const data = this.uniqueIntegers.join('\n');
        fs.writeFileSync(outputFilePath, data, 'utf8');
    }
}

const uniqueInt = new UniqueInteger();
const inputFilePath = '/dsa/hw01/sample_inputs/sample_input_02.txt';
const outputFilePath = '/dsa/hw01/sample_results/sample_input_02.txt_results.txt';
uniqueInt.processFile(inputFilePath, outputFilePath);

console.log("Processing complete. Output file generated at: " + outputFilePath);
