class Calculator1:
    def __init__(self, clicks: int, money: int, site: float = 0.03, manager: float = 0.1, traffic: float = 0.62):
        self.SITE = site
        self.MANAGER = manager
        self.TRAFFC = traffic
        self.clicks = clicks
        self.money = money

    def per_day_without_nds(self):
        return round((self.money * 1.2) / (self.clicks * self.SITE) * (self.clicks * self.TRAFFC * self.SITE) / 31)

    def per_day_with_nds(self):
        return round(self.per_day_without_nds() * 1.2)

    def lead_without_nds(self):
        return round((self.money * 1.2) / (self.clicks * self.SITE))

    def lead_with_nds(self):
        return round(1.2 * self.lead_without_nds())

    def one_week_with_nds(self):
        return round(
            7 * 1.2 * (self.money * 1.2) / (self.clicks * self.SITE) * (self.clicks * self.TRAFFC * self.SITE) / 31)

    def orders_per_week(self):
        return round((7 * self.TRAFFC * self.SITE * self.clicks) / 31)

    def sales_per_week(self):
        return round((7 * self.TRAFFC * self.SITE * self.MANAGER * self.clicks) / 31)

    def conversions_per_month(self):
        return round(4 * self.orders_per_week())

    def compile(self, stgs: bool = False):
        if stgs:
            return {'per_day_without_nds': str(self.per_day_without_nds()),
                    'lead_without_nds': str(self.lead_without_nds()),
                    'orders_per_week': str(self.orders_per_week()),
                    'per_day_with_nds': str(self.per_day_with_nds()),
                    'lead_with_nds': str(self.lead_with_nds()),
                    'sales_per_week': str(self.sales_per_week()),
                    'one_week_with_nds': str(self.one_week_with_nds()),
                    'conversions_per_month': str(self.conversions_per_month()),
                    'initial': {
                        'clicks': str(self.clicks),
                        'money': str(self.money),
                        'conversion': str(self.SITE * 100),
                        'manager_efficiency': str(self.MANAGER * 100),
                        'traffic': str(self.TRAFFC * 100)
                    }}
        return {'per_day_without_nds': str(self.per_day_without_nds()),
                    'lead_without_nds': str(self.lead_without_nds()),
                    'orders_per_week': str(self.orders_per_week()),
                    'per_day_with_nds': str(self.per_day_with_nds()),
                    'lead_with_nds': str(self.lead_with_nds()),
                    'sales_per_week': str(self.sales_per_week()),
                    'one_week_with_nds': str(self.one_week_with_nds()),
                    'conversions_per_month': str(self.conversions_per_month()),
                    'initial': {
                        'clicks': str(self.clicks),
                        'money': str(self.money),
                        'conversion': str(self.SITE * 100),
                        'manager_efficiency': str(self.MANAGER * 100),
                        'traffic': str(self.TRAFFC * 100)
                    }}
