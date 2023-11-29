from flask import Flask, jsonify
from finance import get_stock_history

app = Flask(__name__)


@app.route('/stock/<ticker>', methods=['GET'])
def get_stock(ticker):
    print("ticker", ticker)
    data = get_stock_history(ticker)
    return jsonify(data)


if __name__ == "__main__":
    app.run(port=8000, debug=True)
