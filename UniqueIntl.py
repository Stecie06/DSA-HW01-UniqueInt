class UniqueInt:
    def __init__(self):
        self.seen = [False] * 2047  
        self.unique_integers = []

    def observe_file(self, input_file_path, output_file_path):
        with open(input_file_path, 'r') as file:
            for line in file:
                self.check_line(line.strip())
        self.sort_unique_integers()
        self.write_output(output_file_path)

    def check_line(self, line):
        if line == "" or line.isspace():
            return  
        
        try:
            num = int(line)
            if not (-1023 <= num <= 1023):
                return  
            index = num + 1023 
            if not self.seen[index]:
                self.seen[index] = True
                self.unique_integers.append(num)
        except ValueError:
            return  
    
    def sort_unique_integers(self):
        # Implement bubble sort (or any simple sort) manually
        n = len(self.unique_integers)
        for i in range(n - 1):
            for j in range(n - 1 - i):
                if self.unique_integers[j] > self.unique_integers[j + 1]:
                    # Swap elements if out of order
                    self.unique_integers[j], self.unique_integers[j + 1] = self.unique_integers[j + 1], self.unique_integers[j]

    def write_output(self, output_file_path):
        with open(output_file_path, 'w') as file:
            for num in self.unique_integers:
                file.write(f"{num}\n")


# Example Usage
unique_int = UniqueInt()
input_file = '/dsa/hw01/sample_inputs/sample_input_02.txt'
output_file = '/dsa/hw01/sample_results/sample_input_02.txt_results.txt'
unique_int.observe_file(input_file, output_file)
