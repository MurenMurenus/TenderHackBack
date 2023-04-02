import requests
from metr import calculator1, calculator2
from flask import Flask
from flask import request

app = Flask(__name__)


@app.route('/calc_drr', methods=['POST'])
async def calc_drr():
    data: dict = request.get_json()
    print(data)
    if request.method == 'POST':
        print(calculator1.Calculator1(int(data['clicks']), int(data['money']),
                                       site=float(data['site']),
                                       manager=float(data['manager']),
                                       traffic=float(data['traffic'])).compile())
        return calculator1.Calculator1(int(data['clicks']), int(data['money']),
                                       site=float(data['site']),
                                       manager=float(data['manager']),
                                       traffic=float(data['traffic'])).compile()
    return 400


@app.route('/calc', methods=['POST'])
async def calc():
    data: dict = request.get_json()
    if request.method == 'POST':
        return calculator2.Calculator2(int(data['budget']), int(data['orders']), int(data['sales'])).compile()
    return 400


app.run(port=5000)
