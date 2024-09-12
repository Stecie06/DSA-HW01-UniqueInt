### README: Unique Integers from File

#### Project Overview:
This project is designed to process an input file containing integers, extract unique integers from the file, and output them in a sorted order to a new file. The program handles variations in input formatting, such as spaces, invalid lines, and ensures the output meets specific criteria. It avoids using standard library functions like sorting, thus implementing its own sorting algorithm.

#### Files:
- **Input File**: A text file that contains one integer per line. Some lines may be invalid due to non-integer values, empty spaces, or multiple integers. Valid integers range from -1023 to 1023.
- **Output File**: A file containing only the unique integers from the input, sorted in increasing order, one per line.

#### Class: `UniqueInt`
This class handles the reading, processing, sorting, and writing of integers from the input file.

- **Attributes:**
  - `self.seen`: A boolean array of size 2047 that tracks whether an integer (from -1023 to 1023) has been encountered.
  - `self.unique_integers`: A list to store unique integers encountered in the input file.

- **Methods:**
  - **`observe_file(input_file_path, output_file_path)`**:
    Reads the input file line by line, processes each line to extract valid integers, and writes the sorted unique integers to the output file.
  
  - **`check_line(line)`**:
    Processes each line of the file, checking for valid integers within the range of -1023 to 1023. It skips lines that are empty, contain non-integer values, or are out of the valid range.
  
  - **`sort_uniqueIntegers()`**:
    Implements a bubble sort algorithm to sort the collected unique integers in increasing order.
  
  - **`write_output(output_file_path)`**:
    Writes the sorted integers, one per line, into the specified output file.

#### Execution:

To run the program, use the following steps:

1. **Input File**: Provide a text file with integers, ensuring that invalid lines (e.g., non-integers, blank spaces, multiple integers per line) are handled.
2. **Run the Script**: The `observe_file()` method processes the file, filters unique integers, sorts them, and writes the output to the specified file.
3. **Output**: The sorted unique integers are saved in a separate file, each on a new line.

```python
unique_int = UniqueInt()
input_file = '/dsa/hw01/sample_inputs/sample_input_02.txt'
output_file = '/dsa/hw01/sample_results/sample_input_02.txt_results.txt'
unique_int.observe_file(input_file, output_file)
```

#### Important Notes:
- The program skips lines that contain non-integer values, lines with multiple integers, and lines that are blank or have only spaces.
- The sorting is implemented manually without using built-in sorting functions for compliance with the assignment's restrictions.
- The program handles memory efficiently by using a fixed-size boolean array for tracking unique integers.

Requirements:
- Python 3.x
- Valid input file with integers.

Example:
For an input file containing:
```
5
14
5
-9
62
-1
-9
-9
```
The output file will contain:
```
-9
-1
5
14
62
```
