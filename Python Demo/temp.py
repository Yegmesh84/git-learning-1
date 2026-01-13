list_of_numbers = [3,99,12,1,7]

def squared_nums(nums_list):
    results_list=[]
    for num in nums_list:
        squared_nums = num **2
        results_list.append(squared_nums)
    return results_list

print(squared_nums(list_of_numbers))

    