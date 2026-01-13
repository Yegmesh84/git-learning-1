print("Hello! Welcome to our App! What tasks are we looking to obliterate today my Lord?")

tasks = []

while True:
    print("Choose an option my High Majesty!:")
    print("1. Add a task to conquer")
    print("2. View tasks to dismantle")
    print("3. Delete a foolish task")
    print("4. Exit application and move on to victory!")

    choice = input("Please enter your choice my liege (1-4): ")

    if choice == "1":
        task = input("Please enter a new task and let us aide you in your conquests!: ")
        tasks.append(task)
        print("Task added High Lord!")

    elif choice == "2":
        if not tasks:
            print("You have not yet listed any tasks to destroy my liege! Lets get going, victory waits for no man!")
        else:
            print("Your tasks my liege:")
            for i, task in enumerate(tasks, start=1):
                print(f"{i}. {task}")

    elif choice == "3":
        if not tasks:
            print("Uh oh you already completed all of your tasks for today High Lord. There are no tasks left for you to delete!")
        else:
            for i, task in enumerate(tasks, start=1):
                print(f"{i}. {task}")
            delete_task_input = input("Please enter your task number you would like to delete my liege: ")

        if "," in delete_task_input:
            print("Only one task at a time, my liege! No commas allowed.")
        else:
            try:
                delete_task = int(delete_task_input)
                if 1 <= delete_task <= len(tasks):
                    removed = tasks.pop(delete_task - 1)
                    print(f"I have removed: {removed} my Lord.")
                else:
                    print("That task number does not exist, my liege!")
            except ValueError:
                print("That was not a valid number, my liege!")

    elif choice == "4":
        print("Thank you for letting us help organize your day! We will be here when you need us oh mighty Majesty. Have a wonderful day and may your victories be plentiful!")
        break

    else:
        print("Im sorry we dont recognize that option High Lord. Please forgive us for such stupidity!")