import json

# save data, write in text mode, serialize data
data = {"name": "Alice", "age": 30, "city": "New York"}
with open("data.json", "w") as f:
    json.dump(data, f)


# show content of the file
import os
os.system("cat data.json")
print() # add a newline for better output readability
print()


# load data, read in text mode, deserialize data
with open("data.json", "r") as f:
    data2 = json.load(f)
print(data2)
