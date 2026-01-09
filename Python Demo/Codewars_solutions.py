def evenorodd(number):
    if number % 2 == 0:
        return "even"
    else:
        return "odd"
    

def string_to_number(s):
    return int(s)


def no_space(x):
    return x.replace(" ","")


def get_count(sentence):
    return sum(1 for char in sentence.lower() if char in "aeiou")