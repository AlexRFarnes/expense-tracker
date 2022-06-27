categories = Category.create([
    {
        category: "Food",
        description: "This is the category for all expenses related to food."
    },
    {
        category: "Bills",
        description: "This is the category for all expenses related to services and rent."
    }
])

expenses = Expense.create([
    {
        title: "Dinner",
        description: "McDonalds",
        amount: 120.00,
        category: categories.first
    },
    {
        title: "Lunch",
        description: "All you can eat BBQ",
        amount: 700.00,
        category: categories.first
    }
])