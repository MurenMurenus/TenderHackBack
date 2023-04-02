class Calculator2:
    def __init__(self, budget: int, orders: int, sales: int):
        self.budget = budget
        self.orders = orders
        self.sales = sales

    def income(self):
        return self.sales - self.budget

    def price(self):
        return self.budget // self.orders

    def roi(self):
        return round(self.income() / self.budget * 100)

    def drr(self):
        return round(self.budget / self.sales * 100)

    def compile(self):
        return {'price': str(self.price()),
                'income': str(self.income()),
                'roi': str(self.roi()),
                'drr': str(self.drr())}

