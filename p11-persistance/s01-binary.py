import pickle

# save data, write in binary mode, serialize data
data = {"name": "Alice", "age": 30, "city": "New York"}
with open("data.pkl", "wb") as f:
    pickle.dump(data, f)


# show hexdump of the file
import os
os.system("hexdump -C data.pkl")
print()


# load data, read in binary mode, deserialize data
with open("data.pkl", "rb") as f:
    data2 = pickle.load(f)
print(data2)

